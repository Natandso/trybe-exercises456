const header = document.getElementById('header-container')
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencytasks = document.getElementsByClassName('emergency-tasks')[0]
emergencytasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    emergencyTasksHeaders[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

const fundoNoEmergency = document.getElementsByClassName("no-emergency-tasks")[0]
fundoNoEmergency.style.backgroundColor = 'yellow'


const noEmergency = document.querySelectorAll('.no-emergency-tasks h3')
for (let index = 0; index < noEmergency.length; index += 1) {
    noEmergency[index].style.backgroundColor = 'black'

}


