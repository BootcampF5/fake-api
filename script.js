const urlApi = "http://localhost:3000/productos"

function sincrona1() {
    console.log("soy una funcion sincrona 1")
}
sincrona1()


//consumo API con .then()
fetch(urlApi).then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("ha entrado en el catch", error))
    .finally(() => console.log("entra si o si"))

function sincrona2() {
    console.log("soy una funcion sincrona 2")
}
sincrona2()


//consumo API con async/await
const fetchData = async () => {
    try {
        const response = await fetch(urlApi);
        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

fetchData()

