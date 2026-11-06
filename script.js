const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

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

const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) =>
      btn.classList.toggle("active", btn === button),
    );

    menuItems.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.category === filter;
      item.classList.toggle("hidden", !shouldShow);
    });
  });
});

const reservationForm = document.getElementById("reservationForm");

if (reservationForm) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const name = formData.get("name") || "Pelanggan";
    const phone = formData.get("phone") || "";
    const date = formData.get("date") || "";
    const time = formData.get("time") || "";
    const guests = formData.get("guests") || "";
    const occasion = formData.get("occasion") || "Makan santai";
    const notes = formData.get("notes") || "Tidak ada catatan";

    const message = encodeURIComponent(
      `Halo Barokah, saya ingin reservasi:\nNama: ${name}\nWhatsApp: ${phone}\nTanggal: ${date}\nJam: ${time}\nJumlah orang: ${guests}\nAcara: ${occasion}\nCatatan: ${notes}`,
    );

    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener");
    reservationForm.reset();
  });
}
