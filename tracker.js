var ovulationdayDate = document.querySelector('#ovulationDay')
var nextPeriodDate = document.querySelector('#nextPeriod')
var fertilityDay = document.querySelector('#fertileDay')

var evaluate = document.querySelector('.myday3')

// function myFunc() {

evaluate.addEventListener('click', function myfunc(e) {
    e.preventDefault();
    let periodDate = document.querySelector(".myday").value;
    let cycleLength = document.querySelector('.myday2').value;

    let daysInMonth = 31;
    let dayleft = daysInMonth - periodDate;
    let nextPeriod = dayleft + Number(cycleLength) + 1;
    let ovulateday = cycleLength - 14;
    let fertilityWindow = (Number(ovulateday) - 2) + "," + (Number(ovulateday) - 1) + "," + Number(ovulateday);


    ovulationdayDate.innerHTML = ovulateday + " " + "November";
    nextPeriodDate.innerHTML = nextPeriod + " " + "November";
    fertilityDay.innerHTML = fertilityWindow + " " + " November";



})