import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

const SHEET_ID = process.env.CONTACT_SHEET_ID!;

const HEADERS = [
  "Timestamp",
  "Full Name",
  "Email",
  "Phone",
  "Organisation",
  "Enquiry Type",
  "Message",
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, enquiryType, message, phone, organisation } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !enquiryType?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, enquiry type, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    await appendRow(SHEET_ID, "Submissions", HEADERS, [
      timestamp,
      name.trim(),
      email.trim(),
      phone?.trim() || "",
      organisation?.trim() || "",
      enquiryType.trim(),
      message.trim(),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
