import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Textarea } from "../components/ui/textarea";
import { AlertTriangle } from "lucide-react";

export default function OperatorOversight() {
  const [caseId, setCaseId] = useState("CASE-9015");
  const [errorType, setErrorType] = useState("citation");
  const [expectedCatch, setExpectedCatch] = useState("high");
  const [attested, setAttested] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="space-y-3">
        <div className="flex items-center gap-2"><Badge>Seeded-error oversight</Badge><Badge variant="outline">Operator scope only</Badge></div>
        <h1 className="text-2xl font-semibold tracking-tight">Seeded-error program</h1>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Visibility control</AlertTitle>
          <AlertDescription>Seeded-error markers are never shown in assessor views.</AlertDescription>
        </Alert>
      </section>

      <section className="grid gap-4 xl:grid-cols-[2fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Seeded error builder</CardTitle>
            <CardDescription>Select eligible case and configure expected catch behavior.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={74} />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Eligible case</Label>
                <Select value={caseId} onValueChange={setCaseId}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="CASE-9015">CASE-9015</SelectItem>
                    <SelectItem value="CASE-9033">CASE-9033</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Error type</Label>
                <Select value={errorType} onValueChange={setErrorType}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citation">Citation mismatch</SelectItem>
                    <SelectItem value="policy">Policy omission</SelectItem>
                    <SelectItem value="threshold">Threshold drift</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Expected catch level</Label>
              <RadioGroup value={expectedCatch} onValueChange={setExpectedCatch} className="grid gap-2 md:grid-cols-3">
                <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="high" />High confidence</Label>
                <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="medium" />Medium confidence</Label>
                <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="low" />Low confidence</Label>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Operator notes</Label>
              <Textarea placeholder="Describe expected assessor behavior and evidence markers." />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox checked={attested} onCheckedChange={(checked) => setAttested(checked === true)} id="attest" />
              <Label htmlFor="attest">I attest this injection is for controlled evaluation only.</Label>
            </div>

            <Button disabled={!attested} onClick={() => setOpen(true)}>Confirm injection</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Active evaluations</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader><TableRow><TableHead>Evaluation</TableHead><TableHead>Result</TableHead></TableRow></TableHeader>
              <TableBody>
                <TableRow><TableCell>EVAL-2104</TableCell><TableCell><Badge variant="secondary">Running</Badge></TableCell></TableRow>
                <TableRow><TableCell>EVAL-2102</TableCell><TableCell><Badge variant="outline">Captured</Badge></TableCell></TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Inject seeded error?</DialogTitle>
            <DialogDescription>This will create an operator-only evaluation event and immutable log record.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Inject</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}