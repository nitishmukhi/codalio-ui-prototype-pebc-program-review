import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { Download, Eye, Target, Timer, TrendingUp } from "lucide-react";
export default function OperatorReports() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-8 min-w-0">
          <section className="space-y-6"><div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><div><h1 className="text-3xl font-semibold tracking-tight">Assessor accuracy reports</h1><p className="mt-2 text-muted-foreground">Controlled evaluation outcomes and review quality trends.</p></div><div className="flex flex-wrap gap-2"><Select defaultValue="30"><SelectTrigger className="w-36"><SelectValue/></SelectTrigger><SelectContent className="bg-popover text-popover-foreground"><SelectItem value="30">Last 30 days</SelectItem><SelectItem value="90">Last 90 days</SelectItem></SelectContent></Select><Button variant="outline"><Download className="mr-2 h-4 w-4"/>Export PDF</Button></div></div><div className="grid gap-4 md:grid-cols-4">{[{t:"Catch rate",v:"94.2%",p:94,i:Target},{t:"False positives",v:"2.1%",p:2,i:Eye},{t:"Median review",v:"18m",p:72,i:Timer},{t:"Citation verified",v:"97.6%",p:98,i:TrendingUp}].map(({t,v,p,i:Icon})=><Card key={t}><CardHeader className="flex-row items-center justify-between"><CardTitle className="text-sm text-muted-foreground">{t}</CardTitle><Icon className="h-4 w-4 text-primary"/></CardHeader><CardContent><p className="text-2xl font-semibold">{v}</p><Progress value={p} className="mt-3 h-1.5"/></CardContent></Card>)}</div></section>
  <section><Card><CardHeader><CardTitle>Accuracy trend</CardTitle><CardDescription>Target catch rate: 90%</CardDescription></CardHeader><CardContent><Tabs defaultValue="trend"><TabsList><TabsTrigger value="trend">Trend</TabsTrigger><TabsTrigger value="assessor">By assessor</TabsTrigger><TabsTrigger value="type">By error type</TabsTrigger></TabsList><TabsContent value="trend"><div className="mt-6 flex h-64 items-end gap-3 border-b border-l px-5">{[82,88,91,89,94,96,94].map((h,i)=><div key={i} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t bg-primary/80" style={{height:`${h*2}px`}}/><span className="text-xs text-muted-foreground">W{i+1}</span></div>)}</div></TabsContent><TabsContent value="assessor"><Table><TableHeader><TableRow><TableHead>Assessor</TableHead><TableHead>Evaluations</TableHead><TableHead>Catch rate</TableHead></TableRow></TableHeader><TableBody>{[["A. Morgan","24","96%"],["J. Chen","19","94%"],["R. Singh","17","91%"]].map(r=><TableRow key={r[0]}><TableCell>{r[0]}</TableCell><TableCell>{r[1]}</TableCell><TableCell><Badge>{r[2]}</Badge></TableCell></TableRow>)}</TableBody></Table></TabsContent><TabsContent value="type" className="p-6 text-sm text-muted-foreground">Citation errors are caught most reliably; evidence omissions remain the primary coaching opportunity.</TabsContent></Tabs></CardContent></Card></section>
      </div>
    </div>
  );
}