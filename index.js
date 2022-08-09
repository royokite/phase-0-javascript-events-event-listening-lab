// Event listening lab!
function clickDO() {
    alert('FINYA TENA!!!')
}

function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickDO);
}

addingEventListener();

// function addingEventListener() {
//     const input = document.getElementById('button');
//     input.addEventListener('click', function() {
//         alert('FINYA TENA!!');
//     })
// }

// addingEventListener();
