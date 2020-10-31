// Grab the clock
const clock = document.getElementById('clock');

// Set Clock to current date and time using momentJS and have it count by 1 second intervals
setInterval(() => {
    const now = moment();
    const humanReadable = now.format('dddd, MMMM D, YYYY, hh:mm:ssa');
    clock.textContent = humanReadable;
}, 1000);

//Set variables for timeBlock and plan
var timeBlock = $(".time-block");
var plan = $("textarea");

//**************************************************************************************************************************************************************/
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

//*************************************************************************************************************************************************************/
//Save tasks in local storage when save button in clicked

// Create a variable for the time slot array
var timeSlotArray = $(".time-block");
timeSlotArray.each(function(timeSlotIndex)  {
    
    // Get the current time
    var currentTime = moment().hours();
    
    // Get the block time
    var timeSlotTime = parseInt($(timeSlotArray[timeSlotIndex]).attr("data"));
})

//Get local stored data and populate the textarea
// var timeSlotArray = $(".time-slot");
for (let i = 9; i < timeSlotArray.length + 9; i++) {
    //check if null
    var storedData = localStorage.getItem(`hour-${i}`);
    console.log("*******", storedData);
    if (storedData) {
        //add the text to the right spot
        $(`[data=${i}]`).find("textarea").val( storedData);
    }
}

//add event listender to save button
$(".save-button").on("click",saveNotes);

//save data
function saveNotes(event) {
    //get the data
    var timeText = $(event.target).siblings("textarea").val();
    //get the id too
    var id = $(event.target).closest(".time-slot").attr("data");
    //store data
    localStorage.setItem(`data${id}`,timeText);
};

//GET LOCAL STORAGE DATA and populatre the textarea
// var timeSlotArray = $("time-slot");

// for (let i = 9; i < timeSlotArray.length; +9, i++) {

//     // Check if null
//     var storedData = localStorage.getItem('data${i}');
//     if (storedData) {
    
//     // Add the text to the right spot    
//     $('[data=${i}]').find("textarea").val(
//         localStorage.getItem('data${i}'));
//     }    
// }

// // Add eventListener to save button
$(".save-button").on("click, saveNotes");

// // Save data
// function saveNotes(event) {
//     console.log("*******this", this);
//     // Get the data
//     var timeText = $(event.target).siblings("textarea").val();
    
//     // Get the ID 
//     var id = $(event.target).closest("time-slot").attr("data");
    
//     // Store data
//     localStorage.setItem(`data${id}`,timeText);
// }