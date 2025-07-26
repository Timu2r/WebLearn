export const tasks = {
  2.1: [
    {
      id: '2.1.1',
      title: 'Внешний скрипт',
      description:
        'Создайте два файла: `index.html` и `script.js`. В `index.html` подключите `script.js` и выведите в консоль сообщение "Я учу JavaScript!".',
      solution: {
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <title>Задача 2.1</title>
          </head>
          <body>
            <script src="script.js"></script>
          </body>
          </html>
        `,
        js: `
console.log('Я учу JavaScript!');
        `,
      },
      solutionType: 'CodeRunner',
    },
  ],
  2.2: [
    {
      id: '2.2.1',
      title: 'Точка с запятой',
      description:
        'Что выведет этот код?`console.log(1);[1, 2].forEach(console.log)`',
      solution: {
        js: `
console.log(1);
[1, 2].forEach(console.log);
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.3: [
    {
      id: '2.3.1',
      title: 'Строгий режим',
      description:
        'Будет ли работать этот код в строгом режиме?`"use strict";\\nnum = 5;`',
      solution: {
        js: `
// Нет, будет ошибка, так как переменная num не объявлена.
// console.log("Ошибка: num is not defined");
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.4: [
    {
      id: '2.4.1',
      title: 'Работа с переменными',
      description:
        'Создайте две переменные: `admin` и `name`. Запишите в `name` значение "Джон". Скопируйте значение из `name` в `admin`. Выведите `admin` в консоль.',
      solution: {
        js: `
let admin;
let name;
name = 'Джон';
admin = name;
console.log(admin);
        `,
      },
      solutionType: 'CodeJs',
    },
    {
      id: '2.4.2',
      title: 'Придумайте правильные имена',
      description:
        'Создайте переменную для хранения имени нашей планеты. Как бы вы назвали такую переменную?',
      solution: {
        js: `
let ourPlanetName = "Земля";
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.5: [
    {
      id: '2.5.1',
      title: 'Типы данных',
      description:
        'Какой результат будет у этого кода?\\n`let name = "Ilya";`\\n`console.log( `hello ${1}` );`\\n`console.log( `hello ${"name"}` );`\\n`console.log( `hello ${name}` );`',
      solution: {
        js: `
console.log(\`hello \${1}\`); // hello 1
console.log(\`hello \${"name"}\`); // hello name
console.log(\`hello \${name}\`); // hello Ilya
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.6: [
    {
      id: '2.6.1',
      title: 'Взаимодействие с пользователем',
      description:
        'Создайте страницу, которая запрашивает имя пользователя с помощью `prompt()` и выводит его в консоль.',
      solution: {
        js: `
// В реальном приложении используйте модальные окна вместо prompt()
// let name = prompt("Ваше имя?", "");
// console.log(name);
console.log("Для этой задачи используйте prompt в браузере.");
        `,
      },
      solutionType: 'CodeJs',
    },
  ],
  2.7: [
    {
      id: '2.7.1',
      title: 'Преобразование типов',
      description:
        'Определите результат преобразования типов для следующих выражений JavaScript. Запишите ожидаемый результат для каждого выражения:`"" + 1 + 0`\\n`"" - 1 + 0`\\n`true + false`\\n`6 / "3"`\\n`"2" * "3"`\\n`4 + 5 + "px"`\\n`"$" + 4 + 5`\\n`"4" - 2`\\n`"4px" - 2`\\n`7 / 0`\\n`"   -9   " + 5`\\n`"   -9   " - 5`\\n`null + 1`\\n`undefined + 1`\\n`" \\t \\n" - 2`',
      solution: {
        js: `
// Ожидаемые результаты:
// "" + 1 + 0 => "10" (строка)
// "" - 1 + 0 => -1 (число)
// true + false => 1 (число)
// 6 / "3" => 2 (число)
// "2" * "3" => 6 (число)
// 4 + 5 + "px" => "9px" (строка)
// "$" + 4 + 5 => "$45" (строка)
// "4" - 2 => 2 (число)
// "4px" - 2 => NaN (Not a Number)
// 7 / 0 => Infinity (бесконечность)
// "   -9   " + 5 => "   -9   5" (строка)
// "   -9   " - 5 => -14 (число)
// null + 1 => 1 (число)
// undefined + 1 => NaN (Not a Number)
// " \\t \\n" - 2 => -2 (число)
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.8: [
    {
      id: '2.8.1',
      title: 'Постфиксная и префиксная формы',
      description:
        'Чему будут равны переменные a, b, c и d в примере ниже?\\n`let a = 1, b = 1;`\\n`let c = ++a;`\\n`let d = b++;`',
      solution: {
        js: `
let a = 1, b = 1;
let c = ++a; // a становится 2, c становится 2
let d = b++; // d становится 1, b становится 2
console.log(\`a: \${a}, b: \${b}, c: \${c}, d: \${d}\`); // a: 2, b: 2, c: 2, d: 1
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.9: [
    {
      id: '2.9.1',
      title: 'Операторы сравнения',
      description:
        'Какой будет результат у выражений?`5 > 4`\\n`"ананас" > "яблоко"`\\n`"2" > "12"`\\n`undefined == null`\\n`undefined === null`\\n`null == "0"`\\n`null === +"0"`',
      solution: {
        js: `
console.log(5 > 4); // true
console.log("ананас" > "яблоко"); // false
console.log("2" > "12"); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "0"); // false
console.log(null === +"0"); // false
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  '2.10': [
    {
      id: '2.10.1',
      title: 'if...else',
      description:
        'Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.',
      solution: {
        js: `
if (age >= 14 && age <= 90) {
// ... ваш код
          }
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.11: [
    {
      id: '2.11.1',
      title: 'Логические операторы',
      description:
        'Что выведет код ниже?`console.log( null || 2 || undefined );`',
      solution: {
        js: `
console.log(null || 2 || undefined); // 2
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.12: [
    {
      id: '2.12.1',
      title: 'Оператор нулевого слияния',
      description:
        'Что выведет этот код?`let height = 0;`\\n`console.log(height ?? 100);`',
      solution: {
        js: `
let height = 0;
console.log(height ?? 100); // 0
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.13: [
    {
      id: '2.13.1',
      title: 'Цикл for',
      description: 'Выведите в консоль чётные числа от 2 до 10.',
      solution: {
        js: `
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
          }
        }
        `,
      },
      solutionType: 'CodeJs',
    },
  ],
  2.14: [
    {
      id: '2.14.1',
      title: 'switch',
      description:
        'Перепишите код с использованием `switch`. Используйте `console.log()` вместо `alert()` для вывода результатов:`let a = +prompt("a?", "");`\\n`if (a == 0) {`\\n`  console.log(0);`\\n`}`\\n`if (a == 1) {`\\n`  console.log(1);`\\n`}`\\n`if (a == 2 || a == 3) {`\\n`  console.log("2,3");`\\n`}`',
      solution: {
        js: `
let a = +prompt("a?", "");
switch (a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3');
    break;
}
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.15: [
    {
      id: '2.15.1',
      title: 'Функции',
      description:
        'Напишите функцию `min(a, b)`, которая возвращает меньшее из чисел a и b.',
      solution: {
        js: `
function min(a, b) {
  return a < b ? a : b;
          }
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.16: [
    {
      id: '2.16.1',
      title: 'Function Expression',
      description:
        'Перепишите функцию, используя Function Expression: `function ask(question, yes, no) { if (confirm(question)) yes(); else no(); }`',
      solution: {
        js: `
let ask = function(question, yes, no) {
  if (confirm(question)) yes();
  else no();
          }
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.17: [
    {
      id: '2.17.1',
      title: 'Стрелочные функции',
      description:
        'Замените Function Expression стрелочной функцией: `function ask(question, yes, no) { if (confirm(question)) yes(); else no(); }`',
      solution: {
        js: `
let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
}
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  2.18: [
    {
      id: '2.18.1',
      title: 'Особенности JavaScript',
      description: 'Что выведет этот код?`console.log( 1 && null && 2 );`',
      solution: {
        js: `
console.log(1 && null && 2); // null
        `,
      },
      solutionType: 'CodeNote',
    },
  ],
  3.1: [
    {
      id: '3.1.1',
      title: 'Панель "Sources"',
      description:
        'Откройте инструменты разработчика в Chrome (F12). Перейдите на панель "Sources". С помощью "File Navigator" найдите и откройте любой JavaScript-файл, подключенный к странице (например, `hello.js` из тестовой страницы). Опишите три основные зоны панели "Sources".',
      solution: {
        js: `
1. File Navigator (панель для навигации файлов): Здесь отображаются все файлы, используемые страницей (HTML, CSS, JS, изображения).
2. Code Editor (редактор кода): Отображает исходный код выбранного файла.
3. JavaScript Debugging (панель отладки JavaScript): Содержит инструменты для отладки, такие как Watch, Call Stack, Scope, и кнопки пошагового выполнения.`,
      },
      solutionType: 'CodeNote',
    },
    {
      id: '3.1.2',
      title: 'Использование консоли',
      description:
        'Откройте консоль в Инструментах разработчика (Esc). Введите в консоли `25 * 4`. Какой результат вы получили? Затем вызовите функцию, которая ничего не возвращает (например, `hello("test")`, если она доступна). Что консоль вывела в ответ и почему?',
      solution: {
        js: `
- Ввод \`25 * 4\` выведет \`100\`.
- Вызов функции, которая не возвращает никакого значения (например, \`hello("test")\` или любая функция, в конце которой нет \`return\`), выведет \`undefined\`. Это происходит потому, что JavaScript по умолчанию возвращает \`undefined\` из функции, если она явно не возвращает что-либо другое.`,
      },
      solutionType: 'CodeNote',
    },
  ],
  3.2: [
    {
      id: '3.2.1',
      title: 'Исправьте стиль кода',
      description:
        'Проанализируйте следующий фрагмент JavaScript кода. Какие недостатки вы видите в его стиле написания?',
      solution: {
        js: `
function pow(x,n){
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",'');
let n=prompt("n?",'');

if (n<=0){
  alert(\`Степень \${n} не поддерживается, введите целую степень, большую 0\`);
} else {
  alert(pow(x,n));
}`,
      },
      solutionType: 'CodeNote',
    },
  ],

  3.5: [
    {
      id: '3.5.1', // Note: This ID is duplicated with 3.2.1, consider changing to 3.5.1 if it's a distinct task.
      title: 'Проблемы с тестированием функции pow',
      description:
        'Что не так с этим тестом функции pow? Почему лучше разбивать тесты на отдельные блоки it?',
      solution: {
        js: `
Проблема теста в том, что он объединяет три проверки в одном блоке it. Это плохая практика, потому что:

1. Если тест упадёт, будет сложно определить, какая именно проверка не прошла.
2. Невозможно запустить отдельную проверку изолированно.
3. Меньшая информативность при падении теста.

Лучше разбить тест на отдельные блоки it:

describe("Возводит x в степень n", function() {
  it("5 в степени 1 будет 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  it("5 в степени 2 будет 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 в степени 3 будет 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});

Такой подход:
- Делает тесты более читаемыми.
- Позволяет точно определить, какая проверка не прошла.
- Даёт возможность запускать отдельные тесты с помощью it.only.`,
      },
      solutionType: 'CodeNote',
    },
  ],

  4.1: [
    {
      id: '4.1.1',
      title: 'Операции с объектами',
      description:
        `Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.`,
      solution: {
        js: `
let user = {}; // Создайте пустой объект user.
user.name = "John"; // Добавьте свойство name со значением John.
user.surname = "Smith"; // Добавьте свойство surname со значением Smith.
user.name = "Pete"; // Измените значение свойства name на Pete.
delete user.name; // Удалите свойство name из объекта.
console.log(user); // Для проверки, что осталось в объекте
        `,
      },
      solutionType: 'CodeJs',
    },
  ],

    4.4: [
    {
      id: '4.4.1',
      title: 'Операции с объектами',
      description:
        `Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.`,
      solution: {
        js: `
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
        `,
      },
      solutionType: 'CodeJs',
    },
  ],

      4.5: [
    {
      id: '4.5.1',
      title: 'Операции с объектами',
      description:
        `Создайте функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:`,
      solution: {
        js: `
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('Сколько нужно добавить?', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
        `,
      },
      solutionType: 'CodeJs',
    },
        {
      id: '4.5.2',
      title: 'Операции с объектами',
      description:
        `Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму этих свойств.
mul() возвращает произведение этих свойств.`,
      solution: {
        js: `
function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
        `,
      },
      solutionType: 'CodeJs',
    },
  ],
};

export default tasks;