import * as React from "react"

import { cn } from "@/lib/utils"

export const ChartContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("relative", className)} ref={ref} {...props} />
  },
)
ChartContainer.displayName = "ChartContainer"

export const Chart = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("absolute left-0 top-0", className)} ref={ref} {...props} />
  },
)
Chart.displayName = "Chart"

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  { items: { label: string; value: string; color: string }[] } & React.HTMLAttributes<HTMLDivElement>
>(({ className, items, ...props }, ref) => {
  return (
    <div className={cn("grid gap-1", className)} ref={ref} {...props}>
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{item.label}</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

export const ChartTooltip = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div className={cn("p-2", className)} ref={ref} {...props} />
  },
)
ChartTooltip.displayName = "ChartTooltip"

