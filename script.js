const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const navLinks = nav.querySelectorAll('a');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});
navLinks.forEach((link) => link.addEventListener('click', closeMenu));

const progress = document.querySelector('.scroll-progress');
const topButton = document.querySelector('.back-to-top');
function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  topButton.classList.toggle('is-visible', window.scrollY > 700);
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
topButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
updateScrollUI();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const categoryData = {
  food: {
    number: '01',
    title: '제주 유채를<br>맛보는 첫 경험',
    description: '유채페스토와 유채크래커 등 5,000~20,000원대 식료품 라인업.',
    image: 'assets/goods_set_01.png',
    alt: '유채클럽 식료품 라인업'
  },
  goods: {
    number: '02',
    title: '유채 캐릭터를<br>일상 가까이에',
    description: '마스코트를 활용한 키링, 머그컵, 스티커, 파우치 등의 라이프스타일 굿즈.',
    image: 'assets/goods_01.png',
    alt: '유채 캐릭터 라이프스타일 굿즈'
  },
  space: {
    number: '03',
    title: '노란 감각으로<br>가득 채운 공간',
    description: '브랜드의 맛과 캐릭터, 에너지를 한자리에서 직접 경험하는 팝업스토어.',
    image: 'assets/store.png',
    alt: 'YUCHAE CLUB 팝업스토어 공간'
  }
};

const tabs = document.querySelectorAll('.category-tab');
const panel = document.querySelector('.experience-panel');
const panelImage = panel.querySelector('img');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const item = categoryData[tab.dataset.category];
    tabs.forEach((button) => {
      const active = button === tab;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    panel.animate([{ opacity: .35, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], { duration: 320, easing: 'ease-out' });
    panel.querySelector('.panel-number').textContent = item.number;
    panel.querySelector('h3').innerHTML = item.title;
    panel.querySelector('.experience-copy > p:last-child').textContent = item.description;
    panelImage.src = item.image;
    panelImage.alt = item.alt;
  });
});

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.showModal();
}
document.querySelector('.gallery-image').addEventListener('click', () => openLightbox(panelImage.src, panelImage.alt));
document.querySelectorAll('.gallery-strip button').forEach((button) => {
  button.addEventListener('click', () => openLightbox(button.dataset.src, button.dataset.alt));
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

const toast = document.querySelector('.toast');
let toastTimer;
document.querySelector('[data-info-alert]').addEventListener('click', () => {
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3000);
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
