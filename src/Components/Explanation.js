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
                    <p className='infoLeft'>URL</p>
                    <a href = 'https://kanonkanon1999.github.io/myportfolio/'>
                      <p>https://kanonkanon1999.github.io/myportfolio/</p>
                    </a>
                  </li>
                  <li className='infoRow'>
                    <p className='infoLeft'>ソースコード</p>
                    <a href = 'https://github.com/kanonkanon1999/myportfolio'>
                      <p>https://github.com/kanonkanon1999/myportfolio</p>
                    </a>
                  </li>
                  <li className='infoRow'>
                      <p className='infoLeft'>説明</p>
                      <p>
                          このサイトです。Reactで作成しました。
                      </p>
                  </li>
                  <li className='infoRow'>
                      <p className='infoLeft'>使用した技術</p>
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
