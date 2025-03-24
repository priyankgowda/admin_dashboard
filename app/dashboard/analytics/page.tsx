import type { Metadata } from "next"
import { AnalyticsCharts } from "@/components/dashboard/analytics/analytics-charts"
import { AnalyticsFilters } from "@/components/dashboard/analytics/analytics-filters"

export const metadata: Metadata = {
  title: "Analytics | Admin Dashboard",
  description: "Data analytics and visualization",
}

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
      </div>
      <AnalyticsFilters />
      <AnalyticsCharts />
    </div>
  )
}

