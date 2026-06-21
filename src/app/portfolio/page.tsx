"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, Shield, Database, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const projects = [
    {
      title: "KrishiFarm Web3 Market",
      desc: "A decentralized marketplace allowing peer-to-peer crop preorder booking via smart contracts on Polygon, securing farmer deposits.",
      category: "Web3 dApp",
      icon: Globe,
      tech: ["Next.js", "Solidity", "Wagmi", "Foundry", "Tailwind CSS"],
      color: "text-blue-600 bg-blue-50 border-blue-100",
    },
    {
      title: "EduTech Learn NFT",
      desc: "A custom token gating and course certification platform minting ERC-721 certificates on student graduations.",
      category: "Tokenomics",
      icon: Smartphone,
      tech: ["Next.js", "Solidity", "ERC-721", "Hardhat", "IPFS / Pinata"],
      color: "text-purple-600 bg-purple-50 border-purple-100",
    },
    {
      title: "AuditGuard Solidity Scan",
      desc: "A real-time vulnerability scan dashboard designed to crawl smart contract code and highlight reentrancy risks.",
      category: "Audits",
      icon: Shield,
      tech: ["React", "Python", "Slither Parser", "Graph Neural Networks"],
      color: "text-red-600 bg-red-50 border-red-100",
    },
    {
      title: "DeFi Bridge Exchange",
      desc: "A customized lightning-fast token bridge swapping testnet tokens with low slippage and automated oracle routing.",
      category: "DeFi",
      icon: Database,
      tech: ["Solidity", "ERC-20", "Chainlink Price Feeds", "Wagmi Hooks"],
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      title: "Interactive 3D Showroom",
      desc: "A custom 3D web application enabling users to interactively tilt and view real-time layout structures using WebGL.",
      category: "Interactive 3D",
      icon: Brain,
      tech: ["Three.js", "React Three Fiber", "Tailwind CSS", "Framer Motion"],
      color: "text-teal-600 bg-teal-50 border-teal-100",
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
          <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase">Our Work</span>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#0A1628]">
            Delivered Projects
          </h1>
          <p className="text-slate-600 text-lg">
            Take a look at how we build and deploy high-grade tech products for startups and local businesses.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <Card className="h-full border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <CardContent className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Card Header Info */}
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-lg border ${project.color}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="font-heading text-xl font-bold text-[#0A1628]">{project.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>
                    </div>

                    {/* Tech & Action */}
                    <div className="space-y-4 pt-4 border-t border-slate-50">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="bg-slate-50 text-slate-500 text-[11px] font-medium px-2 py-0.5 rounded border border-slate-100"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <Link href="/contact">
                          <Button variant="ghost" className="text-sm font-semibold text-[#2563EB] hover:text-[#2563EB]/85 hover:bg-blue-50/50 p-0 flex items-center gap-1 group">
                            Inquire about this scope <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mid-page Portfolio Banner */}
        <div className="mt-20 text-center space-y-4 bg-gradient-to-r from-[#0A1628] to-[#14263E] text-white p-12 rounded-2xl max-w-4xl mx-auto shadow-md">
          <h2 className="font-heading text-2xl font-bold">Have a custom tech plan?</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">
            Partner with Amlesh Info Tech. We build responsive Next.js apps, launch mobile software, and secure your code database.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button className="bg-[#2563EB] hover:bg-[#2563EB]/95 text-white rounded-lg px-6">
                Start a Project With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
