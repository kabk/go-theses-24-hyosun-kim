let section_number;
const pages = Array.from(document.getElementsByClassName('pages'));
const icon_o = document.querySelector('.icon_o');

for (let i = 0; i < pages.length; i++) {
    page_number = 'page' + [i];
    pages[i].setAttribute('id', page_number);
    pages[i].innerHTML += `<h5 class="page_count"><-- ${i+1} --></h5><a href="#page${i+1}" class="page_icon next_btn"><img class="page_icon icon_o" src="../img/icons_o.png"></a>`;
}

pages.forEach(page => {
    page.style.backgroundColor = "red";
})


function closeWindow(){
    this.close();
}
