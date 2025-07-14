import { Badge, Container } from 'react-bootstrap'
// Предполагается, что эти компоненты существуют в вашем проекте
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import TaskViewer from '../components/TaskViewer/TaskViewer'
import { tasks } from '../data/tasks.js'

export default function JsFeaturesSummary() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Особенности JavaScript</h1>

			<p>
				Давайте кратко повторим изученный материал и отметим наиболее «тонкие»
				моменты.
			</p>

			<h2>Структура кода</h2>
			<p>Инструкции разделяются точкой с запятой:</p>
			<CodeJs js={`alert('Привет'); alert('Мир');`} />
			<p>
				Как правило, перевод строки также интерпретируется как разделитель, так
				тоже будет работать:
			</p>
			<CodeJs
				js={`alert('Привет')
alert('Мир')`}
			/>
			<p>
				Это так называемая «автоматическая вставка точки с запятой». Впрочем,
				она не всегда срабатывает, например:
			</p>
			<CodeJs
				js={`alert("После этого сообщения ждите ошибку")
// [1, 2].forEach(alert) // Этот код может вызвать ошибку из-за ASI`}
			/>
			<p>
				Большинство руководств по стилю кода рекомендуют ставить точку с запятой
				после каждой инструкции.
			</p>
			<p>
				Точка с запятой не требуется после блоков кода{' '}
				<Badge bg='secondary'>{'{...}'}</Badge> и синтаксических конструкций с
				ними, таких как, например, циклы:
			</p>
			<CodeJs
				js={`function f() {
  // после объявления функции необязательно ставить точку с запятой
}

for(;;) {
  // после цикла точка с запятой также необязательна
}`}
			/>
			<p>
				…Впрочем, если даже мы и поставим «лишнюю» точку с запятой, ошибки не
				будет. Она просто будет проигнорирована.
			</p>
			<p>
				Подробности: <Badge bg='secondary'>Структура кода</Badge>.
			</p>

			<h2>Строгий режим</h2>
			<p>
				Чтобы по максимуму использовать возможности современного JavaScript, все
				скрипты рекомендуется начинать с добавления директивы{' '}
				<Badge bg='secondary'>"use strict"</Badge>.
			</p>
			<CodeJs
				js={`'use strict';
// ...ваш код...`}
			/>
			<p>
				Эту директиву следует размещать в первой строке скрипта или в начале
				тела функции.
			</p>
			<p>
				Без <Badge bg='secondary'>"use strict"</Badge> код также запустится, но
				некоторые возможности будут работать в «режиме совместимости» со старыми
				версиями языка JavaScript. Нам же предпочтительнее современное
				поведение.
			</p>
			<p>
				Некоторые конструкции языка (например, классы, которые нам ещё предстоит
				изучить) включают строгий режим по умолчанию.
			</p>
			<p>
				Подробности: <Badge bg='secondary'>Строгий режим — "use strict"</Badge>.
			</p>

			<h2>Переменные</h2>
			<p>Можно объявить при помощи:</p>
			<ul>
				<li>
					<Badge bg='secondary'>let</Badge>
				</li>
				<li>
					<Badge bg='secondary'>const</Badge> (константа, т.е. изменению не
					подлежит)
				</li>
				<li>
					<Badge bg='secondary'>var</Badge> (устаревший способ, подробности
					позже)
				</li>
			</ul>
			<p>Имя переменной может включать:</p>
			<ul>
				<li>Буквы и цифры, однако цифра не может быть первым символом.</li>
				<li>
					Символы <Badge bg='secondary'>$</Badge> и{' '}
					<Badge bg='secondary'>_</Badge> используются наряду с буквами.
				</li>
				<li>
					Иероглифы и символы нелатинского алфавита также допустимы, но обычно
					не используются.
				</li>
			</ul>
			<p>
				Переменные типизируются динамически. В них могут храниться любые
				значения:
			</p>
			<CodeJs
				js={`let x = 5;
x = "Вася";`}
			/>
			<p>Всего существует 8 типов данных:</p>
			<ul>
				<li>
					<Badge bg='secondary'>number</Badge> для целых и вещественных чисел,
				</li>
				<li>
					<Badge bg='secondary'>bigint</Badge> для работы с целыми числами
					произвольной длины,
				</li>
				<li>
					<Badge bg='secondary'>string</Badge> для строк,
				</li>
				<li>
					<Badge bg='secondary'>boolean</Badge> для логических значений
					истинности или ложности: <Badge bg='secondary'>true</Badge>/
					<Badge bg='secondary'>false</Badge>,
				</li>
				<li>
					<Badge bg='secondary'>null</Badge> – тип с единственным значением{' '}
					<Badge bg='secondary'>null</Badge>, т.е. «пустое значение» или
					«значение не существует»,
				</li>
				<li>
					<Badge bg='secondary'>undefined</Badge> – тип с единственным значением{' '}
					<Badge bg='secondary'>undefined</Badge>, т.е. «значение не задано»,
				</li>
				<li>
					<Badge bg='secondary'>object</Badge> и{' '}
					<Badge bg='secondary'>symbol</Badge> – сложные структуры данных и
					уникальные идентификаторы; их мы ещё не изучили.
				</li>
			</ul>
			<p>
				Оператор <Badge bg='secondary'>typeof</Badge> возвращает тип значения
				переменной, с двумя исключениями:
			</p>
			<CodeJs
				js={`alert( typeof null == "object" ); // true, ошибка в языке
alert( typeof function(){} == "function" ); // true, именно для функций`}
			/>
			<p>
				Подробности: <Badge bg='secondary'>Переменные</Badge>,{' '}
				<Badge bg='secondary'>Типы данных</Badge>.
			</p>

			<h2>Взаимодействие с посетителем</h2>
			<p>
				В качестве рабочей среды мы используем браузер, так что простейшими
				функциями взаимодействия с посетителем являются:
			</p>
			<ul>
				<li>
					<Badge bg='secondary'>prompt(question, [default])</Badge>: Задаёт
					вопрос <Badge bg='secondary'>question</Badge> и возвращает то, что
					ввёл посетитель, либо <Badge bg='secondary'>null</Badge>, если
					посетитель нажал на кнопку «Отмена».
				</li>
				<li>
					<Badge bg='secondary'>confirm(question)</Badge>: Задаёт вопрос{' '}
					<Badge bg='secondary'>question</Badge> и предлагает выбрать «ОК» или
					«Отмена». Выбор возвращается в формате{' '}
					<Badge bg='secondary'>true</Badge>/<Badge bg='secondary'>false</Badge>
					.
				</li>
				<li>
					<Badge bg='secondary'>alert(message)</Badge>: Выводит сообщение{' '}
					<Badge bg='secondary'>message</Badge>.
				</li>
			</ul>
			<p>
				Все эти функции показывают <Badge bg='secondary'>модальные окна</Badge>,
				они останавливают выполнение кода и не позволяют посетителю
				взаимодействовать со страницей, пока не будет дан ответ на вопрос.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`// В реальном приложении используйте модальные окна вместо prompt() и confirm()
// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?");
// alert( "Посетитель: " + userName ); // Алиса
// alert( "Чай: " + isTeaWanted ); // true`}
			/>
			<p>
				Подробности:{' '}
				<Badge bg='secondary'>Взаимодействие: alert, prompt, confirm</Badge>.
			</p>

			<h2>Операторы</h2>
			<p>JavaScript поддерживает следующие операторы:</p>
			<h3>Арифметические</h3>
			<p>
				Простые <Badge bg='secondary'>* + - /</Badge>, а также деление по модулю{' '}
				<Badge bg='secondary'>%</Badge> и возведение в степень{' '}
				<Badge bg='secondary'>**</Badge>.
			</p>
			<p>
				Бинарный плюс <Badge bg='secondary'>+</Badge> объединяет строки. А если
				одним из операндов является строка, то второй тоже будет конвертирован в
				строку:
			</p>
			<CodeJs
				js={`alert( '1' + 2 ); // '12', строка
alert( 1 + '2' ); // '12', строка`}
			/>
			<h3>Операторы присваивания</h3>
			<p>
				Простые <Badge bg='secondary'>a = b</Badge> и составные{' '}
				<Badge bg='secondary'>a *= 2</Badge>.
			</p>
			<h3>Битовые операции</h3>
			<p>
				Битовые операторы работают с 32-битными целыми числами на самом низком,
				побитовом уровне. Подробнее об их использовании можно прочитать на
				ресурсе <Badge bg='secondary'>MDN</Badge> и в разделе{' '}
				<Badge bg='secondary'>Побитовые операторы</Badge>.
			</p>
			<h3>Условный оператор</h3>
			<p>
				Единственный оператор с тремя параметрами:{' '}
				<Badge bg='secondary'>cond ? resultA : resultB</Badge>. Если условие{' '}
				<Badge bg='secondary'>cond</Badge> истинно, возвращается{' '}
				<Badge bg='secondary'>resultA</Badge>, иначе –{' '}
				<Badge bg='secondary'>resultB</Badge>.
			</p>
			<h3>Логические операторы</h3>
			<p>
				Логические И <Badge bg='secondary'>&&</Badge>, ИЛИ{' '}
				<Badge bg='secondary'>||</Badge> используют так называемое «ленивое
				вычисление» и возвращают значение, на котором оно остановилось (не
				обязательно <Badge bg='secondary'>true</Badge> или{' '}
				<Badge bg='secondary'>false</Badge>). Логическое НЕ{' '}
				<Badge bg='secondary'>!</Badge> конвертирует операнд в логический тип и
				возвращает инвертированное значение.
			</p>
			<h3>Оператор нулевого слияния</h3>
			<p>
				Оператор <Badge bg='secondary'>??</Badge> предоставляет способ выбора
				определённого значения из списка переменных. Результатом{' '}
				<Badge bg='secondary'>a ?? b</Badge> будет{' '}
				<Badge bg='secondary'>a</Badge>, если только оно не равно{' '}
				<Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>, тогда{' '}
				<Badge bg='secondary'>b</Badge>.
			</p>
			<h3>Сравнение</h3>
			<p>
				Проверка на равенство <Badge bg='secondary'>==</Badge> значений разных
				типов конвертирует их в число (за исключением{' '}
				<Badge bg='secondary'>null</Badge> и{' '}
				<Badge bg='secondary'>undefined</Badge>, которые могут равняться только
				друг другу), так что примеры ниже равны:
			</p>
			<CodeJs
				js={`alert( 0 == false ); // true
alert( 0 == '' ); // true`}
			/>
			<p>
				Другие операторы сравнения тоже конвертируют значения разных типов в
				числовой тип.
			</p>
			<p>
				Оператор строгого равенства <Badge bg='secondary'>===</Badge> не
				выполняет конвертирования: разные типы для него всегда означают разные
				значения.
			</p>
			<p>
				Значения <Badge bg='secondary'>null</Badge> и{' '}
				<Badge bg='secondary'>undefined</Badge> особенные: они равны{' '}
				<Badge bg='secondary'>==</Badge> только друг другу, но не равны ничему
				ещё.
			</p>
			<p>
				Операторы сравнения больше/меньше сравнивают строки посимвольно,
				остальные типы конвертируются в число.
			</p>
			<h3>Другие операторы</h3>
			<p>Существуют и другие операторы, такие как запятая.</p>
			<p>
				Подробности: <Badge bg='secondary'>Базовые операторы, математика</Badge>
				, <Badge bg='secondary'>Операторы сравнения</Badge>,{' '}
				<Badge bg='secondary'>Логические операторы</Badge>,{' '}
				<Badge bg='secondary'>
					Операторы нулевого слияния и присваивания: '??', '??='
				</Badge>
				.
			</p>

			<h2>Циклы</h2>
			<p>Мы изучили три вида циклов:</p>
			<CodeJs
				js={`// 1
while (condition) {
  // ...
}

// 2
do {
  // ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  // ...
}`}
			/>
			<p>
				Переменная, объявленная в цикле{' '}
				<Badge bg='secondary'>for(let...)</Badge>, видна только внутри цикла. Но
				мы также можем опустить <Badge bg='secondary'>let</Badge> и
				переиспользовать существующую переменную.
			</p>
			<p>
				Директивы <Badge bg='secondary'>break</Badge>/
				<Badge bg='secondary'>continue</Badge> позволяют выйти из цикла/текущей
				итерации. Используйте метки для выхода из вложенных циклов.
			</p>
			<p>
				Подробности: <Badge bg='secondary'>Циклы while и for</Badge>.
			</p>
			<p>Позже мы изучим ещё виды циклов для работы с объектами.</p>

			<h2>Конструкция «switch»</h2>
			<p>
				Конструкция «switch» может заменить несколько проверок{' '}
				<Badge bg='secondary'>if</Badge>. При сравнении она использует оператор
				строгого равенства <Badge bg='secondary'>===</Badge>.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`// let age = prompt('Сколько вам лет?', 18); // В реальном приложении используйте пользовательский ввод
let age = "18"; // Для примера

switch (age) {
  case 18:
    alert("Так не сработает"); // результатом prompt является строка, а не число
    break; // Добавлен break для предотвращения fall-through

  case "18":
    alert("А так сработает!");
    break;

  default:
    alert("Любое значение, неравное значению выше");
}`}
			/>
			<p>
				Подробности: <Badge bg='secondary'>Конструкция "switch"</Badge>.
			</p>

			<h2>Функции</h2>
			<p>Мы рассмотрели три способа создания функции в JavaScript:</p>
			<h3>Function Declaration: функция в основном потоке кода</h3>
			<CodeJs
				js={`function sum(a, b) {
  let result = a + b;
  return result;
}`}
			/>
			<h3>Function Expression: функция как часть выражения</h3>
			<CodeJs
				js={`let sum = function(a, b) {
  let result = a + b;
  return result;
};`}
			/>
			<h3>Стрелочные функции:</h3>
			<CodeJs
				js={`// выражение в правой части
let sum = (a, b) => a + b;

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sumMultiLine = (a, b) => {
  // ...
  return a + b;
};

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;`}
			/>
			<p>
				У функций могут быть локальные переменные: т.е. объявленные в теле
				функции. Такие переменные видимы только внутри функции.
			</p>
			<p>
				У параметров могут быть значения по умолчанию:{' '}
				<Badge bg='secondary'>function sum(a = 1, b = 2) {'{...}'}</Badge>.
			</p>
			<p>
				Функции всегда что-нибудь возвращают. Если нет оператора{' '}
				<Badge bg='secondary'>return</Badge>, результатом будет{' '}
				<Badge bg='secondary'>undefined</Badge>.
			</p>
			<TaskViewer tasks={tasks['2.18']} />
		</Container>
	)
}
