function isArray(collection) {
    let arr 
    if (Array.isArray(collection)){
        arr = collection
    }
    else {
        arr = Object.values(collection)
    }
    return arr
}

function myEach(collection, callback){
    let arr = isArray(collection)
    for (let i=0; i< arr.length; i++){
        callback(arr[i])
    }
    return collection
}
function myMap(collection, callback) {
    let arr = isArray(collection)
    const secArr = []
    for (let i =0; i<arr.length; i++){
        secArr.push(callback(arr[i]))
    }
    return secArr
}
function myReduce(collection, callback, acc){
    let arr = isArray(collection)
    if (acc === undefined) {
        acc = arr[0]
        for (let i = 1; i<arr.length; i++){
            acc = callback(acc, arr[i], collection)
        }
    }
    else {
        for (let i=0; i<arr.length; i++){
            acc = callback(acc, arr[i], collection)
        }
    }
    return acc
}
function myFilter(col, pred){
    let arr = isArray(col)
    let secArr = []
    for (let i =0; i<arr.length; i++){
        if (pred(col[i])){
            secArr.push(col[i])
        }
    }
    return secArr
}
function mySize(col){
    let arr = isArray(col)
    return arr.length
}
function myFind(col, pred){
    let arr = isArray(col)
    let answer
    for (let i=0; i<arr.length; i++){
        if (pred(col[i])){
            answer = col[i]
            return answer
        }
    }
    return answer
}
function myFirst(arr, n){
    if (n===undefined){
        return arr[0]
    }
    else if (arr.length>1) {
        return arr.splice(0, n)
    }
}

function myLast(arr, n){
    let copy = arr.slice()
    if (n===undefined){
        return copy.pop()
    }
    else {
        return copy.slice(-n)
    }
}
function myKeys(obj) {
    let answer = Object.keys(obj)
    return answer
}
function myValues(obj) {
    let answer = Object.values(obj)
    return answer
}