import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import CodeNote from '../components/CodeNote'
import TaskViewer from '../components/TaskViewer/TaskViewer'
import { tasks } from '../data/tasks.js'

export default function ConditionalBranching() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Условное ветвление: if, '?'</h1>

			<p>
				Иногда нам нужно выполнить различные действия в зависимости от условий.
			</p>
			<p>
				Для этого мы можем использовать инструкцию{' '}
				<Badge bg='secondary'>if</Badge> и условный оператор{' '}
				<Badge bg='secondary'>?</Badge>, который также называют оператором
				«вопросительный знак».
			</p>

			<h2>Инструкция «if»</h2>
			<p>
				Инструкция <Badge bg='secondary'>if(...)</Badge> вычисляет условие в
				скобках и, если результат <Badge bg='secondary'>true</Badge>, то
				выполняет блок кода.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) alert( 'Вы правы!' );`}
			/>
			<p>
				В примере выше, условие – это простая проверка на равенство{' '}
				<Badge bg='secondary'>(year == 2015)</Badge>, но оно может быть и
				гораздо более сложным.
			</p>
			<p>
				Если мы хотим выполнить более одной инструкции, то нужно заключить блок
				кода в фигурные скобки:
			</p>
			<CodeNote
				js={`if (year == 2015) {
  alert( "Правильно!" );
  alert( "Вы такой умный!" );
}`}
			/>
			<p>
				Мы рекомендуем использовать фигурные скобки{' '}
				<Badge bg='secondary'>{'{}'}</Badge> всегда, когда вы используете
				инструкцию <Badge bg='secondary'>if</Badge>, даже если выполняется
				только одна команда. Это улучшает читаемость кода.
			</p>

			<h2>Преобразование к логическому типу</h2>
			<p>
				Инструкция <Badge bg='secondary'>if (…)</Badge> вычисляет выражение в
				скобках и преобразует результат к логическому типу.
			</p>
			<p>
				Давайте вспомним правила преобразования типов из главы Преобразование
				типов:
			</p>
			<ul>
				<li>
					Число <Badge bg='secondary'>0</Badge>, пустая строка{' '}
					<Badge bg='secondary'>""</Badge>, <Badge bg='secondary'>null</Badge>,{' '}
					<Badge bg='secondary'>undefined</Badge> и{' '}
					<Badge bg='secondary'>NaN</Badge> становятся{' '}
					<Badge bg='secondary'>false</Badge>. Из-за этого их называют «ложными»
					(«falsy») значениями.
				</li>
				<li>
					Остальные значения становятся <Badge bg='secondary'>true</Badge>,
					поэтому их называют «правдивыми» («truthy»).
				</li>
			</ul>
			<p>Таким образом, код при таком условии никогда не выполнится:</p>
			<CodeNote
				js={`if (0) { // 0 is falsy
  ...
}`}
			/>
			<p>…а при таком – выполнится всегда:</p>
			<CodeNote
				js={`if (1) { // 1 is truthy
  ...
}`}
			/>
			<p>
				Мы также можем передать заранее вычисленное в переменной логическое
				значение в <Badge bg='secondary'>if</Badge>, например так:
			</p>
			<CodeNote
				js={`let condition = (year == 2015); // преобразуется к true или false

if (condition) {
  ...
}`}
			/>

			<h2>Блок «else»</h2>
			<p>
				Инструкция <Badge bg='secondary'>if</Badge> может содержать
				необязательный блок «<Badge bg='secondary'>else</Badge>» («иначе»). Он
				выполняется, когда условие ложно.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}`}
			/>

			<h2>Несколько условий: «else if»</h2>
			<p>
				Иногда нужно проверить несколько вариантов условия. Для этого
				используется блок <Badge bg='secondary'>else if</Badge>.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}`}
			/>
			<p>
				В приведённом выше коде JavaScript сначала проверит{' '}
				<Badge bg='secondary'>year &lt; 2015</Badge>. Если это неверно, он
				переходит к следующему условию{' '}
				<Badge bg='secondary'>year &gt; 2015</Badge>. Если оно тоже ложно, тогда
				сработает последний <Badge bg='secondary'>alert</Badge>.
			</p>
			<p>
				Блоков <Badge bg='secondary'>else if</Badge> может быть и больше.
				Присутствие блока <Badge bg='secondary'>else</Badge> не является
				обязательным.
			</p>

			<h2>Условный оператор „?"</h2>
			<p>Иногда нам нужно определить переменную в зависимости от условия.</p>
			<p>Например:</p>
			<CodeJs
				js={`let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);`}
			/>
			<p>
				Так называемый «условный» оператор «вопросительный знак» позволяет нам
				сделать это более коротким и простым способом.
			</p>
			<p>
				Оператор представлен знаком вопроса <Badge bg='secondary'>?</Badge>. Его
				также называют «тернарный», так как этот оператор, единственный в своём
				роде, имеет три аргумента.
			</p>
			<p>Синтаксис:</p>
			<CodeNote js={`let result = условие ? значение1 : значение2;`} />
			<p>
				Сначала вычисляется условие: если оно истинно, тогда возвращается
				значение1, в противном случае – значение2.
			</p>
			<p>Например:</p>
			<CodeNote js={`let accessAllowed = (age > 18) ? true : false;`} />
			<p>
				Технически, мы можем опустить круглые скобки вокруг{' '}
				<Badge bg='secondary'>age &gt; 18</Badge>. Оператор вопросительного
				знака имеет низкий приоритет, поэтому он выполняется после сравнения{' '}
				<Badge bg='secondary'>&gt;</Badge>.
			</p>
			<p>Этот пример будет делать то же самое, что и предыдущий:</p>
			<CodeNote
				js={`// оператор сравнения "age > 18" выполняется первым в любом случае
