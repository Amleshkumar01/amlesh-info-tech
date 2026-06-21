"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServiceOption {
  id: string;
  name: string;
  mvpPrice: number;
  mvpTime: number;
  growthPrice: number;
  growthTime: number;
  entPrice: number;
  entTime: number;
}

export function ProjectPlanner() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>(["web3_dapp"]);
  const [tier, setTier] = useState<"mvp" | "growth" | "enterprise">("mvp");

  const services: ServiceOption[] = [
    {
      id: "mobile_app",
      name: "Mobile App Development",
      mvpPrice: 112000,
      mvpTime: 3,
      growthPrice: 224000,
      growthTime: 6,
      entPrice: 496000,
      entTime: 12,
    },
    {
      id: "security_hardening",
      name: "Security Hardening",
      mvpPrice: 56000,
      mvpTime: 2,
      growthPrice: 120000,
      growthTime: 4,
      entPrice: 256000,
      entTime: 8,
    },
    {
      id: "web3_dapp",
      name: "Web3 dApp Dev",
      mvpPrice: 120000,
      mvpTime: 3,
      growthPrice: 256000,
      growthTime: 6,
      entPrice: 544000,
      entTime: 12,
    },
    {
      id: "solidity_audit",
      name: "Smart Contract Audit",
      mvpPrice: 64000,
      mvpTime: 2,
      growthPrice: 144000,
      growthTime: 4,
      entPrice: 280000,
      entTime: 8,
    },
    {
      id: "web_3d",
      name: "Interactive 3D Web",
      mvpPrice: 72000,
      mvpTime: 2,
      growthPrice: 160000,
      growthTime: 5,
      entPrice: 360000,
      entTime: 10,
    },
    {
      id: "defi_token",
      name: "Tokenomics & DeFi",
      mvpPrice: 96000,
      mvpTime: 3,
      growthPrice: 200000,
      growthTime: 6,
      entPrice: 464000,
      entTime: 10,
    },
    {
      id: "ai_bot",
      name: "AI/ML Auditing Bots",
      mvpPrice: 80000,
      mvpTime: 2,
      growthPrice: 176000,
      growthTime: 5,
      entPrice: 400000,
      entTime: 9,
    },
    {
      id: "web_app",
      name: "Web App Development",
      mvpPrice: 88000,
      mvpTime: 2,
      growthPrice: 192000,
      growthTime: 5,
      entPrice: 416000,
      entTime: 10,
    },
    {
      id: "cloud_devops",
      name: "Cloud Deployment",
      mvpPrice: 48000,
      mvpTime: 1,
      growthPrice: 96000,
      growthTime: 3,
      entPrice: 208000,
      entTime: 6,
    },
    {
      id: "maintenance_support",
      name: "Maintenance & Support",
      mvpPrice: 40000,
      mvpTime: 1,
      growthPrice: 80000,
      growthTime: 2,
      entPrice: 176000,
      entTime: 4,
    },
  ];

  const handleToggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculations
  let totalPrice = 0;
  let maxTimeWeeks = 0;

  selectedServices.forEach((serviceId) => {
    const service = services.find((s) => s.id === serviceId);
    if (service) {
      if (tier === "mvp") {
        totalPrice += service.mvpPrice;
        maxTimeWeeks = Math.max(maxTimeWeeks, service.mvpTime);
      } else if (tier === "growth") {
        totalPrice += service.growthPrice;
        maxTimeWeeks = Math.max(maxTimeWeeks, service.growthTime);
      } else {
        totalPrice += service.entPrice;
        maxTimeWeeks = Math.max(maxTimeWeeks, service.entTime);
      }
    }
  });

  // Multple services discount
  if (selectedServices.length > 1) {
    totalPrice = Math.round(totalPrice * 0.85); // 15% discount for bundled engineering
  }

  const handleInquire = () => {
    const selectedNames = services
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => s.name)
      .join(", ");
    const text = encodeURIComponent(
      `Hi, I calculated an estimate for a ${tier.toUpperCase()} project containing: ${selectedNames}. Let's discuss!`
    );
    router.push(`/contact?message=${text}&service=${selectedServices[0]}`);
  };

  return (
    <Card className="border border-slate-200/80 bg-white rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Options Block */}
        <div className="p-8 md:p-10 md:col-span-7 space-y-6 border-b md:border-b-0 md:border-r border-slate-100">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2563EB]">
              <Sparkles className="h-3 w-3 animate-pulse" /> Live Cost Estimator
            </div>
            <h3 className="font-heading text-2xl font-bold text-[#0A1628]">
              Configure Your Tech Scope
            </h3>
            <p className="text-sm text-slate-500">
              Select the modules you need. Our estimates are tailored to competitive remote-first Indian engineering rates.
            </p>
          </div>

          {/* Service Toggles */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-600 block uppercase tracking-wider">
              1. Choose Services
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((s) => {
                const isSelected = selectedServices.includes(s.id);
                return (
                  <button
                    key={s.id}
                    onClick={() => handleToggleService(s.id)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                      isSelected
                        ? "border-[#2563EB] bg-blue-50/30 text-[#0A1628] shadow-sm"
                        : "border-slate-100 hover:border-slate-200 bg-white text-slate-600"
                    }`}
                  >
                    <span>{s.name}</span>
                    <div
                      className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? "border-[#2563EB] bg-[#2563EB] text-white"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tier Selection */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-slate-600 block uppercase tracking-wider">
              2. Select Project Scale
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["mvp", "growth", "enterprise"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`p-3 rounded-xl border text-center text-xs font-bold uppercase tracking-wider transition-all ${
                    tier === t
                      ? "border-[#0A1628] bg-[#0A1628] text-white shadow-md"
                      : "border-slate-100 hover:border-slate-200 bg-white text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {t === "mvp" ? "Startup MVP" : t === "growth" ? "Growth" : "Enterprise"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Calculations */}
        <div className="p-8 md:p-10 md:col-span-5 bg-slate-50/50 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Scope Summary
            </h4>

            {/* Calculations display */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-medium">Estimated Budget</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-[#0A1628] tracking-tight">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                  {selectedServices.length > 1 && (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      10% Bundle Off
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 block">
                  *Excludes cloud server / API provider costs.
                </span>
              </div>

              {/* Time display */}
              <div className="flex items-center gap-3 bg-white border border-slate-100 p-4 rounded-xl shadow-sm">
                <Clock className="h-5 w-5 text-[#2563EB] shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block font-medium leading-none mb-1">
                    Timeline Estimate
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    {maxTimeWeeks} {maxTimeWeeks === 1 ? "Week" : "Weeks"} to Launch
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4 pt-4">
            <Button
              onClick={handleInquire}
              className="w-full bg-[#2563EB] hover:bg-[#2563EB]/95 text-white py-6 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md transition-all hover:translate-y-[-1.5px]"
            >
              Secure This Scope <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>Free scope session & NDAs included</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
