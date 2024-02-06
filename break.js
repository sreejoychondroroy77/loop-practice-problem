// for (var i = 1; i <= 20; i++) {
//     console.log(i)
//     if (i > 10) {
//         break;
//     }
// }
// var roastGiven = 0;
// while (roastGiven < 10) {
//     console.log('dia jan doa krmu')
//     roastGiven++;
//     if (roastGiven > 4) {
//         break;
//     }
// }

var items = ['laptop', 'pen', 'mouse', 'keybord'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'mouse') {
        break
    }
    console.log(item)
}