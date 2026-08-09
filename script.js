const products=[
  ['iPhone 16 Pro Max','Smartphones','₹1,44,900','₹1,59,900','12% OFF','https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=90'],
  ['Samsung Galaxy S Series','Smartphones','₹74,999','₹84,999','10% OFF','https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=90'],
  ['MacBook Pro','Computing','₹1,69,900','₹1,89,900','11% OFF','https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=90'],
  ['ROG Gaming Laptop','Computing','₹1,24,990','₹1,44,990','14% OFF','https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=90'],
  ['Sony WH-1000XM5','Audio','₹29,990','₹34,990','15% OFF','https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=90'],
  ['Apple Watch Ultra','Wearables','₹89,900','₹99,900','10% OFF','https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=90']
];
const grid=document.querySelector('#product-grid');let cart=0;
function renderProducts(filter='All'){grid.innerHTML=products.filter(p=>filter==='All'||p[1]===filter).map(p=>`<article class="product-card reveal visible"><div class="product-image"><span class="badge">${p[4]}</span><button class="wish">♡</button><img src="${p[5]}" alt="${p[0]}"></div><div class="product-info"><small>${p[1]}</small><h3>${p[0]}</h3><div class="rating">★★★★★ <small>(4.8)</small></div><div class="product-bottom"><span class="price">${p[2]} <i class="old-price">${p[3]}</i></span><button class="add-btn">ADD +</button></div></div></article>`).join('');document.querySelectorAll('.add-btn').forEach(b=>b.addEventListener('click',()=>{cart++;document.querySelector('.cart b').textContent=cart;b.textContent='ADDED ✓';setTimeout(()=>b.textContent='ADD +',1000)}))}renderProducts();
document.querySelectorAll('.filter-pills button').forEach(b=>b.addEventListener('click',()=>{document.querySelector('.filter-pills .selected').classList.remove('selected');b.classList.add('selected');renderProducts(b.textContent)}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.nav-links').classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));
window.addEventListener('scroll',()=>document.querySelector('.topbar').classList.toggle('scrolled',scrollY>10));
document.querySelector('.contact-form').addEventListener('submit',e=>{
  document.querySelector('.form-message').textContent='Thank you! Your enquiry has been sent to Infinity Electronics.';
  setTimeout(()=>e.target.reset(),100);
});
