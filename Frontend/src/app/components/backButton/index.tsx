import { FaBackward } from "react-icons/fa";
import { BackButtonComponent } from "./styles";
import { RiArrowGoBackLine } from "react-icons/ri";

const BackButton = () => {
  return (
    <BackButtonComponent href="/"><RiArrowGoBackLine />Voltar</BackButtonComponent>
  )
}

export default BackButton;