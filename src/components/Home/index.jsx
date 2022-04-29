import LogoTitle from '../../assets/images/logo-s.png';
import Logo from "./Logo";
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import {useEffect, useState } from 'react';
import Loader from 'react-loaders';
import './Index.scss';
import '../AnimatedLetters/Index.scss';

const Home = () => {

const [letterClass, setLetterClass] = useState('text-animate');
const nameArray = ['l','o','b','o','d','a','n'];
const jobArray = ['w','e','b',' ', 'd','e', 'v', 'e', 'l','o', 'p', 'e', 'r', '.'];

useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover');
    },4000)
}, [])

return (
        <>
            <div className="container opacity-0 home-page w-full will-change-contents h-[90%] min-h-[566px] absolute top-[5%] my-0 mx-auto
        z-[1] ">
            <div className="text-zone absolute left-[10%] top-1/2 w-[40%] max-h-[90%]
            ">
                <h1 className="text-white text-[53px] m-0 font-coolvetica font-normal
                    before:content-['<h1>'] before:font-labelleaurore before:text-[#ffd700] before:text-[18px] before:absolute before:-mt-10 before:left-[15px] before:opacity-60
                    after:content-['</h1>'] after:font-labelleaurore after:text-[#ffd700] after:text-[18px] after:absolute after:mt-[18px] after:ml-5 after:opacity:60">
                    <span className={letterClass}>H</span>   
                    <span className={`${letterClass} _12`}>i,</span>   
                    <br />
                    <span className={`${letterClass} _13`}>I</span>   
                    <span className={`${letterClass} _14`}>'m</span>   
                    <img src={LogoTitle} alt="developper" />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray} idx={22} />
                </h1>
                <h2 className="text-[#8d8d8d] mt-5 font-normal text-[11px] font-sans tracking-[3px]">Frontend Developer / Javascript Expert / Youtuber</h2>
                <Link to="/contact" className="flat-button text-yellow_ font-normal tracking-[4px] font-sans no-underline py-[10px] px-[18px] border border-solid border-yellow_
                    mt-[25px] float-left whitespace-nowrap
                    hover:text-[#333] hover:bg-yellow_
                ">CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
};

export default Home;