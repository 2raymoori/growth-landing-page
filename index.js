document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");
  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");
    if (!groupHeader) {
      return;
    }
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    groupBody.classList.toggle("open");

    // close otehr open faqbodyes
    const otherGroups = faqContainer.querySelectorAll(".faq-group");
    console.log(otherGroups);
    otherGroups.forEach((e) => {
      if (e !== group) {
        const otherGroupBody = e.querySelector(".faq-group-body");
        const otherIcon = e.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

document.getElementById("year").innerText = new Date().getFullYear();

// Mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerBtn.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
