import { ReactNode } from "react";
import styles from "./Alert.module.css";

type Props = {
  children: ReactNode;
  status: boolean;
  onClick: () => void;
};

export default function index(props: Props) {
    const { status, onClick, children } = props;
  return (
    <div onClick={onClick} className={[styles.alert, status ? styles.red : styles.blue].join(" ")}>
      {children}
    </div>
  );
}
