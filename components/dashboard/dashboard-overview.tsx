"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DashboardOverview() {
  const orders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      status: "Completed",
      date: "2023-04-01",
      total: "$245.99",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      status: "Processing",
      date: "2023-04-02",
      total: "$129.50",
    },
    {
      id: "ORD-003",
      customer: "Robert Johnson",
      status: "Pending",
      date: "2023-04-03",
      total: "$79.99",
    },
    {
      id: "ORD-004",
      customer: "Emily Davis",
      status: "Completed",
      date: "2023-04-04",
      total: "$189.00",
    },
    {
      id: "ORD-005",
      customer: "Michael Wilson",
      status: "Cancelled",
      date: "2023-04-05",
      total: "$99.99",
    },
  ]

  const products = [
    {
      id: "PRD-001",
      name: "Premium Headphones",
      stock: 45,
      price: "$129.99",
      sales: 230,
    },
    {
      id: "PRD-002",
      name: "Wireless Mouse",
      stock: 12,
      price: "$49.99",
      sales: 180,
    },
    {
      id: "PRD-003",
      name: "Mechanical Keyboard",
      stock: 28,
      price: "$89.99",
      sales: 120,
    },
    {
      id: "PRD-004",
      name: "4K Monitor",
      stock: 8,
      price: "$349.99",
      sales: 75,
    },
    {
      id: "PRD-005",
      name: "Wireless Earbuds",
      stock: 32,
      price: "$79.99",
      sales: 210,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
      case "Processing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Overview</CardTitle>
              <CardDescription>Recent orders and top products</CardDescription>
            </div>
            <Button size="sm" variant="outline" className="gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
          <Tabs defaultValue="orders" className="mt-2">
            <TabsList>
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="products">Top Products</TabsTrigger>
            </TabsList>
            <div className="mt-2">
              <TabsContent value="orders">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{order.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="products">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead className="text-right">Sales</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell className="text-right">{product.sales}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </div>
          </Tabs>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </motion.div>
  )
}

