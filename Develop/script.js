$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm a"));

$(".saveBtn").on("click", function (event){
    localStorage.setItem("9AM", $("text-area-9").val().trim());
    localStorage.setItem("10AM", $("text-area-10").val().trim());
    localStorage.setItem("11AM", $("text-area-11").val().trim());
    localStorage.setItem("12AM", $("text-area-12").val().trim());
    localStorage.setItem("1PM", $("text-area-13").val().trim());
    localStorage.setItem("2PM", $("text-area-14").val().trim());
    localStorage.setItem("3PM", $("text-area-15").val().trim());
    localStorage.setItem("4PM", $("text-area-16").val().trim());
    localStorage.setItem("5PM", $("text-area-17").val().trim());
})