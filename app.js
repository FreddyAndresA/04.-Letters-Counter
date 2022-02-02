const textArea = document.getElementById("textArea");
const count = document.getElementById("count");

textArea.addEventListener("keyup", function(){
    count.textContent = textArea.value.length;;
})