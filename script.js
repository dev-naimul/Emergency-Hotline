// function//
function getElement(id){
    const elements = document.getElementById(id);
    return elements ;
}

//Heart-count//
const heartCount =document.getElementsByClassName("heart-count");
for( const count of heartCount){
    count.addEventListener("click",function(){
       const heartNum= document.getElementById("heart-num").innerText;
       const totalHeartNum=  Number(heartNum) + 1 ;
       document.getElementById("heart-num").innerText = totalHeartNum;
    })
}


 // clear-button//
getElement("clear-btn").addEventListener("click",function(){
    getElement("history-container").innerHTML=""
})




// call-button//
getElement("call-1").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling National Emergency Number:999")

// history//
  const callName1= getElement("national").innerText
  const nationalNum= getElement("national-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName1}</h1>
            <p>${nationalNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})


getElement("call-2").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Police Helpline Number:999")

// history//
  const callName2= getElement("police").innerText
  const policeNum= getElement("police-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName2}</h1>
            <p>${policeNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})


getElement("call-3").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Fire Service Number:999")

// history//
  const callName3= getElement("fire-service").innerText
  const fireNum= getElement("fire-service-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName3}</h1>
            <p>${fireNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})


getElement("call-4").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Ambulance Service:1994-999999")

// history//
  const callName4= getElement("ambulance").innerText
  const ambulanceNum= getElement("ambulance-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName4}</h1>
            <p>${ambulanceNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})

getElement("call-5").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Women & Child Helpline:109")

// history//
  const callName5= getElement("women").innerText
  const womenNum= getElement("women-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName5}</h1>
            <p>${womenNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})

getElement("call-6").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Anti-Corruption Helpline:106")

// history//
  const callName6= getElement("Anti-Corruption").innerText
  const AntiCorruptionNum= getElement("Anti-Corruption-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName6}</h1>
            <p>${AntiCorruptionNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})

getElement("call-7").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Electricity Helpline:16216")

// history//
  const callName7= getElement("Electricity-Helpline").innerText
  const ElectricityHelplineNum= getElement("Electricity-Helpline-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName7}</h1>
            <p>${ElectricityHelplineNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})

getElement("call-8").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Brac Helpline:16445")

// history//
  const callName8= getElement("Brac-Helpline").innerText
  const BracHelplineNum= getElement("Brac-Helpline-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName8}</h1>
            <p>${BracHelplineNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})

getElement("call-9").addEventListener('click',function(){
   
   
   const coin= getElement("coin").innerText;
   const coinCut= Number(coin)-20;
    if(coin<=0){
    alert("insufficient coin")
    return;
   }
  getElement("coin").innerText=coinCut;
  alert("📞Calling Bangladesh Railway Helpline:163")

// history//
  const callName9= getElement("Railway-Helpline").innerText
  const railwayHelplineNum= getElement("Railway-Helpline-num").innerText
  const historyContainer= getElement("history-container");
  const history= document.createElement("div");
    history.innerHTML = ` <div class="flex justify-between p-3 mt-5 bg-gray-200 rounded-xl">
          <div>
            <h1>${callName9}</h1>
            <p>${railwayHelplineNum}</p>
          </div>
          <div>
            <p>${new Date().toLocaleTimeString()}</p>
          </div>
        </div>
    `
    historyContainer.append(history);
})
