window.jQuery.ajax=function({url,method,body}){
    return new Promise(function(resolve,reject){
       let request=new XMLHttpRequest()
        request.onreadystatechange=()=>{
            if(request.readyState==4){
                if(request.status>=200 && request.status<300){
                    resolve.call(undefined,request.responseText)
                }else if(request.status>=400){
                    reject.call(undefined,request)
                }
            }
        }
        request.open(method,url)
        request.send(body) 
    })    
}



myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url:'/xx',
        method:'GET',
    }).then(
        (x)=>{console.log(x)},
        (x)=>{console.log(x)})
})