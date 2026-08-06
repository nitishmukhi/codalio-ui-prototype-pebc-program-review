import { useNavigate } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

import { Building2, ChevronRight, ScrollText, ShieldCheck } from "lucide-react";
const adminAreas = [
  {
    title: "Tenant administration",
    description: "Manage users, roles, integrations, and residency policies.",
    route: "/admin/tenant",
    icon: Building2,
  },
  {
    title: "Immutable audit logs",
    description: "Inspect system events and export signed compliance evidence.",
    route: "/admin/audit-logs",
    icon: ScrollText,
  },
];

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge>Administration</Badge>
          <Badge variant="outline">RBAC enforced</Badge>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Administration</h1>
        <p className="text-sm text-muted-foreground">Tenant governance, access, and compliance controls.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {adminAreas.map(({ title, description, route, icon: Icon }) => (
          <Card key={route} className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Icon className="h-4 w-4 text-primary" />
                {title}
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate(route)} className="w-full justify-between">
                Open area
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Security posture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between"><span>PostgreSQL schema isolation</span><Badge variant="secondary">Healthy</Badge></div>
            <Separator />
            <div className="flex items-center justify-between"><span>Canada Central residency</span><Badge variant="secondary">Enforced</Badge></div>
            <Separator />
            <div className="flex items-center justify-between"><span>RBAC enforcement</span><Badge variant="secondary">Active</Badge></div>
            <Separator />
            <div className="flex items-center justify-between"><span>Immutable event logging</span><Badge variant="secondary">Verified</Badge></div>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4" />
              Controls validated continuously.
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}