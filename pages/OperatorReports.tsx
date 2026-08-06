import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { Download } from "lucide-react";
const metricRows = [
  { label: "Catch rate", value: "91%", progress: 91 },
  { label: "False positives", value: "4.2%", progress: 42 },
  { label: "Median review time", value: "12m", progress: 68 },
  { label: "Citation verification", value: "96%", progress: 96 },
];

export default function OperatorReports() {
  const [tenant, setTenant] = useState("all");
  const [assessmentType, setAssessmentType] = useState("all");

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <Badge>Accuracy reports</Badge>
          <h1 className="text-2xl font-semibold tracking-tight">Assessor accuracy reports</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Select value={tenant} onValueChange={setTenant}>
            <SelectTrigger className="w-44"><SelectValue placeholder="Tenant" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All tenants</SelectItem>
              <SelectItem value="pebc">PEBC Ontario</SelectItem>
            </SelectContent>
          </Select>
          <Select value={assessmentType} onValueChange={setAssessmentType}>
            <SelectTrigger className="w-44"><SelectValue placeholder="Assessment type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              <SelectItem value="initial">Initial review</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline"><Download className="mr-2 h-4 w-4" />Export CSV</Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metricRows.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">{metric.label}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{metric.value}</p>
              <Progress className="mt-3" value={metric.progress} />
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Accuracy trends</CardTitle>
            <CardDescription>Target catch rate: 90%</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="trend">
              <TabsList>
                <TabsTrigger value="trend">Trend</TabsTrigger>
                <TabsTrigger value="assessor">By assessor</TabsTrigger>
                <TabsTrigger value="error">By error type</TabsTrigger>
              </TabsList>
              <TabsContent value="trend" className="overflow-x-auto">
                <Table>
                  <TableHeader><TableRow><TableHead>Week</TableHead><TableHead>Catch rate</TableHead><TableHead>Variance</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                  <TableBody>
                    <TableRow><TableCell>W31</TableCell><TableCell>92%</TableCell><TableCell>+2%</TableCell><TableCell><Badge variant="secondary">On target</Badge></TableCell></TableRow>
                    <TableRow><TableCell>W30</TableCell><TableCell>89%</TableCell><TableCell>-1%</TableCell><TableCell><Badge variant="outline">Watch</Badge></TableCell></TableRow>
                  </TableBody>
                </Table>
              </TabsContent>
              <TabsContent value="assessor" className="text-sm text-muted-foreground">Assessor ranking view in development preview.</TabsContent>
              <TabsContent value="error" className="text-sm text-muted-foreground">Error-type distribution view in development preview.</TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}