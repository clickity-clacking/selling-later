// function priceFormHandler (event) {
//     event.preventDefault();

//     console.log("function was called");

//     // fetch(`/api/hposts/`) 



// }

async function priceFormHandler(event) {
    event.preventDefault();

    const response = await fetch(`/api/hposts`, {
        attributes: ['id', 'address', 'sell_date', 'post_url', 'price_floor', 'price_ceiling', 'beds', 'baths', 'sqft', 'created_at'],
        order: [['created_at', 'DESC']],

        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.querySelector('.all-hposts').style.display = 'none';
        //   document.location.replace('/listings/');
        const data = await response.json()
        // console.log(data)
        // console.log(event.target.value)
        if (event.target.value == "<500000") {
            const filteredData = data.filter(index => index.price_floor < 500000)
            renderHtml(filteredData)
        } else if (event.target.value == "500000-700000") {
            const filteredData = data.filter(index => (index.price_floor >= 500000 && index.price_floor <= 700000))
            renderHtml(filteredData)
        }
        // (dbHPostData => {
        //     const searchposts = dbHPostData.map(searchposts => searchposts.get({ plain: true }));
        //     console.log(dbHPostData);
        //     res.render('listings', { searchposts });
        //   })
    } else {
        alert(response.statusText);
    }
}

function renderHtml(arr) {
    const postEl = document.querySelector(".searchposts");
    postEl.innerHTML = "";

    for (i = 0; i < arr.length; i++) {

        let template = `
          <li>
          <article>
          <div>
          <h2>${arr[i].address}</h2>
          <span>${arr[i].post_url}</span>
          </div>
          <div>Approx Sell Date: ${arr[i].sell_date}</div>
          <div>Price Range: ${arr[i].price_floor} - ${arr[i].price_ceiling}</div>
          <div>${arr[i].beds} Beds, ${arr[i].baths}Ba</div>
          <div>Sqft: ${arr[i].sqft}</div>
          <div>by ${arr[i].user.username} on ${arr[i].created_at}</div>
          
          </article>
          </li>`
        postEl.innerHTML += template
    }
}




document.querySelector('.price-search').addEventListener('change', priceFormHandler);