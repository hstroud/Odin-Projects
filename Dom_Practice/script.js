const container = document.querySelector('#container');
const content = document.createElement('div');
const redP = document.createElement('p')
const blueH = document.createElement('h3');
const div = document.createElement('div');

redP.classList.add('redP');
redP.textContent = "Hey I'm red!"
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
blueH.textContent = "I'm a blue h3!";

redP.style.color = "red";
blueH.style.color = "blue";
div.style.borderColor = "black";
div.style.backgroundColor = "pink";
div.style.borderStyle = "solid";

const h1 = document.createElement("h1");
const p2 = document.createElement("p");

h1.textContent = "I'm in a div!";
p2.textContent = "Me too!";

div.appendChild(h1);
div.appendChild(p2);



container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH);
container.appendChild(div);