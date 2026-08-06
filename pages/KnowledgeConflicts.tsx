import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { ScrollArea } from "../components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function KnowledgeConflicts() {
  const navigate = useNavigate();
  const [resolution, setResolution] = useState("keep-current");
  const [reason, setReason] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div className="w-full min-w-0 space-y-6">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Badge>Conflict resolution</Badge>
            <Badge variant="outline">Last write wins</Badge>
          </div>
          <Button variant="outline" onClick={() => navigate("/knowledge-base")}>Back to library</Button>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Resolve synchronization conflicts</h1>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Audit note</AlertTitle>
          <AlertDescription>Every override is written to the immutable audit log.</AlertDescription>
        </Alert>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Conflict resolver</CardTitle>
            <CardDescription>Inspect incoming JSON, current library state, and computed diff.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="incoming" className="w-full">
              <TabsList>
                <TabsTrigger value="incoming">Incoming JSON</TabsTrigger>
                <TabsTrigger value="current">Current library</TabsTrigger>
                <TabsTrigger value="diff">Diff</TabsTrigger>
              </TabsList>
              <TabsContent value="incoming">
                <ScrollArea className="h-44 rounded-md border p-3 text-xs">{"{ \"component\": \"eligibility.rule.5\", \"threshold\": 0.72, \"source\": \"bundle-v11\" }"}</ScrollArea>
              </TabsContent>
              <TabsContent value="current">
                <ScrollArea className="h-44 rounded-md border p-3 text-xs">{"{ \"component\": \"eligibility.rule.5\", \"threshold\": 0.68, \"source\": \"bundle-v10\" }"}</ScrollArea>
              </TabsContent>
              <TabsContent value="diff">
                <ScrollArea className="h-44 rounded-md border p-3 text-xs">threshold: <span className="text-primary">0.68 → 0.72</span></ScrollArea>
              </TabsContent>
            </Tabs>

            <div className="space-y-2">
              <Label>Resolution strategy</Label>
              <RadioGroup value={resolution} onValueChange={setResolution} className="grid gap-2 md:grid-cols-3">
                <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="keep-current" />Keep current</Label>
                <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="use-incoming" />Use incoming</Label>
                <Label className="flex items-center gap-2 rounded-md border p-3"><RadioGroupItem value="manual-merge" />Manual merge</Label>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Override reason (required)</Label>
              <Textarea value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Document business justification" />
            </div>

            <Button onClick={() => setConfirmOpen(true)} disabled={!reason.trim()}>Confirm override</Button>
          </CardContent>
        </Card>
      </section>

      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm conflict override</DialogTitle>
            <DialogDescription>This action updates the active knowledge component and records your rationale.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button onClick={() => setConfirmOpen(false)}>Finalize override</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}