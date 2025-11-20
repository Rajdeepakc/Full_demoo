"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import clsx from "clsx";

export default function DeploymentsTable({ rows = [] }) {
  return (
    <Card className="rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
      <h2 className="text-lg font-semibold text-white mb-4">Recent Deployments</h2>

      <div className="-mx-6 px-6">
        <div className="overflow-x-auto">
          <Table>
        <TableHeader>
          <TableRow className="border-b border-white/10">
            <TableHead className="text-slate-400">App Name</TableHead>
            <TableHead className="text-slate-400">Status</TableHead>
            <TableHead className="text-slate-400">Cluster</TableHead>
            <TableHead className="text-slate-400">Updated</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.appName}>
              <TableCell className="font-medium">
                <span className="text-blue-400 hover:underline cursor-pointer">
                  {row.appName}
                </span>
              </TableCell>

              <TableCell>
                <Badge
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    row.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-rose-500/20 text-rose-300"
                  )}
                >
                  {row.status}
                </Badge>
              </TableCell>

              <TableCell className="text-slate-300">{row.cluster}</TableCell>
              <TableCell className="text-slate-400">{row.updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
}
