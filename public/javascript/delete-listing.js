async function deleteFormHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/hposts/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/new-listing/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-hpost-btn').addEventListener('click', deleteFormHandler);