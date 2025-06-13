const buildHTML = (data) => {
  const html = `
  <div class="post">
    <div class="post-data">
      投稿日時：${data.created_at}
    </div>
    <div class="post-content">
      ${data.content}
    </div>
  </div>
  `;
  return html;
};

const post = () => {
  const form = document.querySelector("form");
  const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRFToken": csrfToken,
        },
      });
      if (!response.ok) {
        alert(`Error ${response.status}: ${response.statusText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const postsContainer = document.querySelector(".posts-container");

      postsContainer.insertAdjacentHTML("afterend", buildHTML(data));
    } catch (e) {
      console.error("Error: ", e);
      alert(`AJAX request failed: ${e}`);
    }

    form.reset();
  });
};

window.addEventListener("DOMContentLoaded", post);
