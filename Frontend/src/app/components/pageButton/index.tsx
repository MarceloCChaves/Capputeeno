import { Container, PageButtonComponent } from "./styles";

interface pageButtonProps {
  number: number;
  isClicked: boolean;
  handleClick: () => void;
}

const PageButton = ({ number, isClicked, handleClick }: pageButtonProps) => {
  return (
    <Container>
      <PageButtonComponent
        className={isClicked ? "clicked" : ""}
        onClick={handleClick}>{number}
      </PageButtonComponent>
    </Container>
  )
}

export default PageButton;