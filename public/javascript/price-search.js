// function priceFormHandler (event) {
//     event.preventDefault();

//     console.log("function was called");

//     // fetch(`/api/hposts/`) 

    
    
// }

async function priceFormHandler(event) {
    event.preventDefault();

    console.log('this button works');
  

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
       console.log(response.json);
    // (dbHPostData => {
    //     const searchposts = dbHPostData.map(searchposts => searchposts.get({ plain: true }));
    //     console.log(dbHPostData);
    //     res.render('listings', { searchposts });
    //   })
    } else {
      alert(response.statusText);
    }
  }





document.querySelector('.price-search').addEventListener('change', priceFormHandler);