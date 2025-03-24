import type { Metadata } from "next"
import { SettingsForm } from "@/components/dashboard/settings/settings-form"

export const metadata: Metadata = {
  title: "Settings | Admin Dashboard",
  description: "Manage your account settings",
}

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>
      <SettingsForm />
    </div>
  )
}

