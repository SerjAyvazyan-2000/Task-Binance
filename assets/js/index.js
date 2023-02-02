// =====================================Graphic Line=====================
const myLine = document.getElementById("my-line").getContext("2d")
let lineChart = new Chart(myLine,{
   type:"line",
    data:{
       labels:["My 2021","Jun 2021","Jul 2021","Aug 2021","Sep 2021","Oct 2021","Nov 2021","Dec 2021"],
        datasets:[{
            label:"",
            data: [28,10,36,23,59,46,73,62,98],
            backgroundColor:"#fa0707",
            borderColor:"#fa0707",
            tension:0.4
        }]
    },
})
// =====================================Graphic Line=====================

const myBar = document.getElementById("my-bar")
 let  barChart = new Chart(myBar,{
      type: "bar",
      data:{
           labels: ["Gate.io","Coinbase","Binance","Huobi"],
           datasets: [{
                label:'',
                data:[25,76,32,52,25,76,32,52],
                barPercentage:"0.4",
           }]
      },

 })

// ===========================Graphic Bar===================

const myBarExample2 = document.getElementById("my-bar-example-2")
let barExample = new Chart(myBarExample2,{
     type:'bar',
     data:{
           labels:["","","","","","","","","",""],
         datasets:[{
                label:"",
                data:[10,12,8,14,13,16,7,18,15,20,17],
               barPercentage:0.3,





         }]

     }
})





const usd = document.getElementById("usd")
if(usd.checked === false){
     usd.checked = true
}
const bts = document.getElementById("bts")
if(bts.checked === false){
    bts.checked = true
}
