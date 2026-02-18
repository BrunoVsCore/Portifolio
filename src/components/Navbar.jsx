import React from 'react'
import styled from 'styled-components' //biblioteca que permite escrever CSS diretamente dentro dos arquivos JavaScript

const Section = styled.div`  //styled.div permite escrever diretamente css no JS
display:flex;
justify-content: center;
@media only screen and (max-width: 768px) {
        width: 100%;
    
}
`;


const Container = styled.div`
width: 1000px;
display:flex;
justify-content: space-between; //dara um espaço
align-items: center;
padding: 10px 0 px; //dará um espaço vertical  e da direita para esquerda sera 0
@media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
}
`;

const Links = styled.div`
display:flex;
align-items:center;
gap: 50px; //da um pequeno espaço Lateral
`;

const Logo = styled.img`
height: 50px;
`;

const List = styled.ul`
display:flex;
gap: 20px;
list-style: none; //remove os pontos da lista
@media only screen and (max-width: 768px) {
        display: none;
    
}
`;

const ListItem = styled.li`
cursor: pointer;  //altera o cursor ao passar o Mouse

font-size:20px;
font-weight: bold;
`;
const Icons = styled.div`
display:flex;
gap: 20px;
align-items:center;
`;

const Icon = styled.img`
width: 20px;
cursor: pointer;
margin-top:7px;
`;
const Button = styled.button`
background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top:5px;

`;

const Img = styled.img`
  height: 50px;

  

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;






//HTML ESTRUTURA
const Navbar = () => { 
  const scrollToContanct = () => {
    const ContactSection = document.getElementById("Contact");  
    ContactSection.scrollIntoView({ behavior: 'smooth'});
    

  };

  return (
    <Section>
        <Container>
            <Links>
              <Img src ="./img/logo.png"/>
                <List>
                    <ListItem>Início</ListItem>
                    <ListItem>Estúdio</ListItem>
                    <ListItem>Trabalhos</ListItem>
                    <ListItem>Contato</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src ="./img/search.png"/>
                <Button onClick={scrollToContanct}>Contratar</Button>                
            </Icons>
        </Container>
    </Section>
  )
}


export default Navbar