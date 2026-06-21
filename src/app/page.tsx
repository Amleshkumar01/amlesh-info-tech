"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Shield, Database, Brain, CheckCircle, Star, Sparkles, Layers, Target, Code2, Cloud, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  const services = [
    {
      title: "Mobile App Development",
      desc: "iOS and Android apps with clean UI, smooth navigation, and API-ready architecture for fast product launches.",
      icon: Smartphone,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      title: "Security Hardening",
      desc: "Application security reviews, access control checks, secure authentication flows, and OWASP-focused protection.",
      icon: Shield,
      color: "text-rose-600 bg-rose-50",
    },
    {
      title: "Web App Development",
      desc: "Fast, responsive business websites and dashboards built with modern React and Next.js patterns.",
      icon: Code2,
      color: "text-slate-700 bg-slate-100",
    },
    {
      title: "Cloud Deployment",
      desc: "Reliable hosting, deployment pipelines, environment setup, and production release support.",
      icon: Cloud,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      title: "Web3 dApp Dev",
      desc: "Custom decentralized applications, Next.js dashboard wrappers, and seamless wallet integrations (Wagmi, Ethers).",
      icon: Globe,
      color: "text-blue-600 bg-blue-50",
    },
    {
      title: "Smart Contract Audit",
      desc: "Security audits, reentrancy scans, vulnerability assessments, and OWASP-grade solidity contract verification.",
      icon: Shield,
      color: "text-red-600 bg-red-50",
    },
    {
      title: "Interactive 3D Web",
      desc: "Futuristic 3D interfaces, perspective layouts, CSS-3D card models, and dynamic WebGL styles.",
      icon: Smartphone,
      color: "text-purple-600 bg-purple-50",
    },
    {
      title: "Tokenomics & DeFi",
      desc: "Staking mechanics, custom liquidity pools, token supply economics, and custom ERC-20 / NFT engineering.",
      icon: Database,
      color: "text-sky-600 bg-sky-50",
    },
    {
      title: "AI/ML Security Bots",
      desc: "AI-driven automated smart contract scanning checkers and transaction surveillance bots.",
      icon: Brain,
      color: "text-teal-600 bg-teal-50",
    },
    {
      title: "Maintenance & Support",
      desc: "Post-launch updates, bug fixes, monitoring, and ongoing feature improvements for growing products.",
      icon: Wrench,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  const stats = [
    { value: "12+", label: "Web3 Projects" },
    { value: "15+", label: "Contracts Audited" },
    { value: "100%", label: "Security Record" },
    { value: "24/7", label: "Active Node Support" },
  ];

  const differentiators = [
    {
      title: "Fixed Startup-Friendly Pricing",
      desc: "No hidden retainers, no bloated overhead. We provide fixed-price scope deliverables designed specifically for early-stage budgets.",
    },
    {
      title: "Direct Access & Collaboration",
      desc: "We don't hide behind bloated ticketing structures. We operate in your timezone, providing direct communication, transparency, and regular progress reports.",
    },
    {
      title: "Full-Cycle Product Building",
      desc: "We take care of the entire lifecycle. From initial UI blueprints and clean database coding to cloud deployments and system auditing.",
    },
    {
      title: "Modern & Secure Tech Stack",
      desc: "Deep hands-on experience in Next.js, robust Salesforce CRM solutions (Apex/LWC), python automations, and secure OWASP audits.",
    },
  ];

  const testimonials = [
    {
      quote: "Amlesh Info Tech rebuilt our e-commerce portal from scratch. The performance increase was immediate, and their engineering team is always responsive and collaborative.",
      author: "Rajesh Sharma",
      role: "Founder, KrishiFarm India",
    },
    {
      quote: "As a student founder, budget was my main concern. They built our startup MVP on time and within our exact financial limit. Exceptional service!",
      author: "Ananya Patel",
      role: "Co-Founder, EduTech India",
    },
  ];

  // Subtle Animation Configs
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20 md:py-32">
        {/* Elegant Grid Backdrop Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a16280a_1px,transparent_1px),linear-gradient(to_bottom,#0a16280a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Column */}
            <motion.div
              className="lg:col-span-7 space-y-6 text-left"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/85 px-3 py-1 text-xs font-semibold text-[#2563EB] tracking-[0.22em] uppercase shadow-sm backdrop-blur">
                Digital Delivery Partner
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1628] leading-[1.05]">
                Premium websites, apps, and automation that feel sharp and ship fast.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                We design polished digital products for startups and growing businesses, combining clean UI, dependable engineering, and practical delivery.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact">
                  <Button className="bg-[#0A1628] hover:bg-[#0A1628]/95 text-white font-medium px-6 py-6 text-base rounded-full shadow-md shadow-slate-900/10 transition-all hover:-translate-y-[1.5px]">
                    Start a Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-700 font-medium px-6 py-6 text-base rounded-full">
                    View Work
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Column */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.08),_transparent_30%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:p-6">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.06)_1px,transparent_1px)] bg-[size:3.25rem_3.25rem] opacity-70" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-amber-400 shadow-sm" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-sm" />
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
                      <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
                      Premium delivery system
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-[#0A1628] p-5 text-white shadow-lg">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">Launch focus</span>
                      <h3 className="mt-3 text-2xl font-heading font-black leading-tight">Clear, premium, conversion-ready.</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">Strategy, design, and build are aligned from day one so the product feels sharp and ships cleanly.</p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-blue-50 p-2 text-[#2563EB]"><Layers className="h-4 w-4" /></div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Build</p>
                            <p className="text-sm font-semibold text-slate-900">Fast, clean implementation</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-emerald-50 p-2 text-emerald-600"><Target className="h-4 w-4" /></div>
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Outcome</p>
                            <p className="text-sm font-semibold text-slate-900">Focus on leads and trust</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Speed</p>
                      <p className="mt-2 text-xl font-bold text-slate-900">Rapid</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Quality</p>
                      <p className="mt-2 text-xl font-bold text-slate-900">Polished</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Support</p>
                      <p className="mt-2 text-xl font-bold text-slate-900">Hands-on</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-[#0A1628] text-white py-12 border-t border-slate-800 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <span className="text-3xl md:text-4xl font-bold text-[#2563EB] block">{stat.value}</span>
                <span className="text-xs md:text-sm text-slate-400 tracking-wider uppercase block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">Our Offerings</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628]">
              Comprehensive Tech Solutions for Startups & SMBs
            </h2>
            <p className="text-slate-600">
              We design and construct high-performance digital systems that help your business scale efficiently and stay secure.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={fadeInUp}>
                  <Card className="h-full border border-slate-100/80 hover:border-[#2563EB]/25 bg-white hover:bg-slate-50/30 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] rounded-2xl overflow-hidden group">
                    <CardContent className="p-8 space-y-5">
                      <div className={`p-3.5 rounded-xl w-fit transition-transform duration-300 group-hover:scale-110 ${service.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A1628] font-heading">{service.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                      <Link
                        href="/services"
                        className="inline-flex items-center text-sm font-semibold text-[#2563EB] hover:text-[#2563EB]/85 transition-colors gap-1 pt-2"
                      >
                        Learn more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">Our Differentiators</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628]">
                Why Growing Startups Choose Amlesh Info Tech
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We combine startup speed with enterprise development standards to ensure you get professional, secure code without the heavy agency price tag.
              </p>
              <div className="pt-2">
                <Link href="/about">
                  <Button className="bg-[#0A1628] hover:bg-[#0A1628]/95 text-white rounded-xl">
                    More About Our Team
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Col Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {differentiators.map((diff) => (
                <div key={diff.title} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <h3 className="font-bold text-slate-800 text-base">{diff.title}</h3>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed pl-8">{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">Social Proof</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A1628]">
              Delivering Value to Local Innovators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((test) => (
              <Card key={test.author} className="border border-slate-100 rounded-2xl shadow-sm bg-slate-50/30">
                <CardContent className="p-8 space-y-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic text-sm leading-relaxed">&ldquo;{test.quote}&rdquo;</p>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">{test.author}</h4>
                    <span className="text-xs text-slate-500">{test.role}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="bg-gradient-to-r from-[#0A1628] to-[#122A4E] text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Ready to Accelerate Your Digital Transformation?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Book a free 30-minute scope session with our engineering team. We&apos;ll map your requirements and structure a clear pilot proposal.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="bg-[#2563EB] hover:bg-[#2563EB]/95 text-white px-6 py-6 rounded-xl font-semibold shadow-md transition-all hover:translate-y-[-1.5px]">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
