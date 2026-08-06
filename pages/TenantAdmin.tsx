import React from "react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import { MapPin, MoreHorizontal, Save, ShieldCheck, UserPlus } from "lucide-react";
import { useState } from "react";

export default function TenantAdmin() {
    const [name, setName] = useState("PEBC - Ontario Schema");
    const [mfa, setMfa] = useState(true);
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex w-full flex-col gap-8 min-w-0">
          <section className="space-y-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="flex flex-wrap gap-2"><Badge><ShieldCheck className="mr-1 h-3 w-3"/>Schema Isolated</Badge><Badge variant="outline"><MapPin className="mr-1 h-3 w-3"/>Canada Central</Badge></div><h1 className="mt-3 text-3xl font-semibold tracking-tight">PEBC - Ontario Schema</h1><p className="mt-2 text-muted-foreground">Tenant administration and access controls</p></div><Button><UserPlus className="mr-2 h-4 w-4"/>Invite user</Button></div><Tabs defaultValue="overview"><TabsList className="h-auto flex-wrap justify-start"><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="roles">Users & roles</TabsTrigger><TabsTrigger value="notifications">Notifications</TabsTrigger><TabsTrigger value="integrations">Integrations</TabsTrigger></TabsList><TabsContent value="overview"><Card><CardHeader><CardTitle>Tenant profile</CardTitle><CardDescription>Core organization and residency settings.</CardDescription></CardHeader><CardContent className="grid gap-5 sm:grid-cols-2"><div className="space-y-2"><Label>Tenant name</Label><Input value={name} onChange={(e)=>setName(e.target.value)}/></div><div className="space-y-2"><Label>Schema key</Label><Input value="pebc_ontario" disabled/></div><Label className="flex items-center justify-between rounded-lg border p-4 sm:col-span-2">Require MFA for all users<Switch checked={mfa} onCheckedChange={setMfa}/></Label><Button className="sm:col-span-2 sm:w-fit"><Save className="mr-2 h-4 w-4"/>Save settings</Button></CardContent></Card></TabsContent><TabsContent value="roles"><Card><CardContent className="p-6 text-sm text-muted-foreground">Role assignment and least-privilege controls are listed below.</CardContent></Card></TabsContent><TabsContent value="notifications"><Card><CardContent className="p-6 text-sm">Daily compliance summary enabled.</CardContent></Card></TabsContent><TabsContent value="integrations"><Card><CardContent className="p-6 text-sm">Microsoft Teams · Connected<br/>SharePoint · Connected<br/>Certemy · Available</CardContent></Card></TabsContent></Tabs></section>
  <section><Card><CardHeader><CardTitle>Users and access</CardTitle></CardHeader><CardContent className="overflow-x-auto"><Table><TableHeader><TableRow><TableHead>User</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Last active</TableHead><TableHead></TableHead></TableRow></TableHeader><TableBody>{[["Alex Morgan","AM","Tenant Admin","Active","Now"],["Jordan Chen","JC","Assessor","Active","8 min ago"],["Priya Shah","PS","Auditor","Active","Yesterday"]].map(r=><TableRow key={r[0]}><TableCell><div className="flex items-center gap-3"><Avatar className="h-8 w-8"><AvatarFallback>{r[1]}</AvatarFallback></Avatar><span className="font-medium">{r[0]}</span></div></TableCell><TableCell>{r[2]}</TableCell><TableCell><Badge variant="secondary">{r[3]}</Badge></TableCell><TableCell>{r[4]}</TableCell><TableCell><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4"/></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="bg-popover text-popover-foreground"><DropdownMenuItem>Edit role</DropdownMenuItem><DropdownMenuItem>Suspend user</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell></TableRow>)}</TableBody></Table></CardContent></Card></section>
      </div>
    </div>
  );
}