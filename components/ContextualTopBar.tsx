
import { ChevronDown, MapPin } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import NotificationCenter from "./NotificationCenter";

        export default function ContextualTopBar() {
        return (
            <header className="sticky top-0 z-40 flex h-16 items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur md:px-6"><SidebarTrigger /><Separator orientation="vertical" className="h-6" /><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" className="min-w-0 gap-2"><span className="truncate font-medium">PEBC - Ontario Schema</span><ChevronDown className="h-4 w-4" /></Button></DropdownMenuTrigger><DropdownMenuContent className="bg-popover text-popover-foreground"><DropdownMenuLabel>Select tenant</DropdownMenuLabel><DropdownMenuItem>PEBC - Ontario Schema</DropdownMenuItem><DropdownMenuItem>National Sandbox</DropdownMenuItem></DropdownMenuContent></DropdownMenu><Badge variant="secondary" className="hidden sm:inline-flex">Schema Isolated</Badge><div className="ml-auto flex items-center gap-2"><div className="hidden items-center gap-1 text-xs text-muted-foreground lg:flex"><MapPin className="h-3.5 w-3.5" />Canada Central</div><NotificationCenter /><DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" className="rounded-full"><Avatar className="h-8 w-8"><AvatarFallback>AM</AvatarFallback></Avatar></Button></DropdownMenuTrigger><DropdownMenuContent align="end" className="bg-popover text-popover-foreground"><DropdownMenuLabel>Alex Morgan</DropdownMenuLabel><DropdownMenuSeparator /><DropdownMenuItem>Profile</DropdownMenuItem><DropdownMenuItem>Role: Tenant Admin</DropdownMenuItem><DropdownMenuItem>Sign out</DropdownMenuItem></DropdownMenuContent></DropdownMenu></div></header>
        );
        }