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

let selectedItems = [1, 2, 3, 4, 5, 6];

function handleSelectedItem(event) {
  // event.target é o evento que ocorreu e o seu alvo, que no caso é o evento de click em um Li especifico
  const itemLi = event.target;
  //removendo ou adicionando um classe a um item
  itemLi.classList.toggle('selected');
  //pegando o id de cada item pelo seu dataX
  const itemId = itemLi.dataset.id;


  // const alreadySelected = selectedItems.findIndex(item => {
  //   const itemFound = item == itemId;
  //   return itemFound;
  // })

  const alreadySelected = selectedItems.findIndex( item => item == itemId );

  //verificar quais tems selecionados e pegar cada um

  //se já estiver selecionado, tirar da seleção
}