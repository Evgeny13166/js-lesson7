
/*
1. Исправьте следующий код как минимум двумя способами

Фактический результат:

Индекс: 4, элемент: не определено
Индекс: 4, элемент: не определено
Индекс: 4, элемент: не определено
Индекс: 4, элемент: не определено


Ожидаемый результат:
Индекс: 0, элемент: 100
Индекс: 1, элемент: 101
Индекс: 2, элемент: 102
Индекс: 3, элемент: 103

*/
/*==============  №1 ============================ */

const numbers = [100, 101, 102, 103];

for (let i = 0; i < numbers.length; i++) {
    setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + numbers[i]);
    }, 1000);
}
/* ============ №2 ===============================*/

const numbers = [100, 101, 102, 103];

for (var i = 0; i < numbers.length; i++) {
    
    setTimeout(function(i) {
        return function(){
            console.log('Index: ' + i + ', element: ' + numbers[i]);
        }
    } (i), 1000); // объяснить(i)?
}

/*
2. Записать рекурсивную функцию в console.log () все значения в каждом вложенном объекте.
Здесь используется рекурсия для поддержки вложенных структур неограниченной длины

Ожидаемый результат (порядок здесь не имеет значения):

'Child_1'
'Child_2'
...
и т.п.

*/
/*
const items = [
    { 
        value: 'child_1',
        parents: [{
            value: 'parent_1',
            parents: [{
                value: 'grandparent_1',
                parents: [],
            }],
        },
        {
            value: 'parent_2',
            parents: [{
                value: 'grandparent_2',
                parents: [{
                    value: 'grandgrandparent_2',
                    parents: null,
                }],
            }],
        }],
    },
    { 
        value: 'child_2',
        parents: null,
    }
];
for (i = 0; i < items.length; i++) {
    let j = items[i].value;

}*/


/*3. Напишите функции для цепочки обещаний
    - getSum - суммирует два аргумента и разрешает результат за 2 секунды
    - double - умножает свой первый множитель на 2 и разрешает результат за 2 секунды.
    - factorial - вычисляет факториал агрумента и разрешает результат за 2 секунды
    - errorHandler - только console.error свой первый аргумент
*/



let i = 2;
let j = 1;

getSum(i, j)
    .then(function(respons){
        multiplication(respons);
    })
    .then()


    


function getSum (){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(i + j);
        },2000)
        

    })
}
function multiplication (sum){
    return new Promise (function(resolve, reject){
        if (sum == (i + j)){
            setTimeout(function(){
                resolve(sum * 2); //consol.log  работает
            }, 2000)
        }
    });
}

function factorial (multi){
    return new Promise (function(resolve, reject){
        if (multi == (sum * 2)){
            setTimeout(function(){
                resolve(function factorial1(multi){
                if (multi === 1){
                    return 1;
                }
                return multi * factorial(multi - 1);
                })  
            }, 2000);
        }else{
            reject("console.error");
        }
    });
}


