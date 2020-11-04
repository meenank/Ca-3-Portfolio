function ValidateInput(){
  var name1 = document.forms["sayhello"]["name"].value;
  var mobile1 = document.forms["sayhello"]["phone"].value;
  var mailid1 = document.forms["sayhello"]["mail"].value;

  if(name1==""){
    window.alert("Please fill your name!");
      document.getElementById("cusname").focus();
      document.getElementById("cusname").style.border = "2px solid red"; q
  }

  if(mobile1==""){
    window.alert("Please fill your mobile number!");
    document.getElementById("cusphone").focus();
  }

  if(mailid1==""){
    window.alert("Please fill your mail-id!");
      document.getElementById("cusmail").focus();
  }

  if(name1!="" && mobile1!="" && mailid1!=""){
    document.getElementById("formhead").innerHTML="data submitted, will respond in 24hrs :)"
  }
  
  var mp = mobile1.toString().length;

  if(mp>10 || mp<10){
    window.alert("PLease check the entered mobile number!");
  }
}