let str="hshs"
let letters =/^[a-zA-Z]{3,}\s*([a-zA-Z]{3,}|\s*)*$/gm
console.log("res "+ letters.test(" "))


let mails=/[a-zA-Z]+[_.-[a-zA-Z]]*@(com|eg)]/