
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Separator } from "./ui/separator";

        export default function Footer() {
        return (
            <footer className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8"><Separator/><div className="flex flex-col gap-3 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center"><span className="flex items-center gap-2 font-medium text-foreground"><ShieldCheck className="h-4 w-4 text-primary"/>Codalio Living</span><span>Canadian-hosted governance infrastructure</span><Link to="/admin/audit-logs" className="sm:ml-auto hover:text-foreground">Audit controls</Link></div></footer>
        );
        }