import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import ContenedorCuadricula from "./ContenedorCuadricula";
import Columna from "./Columna";
import Card from "../components/Card";
import Lista from "../components/Lista";
import StandardButton from "./Button/StandardButton";
import CustomButton from "./Button/CustomButton";
import SendButton from "./SendButton"
import Alert from "../components/Alert"

import ProductList from "./ProductList";


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
    "Actualización por Lotes",
    "Anidación de hooks",
    "Mutabilidad vs Inmutabilidad",
    "Actualizar Objetos",
    "Propiedades anidadas",
    "Trabajar con arrays"
  ];

  const lista = ["Elemento 1", "Elemento 2", "Elemento 3"];

  // Añadir elementos a la lista
  const [data, setData] = useState(lista);
  const addElement = () => {
    setData([...data, "Nuevo Elemento"]);
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


  // Funcionalidad 
  const [products, setProducts] = useState([{
    id: Math.random().toString(),
    name: "iPhone",
  }]);

  // 1. Agregar un producto al comienzo
  const comienzo = () => {
    const newProduct = {
      id: Math.random().toString(),
      name: "Android"
    }

    const newProducts = [newProduct, ...products]
    setProducts(newProducts);
  }


  // 2. Agregar un producto al final
  const final = () => {
    const newProduct = {
      id: Math.random().toString(),
      name: "Windows"
    }

    const newProducts = [...products, newProduct]
    setProducts(newProducts);
  }


	// 3. Eliminar el último elemento
  const eliminar = () => {
    const lastProduct = [...products];
    lastProduct.pop();
    setProducts(lastProduct);
  }

  // 4. Limpiar lista de productos
  const limpiar = () => {
    setProducts([]);
  }


  return (
    <ContenedorCuadricula>
      <Columna>
        <Card titulo="1. Fundamentos">
          <Card titulo="Título de la Tarjeta" descripcion="Descripción de la tarjeta"/><Card>
            <CustomButton color={true} onClick={addElement}>Agregar</CustomButton>
            <CustomButton color={false} onClick={removeElement}>Eliminar</CustomButton>
            <Lista lista={data} />
          </Card>
        </Card>
      </Columna>

      <Columna>
        <Card titulo="2. Estilos">
          <Alert status={status} onClick={toggleStatus}>Alerta!</Alert>
          <SendButton sent={sent} onClick={handleClick}>Enviar</SendButton>
        </Card>
      </Columna>

      <Columna>
        <Card titulo="3. Estado">
        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
            {/* Agregar un producto al comienzo */}
            <StandardButton onClick={comienzo}>Comienzo</StandardButton> 

            {/* Agregar un producto al final */}
            <StandardButton onClick={final}>Final</StandardButton>

            {/* Eliminar el último elemento */}
            <StandardButton onClick={eliminar}>Eliminar</StandardButton>

            {/* Limpiar la lista de productos */}
            <StandardButton onClick={limpiar}>Limpiar</StandardButton>
          </div>
          <ProductList products={products} />
        </Card>
      </Columna>

      <Columna>
        <Card titulo="Temas Aprendidos" icono={<FaCheckCircle />}>
          <Lista lista={temas} />
        </Card>
      </Columna>
    </ContenedorCuadricula>
  );
}
