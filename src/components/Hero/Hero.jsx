import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter';

const Hero = () => {
    const transition = { type: "spring", duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-hero">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "175px" : "238px" }}
                        whileInView={{ left: "9px" }}
                        transition={{ ...transition, type: "tween", duration: 1.5 }}
                    ></motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">SHAPE </span>
                        <span>YOUR</span>
                    </div>
                    <div>
                        <span>IDEAL BODY</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and
                            live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span><NumberCounter start={40} end={73} delay="1" preFix="+" /></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter start={800} end={871} delay="2" preFix="+" /></span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter start={0} end={31} delay="2" preFix="+" /></span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>
            <div className="right-hero">
                <button className="btn">Join Now</button>
                <motion.div
                    className="heart-rate"
                    initial={{ opacity: 0, right: "-1rem" }}
                    whileInView={{ opacity: 1, right: "4rem" }}
                    transition={transition}
                >
                    <img src={heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>116 BPM</span>
                </motion.div>
                <img src={hero_image} alt="hero_image" className="hero-image" />
                <motion.img
                    src={hero_image_back}
                    alt="hero_image_back"
                    className="hero-image-back"
                    initial={{ right: "10rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                />
                <motion.div className="calories" initial={{ opacity: 0, right: '37rem' }} whileInView={{ opacity: 1, right: "28rem" }} transition={transition}>
                    <img src={calories} alt="calories" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
