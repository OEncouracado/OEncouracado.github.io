import React from 'react';
import { CDBBox ,CDBFooter, CDBFooterLink, CDBBtn, CDBIcon } from 'cdbreact';
import "./footer.css";
import emcorbranco from "../../images/emcorbranco.jpg"

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '90%',color:'black',textdecoration: 'nome'}}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox className={"esquerda"}>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src={emcorbranco}
                width="150px"
              />
            </a>
            <span className="align-items-center ml-4 h5 font-weight-bold">Hospital EMCOR</span>
          </CDBBox>
          <CDBBox className={"centro-direita"} display="flex" style={{ width: '60%' }} justifyContent="between">
            <CDBBox className={"centro"}>
              <CDBBox className="d-inline-CDBBox" display="inline-block" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="https://www.google.com/maps/place/Emcor+Emerg%C3%AAncia+Clin+Cardiol%C3%B3gica/@-22.7588528,-43.4474776,15z/data=!3m1!5s0x996700624f07e3:0x113dca8941349dfb!4m12!1m6!3m5!1s0x0:0x4f964c98fdd41219!2sEmcor+Emerg%C3%AAncia+Clin+Cardiol%C3%B3gica!8m2!3d-22.7588528!4d-43.4474776!3m4!1s0x0:0x4f964c98fdd41219!8m2!3d-22.7588528!4d-43.4474776" display="inline-flex">
                  <i className="fa fa-map-marker"></i>
                  <CDBBox display="inline-flex"><p className='p-footer-center'><span className='span-footer-center'>Rua Nelson Ramos, 733</span> Centro Nova Iguaçu - RJ</p></CDBBox>
                </CDBFooterLink>
                <CDBBox display="inline-flex" alignItems="center">
                  <i className='fa fa-phone'></i>
                  <p className='p-footer-center'>(21) 3759-8100</p>
                </CDBBox>
                <CDBFooterLink href="mailto:atendimento@hospitalemcor.com.br?Subject=Contato%20do%20Site">
                  <CDBBox display="inline-flex" alignItems="center">
                    <i className='fa fa-envelope'/>
                    <p className='p-footer-center'>atendimento@hospitalemcor.com.br</p>
                  </CDBBox>
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox className={"direita"}  style={{ width: '40%'}}>
              <h4>Sobre o Hospital</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non in velit molestias totam quasi, at tenetur veritatis distinctio sint nemo libero vitae adipisci quam, eos, ipsum odit magni cumque fuga ipsa impedit tempore dolore! Beatae culpa nihil iusto dicta dignissimos, eius molestiae mollitia maiores tempora odio, iure voluptate minima.</p>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <CDBBox display="flex" className="mt-4 Mavs" justifyContent="between">
          <small className="ml-2">&copy; MAV's, 2022.</small>
          <CDBBox className={"redesSociais"} display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;