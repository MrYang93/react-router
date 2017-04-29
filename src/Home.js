import React from 'react';


import NavBar from './NavBar';


class Home extends React.Component{
  constructor(){
    super();

  }

  render(){

    return(
      <div style={{border:'10px solid #ccc'}}>
        {this.props.bady}
        <NavBar/>
        {this.props.children}
        {this.props.main}
        home页脚
      </div>
    )
  }
}
export default Home;
