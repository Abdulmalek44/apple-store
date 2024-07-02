import { ReactNode } from "react";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipRoot,
} from "../ui/tooltip";

const Tooltip = ({
  componente,
  message,
}: {
  componente: ReactNode;
  message: string;
}) => {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger>{componente}</TooltipTrigger>
        <TooltipContent>
          <p>{message}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};

export default Tooltip;
