async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
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
    document.location.replace("/homepage");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
