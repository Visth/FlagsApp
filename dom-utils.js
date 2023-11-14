const createInfoElement = (labelName, value) => {
	const infoElement = document.createElement("div");

	const labelElement = document.createElement("strong");
	labelElement.innerText = `${labelName}: `;

	const valueElement = document.createElement("span");
	valueElement.innerText = value;

	infoElement.appendChild(labelElement);
	infoElement.appendChild(valueElement);

	return infoElement;
};

const createFlagImgElement = (country) => {
	const imgContaierElement = document.createElement("div");
	const imgElement = document.createElement("img");
	imgElement.src = country.flagUrl;
	imgElement.alt = `${country.name} flag`

	imgContaierElement.appendChild(imgElement);

	return imgContaierElement;
};

const createCountryItemElement = (country) => {
	const countryElement = document.createElement("li");

	const anchorElement = document.createElement("a");
	anchorElement.href = `?country=${country.code}`;

	anchorElement.appendChild(createFlagImgElement(country));

	const infoContainerElement = document.createElement("div");
	infoContainerElement.classList.add("info-container");

	const countryNameElement = document.createElement("strong");
	countryNameElement.innerText = country.name;
	countryNameElement.classList.add("country-name");

	infoContainerElement.appendChild(countryNameElement);

	infoContainerElement.appendChild(
		createInfoElement("Population", country.population)
	);

	infoContainerElement.appendChild(
		createInfoElement("Region", country.region)
	);

	infoContainerElement.appendChild(
		createInfoElement("Capital", country.capital)
	);

	anchorElement.appendChild(infoContainerElement);

	countryElement.appendChild(anchorElement);

	return countryElement;
};

const createListElement = (countries) => {
	const listElement = document.createElement("ul");
	countries.forEach((country) => {
		listElement.appendChild(createCountryItemElement(country));
	});

	return listElement;
};

const createDetailElement = (country) => {

	const detailContainerElement = document.createElement('div');
	const flagImgElement = createFlagImgElement(country);
	const detailNameElement = document.createElement('strong');
	detailNameElement.innerHTML = country.name;

	detailContainerElement.appendChild(flagImgElement);
	detailContainerElement.appendChild(detailNameElement);



	// capital: country.capital && country.capital[0],
	// population: country.population.toLocaleString(),
	// name: country.name.common,
    // nativeName: country.name.nativeName,
    // code: country.cioc,
	// region: country.region,
    // subregion: country.subregion,
    // tld: country.tld[0],
    // currencies: country.currencies,
    // languages: country.languages,
	// flagUrl: country.flags.png,
}

export const renderCountriesList = (countries) => {
	const rootElement = document.querySelector("#root");
	rootElement.innerHTML = "";
	rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetail = (country) => {
	const rootElement = document.querySelector("#root");
	rootElement.innerHTML = "";
	rootElement.appendChild(createDetailElement(country));
}