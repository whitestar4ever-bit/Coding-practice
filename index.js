const { src } = require("vinyl-fs")

function hidesidebar(){
const sidebar = document.querySelector('.sidebar')
sidebar.style.display = 'none'
}
function showsidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

console.dir(document);
console.group(localStorage);