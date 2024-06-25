const openModalButtons2 = document.querySelectorAll("[data-modal-target2]");
const closeModalButtons2 = document.querySelectorAll("[data-close-button2]");
const overlay2 = document.getElementById("overlay2");


openModalButtons2.forEach((button2) => {
  button2.addEventListener("click", () => {
    const modal2 = document.querySelector(button2.dataset.modalTarget2);
    openModal2(modal2);
  });
});

overlay2.addEventListener("click", () => {
  const modals2 = document.querySelectorAll(".modal2.active2");
  modals2.forEach((modal2) => {
    closeModal2(modal2);
  });
});

closeModalButtons2.forEach((button2) => {
  button2.addEventListener("click", () => {
    const modal2 = button2.closest(".modal2");
    closeModal2(modal2);
  });
});

function openModal2(modal2) {
  if (modal2 == null) return;
  modal2.classList.add("active2");
  overlay2.classList.add("active2");
}

function closeModal2(modal2) {
  if (modal2 == null) return;
  modal2.classList.remove("active2");
  overlay2.classList.remove("active2");
}