import { NextResponse } from "next/server";

// Simple in-memory rate limiting map
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const ALLOWED_SERVICES = new Set([
  "web_dev",
  "app_dev",
  "cybersecurity",
  "salesforce",
  "ai_ml",
  "other",
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 5;  // 5 requests per minute limit

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - record.lastReset > windowMs) {
    record.count = 1;
    record.lastReset = now;
    return false;
  }

  record.count += 1;
  return record.count > maxRequests;
}

function sanitizeInput(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const requestOrigin = new URL(request.url).origin;

  if (origin && origin !== requestOrigin) {
    return false;
  }

  if (referer && !referer.startsWith(requestOrigin)) {
    return false;
  }

  return true;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const candidate = forwardedFor?.split(",")[0]?.trim() || realIp?.trim() || "127.0.0.1";

  return candidate;
}

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: "Forbidden request origin." }, { status: 403 });
    }

    // 1. IP-based Rate Limiting
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please wait a minute and try again." },
        { status: 429 }
      );
    }

    const body = (await request.json()) as ContactPayload;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const website = typeof body.website === "string" ? body.website.trim() : "";

    if (website) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    // 2. Server-side validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (name.length > 80 || email.length > 120 || phone.length > 25 || message.length > 2000) {
      return NextResponse.json({ error: "Input is too long." }, { status: 400 });
    }

    // Email validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    if (!ALLOWED_SERVICES.has(service)) {
      return NextResponse.json({ error: "Invalid service selection." }, { status: 400 });
    }

    if (phone && !/^[+()\-\s\d]{7,25}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    // 3. Input Sanitization to prevent XSS
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : "";
    const sanitizedService = sanitizeInput(service);
    const sanitizedMessage = sanitizeInput(message);

    if (process.env.NODE_ENV !== "production") {
      console.log("----------------------------------");
      console.log("New Amlesh Info Tech Inquiry Received (Secured & Sanitized):");
      console.log(`- Date: ${new Date().toISOString()}`);
      console.log(`- Client Name: ${sanitizedName}`);
      console.log(`- Email Address: ${sanitizedEmail}`);
      console.log(`- Phone Number: ${sanitizedPhone || "Not Provided"}`);
      console.log(`- Service choice: ${sanitizedService}`);
      console.log(`- Message details: ${sanitizedMessage}`);
      console.log("----------------------------------");
    }

    // Success response
    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
