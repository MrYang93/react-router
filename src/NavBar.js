import React from 'react';


import { Link } from 'react-router';



class NavBar extends React.Component{
  constructor(){
    super();

  }

  render(){

    return(
      <div>
        <Link to='/' activeStyle={{color: 'red'}} activeClassName='cool' onlyActiveOnIndex={true} >home</Link><br/>
        <Link to='/about' activeStyle={{color: 'red'}} activeClassName='cool' >about</Link><br/>
        <Link to='/work' activeStyle={{color: 'red'}} activeClassName='cool' >work</Link><br/>
      </div>
    )
  }
}
export default NavBar;


//activeStyle 出发之后变颜色
//activeClassName 就是class 激活后显示
