let itemsPerPage = 2;
const divEl = document.getElementById('root');
const tableEl = document.createElement('table');
tableEl.setAttribute('id', 'myTable')
const paginationDivEl = document.createElement('div');
let tableRowEl = document.createElement('tr');
let pageButton = document.createElement('button');

const employeeData = [
    { id: "EM001", Name: "SanthoshKumar K", role: "intern" },
    { id: "EK002", Name: "Hemanath D", role: "intern" },
    { id: "EN003", Name: "Pavithraa V", role: "HR" },
    { id: "ES004", Name: "Jerry", role: "backend developer" },
    { id: "ET005", Name: "Naveen", role: "frontend developer" }
]

const searchPEl = document.createElement('p')
searchPEl.textContent = 'Search :'

const inputEl = document.createElement('input');
inputEl.setAttribute('id', 'select');
searchPEl.appendChild(inputEl);

let columns = ["S.No"];
columns = columns.concat(Object.keys(employeeData[0]));

const selectEl = document.createElement('select');
selectEl.setAttribute('id', 'select');

columns.forEach((option) => {
    const optionEl = document.createElement('option');
    optionEl.value = option;
    optionEl.textContent = option;
    selectEl.appendChild(optionEl);
})

searchPEl.appendChild(selectEl);
divEl.appendChild(searchPEl);

inputEl.addEventListener('input', () => {
    filterData();
})

const itemsCountArray = [2, 5, 10];
const itemsEl = document.createElement('select');

itemsCountArray.forEach((itemsCount) => {
    const optionEl = document.createElement('option');
    optionEl.value = itemsCount;
    optionEl.textContent = itemsCount;
    itemsEl.appendChild(optionEl);
})

itemsEl.addEventListener('input', () => {
    itemsPerPage = itemsEl.value;
    filterData();
})

const paginationPEl = document.createElement('p');
paginationPEl.innerHTML = 'Items per page : '
paginationPEl.appendChild(itemsEl);

const sortEl = document.createElement('select');
columns.forEach((option, index) => {
    const optionEl = document.createElement('option');
    optionEl.value = index;
    optionEl.textContent = option;
    sortEl.appendChild(optionEl);
})
const sortPEl = document.createElement('p');
sortPEl.innerText = 'sort by : ';
sortEl.addEventListener('click', () => {
    sortTableByColumn(sortEl.value);
})

function sortData() {
    sortTableByColumn(sortEl.value);
}

sortPEl.appendChild(sortEl);
divEl.appendChild(sortPEl);

function sortTableByColumn(columnIndex) {
    let rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = tableEl.rows

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }

        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }

    }
}

function filterData() {
    const value = inputEl.value.toString();
    const selectedOption = selectEl.value;

    if (value === '') {
        pagination(employeeData);
    }

    else {
        const filteredData = employeeData.filter((obj) => {

            if (obj[selectedOption].includes(value)) {
                return true;
            }
            
            return false;
        });

        pagination(filteredData);
    }
}

function renderData(number, renderingData, tagEl) {
    tableEl.innerHTML = '';
    tableRowEl.innerHTML = ''
    columns.forEach((column, index) => {

        const tableHeadEl = document.createElement('th');
        tableHeadEl.innerText = column;
        tableRowEl.appendChild(tableHeadEl);

    })
    tableEl.appendChild(tableRowEl);

    const startIndex = (number - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginationData = renderingData.slice(startIndex, endIndex);
    paginationData.forEach((data, index) => {
        const editButton = document.createElement('button')
        editButton.innerText = 'edit';

        tableRowEl = document.createElement('tr');

        let tableDataEl = document.createElement('td');

        tableDataEl.contentEditable = true;
        tableDataEl.innerHTML = index + 1;
        tableRowEl.appendChild(tableDataEl);

        tableDataEl = document.createElement('td');
        tableDataEl.contentEditable = true;
        tableDataEl.innerHTML = data.id
        tableRowEl.appendChild(tableDataEl);

        tableDataEl = document.createElement('td');
        tableDataEl.contentEditable = true;
        tableDataEl.innerHTML = data.Name
        tableRowEl.appendChild(tableDataEl);

        tableDataEl = document.createElement('td');
        tableDataEl.contentEditable = true;
        tableDataEl.innerHTML = data.role

        tableRowEl.appendChild(tableDataEl);

        tableEl.appendChild(tableRowEl);
    })
    sortData();
    divEl.appendChild(tableEl);
    divEl.appendChild(tagEl);
    divEl.appendChild(paginationPEl);
}

function pagination(renderingData) {
    paginationDivEl.innerHTML = ''
    const pages = Math.ceil(renderingData.length / itemsPerPage);

    for (let index = 0; index < pages; index++) {
        pageButton = document.createElement('button');
        pageButton.textContent = index + 1;
        paginationDivEl.appendChild(pageButton);

        pageButton.addEventListener('click', () => {
            renderData(index + 1, renderingData, paginationDivEl);
        })
    }

    renderData(1, renderingData, paginationDivEl);

}

filterData();
