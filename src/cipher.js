window.cipher = {
  encode: () => {

      let offset= document.getElementById("theKey").selectedIndex;

      let message= document.getElementById("message").value;

      let messageToUpperCase= message.toUpperCase(); 


      let newKey= "";

      
      for (let i = 0; i < messageToUpperCase.length; i++) {

          let asciiActual= (messageToUpperCase.charCodeAt(i)) 
          

          if (asciiActual===32){
            asciiActual=62;
    
          }

        let asciiFinal= (asciiActual- 65 + offset) % 26 +65

      newKey= newKey.concat(String.fromCharCode(asciiFinal));
 
      }



    document.getElementById("message").value= newKey;
    
  },

  

  decode: () => {
    
    let offset= document.getElementById("theKey").selectedIndex;

    let message= document.getElementById("message").value;

    let messageToUpperCase= message.toUpperCase(); 


    let newKey= "";

    
    for (let i = 0; i < messageToUpperCase.length; i++) {

        let asciiActual= (messageToUpperCase.charCodeAt(i)) 
        let asciiFinal= (asciiActual+ 65 - offset) % 26 +65

        if (asciiFinal===88){
      
            asciiFinal=32;
        }
      
    newKey= newKey.concat(String.fromCharCode(asciiFinal));

    }



document.getElementById("message").value= newKey;

},




    
      
};
