// Simple FAQ accordion
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("open");
  });
});

// Very light “fake” form submission just to show behaviour
function attachFormHandler(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Our team will contact you shortly.");
    form.reset();
  });
}

attachFormHandler("heroForm");
attachFormHandler("midForm");
attachFormHandler("bottomForm");