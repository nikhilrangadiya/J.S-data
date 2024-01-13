let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let mobnum = document.getElementById("mobnum")
let date = document.getElementById("date")
let Address = document.getElementById("Address")
let inputCity = document.getElementById("inputCity")
let pin = document.getElementById("pin")
let inputstate = document.getElementById("inputstate")
let password = document.getElementById("password")


function registration() {
    let regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+[.]+[a-zA-Z0-9-]/
    let nameregex = /[a-z]/
    let mobregex = /[0-9]/

    if (fname.value == "") {
        p1.style.color = "red";
        p1.style.backgroundColor = "yellow";
        p1.style.fontSize = "18px";
        p1.innerHTML = 'Enter your name'
        event.preventDefault()

    }
    else if (fname.value != '') {
        if (fname.value.match(nameregex)) {
            p1.innerHTML = ''
        }
        else if (fname.value.match() != nameregex) {
            p1.style.color = "red";
            p1.style.backgroundColor = "yellow";
            p1.style.fontSize = "18px";
            p1.innerHTML = 'Not valid number in name'
            event.preventDefault()
        }
        if (fname.value.length < 3) {
            p1.style.color = "red";
            p1.style.backgroundColor = "yellow";
            p1.style.fontSize = "18px";
            p1.innerHTML = 'Enter minimum 3 charater'
            event.preventDefault()
        }
        if (fname.value.length > 7) {
            p1.style.color = "red";
            p1.innerHTML = 'maximum 7 charater allow'
            event.preventDefault()
        }
    }



    if (lname.value == "") {
        p2.style.color = "red";
        p2.style.backgroundColor = "yellow";
        p2.style.fontSize = "18px";
        p2.innerHTML = 'Enter your name'
        event.preventDefault()

    }
    else if (lname.value != '') {
        if (lname.value.match(nameregex)) {
            p2.innerHTML = ''
        }
        else if (lname.value.match() != nameregex) {
            p2.style.color = "red";
            p2.style.backgroundColor = "yellow";
            p2.style.fontSize = "18px";
            p2.innerHTML = 'Not valid number in name'
            event.preventDefault()
        }
        if (lname.value.length < 3) {
            p2.style.color = "red";
            p2.style.backgroundColor = "yellow";
            p2.style.fontSize = "18px";
            p2.innerHTML = 'Enter minimum 3 charater'
            event.preventDefault()
        }
        if (lname.value.length > 7) {
            p2.style.color = "red";
            p2.style.backgroundColor = "yellow";
            p2.style.fontSize = "18px";
            p2.innerHTML = 'maximum 7 charater allow'
            event.preventDefault()
        }
    }



    if (email.value == '') {
        p3.style.color = "red";
        p3.style.backgroundColor = "yellow";
        p3.style.fontSize = "18px";
        p3.innerHTML = 'Enter your email'
        event.preventDefault()
    }
    else if (email.value != '') {
        if (email.value.match(regex)) {
            p3.innerHTML = ''
        }
        else {
            p3.style.color = "red";
            p3.style.backgroundColor = "yellow";
            p3.style.fontSize = "18px";
            p3.innerHTML = 'Enter valid email'
            event.preventDefault()
        }
    }



    if (mobnum.value === "") {
        p4.style.color = "red";
        p4.style.backgroundColor = "yellow";
        p4.style.fontSize = "18px";
        p4.innerHTML = "Enter mobile number"
        event.preventDefault()

    }

    else if (mobnum.value != '') {
        if (mobnum.value.match(mobregex)) {
            p4.innerHTML = ''
        }
        else if (mobnum.value.match() != mobregex) {
            p4.style.color = "red";
            p4.style.backgroundColor = "yellow";
            p4.style.fontSize = "18px";
            p4.innerHTML = 'Not valid text in number'
            event.preventDefault()
        }
        if (mobnum.value.length < 10) {
            p4.style.color = "red";
            p4.style.backgroundColor = "yellow";
            p4.style.fontSize = "18px";
            p4.innerHTML = 'Enter valid number'
            event.preventDefault()
        }
        if (mobnum.value.length > 10) {
            p4.style.color = "red";
            p4.style.backgroundColor = "yellow";
            p4.style.fontSize = "18px";
            p4.innerHTML = 'Not valid'
            event.preventDefault()
        }
    }




    if (date.value == "") {
        p5.style.color = "red";
        p5.style.backgroundColor = "yellow";
        p5.style.fontSize = "18px";
        p5.innerHTML = "Enter Date of Birth"
    }
    else {
        p5.innerHTML = ""
    }

    if (Address.value == "") {
        p6.style.color = "red";
        p6.style.backgroundColor = "yellow";
        p6.style.fontSize = "18px";
        p6.innerHTML = "Enter Address"
    }
    else {
        p6.innerHTML = ""
    }




    if (inputCity.value == "") {
        p7.style.color = "red";
        p7.style.backgroundColor = "yellow";
        p7.style.fontSize = "18px";
        p7.innerHTML = "Enter your city Name"
    }

    else if (inputCity.value != '') {
        if (inputCity.value.match(nameregex)) {
            p7.innerHTML = ''
        }
        else if (inputCity.value.match() != nameregex) {
            p7.style.color = "red";
            p7.style.backgroundColor = "yellow";
            p7.style.fontSize = "18px";
            p7.innerHTML = 'Not valid number in City Name'
            event.preventDefault()
        }
    }



    if (pin.value == "") {
        p8.style.color = "red";
        p8.style.backgroundColor = "yellow";
        p8.style.fontSize = "18px";
        p8.innerHTML = "Enter your Area pin "
    }
    else if (pin.value != '') {
        if (pin.value.match(mobregex)) {
            p8.innerHTML = ''
        }
        else if (pin.value.match() != mobregex) {
            p8.style.color = "red";
            p8.style.backgroundColor = "yellow";
            p8.style.fontSize = "18px";
            p8.innerHTML = 'Not valid text in Area PIN Number'
            event.preventDefault()
        }
    }



    if (inputstate.value == "") {
        p9.style.color = "red";
        p9.style.backgroundColor = "yellow";
        p9.style.fontSize = "18px";
        p9.innerHTML = "Enter your state Name "
    }
    else if (inputstate.value != '') {
        if (inputstate.value.match(nameregex)) {
            p9.innerHTML = ''
        }
        else if (inputstate.value.match() != nameregex) {
            p9.style.color = "red";
            p9.style.backgroundColor = "yellow";
            p9.style.fontSize = "18px";
            p9.innerHTML = 'Not valid Number in state Name'
            event.preventDefault()
        }
    }




    if (password.value == '') {
        p10.style.color = "red";
        p10.style.backgroundColor = "yellow";
        p10.style.fontSize = "18px";
        p10.innerHTML = 'Enter password'
        event.preventDefault()
    }
    else if (password.value.length < 6) {
        p10.style.color = "red";
        p10.style.backgroundColor = "yellow";
        p10.style.fontSize = "18px";
        p10.innerHTML = 'Enter minimum 6 character'
        event.preventDefault()
    }
    else {
        p10.innerHTML = ''
    }

}