
function morning() {
    let time = document.getElementById("time")
    time.innerHTML = "07:00 - 15:00"

}

function evening() {
    let time = document.getElementById("time")
    time.innerHTML = "15:00 - 23:00"

}

function night() {
    let time = document.getElementById("time")
    time.innerHTML = "23:00 - 07:00"
   
}

function selectFunction(value) {
    switch (value) {
        case "morning":
            morning();
            break;
        case "evening":
            evening();
            break;
        case "night":
            night();
            break;
        default:
            break;
    }
}

  
 