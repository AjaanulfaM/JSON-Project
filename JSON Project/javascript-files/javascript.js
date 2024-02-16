let foods = [
    {
        "id": "coles-muslie-almond",
        "name": "Muesli (Almond)",
        "nutrition-per-100g": {
            "energy": 1560,
            "protein": 12.3,
            "fat": 9.9,
            "saturated-fat": 2.8,
            "carbohydrate": 51.7,
            "sugars": 19.7,
            "dietary-fibre": 13,
            "sodium": 6
        },
        "tags": ["grain", "carb"]
    },
    {
        "id": "coles-rolled-oats-wholegrain",
        "name": "Wholegrain Rolled Oats",
        "nutrition-per-100g": {
            "energy": 1680,
            "protein": 13.3,
            "fat": 9.8,
            "saturated-fat": 1.7,
            "carbohydrate": 60.3,
            "sugars": 1.2,
            "dietary-fibre": 0.0086,
            "sodium": 7,
            "potassium": 313
        },
        "tags": ["grain", "carb"]
    },
    {
        "id": "sanitarium-almond-milk",
        "name": "Almond Milk",
        "nutrition-per-100ml": {
            "energy": 130,
            "protein": 0.5,
            "fat": 1.2,
            "saturated-fat": 0.1,
            "trans-fat": 0,
            "polyunsaturated-fat": 0.3,
            "monounsaturated-fat": 0.8,
            "carbohydrate": 4.6,
            "sugars": 4.4,
            "dietary-fibre": 0.3,
            "sodium": 35,
            "potassium": 15,
            "calcium": 75,
            "vitamin-e": 0.4
        },
        "tags": ["snack"]
    },
    {
        "id": "coles-soy-milk-regular",
        "name": "Soy Milk",
        "nutrition-per-100ml": {
            "energy": 244,
            "protein": 3.1,
            "fat": 3.0,
            "saturated-fat": 0.2,
            "trans-fat": 0.2,
            "polyunsaturated-fat": 1,
            "monounsaturated-fat": 1.8,
            "carbohydrate": 4.7,
            "sugars": 1.6,
            "dietary-fibre": 0,
            "sodium": 47
        },
        "contains": [
            "canola-oil",
            "maltodextrin"
        ]
    },
    {
        "id": "simply-better-organic-tofu-plain-firm",
        "name": "Firm Tofu",
        "nutrition-per-100g": {
            "energy": 615,
            "protein": 15.9,
            "fat": 8.8,
            "saturated-fat": 2.7,
            "trans-fat": 0.1,
            "polyunsaturated-fat": 6.9,
            "monounsaturated-fat": 3.0,
            "carbohydrate": 0.3,
            "sugars": 0.3,
            "sodium": 17
        }
    },
    {
        "id": "sss-hummus-dip",
        "name": "Hummus",
        "nutrition-per-100g": {
            "energy": 709,
            "protein": 8.4,
            "fat": 10.8,
            "saturated-fat": 1.8,
            "dietary-fibre": 11,
            "carbohydrate": 4.6,
            "sugars": 0.6,
            "sodium": 378
        },
        "tags": ["legume", "snack"]
    },
    {
        "id": "coles-hummus-lite",
        "name": "Hummus (Lite)",
        "nutrition-per-100g": {
            "energy": 696,
            "protein": 5.0,
            "fat": 9.3,
            "saturated-fat": 1.0,
            "carbohydrate": 15.7,
            "sugars": 0.6,
            "sodium": 354
        },
        "tags": ["legume", "snack"]
    },
    {
        "id": "coles-hummus",
        "name": "Hummus",
        "nutrition-per-100g": {
            "energy": 1091,
            "protein": 5.6,
            "fat": 19.2,
            "saturated-fat": 2,
            "carbohydrate": 16.8,
            "sugars": 0.6,
            "sodium": 347
        },
        "tags": ["legume", "snack"]
    },
    {
        "id": "sanitarium-natural-peanut-butter-crunchy",
        "name": "Peanut Butter",
        "nutrition-per-100g": {
            "energy": 2580,
            "protein": 28,
            "fat": 50,
            "saturated-fat": 6,
            "trans-fat": 0,
            "polyunsaturated-fat": 5,
            "monounsaturated-fat": 39,
            "carbohydrate": 12,
            "sugars": 5.0,
            "dietary-fibre": 6,
            "sodium": 8,
            "potassium": 700,
            "vitamin-b3": 12,
            "magnesium": 150
        },
        "tags": ["snack", "nut"]
    },
    {
        "id": "macro-organic-peanut-butter-crunchy",
        "name": "Peanut Butter",
        "nutrition-per-100g": {
            "energy": 2670,
            "protein": 28.4,
            "fat": 50.9,
            "saturated-fat": 10.2,
            "trans-fat": 0.1,
            "polyunsaturated-fat": 15.9,
            "monounsaturated-fat": 22.7,
            "carbohydrate": 18,
            "sugars": 5.5,
            "sodium": 1
        },
        "tags": ["snack", "nut"]
    },
    {
        "id": "macro-organic-tahini-unhulled",
        "name": "Tahini",
        "nutrition-per-100g": {
            "energy": 2760,
            "protein": 25.6,
            "fat": 57.3,
            "saturated-fat": 8.3,
            "trans-fat": 0.1,
            "polyunsaturated-fat": 23.8,
            "monounsaturated-fat": 22.9,
            "carbohydrate": 12,
            "sugars": 1,
            "sodium": 7
        },
        "tags": ["seed"]
    },
    {
        "id": "coles-butter-beans-organic",
        "name": "Butter Beans",
        "nutrition-per-100g": {
            "energy": 384,
            "protein": 7.4,
            "fat": 0.9,
            "saturated-fat": 0.9,
            "carbohydrate": 15.2,
            "sugars": 0.9,
            "dietary-fibre": 7,
            "sodium": 300
        },
        "tags": ["legume"]
    },
    {
        "id": "coles-red-kidney-beans-organic",
        "name": "Kidney Beans",
        "nutrition-per-100g": {
            "energy": 370,
            "protein": 5.2,
            "fat": 0.4,
            "saturated-fat": 0.3,
            "carbohydrate": 16.1,
            "sugars": 0.7,
            "dietary-fibre": 7.3,
            "sodium": 268
        },
        "tags": ["legume"]
    },
    {
        "id": "coles-chick-peas-organic",
        "name": "Chickpeas",
        "nutrition-per-100g": {
            "energy": 391,
            "protein": 8,
            "fat": 0.5,
            "saturated-fat": 0.5,
            "carbohydrate": 15,
            "sugars": 1.2,
            "dietary-fibre": 7,
            "sodium": 295
        },
        "tags": ["legume"]
    },
    {
        "id": "coles-lentils",
        "name": "Lentils",
        "nutrition-per-100g": {
            "energy": 290,
            "protein": 4.2,
            "fat": 0.9,
            "saturated-fat": 0.1,
            "carbohydrate": 11.3,
            "sugars": 0.9,
            "dietary-fibre": 2.8,
            "sodium": 293
        },
        "tags": ["legume"]
    },
    {
        "id": "edgell-cannellini-beans",
        "name": "Cannellini Beans",
        "nutrition-per-100g": {
            "energy": 438,
            "protein": 7.4,
            "fat": 0.8,
            "saturated-fat": 0.1,
            "carbohydrate": 14,
            "sugars": 1,
            "dietary-fibre": 5.6,
            "sodium": 298
        },
        "tags": ["legume"]
    },
    {
        "id": "fruit-kiwifruit-fresh-raw",
        "name": "Kiwifruit",
        "nutrition-per-100g": {
            "energy": 61,
            "carbohydrate": 14.66,
            "sugars": 8.99,
            "dietary-fibre": 3.0,
            "fat": 0.52,
            "protein": 1.14
        },
        "tags": ["fruit"]
    },
    {
        "id": "fruit-apple-granny-smith-fresh-raw",
        "name": "Apple (Granny Smith)",
        "nutrition-per-100g": {
            "energy": 218,
            "carbohydrate": 13.81,
            "sugars": 10.39,
            "dietary-fibre": 2.4,
            "fat": 0.17,
            "protein": 0.26,
            "vitamin-b1": 0.017,
            "vitamin-b2": 0.026,
            "vitamin-b3": 0.091,
            "vitamin-b5": 0.061,
            "vitamin-b6": 0.041,
            "vitamin-b9": 0.003,
            "vitamin-c": 4.6,
            "calcium": 6,
            "iron": 0.12,
            "magnesium": 5,
            "phosphorus": 11,
            "potassium": 107,
            "zinc": 0.04
        },
        "tags": ["fruit"]
    },
    {
        "id": "fruit-apple-pink-lady-fresh-raw",
        "name": "Apple (Pink Lady)",
        "nutrition-per-100g": {
            "energy": 218,
            "carbohydrate": 13.81,
            "sugars": 10.39,
            "dietary-fibre": 2.4,
            "fat": 0.17,
            "protein": 0.26
        },
        "tags": ["fruit"]
    },
    {
        "id": "fruit-banana-fresh-raw",
        "name": "Banana",
        "nutrition-per-100g": {
            "energy": 371,
            "carbohydrate": 22.84,
            "sugars": 12.23,
            "dietary-fibre": 2.6,
            "fat": 0.33,
            "protein": 1.09,
            "vitamin-b6": 0.4,
            "vitamin-c": 8.7,
            "manganese": 0.3
        },
        "tags": ["fruit"]
    },
    {
        "id": "fruit-orange-navel-fresh-raw",
        "name": "Navel Orange",
        "nutrition-per-100g": {
            "energy": 192,
            "carbohydrate": 11.75,
            "sugars": 9.35,
            "dietary-fibre": 2.4,
            "fat": 0.12,
            "protein": 0.94,
            "vitamin-c": 53.2
        },
        "tags": ["fruit"]
    },
    {
        "id": "fruit-avocado-fresh",
        "name": "Avocado",
        "nutrition-per-100g": {
            "energy": 670,
            "carbohydrate": 8.53,
            "sugars": 0.66,
            "dietary-fibre": 6.7,
            "fat": 14.66,
            "saturated-fat": 2.13,
            "monounsaturated-fat": 9.8,
            "polyunsaturated-fat": 1.82,
            "protein": 2,
            "vitamin-b2": 0.13,
            "vitamin-b3": 1.738,
            "vitamin-b5": 1.389,
            "vitamin-b6": 0.257,
            "vitamin-b9": 0.081,
            "vitamin-c": 10,
            "vitamin-e": 2.07,
            "vitamin-k": 21,
            "potassium": 485
        },
        "tags": ["vegetable", "superfood"]
    },
    {
        "id": "veg-broccoli-fresh",
        "name": "Broccoli",
        "nutrition-per-100g": {
            "energy": 141,
            "carbohydrate": 6.64,
            "sugars": 1.7,
            "dietary-fibre": 2.6,
            "fat": 0.37,
            "protein": 2.82,
            "vitamin-b1": 0.071,
            "vitamin-b5": 0.573,
            "vitamin-b6": 0.175,
            "vitamin-b9": 0.063,
            "vitamin-c": 89.2,
            "vitamin-k": 101.6,
            "manganese": 0.21
        },
        "tags": ["vegetable", "leafy green vegetable"]
    },
    {
        "id": "veg-spinach-fresh",
        "name": "Spinach",
        "nutrition-per-100g": {
            "energy": 97,
            "carbohydrate": 3.6,
            "sugars": 0.4,
            "dietary-fibre": 2.2,
            "fat": 0.4,
            "protein": 2.9,
            "vitamin-a": 469,
            "vitamin-b2": 0.189,
            "vitamin-b6": 0.195,
            "vitamin-b9": 0.194,
            "vitamin-c": 28,
            "vitamin-e": 2,
            "vitamin-k": 483,
            "calcium": 99,
            "iron": 2.7,
            "magnesium": 79,
            "manganese": 0.897,
            "potassium": 558
        },
        "tags": ["vegetable", "leafy green vegetable", "superfood"]
    },
    {
        "id": "veg-baby-spinach-leaves-fresh",
        "name": "Baby Spinach",
        "nutrition-per-100g": {
            "energy": 97,
            "carbohydrate": 3.6,
            "sugars": 0.4,
            "dietary-fibre": 2.2,
            "fat": 0.4,
            "protein": 2.9,
            "vitamin-a": 469,
            "vitamin-b2": 0.189,
            "vitamin-b6": 0.195,
            "vitamin-b9": 0.194,
            "vitamin-c": 28,
            "vitamin-e": 2,
            "vitamin-k": 483,
            "calcium": 99,
            "iron": 2.7,
            "magnesium": 79,
            "manganese": 0.897,
            "potassium": 558
        },
        "tags": ["vegetable", "leafy green vegetable"]
    },
    {
        "id": "veg-bok-choy-fresh",
        "name": "Bok Choy",
        "nutrition-per-100g": {
            "energy": 54,
            "carbohydrate": 2.2,
            "dietary-fibre": 1,
            "fat": 0.2,
            "protein": 1.5,
            "vitamin-a": 243,
            "vitamin-c": 45,
            "calcium": 105
        },
        "tags": ["vegetable", "leafy green vegetable"]
    },
    {
        "id": "veg-brussels-sprout-raw",
        "name": "Brussels Sprouts",
        "nutrition-per-100g": {
            "energy": 179,
            "carbohydrate": 8.95,
            "sugars": 2.2,
            "dietary-fibre": 3.8,
            "fat": 0.3,
            "protein": 3.38,
            "vitamin-b1": 0.139,
            "vitamin-b6": 0.219,
            "vitamin-c": 85,
            "vitamin-k": 177,
            "iron": 1.4,
            "manganese": 0.337,
            "phosphorus": 69
        },
        "tags": ["vegetable", "leafy green vegetable"]
    },
    {
        "id": "veg-sweet-potato-fresh",
        "name": "Sweet Potato",
        "nutrition-per-100g": {
            "energy": 359,
            "carbohydrate": 20.1,
            "sugars": 4.2,
            "starch": 12.7,
            "dietary-fibre": 3,
            "fat": 0.1,
            "protein": 1.6,
            "vitamin-a": 709,
            "vitamin-b5": 0.8,
            "vitamin-b6": 0.209,
            "manganese": 0.258
        },
        "tags": ["vegetable", "superfood"]
    },
    {
        "id": "veg-eggplant-fresh",
        "name": "Eggplant",
        "nutrition-per-100g": {
            "energy": 104,
            "carbohydrate": 5.88,
            "sugars": 3.53,
            "dietary-fibre": 3,
            "fat": 0.18,
            "protein": 0.98,
            "manganese": 0.232
        },
        "tags": ["vegetable"]
    },
    {
        "id": "veg-mushrooms-cup-fresh",
        "name": "Cup Mushrooms",
        "nutrition-per-100g": {
            "energy": 113,
            "carbohydrate": 4.1,
            "fat": 0.1,
            "protein": 2.5,
            "vitamin-b2": 0.5,
            "vitamin-b3": 3.8,
            "vitamin-b5": 1.5,
            "phosphorus": 120,
            "potassium": 448,
            "zinc": 1.1
        },
        "tags": ["vegetable"]
    },
    {
        "id": "veg-cucumber-continental-fresh",
        "name": "Cucumber",
        "nutrition-per-100g": {
            "energy": 65,
            "carbohydrate": 3.63,
            "sugars": 1.67,
            "dietary-fibre": 0.5,
            "fat": 0.11,
            "protein": 0.65,
            "vitamin-k": 16.4
        },
        "tags": ["vegetable"]
    },
    {
        "id": "veg-capsicum-red-fresh",
        "name": "Red Capcicum",
        "nutrition-per-100g": {
            "energy": 84,
            "carbohydrate": 4.64,
            "sugars": 2.4,
            "dietary-fibre": 1.7,
            "fat": 0.17,
            "protein": 0.86,
            "vitamin-b6": 0.224,
            "vitamin-c": 80.4
        },
        "tags": ["vegetable"]
    },
    {
        "id": "coles-dried-apricots",
        "name": "Dried Apricots",
        "nutrition-per-100g": {
            "energy": 1130,
            "protein": 2.8,
            "fat": 1.0,
            "saturated-fat": 0.2,
            "carbohydrate": 58.2,
            "sugars": 45,
            "dietary-fibre": 7.5,
            "sodium": 0.35
        },
        "tags": ["fruit"]
    },
    {
        "id": "coles-almonds-natural",
        "name": "Almonds",
        "nutrition-per-100g": {
            "energy": 2575,
            "protein": 24.1,
            "fat": 53.5,
            "saturated-fat": 3.1,
            "trans-fat": 0.1,
            "polyunsaturated-fat": 12.3,
            "monounsaturated-fat": 38.1,
            "carbohydrate": 6.2,
            "sugars": 3.4,
            "dietary-fibre": 10,
            "sodium": 4.5,
            "vitamin-e": 26.7
        },
        "tags": ["nut", "superfood"]
    },
    {
        "id": "coles-walnuts-natural-californian",
        "name": "Walnuts",
        "nutrition-per-100g": {
            "energy": 2938,
            "protein": 15.9,
            "fat": 69.2,
            "saturated-fat": 7.4,
            "trans-fat": 0.1,
            "polyunsaturated-fat": 52.2,
            "monounsaturated-fat": 9.5,
            "carbohydrate": 4.3,
            "sugars": 2.6,
            "sodium": 0.8,
            "magnesium": 180
        },
        "tags": ["nut"]
    },
    {
        "id": "coles-cashews-salted",
        "name": "Cashews",
        "nutrition-per-100g": {
            "energy": 2530,
            "protein": 19.6,
            "fat": 48.8,
            "saturated-fat": 9,
            "carbohydrate": 20,
            "sugars": 6.7,
            "sodium": 300
        },
        "tags": ["nut"]
    },
    {
        "id": "coles-flaxseed",
        "name": "Flaseed",
        "nutrition-per-100g": {
            "energy": 1900,
            "protein": 18,
            "fat": 34,
            "saturated-fat": 3.2,
            "omega-3-fatty-acid": 20.2,
            "carbohydrate": 20,
            "sugars": 2.0,
            "dietary-fibre": 27.3,
            "sodium": 66
        },
        "tags": ["seed"]
    },
    {
        "id": "seed-pumpkin-dried",
        "name": "Pumpkin Seeds",
        "nutrition-per-100g": {
            "energy": 721,
            "protein": 30.23,
            "fat": 49.05,
            "saturated-fat": 8.659,
            "monounsaturated-fat": 16.242,
            "polyunsaturated-fat": 20.976,
            "carbohydrate": 10.71,
            "dietary-fibre": 6,
            "sugars": 1.40,
            "calcium": 46,
            "iron": 8.82,
            "magnesium": 592,
            "phosphorus": 1233,
            "potassium": 809,
            "sodium": 7,
            "zinc": 7.81
        },
        "tags": ["seed"]
    },
    {
        "id": "mission-wraps-wholegrain",
        "name": "Wholegrain Wraps",
        "nutrition-per-100g": {
            "energy": 1330,
            "protein": 8.5,
            "fat": 9.4,
            "saturated-fat": 4.5,
            "trans-fat": 0.1,
            "polyunsaturated-fat": 1.4,
            "monounsaturated-fat": 3.5,
            "carbohydrate": 46.9,
            "sugars": 5.2,
            "dietary-fibre": 4.6,
            "sodium": 960
        },
        "tags": ["carb", "bread"]
    },
    {
        "id": "sanremo-wholegrain-pasta",
        "name": "Wholegrain Pasta",
        "nutrition-per-100g": {
            "energy": 1390,
            "protein": 13,
            "fat": 2.5,
            "saturated-fat": 1.2,
            "carbohydrate": 57,
            "sugars": 1.8,
            "dietary-fibre": 13,
            "sodium": 30
        },
        "tags": ["carb", "bread"]
    },
    {
        "id": "sunrice-brown-rice-uncooked",
        "name": "Brown Rice",
        "nutrition-per-100g": {
            "energy": 1490,
            "protein": 7.6,
            "fat": 2.6,
            "saturated-fat": 0.6,
            "polyunsaturated-fat": 1,
            "monounsaturated-fat": 1,
            "carbohydrate": 72.5,
            "sugars": 1,
            "dietary-fibre": 3.9,
            "sodium": 5,
            "potassium": 266,
            "vitamin-b1": 0.4,
            "vitamin-b3": 6.4,
            "magnesium": 111
        },
        "tags": ["carb", "grain"]
    },
    {
        "id": "pureharvest-organic-rice-cakes",
        "name": "Rice Cakes",
        "nutrition-per-100g": {
            "energy": 1620,
            "protein": 7.9,
            "fat": 3.2,
            "saturated-fat": 0.9,
            "trans-fat": 0,
            "polyunsaturated-fat": 1.1,
            "monounsaturated-fat": 1.2,
            "carbohydrate": 79.1,
            "sugars": 0.5,
            "dietary-fibre": 3.1,
            "sodium": 222,
            "calcium": 13
        },
        "tags": ["carb", "snack"]
    },
    {
        "id": "arnotts-vita-wheat-rice-crackers-multigrain",
        "name": "Rice Crackers",
        "nutrition-per-100g": {
            "energy": 1960,
            "protein": 8.8,
            "fat": 12.8,
            "saturated-fat": 1.7,
            "trans-fat": 0.3,
            "carbohydrate": 77,
            "sugars": 0.6,
            "dietary-fibre": 3
        },
        "tags": ["carb", "snack"]
    },
    {
        "id": "supl-protein-pea-rice-mi",
        "name": "Rice+Pea Protein Powder",
        "nutrition-per-100g": {
            "energy": 1490.5,
            "protein": 81.65,
            "carbohydrate": 3.8,
            "fat": 1.05
        },
        "tags": ["supplement"]
    },
    {
        "id": "sweet-william-choc-original",
        "name": "Sweet William Chocolate",
        "nutrition-per-100g": {
            "energy": 2160,
            "protein": 7.9,
            "fat": 31,
            "saturated-fat": 16.1,
            "trans-fat": 0,
            "polyunsaturated-fat": 3.3,
            "monounsaturated-fat": 9.9,
            "carbohydrate": 55.8,
            "sugars": 42.4,
            "dietary-fibre": 6,
            "sodium": 5.4
        },
        "tags": ["snack", "carb"]
    },
    {
        "id": "red-rock-chips-chilli-salt",
        "name": "Chips (Chilli & Sea Salt)",
        "nutrition-per-100g": {
            "energy": 2050,
            "protein": 7.9,
            "fat": 23.4,
            "saturated-fat": 3.2,
            "trans-fat": 0.1,
            "polyunsaturated-fat": 1.7,
            "monounsaturated-fat": 18.4,
            "carbohydrate": 62,
            "sugars": 2.4,
            "dietary-fibre": 4,
            "sodium": 579,
            "potassium": 1220
        },
        "tags": ["snack", "carb"]
    }
]

