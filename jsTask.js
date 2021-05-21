function convertFahrToCelsius(fahrenheit) {
    //check the dataType if number
     if(typeof(fahrenheit) == "number"){
       // convert to Cel using the Formula
      var fToCel = (fahrenheit - 32) * 5 / 9;
      //convert to 4 decimal places
      var formatedVaCel = fToCel.toFixed(4);
      //display result in 4 decimal places
      document.write(formatedVaCel);
      
     }else{
         //not number
          document.write(JSON.stringify(fahrenheit) + " is not a valid number but a/an " + typeof(fahrenheit));
         
     }
       
   } 
convertFahrToCelsius(0)