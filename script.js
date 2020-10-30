console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// show day on currentDay
document.querySelector("#currentDay").textContent = moment().format("MMMM Do YYYY, h:mm:ss a");

// const moment = require('moment');
// let now = moment();
// console.log(now.format()); 

//     type="text/javascript">
//     let now = moment();
//     let time = now.format();
//     console.log(now.format());
//     document.getElementById("todaysdate").innerHTML = time;

// change color of text area depending on whether it's past, present, or future
console.log(moment().format("H"));

var hour = $(".hour");
var plan = $("textarea");

for (var i = 0; i < hour.length; i++) {
    if (parseInt(hour[i].id) < moment().format("H")) {
        plan[i].classList.add("past") 
    }
    else if(parseInt(hour[i].id) == moment().format("H")) {
        plan[i].classList.add("present");
    }
    else if(parseInt(hour[i].id) > moment().format("H")) {
        plan[i].classList.add("future");
    }
};

//Save tasks in local storage when save button in clicked

//GET LOCAL STORAGE DATA and populatre the textarea
var timeSlotArray = $("time-slot");

for (let i = 9; i < timeSlotArray.length; +9, i++) {

    // Check if null
    var storedData = localStorage.getItem('data${i}');
    if (storedData) {
    
    // Add the text to the right spot    
    $('[data=${i}]').find("textarea").val(
        localStorage.getItem('data${i}'));
    }    
}

// Add eventListener to save button
$(".save-button").on("click, saveNotes");

// Save data
function saveNotes(event) {
    console.log("*******this", this);
    // Get the data
    var timeText = $(event.target).siblings("textarea").val();
    
    // Get the ID 
    var id = $(event.target).closest("time-slot").attr("data");
    
    // Store data
    localStorage.setItem(`data${id}`,timeText);
}



// var saveBtn = $(".saveBtn");
// for (var j = 0; j < saveBtn.length; j++) {
//     saveBtn[j].addEventListener("click", toDos);
//     console.log("");
// }

//storing
// myObj = { "name":"Jane", "age":18, "city":"Chicago" };
// myJSON = JSON.stringify(myObj);                 // storing data
// localStorage.setItem("testJSON", myJSON);   

// //retrieving
// text = localStorage.getItem("testJSON");        // retrieving data 
// obj = JSON.parse(text);
// document.write(obj.name);