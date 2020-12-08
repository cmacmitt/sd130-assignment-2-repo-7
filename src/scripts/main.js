const attendanceContainerEle = document.querySelector('.attendance-container');
const addName = attendanceContainerEle.querySelector('button');
const nameList = attendanceContainerEle.querySelector('ul');

// === ADD SCRIPT FOR ADDING NAMES HERE === 
addName.addEventListener('click', function(e) {
    nameList.insertHTML('<li>Adebayo</li>', '<li>Janvijanvi</li>','<li>janvi</li>')
})