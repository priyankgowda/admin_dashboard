import type { Metadata } from "next"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { DashboardCharts } from "@/components/dashboard/dashboard-charts"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { DashboardRecentActivity } from "@/components/dashboard/dashboard-recent-activity"

export const metadata: Metadata = {
  title: "Dashboard | Admin Dashboard",
  description: "Dashboard overview with key metrics and charts",
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DashboardCharts />
        </div>
        <div>
          <DashboardRecentActivity />
        </div>
      </div>
      <DashboardOverview />
    </div>
  )
}

