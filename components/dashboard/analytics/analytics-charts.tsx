"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer } from "@/components/ui/chart"
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Enhanced data for more visually appealing charts
const lineChartData = [
  { name: "Jan", visitors: 1200, pageViews: 4000, sessions: 990 },
  { name: "Feb", visitors: 1900, pageViews: 5000, sessions: 1200 },
  { name: "Mar", visitors: 1500, pageViews: 4500, sessions: 1100 },
  { name: "Apr", visitors: 2200, pageViews: 6000, sessions: 1700 },
  { name: "May", visitors: 2500, pageViews: 7000, sessions: 2100 },
  { name: "Jun", visitors: 2300, pageViews: 6500, sessions: 2000 },
  { name: "Jul", visitors: 2800, pageViews: 8000, sessions: 2400 },
  { name: "Aug", visitors: 3000, pageViews: 8500, sessions: 2600 },
  { name: "Sep", visitors: 2700, pageViews: 7500, sessions: 2300 },
  { name: "Oct", visitors: 3200, pageViews: 9000, sessions: 2800 },
  { name: "Nov", visitors: 3500, pageViews: 9500, sessions: 3000 },
  { name: "Dec", visitors: 3700, pageViews: 10000, sessions: 3200 },
]

const barChartData = [
  { name: "Desktop", value: 4800, percentage: 65 },
  { name: "Mobile", value: 1900, percentage: 25 },
  { name: "Tablet", value: 750, percentage: 10 },
]

const pieChartData = [
  { name: "Direct", value: 40, count: 2200 },
  { name: "Organic Search", value: 30, count: 1650 },
  { name: "Social Media", value: 20, count: 1100 },
  { name: "Referral", value: 10, count: 550 },
]

// Vibrant colors for better visualization
const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"]

export function AnalyticsCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>Visitors and page views over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer className="h-full">
                <Chart className="h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={lineChartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                      }}
                    >
                      <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                      <YAxis tickLine={false} axisLine={false} fontSize={12} tickMargin={10} />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Visitors</span>
                                    <span className="font-bold text-primary">{payload[0].value}</span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Page Views</span>
                                    <span className="font-bold text-[#8884d8]">{payload[1].value}</span>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Sessions</span>
                                    <span className="font-bold text-[#82ca9d]">{payload[2].value}</span>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        name="Visitors"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="pageViews"
                        name="Page Views"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="sessions"
                        name="Sessions"
                        stroke="#82ca9d"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Chart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Device Distribution</CardTitle>
            <CardDescription>Traffic by device type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer className="h-full">
                <Chart className="h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={barChartData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                      }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    {payload[0].payload.name}
                                  </span>
                                  <span className="font-bold text-primary">
                                    {payload[0].payload.value} Users ({payload[0].payload.percentage}%)
                                  </span>
                                </div>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Legend />
                      <Bar dataKey="value" name="Users" fill="hsl(var(--primary))">
                        {barChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Chart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="md:col-span-2"
      >
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <div className="grid h-full grid-cols-1 gap-6 md:grid-cols-2">
                <ChartContainer className="h-full">
                  <Chart className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieChartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value, name, props) => [`${value}%`, name]}
                          content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="rounded-lg border bg-background p-2 shadow-sm">
                                  <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      {payload[0].name}
                                    </span>
                                    <span className="font-bold">
                                      {payload[0].value}% ({payload[0].payload.count} visitors)
                                    </span>
                                  </div>
                                </div>
                              )
                            }
                            return null
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </Chart>
                </ChartContainer>
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    {pieChartData.map((entry, index) => (
                      <div key={`legend-${index}`} className="flex items-center gap-2">
                        <div
                          className="h-4 w-4 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <div className="flex w-full items-center justify-between gap-2">
                          <span className="font-medium">{entry.name}</span>
                          <div className="text-right">
                            <span className="text-muted-foreground">{entry.value}%</span>
                            <p className="text-xs text-muted-foreground">{entry.count} visitors</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

