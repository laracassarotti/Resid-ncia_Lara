function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    if (itemInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${itemInput.value}</span>
            <div>
                <button class="edit" onclick="editItem(this)">Editar</button>
                <button class="delete" onclick="deleteItem(this)">Excluir</button>
                <button class="bought" onclick="markAsBought(this)">Comprado</button>
            </div>
        `;
        itemList.appendChild(li);
        itemInput.value = '';
    }
}

function editItem(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const newItem = prompt('Editar item:', span.textContent);
    if (newItem) {
        span.textContent = newItem;
    }
}

function deleteItem(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function markAsBought(button) {
    const li = button.parentElement.parentElement;
    li.classList.toggle('bought');
}
