//total targeted value from navbar 
let targetValue = document.getElementById('target').innerText;

//total value from cards
let cardTotalValue1 = setOutputValueById('outPutValue');
let cardTotalValue2 = setOutputValueById('outPutValue1')
let cardTotalValue3 = setOutputValueById('outPutValue2');

//history title from card title
const title1= callInnerTextById('title1');
const title2= callInnerTextById('title2');
const title3= callInnerTextById('title3');


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



// input1 button 
document.getElementById('donateBtn1').addEventListener('click', function(){
    // inputFunctionCall
    const inputValue= getInputValueById('input1');
    //validater  
    if(isNaN(inputValue) || inputValue <= 0 ){
        alert('Write a valid Amount');
        return 
    }
    
    if(inputValue > targetValue){
        alert('If You Want To Donate More Than 50000 BDT Than Contact Us To : 019xxxxxxxX');
        return 
        }

    else{
        // showing and uPdate total value from card
        document.getElementById('outPutValue').innerText = cardTotalValue1 += inputValue;
        //showing and update total targeted value in navbar
        document.getElementById('target').innerText =  targetValue -= inputValue;
        //modal open
        tabToggleToCssRemove('my_modal');
        // for history
        const historyDiv = document.getElementById('historysec');
        const div= document.createElement('div');
        div.classList.add('bg-white','border', 'border-[#1111111A]' ,'p-8','rounded-xl','mb-8');
        const timeDate= new Date();
        div.innerHTML = `
        <p class="text-xl font-bold text-[#111111]  capitalize mb-4"> ${inputValue}  Taka is ${title1} </p>
        <span class="leading-10 bg-slate-100 px-3 py-2 rounded-md text-base font-light text-[#111111B3] capitalize"> ${timeDate}</span> 
        `
        historyDiv.appendChild(div);
        // history page to hidden
        tabToggleToCssAdd('hiddenp');
        historyInfo('historysec');

        }

})


// input2 button
document.getElementById('donateBtn2').addEventListener('click', function(){
    // inputFunctionCall
    const inputValue1= getInputValueById('input2');
    //validater  
    if(isNaN(inputValue1) || inputValue1 <= 0 ){
        alert('Write a valid Amount');
        return
        }
    
    if(inputValue1 > targetValue){
        alert('If You Want To Donate More Than 50000 BDT Than Contact Us To : 019xxxxxxxX');
        return 
        }

    else{
        // showing and uPdate total value from card
        document.getElementById('outPutValue1').innerText = cardTotalValue2 += inputValue1;
        //showing and update total targeted value in navbar
        document.getElementById('target').innerText =  targetValue -= inputValue1;
        //modal open
        tabToggleToCssRemove('my_modal');
        //for history
        const historyDiv = document.getElementById('historysec')
        const div= document.createElement('div');
        div.classList.add('bg-white','border', 'border-[#1111111A]' ,'p-8','rounded-xl','mb-8');
        const timeDate= new Date();
        div.innerHTML = `
        <p class="text-xl font-bold text-[#111111]  capitalize mb-4"> ${inputValue1}  Taka is ${title2}</p>
        <span class="leading-10 bg-slate-100 px-3 py-2 rounded-md text-base font-light text-[#111111B3] capitalize"> ${timeDate}</span> 
        `
        historyDiv.appendChild(div);
        // history page to hidden
        tabToggleToCssAdd('hiddenp');
        historyInfo('historysec');

        }
        
})


// input3 button
document.getElementById('donateBtn3').addEventListener('click', function(){
    // inputFunctionCall
    const inputValue2= getInputValueById('input3');
    //validater  
    if(isNaN(inputValue2) || inputValue2 <= 0){
        alert('Write a valid Amount');
        return
        }
    if(inputValue2 > targetValue){
        alert('If You Want To Donate More Than 50000 BDT Than Contact Us To : 019xxxxxxxX');
        return 
        }

    else{
        // showing and uPdate total value from card
        document.getElementById('outPutValue2').innerText = cardTotalValue3 += inputValue2;
        //showing and update total targeted value in navbar
        document.getElementById('target').innerText =  targetValue -= inputValue2;
        //modal open
        tabToggleToCssRemove('my_modal');
        //for history
        const historyDiv = document.getElementById('historysec');
        const div= document.createElement('div');
        div.classList.add('bg-white','border', 'border-[#1111111A]' ,'p-8','rounded-xl','mb-8')
        const timeDate= new Date()
        div.innerHTML = `
        <p class="text-xl font-bold text-[#111111]  capitalize mb-4"> ${inputValue2}  Taka is ${title3}</p>
        <span class="leading-10 bg-slate-100 px-3 py-2 rounded-md text-base font-light text-[#111111B3] capitalize"> ${timeDate}</span> 
        `
        historyDiv.appendChild(div);
        // history page to hidden
        tabToggleToCssAdd('hiddenp');
        historyInfo('historysec');

        }

})



    // modal closed
    document.getElementById('toClosed').addEventListener('click', function(event){
    event.preventDefault()
    tabToggleToCssAdd('my_modal');
    clearInOnClosingModel('input1');
    clearInOnClosingModel('input2');
    clearInOnClosingModel('input3');
    })

    // window chinging function
    function windowChangeBlog(){
    window.location.href = "./blog.html";
    }
    function windowChangeToHome(){
    window.location.href = "./home.html";
    }



