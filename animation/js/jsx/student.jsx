import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var data=[
    "../images/2.png"
];

export default class Students extends React.Component
{
	 constructor(props) {
     super(props);
     this.state={
       imageSrc:data[0]
     }
   }

   gotoPage(index,event,a,b,c){
   // console.log(index);
    event.preventDefault();
    this.props.onGotoPage(index);
   }
	render(){
    // console.dir(this.props);
      return (
       <ReactCSSTransitionGroup transitionName="student" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={600} transitionLeaveTimeout={600}>      
   
           <img src={this.state.imageSrc} key={this.state.imageSrc} onClick={this.gotoPage.bind(this,2)} />
       
          </ReactCSSTransitionGroup>
        );
	}
}