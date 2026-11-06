import { siteData } from "./data/site-data.js";

const menuGrid = document.getElementById("menuGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const reservationForm = document.getElementById("reservationForm");

function renderMenu(items) {
  if (!menuGrid) return;

  menuGrid.innerHTML = items
    .map(
      (item, index) => `
        <article class="menu-item" data-category="${item.category}">
          <div class="menu-number">${String(index + 1).padStart(2, "0")}</div>
          <div class="menu-image-wrap">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <ul>
            <li>${item.price}</li>
            ${item.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          <a href="https://wa.me/${siteData.business.phoneRaw}?text=${encodeURIComponent(`Halo Barokah, saya mau pesan ${item.orderText}.`)}" class="btn btn-secondary">Pesan</a>
        </article>
      `,
    )
    .join("");
}

function handleFilter(filter) {
  const menuItems = document.querySelectorAll(".menu-item");

  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  menuItems.forEach((item) => {
    const shouldShow = filter === "all" || item.dataset.category === filter;
    item.classList.toggle("hidden", !shouldShow);
  });
}

if (menuGrid && siteData.menu) {
  renderMenu(siteData.menu);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => handleFilter(button.dataset.filter));
  });
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const payload = {
      name: formData.get("name") || "Pelanggan",
      phone: formData.get("phone") || "",
      date: formData.get("date") || "",
      time: formData.get("time") || "",
      guests: formData.get("guests") || "",
      occasion: formData.get("occasion") || "Makan santai",
      notes: formData.get("notes") || "Tidak ada catatan",
    };

    const message = encodeURIComponent(
      `Halo Barokah, saya ingin reservasi:\nNama: ${payload.name}\nWhatsApp: ${payload.phone}\nTanggal: ${payload.date}\nJam: ${payload.time}\nJumlah orang: ${payload.guests}\nAcara: ${payload.occasion}\nCatatan: ${payload.notes}`,
    );

    window.open(
      `https://wa.me/${siteData.business.phoneRaw}?text=${message}`,
      "_blank",
      "noopener",
    );
    reservationForm.reset();
  });
}
