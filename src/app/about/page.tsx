"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Heart, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const values = [
    {
      title: "Our Mission",
      desc: "To democratize high-grade software solutions, bringing enterprise-level code, cybersecurity audits, and AI tools to early-stage Indian startups and SMBs at accessible budgets.",
      icon: Heart,
      color: "text-red-600 bg-red-50 border-red-100",
    },
    {
      title: "Our Vision",
      desc: "To build a vibrant digital ecosystem across India, enabling entrepreneurs, student innovators, and growing businesses to run highly efficient, modern operations.",
      icon: Eye,
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">Who We Are</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#0A1628]">
            About Amlesh Info Tech
          </h1>
          <p className="text-slate-600 text-lg">
            A software consulting agency built to empower Indian startups, local businesses, and youth entrepreneurs.
          </p>
        </div>

        {/* Mission & Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Card className="h-full border border-slate-100 rounded-2xl bg-white shadow-sm overflow-hidden">
                  <CardContent className="p-8 space-y-4">
                    <div className={`p-3 rounded-xl border w-fit ${val.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-[#0A1628]">{val.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Intro Section */}
        <motion.div
          className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-2xl p-8 md:p-12 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Col: Founder Bio */}
            <div className="md:col-span-12 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2563EB] tracking-wide uppercase">
                Founder Profile
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0A1628]">Amlesh Kumar</h2>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-wider">
                Founder & Lead Systems Architect
              </p>
              
              <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  Amlesh holds a <strong>B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning</strong> from <strong>LNCT University</strong>.
                </p>
                <p>
                  Recognizing the high cost and complexity associated with professional tech consulting for early-stage founders and small businesses, he established Amlesh Info Tech. His focus is on bridging academic software practices with high-performance industry standards.
                </p>
                <p>
                  Under his leadership, the firm specializes in audited smart contracts (Solidity/Rust), decentralized Web3 frontend integrations, custom 3D perspective web models, and real-time security systems.
                </p>
              </div>

              {/* Founder Stats/Keywords */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#2563EB] shrink-0" />
                  <span className="text-xs text-slate-500">B.Tech CSE AI/ML</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#2563EB] shrink-0" />
                  <span className="text-xs text-slate-500">LNCT University</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-xs text-slate-500">Remote-First, India</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
