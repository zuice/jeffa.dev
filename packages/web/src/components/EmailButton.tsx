import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MailIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function EmailButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    try {
      navigator.clipboard.writeText("me@jeffa.dev");
    } catch (e) {}
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    return () => {
      setIsOpen(false);
    };
  }, [isOpen]);

  return (
    <TooltipProvider>
      <Tooltip open={isOpen}>
        <TooltipTrigger>
          <TooltipContent>
            <p>Copied to clipboard!</p>
          </TooltipContent>
          <Button className="flex gap-2" onClick={handleClick}>
            <MailIcon /> Copy email
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
}
