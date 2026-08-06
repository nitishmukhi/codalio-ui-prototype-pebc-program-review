import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ScrollArea } from "../components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import CitationAnchor from "../components/CitationAnchor";

import { AlertTriangle, ChevronLeft, ChevronRight, Save, ShieldCheck, ZoomIn } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AssessorReview() {
    const [page, setPage] = useState(4);
    const { id } = useParams();
    const navigate = useNavigate();
    const [decision, setDecision] = useState("");
    const [reason, setReason] = useState("");
    const [attested, setAttested] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-4 min-w-0">
          <section className="rounded-xl border bg-card p-5"><div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center"><div><div className="flex flex-wrap items-center gap-2"><h1 className="text-2xl font-semibold">Case CA-1042</h1><Badge>Pending Review</Badge><Badge variant="outline"><ShieldCheck className="mr-1 h-3 w-3"/>Zero-retention AI</Badge></div><p className="mt-2 text-sm text-muted-foreground">Applicant A. Patel · Initial assessment · autosaved to audit trail</p></div><div className="flex items-center gap-3"><div className="w-36"><Progress value={82}/><p className="mt-1 text-xs text-muted-foreground">Review 82% complete</p></div><Button variant="outline"><Save className="mr-2 h-4 w-4"/>Save draft</Button></div></div></section>
  <section className="grid min-h-[560px] gap-4 xl:grid-cols-2"><Card><CardHeader><CardTitle>Recommendation brief</CardTitle></CardHeader><CardContent><ScrollArea className="h-[470px] pr-4"><div className="space-y-5"><div className="rounded-lg bg-accent p-4"><Badge className="mb-2">Recommendation</Badge><p className="font-semibold text-accent-foreground">Approve with standard monitoring</p><p className="mt-2 text-sm leading-6 text-accent-foreground/80">The submitted evidence meets the governing eligibility threshold and all mandatory verification checks.</p></div><Accordion type="multiple" defaultValue={["eligibility"]}><AccordionItem value="eligibility"><AccordionTrigger>Eligibility analysis</AccordionTrigger><AccordionContent className="space-y-3 text-sm leading-6">Verified education and practice hours exceed the rubric minimum. <CitationAnchor page={4} paragraph={2} onCitationClick={()=>setPage(4)}/></AccordionContent></AccordionItem><AccordionItem value="risk"><AccordionTrigger>Risk considerations</AccordionTrigger><AccordionContent className="text-sm leading-6">One document date requires assessor confirmation, but does not change the threshold result.</AccordionContent></AccordionItem></Accordion></div></ScrollArea></CardContent></Card><Card><CardHeader className="flex-row items-center justify-between"><CardTitle>Redacted source document</CardTitle><div className="flex gap-1"><Button size="icon" variant="ghost" onClick={()=>setPage(Math.max(1,page-1))}><ChevronLeft className="h-4 w-4"/></Button><Badge variant="outline">Page {page} / 12</Badge><Button size="icon" variant="ghost" onClick={()=>setPage(Math.min(12,page+1))}><ChevronRight className="h-4 w-4"/></Button><Button size="icon" variant="ghost"><ZoomIn className="h-4 w-4"/></Button></div></CardHeader><CardContent><div className="h-[470px] overflow-hidden rounded-lg border bg-white p-8 text-slate-800 shadow-inner"><p className="text-center text-xs uppercase tracking-widest text-slate-400">Professional credentials record</p><div className="mt-8 space-y-5 text-sm leading-7"><p>Applicant: <span className="rounded bg-slate-800 px-12 py-1 text-slate-800">REDACTED</span></p><p className={page===4?"rounded border-l-4 border-amber-500 bg-amber-100 p-3":""}>The applicant completed 1,840 verified practice hours during the qualifying period, exceeding the required 1,500-hour threshold.</p><p>Credential verification was returned as valid by the issuing institution on May 14, 2025.</p></div></div></CardContent></Card></section>
  <section><Card><CardHeader><CardTitle>Record decision</CardTitle><CardDescription>A reason code and assessor attestation are required.</CardDescription></CardHeader><CardContent className="space-y-5"><RadioGroup value={decision} onValueChange={setDecision} className="grid gap-3 sm:grid-cols-3">{["Approve","Decline","Request more information"].map(x=><Label key={x} className="flex items-center gap-2 rounded-lg border p-4"><RadioGroupItem value={x}/>{x}</Label>)}</RadioGroup><Select value={reason} onValueChange={setReason}><SelectTrigger><SelectValue placeholder="Select reason code"/></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="meets">Meets all requirements</SelectItem><SelectItem value="insufficient">Insufficient evidence</SelectItem><SelectItem value="verification">Verification required</SelectItem></SelectContent></Select><Textarea placeholder="Decision rationale"/><Label className="flex items-start gap-3 rounded-lg border p-4"><Checkbox checked={attested} onCheckedChange={(v)=>setAttested(Boolean(v))}/><span className="text-sm">I attest that I reviewed the cited evidence and applied the governing rubric.</span></Label><Alert><AlertTriangle className="h-4 w-4"/><AlertTitle>Permanent record</AlertTitle><AlertDescription>Submitting seals this decision in the immutable audit log.</AlertDescription></Alert><Button disabled={!decision||!reason||!attested} onClick={()=>navigate(`/cases/${id || "CA-1042"}/confirmation`)}>Submit decision</Button></CardContent></Card></section>
      </div>
    </div>
  );
}