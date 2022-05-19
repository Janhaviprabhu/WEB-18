document.querySelector("#form").addEventListener("submit", onsubmit)

var dataArr=JSON.parse(localStorage.getItem("signupdata")) || []

function onsubmit(){
    event.preventDefault()

    let c=document.getElementById("name")
    let cont=document.getElementById("num")
    let e= document.getElementById("email")
    let pw=document.getElementById("pw")

    if (c.value=="" || cont.value=="" || e.value=="" || pw.value==""){
        alert("All fields are Mandatory")
    }
    else{
        
     
    var dataobj={
        email:form.email.value,
        password:form.pw.value
    }
dataArr.push(dataobj)
    localStorage.setItem("signupdata",JSON.stringify(dataArr))
    window.location.href="login.html"
    alert("Registration Successful")
}


}