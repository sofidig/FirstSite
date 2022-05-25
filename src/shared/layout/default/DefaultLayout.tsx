import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import styled from "styled-components";
import { Container } from "react-bootstrap";

interface DefaultLayoutProps {
  children: any;
}

const Body = styled(Container)``;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      <Body className="bg-[#49b478] py-10 mx-auto w-[100%]">{children}</Body>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
