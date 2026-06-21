"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Shield, Database, Brain, Code2, Cloud, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectPlanner } from "@/components/project-planner";

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "Mobile App Development",
      desc: "We build polished iOS and Android applications with fast onboarding, reliable API integration, and scalable app architecture.",
      icon: Smartphone,
      techStack: ["React Native", "Flutter", "TypeScript", "Firebase", "REST APIs", "App Store / Play Store"],
      deliverables: ["Mobile-first UX flows", "Push notifications", "API integration", "Release and store support"],
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "Security Hardening",
      desc: "We secure your applications with authentication reviews, permission checks, dependency audits, and OWASP-aligned defenses.",
      icon: Shield,
      techStack: ["OWASP", "JWT", "RBAC", "Security Headers", "Audit Logs", "Dependency Scanning"],
      deliverables: ["Auth flow review", "Access control hardening", "Input validation checks", "Threat mitigation recommendations"],
      color: "text-rose-600 bg-rose-50 border-rose-100",
    },
    {
      title: "Web App Development",
      desc: "High-performance websites, dashboards, and business portals built for speed, clarity, and conversions.",
      icon: Code2,
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
      deliverables: ["Landing pages", "Admin dashboards", "Custom workflows", "Responsive layouts"],
      color: "text-slate-700 bg-slate-50 border-slate-200",
    },
    {
      title: "Cloud Deployment & DevOps",
      desc: "We handle deployment pipelines, environment setup, and release workflows so your app stays stable in production.",
      icon: Cloud,
      techStack: ["Vercel", "Docker", "CI/CD", "GitHub Actions", "AWS"],
      deliverables: ["Production deploys", "Environment management", "Release automation", "Monitoring setup"],
      color: "text-cyan-600 bg-cyan-50 border-cyan-100",
    },
    {
      title: "Web3 dApp Development",
      desc: "We engineer state-of-the-art Web3 interfaces, Next.js frontend wrappers, and robust wallet connection workflows to bridge web clients with node providers.",
      icon: Globe,
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Wagmi", "RainbowKit", "Ethers.js"],
      deliverables: ["Wallet connect button integrations", "RPC node synchronization", "Real-time contract reads/writes", "Gas optimization logic"],
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "Smart Contract Audits",
      desc: "Protect your protocols and user funds. We perform strict static/dynamic analysis and manual audits on Solidity and Rust contracts to block hacks and verify security.",
      icon: Shield,
      techStack: ["Solidity", "Rust", "Slither", "Mythril", "Hardhat", "Foundry"],
      deliverables: ["Reentrancy vulnerability checks", "Mathematical overflow protection", "Gas consumption reports", "OWASP Web3 Audit certificates"],
      color: "text-red-600 bg-red-50 border-red-100",
    },
    {
      title: "Interactive 3D Web",
      desc: "Bespoke, immersive websites that feel alive. We craft interactive 3D layouts, CSS perspective parallax grids, and WebGL animations.",
      icon: Smartphone,
      techStack: ["Three.js", "React Three Fiber", "Framer Motion", "CSS 3D Transforms", "WebGL"],
      deliverables: ["3D Parallax tilt containers", "Smooth scroll-triggered animations", "SVG mesh animations", "Bespoke designer gridlines"],
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      title: "Tokenomics & DeFi Development",
      desc: "Architect secure financial mechanics. We code staking pools, automated yield protocols, NFT mint contract layers, and custom token distributions.",
      icon: Database,
      techStack: ["Solidity", "ERC-20 / ERC-721 / ERC-1155", "Foundry", "DeFi Bridges", "Chainlink Oracles"],
      deliverables: ["Custom ERC-20 staking pools", "NFT smart minting gas optimizers", "Automated market makers (AMMs)", "Chainlink price feeds"],
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      title: "AI/ML Security Audit Bots",
      desc: "Automated vulnerability surveillance. We deploy custom machine-learning scanners that audit smart contracts and inspect real-time transaction anomalies.",
      icon: Brain,
      techStack: ["Python", "PyTorch", "OpenAI APIs", "LangChain", "Vector databases", "Graph Neural Networks"],
      deliverables: ["Automated code parsing checks", "Transaction bug alarms", "Autonomous gas estimators", "AI audit generation blocks"],
      color: "text-teal-600 bg-teal-50 border-teal-100",
    },
    {
      title: "Maintenance & Support",
      desc: "Post-launch support, feature updates, fixes, and performance monitoring to keep your product healthy after release.",
      icon: Wrench,
      techStack: ["Bug tracking", "Performance monitoring", "Feature releases", "Support SLAs"],
      deliverables: ["Ongoing updates", "Issue triage", "Health monitoring", "Post-launch improvements"],
      color: "text-amber-600 bg-amber-50 border-amber-100",
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
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">Our Expertise</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#0A1628]">
            Professional Tech Services
          </h1>
          <p className="text-slate-600 text-lg">
            We provide clean, secure development and digital infrastructure for startups and growing businesses.
          </p>
        </div>

        {/* Detailed Services Row Lists */}
        <div className="space-y-12">
          {detailedServices.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Card className="border border-slate-100 rounded-2xl shadow-sm bg-white overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Info */}
                      <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl border ${service.color}`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <h2 className="font-heading text-2xl font-bold text-[#0A1628]">{service.title}</h2>
                        </div>
                        
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {service.desc}
                        </p>

                        {/* Deliverables List */}
                        <div className="space-y-3 pt-2">
                          <h4 className="text-xs font-semibold text-[#0A1628] tracking-wider uppercase">Key Deliverables</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-500">
                            {service.deliverables.map((item, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Tech Stack & CTA */}
                      <div className="lg:col-span-4 bg-slate-50 border border-slate-100 rounded-xl p-6 space-y-6 lg:h-full lg:flex lg:flex-col lg:justify-between">
                        <div className="space-y-4">
                          <h4 className="text-xs font-semibold text-slate-800 tracking-wider uppercase">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.techStack.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="bg-white border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 lg:pt-0">
                          <Link href="/contact">
                            <Button className="w-full bg-[#0A1628] hover:bg-[#0A1628]/95 text-white flex items-center justify-center gap-2 rounded-lg py-2">
                              Book Pilot Demo <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Scope & Estimate Tool */}
        <div className="mt-24 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl font-bold text-[#0A1628]">
              Estimate Your Project In 60 Seconds
            </h2>
            <p className="text-slate-600 text-sm">
              Use our interactive scope builder to combine services, select project depth, and get instant timeline and pricing targets.
            </p>
          </div>
          <ProjectPlanner />
        </div>

        {/* Closing CTA Section */}
        <div className="mt-24 text-center space-y-4 bg-white border border-slate-100 p-8 rounded-2xl max-w-4xl mx-auto shadow-sm">
          <h3 className="font-heading text-2xl font-bold text-[#0A1628]">Need a Custom Solution?</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            If your project does not fit into our standard offerings, contact us. We build custom API endpoints, integrations, and automation scripts.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button className="bg-[#2563EB] hover:bg-[#2563EB]/95 text-white rounded-lg">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
