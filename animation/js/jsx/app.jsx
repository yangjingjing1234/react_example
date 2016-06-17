import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
var data=[
    "../images/1.jpg"
];

export default class App extends React.Component
{
	 constructor(props) {
     super(props);
     this.state={
       imageSrc:data[0]
     }
   }
  shouldCompoentUpdate(){
    return false;
  }
  componentWillUpdate(){
  console.log("====will update===")
  }
  componentDidUpdate(){
    console.log("====did update===")
  }

  
gotoPage(index,event){
  //console.log(index);
    event.preventDefault();
    this.props.onGotoPage(index);
   }
	render(){

      return (
         <ReactCSSTransitionGroup transitionName="student" transitionAppear={true} transitionLeave={true} transitionAppearTimeout={500} transitionEnterTimeout={600} transitionLeaveTimeout={600}>      

           <img src={this.state.imageSrc} onClick={this.gotoPage.bind(this,1)} key={this.state.imageSrc} />

        </ReactCSSTransitionGroup>
        );
	}
}
