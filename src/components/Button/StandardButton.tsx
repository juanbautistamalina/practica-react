import { ReactNode } from "react"

type Props = {
    children: ReactNode,
    onClick: () => void,
}

function Btn(props: Props) {
    const {children, onClick} = props;
  return (
    <button onClick={onClick} type="button" className="btn btn-outline-primary">{children}</button>
  
  )
}

export default Btn