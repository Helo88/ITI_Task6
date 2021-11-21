
console.log("bgjhgb")
 let userName;
 let passWord;
 let myMail;
document.getElementById("myForm").addEventListener('submit',function(event){
    event.preventDefault()
    console.log(this.action)
   userName=document.getElementById("userName").value;
   passWord=document.getElementById("passWord").value;
   myMail=document.getElementById("myEmail").value;

   console.log(validateLetters(userName)+"  ----  "+validateMail(myMail))
   if(!validateLetters(userName)){
     document.getElementById("validateUserName").innerText="user name must start with a word consists of 3 chars at least ,no numbers , spaces only allowed between word" 
   }

   if(!validateMail(myMail)){
     
    document.getElementById("validateUserEmail").innerText=" mail must start with char no spaces no special chars except for .-_  yet no appearing consecutively two or more times "
   }


  if(validateLetters(userName) && validateMail(myMail)){
    this.submit()

  }

  if (validateLetters(userName) && validateMail(myMail)) {
    this.submit();
  }
  //
});

function validateLetters(str) {
  let letters = /^[a-zA-Z]{3,}(\s*[a-zA-Z]{3,})*$/gm;
  // console.log("res "+ letters.test(str))
  return letters.test(str);
}

function validateMail(str) {
  let mails =
    /^[a-zA-Z]+(([0-9]*)|([_.-]{0,1}[a-zA-Z0-9]))*@[a-zA-Z]+.(com|edu|net|edu).eg$/gm;
  // console.log("mailres "+ mails.test(str))
  return mails.test(str);
}







document.getElementById("textMes").addEventListener("mouseout", function (event) {
  console.log( "text",document.getElementById("textMes").value)
  if(/^[a-zA-Z]+$/gm.test(document.getElementById("textMes").value)){
    document.getElementById("errorMsg").innerText="Error Msg :  ";
  }
  else{
    document.getElementById("errorMsg").innerText="Error Msg :"+"letters only";
  }
  
})


var myDateFunc = setInterval(function() {
let gradDate=new Date("Nov 25, 2021 16:37:52");
let now = new Date().getTime();
let timeleft = gradDate - now;
document.getElementById("months").innerText=Math.floor( (timeleft / (1000 * 60 * 60 * 24))/12)
 document.getElementById("days").innerText= Math.floor(timeleft / (1000 * 60 * 60 * 24));
 document.getElementById("hours").innerText = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 document.getElementById("minutes").innerText= Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
 document.getElementById("seconds").innerText= Math.floor((timeleft % (1000 * 60)) / 1000);

}, 1000);

