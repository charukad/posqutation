import { FeatureComparison } from "@/components/FeatureComparison";
import { PricingBreakdown } from "@/components/PricingBreakdown";
import { AcceptProposalForm } from "@/components/AcceptProposalForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function QuotationPage() {
  return (
    <main className="min-h-screen bg-[--color-background-dark] overflow-hidden">
      <div className="container mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
      <PricingBreakdown />
      <FeatureComparison />
      <AcceptProposalForm />
    </main>
  );
}
