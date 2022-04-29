import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact, faVuejs,
} from '@fortawesome/free-brands-svg-icons'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  })

  return (
    <>
      <div className="container about-page">
      <div className="text-zone absolute left-[10%] top-1/2 translate">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', ' ', 'p', 'r', 'o','p','o','s', ' ', 'd', 'e', ' ', 'm', 'o', 'i']}
            idx={15}
          ></AnimatedLetters>
        </h1>

        <p align="LEFT">
          Je suis un jeune Camerounais agée de 25 ans, titulaire d'une <strong>Licence en Mathématiques Fondamentales</strong> à l'université de Yaoundé 1
          et pationné de l'informatique et des nouvelles technologies.
        </p>
        <p>
          Si je dois me decrire en quelque mots, je suis Geek, autodicdate , aimant voir les mangas et animes.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faVuejs} color="#41B883" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4d9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" active />
    </>
  )
}

export default About
