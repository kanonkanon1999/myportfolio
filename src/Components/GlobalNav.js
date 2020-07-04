import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'; 
import rsScroller from 'react-smooth-scroller';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class GlobalNav extends React.Component{

  handleClickMenu = (e,selector) => {
    e.preventDefault();

    rsScroller.scrollToTarget(selector);
  }
    

  render(){
    return (
    <div className='GlobalNav'>
      <ul>
        <li><a href='#' onClick={ e => this.handleClickMenu(e,'ProfileTitle') }><FontAwesomeIcon className='Icon' icon={['fas', 'user-alt']} />Profile</a></li>
        <li><a href='#' onClick={ e => this.handleClickMenu(e,'SkillTitle') }><FontAwesomeIcon className='Icon' icon={['fas', 'laptop-code']} />Skill</a></li>
        <li><a href='#' onClick={ e => this.handleClickMenu(e,'WorksTitle') }><FontAwesomeIcon className='Icon' icon={['fas', 'file-alt']} />Works</a></li>
        <li><a href='#' onClick={ e => this.handleClickMenu(e,'ContactTitle') }><FontAwesomeIcon className='Icon' icon={['fas', 'envelope']} />Contact</a></li>
      </ul>
    </div>
    );
  }
}

export default GlobalNav;