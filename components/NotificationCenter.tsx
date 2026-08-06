
import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Bell, Check } from "lucide-react";

        export default function NotificationCenter() {
  const [unread, setUnread] = useState(3);
  const items = ["Case CA-1042 is ready for review", "Knowledge bundle synchronized", "Audit export completed"];
        return (
            <Popover><PopoverTrigger asChild><Button variant="ghost" size="icon" className="relative"><Bell className="h-5 w-5" />{unread > 0 && <Badge className="absolute -right-1 -top-1 h-5 min-w-5 px-1 text-[10px]">{unread}</Badge>}</Button></PopoverTrigger><PopoverContent align="end" className="w-96 max-w-[calc(100vw-2rem)] bg-popover text-popover-foreground"><Tabs defaultValue="in"><TabsList className="grid w-full grid-cols-3"><TabsTrigger value="in">In-app</TabsTrigger><TabsTrigger value="email">Email</TabsTrigger><TabsTrigger value="teams">Teams</TabsTrigger></TabsList><TabsContent value="in"><ScrollArea className="h-64"><div className="space-y-1">{items.map((item, index) => <div key={item} className="p-3"><div className="flex items-start justify-between gap-3"><p className="text-sm font-medium">{item}</p>{index < unread && <span className="mt-1 h-2 w-2 rounded-full bg-primary" />}</div><p className="mt-1 text-xs text-muted-foreground">PEBC Ontario · just now</p><Separator className="mt-3" /></div>)}</div></ScrollArea><Button variant="ghost" size="sm" className="mt-2 w-full gap-2" onClick={() => setUnread(0)}><Check className="h-4 w-4" />Mark all read</Button></TabsContent><TabsContent value="email" className="p-5 text-sm text-muted-foreground">Critical alerts and daily summaries are enabled.</TabsContent><TabsContent value="teams" className="p-5 text-sm text-muted-foreground">Microsoft Teams delivery is connected.</TabsContent></Tabs></PopoverContent></Popover>
        );
        }