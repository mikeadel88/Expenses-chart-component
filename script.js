const columns=document.querySelector(".columns");

let finalData=[];
async function data(){
    let getdata=await fetch("./data.json")
    let result=await getdata.json()
    finalData=result;
   display();
}
function display(){
    let container=``;
   for (let i=0;i<finalData.length;i++){
    container+=`
    <div class="chart">
    <div class="col " style="height:${finalData[i].amount}%"></div>
    <small class="label">$ ${finalData[i].amount}</small>
    <div class="caption">${finalData[i].day}</div>
    </div>
  `
   }
    columns.innerHTML=container
}
data()




