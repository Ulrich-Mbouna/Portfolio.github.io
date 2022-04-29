import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('gmail', 'template_xnrx20x', refForm.current, 'kN4Lj1wK7lzCCipVd')
            .then(() => {
                alert('Message successful sent')
                window.location.reload(false)
            }, () => {
                alert('Failed to send the message, please try again')
            })
    }
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't','e','z', ' ', 'm', 'o', 'i']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>
                        Je suis un développeur frontal très ambitieux à la recherche d'un poste au sein d'une société informatique bien établie,
                        avec la possibilité de travailler avec les dernières technologies sur des projets stimulants et variés.
                    </p>
                    <div className="contact-form">
                        <form action="" ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Votre nom" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Votre email" required/>
                                </li>
                                <li>
                                    <input placeholder="Sujet" type="text" name="subject" required></input>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="ENVOYER"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Mbouna Ulrich,
                    <br/>
                    Cameroun
                    <br/>
                    Rue 1.007, Yaoundé, Cameroun <br/>
                    <span>mbounaulrich@hotmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[3.8661, 11.5154]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[3.8661, 11.5154]}>
                            <Popup>Mbouna Ulrich lives here, come over for a cup of coofee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type="pacman" active />
        </>
    )
}

export default Contact;