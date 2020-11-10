const list = ["build front end", "build back end", "profit!"];

let element = document.createElement('ul')

document.body.appendChild(element)

for (let i = 0; i < list.length; i++) {
    addListItem(list[i])
}

const newFrom = document.createElement('form')
document.body.appendChild(newFrom)

const input = document.createElement("input")
newFrom.appendChild(input)


let btn = document.createElement("BUTTON");
btn.innerHTML = "CLICK ME";                  
newFrom.appendChild(btn);
newFrom.addEventListener("submit", (e) => console.log(e.target))

function addListItem (item) {
    let li = document.createElement('li')
    li.innerHTML = item
    const heart = document.createElement("BUTTON");
    heart.setAttribute("class", "heartButton")
    heart.innerHTML = " ❤️";
    li.appendChild(heart)
    heart.addEventListener("click", likeItem);
    element.appendChild(li)
    const countLikes = 0
    const likes = document.getElementsByClassName("heartButton");
    //likes.addEventListener("click", (e) => console.log(e.target) {countLikes++})
}


function likeItem () {
    console.log("like")
    const likes = []
    const likeCounter = 0

}

