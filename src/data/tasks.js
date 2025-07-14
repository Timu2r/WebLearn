
export const tasks = {
  '2.1': [
    {
      id: '2.1.1',
      title: 'Внешний скрипт',
      description: 'Создайте два файла: `index.html` и `script.js`. В `index.html` подключите `script.js` и выведите в консоль сообщение "Я учу JavaScript!".',
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
        `
      },
      solutionType: 'CodeRunner'
    }
  ],
  '2.2': [
    {
      id: '2.2.1',
      title: 'Точка с запятой',
      description: 'Что выведет этот код?`console.log(1);[1, 2].forEach(console.log)`',
      solution: {
        js: `
console.log(1);
[1, 2].forEach(console.log);
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.3': [
    {
      id: '2.3.1',
      title: 'Строгий режим',
      description: 'Будет ли работать этот код в строгом режиме?`"use strict";\nnum = 5;`',
      solution: {
        js: `
// Нет, будет ошибка, так как переменная num не объявлена.
// console.log("Ошибка: num is not defined");
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.4': [
    {
      id: '2.4.1',
      title: 'Работа с переменными',
      description: 'Создайте две переменные: `admin` и `name`. Запишите в `name` значение "Джон". Скопируйте значение из `name` в `admin`. Выведите `admin` в консоль.',
      solution: {
        js: `
let admin;
let name;
name = 'Джон';
admin = name;
console.log(admin);
        `
      },
      solutionType: 'CodeJs'
    },
    {
      id: '2.4.2',
      title: 'Придумайте правильные имена',
      description: 'Создайте переменную для хранения имени нашей планеты. Как бы вы назвали такую переменную?',
      solution: {
        js: `
let ourPlanetName = "Земля";
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.5': [
    {
      id: '2.5.1',
      title: 'Типы данных',
      description: 'Какой результат будет у этого кода?\n`let name = "Ilya";`\n`console.log( `hello ${1}` );`\n`console.log( `hello ${"name"}` );`\n`console.log( `hello ${name}` );`',
      solution: {
        js: `
console.log(\`hello \${1}\`);
console.log(\`hello \${"name"}\`);
console.log(\`hello \${name}\`);
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.6': [
    {
      id: '2.6.1',
      title: 'Взаимодействие с пользователем',
      description: 'Создайте страницу, которая запрашивает имя пользователя с помощью `prompt()` и выводит его в консоль.',
      solution: {
        js: `
// В реальном приложении используйте модальные окна вместо prompt()
// let name = prompt("Ваше имя?", "");
// console.log(name);
console.log("Для этой задачи используйте prompt в браузере.");
        `
      },
      solutionType: 'CodeJs'
    }
  ],
  '2.7': [
    {
      id: '2.7.1',
      title: 'Преобразование типов',
      description: 'Определите результат преобразования типов для следующих выражений JavaScript. Запишите ожидаемый результат для каждого выражения:`"" + 1 + 0`\n`"" - 1 + 0`\n`true + false`\n`6 / "3"`\n`"2" * "3"`\n`4 + 5 + "px"`\n`"$" + 4 + 5`\n`"4" - 2`\n`"4px" - 2`\n`7 / 0`\n`"   -9   " + 5`\n`"   -9   " - 5`\n`null + 1`\n`undefined + 1`\n`" \\t \\n" - 2`',
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
// "   -9   " + 5 => "   -9   5" (строка)
// "   -9   " - 5 => -14 (число)
// null + 1 => 1 (число)
// undefined + 1 => NaN (Not a Number)
// " \\t \\n" - 2 => -2 (число)
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.8': [
    {
      id: '2.8.1',
      title: 'Постфиксная и префиксная формы',
      description: 'Чему будут равны переменные a, b, c и d в примере ниже?\n`let a = 1, b = 1;`\n`let c = ++a;`\n`let d = b++;`',
      solution: {
        js: `
let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(\`a: \${a}, b: \${b}, c: \${c}, d: \${d}\`);
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.9': [
    {
      id: '2.9.1',
      title: 'Операторы сравнения',
      description: 'Какой будет результат у выражений?`5 > 4`\n`"ананас" > "яблоко"`\n`"2" > "12"`\n`undefined == null`\n`undefined === null`\n`null == "0"`\n`null === +"0"`',
      solution: {
        js: `
console.log(5 > 4);
console.log("ананас" > "яблоко");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "0");
console.log(null === +"0");
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.10': [
    {
      id: '2.10.1',
      title: 'if...else',
      description: 'Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.',
      solution: {
        js: `
if (age >= 14 && age <= 90) {
// ...
          }
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.11': [
    {
      id: '2.11.1',
      title: 'Логические операторы',
      description: 'Что выведет код ниже?`console.log( null || 2 || undefined );`',
      solution: {
        js: `
console.log(null || 2 || undefined);
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.12': [
    {
      id: '2.12.1',
      title: 'Оператор нулевого слияния',
      description: 'Что выведет этот код?`let height = 0;`\n`console.log(height ?? 100);`',
      solution: {
        js: `
let height = 0;
console.log(height ?? 100);
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.13': [
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
        `
      },
      solutionType: 'CodeJs'
    }
  ],
  '2.14': [
    {
      id: '2.14.1',
      title: 'switch',
      description: 'Перепишите код с использованием `switch`. Используйте `console.log()` вместо `alert()` для вывода результатов:`let a = +prompt("a?", "");`\n`if (a == 0) {`\n`  console.log(0);`\n`}`\n`if (a == 1) {`\n`  console.log(1);`\n`}`\n`if (a == 2 || a == 3) {`\n`  console.log("2,3");`\n`}`',
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
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.15': [
    {
      id: '2.15.1',
      title: 'Функции',
      description: 'Напишите функцию `min(a, b)`, которая возвращает меньшее из чисел a и b.',
      solution: {
        js: `
function min(a, b) {
return a < b ? a : b;
          }
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.16': [
    {
      id: '2.16.1',
      title: 'Function Expression',
      description: 'Перепишите функцию, используя Function Expression: `function ask(question, yes, no) { if (confirm(question)) yes(); else no(); }`',
      solution: {
        js: `
let ask = function(question, yes, no) {
if (confirm(question)) yes();
else no();
          }
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.17': [
    {
      id: '2.17.1',
      title: 'Стрелочные функции',
      description: 'Замените Function Expression стрелочной функцией: `function ask(question, yes, no) { if (confirm(question)) yes(); else no(); }`',
      solution: {
        js: `
let ask = (question, yes, no) => {
if (confirm(question)) yes();
else no();
}
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '2.18': [
    {
      id: '2.18.1',
      title: 'Особенности JavaScript',
      description: 'Что выведет этот код?`console.log( 1 && null && 2 );`',
      solution: {
        js: `
console.log(1 && null && 2);
        `
      },
      solutionType: 'CodeNote'
    }
  ],
  '3.1': [ 
    {
      id: '3.1.1',
      title: 'Панель "Sources"',
      description: 'Откройте инструменты разработчика в Chrome (F12). Перейдите на панель "Sources". С помощью "File Navigator" найдите и откройте любой JavaScript-файл, подключенный к странице (например, `hello.js` из тестовой страницы). Опишите три основные зоны панели "Sources".',
      solution: {
        js: `
1. File Navigator (панель для навигации файлов): Здесь отображаются все файлы, используемые страницей (HTML, CSS, JS, изображения).
2. Code Editor (редактор кода): Отображает исходный код выбранного файла.
3. JavaScript Debugging (панель отладки JavaScript): Содержит инструменты для отладки, такие как Watch, Call Stack, Scope, и кнопки пошагового выполнения.`
      },
      solutionType: 'CodeNote'
    },
    {
      id: '3.1.2',
      title: 'Использование консоли',
      description: 'Откройте консоль в Инструментах разработчика (Esc). Введите в консоли `25 * 4`. Какой результат вы получили? Затем вызовите функцию, которая ничего не возвращает (например, `hello("test")`, если она доступна). Что консоль вывела в ответ и почему?',
      solution: {
        js: `
- Ввод \`25 * 4\` выведет \`100\`.
- Вызов функции, которая не возвращает никакого значения (например, \`hello("test")\` или любая функция, в конце которой нет \`return\`), выведет \`undefined\`. Это происходит потому, что JavaScript по умолчанию возвращает \`undefined\` из функции, если она явно не возвращает что-либо другое.`
      },
      solutionType: 'CodeNote'
    }
  ],
};

export default tasks;