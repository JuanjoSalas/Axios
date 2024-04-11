// Ejercicio 1
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) => console.log(res))
.catch((err) => console.error(err));

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) => console.log(res.data.map((user) => user.name)))
.catch((err) => console.error(err));

let users =[]
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) => (users = res.data))
.catch((err) => console.error(err));
console.log(users);

function logUsers() {
    return console.log(users);
}
//logUsers()

document.getElementById("log").addEventListener("click", logUsers);

function showUsers() {
    const usuario = users.map((user) => user.name)
    document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Users
      </div>
      <div class="card-body">
      <pre>${usuario}</pre>
      </div>
    </div>
  `;
}
document.getElementById("get").addEventListener("click", showUsers);

// Extras

axios.get("https://dog.ceo/api/breeds/list/all")
  .then((res) => console.log(res.data.message))
  .catch((err) => console.error(err));

axios.get("https://dog.ceo/api/breeds/image/random")
    .then((res) => console.log(res.data.message))
    .catch((err) => console.error(err));

axios.get("https://dog.ceo/api/breed/hound/images")
    .then((res) => console.log(res.data.message))
    .catch((err) => console.error(err));

// Dom Extra

/*let picture =[]
axios.get("https://dog.ceo/api/breeds/image/random")
.then((res) => (picture = res.data.message))
.catch((err) => console.error(err));
console.log(picture);

function fotoAleatoria() {
    document.getElementById("pic").innerHTML = `
      <div class="card-body">
      <img src="${picture}">
      </div>
  `;
}
document.getElementById("foto").addEventListener("click", fotoAleatoria);

let razas =[]
axios.get("https://dog.ceo/api/breeds/list/all")
  .then((res) => (razas = res.data.message))
  .catch((err) => console.error(err));
console.log(razas);*/

function listaRazas() {
  document.getElementById("lista").innerHTML = `
    <div class="card-body">
    <ul>
    <li>${razas}</li>
    </ul>
    </div>
    `;
  }
  document.getElementById("foto").addEventListener("click", listaRazas);