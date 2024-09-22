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




document.getElementById('donateBtn1').addEventListener('click', function(){
    const inputValue= getInputValueById('input1');
    const outPutValue = parseFloat(setOutputValueById('outPutValue').innerText = inputValue);
    const availableTarget  = needBalaced - outPutValue;
    document.getElementById('target').innerText = availableTarget;
    if(isNaN(inputValue) || inputValue <= 0){
        alert('Write a valid Number');
        return ;
     }
   
   
    // validationForInput('input1');

})