// CK Business website settings
// Update the WhatsApp number below to the correct business number in international format.
// Current number is based on the contact previously supplied in this project.
const WHATSAPP_NUMBER = '254726596187';
// Change this PIN before publishing. This browser-only tool is not secure authentication.
const ADMIN_PIN = '2580';
const prices = {'Adult jersey':450,'Kids jersey':600,'Cyber service':0};
const item = document.getElementById('item'), qty = document.getElementById('qty'), total = document.getElementById('total');
function money(n){return 'KSh '+Number(n).toLocaleString('en-KE');}
function updateTotal(){const p=Number(item?.selectedOptions[0]?.dataset.price||0), q=Math.max(1,Number(qty?.value||1));total.textContent=p?money(p*q):'To be confirmed';}
item?.addEventListener('change',updateTotal);qty?.addEventListener('input',updateTotal);
document.querySelectorAll('[data-order]').forEach(btn=>btn.addEventListener('click',()=>{item.value=btn.dataset.order==='Adult'?'Adult jersey':'Kids jersey';updateTotal();document.getElementById('order').scrollIntoView({behavior:'smooth'});}));
document.getElementById('orderForm')?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim(),phone=document.getElementById('phone').value.trim(),product=item.value,q=Math.max(1,Number(qty.value||1)),amount=Number(item.selectedOptions[0].dataset.price||0),details=document.getElementById('details').value.trim(),fulfilment=document.getElementById('fulfilment').value;const lines=['Hello CK Business, I would like to place an order.','Name: '+name,'Phone: '+phone,'Item/service: '+product,'Quantity: '+q,'Estimated amount: '+(amount?money(amount*q):'Please confirm price'),'Details: '+(details||'Not specified'),'Pickup/delivery: '+fulfilment,'M-Pesa Till: 5253233','Please confirm availability and the final amount before I pay.'];const message=encodeURIComponent(lines.join('\n'));window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+message,'_blank','noopener');});
document.getElementById('copyTill')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('5253233');document.getElementById('copyTill').textContent='Copied ✓';}catch(e){window.prompt('Copy CK Business Till number:', '5253233');}});
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('menu')?.addEventListener('click',()=>document.getElementById('nav').classList.toggle('show'));
const admin=document.getElementById('admin');
document.getElementById('openAdmin')?.addEventListener('click',()=>admin.hidden=false);
document.getElementById('closeAdmin')?.addEventListener('click',()=>admin.hidden=true);
document.getElementById('unlock')?.addEventListener('click',()=>{if(document.getElementById('pin').value===ADMIN_PIN){document.getElementById('stockEditor').hidden=false;document.getElementById('adminMessage').textContent='Unlocked. This is a simple local demo, not a secure online admin system.';document.getElementById('adultStock').value=localStorage.getItem('ckAdultStock')||15;document.getElementById('kidsStock').value=localStorage.getItem('ckKidsStock')||15;}else{document.getElementById('adminMessage').textContent='Incorrect PIN. Try again.';}});
document.getElementById('saveStock')?.addEventListener('click',()=>{localStorage.setItem('ckAdultStock',document.getElementById('adultStock').value);localStorage.setItem('ckKidsStock',document.getElementById('kidsStock').value);document.getElementById('stockMessage').textContent='Stock saved on this device.';});
