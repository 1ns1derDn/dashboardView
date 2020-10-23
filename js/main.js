const $select     = document.querySelector('[data-select="select"]')
const $selectOvraild = $select.querySelector('[data-select-ovarlaid="select"]')
const $selectHead = $select.querySelector('[data-select-head="select"]')
const $selectItems = $select.querySelectorAll('[data-select-item="select"]')

function selectToggle () {
  $select.classList.toggle('open')
}

function selectClose() {
  $select.classList.remove('open')
}

$selectHead.addEventListener('click', selectToggle)
$selectOvraild.addEventListener('click', selectClose)

$selectItems.forEach( $selectItem => {
  $selectItem.addEventListener('click', function(){
    $selectHead.textContent = $selectItem.textContent
    selectClose()
  })
})

