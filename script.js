//Heart-count//
const heartCount =document.getElementsByClassName("heart-count");
for( const count of heartCount){
    count.addEventListener("click",function(){
       const heartNum= document.getElementById("heart-num").innerText;
       const totalHeartNum=  Number(heartNum) + 1 ;
       document.getElementById("heart-num").innerText = totalHeartNum;
    })
}

