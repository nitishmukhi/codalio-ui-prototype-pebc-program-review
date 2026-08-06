import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

import { CheckCircle2, FileUp, LockKeyhole, MapPin, Save, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function CaseIntake() {
    const [reference, setReference] = useState("");
    const [program, setProgram] = useState("");
    const [advanced, setAdvanced] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-6 min-w-0">
          <section className="space-y-6"><div><div className="flex flex-wrap items-center gap-2"><h1 className="text-3xl font-semibold tracking-tight">New case intake</h1><Badge variant="secondary">Draft</Badge></div><div className="mt-3 flex flex-wrap gap-2"><Badge variant="outline"><ShieldCheck className="mr-1 h-3 w-3" />Tenant isolated</Badge><Badge variant="outline"><MapPin className="mr-1 h-3 w-3" />Canada Central</Badge><Badge variant="outline"><LockKeyhole className="mr-1 h-3 w-3" />Encrypted upload</Badge></div></div><Card><CardContent className="p-5"><div className="mb-4 flex justify-between text-sm">{["Case details","Documents","Validation & redaction","Confirm"].map((s,i)=><span key={s} className={i===0?"font-semibold text-primary":"hidden text-muted-foreground sm:block"}>{i+1}. {s}</span>)}</div><Progress value={25} /></CardContent></Card></section>
  <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]"><Card><CardHeader><CardTitle>Case details</CardTitle><CardDescription>Required fields establish the assessment context.</CardDescription></CardHeader><CardContent className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label htmlFor="ref">Applicant reference</Label><Input id="ref" value={reference} onChange={(e)=>setReference(e.target.value)} placeholder="e.g. APP-2025-041" /></div><div className="space-y-2"><Label>Program</Label><Select value={program} onValueChange={setProgram}><SelectTrigger><SelectValue placeholder="Select program" /></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="pharmacy">Pharmacy</SelectItem><SelectItem value="licensing">Licensing</SelectItem></SelectContent></Select></div><div className="space-y-2"><Label>Jurisdiction</Label><Input value="Ontario" readOnly /></div><div className="space-y-2"><Label>Assessment type</Label><Select><SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="initial">Initial assessment</SelectItem><SelectItem value="renewal">Renewal</SelectItem></SelectContent></Select></div><div className="space-y-2 sm:col-span-2"><Label>Notes</Label><Textarea placeholder="Optional intake notes" /></div><div className="flex gap-2 sm:col-span-2"><Button variant="outline"><Save className="mr-2 h-4 w-4" />Save draft</Button><Button disabled={!reference || !program} onClick={()=>setAdvanced(true)}>Continue to documents</Button></div>{advanced&&<p className="text-sm text-emerald-700 sm:col-span-2"><CheckCircle2 className="mr-1 inline h-4 w-4" />Details saved. Document step unlocked.</p>}</CardContent></Card><Card className="border-dashed"><CardHeader><CardTitle>Secure documents</CardTitle><CardDescription>PDF or DOCX · encrypted in transit and at rest</CardDescription></CardHeader><CardContent><button className="grid min-h-52 w-full place-items-center rounded-lg border border-dashed bg-muted/40 p-8 text-center"><span><FileUp className="mx-auto mb-3 h-8 w-8 text-primary" /><span className="block font-medium">Drop files or browse</span><span className="mt-1 block text-xs text-muted-foreground">Malware scan and PII detection run automatically</span></span></button></CardContent></Card></section>
      </div>
    </div>
  );
}