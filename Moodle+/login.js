
console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector(".subcontent.loginsub"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

var l=[];
for (let i=45; i<login_text.length-79;i++)
    l.push(login_text[i]);//Please enter second value 46 , 33 in split format each letter is one element

let question_string=l.join('');//Please enter second value 46 , 33=question_string
console.log(l.join(""));



let question;
let answer;
let result;
let index;
let index2;
let result1;
let result2;
let j=0;

for(let k=0;k<4;k++)
    if(question_string.substring(7,10)=="add"){
        result=question_string.substring(11,question_string.length-1);//87 + 83
        for(let j=0;j<result.length;j++)
            if (result[j]=="+"){
                index=j}
            
        result1=result.substring(0,index-1);
        result2=result.substring(index+1,result.length);
        answer=(+result1 + +result2);
    }
    else if(question_string.substring(7,15)=="subtract"){
        result=question_string.substring(16,question_string.length-1);
        for(let j=0;j<result.length;j++)
            if (result[j]=="-"){
                index=j}
            
        result1=result.substring(0,index-1);
        result2=result.substring(index+1,result.length);
        answer=(+result1 - +result2);
        
    }
    else if(question_string.substring(13,18)=="first"){
        for(let j=0;j<question_string.length;j++)
            if (question_string[j]==","){
                index=j} 
        result=question_string.substring(25,index);
        answer=+result;
    }
    else if(question_string.substring(13,19)=="second"){
        for(let j=0;j<question_string.length;j++)
            if (question_string[j]==","){
                index=j}
        result=question_string.substring(index+1,index+4);
        answer=+result;
    }


 // Use split and array operations on the login_text string to extract the question

 // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""

captcha_input_element.value = answer;

// var myButton = document.getElementById('loginbtn');
// // myButton.click();
// // var form = document.getElementById('loginbtn');
// // form.submit();
// //document.querySelector("#loginbtn [type=submit]").click(); // in form with id="form"
// setInterval(function(){
//     myButton.click();
// },396);
