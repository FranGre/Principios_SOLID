***
- Single Responsability -

Una clase o un módulo debe tener una única responsabilidad.
👉 La clase debe cambiar por una sola razón.

1 sola responsabilidad != hacer 1 sola cosa
1 sola responsabilidad == conjunto de procesos relacionados entre sí

Si tienes más de 1 responsabilidad el código se vuelve:
- Más rígido
- Menos flexible
- Menos tolerante a cambios
***


// Good
class UserService {

      createUser(user){
        console.log("creando user");
      }

      deleteUser(userId){
        console.log("eliminando user");
      }

    }

class EmailSender {

  sendEmail(){
    console.log("enviando email");
  }

}

// Bad
class UserService {

  createUser(user){
    console.log("creando user");
  }

  delelteUser(userId){
    console.log("eliminanod user");
  }

  sendEmail(){
    console.log("envianod email");
  }

}
