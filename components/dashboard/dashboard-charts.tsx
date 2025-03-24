"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 1200,
    sales: 900,
    users: 400,
  },
  {
    name: "Feb",
    total: 2100,
    sales: 1398,
    users: 800,
  },
  {
    name: "Mar",
    total: 1800,
    sales: 1200,
    users: 700,
  },
  {
    name: "Apr",
    total: 2800,
    sales: 2908,
    users: 1200,
  },
  {
    name: "May",
    total: 2700,
    sales: 2500,
    users: 1100,
  },
  {
    name: "Jun",
    total: 3500,
    sales: 3200,
    users: 1500,
  },
  {
    name: "Jul",
    total: 3000,
    sales: 2800,
    users: 1300,
  },
  {
    name: "Aug",
    total: 3200,
    sales: 3000,
    users: 1400,
  },
  {
    name: "Sep",
    total: 3800,
    sales: 3500,
    users: 1700,
  },
  {
    name: "Oct",
    total: 4000,
    sales: 3700,
    users: 1800,
  },
  {
    name: "Nov",
    total: 4500,
    sales: 4200,
    users: 2000,
  },
  {
    name: "Dec",
    total: 5000,
    sales: 4800,
    users: 2200,
  },
]

export function DashboardCharts() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
          <CardDescription>View your analytics data across different metrics</CardDescription>
          <Tabs defaultValue="overview" className="mt-2" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>
            <div className="h-[300px] mt-2">
              <TabsContent value="overview" className="h-full">
                <ChartContainer className="h-full">
                  <Chart className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={data}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 0,
                        }}
                      >
                        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                        <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <ChartTooltipContent
                                  className="border bg-background p-2 shadow-sm"
                                  items={[
                                    {
                                      label: "Total",
                                      value: `$${payload[0].value}`,
                                      color: "hsl(var(--primary))",
                                    },
                                  ]}
                                />
                              )
                            }
                            return null
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="total"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Chart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="sales" className="h-full">
                <ChartContainer className="h-full">
                  <Chart className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={data}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 0,
                        }}
                      >
                        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                        <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <ChartTooltipContent
                                  className="border bg-background p-2 shadow-sm"
                                  items={[
                                    {
                                      label: "Sales",
                                      value: `$${payload[0].value}`,
                                      color: "hsl(var(--primary))",
                                    },
                                  ]}
                                />
                              )
                            }
                            return null
                          }}
                        />
                        <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </Chart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="users" className="h-full">
                <ChartContainer className="h-full">
                  <Chart className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={data}
                        margin={{
                          top: 5,
                          right: 10,
                          left: 10,
                          bottom: 0,
                        }}
                      >
                        <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                        <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                        <ChartTooltip
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <ChartTooltipContent
                                  className="border bg-background p-2 shadow-sm"
                                  items={[
                                    {
                                      label: "Users",
                                      value: payload[0].value,
                                      color: "hsl(var(--primary))",
                                    },
                                  ]}
                                />
                              )
                            }
                            return null
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="users"
                          stroke="hsl(var(--primary))"
                          fill="hsl(var(--primary) / 0.2)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </Chart>
                </ChartContainer>
              </TabsContent>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </motion.div>
  )
}

