let message_container = document.querySelector(".message_container");
let first_name = document.getElementById("first_name");
let error_first_name = document.querySelector(".error_first_name");
let error_last_name = document.querySelector(".error_last_name");
let error_email = document.querySelector(".error_email");
let error_check_input = document.querySelector(".error_check_input");
let error_textarea = document.querySelector(".error_textarea");
let error_select = document.querySelector(".error_select");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let checkInput_content = document.querySelectorAll(".checkInput_content");
let message = document.getElementById("message");
let select_content = document.querySelectorAll(".select_content");
let button = document.querySelector(".button");

// Corrected regular expressions
const namePattern = /^[A-Za-z]+$/; // Matches only letters, one or more
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Submit function
button.onclick=(event)=>{
    event.preventDefault();
    let isValid=true;
    if(first_name.value=="" || !namePattern.test(first_name.value)){
        error_first_name.innerHTML="first name is raquired";
        error_first_name.classList.remove("correct");
        error_first_name.classList.add("error_first_name");
        isValid=false;
    }else{
        error_first_name.innerHTML="correct";
        error_first_name.classList.add("correct");
        error_first_name.classList.remove("error_first_name");
        isValid=true;
    }
    if(last_name.value=="" || !namePattern.test(last_name.value)){
        error_last_name.innerHTML="last name is required";
        error_last_name.classList.remove("correct");
        error_last_name.classList.add("error_last_name");
        isValid=false;
    }else{
        error_last_name.innerHTML="correct";
        error_last_name.classList.add("correct");
        error_last_name.classList.remove("error_last_name");
        isValid=false;
    }
    if(email.value=="" || !emailPattern.test(email.value)){
        error_email.innerHTML="email is required";
        error_email.classList.remove("correct");
        error_email.classList.add("error_email");
        isValid=false;
    }else{
        error_email.innerHTML="correct";
        error_email.classList.add("correct");
        error_email.classList.remove("error_email");
        isValid=true;
    }
    if(message.value=="" || message.value.length<10){
        error_textarea.innerHTML="your message is required";
        error_textarea.classList.add("error_textarea");
        error_textarea.classList.remove("correct");
        isValid=false;
    }else{
        error_textarea.innerHTML='correct';
        error_textarea.classList.remove("error_textarea");
        error_textarea.classList.add("correct");
        isValid=true
    }
    if(isValid){
        clearAll()
        show_message()
    }
}

// check function=============
const check_input=()=>{
    checkInput_content.forEach(btn=>{
        btn.onclick=(e)=>{
            let select_img=e.target.closest(".select_img");
            if(select_img){
                select_img.innerHTML=`<img src="assets/images/icon-radio-selected.svg" alt="" />`
                select_img.parentElement.classList.add("new_check_input")
            }
        }
    })
}
check_input()

//select input function==================
const selectAll=()=>{
    select_content.forEach(btn=>{
        btn.onclick=(e)=>{
            let select_img=e.target.closest(".select_img");
            if(select_img){
                select_img.innerHTML=`<img src="assets/images/icon-checkbox-check.svg" alt="" />`
            }
        }
    })
}
selectAll()
// clear all==============
const clearAll=()=>{
    first_name.value="";
    last_name.value="";
    email.value="";
    message.value='';

    error_email.innerHTML="";
    error_first_name.innerHTML='';
    error_last_name.innerHTML='';
    error_textarea.innerHTML='';

}

// show message==========
const show_message=()=>{
    message_container.style.display="flex";
    setTimeout(()=>{
        message_container.remove();
    },3000)
}