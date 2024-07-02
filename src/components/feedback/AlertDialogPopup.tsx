import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";

type TAlertDialog = {
  setsetShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  showAlert: boolean;
  headerMessage: string;
  message: string;
  navigateTo: string;
  textButton: string;
};

const AlertDialogPopup = ({
  showAlert,
  setsetShowAlert,
  headerMessage,
  message,
  navigateTo,
  textButton,
}: TAlertDialog) => {
  const navigate = useNavigate();
  return (
    <>
      {showAlert && (
        <AlertDialog defaultOpen>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{headerMessage}</AlertDialogTitle>
              <AlertDialogDescription>{message}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setsetShowAlert(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  setsetShowAlert(false);
                  navigate(navigateTo);
                }}
              >
                {textButton}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default AlertDialogPopup;
