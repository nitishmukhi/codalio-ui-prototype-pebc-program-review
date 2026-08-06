import React from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

import { ArrowRight, Building2, CheckCircle2, Database, KeyRound, MapPin, ScrollText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-8 min-w-0">
          <section className="space-y-6"><div><Badge variant="secondary"><ShieldCheck className="mr-1 h-3 w-3"/>Tenant admin</Badge><h1 className="mt-3 text-3xl font-semibold tracking-tight">Administration</h1><p className="mt-2 text-muted-foreground">Tenant governance, access, and compliance controls</p></div><div className="grid gap-4 md:grid-cols-2">{[{t:"Tenant administration",d:"Manage profile, users, roles, integrations, and data residency.",to:"/admin/tenant",i:Building2},{t:"Immutable audit logs",d:"Search, verify, and export the permanent governance record.",to:"/admin/audit-logs",i:ScrollText}].map(({t,d,to,i:Icon})=><Card key={t} className="transition-shadow hover:shadow-md"><CardHeader><span className="mb-3 grid h-11 w-11 place-items-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-5 w-5"/></span><CardTitle>{t}</CardTitle><CardDescription className="leading-6">{d}</CardDescription></CardHeader><CardContent><Button variant="outline" asChild><Link to={to}>Open area<ArrowRight className="ml-2 h-4 w-4"/></Link></Button></CardContent></Card>)}</div></section>
  <section><Card><CardHeader className="flex-row items-center justify-between"><CardTitle>Security posture</CardTitle><Badge className="bg-emerald-700">All controls operational</Badge></CardHeader><CardContent className="grid gap-4 md:grid-cols-2">{[{t:"PostgreSQL schema isolation",i:Database},{t:"Canada Central residency",i:MapPin},{t:"RBAC enforcement",i:KeyRound},{t:"Immutable event logging",i:ScrollText}].map(({t,i:Icon})=><div key={t} className="flex items-center justify-between rounded-lg border p-4"><span className="flex items-center gap-3 text-sm font-medium"><Icon className="h-5 w-5 text-primary"/>{t}</span><CheckCircle2 className="h-5 w-5 text-emerald-600"/></div>)}</CardContent></Card></section>
      </div>
    </div>
  );
}