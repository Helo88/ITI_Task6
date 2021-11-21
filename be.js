document.getElementById("displayTime").addEventListener('click',(event)=>{
    setInterval(function(){
        let d= new Date()
        document.getElementById("btnTime").innerText=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
    },1000)

})
let  myWindow;
function popUpWindow(URL, windowName, windowWidth, windowHeight) {
    var centerLeft = 800;
    var centerTop = 800;
    var windowFeatures = 'toolbar=no, location=no, directories=no, status=no, menubar=no, titlebar=no, scrollbars=no, resizable=no, ';
    myWindow= window.open(URL, windowName, windowFeatures +' width='+ windowWidth +', height='+ windowHeight +', top='+ centerTop +', left='+ centerLeft);
    return myWindow
}

document.getElementById("myTextArea").addEventListener('click',(event)=>{
    setTimeout(function(){
        popUpWindow('writeme.html','Example','200','200')
        
    },1000)

})

document.getElementById("fadeMe").addEventListener('click',(event)=>{
        console.log(myWindow)
        myWindow.close()
        
    

})


document.getElementById("viewWin").addEventListener('click',(event)=>{
    let scrollWin=popUpWindow('writeme.html','Example','400','400')
      setInterval(function(){
         scrollWin.scrollBy(10,10)
      },1000)

})
