function onClick (event) {
    event.preventDefault();
    
    const mensaje = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por registrarte', 
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
  
  }


function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}


let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);


fetch('https://api.openweathermap.org/data/2.5/weather?lat=-24.182805859345006&lon=-65.3331443697343&appid=8d9ebe120bf192eac66ce734518e14ec&units=metric&lang=es')
    .then((respuesta) => 
        (respuesta.json()))
        .then((clima) => {
          console.log(clima);
          document.getElementById('climaId').textContent = clima.name;
          document.getElementById('climaMain').textContent = clima.main.temp + "°C";
          document.getElementById('climaDescription').textContent = clima.weather[0].description;
          document.getElementById('climaIcono').src = "http://openweathermap.org/img/wn/" + clima.weather[0].icon + "@2x.png"
        })
