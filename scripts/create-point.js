// function populateUFs() {
//   const ufSelect = document.querySelector('select[name=uf]');

//   //chamar a lista do link e receber seus dados
//   fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
//     //converter esse json
//     .then(res => res.json())
//     //minha função para pegar cada estado e colocar como nova option
//     .then(states => {

//       for (const state of states) {
//         ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
//       }
//       //pega os valores do objeto estado e sua propriedade nome
//       //fiz um loop pra pegar cada objeto individualmente pelo seu nome

//     })
// }

// populateUFs()


// function getCities(event) {
//   const citySelect = document.querySelector('select[name=city]');
//   const stateInput = document.querySelector('input[name=state]');

//   const ufValue = event.target.value;

//   const indexOfSelectedState = event.target.selectedIndex;
//   stateInput.value = event.target.options[indexOfSelectedState].text;

//   const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/distritos`;

//   fetch(url)
//     .then(res => res.json())
//     .then(cities => {

//       for (const city of cities) {
//         citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
//       }

//       citySelect.disabled = false;
//     })

// }

// //serve só pra sempre que eu mudar o estado, o consolem me notificar
// //useless
// document
//   .querySelector('select[name=uf')
//   .addEventListener('change', getCities)



function populateUFs() {
  const ufSelect = document.querySelector('select[name=uf]');

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json())
    .then(states => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`
      }
      
    })
}

populateUFs()


function changeCities() {
  const citySelect = document.querySelector('select[name=city]');

  const ufValue = event.target.value;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  fetch(url)
  .then(res => res.json())
  .then(cities => {
    for(const city of cities) {
    citySelect.innerHTML += `<option value='${city.id}'>${city.nome}</option>`;

    citySelect.disabled = false;
    }
  })
}


document
  .querySelector('select[name=uf]')
  .addEventListener('change', changeCities);
