import React from "react";
import ReactDOM from "react-dom";

var data_width = [
   {name:'first',value:"100"},
   {name:'second',value:"200"},
   {name:'three',value:"300"}
];
	
var data_height = [
   {name:'first1',value:"150"},
   {name:'second1',value:"250"},
   {name:'three1',value:"350"}
];


class Selectctrl extends React.Component {
   
    render () {
      return (
          <option value={this.props.name}>{this.props.value}</option>
      )
    }
}

class TabComponent extends  React.Component {
    // constructor () {
    //   super();
    //   this.state={
    //        currentIndex:0,
    //   }
    //  }

    
    render () {
       return (
          <div className="wrap" ref="wrap">
            <form action="/" method="get">
            <section className="page2 page" >
              <div className="header" onClick={this.handleClick.bind(this,0)}>返回></div>
                <p>width</p>
                <select name="left" onChange={this.handlewidth.bind(this,'width')} ref="left">
                <option value="">请选择</option>
                {
                   data_width.map((element,index) => {
                          return <Selectctrl {...element} key={index}></Selectctrl>
                   })
                }
                
                </select>
                </section>
                <section className="page1 page" >
                name:<input type="text" name="username" defaultValue="请输入内容"/><br/>               
                width:<input type="text" name="width" ref="width" defaultValue="请输入内容"/><span className="next" onClick={this.handleClick.bind(this,-1)}>--></span><br/>
                height:<input type="text" name="height" ref="height" defaultValue="请输入内容"/><span className="next" onClick={this.handleClick.bind(this,1)}>-></span><br/>
                <input type="submit" value="提交"/>
              </section>
                <section className="page3 page">
                  <div className="header" onClick={this.handleClick.bind(this,0)}>返回</div>
                  <p>height</p>
                  <select name="right" onChange={this.handlewidth.bind(this,'height')} ref="right">
                    {
                      data_height.map((element,index)=>{
                         return <Selectctrl {...element} key={index}></Selectctrl>
                      })
                    }
                </select>
                </section>
                </form>
          </div>
       );
    }

    handleClick (num){
      if(num<0){
        this.refs.wrap.style.marginLeft="0";
      }else if(num>0){
        this.refs.wrap.style.marginLeft="-200%";
      }else if(num==0){
         this.refs.wrap.style.marginLeft="-100%";
      }
    }
    handlewidth(tag){

     if(tag=="width"){
        this.refs.width.value= this.refs.left.value;
     }else if(tag=="height"){
         this.refs.height.value= this.refs.right.value;
     }
    }
}

ReactDOM.render(<TabComponent/>,document.getElementById("left_right"));