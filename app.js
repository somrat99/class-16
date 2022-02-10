// get-elements

const button = document.getElementById('click');
const modal = document.querySelector('.modal-strcture');
const mclose = document.querySelector('.modal-header .close');
const aclose = document.querySelector('.alert-header .close');
const alert = document.querySelector('.custom-alert');
const edit = document.getElementById('edit');
const exit = document.getElementById('exit');

button.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('active');
})

mclose.addEventListener('click', function () {
    alert.style.display = 'flex';
})

aclose.addEventListener('click', function () {
    alert.style.display = 'none';
})

edit.addEventListener('click', function () {
    alert.style.display = 'none';
})

exit.addEventListener('click', function () {
    alert.style.display = 'none';
    modal.classList.remove('active');
})

modal.addEventListener('click', function (e) {

    if (e.target == this) {
        modal.classList.remove('active');
    }

})




// accordion

const accHeader = document.querySelectorAll('.accordion-header');
const accBody = document.querySelectorAll('.accordion-body');


accHeader.forEach(item => {
    item.addEventListener('click', function () {

        accHeader.forEach( item => {
            

            if( item != this){
                item.classList.remove('active');
                item.nextElementSibling.style.height='0px';
            }
        });
        
        item.classList.toggle('active');
        

        if(item.classList.contains('active')){
            item.nextElementSibling.style.height=item.nextElementSibling.scrollHeight + 'px';
        }else{
            item.nextElementSibling.style.height='0';
        }
        
    });
})