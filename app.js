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


}
//================================================================
//===========================key==================================
//================================================================
let html = document.getElementById("html");
let css = document.getElementById("css");
let javascript = document.getElementById("javascript");
let kiaAya;
let startQuiz = (element) => {
    let div1 = document.getElementsByClassName("content")[0];
    let div2 = document.getElementsByClassName("key-div")[0];
    div1.style.display = "none"
    div2.style.display = "inline-block"
    kiaAya = element;
}

let checkKey = () => {
    let key = document.getElementById("key");
    if (key.value === "owais@9001") {
        let div1 = document.getElementsByClassName("content")[0];
        let div2 = document.getElementsByClassName("key-div")[0];
        let div3 = document.getElementsByClassName("questions")[0];
        div1.style.display = "none"
        div2.style.display = "none"
        div3.style.display = "flex"
        document.documentElement.requestFullscreen();
        start()
    }
    else if ((key.value).trim() === "") {
        mcg.innerHTML = "Please Enter 'owais@9001'.";
        if (!timer) {
            timer = setInterval(() => {
                mcg.innerHTML = "";
            }, 5000)
        }
    }
    else if (key.value !== "owais@9001") {
        mcg.innerHTML = "Please Enter 'owais@9001'.";
        if (!timer) {
            timer = setInterval(() => {
                mcg.innerHTML = "";
            }, 5000)
        }
    }
    key.value = ""
}


