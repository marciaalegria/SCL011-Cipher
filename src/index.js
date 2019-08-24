document.getElementById("message").addEventListener("click",()=>{
    document.getElementById("message").value="";
})


document.getElementById("encode").addEventListener("click",() =>{
    cipher.encode();
})

document.getElementById("decode").addEventListener("click",() =>{
    cipher.decode();
})

document.getElementById("reset").addEventListener("click", () => {
    window.close();
});

