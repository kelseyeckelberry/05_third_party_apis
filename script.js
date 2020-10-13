//new Date();
var currentDay = moment().format("dddd, MMMM Do");
var blockTime = document.querySelector("#hour");
var currentHour = moment().hour(Number);

$("#currentDay").text(currentDay);


//currentHour using moment
//blockTime using id of each block
//Then compare currentHour to blockTime

//1. blockTime < currentHour: past
if (blockTime < currentHour) {
    $(".inputBlock").addClass("past")
}

//2. blockTime = currentHour: present
else if (blockTime === currentHour) {
    $(".inputBlock").addClass("present")
    $(".inputBlock").removeClass("past")
}

//3. blockTime > currentHour: future
else {
    $(".inputBlock").addClass("future")
    $(".inputBlock").removeClass("past")
    $(".inputBlock").removeClass("present")
};

//click save button
//create a var to store the input data
//local.setItem("whatevever keyname", var name)

//global scope
//local.getItem("keyname which you saved as")
$("#hour-9 .inputBlock").val(local.getItem("keyname which you saved as"))