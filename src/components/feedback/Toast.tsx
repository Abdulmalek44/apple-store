import Error from "@/assets/svg/error.svg?react";
import Check from "@/assets/svg/check.svg?react";

type ToastProps = {
  message: string;
  icon?: "check" | "error";
  outlineColor?: string;
};

const Toast = ({ message, icon, outlineColor }: ToastProps) => {
  return (
    <div
      className={`w-full ${outlineColor} bg-white border border-gray-200 rounded-lg shadow-lg outline  outline-1 `}
    >
      <div className="flex items-center p-4">
        <div className="flex-shrink-0">
          {icon === "check" ? (
            <Check className="w-5 h-5" />
          ) : (
            <Error className="w-5 h-5" />
          )}
        </div>
        <div className="ms-3">
          <p className="text-sm text-gray-700 ">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
