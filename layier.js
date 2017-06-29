var createXHR=(function(){
	if(typeof XMLHttpRequest != "undefined"){
		return function(){
			return new XMLHttpRequest();
		}
	}else if(typeof ActiveXObject != "undefined"){
		return function(){
			if(typeof arguments.callee.activeXString != "string"){
				var versions =["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i=0,len=versions.length;
				for(;i<len;i++){
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
	];				}catch(ex){
						console.log("ActiveObject error is" + ex);
					}
				}
			}
			return new ActiveXObject(arguments.callee.activeXString);
		}
	}else{
		return function(){
			throw new Error("your borwser does not support ajax!");
		}
	}
})();

function createXHR2(){
	if(typeof XMLHttpRequest != "undefined"){
		createXHR2 = function(){
			return new XMLHttpRequest();
		}
	}else if(typeof arguments.callee.activeXString != "string"){
		createXHR2 = function(){
			//.....
		}
	}else{
		createXHR2 = function(){
			throw new Error("no XHR object available");
		}
	}
	return createXHR2();
}