import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amlesh Info Tech | Smart Tech. Real Results.",
  description:
    "We build modern digital solutions that grow Indian startups and young entrepreneurs. From web design to AI/ML & Salesforce.",
  keywords: [
    "Amlesh Info Tech",
    "Indian Tech Partner",
    "Next.js Web Dev India",
    "Mobile Apps India",
    "Salesforce Apex LWC India",
    "Cybersecurity Audit India",
    "AI ML Solutions India",
    "Indian Startups Software Partner",
  ],
  authors: [{ name: "Amlesh Info Tech" }],
  openGraph: {
    title: "Amlesh Info Tech | Smart Tech. Real Results.",
    description:
      "Modern web design, app development, cybersecurity, Salesforce integrations, and AI/ML solutions for businesses and startups in India.",
    url: "https://amleshinfotech.com",
    siteName: "Amlesh Info Tech",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-slate-900">
        <Navbar />
        <main className="relative z-10 flex-grow">{children}</main>
        
        {/* Footer Section */}
        <footer className="relative overflow-hidden border-t border-slate-800/80 bg-[linear-gradient(180deg,#0A1628_0%,#07111F_100%)] text-slate-300 shadow-[0_-20px_60px_rgba(15,23,42,0.18)]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-slate-800 pb-8">
              {/* Col 1: About */}
              <div className="space-y-4">
                <Link href="/">
                  <Logo light />
                </Link>
                <p className="text-sm text-slate-400 max-w-xs">
                  &quot;Smart Tech. Real Results.&quot; Empowering Indian startups and businesses with high-grade, affordable digital solutions.
                </p>
                <div className="flex gap-4 pt-2">
                  <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.675-1.41-1.155-1.695-.39-.21-.945-.72-.015-.735.87-.015 1.485.81 1.695 1.155.945 1.605 2.445 1.14 3.045.87.09-.675.36-1.14.66-1.41-2.655-.3-5.445-1.335-5.445-5.91 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-[#2563EB] transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Col 2: Services */}
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">Mobile App Dev</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">Cybersecurity Audits</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">Salesforce Apex/LWC</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">AI/ML Automation</Link>
                  </li>
                </ul>
              </div>

              {/* Col 3: Sitemap */}
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Sitemap</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Col 4: Contact Info */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Get In Touch</h3>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>Remote-First, India</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#2563EB] shrink-0" />
                    <a href="mailto:info@amleshinfotech.com" className="hover:text-white transition-colors">
                      info@amleshinfotech.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#2563EB] shrink-0" />
                    <a href="tel:+919905929106" className="hover:text-white transition-colors">
                      +91 99059 29106
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
              <p>&copy; {new Date().getFullYear()} Amlesh Info Tech. Built for Indian Startups. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
