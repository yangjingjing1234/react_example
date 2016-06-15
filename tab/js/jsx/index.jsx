import React from "react";
import ReactDOM from "react-dom";

var data = {
	title:['first','second','three'],
	content:['第一屏','第二屏',"第三屏"]
}
class TabsControl extends React.Component {
     constructor(){
		super();
		this.state={ 
			currentIndex :0
		};
	}
	check_title_index (index) {
		console.log(index);
		 return index===this.state.currentIndex ? "Tab_tittle active" : "Tab_tittle";
	}
	check_item_index (index) {
         return index=== this.state.currentIndex ? "Tab_item show" : "Tab_item";
	}
     render () {

     	return (
     		 <div>
	              {/* 动态生成头部*/}
	              <div className="Tab_tittle_wrap">

                        {  

                        	React.Children.map(this.props.children,(element,index) => {
                   console.log(React.Children);
                                 return (
                                     <div 
                                     onClick={()=>{this.setState({currentIndex:index})}} 
                                     className={this.check_title_index(index)}>
                                       {element.props.name}
                                     </div>
                                 )
                        	})
                        }
	              </div>
	                { /*动态生成内容*/ }
	              <div className="Tab_item_wrap">
			              {
			              	React.Children.map(this.props.children,(element,index) => {
                               return (
                                 <div className={this.check_item_index(index)}>
                                    {element}
                                 </div>
                               	)
                            })
			              }
                          
	              </div>
     	     </div>
     	);
     	
     }
}

class TabdataControl extends React.Component {
     constructor () {
     	super();
     	this.state={
           currentIndex:0,
     	}
     }
     check_title_index (index) {
		 return index===this.state.currentIndex ? "Tab_tittle active" : "Tab_tittle";
	}
     render () {
     	return (
           <div>
               <div className="Tab_tittle_wrap">
                  {
                     data.title.map((element,index) => {
                           return (
                           	 <div 
                           	 key={index}
                             onClick={()=>{this.setState({currentIndex:index})}} 
                             className={this.check_title_index(index)}>
                               {element}
                             </div>
                           	)
                     })
                  }
               </div>
               <div className="Tab_item_wrap">          
                        <div className="Tab_item show">
                            {data.content[this.state.currentIndex]}
                        </div>
               </div>
           </div>
     	)
     }
}
class TabComponent extends  React.Component {

    render () {
       return (
            <div className="container">
                  <TabsControl>
	                  <div name="first">
	                  		我是第一屏
	                  </div>
                      <div name="second">
	                  		我是第二屏
	                  </div>
	                  <div name="three">
	                  		我是第三屏
	                  </div>
                  </TabsControl> 
                  <br/> 
                  <TabdataControl>

                  </TabdataControl>
                  <br/> 
                  <TabdataControl>

                  </TabdataControl>
            </div>  
       );
    }
}

ReactDOM.render(<TabComponent/>,document.getElementById("app"));