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
	imgElement.alt = `${country.name} flag`;

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
	const detailContainerElement = document.createElement("div");
	const flagImgElement = createFlagImgElement(country);
	const detailNameElement = document.createElement("strong");
	detailNameElement.innerHTML = country.name;

	detailContainerElement.appendChild(flagImgElement);
	detailContainerElement.appendChild(detailNameElement);

	detailContainerElement.appendChild(
		createInfoElement("Native Name", country.nativeName)
	);

	detailContainerElement.appendChild(
		createInfoElement("Population", country.population)
	);

	detailContainerElement.appendChild(
		createInfoElement("Region", country.region)
	);

	detailContainerElement.appendChild(
		createInfoElement("Sub Region", country.subregion)
	);

	detailContainerElement.appendChild(
		createInfoElement("Capital", country.capital)
	);

	detailContainerElement.appendChild(
		createInfoElement("Top Level Domain", country.tld)
	);

	detailContainerElement.appendChild(
		createInfoElement("Currencies", country.currencies)
	);

	detailContainerElement.appendChild(
		createInfoElement("Languages", country.languages)
	);

	return detailContainerElement;
};

const createBackButtonElement = () => {
	const anchorElement = document.createElement("a");
	anchorElement.innerText = "Go back";
	anchorElement.classList.add("detail-back-link");
	anchorElement.href = "/";

	return anchorElement;
};

export const renderCountriesList = (countries) => {
	const rootElement = document.querySelector("#root");
	rootElement.innerHTML = "";
	rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetail = (country) => {
	const rootElement = document.querySelector("#root");
	rootElement.innerHTML = "";
	rootElement.appendChild(createBackButtonElement());
	rootElement.appendChild(createDetailElement(country));
};
