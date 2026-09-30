const menu=document.querySelector(".menu"),nav=document.querySelector("#site-nav");
function closeMenu(){nav?.classList.remove("open");menu?.setAttribute("aria-expanded","false");menu?.setAttribute("aria-label","Open menu")}
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close menu":"Open menu")});
document.querySelectorAll("#site-nav a").forEach(a=>a.addEventListener("click",closeMenu));
const year=document.getElementById("year"); if(year) year.textContent=new Date().getFullYear();
const form=document.getElementById("enquiry-form");
form?.addEventListener("submit",e=>{
 e.preventDefault();
 const fd=new FormData(form);
 const name=(fd.get("Name")||"").trim(), vehicle=(fd.get("Vehicle")||"").trim(), service=(fd.get("Service")||"").trim(), message=(fd.get("Message")||"").trim();
 const text=[`Hello TyreBoss, I'd like help with my tyres.`,name&&`Name: ${name}`,vehicle&&`Vehicle / tyre size: ${vehicle}`,service&&`Service: ${service}`,message&&`Message: ${message}`].filter(Boolean).join("\n");
 window.open("https://wa.me/26659652363?text="+encodeURIComponent(text),"_blank","noopener");
 const status=document.getElementById("form-status"); if(status) status.textContent="WhatsApp opened with your enquiry. Review the message and tap Send.";
});