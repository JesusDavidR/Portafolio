import jesus from './jesus.jpeg';
import pixel from './pixel.gif';
import sol from './sun.svg';
import luna from './moon.svg';
import twdark from './twitter-dark.svg';
import twlight from './twitter-light.svg';
import gitdark from './github-dark.svg';
import gitlight from './github-light.svg';
import linkdark from './linkedin-dark.svg';
import linklight from './linkedin-light.svg';
import behanlight from './behance-light.svg';
import behandark from './behance-dark.svg';
import skethdark from './sketchfab-dark.svg';
import skethwhite from './sketchfab-white.svg';
import itchiodark from './itchio-dark.svg';
import itchiolight from './itchio-light.svg';
import CV from './Curriculum.pdf';
import { useTheme } from '../common/ThemeContext';
import { TextAnimate } from '../components/magicui/text-animate';
import { HyperText } from "../components/magicui/hyper-text";
import { WordRotate } from "../components/magicui/word-rotate";
import { InteractiveGridPattern } from '../components/magicui/interactive-grid-pattern';
import { cn } from '../lib/utils';
import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import Image from "next/image";

interface PresentationCardProps {
  FirstName: string;
  LastName: string;
  userNameX: string;
  userNameG: string;
  userNameL: string;
  userNameI: string;
  userNameB: string;
  userNameS: string;
  profesion: string;
  isFollowing: boolean;
}

export function PresentationCard({
  FirstName,
  LastName,
  userNameX,
  userNameG,
  userNameL,
  userNameI,
  userNameB,
  userNameS,
  profesion,
  isFollowing,
}: PresentationCardProps) {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sol : luna;
  const xIcon = theme === 'light' ? twlight : twdark;
  const GithubIcon = theme === 'light' ? gitlight : gitdark;
  const LinkedinbIcon = theme === 'light' ? linklight : linkdark;
  const BehanceinbIcon = theme === 'light' ? behanlight : behandark;
  const sketchfabinbIcon = theme === 'light' ? skethwhite : skethdark;
  const ItchioIcon = theme === 'light' ? itchiolight : itchiodark;
  const JImg = theme === 'light' ? jesus : pixel;

  return (
    <article className='tw-followcard'>
      <header className='imagen'>
        <div className='imgcontainer'>
          <img className='avatar' alt='Foto de perfil Jesus' src={JImg} />
        </div>
        <img
          className='IconSun'
          src={themeIcon}
          alt='Cambio de modo de ventana'
          onClick={toggleTheme}
        />

        <div className='info'>
        
    
        <strong>
        <WordRotate className="text-4xl font-bold text-black dark:text-white" words={[FirstName, LastName]} />
 
</strong>
      
        </div>

        <h1 className='carrera'>
        <HyperText>
          {profesion}
          </HyperText>
          </h1>

        <div className='social-container'>
          <div className='social-item'>
            <a href='https://x.com/jesusdavid1445' target='_blank'>
              <img src={xIcon} alt='Icono de X' />
            </a>
            <span>@{userNameX}</span>
          </div>

          <div className='social-item'>
            <a href='https://github.com/JesusDavidR' target='_blank'>
              <img src={GithubIcon} alt='Icono de GitHub' />
            </a>
            <span>{userNameG}</span>
          </div>

          <div className='social-item'>
            <a href='https://www.linkedin.com/in/jesus-ruiz-1aa43b218/' target='_blank'>
              <img src={LinkedinbIcon} alt='Icono de LinkedIn' />
            </a>
            <span>{userNameL}</span>
          </div>

          <div className='social-item'>
            <a href='https://www.behance.net/jesusruiz22' target='_blank'>
              <img src={BehanceinbIcon} alt='Icono de Behance' />
            </a>
            <span>{userNameB}</span>
          </div>

          <div className='social-item'>
            <a href='https://sketchfab.com/Mango_Biche' target='_blank'>
              <img src={sketchfabinbIcon} alt='Icono de Sketchfab' />
            </a>
            <span>{userNameS}</span>
          </div>

          <div className='social-item'>
            <a href='https://itch.io/' target='_blank'>
              <img src={ItchioIcon} alt='Icono de Itch.io' />
            </a>
            <span>{userNameI}</span>
          </div>
        </div>

        <article className='descripcion'>
          <TextAnimate animation="blurInUp" by="character" duration={2}>
            Ingeniero Multimedia egresado de la Universidad Militar Nueva Granada, con experiencia en diseño, modelado y animación 3D, desarrollo web y gestión de proyectos digitales.
          </TextAnimate>
        </article>
        <a href={CV} download>
          <button className='hover'>Curriculum</button>
        </a>
      </header>
    </article>
  );
}
