function bodyload(){
      setInterval(clock,1000)
}
function clock(){

    var tarik=new Date();

    var date=document.getElementById("date")

    date.innerHTML=tarik.toLocaleDateString();

    var time=document.getElementById("time")

    time.innerHTML=tarik.toLocaleTimeString();

}
function changeamount(){

    var amount=document.getElementById("amount")

    var data=document.getElementById("rangeamount")

    amount.value=data.value;
}

function changeyear(){

    var amount=document.getElementById("year")

    var data=document.getElementById("rangeyear")

    amount.value=data.value;
}

function changerate(){

    var amount=document.getElementById("rate")

    var data=document.getElementById("rangerate")

    amount.value=data.value;
}
function calculate(){

    var p=parseInt(document.getElementById("amount").value)

    var  r=parseFloat(document.getElementById("rate").value)/100/12

    var n=parseInt(document.getElementById("year").value)*12

    var emi=p*r/(1-(Math.pow(1/(1+r),n)))

    var total=emi*n;

    var interest=total-p;
    // console.log(interest);
    
    var  result=document.getElementById("result");

    result.className="bg-info"

    result.innerHTML=`EMI=&#8377; ${Math.round(emi)}`
    
    var result2=document.getElementById("result2")

    result2.className="bg-info"

    result2.innerHTML=`Total Interest =&#8377; ${Math.round(interest)}`
    // console.log(interest);
    
    var result3=document.getElementById("result3")

    result3.className="bg-info"
    
    result3.innerHTML=`Total Amount =&#8377; ${Math.round(total)}`
}
function calculated(){

    var p=parseInt(document.getElementById("amount").value)

    var  r=parseFloat(document.getElementById("rate").value)/100/12

    var n=parseInt(document.getElementById("year").value)*12

    var emi=p*r/(1-(Math.pow(1/(1+r),n)))

    var total=emi*n;

    var interest=total-p;
    // console.log(interest);
    
    var  result=document.getElementById("result");

    result.className="bg-info"

    result.innerHTML=`EMI=&#8377; ${Math.round(emi)}`
    
    var result2=document.getElementById("result2")

    result2.className="bg-info"

    result2.innerHTML=`Total Interest =&#8377; ${Math.round(interest)}`
    // console.log(interest);
    
    var result3=document.getElementById("result3")

    result3.className="bg-info"
    
    result3.innerHTML=`Total Amount =&#8377; ${Math.round(total)}`
}