import React, { useState } from "react";
import styled from "styled-components";

import Development from "./Development"
import ProductDesign from "./ProductDesign"
import WebDesign from "./WebDesign"
import Ilustration from "./Ilustration";
import Automation from "./Automation"



const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Automation",
  
];
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 12px;
  font-weight: 350

`;
const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction:column;
  }
  
 
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 65px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  position: relative;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.3s ease;

  &:hover {
    border-bottom: 2px solid white;
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
`;




const Right = styled.div`
  flex: 1;
`;




const Works = () => {
  const [work,setWork] = useState("Web Design")
  return (
    <Section id="Works">
      <Container>
        <Left>
          <List>
           {data.map((item) =>(
            <ListItem key={item} text={item} onMouseEnter={()=>setWork(item)}>
              {item}
            </ListItem>
           ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
          <WebDesign />
        ) : work === "Development" ? (
          <Development />
        ) : work === "Illustration" ? (
          <Ilustration />
        ) : work === "Product Design" ?(
          <ProductDesign/>
        ) : work === "Automation" ?(
          <Automation/>     
        ) : (
          <none/>
        )}

      
      
      
      

      
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
