import { HeroSection } from "@/components/ui/hero-section";
import { JobAlertsForm } from "@/components/job-alerts/JobAlertsForm";
import { Metadata } from "next";
import config from "@/config";

// Add metadata for SEO
export const metadata: Metadata = {
  title: "Job Alerts | Get Notified of New Opportunities",
  description:
    "Subscribe to job alerts and get notified when new opportunities matching your preferences are posted.",
  keywords:
    "job alerts, job notifications, career alerts, employment updates, job subscription",
  openGraph: {
    title: "Job Alerts | Get Notified of New Opportunities",
    description:
      "Subscribe to job alerts and get notified when new opportunities matching your preferences are posted.",
    type: "website",
    url: `${config.url}/job-alerts`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Job Alerts | Get Notified of New Opportunities",
    description:
      "Subscribe to job alerts and get notified when new opportunities matching your preferences are posted.",
  },
  alternates: {
    canonical: `${config.url}/job-alerts`,
  },
};

export default function JobAlertsPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection
        badge="Job Alerts"
        title="Get jobs right to your inbox"
        description="Subscribe to job alerts and get notified when new opportunities matching your preferences are posted."
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-[720px] mx-auto">
          <JobAlertsForm />
        </div>
      </div>
    </main>
  );
}
