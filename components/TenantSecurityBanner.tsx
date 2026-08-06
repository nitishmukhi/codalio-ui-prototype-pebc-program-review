

import { ShieldCheck } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Badge } from "./ui/badge";

        export default function TenantSecurityBanner() {
        return (
            <Alert className="border-primary/20 bg-accent text-accent-foreground">
    <ShieldCheck className="h-4 w-4" />
    <AlertTitle>Protected workspace</AlertTitle>
    <AlertDescription className="mt-2 flex flex-wrap gap-2">{["Schema Isolated", "Canada Central", "Zero-Retention AI", "Immutable Logging"].map((item) => <Badge key={item} variant="outline">{item}</Badge>)}</AlertDescription>
    </Alert>
        );
        }