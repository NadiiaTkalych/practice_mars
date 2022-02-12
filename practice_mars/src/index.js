const input = document.getElementById('input'),
    button = document.getElementById('button'),
    img = document.getElementById('img');

const regex = /\W/;

button.addEventListener('click', () => {
    if (regex.test(input.value)) {
        input.value = '';
        input.classList.remove('invalid');
        error.innerHTML = '';
        accept.innerHTML = 'почти улетел!';
        img.src = "https://biz.liga.net/images/general/2018/09/23/thumbnail-tw-20180923222556-2470.jpg?v=1537737540"
    } else {
        input.value = 'введи ФИО';
        input.classList.add('invalid');
        error.innerHTML = 'ERROR! так ты не полетишь';
        accept.innerHTML = '';

    }
})
