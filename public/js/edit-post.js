async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      id,
      address,
      sell_date,
      post_url,
      price_floor,
      price_ceiling,
      beds,
      baths,
      sqft,
      created_at,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/homepage/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
