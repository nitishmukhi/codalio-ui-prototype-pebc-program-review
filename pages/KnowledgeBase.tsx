import { useMemo, useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Textarea } from "../components/ui/textarea";
import { Download, FileJson, Search, Sparkles } from "lucide-react";

type KnowledgeRow = {
  component: string;
  domain: string;
  version: string;
  status: string;
  updated: string;
};

const rows: KnowledgeRow[] = [
  {
    component: "eligibility.rule.5",
    domain: "Eligibility",
    version: "v11",
    status: "Active",
    updated: "1h ago",
  },
  {
    component: "credential.mapping.ca",
    domain: "Credentials",
    version: "v8",
    status: "Draft",
    updated: "3h ago",
  },
  {
    component: "jurisdiction.policy.on",
    domain: "Policy",
    version: "v22",
    status: "Active",
    updated: "1d ago",
  },
];

export default function KnowledgeBase() {
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("all");
  const [editing, setEditing] = useState<KnowledgeRow | null>(null);

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const bySearch = row.component.toLowerCase().includes(search.toLowerCase());
      const byDomain = domain === "all" || row.domain === domain;
      return bySearch && byDomain;
    });
  }, [search, domain]);

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Badge>Knowledge Library</Badge>
            <Badge variant="outline">479 components</Badge>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Knowledge Library</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">
            <FileJson className="mr-2 h-4 w-4" />
            Import JSON
          </Button>
          <Button>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate bundle
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover text-popover-foreground">
              <DropdownMenuItem>Export CSV</DropdownMenuItem>
              <DropdownMenuItem>Export JSON</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-xs text-muted-foreground">Components</p>
            <p className="text-2xl font-semibold">479</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-xs text-muted-foreground">Active bundle</p>
            <p className="text-2xl font-semibold">v11</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-xs text-muted-foreground">Pending conflicts</p>
            <p className="text-2xl font-semibold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-xs text-muted-foreground">Last synchronized</p>
            <p className="text-2xl font-semibold">4m ago</p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3 md:grid-cols-[1fr_220px]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="pl-9"
            placeholder="Search 479 components"
          />
        </div>
        <Select value={domain} onValueChange={setDomain}>
          <SelectTrigger>
            <SelectValue placeholder="Domain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All domains</SelectItem>
            <SelectItem value="Eligibility">Eligibility</SelectItem>
            <SelectItem value="Credentials">Credentials</SelectItem>
            <SelectItem value="Policy">Policy</SelectItem>
          </SelectContent>
        </Select>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Knowledge components ({filteredRows.length})</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Component</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Updated</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.component}>
                    <TableCell className="font-medium">{row.component}</TableCell>
                    <TableCell>{row.domain}</TableCell>
                    <TableCell>{row.version}</TableCell>
                    <TableCell>
                      <Badge variant={row.status === "Active" ? "secondary" : "outline"}>{row.status}</Badge>
                    </TableCell>
                    <TableCell>{row.updated}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => setEditing(row)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Sheet open={Boolean(editing)} onOpenChange={(open) => !open && setEditing(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit component</SheetTitle>
            <SheetDescription>{editing?.component}</SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-3">
            <Textarea defaultValue={"{\n  \"threshold\": 0.72\n}"} className="min-h-56" />
            <Button onClick={() => setEditing(null)}>Save changes</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
