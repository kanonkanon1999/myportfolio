import React from 'react';
import '../App.css';

class GlobalNav extends React.Component{

  render(){
    return (
    <div className='GlobalNav'>
      <ul>
        <li><a href='#'>Profile</a></li>
        <li><a href='#'>Skill</a></li>
        <li><a href='#'>Works</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </div>
    );
  }
}

export default GlobalNav;