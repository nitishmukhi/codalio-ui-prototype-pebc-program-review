import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

import { Activity, ArrowRight, Crosshair, FlaskConical, LineChart, ShieldAlert, TestTube2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Operator() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-8 min-w-0">
          <section className="space-y-6"><div><Badge>Operator only</Badge><h1 className="mt-3 text-3xl font-semibold tracking-tight">Oversight & Evaluation</h1><p className="mt-2 text-muted-foreground">System-wide health and controlled evaluation activity</p></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{[{t:"Pipeline health",v:"99.8%",i:Activity,p:99},{t:"Seeded tests active",v:"12",i:TestTube2,p:72},{t:"Assessor catch rate",v:"94.2%",i:Crosshair,p:94},{t:"Open incidents",v:"1",i:ShieldAlert,p:12}].map(({t,v,i:Icon,p})=><Card key={t}><CardHeader className="flex-row items-center justify-between"><CardTitle className="text-sm text-muted-foreground">{t}</CardTitle><Icon className="h-4 w-4 text-primary" /></CardHeader><CardContent><p className="text-3xl font-semibold">{v}</p><Progress value={p} className="mt-4 h-1.5" /></CardContent></Card>)}</div></section>
  <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]"><Card><CardHeader><CardTitle>Evaluation activity</CardTitle></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>Evaluation</TableHead><TableHead>State</TableHead><TableHead>Result</TableHead></TableRow></TableHeader><TableBody>{[["EV-291","Active","Awaiting review"],["EV-288","Complete","Caught"],["EV-284","Complete","Missed"]].map(r=><TableRow key={r[0]}><TableCell className="font-medium">{r[0]}</TableCell><TableCell><Badge variant="outline">{r[1]}</Badge></TableCell><TableCell>{r[2]}</TableCell></TableRow>)}</TableBody></Table></CardContent></Card><Card><CardHeader><CardTitle>Operator actions</CardTitle></CardHeader><CardContent className="space-y-3"><Button asChild className="w-full justify-between"><Link to="/operator/oversight"><span className="flex items-center gap-2"><FlaskConical className="h-4 w-4" />Inject seeded error</span><ArrowRight className="h-4 w-4" /></Link></Button><Button asChild variant="outline" className="w-full justify-between"><Link to="/operator/reports"><span className="flex items-center gap-2"><LineChart className="h-4 w-4" />Accuracy reports</span><ArrowRight className="h-4 w-4" /></Link></Button></CardContent></Card></section>
      </div>
    </div>
  );
}