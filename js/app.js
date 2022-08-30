const loadPhones = async (search) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  const PhonesContainer = document.getElementById("phones-container");
  PhonesContainer.innerHTML = "";
  phones = phones.slice(0, 20);
  const noPhone = document.getElementById("search-error");
  if (phones.length === 0) {
    noPhone.classList.remove("hidden");
  } else {
    noPhone.classList.add("hidden");
  }
  phones.forEach((phone) => {
    console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phoneDiv");
    phoneDiv.innerHTML = `
    <img src="${phone.image}" alt="" />
    <h4 class="text-xl m-2 font-semibold">${phone.phone_name}</h4>
    <h4 class="text-lg m-2 font-semibold">Price: XXXX</h4>
    <p class="font-semibold m-2">Details: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, delectus?</p>
      `;
    PhonesContainer.appendChild(phoneDiv);
  });
  toggleSpinner(false);
};

document.getElementById("btn-search").addEventListener("click", function () {
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadPhones(searchText);
  searchField.value = "";
});

const toggleSpinner = (isLoading) => {
  const spinnerSection = document.getElementById("spinner");
  if (isLoading == true) {
    spinnerSection.classList.remove("hidden");
  } else {
    spinnerSection.classList.add("hidden");
  }
};

loadPhones("a");
