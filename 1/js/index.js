const changeColorOnClick = () => {
    var color = document.getElementById("p1").style.color

    if (color == "black") {
        document.getElementById("p1").style.color = "rgb(26,255,0)"
    } else {
        document.getElementById("p1").style.color = "black"
    }

}