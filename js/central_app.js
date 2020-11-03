function getValue() {
    var retVal = prompt("Enter OTP : \nOTP sent on Mobile No And Email Id\nassociated with this Aadhar card: ", "");
    if (confirm("Authentication Successfull!\nWant To Continue?")) {
        // Save it!
        window.open("./dashboard.html","_self");
      } else {
        // Do nothing!
        var myWindow = window.open("", "_self");
        myWindow.document.write("<p>Session Expired!!!");
        setTimeout(() => { 
            window.open("./index.html","_self");
         }, 2000);
    }
    
}