const clock = document.getElementById('clock');

setInterval(() => {
    const now = moment();
    const humanReadable = now.format('dddd, MMMM D, YYYY, hh:mm:ssa');
    clock.textContent = humanReadable;
}, 1000);

// change color of text area depending on whether it's past, present, or future
console.log(moment().format("H"));

var hour = document.getElementById('clock');
var plan = document.getElementById('textarea');

function textareaColor(){
    var time = new Date();
    var hours = time.getHours().toString();

    if(hours.length < 2) {
        hours = '0' + hours;
    }
    
    var clockStr = hours + ':' + minutes + ':' + seconds;
    var planStr = '#' + hours + minutes + seconds;

    clock.textContent = clockStr;
    plan.textContent = planStr;

    document.id(moment()) = 
    
    )

    

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