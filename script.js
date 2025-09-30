let photo = document.querySelector("#photo")
var button = document.querySelector("#button")
function change() {
    if (button.innerHTML == "Изменить") {
        //photo.src="cabbage.png"
        button.innerHTML = "Вернуть"
    }
    else {
        //photo.src="left.png"
        button.innerHTML = "Изменить"
    }

}
