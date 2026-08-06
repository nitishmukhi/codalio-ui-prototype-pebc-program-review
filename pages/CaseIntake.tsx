import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

import { ShieldCheck, Upload } from "lucide-react";
export default function CaseIntake() {
  const [applicantReference, setApplicantReference] = useState("");
  const [program, setProgram] = useState("pebc");
  const [jurisdiction, setJurisdiction] = useState("on");
  const [assessmentType, setAssessmentType] = useState("initial");
  const [consentChecked, setConsentChecked] = useState(false);
  const [uploadReady, setUploadReady] = useState(false);

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Tenant isolated</Badge>
          <Badge variant="outline">Canada Central</Badge>
          <Badge variant="outline">Encrypted upload</Badge>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">New case intake</h1>
        <Progress value={26} className="max-w-xl" />
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Case details</CardTitle>
            <CardDescription>Complete required fields before moving to validation and redaction.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Applicant reference</Label>
                <Input value={applicantReference} onChange={(event) => setApplicantReference(event.target.value)} placeholder="e.g. APPL-1039" />
              </div>
              <div className="space-y-2">
                <Label>Program</Label>
                <Select value={program} onValueChange={setProgram}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pebc">PEBC</SelectItem>
                    <SelectItem value="bridging">Bridging</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Jurisdiction</Label>
                <Select value={jurisdiction} onValueChange={setJurisdiction}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="on">Ontario</SelectItem>
                    <SelectItem value="bc">British Columbia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Assessment type</Label>
                <Select value={assessmentType} onValueChange={setAssessmentType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="initial">Initial review</SelectItem>
                    <SelectItem value="re-review">Re-review</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Case context</Label>
              <Textarea placeholder="Add notes, policy references, and urgency details." />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox checked={consentChecked} onCheckedChange={(checked) => setConsentChecked(checked === true)} id="consent" />
              <Label htmlFor="consent">I confirm lawful document handling for this tenant.</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">Save draft</Button>
              <Button disabled={!applicantReference || !consentChecked}>Continue</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Secure document upload</CardTitle>
            <CardDescription>Accepted formats: PDF, DOCX</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full" onClick={() => setUploadReady(true)}>
              <Upload className="mr-2 h-4 w-4" />
              Add documents
            </Button>
            <Progress value={uploadReady ? 78 : 0} />
            <Alert>
              <ShieldCheck className="h-4 w-4" />
              <AlertTitle>Validation checks</AlertTitle>
              <AlertDescription>Malware scan, access control, PII detection, and Apryse redaction preview.</AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}