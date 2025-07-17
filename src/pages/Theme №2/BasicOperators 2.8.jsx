import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function BasicOperators() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Базовые операторы, математика</h1>

			<p>
				Многие операторы знакомы нам ещё со школы: сложение{' '}
				<Badge bg='secondary'>+</Badge>, умножение{' '}
				<Badge bg='secondary'>*</Badge>, вычитание{' '}
				<Badge bg='secondary'>-</Badge> и так далее.
			</p>
			<p>
				В этой главе мы начнём с простых операторов, а потом сконцентрируемся на
				специфических для JavaScript аспектах, которые не проходят в школьном
				курсе арифметики.
			</p>

			<h2>Термины: «унарный», «бинарный», «операнд»</h2>
			<p>Прежде, чем мы двинемся дальше, давайте разберёмся с терминологией.</p>
			<p>
				<strong>Операнд</strong> – то, к чему применяется оператор. Например, в
				умножении <Badge bg='secondary'>5 * 2</Badge> есть два операнда: левый
				операнд равен 5, а правый операнд равен 2. Иногда их называют
				«аргументами» вместо «операндов».
			</p>
			<p>
				<strong>Унарным</strong> называется оператор, который применяется к
				одному операнду. Например, оператор унарный минус{' '}
				<Badge bg='secondary'>"-"</Badge> меняет знак числа на противоположный:
			</p>
			<CodeJs
				js={`let x = 1;

x = -x;
alert( x ); // -1, применили унарный минус`}
			/>
			<p>
				<strong>Бинарным</strong> называется оператор, который применяется к
				двум операндам. Тот же минус существует и в бинарной форме:
			</p>
			<CodeJs
				js={`let x = 1, y = 3;
alert( y - x ); // 2, бинарный минус вычитает значения`}
			/>
			<p>
				Формально, в последних примерах мы говорим о двух разных операторах,
				использующих один символ: оператор отрицания (унарный оператор, который
				обращает знак) и оператор вычитания (бинарный оператор, который вычитает
				одно число из другого).
			</p>

			<h2>Математика</h2>
			<p>Поддерживаются следующие математические операторы:</p>
			<ul>
				<li>
					Сложение <Badge bg='secondary'>+</Badge>,
				</li>
				<li>
					Вычитание <Badge bg='secondary'>-</Badge>,
				</li>
				<li>
					Умножение <Badge bg='secondary'>*</Badge>,
				</li>
				<li>
					Деление <Badge bg='secondary'>/</Badge>,
				</li>
				<li>
					Взятие остатка от деления <Badge bg='secondary'>%</Badge>,
				</li>
				<li>
					Возведение в степень <Badge bg='secondary'>**</Badge>.
				</li>
			</ul>
			<p>
				Первые четыре оператора очевидны, а про <Badge bg='secondary'>%</Badge>{' '}
				и <Badge bg='secondary'>**</Badge> стоит сказать несколько слов.
			</p>

			<h3>Взятие остатка %</h3>
			<p>
				Оператор взятия остатка <Badge bg='secondary'>%</Badge>, несмотря на
				обозначение, никакого отношения к процентам не имеет.
			</p>
			<p>
				Результат <Badge bg='secondary'>a % b</Badge> – это остаток от
				целочисленного деления a на b.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`alert( 5 % 2 ); // 1, остаток от деления 5 на 2
alert( 8 % 3 ); // 2, остаток от деления 8 на 3
alert( 8 % 4 ); // 0, остаток от деления 8 на 4`}
			/>

			<h3>Возведение в степень **</h3>
			<p>
				Оператор возведения в степень <Badge bg='secondary'>a ** b</Badge>{' '}
				возводит a в степень b.
			</p>
			<p>
				В школьной математике мы записываем это как a<sup>b</sup>.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16`}
			/>
			<p>
				Математически, оператор работает и для нецелых чисел. Например,
				квадратный корень является возведением в степень ½:
			</p>
			<CodeJs
				js={`alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)`}
			/>

			<h2>Сложение строк при помощи бинарного +</h2>
			<p>
				Давайте рассмотрим специальные возможности операторов JavaScript,
				которые выходят за рамки школьной арифметики.
			</p>
			<p>
				Обычно при помощи плюса <Badge bg='secondary'>'+'</Badge> складывают
				числа.
			</p>
			<p>
				Но если бинарный оператор <Badge bg='secondary'>'+'</Badge> применить к
				строкам, то он их объединяет в одну:
			</p>
			<CodeJs
				js={`let s = "моя" + "строка";
