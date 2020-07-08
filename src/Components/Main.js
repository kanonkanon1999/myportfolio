import React from 'react';
import '../App.css';
import Facephoto from '../img/IMG_1095_0623102729.png';
import PortfolioImg from '../img/2020-07-03 23.53.38.jpeg';
import html from '../img/html-logo.png';
import css from '../img/css3-logo.png';
import github from '../img/github-logo.png';
import js from '../img/js-logo.png';
import sass from '../img/sass-logo.png';
import jQuery from '../img/jquery-logo.png';
import react from '../img/react-logo.png';
import 'font-awesome/css/font-awesome.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Explanation from './Explanation';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-scroll";

class Main extends React.Component{

  render(){
    return (
      <div className='MainContainer'>
        <div className='ProfileContainer'>
            <h1 className='ProfileTitle'><FontAwesomeIcon className='Icon' icon={['fas', 'user-alt']} />Profile</h1>
            <div className='Flex'>
              <img src={Facephoto} alt='プロフィール画像' className='ProfileImg'/>
              <div className='ProfileCard'>
                  <p className='ProfileText'>
                    はじめまして。かのん<a href='https://twitter.com/kanonkanon1999'>(@kanonkanon1999)</a>と申します。
                    <br/>1999年生まれ。愛知県在住。偏差値65の高校を家庭の事情により中退。絶望し、しばらく引きこもり生活を送る。
                    アルバイトをしながら高卒認定試験を受け貯金をし予備校へ通うも、フリーランスとして生きることや自分一人で物やサービスを
                    作ることで生きていくことに憧れを持ち、辞める。プログラミングを独学で学び始め、悪戦苦闘しながらもその楽しさに夢中になる。
                    <br/>将来の目標は、過去の自分のように環境や様々な障壁によって苦しんでいる方が自分らしい生き方が出来るようサポートするサービスを開発すること。
                    <br/>現在はReact、 ReactNativeでWeb制作とアプリ開発の勉強をしています。
                  </p>
              </div>
            </div>
        </div>
        <div className='SkillContainer'>
            <h1 className='SkillTitle'><FontAwesomeIcon className='Icon' icon={['fas', 'laptop-code']} />Skill</h1>
            <div className='SkillCard'>
              <img src={html} alt={html} className='SkillLogo'/>
              <img src={css} alt={css} className='SkillLogo'/>
              <img src={js} alt={js} className='SkillLogo'/>
              <img src={sass} alt={sass} className='SkillLogo'/><br/>
              <img src={jQuery} alt={jQuery} className='SkillLogo'/>
              <img src={react} alt={react} className='SkillLogo'/>
              <img src={github} alt={github} className='SkillLogo'/>
            </div>
        </div>
        <div className='WorksContainer'>
            <h1 className='WorksTitle'><FontAwesomeIcon className='Icon' icon={['fas', 'file-alt']} />Works</h1>
            <div className='WorksWrapper'>
              <div　className='Work1'>
                <img 
                src={PortfolioImg} 
                alt='portfolio' 
                className='Work1Img' 
                />
              </div>
            </div>
            <Explanation/>
        </div>
        <div className='ContactContainer'>
            <h1 className='ContactTitle'><FontAwesomeIcon className='Icon' icon={['fas', 'envelope']} />Contact</h1>
            <a href = 'https://twitter.com/kanonkanon1999'><FontAwesomeIcon className='Twitter' icon={['fab', 'twitter']} /></a>
            <h2 className='ContactsubTitle'>
              DMにてお気軽にご連絡ください
            </h2>
        </div>
        <Link
          activeClass="active"
          to="HeaderBack"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {800}
        >
        <FontAwesomeIcon className='IconToTop' icon={['fas', 'arrow-circle-up']} />
        </Link>
      </div>
    );
  }
}

export default Main;