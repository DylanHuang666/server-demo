myButton.addEventListener('click',(e)=>{
    let request=new XMLHttpRequest()
    request.onreadystatechange=()=>{
        if(request.readyState==4){
            console.log('请求响应都完成了')
            console.log(request.status)
            if(request.status>=200 && request.status<300){
                let string=request.responseText
                let object=window.JSON.parse(string)
                console.log(object.note.content)
            }else if(request.status>=400){
                console.log('请求失败了')
            }
        }
    }
    request.open('GET','http://jack.com:8002/xxx')
    request.send()
})