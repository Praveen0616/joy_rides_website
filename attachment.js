document.getElementById("attachForm").onsubmit = function(e) {
  e.preventDefault();

  const car = {
    owner: document.getElementById("ownerName").value,
    model: document.getElementById("carModel").value,
    fuel: document.getElementById("fuel").value,
    seats: document.getElementById("seats").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value
  };

  let cars = JSON.parse(localStorage.getItem("attachedCars") || "[]");
  cars.push(car);
  localStorage.setItem("attachedCars", JSON.stringify(cars));

  alert("Car successfully attached! We'll review and list it soon.");
  this.reset();
};
