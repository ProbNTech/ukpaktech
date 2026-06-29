import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { getSupabaseAdmin, VENDOR_LOGO_BUCKET } from "@/lib/supabase";

export const runtime = "nodejs";

const MAX_BYTES = 2 * 1024 * 1024; // 2 MB
const ALLOWED = ["image/png", "image/jpeg", "image/webp", "image/svg+xml"];
const EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/svg+xml": "svg",
};

/**
 * POST multipart/form-data { file } → { url }
 *
 * Logo upload for the membership stage, before a vendor row (and its magic-link
 * token) exists. Files land under `pending/` with a random name; the returned
 * URL is stored on the application and travels with the vendor through approval.
 */
export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!(file instanceof File))
      return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
    if (!ALLOWED.includes(file.type))
      return NextResponse.json(
        { error: "Logo must be a PNG, JPG, WEBP or SVG." },
        { status: 400 }
      );
    if (file.size > MAX_BYTES)
      return NextResponse.json({ error: "Logo must be under 2 MB." }, { status: 400 });

    const supabase = getSupabaseAdmin();
    const ext = EXT[file.type] ?? "png";
    const path = `pending/${randomBytes(12).toString("hex")}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const { error } = await supabase.storage
      .from(VENDOR_LOGO_BUCKET)
      .upload(path, buffer, { contentType: file.type, upsert: false });

    if (error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    const { data } = supabase.storage.from(VENDOR_LOGO_BUCKET).getPublicUrl(path);
    return NextResponse.json({ url: data.publicUrl });
  } catch (error) {
    console.error("Membership logo upload error:", error);
    return NextResponse.json({ error: "Upload failed." }, { status: 500 });
  }
}
