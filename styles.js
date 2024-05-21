function createNewUser() {
  let firstName = prompt("Введите ваше имя:");
  let lastName = prompt("Введите вашу фамилию:");

  let newUser = {
      firstName: firstName,
      lastName: lastName,
      getLogin: function() {
          return (this.firstName[0] + this.lastName).toLowerCase();
      }
  };

  return newUser;
}

let user = createNewUser();
console.log(user.getLogin());
