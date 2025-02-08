import { TotalContainer, CheckoutButton, AdditionalInfo } from "./styles";

interface totalProps {
  total: number;
  shipping: number;
}

const TotalCard = ({total, shipping}: totalProps) => {
  return (
    <>
      <TotalContainer>
        <h2>Resumo do Pedido</h2>
        <p>Subtotal: R$ {(total).toFixed(2)}</p>
        <p>Entrega: R$ {shipping.toFixed(2)}</p>
        <hr />
        <p><strong>Total: R$ {((total) + shipping).toFixed(2)}</strong></p>
        <CheckoutButton>Finalizar Compra</CheckoutButton>
      </TotalContainer>
      <AdditionalInfo>
        <h4>AJUDA</h4>
        <h4>REEMBOLSOS</h4>
        <h4>ENTREGAS E FRETE</h4>
        <h4>TROCAS E DEVOLUÇÕES</h4>
      </AdditionalInfo>
    </>
  )
}

export default TotalCard;