function addRow(){
const tr=document.createElement('tr');
tr.innerHTML=`<td contenteditable>بند</td>
<td><input type=number value=0 oninput=calc()></td>
<td><input type=number value=0 oninput=calc()></td>
<td class=t>0</td>`;
rows.appendChild(tr);
calc();
}
function calc(){
let total=0;
document.querySelectorAll('#rows tr').forEach(r=>{
const p=r.children[1].children[0].value||0;
const q=r.children[2].children[0].value||0;
const t=p*q;
r.querySelector('.t').innerText=t;
total+=t;
});
document.getElementById('total').innerText=total;
const paid=document.getElementById('paid').value||0;
document.getElementById('remain').innerText=total-paid;
}