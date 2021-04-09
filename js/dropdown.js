let dropbtn = document.querySelector('.dropbtn')
let dropdown_content = document.querySelector('.dropdown-content')
document.addEventListener('click', (e) => {
  console.log(e.target == dropbtn)
  if (
    !dropdown_content.contains(e.target) &&
    dropdown_content.classList.contains('show')
  ) {
    dropdown_content.classList.remove('show')
  } else if (dropbtn.contains(e.target)) {
    dropdown_content.classList.add('show')
  }
})
