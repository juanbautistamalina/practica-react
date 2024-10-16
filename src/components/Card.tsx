import { ReactNode } from "react";

type Props = {
  titulo?: string;
  icono?: ReactNode
  descripcion?: string;
  children?: ReactNode
};

export default function Componente(props: Props) {
  const { titulo, descripcion, children, icono } = props;

  return (
    <div className="card" style={{marginTop: "20px"}}>
      <div className="card-body">
        <h5 className="card-title">{titulo} {icono}</h5>
        <p className="card-text">{descripcion}</p>
        {children}
      </div>
    </div>
  );
}
