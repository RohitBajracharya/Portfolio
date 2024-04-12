import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import "./Services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      straggerChilder: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I Love coding with best practices and <br />
          latest technology
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/services.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Crafting</motion.b>{" "}
            Digital
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Solution</motion.b>
          </h1>
          <button>What I do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Flutter development</h2>
          <p>Make responsive mobile app using Flutter, Getx , VelocityX</p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>React Js Frontend</h2>
          <p>
            Make responsive web app using ReactJs, Hooks, framer-motion, Axios
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Node Js Backend</h2>
          <p>
            Make Api using NodeJs, Express, MongoDb with jwtAuth, multer, joi
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Java Development</h2>
          <p>Make Api using Spring Framework, Spring Hibernate, SpringBoot</p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
