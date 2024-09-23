
//tab toggle btn call for donation tab
document.getElementById('donation').addEventListener('click', function(){
    tabToggleToCssRemove('mainPage');
    tabToggleToCssAdd('historysec');
    tabToggleBtnStyleSwitch1('donation');
    tabToggleBtnStyleSwitch2('history')
 })
 
//tab toggle btn call for history tab
 document.getElementById('history').addEventListener('click', function(){
    tabToggleToCssRemove('historysec');
    tabToggleToCssAdd('mainPage');
    tabToggleBtnStyleSwitch1('history');
    tabToggleBtnStyleSwitch2('donation')
   
 })




// input1 and  validation
document.getElementById('donateBtn1').addEventListener('click', function(){
    // inputFunctionCall
    const inputValue= getInputValueById('input1');
    //validater  
    if(isNaN(inputValue) || inputValue <= 0 || inputValue > targetValue){
    alert('Write a valid Number');
    return ;
    }
    else{
    const outPutValue = parseFloat(setOutputValueById('outPutValue').innerText = inputValue);
    const availableTarget  = needBalaced - outPutValue;
    document.getElementById('target').innerText = availableTarget;
    //modal open
    tabToggleToCssRemove('my_modal')
    }
   
   //for history
    const historyDiv = document.getElementById('historysec')
    const div= document.createElement('div');
    div.classList.add('bg-white','border', 'border-[#1111111A]' ,'p-8','rounded-xl','mb-8')
    const timeDate= new Date()
    div.innerHTML = `
    <p class="text-xl font-bold text-[#111111]  capitalize mb-4"> ${inputValue}  Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <span class="text-base font-light text-[#111111B3] capitalize"> ${timeDate}</span> 
    `
    historyDiv.appendChild(div);

    // history page to hidden
    tabToggleToCssAdd('hiddenp');

   

})


// input2 and  validation
document.getElementById('donateBtn2').addEventListener('click', function(){
    // inputFunctionCall
    const inputValue1= getInputValueById('input2');
    //validater  
    if(isNaN(inputValue1) || inputValue1 <= 0 || inputValue1 > targetValue){
    alert('Write a valid Number');

    }

    else{
    const outPutValue1 = parseFloat(setOutputValueById('outPutValue1').innerText = inputValue1);
    const availableTarget  = needBalaced - outPutValue1;
    document.getElementById('target').innerText = availableTarget;
    //modal open
    tabToggleToCssRemove('my_modal')
    }
   
   //for history
    const historyDiv = document.getElementById('historysec')
    const div= document.createElement('div');
    div.classList.add('bg-white','border', 'border-[#1111111A]' ,'p-8','rounded-xl','mb-8')
    const timeDate= new Date()
    div.innerHTML = `
    <p class="text-xl font-bold text-[#111111]  capitalize mb-4"> ${inputValue1}  Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <span class="text-base font-light text-[#111111B3] capitalize"> ${timeDate}</span> 
    `
    historyDiv.appendChild(div);

    // history page to hidden
    tabToggleToCssAdd('hiddenp');


})


    // modal closed
    document.getElementById('toClosed').addEventListener('click', function(event){
    event.preventDefault()
    tabToggleToCssAdd('my_modal');
    })




    // window chinging function
    function windowChangeBlog(){
    window.location.href = "./blog.html";
    }
    function windowChangeToHome(){
    window.location.href = "./home.html";
    }

// history function




