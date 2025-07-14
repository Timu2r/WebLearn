import { Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import CodeNote from '../components/CodeNote'

export default function DataTypes() {
	return (
		<Container className='text-light mt-5'>
			<ArrowNavigator />

			<h1>Типы данных</h1>

			<p>
				Значение в JavaScript всегда относится к данным определённого типа.
				Например, это может быть строка или число.
			</p>
			<p>
				Есть восемь основных типов данных в JavaScript. В этой главе мы
				рассмотрим их в общем, а в следующих главах поговорим подробнее о
				каждом.
			</p>
			<p>
				Переменная в JavaScript может содержать любые данные. В один момент там
				может быть строка, а в другой – число:
			</p>

			<CodeNote
				js={` // Не будет ошибкой
 let message = "hello";
 message = 123456;`}
			/>

			<p>
				Языки программирования, в которых такое возможно, называются
				«динамически типизированными». Это значит, что типы данных есть, но
				переменные не привязаны ни к одному из них.
			</p>

			<h2>Число</h2>

			<CodeNote
				js={` let n = 123;
 n = 12.345;`}
			/>

			<p>
				Числовой тип данных (
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					number
				</span>
				) представляет как целочисленные значения, так и числа с плавающей
				точкой.
			</p>
			<p>
				Существует множество операций для чисел, например, умножение
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					*
				</span>
				, деление
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					/
				</span>
				, сложение
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					+
				</span>
				, вычитание
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					-
				</span>
				и так далее.
			</p>
			<p>
				Кроме обычных чисел, существуют так называемые «специальные числовые
				значения», которые относятся к этому типу данных:{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					Infinity
				</span>
				,{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					-Infinity
				</span>{' '}
				и{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					NaN
				</span>
				.
			</p>

			<ul>
				<li>
					{' '}
					<p>
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							Infinity
						</span>{' '}
						представляет собой математическую бесконечность ∞. Это особое
						значение, которое больше любого числа.
					</p>
					<p>Мы можем получить его в результате деления на ноль:</p>
					<CodeJs js={` alert( 1 / 0 ); // Infinity`} />
					<p>Или задать его явно:</p>
					<CodeJs js={` alert( Infinity ); // Infinity`} />
				</li>
				<li>
					<p>
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							NaN
						</span>{' '}
						означает вычислительную ошибку. Это результат неправильной или
						неопределённой математической операции, например:
					</p>
					<CodeJs
						js={` alert( не число / 2 ); 
 // NaN, такое деление является ошибкой`}
					/>
					<p>
						Значение{' '}
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							NaN
						</span>{' '}
						«прилипчиво». Любая математическая операция с{' '}
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							NaN
						</span>{' '}
						возвращает{' '}
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							NaN
						</span>{' '}
						:
					</p>
					<CodeJs
						js={` alert( NaN + 1 ); // NaN
 alert( 3 * NaN ); // NaN
 alert( не число / 2 - 1 ); // NaN`}
					/>

					<p>
						Если где-то в математическом выражении есть{' '}
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							NaN
						</span>{' '}
						, то оно распространяется на весь результат (есть только одно
						исключение:{' '}
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							NaN ** 0
						</span>{' '}
						равно{' '}
						<span
							style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
						>
							1
						</span>
						).
					</p>
				</li>
			</ul>

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
					{' '}
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Математические операции – безопасны
				</h1>
				<p>
					Математические операции в JavaScript «безопасны». Мы можем делать что
					угодно: делить на ноль, обращаться с нечисловыми строками как с
					числами и т.д.
				</p>
				<p>
					Скрипт никогда не остановится с фатальной ошибкой (не «умрёт»). В
					худшем случае мы получим{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						NaN
					</span>{' '}
					как результат выполнения.
				</p>
			</div>
			<p>
				Специальные числовые значения относятся к типу «число». Конечно, это не
				числа в привычном значении этого слова.
			</p>
			<p>Подробнее о работе с числами мы поговорим в главе Числа.</p>

			<h2>BigInt</h2>

			<p>
				В JavaScript тип{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					number
				</span>{' '}
				не может безопасно работать с числами, большими, чем{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					(2⁵³-1)
				</span>{' '}
				( т. е.{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					9007199254740991
				</span>{' '}
				) или меньшими, чем{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					-(2⁵³-1)
				</span>{' '}
				для отрицательных чисел.
			</p>
			<p>
				Если говорить совсем точно, то, технически, тип{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					number
				</span>{' '}
				может хранить большие целые числа{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					(до 1.7976931348623157 * 10308)
				</span>{' '}
				, но за пределами безопасного диапазона целых чисел{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					±(2⁵³-1)
				</span>{' '}
				будет ошибка точности, так как не все цифры помещаются в фиксированную
				64-битную память. Поэтому можно хранить «приблизительное» значение.
			</p>

			<p>
				Например, эти два числа (прямо за пределами безопасного диапазона)
				совпадают:
			</p>

			<CodeNote
				js={` console.log(9007199254740991 + 1); // 9007199254740992
 console.log(9007199254740991 + 2); // 9007199254740992`}
			/>

			<p>
				То есть все нечетные целые числа, большие чем{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					(2⁵³-1)
				</span>
				, вообще не могут храниться в типе{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					number
				</span>
				.
			</p>

			<p>
				В большинстве случаев безопасного диапазона чисел от{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					-(2⁵³-1)
				</span>{' '}
				до{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					(2⁵³-1)
				</span>
				вполне достаточно, но иногда нам требуется весь диапазон действительно
				гигантских целых чисел без каких-либо ограничений или пропущенных
				значений внутри него. Например, в криптографии или при использовании
				метки времени («timestamp») с микросекундами.
			</p>
			<p>
				Тип BigInt был добавлен в JavaScript, чтобы дать возможность работать с
				целыми числами произвольной длины.
			</p>
			<p>
				Чтобы создать значение типа{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					BigInt
				</span>{' '}
				, необходимо добавить{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					n
				</span>{' '}
				в конец числового литерала:
			</p>

			<CodeNote
				js={` // символ n в конце означает, что это BigInt
 const bigInt = 1234567890123456789012345678901234567890n;`}
			/>

			<p>
				Так как необходимость в использовании{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					BigInt
				</span>{' '}
				–чисел появляется достаточно редко, мы рассмотрим их в отдельной главе
				BigInt. Ознакомьтесь с ней, когда вам понадобятся настолько большие
				числа.
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
					{' '}
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Поддержка
				</h1>
				<p>
					В данный момент{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						BigInt
					</span>{' '}
					поддерживается только в браузерах Firefox, Chrome, Edge и Safari, но
					не поддерживается в IE.
				</p>
			</div>

			<h2>Строка</h2>
			<p>
				Строка (
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					string
				</span>{' '}
				) в JavaScript должна быть заключена в кавычки.
			</p>

			<CodeNote
				js={` let str = "Привет";
 let str2 = 'Одинарные кавычки тоже подойдут';
 let phrase = \`Обратные кавычки позволяют встраивать переменные \${str}\`; `}
			/>

			<p>В JavaScript существует три типа кавычек.</p>

			<ol>
				<li>
					Двойные кавычки:{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&quot;Привет&quot;
					</span>{' '}
					.
				</li>
				<li>
					Одинарные кавычки:{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&#39;Привет&#39;
					</span>{' '}
					.
				</li>
				<li>
					Обратные кавычки:{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						{'`Привет`'}
					</span>
					.
				</li>
			</ol>

			<p>
				Двойные или одинарные кавычки являются «простыми», между ними нет
				разницы в JavaScript.
			</p>
			<p>
				Обратные же кавычки имеют расширенную функциональность. Они позволяют
				нам встраивать выражения в строку, заключая их в{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					{'${…}'}
				</span>
				. Например:
			</p>

			<CodeJs
				js={` let name = "Иван";

 // Вставим переменную
 alert(\`Привет, \${name}!\`); // Привет, Иван!

 // Вставим выражение
 alert(\`результат: \${1 + 2}\`); // результат: 3`}
			/>

			<p>
				Выражение внутри{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					{'${…}'}
				</span>{' '}
				вычисляется, и его результат становится частью строки. Мы можем положить
				туда всё, что угодно: переменную{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					name
				</span>{' '}
				, или выражение{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					1 + 2
				</span>{' '}
				, или что-то более сложное.
			</p>

			<p>
				Обратите внимание, что это можно делать только в обратных кавычках.
				Другие кавычки не имеют такой функциональности встраивания!
			</p>

			<CodeJs
				js={` alert( "результат: \${1 + 2}" ); 
 // результат: \${1 + 2} (двойные кавычки ничего не делают)`}
			/>

			<p>Мы рассмотрим строки более подробно в главе Строки.</p>

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
					{' '}
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Нет отдельного типа данных для одного символа.
				</h1>
				<p>
					В некоторых языках, например C и Java, для хранения одного символа,
					например{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&quot;a&quot;
					</span>{' '}
					или{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&quot;%&quot;
					</span>{' '}
					, существует отдельный тип. В языках C и Java это
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						char
					</span>{' '}
					.
				</p>
				<p>
					В JavaScript подобного типа нет, есть только тип{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						string
					</span>
					. Строка может содержать ноль символов (быть пустой), один символ или
					множество.
				</p>
			</div>

			<h2>Булевый (логический) тип</h2>

			<p>
				Булевый тип (boolean) может принимать только два значения: true (истина)
				и false (ложь).
			</p>

			<p>
				Такой тип, как правило, используется для хранения значений да/нет: true
				значит «да, правильно», а false значит «нет, не правильно».{' '}
			</p>

			<p>Например:</p>

			<CodeNote
				js={` let nameFieldChecked = true; // да, поле отмечено
 let ageFieldChecked = false; // нет, поле не отмечено`}
			/>

			<p>Булевые значения также могут быть результатом сравнений:</p>

			<CodeJs
				js={` let isGreater = 4 > 1;

 alert( isGreater ); 
 // true (результатом сравнения будет "да")`}
			/>

			<p>
				Мы рассмотрим булевые значения более подробно в главе Логические
				операторы.
			</p>

			<h2>Значение «null»</h2>

			<p>
				Специальное значение null не относится ни к одному из типов, описанных
				выше.
			</p>

			<p>Оно формирует отдельный тип, который содержит только значение null:</p>

			<CodeNote js={` let user = null;`} />

			<p>
				В JavaScript null не является «ссылкой на несуществующий объект» или
				«нулевым указателем», как в некоторых других языках.
			</p>

			<p>
				Это просто специальное значение, которое представляет собой «ничего»,
				«пусто» или «значение неизвестно».
			</p>

			<p>
				В приведённом выше коде указано, что значение переменной age неизвестно.
			</p>

			<h2>Значение «undefined»</h2>

			<p>
				Специальное значение undefined также стоит особняком. Оно формирует тип
				из самого себя так же, как и null.
			</p>

			<p>Оно означает, что «значение не было присвоено».</p>

			<p>
				Если переменная объявлена, но ей не присвоено никакого значения, то её
				значением будет undefined:
			</p>

			<CodeJs
				js={` let age;

 alert(age); // выведет "undefined"`}
			/>

			<p>Технически мы можем присвоить значение undefined любой переменной:</p>

			<CodeJs
				js={` let age = 123;

 // изменяем значение на undefined
 age = undefined;

 alert(age); // "undefined"`}
			/>

			<p>
				…Но так делать не рекомендуется. Обычно null используется для присвоения
				переменной «пустого» или «неизвестного» значения, а undefined – для
				проверок, была ли переменная назначена.
			</p>

			<h2>Объекты и символы</h2>

			<p>Тип object (объект) – особенный.</p>

			<p>
				Все остальные типы называются «примитивными», потому что их значениями
				могут быть только простые значения (будь то строка, или число, или
				что-то ещё). В объектах же хранят коллекции данных или более сложные
				структуры.
			</p>

			<p>
				Объекты занимают важное место в языке и требуют особого внимания. Мы
				разберёмся с ними в главе Объекты после того, как узнаем больше о
				примитивах.
			</p>

			<p>
				Тип symbol (символ) используется для создания уникальных идентификаторов
				в объектах. Мы упоминаем здесь о нём для полноты картины, изучим этот
				тип после объектов.
			</p>

			<h2>Оператор typeof</h2>

			<p>
				Оператор typeof возвращает тип аргумента. Это полезно, когда мы хотим
				обрабатывать значения различных типов по-разному или просто хотим
				сделать проверку.
			</p>

			<p>У него есть две синтаксические формы:</p>

			<CodeJs
				js={` // Обычный синтаксис
 typeof 5 // Выведет "number"
 // Синтаксис, напоминающий вызов функции (встречается реже)
 typeof(5) // Также выведет "number" `}
			/>

			<p>
				Если передается выражение, то нужно заключать его в скобки, т.к. typeof
				имеет более высокий приоритет, чем бинарные операторы:
			</p>

			<CodeJs
				js={` typeof 50 + " Квартир"; // Выведет "number Квартир"
 typeof (50 + " Квартир"); // Выведет "string" `}
			/>

			<p>
				Другими словами, скобки необходимы для определения типа значения,
				которое получилось в результате выполнения выражения в них.
			</p>

			<p>Вызов typeof x возвращает строку с именем типа:</p>

			<CodeJs
				js={` typeof undefined // "undefined"

 typeof 0 // "number"

 typeof 10n // "bigint"

 typeof true // "boolean"

 typeof "foo" // "string"

 typeof Symbol("id") // "symbol"

 typeof Math // "object"  (1)

 typeof null // "object"  (2)

 typeof alert // "function"  (3)`}
			/>

			<p>Последние три строки нуждаются в пояснении:</p>

			<ol>
				<li>
					Math — это встроенный объект, который предоставляет математические
					операции и константы. Мы рассмотрим его подробнее в главе Числа. Здесь
					он служит лишь примером объекта.
				</li>
				<li>
					Результатом вызова typeof null является &quot;object&quot;. Это
					официально признанная ошибка в typeof, ведущая начало с времён
					создания JavaScript и сохранённая для совместимости. Конечно, null не
					является объектом. Это специальное значение с отдельным типом.
				</li>
				<li>
					Вызов typeof alert возвращает &quot;function&quot;, потому что alert
					является функцией. Мы изучим функции в следующих главах, где заодно
					увидим, что в JavaScript нет специального типа «функция». Функции
					относятся к объектному типу. Но typeof обрабатывает их особым образом,
					возвращая &quot;function&quot;. Так тоже повелось от создания
					JavaScript. Формально это неверно, но может быть удобным на практике.
				</li>
			</ol>

			<h2>Итого</h2>

			<p>В JavaScript есть 8 основных типов данных.</p>

			<ul>
				<li>
					<p>Семь из них называют «примитивными» типами данных:</p>
					<ul>
						<li>
							number для любых чисел: целочисленных или чисел с плавающей
							точкой; целочисленные значения ограничены диапазоном ±(253-1).
						</li>
						<li>bigint для целых чисел произвольной длины.</li>
						<li>
							string для строк. Строка может содержать ноль или больше символов,
							нет отдельного символьного типа.
						</li>
						<li>boolean для true/false.</li>
						<li>
							null для неизвестных значений – отдельный тип, имеющий одно
							значение null.
						</li>
						<li>
							undefined для неприсвоенных значений – отдельный тип, имеющий одно
							значение undefined.
						</li>
						<li>symbol для уникальных идентификаторов.</li>
					</ul>
				</li>
				<li>
					<p>И один не является «примитивным» и стоит особняком:</p>

					<ul>
						<li>object для более сложных структур данных.</li>
					</ul>
				</li>
			</ul>

			<p>
				Оператор typeof позволяет нам увидеть, какой тип данных сохранён в
				переменной.
			</p>

			<ul>
				<li>Имеет две формы: typeof x или typeof(x).</li>
				<li>Возвращает строку с именем типа. Например, &quot;string&quot;.</li>
				<li>
					Для null возвращается &quot;object&quot; – это ошибка в языке, на
					самом деле это не объект.
				</li>
			</ul>

			<p>
				В следующих главах мы сконцентрируемся на примитивных значениях, а когда
				познакомимся с ними, перейдём к объектам.
			</p>
		</Container>
	)
}
