let users = [
  { email: "admin", password: "adminpw" }, 
  { email: "svelte", password: "sveltepw" }
]

let user = { email: "admins", password: "adminpw" };
let userEmail = user.email;
console.log(users.find(user => user.email === userEmail));