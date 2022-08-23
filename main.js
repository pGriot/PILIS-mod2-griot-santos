function onClick (event) {
    event.preventDefault();
    
    const mensaje = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    }
    /* console.log(mensaje); */
  
  
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
          /* cleanForm(); */
      })
      .catch((err) => console.log(err));
  
  }


/* function cleanForm() {
    let formulario = document.getElementById('formulario');    
    formulario.reset();    
}

 */
let boton = document.getElementById("enviar");
boton.addEventListener("click", onClick);