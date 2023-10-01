let a = prompt('Введите число:')
let b = prompt('Введите второе число:')
let g = prompt('Введите второе число:')
if (g == '+') alert(+a + +b)
if (g == '-') alert(+a - +b)
if (g == '*') alert(+a * +b)
if (g == '/') alert(+a / +b)


// === cтрогое сравнение с учетом типов данных


let x = 14, y = 21

if (x == y) {
    console.log('Hello mir')
} else if (x != y) {
    console.log('Манера крутит мир ')
}


// && два амперсанда это and  || а вот это как or   ! логическое не


zindex = 15
switch (zindex) {
    case 15:
        console.log('zindex=15');
        break
    default:
        console.log('YYYYYY')
}


ghoul = 1000
while (ghoul> 0) {
    console.log(ghoul -= 7)
}