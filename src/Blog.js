import React from 'react';


class Blog extends React.Component{
  constructor(){
    super();

  }

  render(){
    console.log(this.props);
    return(
      <div>
        你现在访问的是:http://localhost:8080/blog/{this.props.params.title}<br/>
        {
          this.props.params.title==1 ? <h1>这是第一篇文章</h1> :
          this.props.params.title==2 ? <h1>这是第二篇文章张</h1>:
          <h1>你访问的文章不存在</h1>
        }
      </div>
    )
  }
}
export default Blog;
