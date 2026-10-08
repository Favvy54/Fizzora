const mobileNav = document.getElementById('mobile-menu');
const mobileBtn = document.getElementById('mobile-btn');
const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');

function setMenu(open) {
  mobileNav.classList.toggle('-left-full', !open);
  mobileNav.classList.toggle('left-0', open);

  menuIcon.classList.toggle('hidden', open);
  closeIcon.classList.toggle('hidden', !open);

  mobileBtn.setAttribute('aria-expanded', open);
  mobileBtn.setAttribute(
    'aria-label',
    open ? 'Close navigation menu' : 'Open navigation menu',
  );

  document.getElementById('backdrop').classList.toggle('hidden', !open);
}

mobileBtn.addEventListener('click', () => {
  const isClosed = mobileNav.classList.contains('-left-full');
  setMenu(isClosed);
});

document.querySelectorAll('.mobile-item').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

document.addEventListener('click', (e) => {
  const isOPen = mobileNav.classList.contains('left-0');
  const clickedInsideMenu = mobileNav.contains(e.target);
  const clickedButton = mobileBtn.contains(e.target);

  if (isOPen && !clickedInsideMenu && !clickedButton) {
    setMenu(false);
  }
});

class NewArrivals {
  constructor(name,image, id, price) {
    this.name = name;
    this.image = image;
    this.id = id;
    this.price = price;
  }
  render() {
    return `
     <div
          class="lg:bg-white max-[1023px]:w-[clamp(183px,15vw+135px,225px)] max-[1023px]:shrink-0 pr-3 lg:px-3 max-[1023px]:border-r max-[1023px]:border-r-[#dcdcdc] lg:border-b lg:border-b-[#dcdcdc] py-2.5">
          <div class="flex flex-col gap-3" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease" data-aos-delay="200" data-aos-once="true">
           <img src="${this.image}" alt="${this.image}" class="w-full object-cover aspect-square" >
           <div class="flex flex-col gap-1">
             <p class="text-[12px] font-bold" 
                data-aos-once="true">${this.name}</p>
                  <p class="text-[20px] font-medium" 
                data-aos-once="true">${this.price}</p>
           </div>
    
           
              
              <button class="w-full p-2 mt-4 border bg-black border-black font-medium  text-caption  text-white tracking-[1.35px]  rounded-xl" 
                data-aos-once="true">Add to cart</button>
          </div>
          </div>
    `;
  }
}

const products = [
  new NewArrivals(
    'ELEGANT ROSÉ GLASS',
    './assets/images/velvet-wine.jpg',
    'Win-001',
    '$11.00',
  ),
  new NewArrivals(
    'CLASSIC MARTINI GLASS',
    './assets/images/apple-cidar.jpg',
    'Win-001',
    '$11.00',
  ),
  new NewArrivals(
    'STEMLESS WINE TUMBLER',
    './assets/images/twin-glass.jpg',
    'Win-001',
    '$11.00',
  ),
  new NewArrivals(
    'ARTISAN WHISKEY GLASS',
    './assets//images/fizz-wine.jpg',
    'Win-001',
    '$11.00',
  ),
  new NewArrivals(
    'SIGNATURE CHAMPAGNE FLUTE',
    './assets/images/sparkling-wine.jpg',
   'Win-001', '$11.00'),
  new NewArrivals('VINTAGE CRYSTAL DECANTER', './assets/images/friends.jpg', 'Win-001', '$11.00'),
  new NewArrivals('ELEGANT COUPE GLASS', './assets/images/lemon-rizz.jpg', 'Win-001', '$11.00'),
  new NewArrivals('PREMIUM BORDEAUX GLASS', './assets/images/bordeaux.jpg', 'Win-001', '$11.00'),
];

const grid = document.getElementById("product-grid")
grid.innerHTML = products.map(products => products.render()).join("");

console.log(products.length)
