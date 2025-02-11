var main=document.getElementById("main")
var main2=document.getElementById("main2")
main.style.width="270px"
main2.style.width="270px"
var body=document.getElementById("body")
body.style.backgroundImage="url(https://img.freepik.com/free-vector/digital-money-inr-indian-rupee-trading-concept-background_1017-41187.jpg?t=st=1738774856~exp=1738778456~hmac=71876c1a2e0c7e52b9be283a9a884a20bd02e3897000b7dfff7649a54ecc4ba8&w=740)";
body.style.backgroundSize="cover"
var header=document.getElementById("header");
header.te
header.style.backgroundColor="rgba(255, 255, 255, 1)";

function gstc(){
    var amount=document.getElementById("amount").value
    var gst=document.getElementById("gst").value
    var result1=document.getElementById("head1");
    var result2=document.getElementById("head2");
    var er1=document.getElementById("er1");
    var er2=document.getElementById("er2");
    var total=(parseFloat(amount)*parseFloat(gst))/100;
    if (amount=="" && gst=="" ) {
        result1.innerText="Enter the Values !";
        
    } 
    else if(amount==""){
        result1.innerText="";
        result2.innerText="";
        document.getElementById("amount").placeholder="Enter Amount ";
        
    }
    else if(gst==""){
        result1.innerText="";
        result2.innerText="";
        document.getElementById("gst").placeholder="Enter Amount ";
       
        
    }
    else {
        if (gst>100) {
            result1.innerText="Enter correct Value of GST %"
            
        } else {
            result1.innerText=( "GST AMOUNT: "+(total));
            result2.innerText=( "TOTAL AMOUNT: "+(parseFloat(amount)+parseFloat(total)));

            console.log("happy");
            
        }
      
        
    }
    
}