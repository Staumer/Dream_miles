// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById('btnSearch').addEventListener('click', searchCountries);

document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('countriesInput').value = '';
  document.getElementById('result').innerHTML = '';
});

const resetButton = document.getElementById('resetBtn');
const searchInput = document.getElementById('countriesInput');


  function searchCountries() {
    const input = document.getElementById('countriesInput').value.trim().toLowerCase();
    const resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = '';
    
    fetch('./travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
    
      if (input.includes('temple')) {
        data.temples.forEach(temple => {
          resultDiv.innerHTML += `
            <div class="card">
              <><h2>${temple.name}</h2>
              <img src="${temple.imageUrl}" alt="${temple.name}" width="400">
                    <p>${temple.description}</p>
                </div>
          `;
        });
        return;
      }
    
      if (input.includes('beach')) {
        data.beaches.forEach(beach => {
          resultDiv.innerHTML += `
            <div class="card">
              <><h2>${beach.name}</h2>
              <img src="${beach.imageUrl}" alt="${beach.name}" width="400">
                    <p>${beach.description}</p>
                </div>
          `;
        });
        return;
      }
    
      const country = data.countries.find(
        country => country.name.toLowerCase() === input
      );
    
      if (country) {
        country.cities.forEach(city => {
          resultDiv.innerHTML += `
            <div class="card">
              <><h2>${city.name}</h2>
              <img src="${city.imageUrl}" alt="${city.name}" width="400">
                    <p>${city.description}</p>
                </div>
          `;
        });
      } else {
        resultDiv.innerHTML = '<p>No recommendations found.</p>';
      }
    })
    .catch(error => {
        console.error(error);
        resultDiv.innerHTML = '<p>Error loading recommendations.</p>';
      });
      }

