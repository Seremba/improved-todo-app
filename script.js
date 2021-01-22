const listsContainer = document.querySelector('[data-lists]')

let lists = ['name', 'todo']

function render() {
    clearElement(listsContainer)
    // <li class="list-name">Work</li>
  lists.forEach(list => {
      const listElement = document.createElement('li')
      listElement.classList.add("list-name")
      listElement.innerHTML = list
      listsContainer.appendChild(listElement)
  })
}

function clearElement(element) {
     while(element.firstChild){
         element.removeChild(element.firstChild)
     }
}
 render()