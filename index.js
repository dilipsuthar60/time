let time=document.getElementById("time");
setInterval(()=>{
    let d=new Date();
time.innerText=d.toLocaleTimeString();
},1000);