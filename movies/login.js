document.querySelector("#form").addEventListener("submit",loginfun)

var arrdata = JSON.parse(localStorage.getItem("signupdata")); 

function loginfun(){
    event.preventDefault()

    let e=[]
    let p=[]

    arrdata.forEach(function(ele){

        e.push(ele.email);
        p.push(ele.password);


    });

    var x=document.getElementById("ema");
    var y=document.getElementById("pass");

    for (var i=0;i<p.length;i++)
        {
            if ( y.value==p[i] && x.value==e[i]){
                console.log(y)
                alert("Login Successful")
                window.location.href="index.html"
                break;

            }
            else{
                alert("Inncorrect email or password")
                break
            }
        }

}