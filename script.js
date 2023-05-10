const insert = () => {

    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 
// choices
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
// for text in the option form maker
const appendText = (label = "Default") => {
    let count = 0
    let elem = document.createElement('input')

    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2 d-flex justify-content-start')

    //delete button
    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })
    //limit the click perform
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block ms-2 mt-2')
        }
    })
    //container for flex
    let container = document.createElement('div');
    container.setAttribute('class', 'd-flex');
    container.append(elem, remelem);

    //output of the appendtext
    document.querySelector('#display').append(container)
}
const appendTitle = (label = "Default") => {
    let count = 0
    let container = document.createElement('div');
    let elem = document.createElement('h3')


    elem.setAttribute('class', 'text d-flex')
    elem.textContent = label

    //delete button
    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })
    //click limiter for the delete button 
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block ms-3')
        }
    })

    //container for flex
    container.setAttribute('class', 'd-flex justify-content-center');
    container.append(elem, remelem);

    //output
    document.querySelector('#display').append(container)

}

const appendButton = (label = "Default") => {
    let count = 0
    let elem = document.createElement('button')
 
    elem.setAttribute('class', 'btn btn-primary form-control mt-2')
    elem.textContent = label

    //delete button
    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })

    //count clicked limiter 
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block ms-2 mt-2')
        }
        
    })

    //container for flex
    let container = document.createElement('div');
    container.setAttribute('class', 'd-flex');
    container.append(elem, remelem);

    //output
    document.querySelector('#display').append(container)

}   

const appendCheckbox = (label = "Default") => {
    let count = 0
    //check box
    let elem = document.createElement('input');
    elem.setAttribute('type', 'checkbox');
    elem.setAttribute('class', 'form-check-input mt-2');
    
    //label for the check box
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('for', label);
    elemLabel.textContent = label;
    
    //container for the checkbox and label
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(elem, elemLabel);

    //delete button
    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
        elemLabel.remove()
        container.remove()
    })

    //output
    document.querySelector('#display').append(container);
    document.querySelector('#display').append(remelem)

    //count clicked limiter
    elemLabel.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block')
        }
    })
  };

  const appendSearch = (label = "Search") => {
    let count = 0

    //search input
    let elem = document.createElement('input')
    elem.setAttribute('type', 'search')
    elem.setAttribute('class', 'form-control mt-2')

    //count clicked limiter
    elem.addEventListener('click', () => {
        if (count < 1) {
            count++
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block mt-2 ms-2')
        }
    })

    //delete button
    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none')
    remelem.textContent = 'Delete'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
    })

    //container for flex
    let container = document.createElement('div');
    container.setAttribute('class', 'd-flex');
    container.append(elem, remelem);

    //output
    document.querySelector('#display').append(container)
}