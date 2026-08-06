import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Textarea } from "../components/ui/textarea";

import { AlertTriangle, FlaskConical } from "lucide-react";
import { useState } from "react";

export default function OperatorOversight() {
    const [caseId, setCaseId] = useState("");
    const [errorType, setErrorType] = useState("");
    const [attested, setAttested] = useState(false);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-8 min-w-0">
          <section className="space-y-6"><div><Badge variant="destructive">Operator only</Badge><h1 className="mt-3 text-3xl font-semibold tracking-tight">Seeded-error program</h1></div><Alert><AlertTriangle className="h-4 w-4"/><AlertTitle>Strict visibility boundary</AlertTitle><AlertDescription>Seeded-error markers are operator-only and never shown in assessor views.</AlertDescription></Alert><Card><CardHeader><CardTitle>Build controlled evaluation</CardTitle><CardDescription>Inject a known error to measure whether review controls catch it.</CardDescription></CardHeader><CardContent className="grid gap-5 md:grid-cols-2"><div className="space-y-2"><Label>Eligible case</Label><Select value={caseId} onValueChange={setCaseId}><SelectTrigger><SelectValue placeholder="Select case"/></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="CA-1039">CA-1039 · Brief ready</SelectItem><SelectItem value="CA-1036">CA-1036 · Brief ready</SelectItem></SelectContent></Select></div><div className="space-y-2"><Label>Error type</Label><Select value={errorType} onValueChange={setErrorType}><SelectTrigger><SelectValue placeholder="Select controlled error"/></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="citation">Incorrect citation</SelectItem><SelectItem value="threshold">Threshold mismatch</SelectItem></SelectContent></Select></div><div className="space-y-2 md:col-span-2"><Label>Expected catch</Label><Textarea placeholder="Describe the evidence an assessor should identify"/></div><Label className="flex items-start gap-3 md:col-span-2"><Checkbox checked={attested} onCheckedChange={(v)=>setAttested(Boolean(v))}/><span className="text-sm">I confirm this evaluation is authorized and will not affect the applicant record.</span></Label><Button disabled={!caseId||!errorType||!attested} className="md:col-span-2 md:w-fit"><FlaskConical className="mr-2 h-4 w-4"/>Preview injection</Button></CardContent></Card></section>
  <section><Card><CardHeader><CardTitle>Active evaluations</CardTitle></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Evaluation</TableHead><TableHead>Case</TableHead><TableHead>Error type</TableHead><TableHead>State</TableHead><TableHead>Result</TableHead></TableRow></TableHeader><TableBody>{[["EV-291","CA-1039","Citation","In review",60,"Pending"],["EV-288","CA-1022","Threshold","Complete",100,"Caught"],["EV-284","CA-1014","Evidence omission","Complete",100,"Missed"]].map(r=><TableRow key={String(r[0])}><TableCell className="font-medium">{r[0]}</TableCell><TableCell>{r[1]}</TableCell><TableCell>{r[2]}</TableCell><TableCell><Badge variant="outline">{r[3]}</Badge></TableCell><TableCell><div className="flex min-w-32 items-center gap-2"><Progress value={Number(r[4])}/><span className="text-xs">{r[5]}</span></div></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></section>
      </div>
    </div>
  );
}