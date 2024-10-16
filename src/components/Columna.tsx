import { ReactNode } from "react";

type Props = {
    children: ReactNode
}


function Columna({children}: Props) {
  return (
    <div className="col">{children}</div>
  )
}

export default Columna