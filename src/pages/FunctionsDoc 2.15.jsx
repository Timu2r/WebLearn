import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import CodeNote from '../components/CodeNote'
import TaskViewer from '../components/TaskViewer/TaskViewer'
import { tasks } from '../data/tasks.js'

export default function FunctionsDoc() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Функции</h1>

			<p>
				Зачастую нам надо повторять одно и то же действие во многих частях
				программы.
			</p>
			<p>
				Например, необходимо красиво вывести сообщение при приветствии
				посетителя, при выходе посетителя с сайта, ещё где-нибудь.
			</p>
			<p>
				Чтобы не повторять один и тот же код во многих местах, придуманы
				функции. Функции являются основными «строительными блоками» программы.
			</p>
			<p>
				Примеры встроенных функций вы уже видели – это{' '}
				<Badge bg='secondary'>alert(message)</Badge>,{' '}
				<Badge bg='secondary'>prompt(message, default)</Badge> и{' '}
				<Badge bg='secondary'>confirm(question)</Badge>. Но можно создавать и
				свои.
			</p>

			<h2>Объявление функции</h2>
			<p>
				Для создания функций мы можем использовать{' '}
				<Badge bg='secondary'>объявление функции</Badge>.
			</p>
			<p>Пример объявления функции:</p>
			<CodeNote
				js={`function showMessage() {
  alert( 'Всем привет!' );
}`}
			/>
			<p>
				Вначале идёт ключевое слово <Badge bg='secondary'>function</Badge>,
				после него <Badge bg='secondary'>имя функции</Badge>, затем список{' '}
				<Badge bg='secondary'>параметров</Badge> в круглых скобках через запятую
				(в вышеприведённом примере он пустой) и, наконец, код функции, также
				называемый «телом функции», внутри фигурных скобок.
			</p>
			<CodeNote
				js={`function имя(параметры) {
  ...тело...
}`}
			/>
			<p>
				Наша новая функция может быть вызвана по своему имени:{' '}
				<Badge bg='secondary'>showMessage()</Badge>.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`function showMessage() {
  alert( 'Всем привет!' );
}

showMessage(); // Вызов функции
showMessage(); // Вызов функции еще раз`}
			/>
			<p>
				Вызов <Badge bg='secondary'>showMessage()</Badge> выполняет код функции.
				Здесь мы увидим сообщение дважды.
			</p>
			<p>
				Этот пример явно демонстрирует одно из главных предназначений функций:
				избавление от дублирования кода.
			</p>
			<p>
				Если понадобится поменять сообщение или способ его вывода – достаточно
				изменить его в одном месте: в функции, которая его выводит.
			</p>

			<h2>Локальные переменные</h2>
			<p>
				Переменные, объявленные внутри функции, видны только внутри этой
				функции.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`function showMessage() {
  let message = "Привет, я JavaScript!"; // локальная переменная

  alert( message );
}

showMessage(); // Привет, я JavaScript!
// alert( message ); // <-- будет ошибка, т.к. переменная видна только внутри функции`}
			/>

			<h2>Внешние переменные</h2>
			<p>У функции есть доступ к внешним переменным, например:</p>
			<CodeJs
				js={`let userName = 'Вася';

function showMessage() {
  let message = 'Привет, ' + userName;
  alert(message);
}

showMessage(); // Привет, Вася`}
			/>
			<p>
				Функция обладает полным доступом к внешним переменным и может изменять
				их значение.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let userName = 'Вася';

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); // Вася перед вызовом функции
showMessage();
alert( userName ); // Петя, значение внешней переменной было изменено функцией`}
			/>
			<p>
				Внешняя переменная используется, только если внутри функции нет такой
				локальной.
			</p>
			<p>
				Если одноимённая переменная объявляется внутри функции, тогда она
				перекрывает внешнюю. Например, в коде ниже функция использует локальную
				переменную <Badge bg='secondary'>userName</Badge>. Внешняя будет
				проигнорирована:
			</p>
			<CodeJs
				js={`let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();
alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную`}
			/>

			<div
				style={{
					border: '5px solid rgb(49, 49, 49)',
					borderRadius: '10px',
					margin: '40px 0',
					padding: '20px',
				}}
			>
				<h1
					style={{
						fontSize: '1.3rem',
						fontFamily: 'monospace',
						fontWeight: 'bold',
					}}
				>
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Глобальные переменные
				</h1>
				<p>
					Переменные, объявленные снаружи всех функций, такие как внешняя
					переменная <Badge bg='secondary'>userName</Badge> в вышеприведённом
					коде – называются <Badge bg='secondary'>глобальными</Badge>.
				</p>
				<p>
					Глобальные переменные{' '}
					<Badge bg='secondary'>видимы для любой функции</Badge> (если только их
					не перекрывают одноимённые локальные переменные).
				</p>
				<p>
					Желательно сводить использование глобальных переменных к минимуму. В
					современном коде обычно мало или совсем нет глобальных переменных.
					Хотя они иногда полезны для хранения важнейших «общепроектовых»
					данных.
				</p>
			</div>

			<h2>Параметры</h2>
			<p>
				Мы можем передать внутрь функции любую информацию, используя параметры.
			</p>
			<p>
				В нижеприведённом примере функции передаются два параметра:{' '}
				<Badge bg='secondary'>from</Badge> и <Badge bg='secondary'>text</Badge>.
			</p>
			<CodeJs
				js={`function showMessage(from, text) { // параметры: from, text
  alert(from + ': ' + text);
}

showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)`}
			/>
			<p>
				Когда функция вызывается в строках <Badge bg='secondary'>(*)</Badge> и{' '}
				<Badge bg='secondary'>(**)</Badge>, переданные значения копируются в
				локальные переменные <Badge bg='secondary'>from</Badge> и{' '}
				<Badge bg='secondary'>text</Badge>. Затем они используются в теле
				функции.
			</p>
			<p>
				Вот ещё один пример: у нас есть переменная{' '}
				<Badge bg='secondary'>from</Badge>, и мы передаём её функции. Обратите
				внимание: функция изменяет значение <Badge bg='secondary'>from</Badge>,
				но это изменение не видно снаружи. Функция всегда получает только копию
				значения:
			</p>
			<CodeJs
				js={`function showMessage(from, text) {
  from = '*' + from + '*'; // немного украсим "from"

  alert( from + ': ' + text );
}

let from = "Аня";
showMessage(from, "Привет"); // *Аня*: Привет
// значение "from" осталось прежним, функция изменила значение локальной переменной
alert( from ); // Аня`}
			/>
			<p>
				Значение, передаваемое в качестве параметра функции, также называется{' '}
				<Badge bg='secondary'>аргументом</Badge>.
			</p>
			<p>Другими словами:</p>
			<ul>
				<li>
					<Badge bg='secondary'>Параметр</Badge> – это переменная, указанная в
					круглых скобках в объявлении функции.
				</li>
				<li>
					<Badge bg='secondary'>Аргумент</Badge> – это значение, которое
					передаётся функции при её вызове.
				</li>
			</ul>
			<p>
				Мы объявляем функции со списком параметров, затем вызываем их, передавая
				аргументы.
			</p>
			<p>
				Рассматривая приведённый выше пример, мы могли бы сказать: «функция{' '}
				<Badge bg='secondary'>showMessage</Badge> объявляется с двумя
				параметрами, затем вызывается с двумя аргументами:{' '}
				<Badge bg='secondary'>from</Badge> и{' '}
				<Badge bg='secondary'>"Привет"</Badge>».
			</p>

			<h2>Значения по умолчанию</h2>
			<p>
				Если при вызове функции аргумент не был указан, то его значением
				становится <Badge bg='secondary'>undefined</Badge>.
			</p>
			<p>
				Например, вышеупомянутая функция{' '}
				<Badge bg='secondary'>showMessage(from, text)</Badge> может быть вызвана
				с одним аргументом:
			</p>
			<CodeNote js={`showMessage("Аня");`} />
			<p>
				Это не приведёт к ошибке. Такой вызов выведет{' '}
				<Badge bg='secondary'>"*Аня*: undefined"</Badge>. В вызове не указан
				параметр <Badge bg='secondary'>text</Badge>, поэтому предполагается, что{' '}
				<Badge bg='secondary'>text === undefined</Badge>.
			</p>
			<p>
				Если мы хотим задать параметру <Badge bg='secondary'>text</Badge>{' '}
				значение по умолчанию, мы должны указать его после{' '}
				<Badge bg='secondary'>=</Badge>:
			</p>
			<CodeJs
				js={`function showMessage(from, text = "текст не добавлен") {
  alert( from + ": " + text );
}

showMessage("Аня"); // Аня: текст не добавлен`}
			/>
			<p>
				Теперь, если параметр <Badge bg='secondary'>text</Badge> не указан, его
				значением будет <Badge bg='secondary'>"текст не добавлен"</Badge>
			</p>
			<p>
				В данном случае <Badge bg='secondary'>"текст не добавлен"</Badge> это
				строка, но на её месте могло бы быть и более сложное выражение, которое
				бы вычислялось и присваивалось при отсутствии параметра. Например:
			</p>
			<CodeJs
				js={`function showMessage(from, text = anotherFunction()) {
  // anotherFunction() выполнится только если не передан text
  // результатом будет значение text
}`}
			/>
			<div
				style={{
					border: '5px solid rgb(49, 49, 49)',
					borderRadius: '10px',
					margin: '40px 0',
					padding: '20px',
				}}
			>
				<h1
					style={{
						fontSize: '1.3rem',
						fontFamily: 'monospace',
						fontWeight: 'bold',
					}}
				>
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Вычисление параметров по умолчанию
				</h1>
				<p>
					В JavaScript параметры по умолчанию вычисляются каждый раз, когда
					функция вызывается без соответствующего аргумента.
				</p>
				<p>
					В приведённом выше примере, функция{' '}
					<Badge bg='secondary'>anotherFunction()</Badge> не будет вызвана
					вообще, если указан аргумент <Badge bg='secondary'>text</Badge>.
				</p>
				<p>
					С другой стороны, функция будет независимо вызываться каждый раз,
					когда аргумент <Badge bg='secondary'>text</Badge> отсутствует.
				</p>
			</div>
			<div
				style={{
					border: '5px solid rgb(49, 49, 49)',
					borderRadius: '10px',
					margin: '40px 0',
					padding: '20px',
				}}
			>
				<h1
					style={{
						fontSize: '1.3rem',
						fontFamily: 'monospace',
						fontWeight: 'bold',
					}}
				>
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Использование параметров по умолчанию в ранних версиях JavaScript
				</h1>
				<p>
					Ранние версии JavaScript не поддерживали параметры по умолчанию.
					Поэтому существуют альтернативные способы, которые могут встречаться в
					старых скриптах.
				</p>
				<p>
					Например, явная проверка на <Badge bg='secondary'>undefined</Badge>:
				</p>
				<CodeJs
					js={`function showMessage(from, text) {
  if (text === undefined) {
    text = 'текст не добавлен';
  }

  alert( from + ": " + text );
}`}
				/>
				<p>
					…Или с помощью оператора <Badge bg='secondary'>||</Badge>:
				</p>
				<CodeJs
					js={`function showMessage(from, text) {
  // Если значение text ложно, тогда присвоить параметру text значение по умолчанию
  // заметим, что при этом пустая строка text === "" будет также считаться отсутствующим значением
  text = text || 'текст не добавлен';
  // ...
}`}
				/>
			</div>

			<h2>Альтернативные параметры по умолчанию</h2>
			<p>
				Иногда имеет смысл присваивать значения по умолчанию для параметров не в
				объявлении функции, а на более позднем этапе.
			</p>
			<p>
				Во время выполнения функции мы можем проверить, передан ли параметр,
				сравнив его с <Badge bg='secondary'>undefined</Badge>:
			</p>
			<CodeJs
				js={`function showMessage(text) {
  // ...
  if (text === undefined) { // если параметр отсутствует
    text = 'пустое сообщение';
  }
  alert(text);
}

showMessage(); // пустое сообщение`}
			/>
			<p>
				…Или мы можем использовать оператор <Badge bg='secondary'>||</Badge>:
			</p>
			<CodeJs
				js={`function showMessage(text) {
  // если значение text ложно или равняется undefined, тогда присвоить text значение 'пусто'
  text = text || 'пусто';
  // ...
}`}
			/>
			<p>
				Современные движки JavaScript поддерживают{' '}
				<Badge bg='secondary'>оператор нулевого слияния ??</Badge>. Его
				использование будет лучшей практикой, в случае, если большинство ложных
				значений, таких как <Badge bg='secondary'>0</Badge>, следует расценивать
				как «нормальные».
			</p>
			<div
				style={{
					border: '5px solid rgb(49, 49, 49)',
					borderRadius: '10px',
					margin: '40px 0',
					padding: '20px',
				}}
			>
				<h1
					style={{
						fontSize: '1.3rem',
						fontFamily: 'monospace',
						fontWeight: 'bold',
					}}
				>
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Новая возможность: Оператор нулевого слияния (Nullish Coalescing
					Operator)
				</h1>
				<p>
					Оператор <Badge bg='secondary'>??</Badge> был добавлен в язык недавно.
					Он возвращает правый операнд, если левый операнд равен{' '}
					<Badge bg='secondary'>null</Badge> или{' '}
					<Badge bg='secondary'>undefined</Badge>. В противном случае
					возвращается левый операнд.
				</p>
			</div>
			<CodeJs
				js={`function showCount(count) {
  // если count равен undefined или null, показать "неизвестно"
  alert(count ?? "неизвестно");
}

showCount(0); // 0
showCount(null); // неизвестно
showCount(); // неизвестно`}
			/>

			<h2>Возврат значения</h2>
			<p>
				Функция может вернуть результат, который будет передан в вызвавший её
				код.
			</p>
			<p>Простейшим примером может служить функция сложения двух чисел:</p>
			<CodeJs
				js={`function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3`}
			/>
			<p>
				Директива <Badge bg='secondary'>return</Badge> может находиться в любом
				месте тела функции. Как только выполнение доходит до этого места,
				функция останавливается, и значение возвращается в вызвавший её код
				(присваивается переменной <Badge bg='secondary'>result</Badge> выше).
			</p>
			<p>
				Вызовов <Badge bg='secondary'>return</Badge> может быть несколько,
				например:
			</p>
			<CodeJs
				js={`function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('А родители разрешили?'); // В реальном приложении используйте модальное окно вместо confirm()
  }
}

let age = prompt('Сколько вам лет?', 18); // В реальном приложении используйте пользовательский ввод
if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}`}
			/>
			<p>
				Возможно использовать <Badge bg='secondary'>return</Badge> и без
				значения. Это приведёт к немедленному выходу из функции.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`function showMovie(age) {
  if ( !checkAge(age) ) {
    return; // Немедленный выход из функции
  }

  alert( "Вам показывается кино" ); // (*)
  // ...
}`}
			/>
			<p>
				В коде выше, если <Badge bg='secondary'>checkAge(age)</Badge> вернёт{' '}
				<Badge bg='secondary'>false</Badge>,{' '}
				<Badge bg='secondary'>showMovie</Badge> не выполнит{' '}
				<Badge bg='secondary'>alert</Badge>.
			</p>
			<div
				style={{
					border: '5px solid rgb(49, 49, 49)',
					borderRadius: '10px',
					margin: '40px 0',
					padding: '20px',
				}}
			>
				<h1
					style={{
						fontSize: '1.3rem',
						fontFamily: 'monospace',
						fontWeight: 'bold',
					}}
				>
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Результат функции с пустым <Badge bg='secondary'>return</Badge> или
					без него – <Badge bg='secondary'>undefined</Badge>
				</h1>
				<p>
					Если функция не возвращает значения, это всё равно, как если бы она
					возвращала <Badge bg='secondary'>undefined</Badge>:
				</p>
				<CodeJs
					js={`function doNothing() { /* пусто */ }
alert( doNothing() === undefined ); // true`}
				/>
				<p>
					Пустой <Badge bg='secondary'>return</Badge> аналогичен{' '}
					<Badge bg='secondary'>return undefined</Badge>:
				</p>
				<CodeJs
					js={`function doNothing() {
  return;
}
alert( doNothing() === undefined ); // true`}
				/>
			</div>
			<div
				style={{
					border: '5px solid rgb(49, 49, 49)',
					borderRadius: '10px',
					margin: '40px 0',
					padding: '20px',
				}}
			>
				<h1
					style={{
						fontSize: '1.2rem',
						fontFamily: 'monospace',
						fontWeight: 'bold',
					}}
				>
					<IoIosWarning
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#ff9a34',
							fontSize: '1.5rem',
						}}
					/>
					Никогда не добавляйте перевод строки между{' '}
					<Badge bg='secondary'>return</Badge> и его значением
				</h1>
				<p>
					Для длинного выражения в <Badge bg='secondary'>return</Badge> может
					быть заманчиво разместить его на нескольких отдельных строках,
					например так:
				</p>
				<CodeNote
					js={`return
 (some + long + expression + or + whatever * f(a) + f(b))`}
				/>
				<p>
					Код не выполнится, потому что интерпретатор JavaScript подставит точку
					с запятой после <Badge bg='secondary'>return</Badge>. Для него это
					будет выглядеть так:
				</p>
				<CodeNote
					js={`return;
 (some + long + expression + or + whatever * f(a) + f(b))`}
				/>
				<p>
					Таким образом, это фактически стало пустым{' '}
					<Badge bg='secondary'>return</Badge>.
				</p>
				<p>
					Если мы хотим, чтобы возвращаемое выражение занимало несколько строк,
					нужно начать его на той же строке, что и{' '}
					<Badge bg='secondary'>return</Badge>. Или, хотя бы, поставить там
					открывающую скобку, вот так:
				</p>
				<CodeNote
					js={`return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
)`}
				/>
				<p>И тогда всё сработает, как задумано.</p>
			</div>

			<h2>Выбор имени функции</h2>
			<p>
				Функция – это действие. Поэтому имя функции обычно является глаголом.
				Оно должно быть кратким, точным и описывать действие функции, чтобы
				программист, который будет читать код, получил верное представление о
				том, что делает функция.
			</p>
			<p>
				Как правило, используются глагольные префиксы, обозначающие общий
				характер действия, после которых следует уточнение. Обычно в командах
				разработчиков действуют соглашения, касающиеся значений этих префиксов.
			</p>
			<p>
				Например, функции, начинающиеся с <Badge bg='secondary'>"show"</Badge>{' '}
				обычно что-то показывают.
			</p>
			<p>Функции, начинающиеся с…</p>
			<ul>
				<li>
					<Badge bg='secondary'>"get…"</Badge> – возвращают значение,
				</li>
				<li>
					<Badge bg='secondary'>"calc…"</Badge> – что-то вычисляют,
				</li>
				<li>
					<Badge bg='secondary'>"create…"</Badge> – что-то создают,
				</li>
				<li>
					<Badge bg='secondary'>"check…"</Badge> – что-то проверяют и возвращают
					логическое значение, и т.д.
				</li>
			</ul>
			<p>Примеры таких имён:</p>
			<CodeJs
				js={`showMessage(..)     // показывает сообщение
getAge(..)          // возвращает возраст (получая его каким-то образом)
calcSum(..)         // вычисляет сумму и возвращает результат
createForm(..)      // создаёт форму (и обычно возвращает её)
checkPermission(..) // проверяет доступ, возвращая true/false`}
			/>
			<p>
				Благодаря префиксам, при первом взгляде на имя функции становится
				понятным, что делает её код, и какое значение она может возвращать.
			</p>

			<h2>Одна функция – одно действие</h2>
			<p>
				Функция должна делать только то, что явно подразумевается её названием.
				И это должно быть одним действием.
			</p>
			<p>
				Два независимых действия обычно подразумевают две функции, даже если
				предполагается, что они будут вызываться вместе (в этом случае мы можем
				создать третью функцию, которая будет их вызывать).
			</p>
			<p>Несколько примеров, которые нарушают это правило:</p>
			<ul>
				<li>
					<Badge bg='secondary'>getAge</Badge> – будет плохим выбором, если
					функция будет выводить <Badge bg='secondary'>alert</Badge> с возрастом
					(должна только возвращать его).
				</li>
				<li>
					<Badge bg='secondary'>createForm</Badge> – будет плохим выбором, если
					функция будет изменять документ, добавляя форму в него (должна только
					создавать форму и возвращать её).
				</li>
				<li>
					<Badge bg='secondary'>checkPermission</Badge> – будет плохим выбором,
					если функция будет отображать сообщение с текстом{' '}
					<Badge bg='secondary'>доступ разрешён/запрещён</Badge> (должна только
					выполнять проверку и возвращать её результат).
				</li>
			</ul>
			<p>
				В этих примерах использовались общепринятые смыслы префиксов. Конечно,
				вы в команде можете договориться о других значениях, но обычно они мало
				отличаются от общепринятых. В любом случае вы и ваша команда должны
				чётко понимать, что значит префикс, что функция с ним может делать, а
				чего не может.
			</p>

			<h2>Сверхкороткие имена функций</h2>
			<p>
				Имена функций, которые используются{' '}
				<Badge bg='secondary'>очень часто</Badge>, иногда делают сверхкороткими.
			</p>
			<p>
				Например, фреймворк <Badge bg='secondary'>jQuery</Badge> определяет
				функцию с помощью <Badge bg='secondary'>$</Badge>. В библиотеке{' '}
				<Badge bg='secondary'>Lodash</Badge> основная функция представлена
				именем <Badge bg='secondary'>_</Badge>.
			</p>
			<p>
				Это исключения. В основном имена функций должны быть в меру краткими и
				описательными.
			</p>

			<h2>Функции == Комментарии</h2>
			<p>
				Функции должны быть короткими и делать только что-то одно. Если это
				что-то большое, имеет смысл разбить функцию на несколько меньших. Иногда
				следовать этому правилу непросто, но это определённо хорошее правило.
			</p>
			<p>
				Небольшие функции не только облегчают тестирование и отладку – само
				существование таких функций выполняет роль хороших комментариев!
			</p>
			<p>
				Например, сравним ниже две функции{' '}
				<Badge bg='secondary'>showPrimes(n)</Badge>. Каждая из них выводит{' '}
				<Badge bg='secondary'>простое число</Badge> до{' '}
				<Badge bg='secondary'>n</Badge>.
			</p>
			<p>
				Первый вариант использует метку <Badge bg='secondary'>nextPrime</Badge>:
			</p>
			<CodeJs
				js={`function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }
}`}
			/>
			<p>
				Второй вариант использует дополнительную функцию{' '}
				<Badge bg='secondary'>isPrime(n)</Badge> для проверки на простое:
			</p>
			<CodeJs
				js={`function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}`}
			/>
			<p>
				Второй вариант легче для понимания, не правда ли? Вместо куска кода мы
				видим название действия (<Badge bg='secondary'>isPrime</Badge>). Иногда
				разработчики называют такой код{' '}
				<Badge bg='secondary'>самодокументируемым</Badge>.
			</p>
			<p>
				Таким образом, допустимо создавать функции, даже если мы не планируем
				повторно использовать их. Такие функции структурируют код и делают его
				более понятным.
			</p>

			<h1 className='mt-5'>Итого</h1>
			<p>Объявление функции имеет вид:</p>
			<CodeNote
				js={`function имя(параметры, через, запятую) {
  /* тело, код функции */
}`}
			/>
			<p>
				Передаваемые значения копируются в параметры функции и становятся
				локальными переменными.
			</p>
			<p>
				Функции имеют доступ к внешним переменным. Но это работает только
				изнутри наружу. Код вне функции не имеет доступа к её локальным
				переменным.
			</p>
			<p>
				Функция может возвращать значение. Если этого не происходит, тогда
				результат равен <Badge bg='secondary'>undefined</Badge>.
			</p>
			<p>
				Для того, чтобы сделать код более чистым и понятным, рекомендуется
				использовать локальные переменные и параметры функций, не пользоваться
				внешними переменными.
			</p>
			<p>
				Функция, которая получает параметры, работает с ними и затем возвращает
				результат, гораздо понятнее функции, вызываемой без параметров, но
				изменяющей внешние переменные, что чревато побочными эффектами.
			</p>
			<h3>Именование функций:</h3>
			<ul>
				<li>
					Имя функции должно понятно и чётко отражать, что она делает. Увидев её
					вызов в коде, вы должны тут же понимать, что она делает, и что
					возвращает.
				</li>
				<li>
					Функция – это действие, поэтому её имя обычно является глаголом.
				</li>
				<li>
					Есть много общепринятых префиксов, таких как:{' '}
					<Badge bg='secondary'>create…</Badge>,{' '}
					<Badge bg='secondary'>show…</Badge>,{' '}
					<Badge bg='secondary'>get…</Badge>,{' '}
					<Badge bg='secondary'>check…</Badge> и т.д. Пользуйтесь ими как
					подсказками, поясняющими, что делает функция.
				</li>
			</ul>
			<p>
				Функции являются основными строительными блоками скриптов. Мы
				рассмотрели лишь основы функций в JavaScript, но уже сейчас можем
				создавать и использовать их. Это только начало пути. Мы будем
				неоднократно возвращаться к функциям и изучать их всё более и более
				глубоко.
			</p>
			<TaskViewer tasks={tasks[2.15]} />
		</Container>
	)
}