alert(s); // моястрока`}
			/>
			<p>
				Обратите внимание, если хотя бы один операнд является строкой, то второй
				будет также преобразован в строку.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"`}
			/>
			<p>Как видите, не важно, первый или второй операнд является строкой.</p>
			<p>Вот пример посложнее:</p>
			<CodeJs js={`alert(2 + 2 + '1' ); // будет "41", а не "221"`} />
			<p>
				Здесь операторы работают один за другим. Первый{' '}
				<Badge bg='secondary'>+</Badge> складывает два числа и возвращает 4,
				затем следующий <Badge bg='secondary'>+</Badge> объединяет результат со
				строкой, производя действие <Badge bg='secondary'>4 + '1' = '41'</Badge>
				.
			</p>
			<p>
				Сложение и преобразование строк — это особенность бинарного плюса{' '}
				<Badge bg='secondary'>+</Badge>. Другие арифметические операторы
				работают только с числами и всегда преобразуют операнды в числа.
			</p>
			<p>Например, вычитание и деление:</p>
			<CodeJs
				js={`alert( 6 - '2' ); // 4, '2' приводится к числу
alert( '6' / '2' ); // 3, оба операнда приводятся к числам`}
			/>

			<h2>Приведение к числу, унарный +</h2>
			<p>
				Плюс <Badge bg='secondary'>+</Badge> существует в двух формах: бинарной,
				которую мы использовали выше, и унарной.
			</p>
			<p>
				Унарный, то есть применённый к одному значению, плюс{' '}
				<Badge bg='secondary'>+</Badge> ничего не делает с числами. Но если
				операнд не число, унарный плюс преобразует его в число.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`// Не влияет на числа
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Преобразует не числа в числа
alert( +true ); // 1
alert( +"" );   // 0`}
			/>
			<p>
				На самом деле это то же самое, что и{' '}
				<Badge bg='secondary'>Number(...)</Badge>, только короче.
			</p>
			<p>
				Необходимость преобразовывать строки в числа возникает очень часто.
				Например, обычно значения полей HTML-формы — это строки. А что, если их
				нужно, к примеру, сложить?
			</p>
			<p>Бинарный плюс сложит их как строки:</p>
			<CodeJs
				js={`let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", так как бинарный плюс объединяет строки`}
			/>
			<p>Поэтому используем унарный плюс, чтобы преобразовать к числу:</p>
			<CodeJs
				js={`let apples = "2";
let oranges = "3";

// оба операнда предварительно преобразованы в числа
alert( +apples + +oranges ); // 5

// более длинный вариант
// alert( Number(apples) + Number(oranges) ); // 5`}
			/>
			<p>
				С точки зрения математики, такое изобилие плюсов выглядит странным. Но с
				точки зрения программиста тут нет ничего особенного: сначала выполнятся
				унарные плюсы, которые приведут строки к числам, а затем бинарный{' '}
				<Badge bg='secondary'>'+'</Badge> их сложит.
			</p>
			<p>
				Почему унарные плюсы выполнились до бинарного сложения? Как мы сейчас
				увидим, дело в их приоритете.
			</p>

			<h2>Приоритет операторов</h2>
			<p>
				В том случае, если в выражении есть несколько операторов – порядок их
				выполнения определяется приоритетом, или, другими словами, существует
				определённый порядок выполнения операторов.
			</p>
			<p>
				Из школы мы знаем, что умножение в выражении{' '}
				<Badge bg='secondary'>1 + 2 * 2</Badge> выполнится раньше сложения. Это
				как раз и есть «приоритет». Говорят, что умножение имеет более высокий
				приоритет, чем сложение.
			</p>
			<p>
				Скобки важнее, чем приоритет, так что, если мы не удовлетворены порядком
				по умолчанию, мы можем использовать их, чтобы изменить приоритет.
				Например, написать <Badge bg='secondary'>(1 + 2) * 2</Badge>.
			</p>
			<p>
				В JavaScript много операторов. Каждый оператор имеет соответствующий
				номер приоритета. Тот, у кого это число больше, – выполнится раньше.
				Если приоритет одинаковый, то порядок выполнения – слева направо.
			</p>
			<p>
				Отрывок из таблицы приоритетов (нет необходимости всё запоминать,
				обратите внимание, что приоритет унарных операторов выше, чем
				соответствующих бинарных):
			</p>

			<div
				style={{
					border: '2px solid rgb(108, 117, 125)',
					borderRadius: '8px',
					margin: '20px 0',
					padding: '20px',
					backgroundColor: 'rgba(108, 117, 125, 0.1)',
				}}
			>
				<table style={{ width: '100%', borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Приоритет
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Название
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Обозначение
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								15
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								унарный плюс
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>+</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								15
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								унарный минус
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>-</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								14
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								возведение в степень
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>**</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								13
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								умножение
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>*</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								13
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								деление
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>/</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								12
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								сложение
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>+</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								12
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								вычитание
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>-</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>2</td>
							<td style={{ padding: '8px' }}>присваивание</td>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>=</Badge>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Так как «унарный плюс» имеет приоритет 15, который выше, чем 12 у
				«сложения» (бинарный плюс), то в выражении{' '}
				<Badge bg='secondary'>"+apples + +oranges"</Badge> сначала выполнятся
				унарные плюсы, а затем сложение.
			</p>

			<h2>Присваивание</h2>
			<p>
				Давайте отметим, что в таблице приоритетов также есть оператор
				присваивания <Badge bg='secondary'>=</Badge>. У него один из самых
				низких приоритетов: 2.
			</p>
			<p>
				Именно поэтому, когда переменной что-либо присваивают, например,{' '}
				<Badge bg='secondary'>x = 2 * 2 + 1</Badge>, то сначала выполнится
				арифметика, а уже затем произойдёт присваивание{' '}
				<Badge bg='secondary'>=</Badge> с сохранением результата в x.
			</p>
			<CodeJs
				js={`let x = 2 * 2 + 1;

alert( x ); // 5`}
			/>

			<h3>Присваивание = возвращает значение</h3>
			<p>
				Тот факт, что <Badge bg='secondary'>=</Badge> является оператором, а не
				«магической» конструкцией языка, имеет интересные последствия.
			</p>
			<p>
				Большинство операторов в JavaScript возвращают значение. Для некоторых
				это очевидно, например сложение <Badge bg='secondary'>+</Badge> или
				умножение <Badge bg='secondary'>*</Badge>. Но и оператор присваивания не
				является исключением.
			</p>
			<p>
				Вызов <Badge bg='secondary'>x = value</Badge> записывает value в x и
				возвращает его.
			</p>
			<p>
				Благодаря этому присваивание можно использовать как часть более сложного
				выражения:
			</p>
			<CodeJs
				js={`let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0`}
			/>
			<p>
				В примере выше результатом <Badge bg='secondary'>(a = b + 1)</Badge>{' '}
				будет значение, которое присваивается переменной a (то есть 3). Потом
				оно используется для дальнейших вычислений.
			</p>
			<p>
				Забавное применение присваивания, не так ли? Нам нужно понимать, как это
				работает, потому что иногда это можно увидеть в JavaScript-библиотеках.
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
					Не рекомендуется писать в таком стиле
				</h1>
				<p>
					Однако писать самим в таком стиле не рекомендуется. Такие трюки не
					сделают ваш код более понятным или читабельным.
				</p>
			</div>

			<h3>Присваивание по цепочке</h3>
			<p>Рассмотрим ещё одну интересную возможность: цепочку присваиваний.</p>
			<CodeJs
				js={`let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4`}
			/>
			<p>
				Такое присваивание работает справа налево. Сначала вычисляется самое
				правое выражение <Badge bg='secondary'>2 + 2</Badge>, и затем результат
				присваивается переменным слева: c, b и a. В конце у всех переменных
				будет одно значение.
			</p>
			<p>
				Опять-таки, чтобы код читался легче, лучше разделять подобные
				конструкции на несколько строчек:
			</p>
			<CodeJs
				js={`c = 2 + 2;
b = c;
a = c;`}
			/>

			<h2>Сокращённая арифметика с присваиванием</h2>
			<p>
				Часто нужно применить оператор к переменной и сохранить результат в ней
				же.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let n = 2;
n = n + 5;
n = n * 2;`}
			/>
			<p>
				Эту запись можно укоротить при помощи совмещённых операторов{' '}
				<Badge bg='secondary'>+=</Badge> и <Badge bg='secondary'>*=</Badge>:
			</p>
			<CodeJs
				js={`let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

alert( n ); // 14`}
			/>
			<p>
				Подобные краткие формы записи существуют для всех арифметических и
				побитовых операторов: <Badge bg='secondary'>/=</Badge>,{' '}
				<Badge bg='secondary'>-=</Badge>, <Badge bg='secondary'>**=</Badge> и
				так далее.
			</p>
			<p>
				Вызов с присваиванием имеет в точности такой же приоритет, как обычное
				присваивание, то есть выполнится после большинства других операций:
			</p>
			<CodeJs
				js={`let n = 2;

n *= 3 + 5;

alert( n ); // 16  (сначала выполнится правая часть, выражение идентично n *= 8)`}
			/>

			<h2>Инкремент/декремент</h2>
			<p>
				Увеличение или уменьшение числа на единицу – одна из наиболее частых
				числовых операций.
			</p>
			<p>Поэтому для неё существуют специальные операторы:</p>
			<ul>
				<li>
					<Badge bg='secondary'>Инкремент ++</Badge> увеличивает переменную на 1
				</li>
				<li>
					<Badge bg='secondary'>Декремент --</Badge> уменьшает переменную на 1
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
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Важно
				</h1>
				<p>
					Инкремент/декремент можно применить только к переменным. Попытка
					использовать его на значении типа <Badge bg='secondary'>5++</Badge>{' '}
					приведёт к ошибке.
				</p>
			</div>

			<h3>Префиксная и постфиксная формы</h3>
			<p>
				Операторы <Badge bg='secondary'>++</Badge> и{' '}
				<Badge bg='secondary'>--</Badge> могут быть расположены как перед
				переменной, так и после неё.
			</p>
			<ul>
				<li>
					Когда оператор идёт после переменной – это «постфиксная форма»:{' '}
					<Badge bg='secondary'>counter++</Badge>.
				</li>
				<li>
					Когда оператор идёт перед переменной – это «префиксная форма»:{' '}
					<Badge bg='secondary'>++counter</Badge>.
				</li>
			</ul>

			<p>
				Обе эти формы делают одно и то же: увеличивают{' '}
				<Badge bg='secondary'>counter</Badge> на <Badge bg='secondary'>1</Badge>
				.
			</p>

			<p>
				Есть ли разница между ними? Да, но увидеть её мы сможем только тогда,
				когда используем значение, которое возвращают{' '}
				<Badge bg='secondary'>++/--</Badge>.
			</p>

			<p>
				Давайте проясним этот момент. Как мы знаем, все операторы возвращают
				значение. Операторы инкремента/декремента не исключение. Префиксная
				форма возвращает новое значение, в то время как постфиксная форма
				возвращает старое (до увеличения/уменьшения числа).
			</p>

			<p>Чтобы увидеть разницу, вот пример:</p>
			<CodeJs
				js={`let counter = 1;
let a = ++counter; // (*)

alert(a); // 2`}
			/>

			<p>
				В строке <Badge bg='secondary'>(*)</Badge> префиксная форма{' '}
				<Badge bg='secondary'>++counter</Badge> увеличивает{' '}
				<Badge bg='secondary'>counter</Badge> и возвращает новое значение{' '}
				<Badge bg='secondary'>2</Badge>. Так что{' '}
				<Badge bg='secondary'>alert</Badge> покажет{' '}
				<Badge bg='secondary'>2</Badge>.
			</p>

			<p>Теперь посмотрим на постфиксную форму:</p>
			<CodeJs
				js={`let counter = 1;
let a = counter++; // (*)

alert(a); // 1`}
			/>

			<p>
				В строке <Badge bg='secondary'>(*)</Badge> постфиксная форма{' '}
				<Badge bg='secondary'>counter++</Badge> также увеличивает{' '}
				<Badge bg='secondary'>counter</Badge>, но возвращает старое значение
				(которое было до увеличения). Так что{' '}
				<Badge bg='secondary'>alert</Badge> покажет{' '}
				<Badge bg='secondary'>1</Badge>.
			</p>

			<h3>Подведём итоги:</h3>
			<ul>
				<li>
					Если результат оператора не используется, а нужно только
					увеличить/уменьшить переменную, тогда без разницы, какую форму
					использовать:
				</li>
			</ul>
			<CodeJs
				js={`let counter = 0;
counter++;
++counter;
alert( counter ); // 2, обе строки сделали одно и то же`}
			/>

			<ul>
				<li>
					Если хочется тут же использовать результат, то нужна префиксная форма:
				</li>
			</ul>
			<CodeJs
				js={`let counter = 0;
alert( ++counter ); // 1`}
			/>

			<ul>
				<li>
					Если нужно увеличить и при этом получить значение переменной до
					увеличения – нужна постфиксная форма:
				</li>
			</ul>
			<CodeJs
				js={`let counter = 0;
alert( counter++ ); // 0`}
			/>

			<h3>Инкремент/декремент можно использовать в любых выражениях</h3>
			<p>
				Операторы <Badge bg='secondary'>++/--</Badge> могут также использоваться
				внутри выражений. Их приоритет выше, чем у большинства других
				арифметических операций.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let counter = 1;
alert( 2 * ++counter ); // 4`}
			/>

			<p>Сравните с:</p>
			<CodeJs
				js={`let counter = 1;
alert( 2 * counter++ ); // 2, потому что counter++ возвращает "старое" значение`}
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
					Рекомендация по стилю кода
				</h1>
				<p>
					Хотя технически здесь всё в порядке, такая запись обычно делает код
					менее читабельным. Одна строка выполняет множество действий –
					нехорошо.
				</p>
				<p>
					При беглом чтении кода можно с лёгкостью пропустить такой{' '}
					<Badge bg='secondary'>counter++</Badge>, и будет неочевидно, что
					переменная увеличивается.
				</p>
				<p>Лучше использовать стиль «одна строка – одно действие»:</p>
				<CodeJs
					js={`let counter = 1;
alert( 2 * counter );
counter++;`}
				/>
			</div>

			<h2>Побитовые операторы</h2>
			<p>
				Побитовые операторы работают с 32-разрядными целыми числами (при
				необходимости приводят к ним), на уровне их внутреннего двоичного
				представления.
			</p>
			<p>
				Эти операторы не являются чем-то специфичным для JavaScript, они
				поддерживаются в большинстве языков программирования.
			</p>

			<h3>Поддерживаются следующие побитовые операторы:</h3>
			<div
				style={{
					border: '2px solid rgb(108, 117, 125)',
					borderRadius: '8px',
					margin: '20px 0',
					padding: '20px',
					backgroundColor: 'rgba(108, 117, 125, 0.1)',
				}}
			>
				<table style={{ width: '100%', borderCollapse: 'collapse' }}>
					<thead>
						<tr>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Оператор
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Описание
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Символ
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								AND(и)
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Побитовое И
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>&</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								OR(или)
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Побитовое ИЛИ
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>|</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								XOR
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Побитовое исключающее ИЛИ
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>^</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								NOT(не)
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Побитовое НЕ
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>~</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								LEFT SHIFT
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Левый сдвиг
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>{'<<'}</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								RIGHT SHIFT
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Правый сдвиг
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>{'>>'}</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>ZERO-FILL RIGHT SHIFT</td>
							<td style={{ padding: '8px' }}>
								Правый сдвиг с заполнением нулями
							</td>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>{'>>>'}</Badge>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Они используются редко, когда возникает необходимость оперировать с
				числами на очень низком (побитовом) уровне. В ближайшем времени они нам
				не понадобятся, так как веб-разработчики редко к ним прибегают, хотя в
				некоторых сферах (например, в криптографии) они полезны.
			</p>

			<h2>Оператор «запятая»</h2>
			<p>
				Оператор «запятая» <Badge bg='secondary'>(,)</Badge> редко применяется и
				является одним из самых необычных. Иногда он используется для написания
				более короткого кода, поэтому нам нужно знать его, чтобы понимать, что
				при этом происходит.
			</p>
			<p>
				Оператор «запятая» предоставляет нам возможность вычислять несколько
				выражений, разделяя их запятой <Badge bg='secondary'>,</Badge>. Каждое
				выражение выполняется, но возвращается результат только последнего.
			</p>

			<p>Например:</p>
			<CodeJs
				js={`let a = (1 + 2, 3 + 4);

alert( a ); // 7 (результат вычисления 3 + 4)`}
			/>

			<p>
				Первое выражение <Badge bg='secondary'>1 + 2</Badge> выполняется, а
				результат отбрасывается. Затем идёт <Badge bg='secondary'>3 + 4</Badge>,
				выражение выполняется и возвращается результат.
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
					Запятая имеет очень низкий приоритет
				</h1>
				<p>
					Пожалуйста, обратите внимание, что оператор
					<Badge bg='secondary'>,</Badge> имеет очень низкий приоритет, ниже{' '}
					<Badge bg='secondary'>=</Badge>, поэтому скобки важны в приведённом
					выше примере.
				</p>
				<p>
					Попробуйте запустить следующий код (строгий режим{' '}
					<Badge bg='secondary'>"use strict"</Badge> в примере ниже не
					используется, иначе мы бы получили ошибку):
				</p>
				<CodeJs
					js={`a = 1 + 2, 3 + 4;

alert(a); // 3`}
				/>
				<p>
					Без скобок в <Badge bg='secondary'>a = 1 + 2, 3 + 4</Badge> сначала
					выполнится <Badge bg='secondary'>+</Badge>, суммируя числа в{' '}
					<Badge bg='secondary'>a = 3, 7</Badge>, затем оператор присваивания{' '}
					<Badge bg='secondary'>=</Badge> присвоит{' '}
					<Badge bg='secondary'>a = 3</Badge>, а то, что идёт дальше, будет
					проигнорировано. Всё так же, как в{' '}
					<Badge bg='secondary'>(a = 1 + 2), 3 + 4</Badge>.
				</p>
			</div>

			<h3>
				Зачем нам оператор, который отбрасывает всё, кроме последнего выражения?
			</h3>
			<p>
				Иногда его используют в составе более сложных конструкций, чтобы сделать
				несколько действий в одной строке.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`// три операции в одной строке
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}`}
			/>

			<p>
				Такие трюки используются во многих JavaScript-фреймворках. Вот почему мы
				упоминаем их. Но обычно они не улучшают читабельность кода, поэтому
				стоит хорошо подумать, прежде чем их использовать.
			</p>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Мы рассмотрели операторы <Badge bg='secondary'>++/--</Badge> для
				инкремента и декремента, побитовые операторы и оператор запятая.
			</p>
			<p>
				<Badge bg='secondary'>Инкремент/декремент</Badge> – увеличивает или
				уменьшает переменную на 1. Префиксная форма возвращает новое значение,
				постфиксная – старое.
			</p>
			<p>
				<Badge bg='secondary'>Побитовые операторы</Badge> – работают с числами
				на уровне битов. Используются редко, но полезны для специфических задач.
			</p>
			<p>
				<Badge bg='secondary'>Оператор запятая</Badge> – позволяет вычислить
				несколько выражений в одной строке, возвращая результат только
				последнего.
			</p>
			<TaskViewer tasks={tasks['2.9']} />
		</Container>
	)
}
