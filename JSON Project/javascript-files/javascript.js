let foods

// mainTable variables
let foodKeys
let foodCount = 0

// sorting variables
let sortAscendingOrder = true
let lastSortedColumn = "id"

window.onload = () => {
    let url = `json-files/foodJSON.json`

    fetch(url)
        .then(response => response.json())
        .then(jsonData => {
            foods = jsonData
            foodKeys = Object.keys(foods[0])

            sortOrder()

            displayMainTable()

            displayRow()
        })
}

function sortOrder(foodKey) {
    if (lastSortedColumn === foodKey) {
        sortAscendingOrder = !sortAscendingOrder
    }
    else {
        lastSortedColumn = foodKey
        sortAscendingOrder = true
    }

    if (sortAscendingOrder) {
        foods.sort((a, b) => a[foodKey] < b[foodKey] ? -1 : 1)
    }
    else {
        foods.sort((a, b) => a[foodKey] < b[foodKey] ? 1 : -1)
    }
    displayMainTable()
}


// function that displays the main JSON data onto a table
function displayMainTable() {
    let aToZSymbol = sortAscendingOrder === true ? " - (a-z)" : " - (z-a)"

    let htmlString = `<table><tr>`

    foodKeys.forEach(foodKey => {
        if (foodKey !== "nutrition-per-100g" && foodKey !== "nutrition-per-100ml") {
            htmlString += `<th onclick=sortOrder("${foodKey}")>${foodKey}${lastSortedColumn === foodKey ? aToZSymbol : ""}</th>`
        }
    })

    htmlString += `</tr>`

    foods.forEach(food => {
        foodCount++

        htmlString += `<tr>`
        foodKeys.forEach(foodKey => {
            if (foodKey !== "nutrition-per-100g" && foodKey !== "nutrition-per-100ml") {
                htmlString += `<td onclick="displayRow(${foodCount - 1})">${food[foodKey]}</td>`
            }

        })
        htmlString += `</tr>`
    })

    htmlString += `</table>`

    foodCount = 0

    document.getElementById("mainTable").innerHTML = htmlString
}

// function that will display the row that the user clicks with the help of the foodCount++ variable
function displayRow(foodPosition) {
    const food = foods[foodPosition];
    let nutritionKey = "nutrition-per-100g"

    // https://www.freecodecamp.org/news/how-to-check-if-a-property-exists-in-a-javascript-object/#:~:text=to%20do%20that.-,The%20hasOwnProperty()%20method%20will%20check%20if%20an%20object%20contains,properties%20from%20the%20prototype%20chain.
    if (food.hasOwnProperty("nutrition-per-100ml")) {
        nutritionKey = "nutrition-per-100ml"
    }
    const nutrition = food[nutritionKey]

    let htmlString = `<table>`

    htmlString += `<tr><th>Name</th>`
    Object.keys(nutrition).forEach(nutritionKey => {
        htmlString += `<th>${nutritionKey}</th>`
    })

    htmlString += `</tr>`

    htmlString += `<tr><td onclick="displayMainTable()">${food.name}</td>`
    // https://www.educative.io/answers/how-to-get-keys-values-and-entries-in-javascript-object
    // Instead of returning the keys inside the foods JSON, it will instead return the 'values' from the keys inside the foods JSON
    Object.values(nutrition).forEach(nutritionValue => {
        htmlString += `<td onclick="displayMainTable()">${nutritionValue}</td>`
    })

    htmlString += `</tr>`

    htmlString += `</table>`

    document.getElementById("mainTable").innerHTML = htmlString
}

function addFoodData() {
    let foodID = document.getElementById("foodID").value
    let foodName = document.getElementById("foodName").value
    let foodTags = document.getElementById("foodTags").value

    document.getElementById("foodID").value = ""
    document.getElementById("foodName").value = ""
    document.getElementById("foodTags").value = ""

    let newFood = {id: foodID, name: foodName, tags: foodTags}
    foods.push(newFood)

    displayMainTable()
}
