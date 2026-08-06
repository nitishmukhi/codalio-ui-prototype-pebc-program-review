import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Plus, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Cases() {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);
    const rows = useMemo(() => page === 1 ? [{id:"CA-1042",applicant:"A. Patel",stage:"Pending Review",progress:100,eta:"Ready",owner:"A. Morgan"},{id:"CA-1039",applicant:"M. Chen",stage:"Generating Brief",progress:72,eta:"2 min",owner:"J. Chen"},{id:"CA-1038",applicant:"S. Roy",stage:"Redacting",progress:48,eta:"5 min",owner:"Unassigned"},{id:"CA-1037",applicant:"K. Singh",stage:"Queued",progress:12,eta:"9 min",owner:"J. Chen"}] : [{id:"CA-1036",applicant:"L. Martin",stage:"Pending Review",progress:100,eta:"Ready",owner:"A. Morgan"}], [page]);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-6 min-w-0">
          <section className="space-y-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2"><h1 className="text-3xl font-semibold tracking-tight">Case pipeline</h1><Badge variant="secondary">128 active</Badge></div><p className="mt-2 text-muted-foreground">Monitor every case from validation through final decision.</p></div><Button asChild><Link to="/cases/new"><Plus className="mr-2 h-4 w-4" />New case</Link></Button></div><div className="flex flex-col gap-3 rounded-xl border bg-card p-4 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" /><Input className="pl-9" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search case ID or applicant" /></div><Select value={status} onValueChange={setStatus}><SelectTrigger className="w-full sm:w-44"><SelectValue /></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="all">All statuses</SelectItem><SelectItem value="Pending Review">Pending Review</SelectItem><SelectItem value="Processing">Processing</SelectItem></SelectContent></Select><Button variant="outline"><Download className="mr-2 h-4 w-4" />Export</Button></div></section>
  <section><Card className="overflow-hidden"><div className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Case</TableHead><TableHead>Applicant</TableHead><TableHead>Stage</TableHead><TableHead>Progress</TableHead><TableHead>ETA</TableHead><TableHead>Assignee</TableHead><TableHead></TableHead></TableRow></TableHeader><TableBody>{rows.map(r=><TableRow key={r.id}><TableCell><Link className="font-medium text-primary hover:underline" to={`/cases/${r.id}/review`}>{r.id}</Link></TableCell><TableCell>{r.applicant}</TableCell><TableCell><Badge variant="outline">{r.stage}</Badge></TableCell><TableCell><div className="flex min-w-28 items-center gap-2"><Progress value={r.progress} /><span className="text-xs">{r.progress}%</span></div></TableCell><TableCell>{r.eta}</TableCell><TableCell>{r.owner}</TableCell><TableCell><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></TableCell></TableRow>)}</TableBody></Table></div><div className="flex items-center justify-between border-t p-4"><p className="text-sm text-muted-foreground">Showing {page===1?"1–4":"5–8"} of 128</p><div className="flex gap-2"><Button size="icon" variant="outline" disabled={page===1} onClick={()=>setPage(1)}><ChevronLeft className="h-4 w-4" /></Button><Button size="icon" variant="outline" onClick={()=>setPage(page===1?2:1)}><ChevronRight className="h-4 w-4" /></Button></div></div></Card></section>
      </div>
    </div>
  );
}