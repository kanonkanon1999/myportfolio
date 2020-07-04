import React from 'react';
import '../App.css';
import ReactLogo from '../img/react-logo.png';
import GithubLogo from '../img/github-logo.png';
import CSSLogo from '../img/css3-logo.png';

class Explanation extends React.Component {
  render() {
      return(
          <div className='Explanation'>
              <h2 className='infoTitle'>portfolio</h2>
              <ul className='info'>
                  <li className='infoRow'>
                    <text className='infoLeft'>URL</text>
                    <a href = 'https://github.com/kanonkanon1999/myportfolio'>
                      <text>https://github.com/kanonkanon1999/myportfolio</text>
                    </a>
                  </li>
                  <li className='infoRow'>
                    <text className='infoLeft'>ソースコード</text>
                    <a href = 'https://github.com/kanonkanon1999/myportfolio'>
                      <text>https://github.com/kanonkanon1999/myportfolio</text>
                    </a>
                  </li>
                  <li className='infoRow'>
                      <text className='infoLeft'>説明</text>
                      <text>
                          このサイトです。Reactで作成しました。
                      </text>
                  </li>
                  <li className='infoRow'>
                      <text className='infoLeft'>使用した技術</text>
                      <img src = {ReactLogo} alt='react' className='Logo'/>
                      <img src = {CSSLogo} alt='css' className='Logo'/>
                      <img src = {GithubLogo} alt='github' className='Logo'/>
                  </li>
              </ul>
          </div>
      );
  }
}


export default Explanation;
