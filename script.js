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
    let remelem = document.createElement('button')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2 d-flex justify-content-start')
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn')
            remelem.textContent = 'Delete'
            remelem.addEventListener('click', () => {
                elem.remove()
                remelem.remove()
            })
            document.querySelector('#display').append(remelem)
        }
    })

    document.querySelector('#display').append(elem)
}
const appendTitle = (label = "Default") => {
    let count = 0
    let elem = document.createElement('h3')

    elem.setAttribute('class', 'text')
    elem.textContent = label
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            let remelem = document.createElement('button')
            remelem.setAttribute('class', 'btn btn-danger delete-btn')
            remelem.textContent = 'Delete'
            remelem.addEventListener('click', () => {
                elem.remove()
                remelem.remove()
            })
            document.querySelector('#display').append(remelem)
        }
    })

    document.querySelector('#display').append(elem)

}

const appendButton = (label = "Default") => {
    let count = 0
    let elem = document.createElement('button')
 
    elem.setAttribute('class', 'btn btn-primary form-control mt-2')
    elem.textContent = label
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            let remelem = document.createElement('button')
            remelem.setAttribute('class', 'btn btn-danger delete-btn')
            remelem.textContent = 'Delete'
            remelem.addEventListener('click', () => {
                elem.remove()
                remelem.remove()
            })
            document.querySelector('#display').append(remelem)
        }
        
    })

    document.querySelector('#display').append(elem)

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
    
    document.querySelector('#display').append(container);
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            let remelem = document.createElement('button')
            remelem.setAttribute('class', 'btn btn-danger delete-btn')
            remelem.textContent = 'Delete'
            remelem.addEventListener('click', () => {
                elem.remove()
                remelem.remove()
                elemLabel.remove()
                container.remove()
            })
            document.querySelector('#display').append(remelem)
        }
    })
  };

  const appendSearch = (label = "Search") => {
    let count = 0
    let searchdiv = document.createElement('div')
    searchdiv.setAttribute('class', 'd-flex row')

    document.querySelector('#display').append(searchdiv)

    let elem = document.createElement('input')
    elem.setAttribute('type', 'search')
    elem.setAttribute('class', 'form-control mt-2 d-flex col-5')
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            let remelem = document.createElement('button')
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-flex justify-content-end')
            remelem.textContent = 'Delete'
            remelem.addEventListener('click', () => {
                elem.remove()
                remelem.remove()
            })
            document.querySelector('#display').append(remelem)
        }
    })
    
    document.querySelector('#display').append(elem)
}