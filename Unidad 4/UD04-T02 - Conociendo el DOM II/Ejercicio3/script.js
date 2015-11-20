function clickRadio(fuente) {
    document.getElementById("texto").style.fontFamily = fuente;
}

function check(checkbox) {
    if(checkbox.id == "Bold")
        if(checkbox.checked)
            document.getElementById("texto").style.fontWeight = checkbox.value;
        else
            document.getElementById("texto").style.fontWeight = "normal";
    if(checkbox.id == "Italic")
        if(checkbox.checked)
            document.getElementById("texto").style.fontStyle = checkbox.value;
        else
            document.getElementById("texto").style.fontStyle = "normal";
}