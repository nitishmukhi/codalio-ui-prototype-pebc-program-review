import { useParams, useNavigate } from "react-router-dom";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { CheckCircle2 } from "lucide-react";

export default function DecisionConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="w-full min-w-0 py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <Badge>Decision recorded</Badge>
          </div>
          <CardTitle>Decision recorded for {id}</CardTitle>
          <CardDescription>Submission is now part of the immutable audit history.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="grid gap-2 md:grid-cols-2">
            <div><p className="text-muted-foreground">Timestamp</p><p>2026-08-06 13:45 UTC</p></div>
            <div><p className="text-muted-foreground">Reason code</p><p>policy-match</p></div>
            <div><p className="text-muted-foreground">Audit event ID</p><p>EVT-88A1</p></div>
            <div><p className="text-muted-foreground">Actor</p><p>Assessor · j.singh</p></div>
          </div>
          <Separator />
          <Alert>
            <AlertTitle>Immutable record</AlertTitle>
            <AlertDescription>This confirmation cannot be altered or removed.</AlertDescription>
          </Alert>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => navigate("/cases")}>Return to pipeline</Button>
            <Button variant="outline" onClick={() => navigate("/admin/audit-logs")}>View audit trail</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}