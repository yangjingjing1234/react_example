import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import app from "./js/app.js";
import "./css/index.less";

class List extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      img:"/ajax/image/default.jpg",
    }
  }
  componentWillMount(){
    let img =new Image();
    img.src=this.props.category_img;
    img.onload= () =>{
      this.setState({img:this.props.category_img})
    }
    img.onerror=()=>{
      this.setState({img:"/ajax/image/default.jpg"});
    }
  }
  render () {
    return (
      <p id={this.props.indiana_category_id}><span><img src={this.state.img}/></span>{this.props.indiana_category_name}</p>
    )
  }
}


class Ajaxload extends React.Component
{
    constructor(props){
    	super(props);
    	this.state={
    		dataArr:this.props.dataArr,
    	}
    	let _url = $("#app").attr('data-ajaxurl');
    	app.ajax(_url);
    }

  componentWillMount(){

  }
  render(){
      let _state = this.state;
      if(_state&&_state.dataArr.good_lists){
         return (
         	<article>
         		  <header>头部</header>
	              <section>
                     {
                     	_state.dataArr.good_lists.map((element,index)=>{
                            return <List key={index} {...element}></List>
                            //return <p key={index} id={element.indiana_category_id}><span><img src={element.category_img}/></span>{element.indiana_category_name}</p>
                     	})
                     }
	              </section>	
	              <footer>底部</footer>
         	</article>	
              
         )
      }else if(_state&&_state.dataArr.error_msg){
      	return (
      		 <article>
	          <header>头部</header>
	          <section><div className="loading"><h1>{_state.dataArr.error_msg}</h1></div></section>
	          <footer>底部</footer>
	        </article>	
        )
      }else{
      return (
        <article>
          <header>头部</header>
          <section><div className="loading"><h1>Loading...</h1></div></section>
          <footer>底部</footer>
        </article>
      );
    }
  }
}


function render(dataArr){
	ReactDOM.render(<Ajaxload dataArr={dataArr}/>,document.getElementById("app"));
}

app.render = render;

render(app.dataArr);


