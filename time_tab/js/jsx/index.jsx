import React from "react";
import ReactDOM from "react-dom";
import Reactaddons from "react-addons";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactLinkedStateMixin from 'react-addons-linked-state-mixin';

var data=[
    "/images/1.png",
    "/images/2.png",
    "/images/3.png"
];
var num=0;

class Students extends React.Component
{
	 constructor(props) {
     super(props);
     this.state={
       imageSrc:data[0],
       num:0,
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
  componentDidMount(){

     //this.focusUpdate();
      var update = (num) => {
        console.log(num)
        this.setState({
          imageSrc: data[num]
        });
        this.state.num+=1;
        if(this.state.num>=data.length){
        this.state.num=0;
      }
      };
      setInterval((num) =>{
           update(this.state.num);
      }, 2000);
      
   }
  
	render(){

      return (
        <div className="imgbox">
        <ReactCSSTransitionGroup transitionName="student" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
           <img src={this.state.imageSrc} key={this.state.imageSrc} />
          </ReactCSSTransitionGroup>
        </div>
        );
	}
}

let  div1 =document.createElement('div');
     document.body.appendChild(div1);


ReactDOM.render(<Students />,div1);
