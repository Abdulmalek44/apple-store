import { TPrice } from "@/Types";
import { Button } from "../ui/button";
import { AlertDialogPopup } from "../feedback";
import { useState } from "react";

type TSummary = {
  subtotal: TPrice | null;
};
const Summary = ({ subtotal }: TSummary) => {
  const [showAlert, setsetShowAlert] = useState(false);
  return (
    <div className="flex flex-col col-span-1 border-[1px] rounded-md h-fit py-4">
      <span className="p-4 font-bold border-b-[1px]">Summary</span>
      <div className="flexBetween p-4 border-b-[1px]">
        <span>Delivery Charge</span>
        <span className="">$0</span>
      </div>
      <div className="flexBetween p-4 font-bold border-b-[1px]">
        <span>Grand Total</span>
        <span>{subtotal?.formatted_with_symbol}</span>
      </div>
      <Button className="mt-4 mx-3" onClick={() => setsetShowAlert(true)}>
        Checkout Now
      </Button>
      <AlertDialogPopup
        showAlert={showAlert}
        setsetShowAlert={setsetShowAlert}
        headerMessage="Almost There!"
        message="  You're just a few steps away from completing your purchase. Take a moment to review your cart and ensure everything is perfect."
        navigateTo="/checkout"
        textButton="Checkout"
      />
    </div>
  );
};

export default Summary;
