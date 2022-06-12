async function newFormHandler(event) {
    event.preventDefault();
  
    const address = document.querySelector('input[name="address"]').value;
    const sell_date = document.querySelector('input[name="sell_date"]').value;
    const post_url = document.querySelector('input[name="post_url"]').value;
    const price_floor = document.querySelector('input[name="price_floor"]').value;
    const price_ceiling = document.querySelector('input[name="price_ceiling"]').value;
    const beds = document.querySelector('input[name="beds"]').value;
    const baths = document.querySelector('input[name="baths"]').value;
    const sqft = document.querySelector('input[name="sqft"]').value;
  
    const response = await fetch(`/api/hposts`, {
      method: 'POST',
      body: JSON.stringify({
        address,
        sell_date,
        post_url,
        price_floor,
        price_ceiling,
        beds,
        baths,
        sqft
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/listings');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-listing-form').addEventListener('submit', newFormHandler);