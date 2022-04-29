// capitalise keys
function capitaliseKeys(input) {
    // ({ a: 1, b: 2, c: 3 })
    for (var key in input) {
        if (input.hasOwnProperty(key)) {
            input[key.toUpperCase()] = input[key];
            delete input[key]


        }
    }
    return input;
}
console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }));

// String to object

function stringToObject(input) {
    var objectArray = input.split(",");
    var object = {};
    objectArray.map(item => {
        let keyValuePair = item.split(":");
        return object[keyValuePair[0]] = keyValuePair[1]

    })
    return object

}
console.log(stringToObject("one:-1,two:hi there,three:what's that?"));

// Going Shopping

function shoppingList(input) {
    var objectArray = input.split(",");
    var object = {};
    objectArray.map(item => {
        let keyValuePair = item.trim().split(" ");
        return object[keyValuePair[1]] = parseInt(keyValuePair[0])
    })
    return object

}
console.log(shoppingList("2 tomatoes, 1 egg, 3 pumpkins"));

// Map object

function mapObject(obj, fn) {
    return Object.fromEntries(
        Object.entries(obj).map(
            ([k, v], i) => [k, fn(v, k, i)]
        )
    )

}
console.log(mapObject({ greeting: 'hi there, ', goodbye: 'see you later, ' }, (s) => s + 'Yvonne'));


