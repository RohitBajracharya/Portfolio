import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./Portfolio.scss";

const items = [
  {
    id: 1,
    title: "Flutter Multivendor store",
    img: "/portfolio1.png",
    desc: "Ecommerce Multivendor app made using flutter, getx, firebase and velocityX",
    url: "https://github.com/RohitBajracharya/E-FashionStore-App-Flutter-",
  },
  {
    id: 2,
    title: "MERN Bugdet Tracker",
    img: "/sms.png",
    desc: "MERN stack app to track your monthly budget",
    url: "https://github.com/RohitBajracharya/Budget-tracker",
  },
  {
    id: 3,
    title: "Java Aquarium Online Store",
    img: "/portfolio3.png",
    desc: "Aquarium Online Store using html,css and Js for frontend and Java Spring framework for backend",
    url: "https://github.com/RohitBajracharya/Aquarium_Online_Store_Client",
  },
  {
    id: 4,
    title: "Flutter Chat App",
    img: "/portfolio4.png",
    desc: "UI for Chat App using flutter, getx and velocityX",
    url: "https://github.com/RohitBajracharya/Chat_App_flutter",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2> {item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url}>
              <button>See Code</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
