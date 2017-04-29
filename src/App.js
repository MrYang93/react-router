import React from 'react';

import {
    Router,
    Route,
    hashHistory,
    browserHistory,
    Redirect,
    IndexRoute
} from 'react-router';

import Home from './Home';
import About from './About';
import Work from './Work';
import Me from './Me';
import PageNotFound from './PageNotFound';
import Index from './IndexRoute';
import Blog from './Blog';

class App extends React.Component {
    constructor() {
        super();

    }

    render() {

        return (
            <Router history={browserHistory}>
                <Route path='/' component={Home}>
                    <IndexRoute component={Index}/>
                    <Route path='about' component={About}>
                        <Route path='me' component={Me}/>
                    </Route>
                    <Route path='work' components={{
                        main: PageNotFound,
                        bady: About
                    }}/>
                    <Route path='blog/:title' component={Blog}/>
                    <Route path='404' component={PageNotFound}/>
                    <Redirect from='*' to='404'/>
                </Route>
            </Router>
        )
    }
}
export default App;

//首先下载 npm i --save react-router

//用 hashHistory 的时候 给我们的路径添加 /#/ 防止浏览器跳转其他页面,式中国拿到的是 index.html ,不需要服务器支持
//用briwserHistory的时候需要在 config.js 文件中添加devServer: {historyApiFallback: true},利用我们本地的服务器,
//实现页面跳转,不论访问人和路径,都返回 index.html, 路径看起来美观正常,但是需要有本地服务器支持,如果托管在github,coding
// 等网站上就用不了了.
//  主目录用 / , 下面/about ,在下面的页面的话,不用在/me,可以直接写成 me ,这样访问me的时候就是/home/about/me
//  404 页面  一般都是写在最下面,因为404 是  path='*' ,所有的都能匹配到,所以如果吧 * 写到上面的话,那么匹配到 *,那么后面就不会在去找了.

//下面需要引入Redirect
//<Route from='contact' to='about'/> 这里  from 是原先的地址,改为 to 地址 ,当我们访问 contact时  会自动跳到 about

//在 主页里面 加入  onyActiveOnIndex={true}  意思是 什么状态下会出发,true 也就是说,只显示主页的时候才会变成红色,触发 activesyule/classname

//components={{main: PageNotFound,bady:About}} 可以多个组件分开挂,而不是一起 children 一起挂过去

//一下需要  IndexRoute
// 例 : <IndexRoute component={Index}/>  可以显示在主页,但是看其他页面的时候不会显示,这样可以作为首页与其他不同的东西.

// <Route path='blog/:title' component={Blog}/> 在地址后面 /: 这样只要地址找到 /名字/ 后面无论输入什么都会找到这个地址,
//而且 在this.props.params.title 中显示  /名字/ 之后的字符
