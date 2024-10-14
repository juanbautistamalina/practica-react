import { useState } from "react";

type Props = {
  lista: string[];
};

function Lista(props: Props) {
  // Funcionalidad para seleccionar elemento
  const [index, setIndex] = useState(-1);
  const addElement = (elemento: number) => {
    setIndex(elemento);
  };

  // Funcionalidad para eliminar elementos
  const removeElement = (elemento: number) => {
    setIndex(elemento);
  };

  const { lista } = props;
  return (
    <ul className="list-group">
      {lista.map((elemento, i) => (
        <li
          className={`list-group-item ${index == i ? "active" : ""}`}
          style={{ listStyle: "none" }}
          key={i}
          onClick={() => addElement(i)}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
