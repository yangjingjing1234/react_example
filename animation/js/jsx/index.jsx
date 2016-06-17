import React from "react";
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Students from "./student";
import App from "./app";


class Main extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      index:1,
      content:<Students onGotoPage={this.changePage.bind(this,2)} />,
    }
  }
  changePage(index){
    this.setState({index:index});
  }
  render(){

    let view = "";
    if(this.state.index==1||this.state.index=="1"){
        this.state.content=<Students onGotoPage={this.changePage.bind(this,2)} />
    }else{
       this.state.content=<App onGotoPage={this.changePage.bind(this,1)} />
    }

    return (
          <section>
          {this.state.content}
          </section>
    )
  }
}

ReactDOM.render(<Main />,document.getElementById("animContainerId"));
