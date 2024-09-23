 
//donateAllButtonCall calling function
// function donateAllButtonCall(id){
//     //donate button call
//     document.getElementById(id).addEventListener('click', function(){

//         // input value
//         const inputValue= getInputValueById('input1');
//         const inputValue1= getInputValueById('input2');

//         // outPut value
//         const outPutValue = parseFloat(setOutputValueById('outPutValue').innerText = inputValue);
//         const outPutValue1 = parseFloat(setOutputValueById('outPutValue1').innerText = inputValue1);

//         // function calculateTarget (){}
//         const availableTarget  = needBalaced - outPutValue;
//         document.getElementById('target').innerText = availableTarget;

//         // function for input collection
// 

//            function validationChecker(input){
//             if(typeof input !== 'number' || isNaN(input)){
//                 alert('Write a valid Number');
//                 return false;
               
//              }

//              if (input < 0) {
//                 return false;
//             }
//              return true
             
//            }

//            validationChecker(inputValue);
//            validationChecker(inputValue1);


       
       
//        //for history
//         const historyDiv = document.getElementById('historysec')
//         const div= document.createElement('div');
//         div.classList.add('bg-white','border', 'border-[#1111111A]' ,'p-8','rounded-xl','mb-8')
//         const timeDate= new Date()
//         div.innerHTML = `
//         <p class="text-xl font-bold text-[#111111]  capitalize mb-4"> ${inputValue}  Taka is Donated for famine-2024 at Feni, Bangladesh</p>
//         <span class="text-base font-light text-[#111111B3] capitalize"> ${timeDate}</span> 
//         `
//         historyDiv.appendChild(div);
    
    
//         // history page to hidden
//         tabToggleToCssAdd('hiddenp');
    
//         //modal open
//         tabToggleToCssRemove('my_modal')
//     })
//     return;

// }

// //parameter call
// donateAllButtonCall('donateBtn1')
// donateAllButtonCall('donateBtn2')
// donateAllButtonCall('donateBtn3')




//total tageted value
let targetValue = 4000;
const needBalaced = document.getElementById('target').innerText = targetValue;

// get Input function
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value)
}

// setOutput fuction
function setOutputValueById(id){
    return document.getElementById(id) ;

}


 //function for validation
// function validationForInput(id){
//    return parseFloat(document.getElementById(id).value);
 
// }


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

// function for clear output input on closing modal
function clearInOnClosingModel(id){
   document.getElementById(id).value ="";

}
function clearOutOnClosingModel(id){
    document.getElementById(id).innerText ="0";
 
 }
