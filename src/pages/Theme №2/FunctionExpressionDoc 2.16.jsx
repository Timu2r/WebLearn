import { Badge, Container } from 'react-bootstrap'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function FunctionExpressionDoc() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Function Expression</h1>

			<p>
				Функция в JavaScript – это не магическая языковая структура, а особого
				типа значение.
			</p>
			<p>
				Синтаксис, который мы использовали до этого, называется{' '}
				<Badge bg='secondary'>Function Declaration</Badge> (Объявление Функции):
			</p>
			<CodeJs
				js={`function sayHi() {
  alert( "Привет" );
}`}
			/>
			<p>
				Существует ещё один синтаксис создания функций, который называется{' '}
				<Badge bg='secondary'>Function Expression</Badge> (Функциональное
				Выражение).
			</p>
			<p>
				Данный синтаксис позволяет нам создавать новую функцию в середине любого
				выражения.
			</p>
			<p>Это выглядит следующим образом:</p>
			<CodeJs
				js={`let sayHi = function() {
  alert( "Привет" );
};`}
			/>
			<p>
				Здесь мы можем видеть переменную <Badge bg='secondary'>sayHi</Badge>,
				получающую значение, новую функцию, созданную как{' '}
				<Badge bg='secondary'>function(){'{ alert("Привет"); }'}</Badge>.
			</p>
			<p>
				Поскольку создание функции происходит в контексте выражения присваивания
				(с правой стороны от <Badge bg='secondary'>=</Badge>), это{' '}
				<Badge bg='secondary'>Function Expression</Badge>.
			</p>
			<p>
				Обратите внимание, что после ключевого слова{' '}
				<Badge bg='secondary'>function</Badge> нет имени. Для Function
				Expression допускается его отсутствие.
			</p>
			<p>
				Здесь мы сразу присваиваем её переменной, так что смысл этих примеров
				кода один и тот же: «создать функцию и поместить её в переменную{' '}
				<Badge bg='secondary'>sayHi</Badge>».
			</p>
			<p>
				В более сложных ситуациях, с которыми мы столкнёмся позже, функция может
				быть создана и немедленно вызвана, или запланирована для дальнейшего
				выполнения, нигде не сохраняясь, таким образом, оставаясь анонимной.
			</p>

			<h2>Функция – это значение</h2>
			<p>
				Давайте повторим: независимо от того, как создаётся функция – она
				является значением. В обоих приведённых выше примерах функция хранится в
				переменной <Badge bg='secondary'>sayHi</Badge>.
			</p>
			<p>
				Мы даже можем вывести это значение с помощью{' '}
				<Badge bg='secondary'>alert</Badge>:
			</p>
			<CodeJs
				js={`function sayHi() {
  alert( "Привет" );
}
alert( sayHi ); // выведет код функции`}
			/>
			<p>
				Обратите внимание, что последняя строка не вызывает функцию, потому что
				после <Badge bg='secondary'>sayHi</Badge> нет круглых скобок. Существуют
				языки программирования, в которых любое упоминание имени функции
				приводит к её выполнению, но JavaScript к таким не относится.
			</p>
			<p>
				В JavaScript функция – это значение, поэтому мы можем обращаться с ней
				как со значением. Приведённый выше код показывает её строковое
				представление, которое является её исходным кодом.
			</p>
			<p>
				Конечно, функция – это особое значение, в том смысле, что мы можем
				вызвать её как <Badge bg='secondary'>sayHi()</Badge>.
			</p>
			<p>
				Но всё же это значение. Поэтому мы можем работать с ней так же, как и с
				другими видами значений.
			</p>
			<p>Мы можем скопировать функцию в другую переменную:</p>
			<CodeJs
				js={`function sayHi() {   // (1) создаём
  alert( "Привет" );
}
let func = sayHi;    // (2) копируем
func(); // Привет     // (3) вызываем копию (работает)!
sayHi(); // Привет    //     эта тоже все еще работает (почему бы и нет)`}
			/>
			<p>Давайте подробно разберём всё, что тут произошло:</p>
			<ul>
				<li>
					Объявление Function Declaration <Badge bg='secondary'>(1)</Badge>{' '}
					создаёт функцию и помещает её в переменную с именем{' '}
					<Badge bg='secondary'>sayHi</Badge>.
				</li>
				<li>
					В строке <Badge bg='secondary'>(2)</Badge> мы скопировали её значение
					в переменную <Badge bg='secondary'>func</Badge>. Обратите внимание
					(ещё раз): нет круглых скобок после{' '}
					<Badge bg='secondary'>sayHi</Badge>. Если бы они были, то выражение{' '}
					<Badge bg='secondary'>func = sayHi()</Badge> записало бы{' '}
					<Badge bg='secondary'>результат вызова</Badge>{' '}
					<Badge bg='secondary'>sayHi()</Badge> в переменную{' '}
					<Badge bg='secondary'>func</Badge>, а не саму{' '}
					<Badge bg='secondary'>функцию</Badge>{' '}
					<Badge bg='secondary'>sayHi</Badge>.
				</li>
				<li>
					Теперь функция может вызываться как{' '}
					<Badge bg='secondary'>sayHi()</Badge>, так и{' '}
					<Badge bg='secondary'>func()</Badge>.
				</li>
			</ul>
			<p>
				Мы также могли бы использовать Function Expression для объявления{' '}
				<Badge bg='secondary'>sayHi</Badge> в первой строке:
			</p>
			<CodeJs
				js={`let sayHi = function() { // (1) создаём
  alert( "Привет" );
};
let func = sayHi;
// ...`}
			/>
			<p>Всё будет работать так же.</p>

			<h3>Зачем нужна точка с запятой в конце?</h3>
			<p>
				У вас мог возникнуть вопрос: Почему в Function Expression ставится точка
				с запятой <Badge bg='secondary'>;</Badge> на конце, а в Function
				Declaration нет:
			</p>
			<CodeJs
				js={`function sayHi() {
  // ...
} // Нет точки с запятой

let sayHi = function() {
  // ...
}; // Есть точка с запятой`}
			/>
			<p>
				Ответ прост: Function Expression создаётся здесь как{' '}
				<Badge bg='secondary'>function(...) {'{...}'}</Badge> внутри выражения
				присваивания: <Badge bg='secondary'>let sayHi = …;</Badge>. Точку с
				запятой <Badge bg='secondary'>;</Badge> рекомендуется ставить в конце
				выражения, она не является частью синтаксиса функции.
			</p>
			<p>
				Точка с запятой нужна там для более простого присваивания, такого как{' '}
				<Badge bg='secondary'>let sayHi = 5;</Badge>, а также для присваивания
				функции.
			</p>

			<h2>Функции-«колбэки»</h2>
			<p>
				Давайте рассмотрим больше примеров передачи функции в виде значения и
				использования функциональных выражений.
			</p>
			<p>
				Давайте напишем функцию{' '}
				<Badge bg='secondary'>ask(question, yes, no)</Badge> с тремя
				параметрами:
			</p>
			<ul>
				<li>
					<Badge bg='secondary'>question</Badge>: Текст вопроса
				</li>
				<li>
					<Badge bg='secondary'>yes</Badge>: Функция, которая будет вызываться,
					если ответ будет «Yes»
				</li>
				<li>
					<Badge bg='secondary'>no</Badge>: Функция, которая будет вызываться,
					если ответ будет «No»
				</li>
			</ul>
			<p>
				Наша функция должна задать вопрос <Badge bg='secondary'>question</Badge>{' '}
				и, в зависимости от того, как ответит пользователь, вызвать{' '}
				<Badge bg='secondary'>yes()</Badge> или{' '}
				<Badge bg='secondary'>no()</Badge>:
			</p>
			<CodeJs
				js={`function ask(question, yes, no) {
  // В реальном приложении используйте модальное окно вместо confirm()
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);`}
			/>
			<p>
				На практике подобные функции очень полезны. Основное отличие «реальной»
				функции <Badge bg='secondary'>ask</Badge> от примера выше будет в том,
				что она использует более сложные способы взаимодействия с пользователем,
				чем простой вызов <Badge bg='secondary'>confirm</Badge>. В браузерах
				такие функции обычно отображают красивые диалоговые окна. Но это уже
				другая история.
			</p>
			<p>
				Аргументы <Badge bg='secondary'>showOk</Badge> и{' '}
				<Badge bg='secondary'>showCancel</Badge> функции{' '}
				<Badge bg='secondary'>ask</Badge> называются{' '}
				<Badge bg='secondary'>функциями-колбэками</Badge> или просто{' '}
				<Badge bg='secondary'>колбэками</Badge>.
			</p>
			<p>
				Ключевая идея в том, что мы передаём функцию и ожидаем, что она
				вызовется обратно (от англ. «call back» – обратный вызов) когда-нибудь
				позже, если это будет необходимо. В нашем случае,{' '}
				<Badge bg='secondary'>showOk</Badge> становится{' '}
				<Badge bg='secondary'>колбэком</Badge> для ответа «yes», а{' '}
				<Badge bg='secondary'>showCancel</Badge> – для ответа «no».
			</p>
			<p>
				Мы можем переписать этот пример значительно короче, используя Function
				Expression:
			</p>
			<CodeJs
				js={`function ask(question, yes, no) {
  // В реальном приложении используйте модальное окно вместо confirm()
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);`}
			/>
			<p>
				Здесь функции объявляются прямо внутри вызова{' '}
				<Badge bg='secondary'>ask(...)</Badge>. У них нет имён, поэтому они
				называются <Badge bg='secondary'>анонимными</Badge>. Такие функции
				недоступны снаружи <Badge bg='secondary'>ask</Badge> (потому что они не
				присвоены переменным), но это как раз то, что нам нужно.
			</p>
			<p>
				Подобный код, появившийся в нашем скрипте выглядит очень естественно, в
				духе JavaScript.
			</p>

			<h2>Функция – это значение, представляющее «действие»</h2>
			<p>
				Обычные значения, такие как строки или числа представляют собой{' '}
				<Badge bg='secondary'>данные</Badge>.
			</p>
			<p>
				Функции, с другой стороны, можно воспринимать как{' '}
				<Badge bg='secondary'>действия</Badge>.
			</p>
			<p>
				Мы можем передавать их из переменной в переменную и запускать, когда
				захотим.
			</p>

			<h2>Function Expression в сравнении с Function Declaration</h2>
			<p>
				Давайте разберём ключевые отличия Function Declaration от Function
				Expression.
			</p>
			<p>Во-первых, синтаксис: как отличить их друг от друга в коде.</p>
			<p>
				<Badge bg='secondary'>Function Declaration</Badge>: функция объявляется
				отдельной конструкцией «function…» в основном потоке кода.
			</p>
			<CodeJs
				js={`// Function Declaration
function sum(a, b) {
  return a + b;
}`}
			/>
			<p>
				<Badge bg='secondary'>Function Expression</Badge>: функция, созданная
				внутри другого выражения или синтаксической конструкции. В данном случае
				функция создаётся в правой части «выражения присваивания»{' '}
				<Badge bg='secondary'>=</Badge>:
			</p>
			<CodeJs
				js={`// Function Expression
let sum = function(a, b) {
  return a + b;
};`}
			/>
			<p>
				Более тонкое отличие состоит в том, <Badge bg='secondary'>когда</Badge>{' '}
				создаётся функция движком JavaScript.
			</p>
			<p>
				<Badge bg='secondary'>Function Expression</Badge> создаётся, когда
				выполнение доходит до него, и затем уже может использоваться.
			</p>
			<p>
				После того, как поток выполнения достигнет правой части выражения
				присваивания <Badge bg='secondary'>let sum = function…</Badge> – с этого
				момента, функция считается созданной и может быть использована
				(присвоена переменной, вызвана и т.д.).
			</p>
			<p>
				С <Badge bg='secondary'>Function Declaration</Badge> всё иначе.
			</p>
			<p>
				<Badge bg='secondary'>Function Declaration</Badge> может быть вызвана
				раньше, чем она объявлена.
			</p>
			<p>
				Другими словами, когда движок JavaScript{' '}
				<Badge bg='secondary'>готовится</Badge> выполнять скрипт или блок кода,
				прежде всего он ищет в нём Function Declaration и создаёт все такие
				функции. Можно считать этот процесс «стадией инициализации».
			</p>
			<p>
				И только после того, как все объявления Function Declaration будут
				обработаны, продолжится выполнение.
			</p>
			<p>
				В результате функции, созданные как Function Declaration, могут быть
				вызваны раньше своих определений.
			</p>
			<p>Например, так будет работать:</p>
			<CodeJs
				js={`sayHi("Вася"); // Привет, Вася

function sayHi(name) {
  alert( \`Привет, \${name}\` );
}`}
			/>
			<p>
				Функция <Badge bg='secondary'>sayHi</Badge> была создана, когда движок
				JavaScript подготавливал скрипт к выполнению, и такая функция видна
				повсюду в этом скрипте.
			</p>
			<p>
				…Если бы это было Function Expression, то такой код вызвал бы ошибку:
			</p>
			<CodeJs
				js={`// sayHi("Вася"); // ошибка! sayHi is not defined

let sayHi = function(name) {  // (*) магии больше нет
  alert( \`Привет, \${name}\` );
};`}
			/>
			<p>
				Функции, объявленные при помощи Function Expression, создаются тогда,
				когда выполнение доходит до них. Это случится только на строке,
				помеченной звёздочкой <Badge bg='secondary'>(*)</Badge>. Слишком поздно.
			</p>
			<p>
				Ещё одна важная особенность Function Declaration заключается в их
				блочной области видимости.
			</p>
			<p>
				В строгом режиме, когда Function Declaration находится в блоке{' '}
				<Badge bg='secondary'>{'{...}'}</Badge>, функция доступна везде внутри
				блока. Но не снаружи него.
			</p>
			<p>
				Для примера давайте представим, что нам нужно объявить функцию{' '}
				<Badge bg='secondary'>welcome()</Badge> в зависимости от значения
				переменной <Badge bg='secondary'>age</Badge>, которое мы получим во
				время выполнения кода. И затем запланируем использовать её когда-нибудь
				в будущем.
			</p>
			<p>
				Если мы попробуем использовать Function Declaration, это не заработает
				так, как задумывалось:
			</p>
			<CodeJs
				js={`// let age = prompt("Сколько Вам лет?", 18); // В реальном приложении используйте пользовательский ввод
let age = 18; // Для примера

// в зависимости от условия объявляем функцию
if (age < 18) {
  // function welcome() { // Это Function Declaration
  //   alert("Привет!");
  // }
} else {
  // function welcome() { // Это Function Declaration
  //   alert("Здравствуйте!");
  // }
}

// ...не работает
// welcome(); // Error: welcome is not defined`}
			/>
			<p>
				Это произошло, так как объявление Function Declaration видимо только
				внутри блока кода, в котором располагается.
			</p>
			<p>Вот ещё один пример:</p>
			<CodeJs
				js={`let age = 16; // возьмём для примера 16

if (age < 18) {
  // welcome();               // \   (выполнится)
  //                            |
  function welcome() {     //  |
    alert("Привет!");      //  |  Function Declaration доступно
  }                        //  |  во всём блоке кода, в котором объявлено
  //                            |  welcome();               // /   (выполнится)
} else {
  function welcome() {
    alert("Здравствуйте!");
  }
}

// здесь фигурная скобка закрывается,
// поэтому Function Declaration, созданные внутри блока кода выше -- недоступны отсюда.
// welcome(); // Ошибка: welcome is not defined`}
			/>
			<p>
				Что можно сделать, чтобы <Badge bg='secondary'>welcome</Badge> была
				видима снаружи <Badge bg='secondary'>if</Badge>?
			</p>
			<p>
				Верным подходом будет воспользоваться функцией, объявленной при помощи
				Function Expression, и присвоить значение{' '}
				<Badge bg='secondary'>welcome</Badge> переменной, объявленной снаружи{' '}
				<Badge bg='secondary'>if</Badge>, что обеспечит нам нужную видимость.
			</p>
			<p>Такой код заработает, как ожидалось:</p>
			<CodeJs
				js={`// let age = prompt("Сколько Вам лет?", 18); // В реальном приложении используйте пользовательский ввод
let age = 18; // Для примера
let welcome;

if (age < 18) {
  welcome = function() {
    alert("Привет!");
  };
} else {
  welcome = function() {
    alert("Здравствуйте!");
  };
}

welcome(); // теперь всё в порядке`}
			/>
			<p>
				Или мы могли бы упростить это ещё сильнее, используя условный оператор{' '}
				<Badge bg='secondary'>?:</Badge>
			</p>
			<CodeJs
				js={`// let age = prompt("Сколько Вам лет?", 18); // В реальном приложении используйте пользовательский ввод
let age = 18; // Для примера
let welcome = (age < 18) ?
  function() { alert("Привет!"); } :
  function() { alert("Здравствуйте!"); };

welcome(); // теперь всё в порядке`}
			/>

			<h2>
				Когда использовать Function Declaration, а когда Function Expression?
			</h2>
			<p>
				Как правило, если нам понадобилась функция, в первую очередь нужно
				рассматривать синтаксис{' '}
				<Badge bg='secondary'>Function Declaration</Badge>, который мы
				использовали до этого. Он даёт нам больше свободы в том, как мы можем
				организовывать код. Функции, объявленные таким образом, можно вызывать
				до их объявления.
			</p>
			<p>
				Также функции вида <Badge bg='secondary'>function f(…){'{…}'}</Badge>{' '}
				чуть более заметны в коде, чем{' '}
				<Badge bg='secondary'>let f = function(…) {'{…}'}</Badge>. Function
				Declaration легче «ловятся глазами».
			</p>
			<p>
				…Но если Function Declaration нам не подходит по какой-то причине, или
				нам нужно условное объявление (мы рассмотрели это в примере выше), то
				следует использовать Function Expression.
			</p>

			<h1 className='mt-5'>Итого</h1>
			<ul>
				<li>
					Функции – это значения. Они могут быть присвоены, скопированы или
					объявлены в любом месте кода.
				</li>
				<li>
					Если функция объявлена как отдельная инструкция в основном потоке
					кода, то это “Function Declaration”.
				</li>
				<li>
					Если функция была создана как часть выражения, то это “Function
					Expression”.
				</li>
				<li>
					Function Declaration обрабатываются перед выполнением блока кода. Они
					видны во всём блоке.
				</li>
				<li>
					Функции, объявленные при помощи Function Expression, создаются только
					когда поток выполнения достигает их.
				</li>
				<li>
					В большинстве случаев, когда нам нужно объявить функцию, Function
					Declaration предпочтительнее, т.к функция будет видна до своего
					объявления в коде. Это даёт нам больше гибкости в организации кода, и,
					как правило, делает его более читабельным.
				</li>
				<li>
					Исходя из этого, мы должны использовать Function Expression только
					тогда, когда Function Declaration не подходит для нашей задачи. Мы
					рассмотрели несколько таких примеров в этой главе, и увидим ещё больше
					в будущем.
				</li>
			</ul>
			<TaskViewer tasks={tasks['2.16']} />
		</Container>
	)
}
