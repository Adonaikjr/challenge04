import { ContainerCard } from "./styled";

export function Card({ img, price, title, monthsFree, children }) {
  return (
    <ContainerCard>
      {children}
      {img}
      <h3>{title}</h3>
      <p>${price}</p>
      <span>{monthsFree}</span>
    </ContainerCard>
  );
}

