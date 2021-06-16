Polyfill is a piece of code that is use for , Broser should excute it natively. If its not availbale in browser then its a developer responsibilty to write custom funtion for that.


1> Foreach Natively

let employees=['emp1','emp2','emp3']
employees.forEach(function(employee) {
  console.log(employee)
 // emp1
  //emp2
  // emp3
})

-----Using Polyfills-----

Array.prototype.eachEmployee = function(callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this) // currentValue, index, array
  }
}
employees.eachEmployee(function(employee) {
  console.log(employee)
  // emp1
  //emp2
  // emp3
})


2. Map function
.map() is very much similar to .forEach() method, except that instead of returning items out of the array, it return the array itself.

ex-
  const mapThoseEmployees = employees.map(function(employee) {
  return employee
})

console.log(mapThoseEmployees)

// [
//   'emp1',
//   'emp2',
//   'emp3',
//   'emp4'
// ];


--------------Polyfill of Map--------------

Array.prototype.ourMap = function(callback) {
  var arr = [] // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
  }
  return arr // finally returning the array
}

const mapThoseEmployees = employees.ourMap(function(employee) {
  return employee
})

console.log(mapThoseEmployees)
// [
// 'emp1',
// 'emp2',
// 'emp3',
// 'emp4'
// ];



3> Filter function

.filter() is very much similar to map() function except it is used based on the context, where we decide what kind of items do we want in the resulting array.

var employees = [
  {
    name: 'emp1',
    age: 53,
  },
  { name: 'emp2', age: 45 },
  {
    name: 'emp3',
    age: 49,
  },
  { name: 'emp4', age: 56 },
]

employees.filter(employee => {
  return employee.age > 49
})
console.log(employees)

---------------polyfills--------------

Array.prototype.filterEmployees = function(callback, context) {
  arr = []
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}
employees.filterEmployees(function(employee) {
  return employee.age > 49 // providing the context here
})
console.log(employees)

// [
//{
   // name: 'emp1',
    //age: 53,
  },
 
  //{ name: 'emp4', age: 56 },
// ];

