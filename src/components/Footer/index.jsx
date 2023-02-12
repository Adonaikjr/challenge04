import { Link } from "react-router-dom";
import { ContainerFooter } from "./styled";
import { Button } from "../Button";

export function Footer({ onClick, title }) {
  return (
    <ContainerFooter>
      <Link to="/">Go Back</Link>
      <Button title={title} onClick={onClick} />
    </ContainerFooter>
  );
}
