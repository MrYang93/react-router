import React from 'react';

import NavBar from './NavBar';


class About extends React.Component{
  constructor(){
    super();

  }

  render(){

    return(
      <div style={{border:'10px solid #000'}}>
        about
        {this.props.children}
      </div>
    )
  }
}
export default About;
