var count = 0;
var numbers = [];
for (i = 1; i <= 196; i++) {
    numbers.push(i);
}
function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i),
    x = o[--i],
    o[i] = o[j],
    o[j] = x)
        ;
    return o;
}
var randomList = shuffle(numbers);
document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13 || keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40) {
        changeImage();
    }
}
$(document).ready(function() {
    changeImage();
    $("#image-div").hide();
    $("#start-btn").click(function() {
        $("#logo-div").hide();
        $("#image-div").show();
        var flag = false; //make true for hide the map with names
        if (flag) {
            $("#image-with-name").hide();
            $("#image-without-name").show();
        } else {
            $("#image-with-name").show();
            $("#image-without-name").hide();
        }
    });
});

function changeImage() {
    if (count < 196) {
        document.getElementById("country-image-without-name").src = "img/map/map (" + randomList[count] + ").jpg";
        document.getElementById("country-image").src = "img/map/map (" + randomList[count] + ").jpg";
        document.getElementById("country-image-with-name").src = "img/map-name/map (" + randomList[count] + ").jpg";
        document.getElementById("name-tag").innerHTML = "img" + randomList[count];
        count++;
    } else {
        alert(count + " images are completed. Do you want again reload the page or refresh the page(f5)");
    }
}
