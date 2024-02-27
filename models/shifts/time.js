
function morning() {
    let time = document.getElementById("time")
    time.innerHTML = "07:00 - 15:00"
    
    let morning = "Morning"

    let saveShiftname = localStorage.setItem("shiftName" , morning )

}

function evening() {
    let time = document.getElementById("time")
    time.innerHTML = "15:00 - 23:00"

    let evening = "Evening"

    let saveShiftname = localStorage.setItem("shiftName" , evening )

}

function night() {
    let time = document.getElementById("time")
    time.innerHTML = "23:00 - 07:00"

    let night = "Night"

    let saveShiftname = localStorage.setItem("shiftName" , night )
   
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

  
 