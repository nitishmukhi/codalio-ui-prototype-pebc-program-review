import React from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

import { CheckCircle2, LockKeyhole } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function DecisionConfirmation() {
    const { id } = useParams();
  return (
   <div className="w-full min-w-0 overflow-x-hidden">
      <div className="flex min-h-[70vh] w-full items-center justify-center py-8 min-w-0">
          <section><Card className="mx-auto max-w-2xl overflow-hidden"><div className="h-1.5 bg-emerald-600"/><CardHeader className="text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 className="h-8 w-8"/></span><CardTitle className="mt-3 text-2xl">Decision recorded</CardTitle><CardDescription>Case {id || "CA-1042"} has been finalized.</CardDescription></CardHeader><CardContent className="space-y-6"><div className="grid gap-4 rounded-lg bg-muted p-5 sm:grid-cols-2"><div><p className="text-xs text-muted-foreground">Decision</p><p className="font-semibold">Approve</p></div><div><p className="text-xs text-muted-foreground">Reason code</p><p className="font-semibold">Meets all requirements</p></div><div><p className="text-xs text-muted-foreground">Recorded</p><p className="font-medium">May 21, 2025 · 2:42 PM</p></div><div><p className="text-xs text-muted-foreground">Audit event</p><p className="font-mono text-sm">evt_8f21c</p></div></div><Alert><LockKeyhole className="h-4 w-4"/><AlertTitle>Immutable record sealed</AlertTitle><AlertDescription>This decision, rationale, citations, and attestation cannot be modified.</AlertDescription></Alert><Separator/><div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><Button variant="outline" asChild><Link to="/admin/audit-logs">View audit trail</Link></Button><Button asChild><Link to="/cases">Return to pipeline</Link></Button></div></CardContent></Card></section>
      </div>
    </div>
  );
}