window.jQuery.ajax=function({url,method,body,success, fail}){
    let request=new XMLHttpRequest()
    request.onreadystatechange=()=>{
        if(request.readyState==4){
            if(request.status>=200 && request.status<300){
                success.call(undefined,request.responseText)
            }else if(request.status>=400){
                fail.call(undefined,request)
            }
        }
    }
    request.open(method,url)
    request.send(body)
}



myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url:'/xxx',
        method:'GET',
        success:(x)=>{
            console.log(x)
        },
        fail:(x)=>{
            console.log(x)
        }
    })
})