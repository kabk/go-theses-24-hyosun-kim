const st11s = Array.from(document.getElementsByClassName("st11"));
const circles = Array.from(document.getElementsByTagName('circle'));


st11s.forEach(st11 => {
    // console.log(st12.parentElement.parentElement)
    st11.addEventListener('mouseover', function(e){
        e.target.classList.remove('st11');
        e.target.classList.add('st18');
        // e.target.classList.remove('st12');
        // e.target.classList.add('st19');
    });

    st11.addEventListener('mouseout', function(e){
        e.target.classList.remove('st18');
        e.target.classList.add('st11');
        // e.target.classList.remove('st19');
        // e.target.classList.add('st12');
    })
    st11.addEventListener('click', function(e){
        circles.forEach(circle => {
            if(circle.parentElement.parentElement.classList.contains('hover_event')){
                circle.classList.add('st18');
            }
        })
    })
})

circles.forEach(circle => {
    if(circle.parentElement.parentElement.classList.contains('hover_event')){
        circle.addEventListener('click', function(e){
            e.target.classList.add('st18');
        })
    }
})


function showPopup(url) {
    newwindow=window.open(url,'name','height=730,width=450,top=190,left=300');
    if (window.focus) {newwindow.focus()}
}