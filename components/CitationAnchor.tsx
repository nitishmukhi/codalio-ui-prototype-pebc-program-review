

import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
        export default function CitationAnchor({ page = 4, paragraph = 2, label = "View evidence", onCitationClick = () => {} }) {
        return (
            <TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="link" className="h-auto gap-2 p-0 text-primary underline-offset-4" onClick={onCitationClick}><Badge variant="outline">p. {page} · ¶ {paragraph}</Badge>{label}<ExternalLink className="h-3 w-3" /></Button></TooltipTrigger><TooltipContent>Open cited source passage</TooltipContent></Tooltip></TooltipProvider>
        );
        }