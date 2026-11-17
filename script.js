// ВАЖНО: замени номер ниже на номер WhatsApp в международном формате без +, пробелов и скобок.
const WHATSAPP_NUMBER = "77777777777";

const form = document.getElementById("bookingForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const service = data.get("service");
  const date = data.get("date") || "Пока не выбрана";
  const note = data.get("note").trim() || "Без дополнительных пожеланий";
  const message = `Здравствуйте! Хочу записаться в SPARKELO 💚\nИмя: ${name}\nУслуга: ${service}\nДата: ${date}\nПожелания: ${note}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const track = document.getElementById("reviewTrack");
let reviewIndex = 0;
function moveReviews(direction) {
  const cards = [...track.children];
  const visible = window.innerWidth <= 650 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  const max = Math.max(0, cards.length - visible);
  reviewIndex = Math.min(max, Math.max(0, reviewIndex + direction));
  const cardWidth = cards[0].getBoundingClientRect().width + 15;
  track.style.transform = `translateX(${-reviewIndex * cardWidth}px)`;
}
document.getElementById("prevReview").addEventListener("click", () => moveReviews(-1));
document.getElementById("nextReview").addEventListener("click", () => moveReviews(1));
window.addEventListener("resize", () => { reviewIndex = 0; track.style.transform = "translateX(0)"; });
