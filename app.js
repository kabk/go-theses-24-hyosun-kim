const st11s = Array.from(document.getElementsByClassName('st11'));
const circles = Array.from(document.getElementsByTagName('circle'));
const texts = Array.from(document.getElementsByTagName('text'));
const paths = Array.from(document.getElementsByTagName('path'));



st11s.forEach(st11 => {
    st11.addEventListener('mouseover', function(e){
        e.target.classList.remove('st11');
        e.target.classList.add('st18');
        e.target.classList.remove('st12');
        e.target.classList.add('st19');
    });

    st11.addEventListener('mouseout', function(e){
        e.target.classList.remove('st18');
        e.target.classList.add('st11');
        e.target.classList.remove('st19');
        e.target.classList.add('st12');
    })
})

texts.forEach(text => {
    text.addEventListener('click', function(e){
        if(text.parentElement.classList.contains('hover_event')){
            const circle_btn = e.target.parentElement.nextSibling.nextSibling.children[0];
            circle_btn.classList.add('st18');
            const path_btn = e.target.parentElement.nextSibling.nextSibling.children[1];
            path_btn.classList.add('st18');
        }
    })
})

paths.forEach(path => {
    path.addEventListener('click', function(e){
        if(path.parentElement.parentElement.classList.contains('hover_event')){
            e.target.classList.remove('st11');
            e.target.classList.add('st18');
            const circle_btn = e.target.parentElement.children[0];
            circle_btn.classList.add('st18');
        }
    })
})

circles.forEach(circle => {
    if(circle.parentElement.parentElement.classList.contains('hover_event')){
        circle.addEventListener('click', function(e){
            e.target.classList.add('st18');
            const path_btn = e.target.parentElement.children[1];
            path_btn.classList.add('st18');
        })
    }
})

//////////////SUB PAGE//////////////
const sections = Array.from(document.getElementsByTagName('section'));

function closeWindow(){
    this.close();
}

function showPopup(url) {
    newwindow=window.open(url,'name','height=730,width=450,top=190,left=300');
    if (window.focus){newwindow.focus()}
}

for (let i = 0; i < sections.length; i++) {
    sections[i].innerHTML += `<h5><-- ${i+1} --></h5>`;
}