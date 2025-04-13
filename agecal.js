birthdayElement=document.getElementById('birthday');
resultElement=document.getElementById('result');
showElement=document.getElementById('show');



function showData(){
    const birthdayValue=birthdayElement.value;
    const ageshow=getAge(birthdayValue);
    showElement.innerText=`Age is ${ageshow}`;
}

function getAge(birthdayValue){
    let currentDate=new Date();
    let birthdayDate=new Date(birthdayValue);
    let age=currentDate.getFullYear()-birthdayDate.getFullYear();
    let month=currentDate.getMonth()-birthdayDate.getMonth();
    if((month<0)||(month===0 && currentDate.getDate()<birthdayDate.getDate())){
        age--;
    }
    return age;
}
resultElement.addEventListener('click',showData);