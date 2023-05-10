const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'title': appendTitle(label)
            break
        case 'search': appendSearch(label)
            break
    }

}

const appendText = (label = "Default") => {
    let count = 0
    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2 d-flex justify-content-start')

    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })

    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block')
        }
    })
    document.querySelector('#display').append(elem)
    document.querySelector('#display').append(remelem)
}
const appendTitle = (label = "Default") => {
    let count = 0
    let container = document.createElement('div');
    let elem = document.createElement('h3')

    elem.setAttribute('class', 'text d-flex justify-content-center')
    elem.textContent = label

    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })

    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block')
        }
    })

    container.setAttribute('class', 'd-flex justify-content-end');
    container.append(elem, remelem);

    document.querySelector('#display').append(container)


}

const appendButton = (label = "Default") => {
    let count = 0
    let elem = document.createElement('button')
 
    elem.setAttribute('class', 'btn btn-primary form-control mt-2')
    elem.textContent = label

    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })

    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block')
        }
        
    })

    document.querySelector('#display').append(elem)
    document.querySelector('#display').append(remelem)

}   

const appendCheckbox = (label = "Default") => {
    let count = 0
    let elem = document.createElement('input');
    elem.setAttribute('type', 'checkbox');
    elem.setAttribute('class', 'form-check-input mt-2');
    
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('for', label);
    elemLabel.textContent = label;
    
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(elem, elemLabel);

    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
        elemLabel.remove()
        container.remove()
    })

    document.querySelector('#display').append(container);
    document.querySelector('#display').append(remelem)

    elemLabel.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block')
        }
    })
  };

  const appendSearch = (label = "Search") => {
    let count = 0

    let elem = document.createElement('input')
    elem.setAttribute('type', 'search')
    elem.setAttribute('class', 'form-control mt-2 d-flex col-5')
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-flex justify-content-end d-block')
        }
    })

    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-flex justify-content-end d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })

    document.querySelector('#display').append(elem)
    document.querySelector('#display').append(remelem)
}