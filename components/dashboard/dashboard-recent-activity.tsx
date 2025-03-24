"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardRecentActivity() {
  const activities = [
    {
      id: 1,
      user: {
        name: "John Doe",
        email: "john@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JD",
      },
      action: "created a new project",
      time: "2 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        email: "jane@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "JS",
      },
      action: "updated user settings",
      time: "1 hour ago",
    },
    {
      id: 3,
      user: {
        name: "Mike Johnson",
        email: "mike@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MJ",
      },
      action: "completed a task",
      time: "3 hours ago",
    },
    {
      id: 4,
      user: {
        name: "Sarah Williams",
        email: "sarah@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SW",
      },
      action: "added a new comment",
      time: "5 hours ago",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest actions from your team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                  <AvatarFallback>{activity.user.initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{activity.user.name}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

