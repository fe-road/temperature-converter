/** VALIDATION **/
function validateUnit(unit) {
    return unit === "C" || unit === "F" || unit === "K";
}

function validateValueGivenUnit(value, unit) {
    if (unit === "C") {
        return value >= -273.15;
    } else if (unit === "F") {
        return value >= -459.67;
    } else if (unit === "K") {
        return value >= 0;
    }
    return false;
}


/** CONVERSION **/
function convertCelsiusTo(value, unit) {
    if (unit === "F") {
        return (value * 1.8) + 32;
    }
    if (unit === "K") {
        return value + 273.15;
    }
    return value;
}

function convertFahrenheitTo(value, unit) {
    if (unit === "C") {
        return (value - 32) / 1.8;
    }
    if (unit === "K") {
        return ((value - 32) / 1.8) + 273.15;
    }
    return value;
}

function convertKelvinTo(value, unit) {
    if (unit === "C") {
        return value - 273.15;
    }
    if (unit === "F") {
        return ((value - 273.15) * 1.8) + 32;
    }
    return value;
}


/** MAIN **/
function convertTemperature(value, unitFrom, unitTo) {
    const isUnitFromValid = validateUnit(unitFrom);
    const isUnitToValid = validateUnit(unitTo);
    if (!isUnitFromValid || !isUnitToValid) {
        return 'Invalid unit used, please check!';
    }

    const isValueValid = validateValueGivenUnit(value, unitFrom);
    if (!isValueValid) {
        return 'Invalid value for the unit asked, please check!';
    }

    switch (unitFrom) {
        case "C": 
            return convertCelsiusTo(value, unitTo);
        case "F":
            return convertFahrenheitTo(value, unitTo);
        case "K": 
            return convertKelvinTo(value, unitTo);
    }

    return value;
}

/** EXECUTION **/
console.log("=== Should give errors");
console.log(convertTemperature(-300, "C", "K"));
console.log(convertTemperature(-500, "F", "K"));
console.log(convertTemperature(-10, "K", "C"));

console.log(convertTemperature(10, "K", ""));
console.log(convertTemperature(10, "", "K"));
console.log(convertTemperature(10, "", ""));
console.log(convertTemperature(10, "N", "K"));
console.log(convertTemperature(10, "K", "N"));

console.log("=== Should give valid answers")
console.log(convertTemperature(40, "C", "F"));
console.log(convertTemperature(30, "C", "K"));

console.log(convertTemperature(80, "F", "C"));
console.log(convertTemperature(100, "F", "K"));

console.log(convertTemperature(350, "K", "C"));
console.log(convertTemperature(330, "K", "F"));