// sorting variables
let sortAscendingOrder = true
let lastSortedColumn = "id"


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

// mainTable variables
let foodKeys = Object.keys(foods[0])
let foodCount = 0

// function that displays the main JSON data onto a table
function displayMainTable() {
    let aToZSymbol = sortAscendingOrder === true ? " a-z" : " z-a"

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

    document.getElementById("mainTable").innerHTML = htmlString
}

// function that will display the row that the user clicks with the help of the foodCount++ variable
function displayRow(foodPosition) {
    let htmlString = `<table><tr>`

    foodKeys.forEach(foodKey => htmlString += `<th>${foodKey}</th>`)
    htmlString += `</tr>`

    htmlString += `<tr>`
    foodKeys.forEach(foodKey => htmlString += `<td>${foods[foodPosition][foodKey]}</td>`)
    htmlString += `</tr>`

    htmlString += `</table>`

    htmlString += `<div id="reloadTableButton">
                    <button onclick="reloadTable()">Reset</button>
                   </div>`

    document.getElementById("mainTable").innerHTML = htmlString
}

// function that reloads the actual web page in order to load the main table again (temporary)
// https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript#:~:text=To%20reload%20a%20page%20using%20JavaScript%2C%20use%3A%20window.&text=If%20you%20put-,window.,reload(true)%3B
function reloadTable() {
    location.reload()
}

// searchbar variables
let searchValue = ""

function search(stringValue) {
    searchValue = stringValue
    displayMainTable()
}

// food tag checkbox variables
// https://www.w3schools.com/jsref/jsref_from.asp for Array.from()
// let foodTags = foods.map(food => food.tags)
// let uniqueTags = [...new Set(foodTags)]

// function that displays the checkboxes for the food tags
// function displayTagCheckboxes() {
//     let tagCheckboxes = uniqueTags

//     let htmlString = ""
//     tagCheckboxes.forEach(tagCheckbox => htmlString += `<label>${tagCheckbox}</label> <input type="checkbox" id="${tagCheckbox}" onclick="displayMainTable()"></input>`)

//     document.getElementById("tagCheckboxes").innerHTML = htmlString
// }
