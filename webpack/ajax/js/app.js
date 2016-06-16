import $ from "jquery";

let app = {
	dataArr:{
		default_img:"/image/default.jpg",
		good_lists:[],
		error_msg:'',
	},
	info:function (){
		console.log('aaa');
	},
	ajax:function (url,parameter) {
		$.ajax({
	      url:url,
	      // async:false,
	      dataType:"json",
	      data:parameter?parameter:'',
	      success:(data)=>{
	
	        console.log(data);
	        if(data.result.code!=0){
	          
	          app.dataArr['error_msg']=data.result.error;
	          app.render(app.dataArr);
	        }else{
	       
	         app.dataArr['good_lists']=app.dataArr['good_lists'].concat(data.result.list);
	
	          app.render(app.dataArr);
	        }
	      },
	      error:()=>{

	      }
	    });
	}
}

export default app;