import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className="container home-page w-full will-change-contents h-[90%] min-h-[566px] absolute opacity-0 top-[5%]
        z-[1] ">
            <div className="text-zone absolute left-[10%] top-1/2 w-[40%] max-w-[90%]
            ">
                <h1 className="text-white text-[53px] m-0 font-coolvetica font-normal
                    before:content-['<h1>'] before:font-labelleaurore before:text-[#ffd700] before:text-[18px] before:absolute before:-mt-10 before:left-[15px] before:opacity-60
                     after:content-['<h1>'] after:font-labelleaurore after:text-[#ffd700] after:text-[18px] after:absolute after:mt-[18px] after:ml-5 after:opacity:60">Hi, <br /> I'm 
                    <img src={LogoTitle} alt="developper" />
                    lobodan
                    <br />
                    web developer
                </h1>
                <h2 className="text-[#8d8d8d] mt-5 font-normal text-[11px] font-sans tracking-[3px]">Frontend Developer / Javascript Expert / Youtuber</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
};

export default Home;