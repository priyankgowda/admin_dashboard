import type { Metadata } from "next"
import { UsersTable } from "@/components/dashboard/users/users-table"

export const metadata: Metadata = {
  title: "Users | Admin Dashboard",
  description: "Manage users and their roles",
}

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
      </div>
      <UsersTable />
    </div>
  )
}

