import { ContainerSection } from "./styled";

export function Section({ title, text }) {
  return (
    <ContainerSection>
      <h1>{title}</h1>
      <p>{text} </p>
    </ContainerSection>
  );
}
