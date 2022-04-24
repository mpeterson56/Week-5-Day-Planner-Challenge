//sets current date and time onto page 
$('#currentDay').text(moment().format('dddd') +","+(moment().format('MMMM Do YYYY, hh:mm:ss a')));
//runns upon opening page
$(document).ready(function(){

    

// creates varriable to target the save button
var saveBtn= $('.saveBtn');
//creates varriable to track current time by the hour
var currentTime=moment().hours();


//save button to save input tasks to be completed and sets items in the dom
saveBtn.on('click', function (){
var inputValue=$(this).siblings('.ToDo').val()
var id=$(this).parent().attr('id')
localStorage.setItem(id,inputValue)
});


//function to target div class time within div class time-block
function updateHour () {
$('.time-block').each(function(){
var timeBlock= $(this).attr('Time')


//if timeblock time is less then current time its in the past and will be red
if (currentTime > timeBlock) {
    $(this).addClass('past')
}

//else if the timeblock is more then current time its in the future and will be green
else if(currentTime < timeBlock) {
    $(this).addClass('future')
}

//else the time is present sice neither two prior conditions were met
else{
    $(this).addClass('present')
}
})
}

//will load info onto the page by selecting its key and checking if there is data stored then will load onto page if data is stored
function loadinfo () {
    var localKey =['9','10','11','12','1','2','3','4','5'];
    for (i = 0; i < localKey.length; i++) {
        if (localStorage.getItem(localKey[i])) { 
            $(('#' + localKey[i])).children().next().val(localStorage.getItem(localKey[i]));
        }
    }
}

//functions calling loadinfo and updatehour
loadinfo ();
updateHour();
})

