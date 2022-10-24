
import styled from "styled-components";

function Error({err}){
return(
    <Container>
      <Message>{err}</Message>
    </Container>
)
}

export default Error

const Container = styled.div`
color: red;
display: flex;
padding: 8px;
align-items: center;
gap: 8px;
`

const Message = styled.p`
margin: 0;
`