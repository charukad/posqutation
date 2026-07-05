import { POSDemo } from "@/components/POSDemo";
import { DashboardDemo } from "@/components/DashboardDemo";
import { LoyaltyDemo } from "@/components/LoyaltyDemo";
import { MultiOutletDemo } from "@/components/MultiOutletDemo";
import { MoreExperiences } from "@/components/MoreExperiences";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[--color-background-dark] overflow-hidden">
      <div className="container mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
      <POSDemo />
      <DashboardDemo />
      <LoyaltyDemo />
      <MultiOutletDemo />
      <MoreExperiences />
    </main>
  );
}
