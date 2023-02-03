import "../style.css";
import { motion } from "framer-motion";
import { Container, NavbarBrand, Navbar, Button } from 'react-bootstrap';

export default function App() {
  return (
    <Container>
      <Container className="d-flex justify-content-center"><img src="https://fukusukecoffee.com/wp-content/uploads/2022/08/fukusukecoffee-11-1.png" height="15"></img></Container>
      <h3 class="d-flex justify-content-center p-4">Loading...</h3>
      <div id="box">
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
          /> 
      </div>
    </Container>
  );
}