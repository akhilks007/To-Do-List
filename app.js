//getting refference to tags from index.html
const addf = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');


//adding new li tag to index.html
const addtodo = todo => {
    html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;
}


//submit event for new todo li tag
addf.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addf.add.value.trim();
    if(todo.length){
        addtodo(todo);
        addf.reset();
    }

});


//fuction tha removes todo form the list
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filtertodo = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

        

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
}


//keyup event for search
search.addEventListener('keyup', () => {    
    const term = search.value.trim().toLowerCase();
    filtertodo(term);
});