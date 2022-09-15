function but1() {
    var1 = document.getElementById('inp1').value;
    document.getElementById('error').className = "error-on";
    document.getElementById('p1p').innerHTML = "Sorry " + '" ' + var1 + ' " ' + "NOT FOUND..! -_-";
    document.getElementById("sections").className = "none";
    document.getElementById("section2").className = "none";
    document.getElementById("section3").className = "none";
    document.getElementById("section44").className = "none";
    document.getElementById("section5").className = "none";
    document.getElementById("titlee2").className = "none";
    document.getElementById("titlee3").className = "none";
    document.getElementById("section6").className = "none";
    document.getElementById("section8").className = "none";
    document.getElementById("section7").className = "none";
    document.getElementById("footer3").className = "none";
    document.getElementById("footer1").className = "none";
    document.getElementById("footer2").className = "none";
    document.getElementById("footer4").className = "none";
    document.getElementById("title").className = "none";



}

function carticon() {
    document.getElementById('cartt').className = "cart";
}

function add() {
    document.getElementById('new').className = "count";
    document.getElementById('new2').className = "new2";
    document.getElementById('new3').className = "car-phone";
    // document.getElementById('your-cart').className = "cart-content";
}