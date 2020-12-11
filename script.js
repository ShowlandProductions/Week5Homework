$(document).ready(function() {
  

  // Time is being shown at the top of the page via Moment. The script has been linked to the bottom of the html page
    const test = false;
    const now = moment().format('MMMM Do YYYY');
    var $dateHeading = $('#navbar-subtitle');
    $dateHeading.text(now);
    
    // Get stored todos from localStorage
    // trying to use parse to 
    var saveBtn = JSON.parse(localStorage.getItem("saved"));
  
    if (test) { console.log(storedPlans); }
  
    // Tried to crete a if statement to generate the proper results depending on the time and task but I haven't fully figured it out 
    if (saveBtn !== null) {
      planTextArr = saveBtn;
    } else {
      planTextArr = new Array(9);
    }
  
    if (test) { console.log("text",planTextArr); }
  
    // set variable referencing planner element
    var $Div = $('.Container');
    // clear existing elements
    $Div.empty();
  
    if (test) { console.log("current time",nowHour12); }
  
  
    // build calendar by row for fix set of hours
    for (var hour = 9; hour <= 17; hour++) {
      // index for array use offset from hour
      var index = hour - 9;
      
      // STOP building save portion of row
  
      // set row color based on time
      updateRowColor($rowDiv, hour);
      
      // add row to planner container
      $Div.append($rowDiv);
    };
  
    // function to update row color. 
    function updateRowColor ($rowDiv,hour) { 
  
      if (test) { console.log("rowColor ",nowHour24, hour); }
  
      if ( hour < nowHour24) {
        // information for the hour 
        if (test) { console.log("present"); }
        $hour.css("background-color","lightgrey")
      } else if ( hour > nowHour24) {
        if (test) { console.log("future"); }
        $hour.css("background-color","lightgreen")
      } else {
        if (test) { console.log("past"); }
        $hour.css("background-color","red")
      }
    };
  
    // Created saves to local storage Couldn't fully get this to work but I believe most of my code is correct
    $(document).on('click','i', function(event) {
      event.preventDefault();  
  
      if (test) { console.log('click'+ planTextArr); }
  
      let $index = $(this).attr('save-id');
  
      var inputId = '#input-'+$index;
      var $value = $(inputId).val();
  
      planTextArr[$index] = $value;
  
  
      if (test) { console.log('value ', $value); }
      if (test) { console.log('index ', $index); }
      if (test) { console.log('after '+ planTextArr); }
    });  
    
 
    $(document).on('change','input', function(event) {
      event.preventDefault();  
      if (test) { console.log('onChange'); }
      if (test) { console.log('id', $(this).attr('hour-index')); }
  
      // neeed to check for save button
  
      let i = $(this).attr('hour-index');
  
    });
  });