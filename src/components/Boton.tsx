import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    onClick: () => void,
    color: boolean
}

function Boton(props: Props) {
    const {children, onClick, color} = props;
  return (
    <button style={{margin: "10px"}} onClick={onClick} type="button" className={`btn btn-${color ? "success" : "danger"}`}>{children}</button>
  )
}

export default Boton