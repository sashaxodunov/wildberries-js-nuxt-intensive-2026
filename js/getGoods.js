const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getData = () => {
      fetch("https://test-e1c27-default-rtdb.firebaseio.com/db.json")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("data", JSON.stringify(data));
        });
  }

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      getData()
    })
  })

  
}

getGoods()