import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rohit Bajracharya
        </motion.span>
        <div className="social">
          <a href="https://github.com/RohitBajracharya">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rohitbajra/">
            <img src="/linkedIn.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
