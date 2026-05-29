const search = function () {
  const input = document.querySelector('.search-block > input')
  const searchBtn = document.querySelector(".search-block > button")


  // input.addEventListener('input', (event) => {
  //   console.dir(event.target.value);
  // })

  searchBtn.addEventListener('click', () => {
    console.dir(input.value);
  })
}

search()