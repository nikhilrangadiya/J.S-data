function resulttotal() {
    // Fetching values of individual subjects
    var clanguage = parseInt(document.getElementById("clanguage").value) || 0;
    var cilanguage = parseInt(document.getElementById("cilanguage").value) || 0;
    var database = parseInt(document.getElementById("database").value) || 0;
    var html = parseInt(document.getElementById("html").value) || 0;
    var css = parseInt(document.getElementById("css").value) || 0;
    var php = parseInt(document.getElementById("php").value) || 0;
    var corejava = parseInt(document.getElementById("corejava").value) || 0;

    // Calculating total marks
    var totalMarks = clanguage + cilanguage + database + html + css + php + corejava;

    // Displaying total marks
    document.getElementById("totaldata").innerHTML = totalMarks ;

    // Calculating percentage
    var percentage = (totalMarks / 700  ) * 100;

    // Displaying percentage
    document.getElementById("per").innerHTML =  percentage.toFixed(2);
}
