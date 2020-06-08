function populateUFs() {
  const ufSelect = document.querySelector('select[name=uf]');

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json())
    .then(states => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`;
      }

    })
}

populateUFs();


function changeCities(event) {
  const citySelect = document.querySelector('select[name=city]');
  const stateInput = document.querySelector('input[name=state]');

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text

  const ufValue = event.target.value;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = '';
  citySelect.disabled = true;

  fetch(url)
    .then(res => res.json())
    .then(cities => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`;

        citySelect.disabled = false;
      }
    })
}

document
  .querySelector('select[name=uf]')
  .addEventListener('change', changeCities);


//itens de coleta
const itemsToCollect = document.querySelectorAll('.itens-grid li');

for (const item of itemsToCollect) {
  item.addEventListener('click', handleSelectedItem);
}

//atualizar o campo escondido
const collecetdItems = document.querySelector('input[name=items]');

let selectedItems = [];

function handleSelectedItem(event) {
  // event.target é o evento que ocorreu e o seu alvo, que no caso é o evento de click em um Li especifico
  const itemLi = event.target;
  //removendo ou adicionando um classe a um item
  itemLi.classList.toggle('selected');
  //pegando o id de cada item pelo seu dataX
  const itemId = itemLi.dataset.id;
  console.log('item id: ', itemId)

  //verificar quais tems selecionados e pegar cada um
  const alreadySelected = selectedItems.findIndex(item => {
    const itemFound = item == itemId
    return itemFound
  });

  //se já estiver selecionado, tirar da seleção
  if (alreadySelected >= 0) {
    //tirar da seleção
    const filteredItems = selectedItems.filter(item => {
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    })

    selectedItems = filteredItems;
  } else {
    selectedItems.push(itemId);
  }
  console.log('itens selecionados: ', selectedItems)

  collecetdItems.value = selectedItems;
} //reassistir dos 35 - 54min;