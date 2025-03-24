"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, DollarSign, ShoppingCart, Users, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      isPositive: true,
      icon: DollarSign,
    },
    {
      title: "New Customers",
      value: "2,350",
      change: "+18.7%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Active Sessions",
      value: "1,247",
      change: "+12.3%",
      isPositive: true,
      icon: Activity,
    },
    {
      title: "Pending Orders",
      value: "12",
      change: "-2.5%",
      isPositive: false,
      icon: ShoppingCart,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`inline-flex items-center ${stat.isPositive ? "text-green-500" : "text-red-500"}`}>
                  {stat.isPositive ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
                  {stat.change} from last month
                </span>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

