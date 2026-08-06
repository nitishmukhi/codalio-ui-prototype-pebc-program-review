import { useMemo, useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { useNavigate } from "react-router-dom";
import { Download, MoreHorizontal, Plus, Search } from "lucide-react";
type CaseRow = { id: string; applicant: string; stage: string; progress: number; eta: string; assignee: string; updated: string };

const caseRows: CaseRow[] = [
  { id: "CASE-9011", applicant: "A. Thomas", stage: "Queued", progress: 18, eta: "18m", assignee: "Unassigned", updated: "2m ago" },
  { id: "CASE-9015", applicant: "N. Chen", stage: "Processing", progress: 71, eta: "7m", assignee: "M. Patel", updated: "5m ago" },
  { id: "CASE-9020", applicant: "R. Lewis", stage: "Pending Review", progress: 100, eta: "Ready", assignee: "J. Singh", updated: "12m ago" },
  { id: "CASE-9033", applicant: "K. Martin", stage: "Processing", progress: 53, eta: "10m", assignee: "L. White", updated: "20m ago" },
];

export default function Cases() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredRows = useMemo(() => {
    return caseRows.filter((row) => {
      const bySearch = [row.id, row.applicant].join(" ").toLowerCase().includes(search.toLowerCase());
      const byStatus = status === "all" || row.stage === status;
      return bySearch && byStatus;
    });
  }, [search, status]);

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge>Case pipeline</Badge>
            <Badge variant="outline">Live queue</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Case pipeline</h1>
        </div>
        <Button onClick={() => navigate("/cases/new")}>
          <Plus className="mr-2 h-4 w-4" />
          New case
        </Button>
      </section>

      <section className="grid gap-3 md:grid-cols-[1fr_200px_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={(event) => setSearch(event.target.value)} className="pl-9" placeholder="Search case ID or applicant" />
        </div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All statuses</SelectItem>
            <SelectItem value="Queued">Queued</SelectItem>
            <SelectItem value="Processing">Processing</SelectItem>
            <SelectItem value="Pending Review">Pending Review</SelectItem>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"><Download className="mr-2 h-4 w-4" />Export</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
            <DropdownMenuCheckboxItem checked>Include statuses</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Include assignee</DropdownMenuCheckboxItem>
            <DropdownMenuItem>Export CSV</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      <section>
        <Card>
          <CardHeader><CardTitle className="text-base">Active cases ({filteredRows.length})</CardTitle></CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Case</TableHead><TableHead>Applicant</TableHead><TableHead>Stage</TableHead><TableHead>Progress</TableHead><TableHead>ETA</TableHead><TableHead>Assignee</TableHead><TableHead>Updated</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="font-medium">{row.id}</TableCell>
                    <TableCell>{row.applicant}</TableCell>
                    <TableCell><Badge variant={row.stage === "Processing" ? "default" : row.stage === "Queued" ? "secondary" : "outline"}>{row.stage}</Badge></TableCell>
                    <TableCell className="w-44"><Progress value={row.progress} /></TableCell>
                    <TableCell>{row.eta}</TableCell>
                    <TableCell>{row.assignee}</TableCell>
                    <TableCell>{row.updated}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
                          <DropdownMenuItem onClick={() => navigate(`/cases/${row.id}/review`)}>Open review</DropdownMenuItem>
                          <DropdownMenuItem>Assign owner</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}