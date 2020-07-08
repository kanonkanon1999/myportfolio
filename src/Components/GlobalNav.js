import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-scroll";

class GlobalNav extends React.Component{

  

  render(){
    return (
    <div className='GlobalNav'>
      <ul>
        <li>
          <Link
              activeClass="active"
              to="ProfileTitle"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              ><FontAwesomeIcon className='Icon' icon={['fas', 'user-alt']} />Profile</Link> 
          </li>
        <li>
          <Link
              activeClass="active"
              to="SkillTitle"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              ><FontAwesomeIcon className='Icon' icon={['fas', 'laptop-code']} />Skill</Link> 
          </li>
        <li>
          <Link
              activeClass="active"
              to="WorksTitle"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              ><FontAwesomeIcon className='Icon' icon={['fas', 'file-alt']} />Works</Link> 
          </li>
        <li>
          <Link
              activeClass="active"
              to="ContactTitle"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              ><FontAwesomeIcon className='Icon' icon={['fas', 'envelope']} />Contact</Link> 
          </li>
      </ul>
    </div>
    );
  }
}

export default GlobalNav;