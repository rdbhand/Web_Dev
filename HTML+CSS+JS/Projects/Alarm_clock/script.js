let hr_ele=document.querySelector("#hr");
let min_ele=document.querySelector("#min");
let sec_ele=document.querySelector("#sec");

let date;
let hr;
let min;
let sec;
setInterval(()=>{
  date=new Date;
  hr=date.getHours()*30;
  min=date.getMinutes()*6;
  sec=date.getSeconds()*6;
  hr_ele.style.transform=`rotatez(${(hr)+min/12}deg)`;
  min_ele.style.transform=`rotatez(${min}deg)`;
  sec_ele.style.transform=`rotatez(${sec}deg)`;
},1000);

date=new Date;
let ele=document.querySelector("#hand_container");
let new_ele=document.createElement("p");
if(date.getHours()>=12)
{
  new_ele.textContent=`PM`;
}
else{
  new_ele.textContent=`AM`;
}
new_ele.id='ampm';
ele.appendChild(new_ele);
setInterval(()=>{
  let x=Math.floor(Math.random() * 256);;
  let y=Math.floor(Math.random() * 256);;
  let z=Math.floor(Math.random() * 256);;
  let body_ele=document.querySelector("header");
  let box_ele=document.querySelector("#box");
  body_ele.style.borderColor=`rgb(${x},${y},${z})`;
  box_ele.style.backgroundColor=`rgb(${x},${y},${z})`;
},5000);

