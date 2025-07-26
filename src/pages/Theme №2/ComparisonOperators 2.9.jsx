import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function ComparisonOperators() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Операторы сравнения</h1>

			<p>Многие операторы сравнения известны нам из математики.</p>

			<p>В JavaScript они записываются так:</p>
			<ul>
				<li>
					<strong>Больше/меньше:</strong>{' '}
					<Badge bg='secondary'>a {'>'} b</Badge>,{' '}
					<Badge bg='secondary'>a {'<'} b</Badge>.
				</li>
				<li>
					<strong>Больше/меньше или равно:</strong>{' '}
					<Badge bg='secondary'>a {'>='} b</Badge>,{' '}
					<Badge bg='secondary'>a {'<='} b</Badge>.
				</li>
				<li>
					<strong>Равно:</strong> <Badge bg='secondary'>a == b</Badge>. Обратите
					внимание, для сравнения используется двойной знак равенства{' '}
					<Badge bg='secondary'>==</Badge>. Один знак равенства{' '}
					<Badge bg='secondary'>a = b</Badge> означал бы присваивание.
				</li>
				<li>
					<strong>Не равно:</strong> В математике обозначается символом ≠, но в
					JavaScript записывается как <Badge bg='secondary'>a != b</Badge>.
				</li>
			</ul>

			<p>
				В этом разделе мы больше узнаем про то, какие бывают сравнения, как язык
				с ними работает и к каким неожиданностям мы должны быть готовы.
			</p>

			<h2>Результат сравнения имеет логический тип</h2>
			<p>Все операторы сравнения возвращают значение логического типа:</p>
			<ul>
				<li>
					<Badge bg='secondary'>true</Badge> – означает «да», «верно», «истина».
				</li>
				<li>
					<Badge bg='secondary'>false</Badge> – означает «нет», «неверно»,
					«ложь».
				</li>
			</ul>

			<p>Например:</p>
			<CodeJs
				js={`alert( 2 > 1 );  // true (верно)
alert( 2 == 1 ); // false (неверно)
alert( 2 != 1 ); // true (верно)`}
			/>

			<p>
				Результат сравнения можно присвоить переменной, как и любое значение:
			</p>
			<CodeJs
				js={`let result = 5 > 4; // результат сравнения присваивается переменной result
alert( result ); // true`}
			/>

			<h2>Сравнение строк</h2>
			<p>
				Чтобы определить, что одна строка больше другой, JavaScript использует
				«алфавитный» или «лексикографический» порядок.
			</p>
			<p>Другими словами, строки сравниваются посимвольно.</p>

			<p>Например:</p>
			<CodeJs
				js={`alert( 'Я' > 'А' ); // true
alert( 'Коты' > 'Кода' ); // true
alert( 'Сонный' > 'Сон' ); // true`}
			/>

			<h3>Алгоритм сравнения двух строк довольно прост:</h3>
			<ol>
				<li>Сначала сравниваются первые символы строк.</li>
				<li>
					Если первый символ первой строки больше (меньше), чем первый символ
					второй, то первая строка больше (меньше) второй. Сравнение завершено.
				</li>
				<li>
					Если первые символы равны, то таким же образом сравниваются уже вторые
					символы строк.
				</li>
				<li>Сравнение продолжается, пока не закончится одна из строк.</li>
				<li>
					Если обе строки заканчиваются одновременно, то они равны. Иначе,
					большей считается более длинная строка.
				</li>
			</ol>

			<p>
				В примерах выше сравнение <Badge bg='secondary'>'Я' {'>'} 'А'</Badge>{' '}
				завершится на первом шаге, тогда как строки{' '}
				<Badge bg='secondary'>'Коты'</Badge> и{' '}
				<Badge bg='secondary'>'Кода'</Badge> будут сравниваться посимвольно:
			</p>
			<ul>
				<li>К равна К.</li>
				<li>о равна о.</li>
				<li>
					т больше, чем д. На этом сравнение заканчивается. Первая строка
					больше.
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
					Используется кодировка Unicode, а не настоящий алфавит
				</h1>
				<p>
					Приведённый выше алгоритм сравнения похож на алгоритм, используемый в
					словарях и телефонных книгах, но между ними есть и различия.
				</p>
				<p>
					Например, в JavaScript имеет значение регистр символов. Заглавная
					буква <Badge bg='secondary'>"A"</Badge> не равна строчной{' '}
					<Badge bg='secondary'>"a"</Badge>. Какая же из них больше? Строчная{' '}
					<Badge bg='secondary'>"a"</Badge>. Почему? Потому что строчные буквы
					имеют больший код во внутренней таблице кодирования, которую
					использует JavaScript (Unicode).
				</p>
			</div>

			<h2>Сравнение разных типов</h2>
			<p>
				При сравнении значений разных типов JavaScript приводит каждое из них к
				числу.
			</p>

			<p>Например:</p>
			<CodeJs
				js={`alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1`}
			/>

			<p>
				Логическое значение <Badge bg='secondary'>true</Badge> становится{' '}
				<Badge bg='secondary'>1</Badge>, а <Badge bg='secondary'>false</Badge> –{' '}
				<Badge bg='secondary'>0</Badge>.
			</p>

			<p>Например:</p>
			<CodeJs
				js={`alert( true == 1 ); // true
alert( false == 0 ); // true`}
			/>

			<h3>Забавное следствие</h3>
			<p>Возможна следующая ситуация:</p>
			<ul>
				<li>Два значения равны.</li>
				<li>
					Одно из них <Badge bg='secondary'>true</Badge> как логическое
					значение, другое – <Badge bg='secondary'>false</Badge>.
				</li>
			</ul>

			<p>Например:</p>
			<CodeJs
				js={`let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!`}
			/>

			<p>
				С точки зрения JavaScript, результат ожидаем. Равенство преобразует
				значения, используя числовое преобразование, поэтому{' '}
				<Badge bg='secondary'>"0"</Badge> становится{' '}
				<Badge bg='secondary'>0</Badge>. В то время как явное преобразование с
				помощью <Badge bg='secondary'>Boolean</Badge> использует другой набор
				правил.
			</p>

			<h2>Строгое сравнение</h2>
			<p>
				Использование обычного сравнения <Badge bg='secondary'>==</Badge> может
				вызывать проблемы. Например, оно не отличает{' '}
				<Badge bg='secondary'>0</Badge> от <Badge bg='secondary'>false</Badge>:
			</p>
			<CodeJs js={`alert( 0 == false ); // true`} />

			<p>Та же проблема с пустой строкой:</p>
			<CodeJs js={`alert( '' == false ); // true`} />

			<p>
				Это происходит из-за того, что операнды разных типов преобразуются
				оператором <Badge bg='secondary'>==</Badge> к числу. В итоге, и пустая
				строка, и <Badge bg='secondary'>false</Badge> становятся нулём.
			</p>

			<p>
				Как же тогда отличать <Badge bg='secondary'>0</Badge> от{' '}
				<Badge bg='secondary'>false</Badge>?
			</p>

			<p>
				<strong>
					Оператор строгого равенства <Badge bg='secondary'>===</Badge>{' '}
					проверяет равенство без приведения типов.
				</strong>
			</p>

			<p>
				Другими словами, если <Badge bg='secondary'>a</Badge> и{' '}
				<Badge bg='secondary'>b</Badge> имеют разные типы, то проверка{' '}
				<Badge bg='secondary'>a === b</Badge> немедленно возвращает{' '}
				<Badge bg='secondary'>false</Badge> без попытки их преобразования.
			</p>

			<p>Давайте проверим:</p>
			<CodeJs
				js={`alert( 0 === false ); // false, так как сравниваются разные типы`}
			/>

			<p>
				Ещё есть оператор строгого неравенства <Badge bg='secondary'>!==</Badge>
				, аналогичный <Badge bg='secondary'>!=</Badge>.
			</p>

			<p>
				Оператор строгого равенства дольше писать, но он делает код более
				очевидным и оставляет меньше места для ошибок.
			</p>

			<h2>Сравнение с null и undefined</h2>
			<p>
				Поведение <Badge bg='secondary'>null</Badge> и{' '}
				<Badge bg='secondary'>undefined</Badge> при сравнении с другими
				значениями — особое:
			</p>

			<h3>При строгом равенстве ===</h3>
			<p>Эти значения различны, так как различны их типы.</p>
			<CodeJs js={`alert( null === undefined ); // false`} />

			<h3>При нестрогом равенстве ==</h3>
			<p>
				Эти значения равны друг другу и не равны никаким другим значениям. Это
				специальное правило языка.
			</p>
			<CodeJs js={`alert( null == undefined ); // true`} />

			<h3>
				При использовании математических операторов и других операторов
				сравнения {'< > <= >='}
			</h3>
			<p>
				Значения <Badge bg='secondary'>null/undefined</Badge> преобразуются к
				числам: <Badge bg='secondary'>null</Badge> становится{' '}
				<Badge bg='secondary'>0</Badge>, а{' '}
				<Badge bg='secondary'>undefined</Badge> –{' '}
				<Badge bg='secondary'>NaN</Badge>.
			</p>

			<p>
				Посмотрим, какие забавные вещи случаются, когда мы применяем эти
				правила. И, что более важно, как избежать ошибок при их использовании.
			</p>

			<h3>Странный результат сравнения null и 0</h3>
			<p>
				Сравним <Badge bg='secondary'>null</Badge> с нулём:
			</p>
			<CodeJs
				js={`alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true`}
			/>

			<p>
				С точки зрения математики это странно. Результат последнего сравнения
				говорит о том, что «null больше или равно нулю», тогда результат одного
				из сравнений выше должен быть <Badge bg='secondary'>true</Badge>, но они
				оба ложны.
			</p>

			<p>
				Причина в том, что нестрогое равенство и сравнения{' '}
				<Badge bg='secondary'>{'>'}</Badge> <Badge bg='secondary'>{'<'}</Badge>{' '}
				<Badge bg='secondary'>{'>='}</Badge>{' '}
				<Badge bg='secondary'>{'<='}</Badge> работают по-разному. Сравнения
				преобразуют <Badge bg='secondary'>null</Badge> в число, рассматривая его
				как <Badge bg='secondary'>0</Badge>. Поэтому выражение{' '}
				<Badge bg='secondary'>(3) null {'>='} 0</Badge> истинно, а{' '}
				<Badge bg='secondary'>null {'>'} 0</Badge> ложно.
			</p>

			<p>
				С другой стороны, для нестрогого равенства{' '}
				<Badge bg='secondary'>==</Badge> значений{' '}
				<Badge bg='secondary'>undefined</Badge> и{' '}
				<Badge bg='secondary'>null</Badge> действует особое правило: эти
				значения ни к чему не приводятся, они равны друг другу и не равны ничему
				другому. Поэтому <Badge bg='secondary'>(2) null == 0</Badge> ложно.
			</p>

			<h3>Несравненное значение undefined</h3>
			<p>
				Значение <Badge bg='secondary'>undefined</Badge> несравнимо с другими
				значениями:
			</p>
			<CodeJs
				js={`alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)`}
			/>

			<p>
				Почему же сравнение <Badge bg='secondary'>undefined</Badge> с нулём
				всегда ложно?
			</p>

			<p>На это есть следующие причины:</p>
			<ul>
				<li>
					Сравнения (1) и (2) возвращают <Badge bg='secondary'>false</Badge>,
					потому что <Badge bg='secondary'>undefined</Badge> преобразуется в{' '}
					<Badge bg='secondary'>NaN</Badge>, а <Badge bg='secondary'>NaN</Badge>{' '}
					– это специальное числовое значение, которое возвращает{' '}
					<Badge bg='secondary'>false</Badge> при любых сравнениях.
				</li>
				<li>
					Нестрогое равенство (3) возвращает <Badge bg='secondary'>false</Badge>
					, потому что <Badge bg='secondary'>undefined</Badge> равно только{' '}
					<Badge bg='secondary'>null</Badge>,{' '}
					<Badge bg='secondary'>undefined</Badge> и ничему больше.
				</li>
			</ul>

			<h2>Как избежать проблем</h2>
			<p>
				Зачем мы рассмотрели все эти примеры? Должны ли мы постоянно помнить обо
				всех этих особенностях? Необязательно. Со временем все они станут вам
				знакомы, но можно избежать проблем, если следовать надёжным правилам:
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
					Рекомендации по избежанию проблем
				</h1>
				<ul>
					<li>
						Относитесь очень осторожно к любому сравнению с{' '}
						<Badge bg='secondary'>undefined/null</Badge>, кроме случаев строгого
						равенства <Badge bg='secondary'>===</Badge>.
					</li>
					<li>
						Не используйте сравнения <Badge bg='secondary'>{'>='}</Badge>{' '}
						<Badge bg='secondary'>{'>'}</Badge>{' '}
						<Badge bg='secondary'>{'<'}</Badge>{' '}
						<Badge bg='secondary'>{'<='}</Badge> с переменными, которые могут
						принимать значения <Badge bg='secondary'>null/undefined</Badge>,
						разве что вы полностью уверены в том, что делаете. Если переменная
						может принимать эти значения, то добавьте для них отдельные
						проверки.
					</li>
				</ul>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<ul>
				<li>Операторы сравнения возвращают значения логического типа.</li>
				<li>Строки сравниваются посимвольно в лексикографическом порядке.</li>
				<li>
					Значения разных типов при сравнении приводятся к числу. Исключением
					является сравнение с помощью операторов строгого
					равенства/неравенства.
				</li>
				<li>
					Значения <Badge bg='secondary'>null</Badge> и{' '}
					<Badge bg='secondary'>undefined</Badge> равны{' '}
					<Badge bg='secondary'>==</Badge> друг другу и не равны любому другому
					значению.
				</li>
				<li>
					Будьте осторожны при использовании операторов сравнений вроде{' '}
					<Badge bg='secondary'>{'>'}</Badge> и{' '}
					<Badge bg='secondary'>{'<'}</Badge> с переменными, которые могут
					принимать значения <Badge bg='secondary'>null/undefined</Badge>.
					Хорошей идеей будет сделать отдельную проверку на{' '}
					<Badge bg='secondary'>null/undefined</Badge>.
				</li>
			</ul>
			<TaskViewer tasks={tasks['2.9']} />
		</Container>
	)
}
