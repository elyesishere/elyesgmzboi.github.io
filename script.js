function videoswitch() {
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var checkboxElement = document.getElementsByClassName("toggle-checkbox")[0]; 
    if (!checkboxElement) {
        console.error("Checkbox element not found!");
        return;
    }
    
    if (checkboxElement.checked) {
        
        video1.classList.add('hidden');
        video2.classList.remove('hidden');
    } else {  
        video1.classList.remove('hidden');
        video2.classList.add('hidden');
    }
}