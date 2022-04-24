
$('#currentDay').text(moment().format('dddd') +","+(moment().format('MMMM Do YYYY, hh:mm:ss a')));
$(document).ready(function(){

    


var saveBtn= $('.saveBtn');
var currentTime=moment().hours();



saveBtn.on('click', function (){
var inputValue=$(this).siblings('.ToDo').val()
var id=$(this).parent().attr('id')
localStorage.setItem(id,inputValue)
});


$("9 .ToDo").val(localStorage.getItem("9 "));
    $("10 .ToDo").val(localStorage.getItem("10 "));
    $("11 .ToDo").val(localStorage.getItem("11 "));
    $("12 .ToDo").val(localStorage.getItem("12 "));
    $("1 .ToDo").val(localStorage.getItem("1 "));
    $("2 .ToDo").val(localStorage.getItem("2 "));
    $("3 .ToDo").val(localStorage.getItem("3 "));
    $("4 .ToDo").val(localStorage.getItem("4 "));
    $("5 .ToDo").val(localStorage.getItem("5 "));


  

function updateHour () {
$('.time-block').each(function(){
var timeBlock= $(this).attr('Time')



if (currentTime > timeBlock) {
    $(this).addClass('past')
}


else if(currentTime < timeBlock) {
    $(this).addClass('future')
}


else{
    $(this).addClass('present')
}
})
}




updateHour()
})

