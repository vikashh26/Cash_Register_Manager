// VAR
const bill = document.getElementById('bill-amount')
const cash = document.getElementById('cash-amount')
const btn = document.querySelector('.btn')
const table = document.querySelector('.tr-first')

const note_Array = [2000,500,100,20,10,5,1]

btn.addEventListener("click",function(){
    let billValue = parseInt(cash.value) - parseInt(bill.value)
    if(billValue >= 0){
        bill.value = ""
        cash.value = ""
        table.innerHTML = ""
        table.innerHTML = '<td class="td-head">No. of notes</td>'
        note_Array.forEach(element => {
            let data_to_push = Math.floor(billValue/element)
            table.innerHTML += `<td>${data_to_push}</td>`
            billValue = (billValue - (data_to_push)*element)
        });
    }else{
        alert("Please enter correct Cash Value")
    }
})

