// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Example: Show an alert when the recommendation button is clicked
const button = document.querySelector("button");

function searchCountries() {
    const input = document.getElementById('countriesInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countries = data.countries.find(item => item.name.toLowerCase() === input);

        if (condition) {
          const name = countries.name.join(', ');
          const description = countries.description.join(', ');
        

          resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
          resultDiv.innerHTML += `<img src="${countries.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Name:</strong> ${name}</p>`;
          resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;
        } else {
          resultDiv.innerHTML = 'Country not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
if (button) {
  button.addEventListener("click", () => {
    alert("Your Dream Miles recommendations are being imagined!");
  });
}

// Example: Smooth scroll for internal links (if you add a nav later)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

