import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ScrollArea } from "../components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Separator } from "../components/ui/separator";
import { Textarea } from "../components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { AlertTriangle, Save } from "lucide-react";

export default function AssessorReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [decision, setDecision] = useState("approve");
  const [reasonCode, setReasonCode] = useState("policy-match");
  const [attested, setAttested] = useState(false);

  return (
    <div className="w-full min-w-0 space-y-4">
      <section className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2"><Badge>Pending Review</Badge><Badge variant="outline">Zero-retention AI</Badge></div>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">Assessor workspace · {id}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Save className="mr-2 h-4 w-4" />Save draft</Button>
          <Button variant="outline">Escalate</Button>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recommendation brief</CardTitle>
            <CardDescription>Review generated rationale with citations.</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple" defaultValue={["summary"]}>
              <AccordionItem value="summary">
                <AccordionTrigger>Summary recommendation</AccordionTrigger>
                <AccordionContent className="space-y-2 text-sm">
                  <p>Applicant meets the majority threshold for credential verification.</p>
                  <Button variant="link" className="h-auto p-0">Citation: Policy 4.2, page 11, paragraph 3</Button>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="risk">
                <AccordionTrigger>Risk observations</AccordionTrigger>
                <AccordionContent className="text-sm">Out-of-range signal on secondary training record. Manual review suggested.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Redacted document viewer</CardTitle></CardHeader>
          <CardContent>
            <ScrollArea className="h-72 rounded-md border bg-muted p-3 text-sm">
              <p className="mb-3">Document excerpt with citation highlights and redacted PII:</p>
              <p>Applicant completed required clinical rotation between [REDACTED] and [REDACTED].</p>
              <Separator className="my-3" />
              <p>Source line anchored to brief citation marker C-14.</p>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Decision</CardTitle>
            <CardDescription>Reason code and attestation are required before submission.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup value={decision} onValueChange={setDecision} className="grid gap-2 md:grid-cols-3">
              <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="approve" />Approve</Label>
              <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="decline" />Decline</Label>
              <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="request-info" />Request more information</Label>
            </RadioGroup>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Reason code</Label>
                <Select value={reasonCode} onValueChange={setReasonCode}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="policy-match">Policy match</SelectItem>
                    <SelectItem value="evidence-gap">Evidence gap</SelectItem>
                    <SelectItem value="needs-escalation">Needs escalation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Decision notes</Label>
                <Textarea placeholder="Document rationale for this decision." />
              </div>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Attestation required</AlertTitle>
              <AlertDescription>I confirm this decision is based on cited evidence and tenant policy.</AlertDescription>
            </Alert>

            <div className="flex items-center gap-2">
              <Checkbox checked={attested} onCheckedChange={(checked) => setAttested(checked === true)} id="attestation" />
              <Label htmlFor="attestation">I attest the decision and rationale are accurate.</Label>
            </div>

            <Button disabled={!attested} onClick={() => navigate(`/cases/${id}/confirmation`)}>Submit decision</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}