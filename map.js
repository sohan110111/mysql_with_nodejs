// this - array
// this[i] - current value
Array.prototype.myMap = function (cb) {
    var arr = []
    for (var i = 0; i < this.length; i++) {
      arr.push(cb(this[i], i, this))
    }
    return arr
  }
  
  const arr = [1, 2, 3]
  console.log(arr.myMap((a) => a * 2)) // [2, 4, 6]