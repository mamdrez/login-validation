const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
console.log(passwordInput)
const usermsg = document.querySelector(".user-msg");
const passwordmsg = document.querySelector(".pass-msg");
console.log(passwordmsg)
const singinmsg = document.querySelector(".singin-msg");
const singinButton = document.querySelector(".login-button")


singinButton.addEventListener("click", singUp);


function singUp (event) {
    event.preventDefault();
    usermsg.innerText = "";
    passwordmsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    console.log(passwordValue)
    console.log(passwordmsg.innerHTML)

    let ifSendData = true;


    if(usernameValue.lenght === 0 || usernameValue.indexOf ("@") === -1 || usernameValue.indexOf(".") === -1){
        usermsg.innerText = "ایمیل وارد شده درست نمیباشد"
        ifSendData = false;
    } 


    if (passwordValue.length === 0) {
        passwordmsg.innerText = "لطفا رمز عبور را وارد کنید";
        ifSendData = false;
    } else if (passwordValue.length < 8) {
        passwordmsg.innerText = "رمز عبور باید بالای 8 کاراکتر باشد";
        ifSendData = false;
    }


    if(ifSendData) {
        
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue
        })
        const header = {
            "Content-Type": "application/json"
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: body,
            headers: header
        })
           .then(response => {
               if(response.ok){
                singinmsg.innerText = "با موفقیت وارد شدید"
                singinButton.style.background = "green"
              }
           })
    }

}



