
let submitUrl=new URL(document.location.href).searchParams
console.log(submitUrl.get('email')+submitUrl.get('userName'))
document.write("userName: "+submitUrl.get('userName'));
document.write("Email: "+submitUrl.get('email'));

document.getElementById("io").innerText=`Email: ${submitUrl.get('email')}---Password: ${submitUrl.get('userName')}`