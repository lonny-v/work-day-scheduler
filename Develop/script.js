var button = $("button");

// Display current date and time at top of screen
$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm a"));

// load items from local storage
function loadItems () {
    $("#text-area-9").val(localStorage.getItem("9AM"));
    $("#text-area-10").val(localStorage.getItem("10AM"));
    $("#text-area-11").val(localStorage.getItem("11AM"));
    $("#text-area-12").val(localStorage.getItem("12PM"));
    $("#text-area-13").val(localStorage.getItem("1PM"));
    $("#text-area-14").val(localStorage.getItem("2PM"));
    $("#text-area-15").val(localStorage.getItem("3PM"));
    $("#text-area-16").val(localStorage.getItem("4PM"));
    $("#text-area-17").val(localStorage.getItem("5PM"));
};

// Save all input on the screen whenever any save button is clicked
button.on("click", setItems)

function setItems () {
    localStorage.setItem("9AM", $("#text-area-9").val());
    localStorage.setItem("10AM", $("#text-area-10").val());
    localStorage.setItem("11AM", $("#text-area-11").val());
    localStorage.setItem("12PM", $("#text-area-12").val());
    localStorage.setItem("1PM", $("#text-area-13").val());
    localStorage.setItem("2PM", $("#text-area-14").val());
    localStorage.setItem("3PM", $("#text-area-15").val());
    localStorage.setItem("4PM", $("#text-area-16").val());
    localStorage.setItem("5PM", $("#text-area-17").val());
}

// update local storage when content is changed
$(".time-slot").on("blur", "textarea", function () {
setItems()
})

// change time slot color based on time of day
function setColor () {
    let currentTime = parseInt(moment().format("HH"));
    $(".time-slot").each(function (){
        // check against id for each time slot
        var timeSlot = $(this).attr("id");
        // id for each time slot is equivalent in military time

        if (timeSlot < currentTime) {
            $(this).addClass("past");
        }
        else if ( timeSlot == currentTime){
        $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    });
}

// check time every 15 mins to reapply colors
setInterval(setColor(), 900000);

loadItems();
setColor();