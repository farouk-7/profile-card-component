const btn= document.querySelector('#submit-input')
const name= document.querySelector('#name-input')
const number= document.querySelector('#number-input')
const month= document.querySelector('#month-input')
const year= document.querySelector('#year-input')
const cvv= document.querySelector('#cvv-input')
const date= new Date().getFullYear()




name.addEventListener('keyup', ()=>{
    let nameValue= document.querySelector('#name-input').value;
    document.querySelector('#name').innerHTML=nameValue 
   
})
number.addEventListener('keyup', ()=>{
    let numberValue= document.querySelector('#number-input').value;
    document.querySelector('#card-num').innerHTML=numberValue 
})
month.addEventListener('keyup',()=>{
    let monthValue= document.querySelector('#month-input').value
    document.querySelector('.month').innerHTML=monthValue
})
year.addEventListener('keyup',()=>{
    let yearValue= document.querySelector('#year-input').value
    document.querySelector('.year').innerHTML=yearValue
})
cvv.addEventListener('keyup', ()=>{
    let cvvInput= document.querySelector('#cvv-input').value;
    document.querySelector('.cvv').innerHTML=cvvInput
})

btn.addEventListener('click',()=>{

    if(name.value.length<5 && name.value.length !=0){
        document.querySelector('#name-input').style.border='1px solid red'
        document.querySelector('.name-error').innerHTML='Name must be greater than 5'
        document.querySelector('.name-error').style.color='red'
    }
    else if(name.value===""){
        document.querySelector('#name-input').style.border='1px solid red'
        document.querySelector('.name-error').innerHTML='Please insert Name'
        document.querySelector('.name-error').style.color='red'
    }
     else if(!name.value.match(/[A-Z]/gi)){
        document.querySelector('#name-input').style.border='1px solid red'
        document.querySelector('.name-error').innerHTML='Letters only are allowed'
        document.querySelector('.name-error').style.color='red' 
    }

    

   if(month.value>12 || month.value===""){
         document.querySelector('#month-input').style.border='1px solid red'
         document.querySelector('.monthyear-error').innerHTML='Invalid month/year input'
    }
    if(year.value<date){
         document.querySelector('#year-input').style.border='1px solid red'
         document.querySelector('.monthyear-error').innerHTML='Invalid month/year input'
    }
    if(cvv.value.length>3 || !cvv.value){
        document.querySelector('#cvv-input').style.border='1px solid red'
    }
    else if(!cvv.value.match(/[0-9]/)){
        document.querySelector('#cvv-input').style.border='1px solid red'
    }




    if(number.value.length<10 && number.value.length!=0){
        document.querySelector('#number-input').style.border='1px solid red'
        document.querySelector('.number-error').innerHTML='Number must be greater than 10'
        document.querySelector('.number-error').style.color='red'
    }
    else if(number.value==""){
        document.querySelector('#number-input').style.border='1px solid red'
        document.querySelector('.number-error').innerHTML='Please insert Number'
        document.querySelector('.number-error').style.color='red'

    }
    else if(!number.value.match(/[0-9]/)){
        document.querySelector('#number-input').style.border='1px solid red'
        document.querySelector('.number-error').innerHTML='Numbers only'
        document.querySelector('.number-error').style.color='red'
    }
})
