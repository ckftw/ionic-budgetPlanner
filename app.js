const reasonInput= document.querySelector('#input-reason');
const amountInput= document.querySelector('#input-amount');
const cancel = document.querySelector('#btn-cancel');
const confirmBtn= document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let total =0;

const clear = ()=>{
    reasonInput.value='';
    amountInput.value='';
}

confirmBtn.addEventListener('click', ()=>{

    const enteredReason= reasonInput.value;
    const enteredAmount= amountInput.value;
    if(enteredReason.trim().length<=0 || enteredAmount.length<=0 || enteredAmount.trim().length<=0){
        alertCtrl
        .create({
            message:'Please Enter Valid reason and amount',
            header:'Invalid inputs',
            buttons:['Okay']
        })
        .then(alertElement=>{
            alertElement.present();
        });
        return;

    }
    const newItem = document.createElement('ion-item');
    newItem.textContent= enteredReason + ' : $' +enteredAmount;
    expensesList.appendChild(newItem);

    total+= +enteredAmount;
    totalExpenses.textContent= total;
    clear();
});

cancel.addEventListener('click', clear);