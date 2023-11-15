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
	const detailContentElement = document.createElement("div");
	detailContainerElement.classList.add("detail-container");
	detailContentElement.classList.add("detail-content");
	
	const detailNameElement = document.createElement("strong");
	detailNameElement.innerHTML = country.name;
	detailNameElement.classList.add("detail-name")

	detailContainerElement.appendChild(flagImgElement);
	detailContentElement.appendChild(detailNameElement);

	detailContentElement.appendChild(
		createInfoElement("Native Name", country.nativeName)
	);

	detailContentElement.appendChild(
		createInfoElement("Population", country.population)
	);

	detailContentElement.appendChild(
		createInfoElement("Region", country.region)
	);

	detailContentElement.appendChild(
		createInfoElement("Sub Region", country.subregion)
	);

	detailContentElement.appendChild(
		createInfoElement("Capital", country.capital)
	);

	detailContentElement.appendChild(
		createInfoElement("Top Level Domain", country.tld)
	);

	detailContentElement.appendChild(
		createInfoElement("Currencies", country.currencies)
	);

	detailContentElement.appendChild(
		createInfoElement("Languages", country.languages)
	);

	detailContainerElement.appendChild(detailContentElement);

	if (country.borders && country.borders.length > 0) {
		detailContainerElement.appendChild(
			createBorderCountriesContainer(country)
		);
	}

	return detailContainerElement;
};

const createDetailButton = (text, link) => {
	const anchorElement = document.createElement("a");
	anchorElement.innerText = text;
	anchorElement.classList.add("detail-button");
	anchorElement.href = link;

	return anchorElement;
};

const createBorderCountriesContainer = (country) => {
	const borderCountriesContainerElement = document.createElement("div");
	const labelElement = document.createElement("strong");
	labelElement.innerHTML = "Border Countries: ";

	borderCountriesContainerElement.appendChild(labelElement);

	country.borders.forEach((border) => {
		borderCountriesContainerElement.appendChild(
			createDetailButton(border, `/?country=${border}`)
		);
	});
	return borderCountriesContainerElement;
};

export const renderCountriesList = (countries) => {
	const rootElement = document.querySelector("#root");
	rootElement.innerHTML = "";
	rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetail = (country) => {
	const rootElement = document.querySelector("#root");
	rootElement.innerHTML = "";
	rootElement.appendChild(createDetailButton("Go back", "/"));
	rootElement.appendChild(createDetailElement(country));
};
