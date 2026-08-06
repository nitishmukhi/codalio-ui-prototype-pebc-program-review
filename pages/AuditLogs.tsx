import { useMemo, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Download, Search, ShieldCheck } from "lucide-react";

type AuditRow = { ts: string; id: string; actor: string; action: string; resource: string; tenant: string; integrity: string };

const rows: AuditRow[] = [
  { ts: "2026-08-06 13:45", id: "EVT-88A1", actor: "j.singh", action: "DecisionSubmitted", resource: "CASE-9020", tenant: "PEBC-ON", integrity: "Verified" },
  { ts: "2026-08-06 13:33", id: "EVT-8894", actor: "system", action: "PIIRedaction", resource: "DOC-1193", tenant: "PEBC-ON", integrity: "Verified" },
  { ts: "2026-08-06 13:11", id: "EVT-8867", actor: "m.patel", action: "KnowledgeOverride", resource: "eligibility.rule.5", tenant: "PEBC-ON", integrity: "Verified" },
];

export default function AuditLogs() {
  const [search, setSearch] = useState("");
  const [actor, setActor] = useState("all");
  const [selected, setSelected] = useState<AuditRow | null>(null);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const bySearch = [row.id, row.resource].join(" ").toLowerCase().includes(search.toLowerCase());
      const byActor = actor === "all" || row.actor === actor;
      return bySearch && byActor;
    });
  }, [search, actor]);

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2"><Badge>Immutable</Badge><Badge variant="outline">Tamper evident</Badge></div>
          <Button variant="outline"><Download className="mr-2 h-4 w-4" />Export CSV</Button>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Immutable audit logs</h1>
        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle>Compliance guarantee</AlertTitle>
          <AlertDescription>Events cannot be modified or deleted.</AlertDescription>
        </Alert>
      </section>

      <section className="grid gap-3 md:grid-cols-[1fr_220px]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={(event) => setSearch(event.target.value)} className="pl-9" placeholder="Search event ID or resource" />
        </div>
        <Select value={actor} onValueChange={setActor}>
          <SelectTrigger><SelectValue placeholder="Actor" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All actors</SelectItem>
            <SelectItem value="system">system</SelectItem>
            <SelectItem value="j.singh">j.singh</SelectItem>
            <SelectItem value="m.patel">m.patel</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle className="text-base">Audit events ({filteredRows.length})</CardTitle></CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader><TableRow><TableHead>Timestamp</TableHead><TableHead>Event ID</TableHead><TableHead>Actor</TableHead><TableHead>Action</TableHead><TableHead>Resource</TableHead><TableHead>Tenant</TableHead><TableHead>Integrity</TableHead></TableRow></TableHeader>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id} className="cursor-pointer" onClick={() => setSelected(row)}>
                    <TableCell>{row.ts}</TableCell><TableCell>{row.id}</TableCell><TableCell>{row.actor}</TableCell><TableCell>{row.action}</TableCell><TableCell>{row.resource}</TableCell><TableCell>{row.tenant}</TableCell><TableCell><Badge variant="secondary">{row.integrity}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Sheet open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Audit event detail</SheetTitle>
            <SheetDescription>{selected?.id}</SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between"><span>Hash chain</span><Badge variant="secondary">Verified</Badge></div>
            <Separator />
            <div className="flex items-center justify-between"><span>Actor</span><span>{selected?.actor}</span></div>
            <Separator />
            <div className="flex items-center justify-between"><span>Resource</span><span>{selected?.resource}</span></div>
            <Separator />
            <Button className="w-full" variant="outline">Verify hash again</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}