let htmlQuizQuestion = [
    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyperlinking and Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "2. Which tag is used to define the header of an HTML document?",
        options: [
            "<header>",
            "<head>",
            "<h1>",
        ],
        answer: "<head>"
    },
    {
        question: "3. Which tag is used to create a hyperlink in HTML?",
        options: [
            "<link>",
            "<a>",
            "<hyperlink>"
        ],
        answer: "<a>"
    },
    {
        question: "4. Which tag is used to display a line break in HTML?",
        options: [
            "<br>",
            "<linebreak>",
            "<lb>"
        ],
        answer: "<br>"
    },
    {
        question: "5. What is the correct HTML for creating a checkbox?",
        options: [
            "<input type='checkbox'>",
            "<checkbox>",
            "<input type='check'>"
        ],
        answer: "<input type='checkbox'>"
    },
    {
        question: "6. Which attribute is used to define inline styles in HTML?",
        options: [
            "class",
            "style",
            "inline"
        ],
        answer: "style"
    },
    {
        question: "7. Which tag is used to create an ordered list in HTML?",
        options: [
            "<ol>",
            "<ul>",
            "<list>"
        ],
        answer: "<ol>"
    },
    {
        question: "8. Which tag is used to define a table in HTML?",
        options: [
            "<table>",
            "<tr>",
            "<th>"
        ],
        answer: "<table>"
    },
    {
        question: "9. What is the correct HTML for inserting an image?",
        options: [
            "<img href='image.jpg'>",
            "<image src='image.jpg'>",
            "<img src='image.jpg'>"
        ],
        answer: "<img src='image.jpg'>"
    },
    {
        question: "10. Which tag is used to define a division or a section in HTML?",
        options: [
            "<div>",
            "<section>",
            "<division>"
        ],
        answer: "<div>"
    },
    {
        question: "10. Which tag is used to define a division or a section in HTML?",
        options: [
            "<div>",
            "<section>",
            "<division>"
        ],
        answer: "<div>"
    }
];
let cssQuizQuestions = [
    {
        question: "1. Which property is used to change the background color of an element in CSS?",
        options: ["color", "background-color", "background"],
        answer: "background-color"
    },
    {
        question: "2. Which CSS property is used to control the spacing between letters in a text?",
        options: ["text-spacing", "letter-spacing", "word-spacing"],
        answer: "letter-spacing"
    },
    {
        question: "3. Which CSS property is used to add shadows to elements?",
        options: ["shadow", "text-shadow", "box-shadow"],
        answer: "box-shadow"
    },
    {
        question: "4. Which CSS property is used to apply a font style to an element?",
        options: ["font-family", "font-style", "font-variant"],
        answer: "font-style"
    },
    {
        question: "5. Which CSS property is used to control the size of an element's border?",
        options: ["border-size", "border-width", "border-style"],
        answer: "border-width"
    },
    {
        question: "6. Which CSS property is used to position an element relative to its normal position?",
        options: ["position", "top", "left"],
        answer: "position"
    },
    {
        question: "7. Which CSS property is used to make the text in an element bold?",
        options: ["font-weight", "text-style", "font-bold"],
        answer: "font-weight"
    },
    {
        question: "8. Which CSS property is used to specify the space between lines in a paragraph?",
        options: ["line-height", "line-spacing", "text-spacing"],
        answer: "line-height"
    },
    {
        question: "9. Which CSS property is used to add rounded corners to an element?",
        options: ["border-radius", "corner-radius", "rounded-corners"],
        answer: "border-radius"
    },
    {
        question: "10. Which CSS property is used to control the visibility of an element?",
        options: ["display", "visible", "visibility"],
        answer: "visibility"
    },
    {
        question: "10. Which CSS property is used to control the visibility of an element?",
        options: ["display", "visible", "visibility"],
        answer: "visibility"
    }
];
let javascriptQuizQuestion = [
    {
        question: "1. What is JavaScript?",
        options: [
            "A programming language used for client-side scripting",
            "A markup language used for structuring web content",
            "A style sheet language used for web page presentation"
        ],
        answer: "A programming language used for client-side scripting"
    },
    {
        question: "2. Which keyword is used to declare variables in JavaScript?",
        options: ["let", "var", "const"],
        answer: "var"
    },
    {
        question: "3. What is the output of the following code?\nconsole.log(2 + '2');",
        options: ["4", "22", "'22'"],
        answer: "'22'"
    },
    {
        question: "4. Which of the following is not a JavaScript data type?",
        options: ["String", "Boolean", "Float"],
        answer: "Float"
    },
    {
        question: "5. What is the correct way to write a comment in JavaScript?",
        options: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment"
        ],
        answer: "// This is a comment"
    },
    {
        question: "6. Which method is used to add an element to the end of an array in JavaScript?",
        options: ["push()", "pop()", "concat()"],
        answer: "push()"
    },
    {
        question: "7. What does the 'typeof' operator return?",
        options: ["The data type of a variable", "The value of a variable", "The length of a variable"],
        answer: "The data type of a variable"
    },
    {
        question: "8. Which function is used to parse a string and return an integer in JavaScript?",
        options: ["parseInt()", "parseFloat()", "toString()"],
        answer: "parseInt()"
    },
    {
        question: "9. What is the purpose of the 'querySelectorAll()' method in JavaScript?",
        options: [
            "To select and return the first element that matches a CSS selector",
            "To select and return all elements that match a CSS selector",
            "To select and return the parent element of a specified element"
        ],
        answer: "To select and return all elements that match a CSS selector"
    },
    {
        question: "10. What is the result of the following expression?\n3 + 2 + '7';",
        options: ["'327'", "12", "57"],
        answer: "'57'"
    },
    {
        question: "What is the result of the following expression?\n3 + 2 + '7';",
        options: ["'327'", "12", "57"],
        answer: "'57'"
    }
    ,
    {
        question: "What is the result of the following expression?\n3 + 2 + '7';",
        options: ["'327'", "12", "57"],
        answer: "'57'"
    }
];
let start = () => {
    if (kiaAya.getAttributeNode("id").value === "html") {
        starthtmlquiz()
    }
    else if (kiaAya.getAttributeNode("id").value === "css") {
        startcssquiz()
    }
    else if (kiaAya.getAttributeNode("id").value === "javascript") {
        startjsquiz()
    }
}
let index = 0;
let score = 0;
let interr = false
let starthtmlquiz = () => {

    let sc = 59
    let timer = document.getElementById("timer");
    if (!interr) {

        interr = setInterval(() => {
            if (sc < 10) {
                timer.innerHTML = `00:0${sc}`
            }
            else {
                timer.innerHTML = `00:${sc}`
            }
            sc--
            if (sc === -1) {
                starthtmlquiz()
                clearInterval(interr)
                interr = false;
            }
            console.log(sc)
        }, 1000)
    }

    document.getElementById("but").setAttribute('onclick', "starthtmlquiz()")
    document.getElementById("nam").innerText = "HTML";
    document.querySelector(".material>p").innerText = htmlQuizQuestion[index].question;
    document.querySelector("#op1").innerText = htmlQuizQuestion[index].options[0];
    document.querySelector("#op2").innerText = htmlQuizQuestion[index].options[1];
    document.querySelector("#op3").innerText = htmlQuizQuestion[index].options[2];
    let radios = document.querySelectorAll("input[type = 'radio']")

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let userAns = htmlQuizQuestion[index - 1].options[i]
            let corAns = htmlQuizQuestion[index - 1].answer;
            if (userAns === corAns) {
                score++
            }

        }
        radios[i].checked = false;
    }
    index++
    if (index < htmlQuizQuestion.length) {

        document.getElementById("but").disabled = true;

    }
    else {
        clearInterval(interr)
        printScore(score)
        index = 0;
        score = 0;
    }

    function exitFullscreenHandler() {
        if (!document.fullscreenElement) {

            printScore(score)
        }
    }

    document.addEventListener("fullscreenchange", exitFullscreenHandler);




}
let startcssquiz = () => {

    let sc = 59
    let timer = document.getElementById("timer");
    if (!interr) {

        interr = setInterval(() => {
            if (sc < 10) {
                timer.innerHTML = `00:0${sc}`
            }
            else {
                timer.innerHTML = `00:${sc}`
            }
            sc--
            if (sc === -1) {
                startcssquiz()
                clearInterval(interr)
                interr = false
            }
            console.log(sc)
        }, 1000)
    }

    document.getElementById("but").setAttribute('onclick', "startcssquiz()")
    document.getElementById("nam").innerText = "CSS";
    document.querySelector(".material>p").innerText = cssQuizQuestions[index].question;
    document.querySelector("#op1").innerText = cssQuizQuestions[index].options[0];
    document.querySelector("#op2").innerText = cssQuizQuestions[index].options[1];
    document.querySelector("#op3").innerText = cssQuizQuestions[index].options[2];
    let radios = document.querySelectorAll("input[type = 'radio']")

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let userAns = cssQuizQuestions[index - 1].options[i]
            let corAns = cssQuizQuestions[index - 1].answer;
            if (userAns === corAns) {
                score++
            }

        }
        radios[i].checked = false;
    }
    index++
    if (index < htmlQuizQuestion.length) {

        document.getElementById("but").disabled = true;

    }
    else {
        clearInterval(interr)
        printScore(score)
        index = 0;
        score = 0;
    }
    function exitFullscreenHandler() {
        if (!document.fullscreenElement) {

            printScore(score)
        }
    }

    document.addEventListener("fullscreenchange", exitFullscreenHandler);
}
let startjsquiz = () => {
    let sc = 59
    let timer = document.getElementById("timer");
    if (!interr) {

        interr = setInterval(() => {
            if (sc < 10) {
                timer.innerHTML = `00:0${sc}`
            }
            else {
                timer.innerHTML = `00:${sc}`
            }
            sc--
            if (sc === -1) {
                startjsquiz()
                clearInterval(interr)
                interr = false
            }
            console.log(sc)
        }, 1000)
    }

    document.getElementById("but").setAttribute('onclick', "startjsquiz()")
    document.getElementById("nam").innerText = "JavaScript";
    document.querySelector(".material>p").innerText = javascriptQuizQuestion[index].question;
    document.querySelector("#op1").innerText = javascriptQuizQuestion[index].options[0];
    document.querySelector("#op2").innerText = javascriptQuizQuestion[index].options[1];
    document.querySelector("#op3").innerText = javascriptQuizQuestion[index].options[2];
    let radios = document.querySelectorAll("input[type = 'radio']")

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let userAns = javascriptQuizQuestion[index - 1].options[i]
            let corAns = javascriptQuizQuestion[index - 1].answer;
            if (userAns === corAns) {
                score++
            }

        }
        radios[i].checked = false;
    }
    index++
    if (index < javascriptQuizQuestion.length) {

        document.getElementById("but").disabled = true;

    }
    else {
        clearInterval(interr)
        printScore(score)
        score = 0;
        index = 0;
    }

    function exitFullscreenHandler() {
        if (!document.fullscreenElement) {

            printScore(score)
        }
    }

    document.addEventListener("fullscreenchange", exitFullscreenHandler);
}
let disab = () => {
    document.getElementById("but").disabled = false;
}
let printScore = (score) => {
    let div1 = document.getElementsByClassName("content")[0];
    let div2 = document.getElementsByClassName("key-div")[0];
    let div3 = document.getElementsByClassName("questions")[0];
    let div4 = document.getElementsByClassName("sccore")[0];
    div1.style.display = "none"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "flex"
    div4.innerHTML = `
    <h1>Score<br />${(score / 10) * 100}%</h1>
    <button onclick="backToHome()">Home</button>`
}
let backToHome = () => {
    let div1 = document.getElementsByClassName("content")[0];
    let div2 = document.getElementsByClassName("key-div")[0];
    let div3 = document.getElementsByClassName("questions")[0];
    let div4 = document.getElementsByClassName("sccore")[0];
    div1.style.display = "flex"
    div2.style.display = "none"
    div3.style.display = "none"
    div4.style.display = "none"
    document.exitFullscreen();


}