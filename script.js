// Grab the clock
const clock = document.getElementById('clock');

// Set Clock to current date and time using momentJS and have it count by 1 second intervals
setInterval(() => {
    const now = moment();
    const humanReadable = now.format('dddd, MMMM D, YYYY, hh:mm:ssa');
    clock.textContent = humanReadable;
}, 1000);

// Change color of text area depending on whether it's past, present, or future of current time.
console.log(moment().format("H"));

//Set variables for timeBlock and plan
var timeBlock = $(".time-block");
var plan = $("textarea");

//Pass arguments to change the color of the timeBlock based on the current time.
//If the current moment is less than the timeBlock ID, then make the color "past"
for (var i = 0; i < timeBlock.length; i++) {
    if (parseInt(timeBlock[i].id) < moment().format("H"))   {
    plan[i].classList.add("past");
    }
//If the current moment is equal to the timeBlock ID, then make the color "present"
else if (parseInt(timeBlock[i].id) == moment().format("H")) {
    plan[i].classList.add("present");
    }

//If the current moment is greater than the timeBlock ID, then make the color "future"
else if (parseInt(timeBlock[i].id) > moment ().format("H")) {
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
