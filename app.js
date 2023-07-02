//================================================================
//=========================SIgn up=================================
//================================================================
let loginButton = document.querySelectorAll(".log-in-btn")[0];
let signUpButton = document.querySelectorAll(".sign-up-btn")[0];
let inputs = document.querySelectorAll("input");
let mcg = document.getElementById("Error");
let timer;

let signUp = () => {

    let userName = document.getElementById("username").value.trim()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confPassword = document.getElementById("conf-password").value
    let savedUser = new Saved(userName.trim(), email, password, confPassword)

    if (userName.trim() === "") {

        mcg.innerHTML = "Please Enter Username.";
        if (!timer) {
            timer = setInterval(() => {
                mcg.innerHTML = "";
            }, 5000)
        }
    }
    else {
        if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(email)) {
            if ((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(password)) {
                if (password === confPassword) {
                    let getInfo = localStorage.getItem("userData")
                    if (!getInfo) {
                        getInfo = []

                    }
                    else {
                        getInfo = JSON.parse(getInfo)
                    }
                    getInfo.push(savedUser)
                    let sentInfo = localStorage.setItem("userData", JSON.stringify(getInfo))
                    mcg.innerHTML = "Registration Successful.";
                    if (!timer) {
                        timer = setInterval(() => {
                            mcg.innerHTML = "";
                        }, 5000)
                    }

                }
                else {

                    mcg.innerHTML = "Password Not Match.";
                    if (!timer) {
                        timer = setInterval(() => {
                            mcg.innerHTML = "";
                        }, 5000)
                    }
                }
            }
            else {
                mcg.innerHTML = "pasword contain one uppercase and one number.";
                if (!timer) {
                    timer = setInterval(() => {
                        mcg.innerHTML = "";
                    }, 5000)
                }
            }
        }

        else {
            mcg.innerHTML = "Enter valid email.";
            if (!timer) {
                timer = setInterval(() => {
                    mcg.innerHTML = "";
                }, 5000)
            }
        }
    }


};

class Saved {
    constructor(userName, email, password, confPassword) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.confPassword = confPassword;
    }
}
let backBtn = document.getElementById("back-Btn")
let backPage = () => {
    window.location.assign("./index.html")
}
//================================================================
//=========================Login==================================
//================================================================


let checkUser = () => {
    console.log(mcg)
    let getLocal = JSON.parse(localStorage.getItem("userData"))
    if (!getLocal) {
        mcg.innerHTML = "Please Register Yourself.";
        if (!timer) {
            timer = setInterval(() => {
                mcg.innerHTML = "";
            }, 5000)
        }
    }
    else {

        for (let i = 0; i < getLocal.length; i++) {

            if (email.value === getLocal[i].email) {
                if (password.value === getLocal[i].password) {

                    window.location.assign("./quiz.html")
                }
                else {
                    mcg.innerHTML = "Please Enter correct password.";
                    if (!timer) {
                        timer = setInterval(() => {
                            mcg.innerHTML = "";
                        }, 5000)
                    }

                }
            }
            else {
                mcg.innerHTML = "Please Enter correct Email.";
                if (!timer) {
                    timer = setInterval(() => {
                        mcg.innerHTML = "";
                    }, 5000)
                }
            }
        }
    }


    // console.log(getLocal, email.value)
}
//================================================================
//===========================key==================================
//================================================================
let html = document.getElementById("html");
let css = document.getElementById("css");
let javascript = document.getElementById("javascript");


let startQuiz = (element) => {
    let div1 = document.getElementsByClassName("content")[0];
    let div2 = document.getElementsByClassName("key-div")[0];
    div1.style.display = "none"
    div2.style.display = "inline-block"
}
let checkKey = () => {
    let key = document.getElementById("key");
    if (key.value === "owais@9001") {
        console.log("correct")

    }
    else {
        mcg.innerHTML = "Please Enter correct Email.";
        if (!timer) {
            timer = setInterval(() => {
                mcg.innerHTML = "";
            }, 5000)
        }
    }
}