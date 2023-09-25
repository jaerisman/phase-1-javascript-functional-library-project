const myEach = function(collection, callback){
    if (Array.isArray(collection)) {
        collection.forEach((element) => {
            callback(element);
        });
    } else if (typeof collection === 'object') {
        const values = Object.values(collection);
        values.forEach((element) => {
            callback(element);
        });
    }

    return collection;
};

const myMap = function(collection, callback){
    let newArray;
    
    if (Array.isArray(collection)) {
        newArray = collection.map((element) => {
            return callback(element);
        });
    } else if (typeof collection === 'object'){
        const values = Object.values(collection);
        newArray = values.map((element) => {
           return callback(element);
        });
    };
    return newArray;
};

const myReduce = function(collection, callback, acc){
    let start = acc;

    if (typeof start === 'undefined') {
        if (Array.isArray(collection)) {
            start = collection[0];
            collection = collection.slice(1);
        } else {
            const values = Object.values(collection);
            start = values[0];
            collection = Object.fromEntries(Object.entries(collection).slice(1));
        }
    }

    for (const value of Object.values(collection)) {
        start = callback(start, value, collection);;
    }

    return start;
};

const myFind = function(collection, predicate){
    for (let value of collection) {
        if(predicate(value) === true){
            return value;
        }
    }
    return undefined;
};

const myFilter = function(collection, predicate){
    let predicateArray = [];
    
    if (typeof collection === 'object'){
        for(let key in collection) {
            if (predicate(collection[key]) === true) {
                predicateArray.push(collection[key]);
            }
        }
    } else {
        for (let value of collection) {
            if(predicate(value) === true){
                predicateArray.push(value);
            };
        };
    };
    return predicateArray;
};

const mySize = function(collection){
    let arrayCount = 0;
    
    if (Array.isArray(collection)) {
        arrayCount = collection.length;
    } else if (typeof collection === 'object'){
        const values = Object.values(collection);
        arrayCount = values.length;
    }

    return arrayCount;
};

const myFirst = function(array, n){
    if(n){
        return array.slice(0, n);
    } else {
        return array[0]
    };
};

const myLast = function(array, n){
    if(n){
        return array.slice(array.length - n);
    } else {
        return array[array.length - 1];
    };
};

const mySortBy = function(array, callback){
    const sortedArray = [...array];
    
    return sortedArray.sort((a, b) => {
        const valueA = callback(a);
        const valueB = callback(b);
        if (valueA < valueB) {
            return -1;
        }
        if (valueA > valueB) {
            return 1;
        }
        return 0;
    });
};

const myFlatten = function (array, shallow = false){
    if (shallow) {
        const flattenedArray = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                flattenedArray.push(...element);
            } else {
                flattenedArray.push(element);
            }
        }
        return flattenedArray;
    } else {
        const flattenedArray = [];
        for (const element of array) {
            if (Array.isArray(element)) {
                flattenedArray.push(...myFlatten(element));
            } else {
                flattenedArray.push(element);
            }
        }
    return flattenedArray;
    }
};

const myKeys = function(object){
    const objectArray = [];
    const keys = Object.keys(object);
    keys.forEach((key) => {
        objectArray.push(key);
    });
    return objectArray;
};

const myValues = function(object){
    const objectArray = [];
    const values = Object.values(object);
    values.forEach((value) => {
        objectArray.push(value);
    });
    return objectArray;
};