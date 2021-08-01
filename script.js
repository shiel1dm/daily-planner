//Variables
var today = moment().format('dddd, MMMM Do YYYY');
var hour= parseInt(moment().format('H'));

//Functions
/** When html is loaded it runs the function. I chose this method
 * because after seeing another example, this method used less,
 * more efficient coding.
 */
$(document).ready(function () {
    //when saveBtn is clicked store these var and set to localStorage
    $('.saveBtn').on('click',function(){
        var info = $(this).siblings('.event').val();
        var time = $(this).parent().attr('id');
    
        localStorage.setItem(time, info);
    });

    function clock(){
        var currentTime= moment().hour();
        //iterates over each event block and checks their time against the current time and changes class accordingly.
        $('.event-block').each(function (){
            var eventTime = parseInt($(this).attr('id').split('hour')[0]);

            if(eventTime < currentTime){
                $('.event').removeClass('future');
                $('.event').removeClass('present');
                $('.event').addClass('past');
            }
            else if (eventTime === currentTime){
                $('.event').removeClass('future');
                $('.event').addClass('present');
                $('.event').removeClass('past');
            }
            else{
                $('.event').addClass('future');
                $('.event').removeClass('present');
                $('.event').removeClass('past');
            }
        })

    }
    /** Checks localStorage for any saved values
     * and appropriately sets their value if something
     * is saved.
     */
    $('#8AM .event').val(localStorage.getItem('8AM'));
    $('#9AM .event').val(localStorage.getItem('9AM'));
    $('#10AM .event').val(localStorage.getItem('10AM'));
    $('#11AM .event').val(localStorage.getItem('11AM'));
    $('#12AM .event').val(localStorage.getItem('12AM'));
    $('#1AM .event').val(localStorage.getItem('1AM'));
    $('#2AM .event').val(localStorage.getItem('2AM'));
    $('#3AM .event').val(localStorage.getItem('3AM'));
    $('#4AM .event').val(localStorage.getItem('4AM'));
    $('#5AM .event').val(localStorage.getItem('5AM'));

clock();

})
