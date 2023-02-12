import { ContainerButton } from "./styled";

export function Button({ title, onClick }) {
  return (
    <ContainerButton>
      <button onClick={onClick}> {title} </button>
    </ContainerButton>
  );
}