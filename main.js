// show hide function of form
function shfunction() {
    var form = document.getElementById("card-form");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}


function showerr(){

}


var contents = []


const f  = document.getElementById('card-form');


f.addEventListener('submit', (event) => {
    event.preventDefault();
    var title = f.elements['title'].value;
    var content = f.elements['content'].value;
    var temp = [{
        title : title,
        content : content.replace(/\n\r?/g, '<br />')
    }];
    temp.push(...contents);
    contents = temp;
    console.log(contents);
    showcards(contents);
    shfunction();
});


function showcards(c){
    var final = ``;
    c.forEach(function(s){
        var div = createCard(s);
        final = final + div;
    })
    var cont = document.getElementById("contents");
    cont.innerHTML = final;
}


function createCard(c){
    var temp = `
    <div class="card">
        <div class="title">${c.title}</div>
        <div class="cont">${c.content}</div>
    </div>`;
    return temp;
}