import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";


        

        export default function PipelineStatusBadge({ status = "Processing", progress = 58, showProgress = true, showEta = true, eta = "3 min" }) {
        return (
            <TooltipProvider><Tooltip><TooltipTrigger asChild><div className="flex min-w-40 items-center gap-2"><Badge variant={status === "Failed" ? "destructive" : "secondary"}>{status}</Badge>{showProgress && <Progress value={progress} className="h-2 w-20" />}</div></TooltipTrigger><TooltipContent>{showEta ? `Estimated completion: ${eta}` : status}</TooltipContent></Tooltip></TooltipProvider>
        );
        }