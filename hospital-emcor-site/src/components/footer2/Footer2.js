import React from "react";
import "./footer2.css"
import {
  Box,
  Container,Container2,
  Row,
  Column,
  FooterLink,FooterLinkLeft,
  Heading,Company,FooterLinkCenter,
  Img
} from "./Footer2Styles";
  
const Footer2 = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column className="left">
          <FooterLink href="/"><Img src="https://i.imgur.com/i9SSzTW.png" alt="EMCOR" /></FooterLink>

            <Container2 className="container-footer2-left">
                <FooterLinkLeft href="/"> Home </FooterLinkLeft>
                ||
                <FooterLinkLeft href="about.html"> Sobre </FooterLinkLeft>
                ||
                <FooterLinkLeft href="services.html"> Serviços </FooterLinkLeft>
                ||
                <FooterLinkLeft href="contact.html"> Contato </FooterLinkLeft>
            </Container2>
          </Column>
          <Column className="center"style= {{padding: 0}}>
            <Container>
    			<FooterLinkCenter  href="https://www.google.com/maps/place/Emcor+Emerg%C3%AAncia+Clin+Cardiol%C3%B3gica/@-22.7588528,-43.4474776,15z/data=!3m1!5s0x996700624f07e3:0x113dca8941349dfb!4m12!1m6!3m5!1s0x0:0x4f964c98fdd41219!2sEmcor+Emerg%C3%AAncia+Clin+Cardiol%C3%B3gica!8m2!3d-22.7588528!4d-43.4474776!3m4!1s0x0:0x4f964c98fdd41219!8m2!3d-22.7588528!4d-43.4474776"><Container2><i className="fa fa-map-marker" /><Container className="itens-center"style={{marginLeft: "20px"}}><span style={{fontSize: "16px", fontWeight: "normal"}}>Rua Nelson Ramos,</span> <span style={{fontSize: "16px"}}>733 Centro Nova Iguaçu - RJ</span></Container></Container2>
                </FooterLinkCenter>
                <Container2  style={{ fontWeight:"bold",marginBottom: "20px",alignItems:"center",justifyContent:"center"}}>
                    <i class="fa fa-phone"></i>
                    <p className="itens-center" style={{fontSize: "16px",margin: "8px 0px 8px 15px",textAlign:"center"}}>(21) 3759-8100</p>
                </Container2>
                <FooterLinkCenter   href="mailto:atendimento@hospitalemcor.com.br?Subject=Contato%20do%20Site"><Container2><i className="fa fa-envelope" /><span className="itens-center" style={{fontSize: "14px",marginLeft: "12px"}}> atendimento@hospitalemcor.com.br </span></Container2>
                </FooterLinkCenter>
    		</Container>
          </Column>
          <Column>
            <Heading>Sobre o Hospital</Heading>
            <p style={{color: "white", textAlign: "justify",padding:"0 10px",fontWeight:"normal"}}>Qui dolor amet ipsum qui ullamco nisi aliquip non commodo eiusmod laboris labore ex aute. Aliquip excepteur Lorem nostrud reprehenderit deserunt deserunt dolor adipisicing elit.</p>
          </Column>
        </Row>
        
      </Container>
      <Company style={{position: "absolute", top: "90%",left:"15%"}}>MAVs &copy; 2016</Company>
    </Box>
  );
};
export default Footer2;