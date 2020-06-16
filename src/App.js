import React from "react";
import {
  BrowserRouter,
  Switch,
  NavLink,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <BrowserRouter>
      <Nav>
        <SNavLink activeClassName="active" to="/verde">Verde</SNavLink>
        <SNavLink activeClassName="active" to="/amarelo">Amarelo</SNavLink>
        <SNavLink activeClassName="active" to="/azul">Azul</SNavLink>
      </Nav>
      <Telas />
    </BrowserRouter>
  );
}

const slide = {
  mostrar: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 80,
    },
  },
  esconder: {
    zIndex: 0,
    x: -200,
    opacity: 0.1,
    transition: {
      duration: 1,
    },
  },
  inicial: {
    x: "100%",
    opacity: 1,
  },
};

function Telas() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/verde" component={Verde} />
        <Route path="/amarelo" component={Amarelo} />
        <Route path="/azul" component={Azul} />
        <Redirect from="/" to="/verde" />
      </Switch>
    </AnimatePresence>
  );
}

function Azul() {
  return (
    <Pagina
      corDaPagina="steelblue"
      variants={slide}
      animate="mostrar"
      exit="esconder"
      initial="inicial"
    >
      <h2>Essa é a página Azul</h2>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia
        ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mim que
        vai caçá sua turmis! Mauris nec dolor in eros commodo tempor. Aenean
        aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou
        euzis!
      </p>
      <Img src="https://picsum.photos/300" />
    </Pagina>
  );
}
function Verde() {
  return (
    <Pagina
      corDaPagina="mediumseagreen"
      variants={slide}
      animate="mostrar"
      exit="esconder"
      initial="inicial"
    >
        <h2>dshaui</h2>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia
        ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mim que
        vai caçá sua turmis! Mauris nec dolor in eros commodo tempor. Aenean
        aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou
        euzis!
      </p>
      <Img src="https://picsum.photos/300?random=green" />
    </Pagina>
  );
}
function Amarelo() {
  return (
    <Pagina
      corDaPagina="gold"
      variants={slide}
      animate="mostrar"
      exit="esconder"
      initial="inicial"
    >
        <h2>dsad</h2>
      <p>
        Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia
        ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mim que
        vai caçá sua turmis! Mauris nec dolor in eros commodo tempor. Aenean
        aliquam molestie leo, vitae iaculis nisl. Quem manda na minha terra sou
        euzis!
      </p>
      <Img src="https://picsum.photos/300?random=yellow" />
    </Pagina>
  );
}

const Nav = styled.nav`
  width: 100%;
  padding: 20px 3px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  box-shadow: -2px 17px 90px -19px rgba(30, 30, 60, 0.25),
    0px 0px 1px 0px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Pagina = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background-color: ${(props) => props.corDaPagina};
  box-shadow: 0px 2px 152px -62px rgba(0, 0, 0, 0.75);
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  z-index: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px 30px;
  margin: 0%;
`;

const Img = styled(motion.img)`
  border-radius: 20px;
`;

const SNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  &.active {
      color: crimson;
  }
  padding: 0;
  margin: 0;
`;
