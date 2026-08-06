import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";

import { AlertTriangle, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function KnowledgeConflicts() {
    const [resolution, setResolution] = useState("Use incoming");
    const [reason, setReason] = useState("");
    const [saved, setSaved] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 min-w-0">
          <section className="space-y-6"><Button variant="ghost" asChild><Link to="/knowledge-base"><ArrowLeft className="mr-2 h-4 w-4" />Back to library</Link></Button><div><Badge variant="destructive">2 unresolved</Badge><h1 className="mt-3 text-3xl font-semibold tracking-tight">Resolve synchronization conflicts</h1><p className="mt-2 text-muted-foreground">Review incoming changes against the current governed component.</p></div><Alert><AlertTriangle className="h-4 w-4" /><AlertTitle>Immutable override record</AlertTitle><AlertDescription>Every override and reason is written to the immutable audit log.</AlertDescription></Alert><Card><CardHeader><CardTitle>Eligibility evidence · v3.8 → v3.9</CardTitle><CardDescription>Incoming source changed threshold language and evidence requirements.</CardDescription></CardHeader><CardContent className="space-y-5"><Tabs defaultValue="diff"><TabsList><TabsTrigger value="incoming">Incoming JSON</TabsTrigger><TabsTrigger value="current">Current library</TabsTrigger><TabsTrigger value="diff">Diff</TabsTrigger></TabsList><TabsContent value="incoming" className="rounded-lg bg-slate-950 p-4 font-mono text-xs text-slate-200">{`{"threshold": 75, "evidence": "verified"}`}</TabsContent><TabsContent value="current" className="rounded-lg bg-slate-950 p-4 font-mono text-xs text-slate-200">{`{"threshold": 70, "evidence": "submitted"}`}</TabsContent><TabsContent value="diff" className="rounded-lg border p-4 text-sm"><p className="text-red-600 line-through">threshold: 70 · submitted</p><p className="mt-2 text-emerald-700">threshold: 75 · verified</p></TabsContent></Tabs><RadioGroup value={resolution} onValueChange={setResolution} className="grid gap-3 sm:grid-cols-3">{["Keep current","Use incoming","Manual merge"].map((x)=><Label key={x} className="flex items-center gap-2 rounded-lg border p-3"><RadioGroupItem value={x}/>{x}</Label>)}</RadioGroup><Textarea value={reason} onChange={(e)=>setReason(e.target.value)} placeholder="Required: explain the override" /><Button disabled={!reason} onClick={()=>setSaved(true)}>Confirm override</Button>{saved&&<p className="text-sm text-emerald-700"><CheckCircle2 className="mr-1 inline h-4 w-4" />Conflict resolved and audit event sealed.</p>}</CardContent></Card></section>
      </div>
    </div>
  );
}