// (нет необходимости заключать его в скобки)
let accessAllowed = age > 18 ? true : false;`}
			/>
			<p>
				Но скобки делают код более простым для восприятия, поэтому мы
				рекомендуем их использовать.
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
					На заметку:
				</h1>
				<p>
					В примере выше вы можете избежать использования оператора
					вопросительного знака <Badge bg='secondary'>?</Badge>, т.к. сравнение
					само по себе уже возвращает <Badge bg='secondary'>true</Badge>/
					<Badge bg='secondary'>false</Badge>:
				</p>
				<CodeNote
					js={`// то же самое
let accessAllowed = age > 18;`}
				/>
			</div>

			<h2>Несколько операторов „?"</h2>
			<p>
				Последовательность операторов вопросительного знака{' '}
				<Badge bg='secondary'>?</Badge> позволяет вернуть значение, которое
				зависит от более чем одного условия.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );`}
			/>
			<p>
				Поначалу может быть сложно понять, что происходит. Но при ближайшем
				рассмотрении мы видим, что это обычная последовательная проверка:
			</p>
			<ol>
				<li>
					Первый знак вопроса проверяет <Badge bg='secondary'>age &lt; 3</Badge>
					.
				</li>
				<li>
					Если верно – возвращает{' '}
					<Badge bg='secondary'>'Здравствуй, малыш!'</Badge>. В противном
					случае, проверяет выражение после двоеточия „:", вычисляет{' '}
					<Badge bg='secondary'>age &lt; 18</Badge>.
				</li>
				<li>
					Если это верно – возвращает <Badge bg='secondary'>'Привет!'</Badge>. В
					противном случае, проверяет выражение после следующего двоеточия „:",
					вычисляет <Badge bg='secondary'>age &lt; 100</Badge>.
				</li>
				<li>
					Если это верно – возвращает{' '}
					<Badge bg='secondary'>'Здравствуйте!'</Badge>. В противном случае,
					возвращает выражение после последнего двоеточия –
					<Badge bg='secondary'>'Какой необычный возраст!'</Badge>.
				</li>
			</ol>
			<p>
				Вот как это выглядит при использовании{' '}
				<Badge bg='secondary'>if..else</Badge>:
			</p>
			<CodeNote
				js={`if (age < 3) {
  message = 'Здравствуй, малыш!';
} else if (age < 18) {
  message = 'Привет!';
} else if (age < 100) {
  message = 'Здравствуйте!';
} else {
  message = 'Какой необычный возраст!';
}`}
			/>

			<h2>Нетрадиционное использование „?"</h2>
			<p>
				Иногда оператор «вопросительный знак» <Badge bg='secondary'>?</Badge>{' '}
				используется в качестве замены <Badge bg='secondary'>if</Badge>:
			</p>
			<CodeJs
				js={`let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Верно!') : alert('Неправильно.');`}
			/>
			<p>
				В зависимости от условия{' '}
				<Badge bg='secondary'>company == 'Netscape'</Badge>, будет выполнена
				либо первая, либо вторая часть после <Badge bg='secondary'>?</Badge>.
			</p>
			<p>
				Здесь мы не присваиваем результат переменной. Вместо этого мы выполняем
				различный код в зависимости от условия.
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
					Не рекомендуется использовать оператор вопросительного знака таким
					образом.
				</h1>
				<p>
					Несмотря на то, что такая запись короче, чем эквивалентная инструкция{' '}
					<Badge bg='secondary'>if</Badge>, она хуже читается.
				</p>
				<p>
					Вот, для сравнения, тот же код, использующий{' '}
					<Badge bg='secondary'>if</Badge>:
				</p>
				<CodeJs
					js={`let company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape') {
  alert('Верно!');
} else {
  alert('Неправильно.');
}`}
				/>
				<p>
					При чтении глаза сканируют код по вертикали. Блоки кода, занимающие
					несколько строк, воспринимаются гораздо легче, чем длинный
					горизонтальный набор инструкций.
				</p>
				<p>
					Смысл оператора «вопросительный знак» <Badge bg='secondary'>?</Badge>{' '}
					– вернуть то или иное значение, в зависимости от условия. Пожалуйста,
					используйте его именно для этого. Когда вам нужно выполнить разные
					ветви кода – используйте <Badge bg='secondary'>if</Badge>.
				</p>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Условное ветвление в JavaScript позволяет выполнять различный код в
				зависимости от условий.
			</p>
			<p>
				<Badge bg='secondary'>if</Badge> – основная инструкция для условного
				выполнения кода. Может дополняться блоками{' '}
				<Badge bg='secondary'>else</Badge> и{' '}
				<Badge bg='secondary'>else if</Badge> для проверки нескольких условий.
			</p>
			<p>
				<Badge bg='secondary'>? :</Badge> – условный (тернарный) оператор для
				краткой записи условных выражений. Используется для возврата значения в
				зависимости от условия.
			</p>
			<p>
				Всегда помните о преобразовании типов: все «ложные» значения{' '}
				<Badge bg='secondary'>(0, "", null, undefined, NaN)</Badge> становятся{' '}
				<Badge bg='secondary'>false</Badge>, остальные –{' '}
				<Badge bg='secondary'>true</Badge>.
			</p>
			<p>
				Рекомендуется использовать фигурные скобки даже для одной инструкции в{' '}
				<Badge bg='secondary'>if</Badge> для улучшения читаемости кода.
			</p>
			<TaskViewer tasks={tasks['2.10']} />
		</Container>
	)
}
