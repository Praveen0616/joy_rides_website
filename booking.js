window.onload = () => {
  // Car database - should match your car listing data
  const carDatabase = {
    "sedan1": { name: "Honda City", price: 2500 },
    "sedan2": { name: "Honda Aura", price: 2500 },
    "sedan3": { name: "Skoda Octavia", price: 3000 },
    "MPV1": { name: "Eartiga", price: 3300 },
    "MPV2": { name: "Toyota Rumion", price: 3500 },
    "MPV3": { name: "XL6", price: 3500 },
	"Hatchback1": { name: "Glanza", price: 2500 },
    "Hatchback2": { name: "Swift", price: 2400 },
    "Hatchback3": { name: "Altroz", price: 2700 }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const carId = urlParams.get("carId");
  
  // Get car details from database or use defaults
  const carDetails = carDatabase[carId] || { name: "Selected Car", price: 2500 };

  document.getElementById("carName").value = carDetails.name;
  document.getElementById("basePrice").value = carDetails.price;

  const form = document.getElementById("bookingForm");
  const bookingType = document.getElementById("bookingType");
  const pickup = document.getElementById("pickup");
  const drop = document.getElementById("drop");
  const totalPrice = document.getElementById("totalPrice");

  function calculatePrice() {
    const pickupTime = new Date(pickup.value);
    const dropTime = new Date(drop.value);
    const durationHours = (dropTime - pickupTime) / (1000 * 60 * 60);
    const durationDays = durationHours / 24;
    const type = parseInt(bookingType.value);

    if (isNaN(durationHours) || durationHours <= 0) {
      totalPrice.value = "Invalid duration";
      return;
    }

    let unitCount = type === 12 ? Math.ceil(durationHours / 12) : Math.ceil(durationHours / 24);
    let pricePerUnit = type === 12 ? (carDetails.price / 2) : carDetails.price;
    
    // Apply discount if booking is for more than 20 days
    if (durationDays > 20) {
      pricePerUnit = Math.max(pricePerUnit - 500, 0); // Ensure price doesn't go negative
    }
	if (durationDays > 6) {
		pricePerUnit = Math.max(pricePerUnit - 200, 0); // Ensure price doesn't go negative
    }

    totalPrice.value = `₹${unitCount * pricePerUnit}`;
  }

  [pickup, drop, bookingType].forEach(el => el.addEventListener('change', calculatePrice));

  form.onsubmit = e => {
    e.preventDefault();
    alert(`Booking Confirmed!\nCar: ${carDetails.name}\nPrice: ${totalPrice.value}`);
    form.reset();
    totalPrice.value = "";
  };
};