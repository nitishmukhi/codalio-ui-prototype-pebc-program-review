
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { ShieldCheck } from "lucide-react";
        export default function Header() {
        return (
            <header className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8"><Link to="/" className="flex items-center gap-2 font-semibold"><span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground"><ShieldCheck className="h-5 w-5"/></span>Codalio Living</Link><Badge variant="outline" className="ml-3 hidden sm:inline-flex">Canada Central</Badge><Button className="ml-auto" asChild><Link to="/dashboard">Open workspace</Link></Button></header>
        );
        }