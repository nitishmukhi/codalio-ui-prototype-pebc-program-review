import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Separator } from "../components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { ArrowRight, Activity, ClipboardCheck, ShieldAlert, TestTube2 } from "lucide-react";

const metrics = [
  { label: "Pipeline health", value: "98.9%", progress: 99, icon: Activity },
  { label: "Seeded tests active", value: "16", progress: 64, icon: TestTube2 },
  { label: "Assessor catch rate", value: "91%", progress: 91, icon: ClipboardCheck },
  { label: "Open incidents", value: "2", progress: 22, icon: ShieldAlert },
];

export default function Operator() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <Badge>Operator only</Badge>
            <Badge variant="outline">Hidden from assessor views</Badge>
          </div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">Oversight & Evaluation</h1>
          <p className="text-sm text-muted-foreground">System-wide health and controlled evaluation activity.</p>
        </div>
        <Button onClick={() => navigate("/operator/oversight")}>Inject seeded error</Button>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between text-sm font-medium">
                {metric.label}
                <metric.icon className="h-4 w-4 text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{metric.value}</p>
              <Progress className="mt-3" value={metric.progress} />
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader><CardTitle className="text-base">Evaluation activity</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow><TableHead>Evaluation</TableHead><TableHead>Case</TableHead><TableHead>Error type</TableHead><TableHead>Status</TableHead><TableHead>Result</TableHead></TableRow></TableHeader>
              <TableBody>
                <TableRow><TableCell>EVAL-2104</TableCell><TableCell>CASE-9015</TableCell><TableCell>Policy omission</TableCell><TableCell><Badge variant="secondary">Running</Badge></TableCell><TableCell>Pending</TableCell></TableRow>
                <TableRow><TableCell>EVAL-2101</TableCell><TableCell>CASE-8939</TableCell><TableCell>Citation mismatch</TableCell><TableCell><Badge variant="outline">Completed</Badge></TableCell><TableCell>Captured</TableCell></TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Quick actions</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-between" onClick={() => navigate("/operator/oversight")}>Seeded-error program<ArrowRight className="h-4 w-4" /></Button>
            <Separator />
            <Button variant="outline" className="w-full justify-between" onClick={() => navigate("/operator/reports")}>Accuracy reports<ArrowRight className="h-4 w-4" /></Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}