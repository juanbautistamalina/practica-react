import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Card from "../components/Card";
import Lista from "../components/Lista";
import Boton from "../components/Boton";
import Button from "../components/Button"
import Alert from "../components/Alert"
import { FaCheckCircle } from "react-icons/fa";

export default function Contenedor() {
  const temas = [
    "Componentes",
    "Props",
    "Children",
    "Listas",
    "Eventos",
    "Estado",
    "Renderizado Condicional",
    "Inline Style",
    "Módulos de CSS",
    "React Icons",
  ];

  const lista = ["Juan", "Simón", "Walter"];

  // Añadir elementos a la lista
  const [data, setData] = useState(lista);
  const addElement = () => {
    setData([...data, "elemento"]);
  };

  // Seleccionar elemento en lista
  const removeElement = () => {
    const newData = [...data];
    newData.pop();
    setData([...newData]);
  };

  // Funcionalidad Alert
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);

  // Funcionalidad Button (Enviar - Enviado)
  const [sent, setSent] = useState(false);
  const handleClick = () => setSent(true)

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
        <Card titulo="1. Fundamentos">
          <Card titulo="Título de la Tarjeta" descripcion="Descripción de la tarjeta"/><Card>
            <Boton color={true} onClick={addElement}>Agregar</Boton>
            <Boton color={false} onClick={removeElement}>Eliminar</Boton>
            <Lista lista={data} />
          </Card>
        </Card>
        </div>
        <div className="col">
            <Card titulo="2. Estilos">
                <Alert status={status} onClick={toggleStatus}>Alerta!</Alert>
                <Button sent={sent} onClick={handleClick}>Enviar</Button>
            </Card>
        </div>
        <div className="col">
            <Card titulo="3. Estado">
                
            </Card>
        </div>
        <div className="col">
          <Card titulo="Temas Aprendidos" icono={<FaCheckCircle />}>
            <Lista lista={temas} />
          </Card>
        </div>
      </div>
    </div>
  );
}
