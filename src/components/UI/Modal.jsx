import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  const dialogRef = useRef();

  useEffect(() => {
    // Store the current value of the ref in a constant to persist the reference
    // throughout the effect's execution and avoid potential issues if the ref changes
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    }

    // Clean-up function to ensure the dialog is properly closed
    // when the component unmounts or before re-running the effect
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
