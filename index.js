let make_note = document.getElementById("makenote");
let div = document.getElementById('todos');
let title = document.createElement('input')
let message = document.createElement('textarea');
let btn = document.createElement("button");
let ids = document.getElementById('ids');
make_note.addEventListener('click',()=>{
    btn.id = 'btn';
    btn.innerHTML = "Submit";
    btn.classList.add("btn");
    btn.classList.add("btn-warning")
    title.id = "title"
    title.placeholder = "Enter the title";
    title.classList.add(["form-control"]);
    message.classList.add("form-control");
    message.placeholder = "Enter your data"
    message.id = "floatingTextarea";
    div.append(title);
    div.append(message);
    div.append(btn)
});

btn.addEventListener('click',()=>{
    let enderman = document.createElement("div");
    enderman.classList.add("alert");
    enderman.classList.add("alert-dark");
    ids.append(enderman);
    localStorage.setItem(title.value,message.value);
    let heading = document.createElement("h1");
    let para = document.createElement("p");
    heading.innerHTML = title.value;
    para.innerHTML = message.value;
    enderman.append(heading);
    enderman.append(para);
});