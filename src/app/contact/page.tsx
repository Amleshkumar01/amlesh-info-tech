"use client";

import { useState, Suspense, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, Phone, MessageSquare, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="bg-slate-50 min-h-screen flex items-center justify-center font-sans text-slate-500">
        Loading contact details...
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const searchParams = useSearchParams();
  const queryMessage = searchParams.get("message") || "";
  const queryService = searchParams.get("service") || "web_dev";

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: queryService,
      message: queryMessage,
      website: "",
    },
  });

  useEffect(() => {
    if (queryMessage) setValue("message", queryMessage);
    if (queryService) setValue("service", queryService);
  }, [queryMessage, queryService, setValue]);

  const onSubmitForm = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please verify your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">Get in Touch</span>
          <h1 className="font-heading text-3xl sm:text-5xl font-bold text-[#0A1628] leading-tight">
            Start Your Project
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Tell us about your requirements. Our engineering team will review and get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm space-y-6">
              <h2 className="font-heading text-2xl font-bold text-[#0A1628]">Contact Information</h2>
              
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800">Our Office</strong>
                    <span>Remote-First, India</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800">Email Address</strong>
                    <a href="mailto:info@amleshinfotech.com" className="hover:text-[#2563EB] transition-colors">
                      info@amleshinfotech.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-800">Phone Number</strong>
                    <a href="tel:+919905929106" className="hover:text-[#2563EB] transition-colors">
                      +91 99059 29106
                    </a>
                  </div>
                </li>
              </ul>

              {/* WhatsApp CTA Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/919905929106?text=Hi%20Amlesh%20Info%20Tech,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-4 shadow-sm hover:translate-y-[-1px] transition-all"
                >
                  <MessageSquare className="h-5 w-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Operational SLA & Commitment Card */}
            <div className="bg-[#0A1628] text-white border border-slate-850 rounded-2xl p-5 sm:p-6 shadow-md space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Our Engineering Commitments
              </h3>
              <div className="space-y-3.5 text-xs text-slate-300 font-sans">
                <div className="flex justify-between border-b border-slate-805 pb-2">
                  <span className="font-medium text-slate-400">Response SLA</span>
                  <span className="font-bold text-white">Under 3 Hours</span>
                </div>
                <div className="flex justify-between border-b border-slate-805 pb-2">
                  <span className="font-medium text-slate-400">Security Standard</span>
                  <span className="font-bold text-white">OWASP Compliance</span>
                </div>
                <div className="flex justify-between border-b border-slate-805 pb-2">
                  <span className="font-medium text-slate-400">Collaboration Model</span>
                  <span className="font-bold text-white">Dedicated Slack & GitHub</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-slate-400">Coverage</span>
                  <span className="font-bold text-white">National (All Indian Startups)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Django / Next.js Contact Form */}
          <div className="lg:col-span-7">
              <Card className="border border-slate-100 rounded-2xl shadow-sm bg-white">
              <CardContent className="p-5 sm:p-8">
                <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-[#0A1628] mb-4">Send a Message</h2>

                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                  </div>
                  
                  {/* Status Banners */}
                  {submitStatus === "success" && (
                    <div className="flex items-start gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl p-4 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold">Inquiry Sent!</strong>
                        <span>Thank you. Our team will contact you within 24 hours.</span>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-start gap-2 bg-red-50 text-red-800 border border-red-200 rounded-xl p-4 text-sm">
                      <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold">Submission Failed</strong>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-700 block uppercase">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your Full Name"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-[#fffefa] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] ${
                          errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 pt-0.5">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-700 block uppercase">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your Email Address"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email format",
                          },
                        })}
                        className={`w-full px-4 py-2.5 rounded-lg border bg-[#fffefa] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] ${
                          errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 pt-0.5">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Phone (Optional) */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-700 block uppercase">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="Your Phone (Optional)"
                        {...register("phone")}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-[#fffefa] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                      />
                    </div>

                    {/* Service Choice */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs font-semibold text-slate-700 block uppercase">
                        Service Needed *
                      </label>
                      <select
                        id="service"
                        {...register("service", { required: "Service choice is required" })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-[#fffefa] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                      >
                        <option value="web_dev">Web Design & Dev</option>
                        <option value="app_dev">Mobile App Dev</option>
                        <option value="cybersecurity">Cybersecurity Audits</option>
                        <option value="salesforce">Salesforce CRM</option>
                        <option value="ai_ml">AI/ML Solutions</option>
                        <option value="other">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirements / Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-700 block uppercase">
                      Message / Requirements *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project, target audience, or specific requirements..."
                      {...register("message", { required: "Message details are required" })}
                      className={`w-full px-4 py-2.5 rounded-lg border bg-[#fffefa] text-sm focus:outline-none focus:ring-1 focus:ring-[#2563EB] ${
                        errors.message ? "border-red-500 focus:ring-red-500" : "border-slate-200"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-500 pt-0.5">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2563EB] hover:bg-[#2563EB]/95 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"} <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
