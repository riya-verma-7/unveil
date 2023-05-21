 // instantiate a moment object
 var NowMoment = moment();

 var ovulationdayDate = document.querySelector('#ovulationDay')
 var nextPeriodDate = document.querySelector('#nextPeriod')
 var fertilityDay = document.querySelector('#fertileDay')

 var evaluate = document.querySelector('.myday3')


 evaluate.addEventListener('click', function myfunction(e) {
     e.preventDefault();
     let periodDate = document.querySelector(".myday2").value;
     let cycleLength = document.querySelector('.myday').value;

     periodDate = moment(periodDate).format('L');

     console.log(periodDate);

     console.log(cycleLength);


     //next period 

     var nextperiod = moment(periodDate).add(cycleLength, "days").format('L');
     console.log(nextperiod);

     var finalNextperiod = moment(nextperiod).add(1, 'days').format('L');
     console.log(finalNextperiod)

     //  var displayNextPeriod = moment(finalNextperiod).format('MMMM Do YYYY');

     var displayNextPeriod = moment(finalNextperiod).format('Do MMMM YYYY');


     //ovulation date 


     var ovulateday = moment(finalNextperiod).add(14, 'days').format('L');
     console.log(ovulateday)
         //  var ovulateDateDisplay = moment(ovulateday).format('MMMM Do YYYY');

     var ovulateDateDisplay = moment(ovulateday).format('Do MMMM YYYY');



     //fertile days 
     var fertileday1 = moment(finalNextperiod).add(13, 'days').format('L');
     //  var fertileday1Display = moment(fertileday1).format('MMMM Do YYYY');
     //  var fertileday1Display = moment(fertileday1).format('ll');

     var fertileday1Display = moment(fertileday1).format('Do MMM');
     console.log(fertileday1Display)

     var fertileday2 = moment(finalNextperiod).add(12, 'days').format('L');
     //  var fertileday2Display = moment(fertileday2).format('MMMM Do YYYY');
     //  var fertileday2Display = moment(fertileday2).format("ll");

     var fertileday2Display = moment(fertileday2).format('Do MMM');

     //  var ovulateDateDisplay2 = moment(ovulateday).format("ll");

     var ovulateDateDisplay2 = moment(ovulateday).format('Do MMM');

     //displaying the dates 


     ovulationdayDate.innerHTML = ovulateDateDisplay;
     nextPeriodDate.innerHTML = displayNextPeriod;
     fertilityDay.innerHTML = fertileday2Display + " , " + fertileday1Display + " and " +
         ovulateDateDisplay2



 })