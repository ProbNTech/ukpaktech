import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin, VENDOR_LOGO_BUCKET } from "@/lib/supabase";
import { getVendorByToken } from "@/lib/vendorService";

export const runtime = "nodejs";

const MAX_BYTES = 2 * 1024 * 1024; // 2 MB
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/svg+xml": "svg",
};

/** POST multipart/form-data { token, file } → { url } */
export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const token = String(form.get("token") ?? "");
    const file = form.get("file");

    if (!token)
      return NextResponse.json({ error: "Missing token." }, { status: 400 });
    if (!(file instanceof File))
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });

    const vendor = await getVendorByToken(token);
    if (!vendor)
      return NextResponse.json(
        { error: "This link is invalid or has expired." },
        { status: 404 }
      );

    if (!ALLOWED.includes(file.type))
      return NextResponse.json(
        { error: "Logo must be a PNG, JPG, WEBP or SVG." },
        { status: 400 }
      );
    if (file.size > MAX_BYTES)
      return NextResponse.json(
        { error: "Logo must be under 2 MB." },
        { status: 400 }
      );

    const supabase = getSupabaseAdmin();
    const ext = EXT[file.type] ?? "png";
    const path = `${vendor.slug}/logo.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error } = await supabase.storage
      .from(VENDOR_LOGO_BUCKET)
      .upload(path, buffer, { contentType: file.type, upsert: true });

    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    const { data } = supabase.storage.from(VENDOR_LOGO_BUCKET).getPublicUrl(path);
    // Cache-bust so an updated logo shows immediately.
    const url = `${data.publicUrl}?v=${Date.now()}`;

    return NextResponse.json({ url });
  } catch (error) {
    console.error("Portfolio logo upload error:", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}
