
document.querySelector(".submit").addEventListener("click",()=> {
    document.querySelector(".card-1").classList.add("hidden")
    document.querySelector(".card-2").classList.remove("hidden")

    
})




var num=  document.querySelectorAll(".btn");
        


num.forEach((n)=>{
    n.addEventListener("click",()=>{
        var text=n.innerHTML
        console.log(text);
        document.querySelector(".add-rating").innerHTML=text;
 
     })
})

    
