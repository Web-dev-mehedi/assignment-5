 
// get Value from input function
function getInputValueById(id){
    return Number(document.getElementById(id).value)
}

// get value from card function
function setOutputValueById(id){
    return Number(document.getElementById(id).innerText);
}

//inner text caller
function callInnerTextById(id){
    return document.getElementById(id).innerText;
}

//function for css class add in toggle tab
function tabToggleToCssAdd(id){
    document.getElementById(id).classList.add('hidden');
}

//function for css class remove in toggle tab
function tabToggleToCssRemove(id){
    document.getElementById(id).classList.remove('hidden');
}

//function for tab toggle style switching
function tabToggleBtnStyleSwitch1(id){
    document.getElementById(id).classList.add('bg-[#b4f461]');
    document.getElementById(id).classList.remove('text-[#111111B3]','border' ,'border-[#F1F1F1]');
}

//function for tab toggle style switching
function tabToggleBtnStyleSwitch2(id){
    document.getElementById(id).classList.remove('bg-[#b4f461]');
    document.getElementById(id).classList.add('text-[#111111B3]','border' ,'border-[#F1F1F1]');
}

// function for clear input on closing the modal
function clearInOnClosingModel(id){
   document.getElementById(id).value ="";
}

