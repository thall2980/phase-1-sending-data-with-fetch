// Add your code here

const formData = {
  name: "Steve",
  email: "steve@steve.com",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

function submitData() {
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((formData) => document.querySelector("body").append(formData.id))
    .catch((error) => document.querySelector("body").append(error));
}
