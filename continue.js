var numbers = [12, 23, 34, 45, 56, 67, 78, 89];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number < 50) {
        continue;
    }
    console.log(number)
}