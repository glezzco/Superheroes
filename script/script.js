const header = document.querySelector('header');
const section = document.querySelector('section');
const request = new XMLHttpRequest();
const requestURL = './json/heroes.json';
request.open('GET', requestURL);


request.responseType = 'json';
request.send();

request.onload = function() {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
}

function showHeroes(jsonObj) {
    const heroes = jsonObj['producto'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
      const imagen = document.createElement('img')


      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'precio: ' + heroes[i].precio;
      myPara2.textContent = 'tallas: ' + heroes[i].tallas;
      myPara3.textContent = 'Colores';
  
      const superPowers = heroes[i].colores;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
      imagen.src = heroes[i].imagen
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
      myArticle.appendChild(imagen);
    }
}

request.responseType = 'json';

request.open('GET', requestURL);
request.responseType = 'text'; // recibimos una cadena de tipo "string"
request.send();

request.onload = function() {
  const superHeroesText = request.response; // cogemos la cadena de response
  const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

const myJSON = { "name": "Chris", "age": "38" };
myJSON
const myString = JSON.stringify(myJSON);
myString


