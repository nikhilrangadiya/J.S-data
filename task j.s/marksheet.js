function getInputValues(){
    let a =parseInt (document.getElementById(clanguage).value)
    let b =parseInt (document.getElementById(cilanguage).value)
    let c =parseInt (document.getElementById(database).value)
    let d =parseInt (document.getElementById(html).value)
    let e =parseInt (document.getElementById(css).value)
    let f =parseInt (document.getElementById(php).value)
    let g =parseInt (document.getElementById(corejava).value)
}

let total = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e) + parseFloat(f) + parseFloat(g)

    if (a > 50 || b > 50 || c > 50 || d > 50 || e > 50 || f > 50 || g > 50) {
    alert("enter a valid marks")
    }

    else{
    let obtained = a+b+c+d+e+f+g;
    obt.innerHTML = `total.${obtained}`
    }
    
    let percentage= parseFloat(total/350)*100;
    showdata.innerHTML = `percentage is:${percentage}`
