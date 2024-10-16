import { ReactNode } from "react";
import styles from "./SendButton.module.css";
import { IoPaperPlane } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

type Props = {
  sent: boolean;
  onClick: () => void;
  children: ReactNode;
};

export default function index({ sent, onClick, children }: Props) {
  return (
    <button 
    disabled={sent}
    onClick={onClick} 
    className={styles.btn}>
      {sent ? "Enviado" : children} {sent ? <FaCheck /> : <IoPaperPlane />}
    </button>
  );
}
