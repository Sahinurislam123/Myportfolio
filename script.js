// Edit this section to personalise your portfolio.
const PROFILE={
  name:'Sahinur Islam',
  headline:'Creator & Designer',
  tagline:'Building websites. Crafting new ideas. Creating apps.',
  bio:'আমার নাম সেখ সাহিনুর ইসলাম। আমাকে ওয়েবসাইট বানাতে, নতুন নতুন ক্র্যাফট বানাতে, অ্যাপ বানাতে খুব ভালো লাগে।',
  email:'',
  instagram:'https://www.instagram.com/sksahinur.islam?xtok=MW5qNmQ0anZ0cDk2Yw==',
  facebook:'',
  whatsapp:''
};
document.querySelector('#nameSmall').textContent=PROFILE.name.toUpperCase();
document.querySelector('#headline').textContent=PROFILE.headline;
document.querySelector('#tagline').textContent=PROFILE.tagline;
document.querySelector('#bio').textContent=PROFILE.bio;
if (PROFILE.email) document.querySelector('#email').href='mailto:'+PROFILE.email;
else document.querySelector('#email').style.display='none';
['instagram','facebook','whatsapp'].forEach(id=>{
  const link=document.querySelector('#'+id);
  if (PROFILE[id]) link.href=PROFILE[id];
  else link.style.display='none';
});
document.querySelector('#year').textContent=new Date().getFullYear();

const cards=[...document.querySelectorAll('.photo-card')];let active=2;let timer;
function render(){const n=cards.length;cards.forEach((card,i)=>{let d=i-active;while(d>n/2)d-=n;while(d< -n/2)d+=n;const x=d*145;const z=-Math.abs(d)*90;const ry=d===0?0:d>0?-28:28;const scale=d===0?1:Math.max(.68,1-Math.abs(d)*.09);card.style.transform=`translateX(${x}px) translateZ(${z}px) rotateY(${ry}deg) scale(${scale})`;card.style.opacity=Math.abs(d)>3?'0':String(1-Math.abs(d)*.13);card.style.zIndex=String(10-Math.abs(d));card.style.filter=d===0?'saturate(1)':'saturate(.72)';});}
function next(step){active=(active+step+cards.length)%cards.length;render();}
document.querySelector('#prev').addEventListener('click',()=>{next(-1);restart();});
document.querySelector('#next').addEventListener('click',()=>{next(1);restart();});
function restart(){clearInterval(timer);timer=setInterval(()=>next(1),3500);}
let startX=0;document.querySelector('.stage').addEventListener('touchstart',e=>startX=e.touches[0].clientX,{passive:true});
document.querySelector('.stage').addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>35){next(dx<0?1:-1);restart();}},{passive:true});
render();restart();