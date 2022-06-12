
    addElement = () => {

        const node = document.createElement('li')
        const textNode = document.createTextNode('Melancia')
        const myLits = document.getElementById('lista').appendChild(node)

        let cor = document.querySelector('input[name="cor"]:checked')

        node.appendChild(textNode)
        node.value
        node.style.color = (cor.value)
    }

    const btnAdiconar = document.getElementById('botao-adicionar')

    btnAdiconar.addEventListener('click', addElement)