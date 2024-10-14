import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function Cuadricula(props: Props) {
    const {children} = props;
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">{children}</div>

      </div>
    </div>
  );
}
