// Proof that for copying Arrays, JSON.parse(JSON.stringify) is not a good choice
// for a plain array with numbers, there is no difference, but for array of objects there is!

// just a little bit bigger unique object
var getUniqueJson = function (i) {
  return {
    some: 'json',
    'object': 'that is not just a number that is not just a number  that is not just a number ' + i,
    but: 'rather an object which contains',
    arr: [1, 3, i],
    b: {
      some: 'json',
      'object': 'that is not just a number ' + i,
      but: 'rather an object which contains',
      arr: [1, 3, i],
      fd: {
        some: 'json',
        'object': 'that is not just a number ' + i,
        but: 'rather an object which contains',
        arr: [1, 3, i]
      }
    },
    bb: {
      some: 'json',
      'object': 'that is not just a number ' + i,
      but: 'rather an object which contains',
      arr: [1, 3, i],
      b: {
        some: 'json',
        arr: [1, 3, i],
        fd: {
          some: 'json',
          'object': 'that is not just a number ' + i,
          but: 'rather an object which contains',
          arr: [1, 3, i]
        }
      },
      sdad: {
        some: 'json',
        'object': 'that is not just a number ' + i,
        but: 'rather an object which contains',
        arr: [1, 3, i],
        b: {
          some: 'json',
          arr: [1, 3, i],
          fd: {
            some: 'json',
            'object': 'that is not just a number ' + i,
            but: 'rather an object which contains',
            arr: [1, 3, i]
          }
        },
        asd: {
          some: 'json',
          'object': 'that is not just a number that is not just a number that is not just a number ' + i,
          but: 'rather an object which contains',
          arr: [1, 3, i],
          b: {
            some: 'json',
            arr: [1, 3, i],
            fd: {
              some: 'json',
              'object': 'that is not just a number ' + i,
              but: 'rather an object which contains',
              arr: [1, 3, i]
            }
          }
        }
      }
    }
  }
}

var createUniqueJsonArray = function (n) {
  var k = []
  for (var i = 0; i < n; i++) {
    k[i] = getUniqueJson(i)
  }
  return k
}

var copyArray = function (v) {
  var b = new Array(v.length)
  for (var i = 0; i < v.length; i++) {
    b[i] = v[i]
  }
}

var jsonCopy = function (v) {
  return JSON.parse(JSON.stringify(v))
}

var testArrayCopy = function (n) {
  var k = createUniqueJsonArray(n)
  var start = (new Date()).getTime()
  var c = copyArray(k)
  var end = (new Date()).getTime()
  console.error('Array ' + n + ': Time elapsed: ' + (end - start) + 'ms')
}

var testJsonCopy = function (n) {
  var k = createUniqueJsonArray(n)
  var start = (new Date()).getTime()
  var c = jsonCopy(k)
  var end = (new Date()).getTime()
  console.error('JSON ' + n + ': Time elapsed: ' + (end - start) + 'ms')
}

// TEST and never rest
console.log('\n')
testJsonCopy(10)
testArrayCopy(10)

console.log('\n')
testJsonCopy(100)
testArrayCopy(100)

console.log('\n')
testJsonCopy(1000)
testArrayCopy(1000)

console.log('\n')
testJsonCopy(100000)
testArrayCopy(100000)

console.log('\n')
testJsonCopy(1000000)
testArrayCopy(1000000)
console.log('\n')
