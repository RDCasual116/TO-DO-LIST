function Rd(){
console.log("ok1");
var a=document.getElementById("entry").value;
document.getElementById("entry").value="";
var b=document.createElement("li");
b.innerHTML=a;
b.onclick=Remove;
document.getElementById("container").appendChild(b);
save();
}
function Remove(){
console.log("ok2");
document.getElementById("container").removeChild(this);
save();
}
function save(){
console.log("ok3");
localStorage.setItem('name',document.getElementById("container").innerHTML);
}
function load(){
console.log("ok4");
document.getElementById("container").innerHTML=localStorage.getItem('name');
for(let i=0;i<container.children.length;i++){
container.children[i].onclick=Remove;
}

}
function Clear(){
console.log("ok clear");
localStorage.clear();
document.getElementById("container").innerHTML="";
}
