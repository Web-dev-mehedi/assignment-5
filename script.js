//total tageted value
let targetValue = 4000;
const needBalaced = document.getElementById('target').innerText = targetValue

// function for input collection
function getInputValueById(id){
       return parseFloat(document.getElementById(id).value)
}

//function for validation
function validationForInput(id){
   const inputValue = parseFloat(document.getElementById(id).value);
 
}


// setOutput fuction
function setOutputValueById(id){
    return document.getElementById(id) ;

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

//tab toggle btn for donation tab
document.getElementById('donation').addEventListener('click', function(){
    tabToggleToCssRemove('mainPage');
    tabToggleToCssAdd('historysec');
    tabToggleBtnStyleSwitch1('donation');
    tabToggleBtnStyleSwitch2('history')
 })
 
//tab toggle btn for history tab
 document.getElementById('history').addEventListener('click', function(){
    tabToggleToCssRemove('historysec');
    tabToggleToCssAdd('mainPage');
    tabToggleBtnStyleSwitch1('history');
    tabToggleBtnStyleSwitch2('donation')
   
 })

 // input and  validation
document.getElementById('donateBtn1').addEventListener('click', function(){
    const inputValue= getInputValueById('input1');
    const outPutValue = parseFloat(setOutputValueById('outPutValue').innerText = inputValue);
    const availableTarget  = needBalaced - outPutValue;
    document.getElementById('target').innerText = availableTarget;
    if(isNaN(inputValue) || inputValue <= 0){
        alert('Write a valid Number');
        return ;
     }
   
   //
    const historyDiv = document.getElementById('historysec')
    const div= document.createElement('div');
    div.classList.add('bg-white','border', 'border-[#1111111A]' ,'p-8','rounded-xl','mb-8')
    const timeDate= new Date()
    div.innerHTML = `
    <p class="text-xl font-bold text-[#111111]  capitalize mb-4"> ${inputValue}  Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <span class="text-base font-light text-[#111111B3] capitalize"> ${timeDate}</span> 
    `
    historyDiv.appendChild(div);

    tabToggleToCssAdd('hiddnp')
    






})

// window chinging function
function windowChangeBlog(){
    window.location.href = "./blog.html";
}
function windowChangeToHome(){
    window.location.href = "./home.html";
}

// history function




