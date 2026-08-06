import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { CheckCircle2, Download, Eye, LockKeyhole, Search } from "lucide-react";
import { useState } from "react";

export default function AuditLogs() {
    const [query, setQuery] = useState("");
    const events = [{id:"evt_8f21c",time:"2025-05-21 14:42:18",actor:"Alex Morgan",action:"Decision recorded",resource:"CA-1042"},{id:"evt_8f218",time:"2025-05-21 14:38:03",actor:"System",action:"Brief generated",resource:"CA-1042"},{id:"evt_8f204",time:"2025-05-21 14:31:44",actor:"Jordan Chen",action:"Case viewed",resource:"CA-1039"}];
    const [selected, setSelected] = useState(events[0]);
    const [open, setOpen] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-6 min-w-0">
          <section className="space-y-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Badge variant="secondary"><LockKeyhole className="mr-1 h-3 w-3" />Write-once ledger</Badge><h1 className="mt-3 text-3xl font-semibold tracking-tight">Immutable audit logs</h1><p className="mt-2 text-muted-foreground">Search and verify every governed action across your tenant.</p></div><Button><Download className="mr-2 h-4 w-4" />Export logs</Button></div><Alert><LockKeyhole className="h-4 w-4" /><AlertTitle>Immutable evidence</AlertTitle><AlertDescription>Events cannot be modified or deleted. Every record includes a verification hash.</AlertDescription></Alert><div className="flex flex-col gap-3 rounded-xl border bg-card p-4 md:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"/><Input className="pl-9" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search event ID or resource"/></div><Select defaultValue="all"><SelectTrigger className="md:w-44"><SelectValue/></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="all">All actions</SelectItem><SelectItem value="decision">Decision</SelectItem><SelectItem value="access">Access</SelectItem></SelectContent></Select><Button variant="outline" onClick={()=>setQuery("")}>Clear</Button></div></section>
  <section><Card className="overflow-hidden"><div className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Timestamp</TableHead><TableHead>Event ID</TableHead><TableHead>Actor</TableHead><TableHead>Action</TableHead><TableHead>Resource</TableHead><TableHead>Integrity</TableHead><TableHead></TableHead></TableRow></TableHeader><TableBody>{events.map(e=><TableRow key={e.id}><TableCell className="whitespace-nowrap text-xs">{e.time}</TableCell><TableCell className="font-mono text-xs">{e.id}</TableCell><TableCell>{e.actor}</TableCell><TableCell><Badge variant="outline">{e.action}</Badge></TableCell><TableCell>{e.resource}</TableCell><TableCell className="text-emerald-700"><CheckCircle2 className="mr-1 inline h-4 w-4"/>Verified</TableCell><TableCell><Button size="icon" variant="ghost" onClick={()=>{setSelected(e);setOpen(true)}}><Eye className="h-4 w-4"/></Button></TableCell></TableRow>)}</TableBody></Table></div></Card><Sheet open={open} onOpenChange={setOpen}><SheetContent className="p-6"><SheetHeader><SheetTitle>Audit event {selected.id}</SheetTitle><SheetDescription>Cryptographically verifiable event detail</SheetDescription></SheetHeader><div className="mt-6 space-y-4 text-sm"><div><p className="text-muted-foreground">Actor</p><p className="font-medium">{selected.actor}</p></div><div><p className="text-muted-foreground">SHA-256 hash</p><p className="break-all font-mono text-xs">a84bd97f24ee143f624e1a70ca19d82b664301fa</p></div><Badge className="bg-emerald-700">Hash verified</Badge></div></SheetContent></Sheet></section>
      </div>
    </div>
  );
}