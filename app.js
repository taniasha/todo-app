let inp = document.querySelector('input');
let ol = document.querySelector("ol");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
  // console.log(inp.value);  
  // inp.value = "";
  //apni input ki value ko reset kr diya jisse access krne k baad input hmara khud khali ho jaye 
  
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ol.appendChild(item);
  inp.value = "";

});

ol.addEventListener("click",function(event){
  //event.target hume btata ki kisko click kiya h 
  //nodename bta rha ki event ko   trigger kon kr rha ..list ya button
  //check liye console kro console.log(event.target.nodename)
  if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
})



// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//   delBtn.addEventListener("click",function(){
//     // console.log("elemnt deleted");
//     let par = this.parentElement;
//     console.log(par)
//     par.remove();
//   });
// }