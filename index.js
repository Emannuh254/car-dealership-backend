// Fetch the car data from the API
fetch("http://localhost:5000/cars")
  .then((response) => response.json()) // Parse the JSON response
  .then((cars) => {
    const carList = document.getElementById("car-list"); // Get the container

    // Loop through each car and create a new div to display the details
    cars.forEach((car) => {
      const carItem = document.createElement("div");
      carItem.classList.add("car-item"); // Add a class for styling

      // Create the HTML content for the car
      carItem.innerHTML = `
        <h3>${car.name}</h3>
        <p><strong>Make:</strong> ${car.make}</p>
        <p><strong>Model:</strong> ${car.model}</p>
        <p><strong>Year:</strong> ${car.year}</p>
        <p><strong>Price:</strong> $${car.price.toLocaleString()}</p>
        <img src="${car.image}" alt="${car.name}">
      `;

      // Append the car item to the car list container
      carList.appendChild(carItem);
    });
  })
  .catch((error) => {
    console.error("Error loading the car data:", error);
  });
