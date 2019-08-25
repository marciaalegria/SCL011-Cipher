document.getElementById("message").addEventListener("click",()=>{
    document.getElementById("message").value="";
});
function myFunction() {
    var final = document.getElementById("name").value;
    var nuevo= "te envia un mensaje";
    document.getElementById("final").innerHTML =  final+nuevo;
  }

document.getElementById("encode").addEventListener("click",() =>{
    cipher.encode();
});

document.getElementById("decode").addEventListener("click",() =>{
    cipher.decode();
});

document.getElementById("reset").addEventListener("click", () => {
    window.close();
});

