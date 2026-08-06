import { useState } from "react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Switch } from "../components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { MoreHorizontal, UserPlus } from "lucide-react";

export default function TenantAdmin() {
  const [digestEnabled, setDigestEnabled] = useState(true);

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2"><Badge>Schema isolated</Badge><Badge variant="outline">Canada Central</Badge></div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">PEBC - Ontario Schema</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><UserPlus className="mr-2 h-4 w-4" />Invite user</Button>
          <Button>Edit tenant</Button>
        </div>
      </section>

      <section>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users & roles</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="residency">Data residency</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader><CardTitle>Tenant profile</CardTitle><CardDescription>Core tenant metadata and access defaults.</CardDescription></CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label>Tenant name</Label><Input defaultValue="PEBC - Ontario Schema" /></div>
                <div className="space-y-2"><Label>Default assessor role</Label><Select defaultValue="assessor"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="assessor">Assessor</SelectItem><SelectItem value="auditor">Auditor</SelectItem></SelectContent></Select></div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader><CardTitle>Users and access</CardTitle></CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader><TableRow><TableHead>User</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Last active</TableHead><TableHead>Actions</TableHead></TableRow></TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell><div className="flex items-center gap-2"><Avatar className="h-7 w-7"><AvatarFallback>JS</AvatarFallback></Avatar>j.singh</div></TableCell>
                      <TableCell>Assessor</TableCell><TableCell><Badge variant="secondary">Active</Badge></TableCell><TableCell>5m ago</TableCell>
                      <TableCell><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="bg-popover text-popover-foreground"><DropdownMenuItem>Edit role</DropdownMenuItem><DropdownMenuItem>Suspend</DropdownMenuItem></DropdownMenuContent></DropdownMenu></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card>
              <CardHeader><CardTitle>Notifications</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div><p className="font-medium">Daily compliance digest</p><p className="text-sm text-muted-foreground">Send immutable log summaries to admins.</p></div>
                  <Switch checked={digestEnabled} onCheckedChange={setDigestEnabled} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations"><Card><CardHeader><CardTitle>Integrations</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Microsoft Teams, SharePoint, and Certemy connectors configured per tenant.</CardContent></Card></TabsContent>
          <TabsContent value="residency"><Card><CardHeader><CardTitle>Data residency</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">All records and logs remain in Canada Central for this tenant.</CardContent></Card></TabsContent>
        </Tabs>
      </section>
    </div>
  );
}