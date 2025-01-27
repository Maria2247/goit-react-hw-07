import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Error() {
  useEffect(() => {
    toast.error("Oops, something is wrong...", {
      id: "error-toast",
      duration: 5000,
      position: "bottom-center",
      color: "#bc1f1f",
      padding: "15px",
      border: "1px solid #bc1f1f",
    });
  }, []);
  return (
    <div>
      <Toaster />
    </div>
  );
}
