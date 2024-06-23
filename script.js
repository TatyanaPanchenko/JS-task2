// Задание 1

let country = 'Sweden'
let access
country == 'Sweden' ? (access = true) : (access = false)
console.log(access)

//Задание 2
let num = 10
let num1 = num
for (i = 0; i < num1; i++) {
  num += 1
}
console.log(num)

// Задание 3
for (let i = 0; i < 10; i += 2) {
  let num = +prompt('Введите число:')
  if (num === 10) {
    console.log('Равно 10')
  } else {
    console.log('Не равно 10')
  }
}

// Задание 4
for (let i = 0; i < 100; i++) {
  console.log(i ** 2)
}
//Задание 4**
let n = +prompt('Введите количество выводимых чисел:')
for (let i = 0; i < n; i++) {
  console.log(i ** 2)
}

// Задание 5
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('FizzBuzz')
  } else if (i % 3 == 0) {
    console.log('Fizz')
  } else if (i % 5 == 0) {
    console.log('Buzz')
  } else {
    console.log(i)
  }
}

// Задание 6
let i = 0
while (i < 3) {
  alert(`number ${i}!`)
  i += 1
}

// Задание 7
function getSquares(min, max) {
  for (let i = min; i <= max; i++) {
    let result = i ** 2
    console.log(result)
  }
}
getSquares(2, 7)

// Задание 8
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

function getRandomRGB() {
  let result = `rgb(${getRandomInteger(0, 255)},
  ${getRandomInteger(0, 255)},
  ${getRandomInteger(0, 255)})`
  return result
}
console.log(getRandomRGB())

// Задание 9
function getNumberInfo(n) {
  for (i = 1; i <= n; i += 0.5) {
    if ((i * 10) % 10 == 0) {
      console.log(i + ' integer')
    } else {
      console.log(i + ' decimal')
    }
  }
}
getNumberInfo(20)

// Задание 10
function calcPrice(day) {
  let rent = 40
  let cost
  if (day >= 7) {
    cost = rent * day - 50
  } else if (day >= 3) {
    cost = rent * day - 20
  } else {
    cost = rent * day
  }
  return cost
}
console.log(calcPrice(10))
