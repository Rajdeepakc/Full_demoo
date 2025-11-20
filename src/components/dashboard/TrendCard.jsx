"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const spendData = [
  { date: "2024-05-01", spend: 62.0 },
  { date: "2024-05-02", spend: 38.0 },
  { date: "2024-05-03", spend: 28.0 },
  { date: "2024-05-04", spend: 56.0 },
  { date: "2024-05-05", spend: 24.0 },
  { date: "2024-05-06", spend: 46.0 },
  { date: "2024-05-07", spend: 34.0 },
  { date: "2024-05-08", spend: 62.0 },
  { date: "2024-05-09", spend: 42.0 },
  { date: "2024-05-10", spend: 52.0 },
  { date: "2024-05-11", spend: 29.0 },
  { date: "2024-05-12", spend: 68.0 },
  { date: "2024-05-13", spend: 30.0 },
  { date: "2024-05-14", spend: 50.0 },
  { date: "2024-05-15", spend: 26.0 },
  { date: "2024-05-16", spend: 115.0 },
  { date: "2024-05-17", spend: 28.0 },
  { date: "2024-05-18", spend: 70.0 },
  { date: "2024-05-19", spend: 95.0 },
  { date: "2024-05-20", spend: 60.0 },
  { date: "2024-05-21", spend: 36.0 },
  { date: "2024-05-22", spend: 70.0 },
  { date: "2024-05-23", spend: 44.0 },
  { date: "2024-05-24", spend: 72.0 },

  { date: "2024-05-25", spend: 34.0 },
  { date: "2024-05-26", spend: 64.0 },
  { date: "2024-05-27", spend: 28.0 },
  { date: "2024-05-28", spend: 100.0 },
  { date: "2024-05-29", spend: 48.0 },
  { date: "2024-05-30", spend: 98.0 },
];


function TrendCard() {
  return (
    <Card className="rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-black/20">


      <CardHeader className="p-0">
        {/* <p className="text-sm font-bold text-slate-400">Daily Spend Trend</p> */}
        {/* <div className="flex items-center justify-between gap-1 align-middle" > */}
          {/* <div className="flex items-start justify-start gap-4"> */}
          <div className="flex flex-col items-start gap-1">

        <p className="text-sm font-bold text-slate-400">Daily Spend Trend</p>

          <div>
            {/* <p className="text-sm font-bold text-slate-400 ml- 0 ">Daily Spend Trend </p> */}
            <div className="mt-1 flex items-baseline gap-3 whitespace-nowrap">
              <p className="text-3xl font-semibold text-blue-500">$58.50</p>
              <p className="text-sm text-slate-400 ">Last 30 Days</p>
              <p className="text-sm font-semibold text-green-500">+2.5%</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0 pt-6">
        <div className="h-56 md:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={spendData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="fillSpend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />

              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                hide={true}
                tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />

              <Tooltip
                contentStyle={{
                  background: "rgba(15, 23, 42, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                labelStyle={{ color: "#94a3b8", fontSize: "12px" }}
                formatter={(value) => [`$${value.toFixed(2)}`, "Spend"]}
              />

              <Area
                type="natural"
                dataKey="spend"
                stroke="#3b82f6"
                strokeWidth={2}
                fill="url(#fillSpend)"
                dot={false}
                activeDot={{ r: 4, fill: "#3b82f6" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default TrendCard;
