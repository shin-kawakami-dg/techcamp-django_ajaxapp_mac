const post = () => {
  const form = document.querySelector("form");
  const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch("", {
      method: "POST",
      body: formData,
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": csrfToken,
      },
    });
  });
};

window.addEventListener("DOMContentLoaded", post);
