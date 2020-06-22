import React from 'react';
import './App.css';
import Header from './Components/Header';
import GlobalNav from './Components/GlobalNav';
import Main from './Components/Main';
import Sticky from 'react-sticky-el';

class App extends React.Component{
  render()
  {
    return (
    <div className='AppContainer'>
      <Header/>
      <Sticky>
        <GlobalNav/>
      </Sticky>
      <Main/>
    </div>
    );
  }
}

export default App;