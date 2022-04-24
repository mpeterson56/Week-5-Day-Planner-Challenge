//sets current date and time onto page 
$('#currentDay').text(moment().format('dddd') +","+(moment().format('MMMM Do YYYY, hh:mm:ss a')));
$(document).ready(function(){

    var text = document.querySelectorAll(".ToDo"); 

// creates varriable to target the save button
var saveBtn= $('.saveBtn');



//save button to save input tasks to be completed and sets items in the dom
saveBtn.on('click', function (){
var inputValue=$(this).siblings('.ToDo').val()
var id=$(this).parent().attr('id')
localStorage.setItem(id,inputValue)
});

//changes color of past present and future to css styles
var updateHour = function() {
    var currentHour = moment().hour();
    
    for (var i = 0; i < text.length; i++) {
        if (text[i].id < currentHour) {
            text[i].classList.add("past");

        } else if (text[i].id > currentHour) {
            text[i].classList.add("future");
        } else {
            text[i].classList.add("present");
        } 
    }
};

//will load info onto the page by selecting its key and checking if there is data stored then will load onto page if data is stored
function loadinfo () {
    var localKey =['9','10','11','12','1','2','3','4','5'];
    for (i = 0; i < localKey.length; i++) {
        if (localStorage.getItem(localKey[i])) { 
            $(('#' + localKey[i])).children().next().val(localStorage.getItem(localKey[i]));
        }
    }
}

//functions calling loadinfo and
loadinfo ();
updateHour();
})

