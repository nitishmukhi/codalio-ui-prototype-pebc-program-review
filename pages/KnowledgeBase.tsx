import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Textarea } from "../components/ui/textarea";

import { Box, CloudDownload, Edit3, GitCompareArrows, PackageCheck, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function KnowledgeBase() {
    const components = [{name:"Practice-hours threshold",domain:"Eligibility",version:"v3.8",updated:"18 min ago"},{name:"Credential verification",domain:"Evidence",version:"v2.4",updated:"Yesterday"},{name:"Ontario jurisdiction rules",domain:"Policy",version:"v5.1",updated:"May 18"}];
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(components[0]);
    const [open, setOpen] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-6 min-w-0">
          <section className="space-y-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2"><h1 className="text-3xl font-semibold tracking-tight">Knowledge Library</h1><Badge variant="secondary">479 components</Badge></div><p className="mt-2 text-muted-foreground">Governed policy, rubric, and evidence components.</p></div><div className="flex gap-2"><Button variant="outline"><CloudDownload className="mr-2 h-4 w-4"/>Import JSON</Button><Button><Plus className="mr-2 h-4 w-4"/>Generate bundle</Button></div></div><div className="grid gap-4 md:grid-cols-4">{[{t:"Components",v:"479",i:Box},{t:"Active bundle",v:"2025.05.18",i:PackageCheck},{t:"Pending conflicts",v:"2",i:GitCompareArrows},{t:"Last synchronized",v:"18 min",i:CloudDownload}].map(({t,v,i:Icon})=><Card key={t}><CardContent className="flex items-center gap-4 p-5"><span className="grid h-10 w-10 place-items-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-5 w-5"/></span><div><p className="text-xs text-muted-foreground">{t}</p><p className="font-semibold">{v}</p></div></CardContent></Card>)}</div></section>
  <section className="space-y-4"><div className="flex flex-col gap-3 rounded-xl border bg-card p-4 md:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"/><Input className="pl-9" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search 479 components"/></div><Select defaultValue="all"><SelectTrigger className="md:w-44"><SelectValue/></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="all">All domains</SelectItem><SelectItem value="eligibility">Eligibility</SelectItem><SelectItem value="evidence">Evidence</SelectItem></SelectContent></Select><Button variant="outline" asChild><Link to="/knowledge-base/conflicts">Resolve conflicts</Link></Button></div><Card className="overflow-hidden"><div className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Component</TableHead><TableHead>Domain</TableHead><TableHead>Version</TableHead><TableHead>Status</TableHead><TableHead>Updated</TableHead><TableHead></TableHead></TableRow></TableHeader><TableBody>{components.filter(c=>c.name.toLowerCase().includes(search.toLowerCase())).map(c=><TableRow key={c.name}><TableCell className="font-medium">{c.name}</TableCell><TableCell>{c.domain}</TableCell><TableCell>{c.version}</TableCell><TableCell><Badge variant="secondary">Active</Badge></TableCell><TableCell>{c.updated}</TableCell><TableCell><Button size="icon" variant="ghost" onClick={()=>{setSelected(c);setOpen(true)}}><Edit3 className="h-4 w-4"/></Button></TableCell></TableRow>)}</TableBody></Table></div></Card><Sheet open={open} onOpenChange={setOpen}><SheetContent className="p-6"><SheetHeader><SheetTitle>Edit {selected.name}</SheetTitle><SheetDescription>Changes create a new governed version.</SheetDescription></SheetHeader><Textarea className="mt-6 min-h-64" defaultValue="Eligibility threshold requires 1,500 verified practice hours."/><Button className="mt-4">Save new version</Button></SheetContent></Sheet></section>
      </div>
    </div>
  );
}