import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function LogicalOperators() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Логические операторы</h1>

			<p>В JavaScript есть семь логических операторов:</p>
			<ul>
				<li>
					<Badge bg='secondary'>||</Badge> (ИЛИ)
				</li>
				<li>
					<Badge bg='secondary'>||=</Badge> (Оператор логического присваивания
					ИЛИ)
				</li>
				<li>
					<Badge bg='secondary'>&&</Badge> (И)
				</li>
				<li>
					<Badge bg='secondary'>&&=</Badge> (Оператор логического присваивания
					И)
				</li>
				<li>
					<Badge bg='secondary'>!</Badge> (НЕ)
				</li>
				<li>
					<Badge bg='secondary'>??</Badge> (Оператор нулевого слияния)
				</li>
				<li>
					<Badge bg='secondary'>??=</Badge> (Оператор нулевого присваивания)
				</li>
			</ul>
			<p>
				Здесь мы рассмотрим первые пять, операторы{' '}
				<Badge bg='secondary'>??</Badge> и <Badge bg='secondary'>??=</Badge>{' '}
				будут в следующей статье.
			</p>
			<p>
				Несмотря на своё название, данные операторы могут применяться к
				значениям любых типов. Полученные результаты также могут иметь различный
				тип.
			</p>

			<h2>|| (ИЛИ)</h2>
			<p>Оператор «ИЛИ» выглядит как двойной символ вертикальной черты:</p>
			<CodeNote js={`result = a || b;`} />
			<p>
				Традиционно в программировании ИЛИ предназначено только для
				манипулирования булевыми значениями: в случае, если какой-либо из
				аргументов <Badge bg='secondary'>true</Badge>, он вернёт{' '}
				<Badge bg='secondary'>true</Badge>, в противоположной ситуации
				возвращается <Badge bg='secondary'>false</Badge>.
			</p>
			<p>Существует всего четыре возможные логические комбинации:</p>
			<CodeJs
				js={`alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false`}
			/>
			<p>
				Как мы можем наблюдать, результат операций всегда равен{' '}
				<Badge bg='secondary'>true</Badge>, за исключением случая, когда оба
				аргумента <Badge bg='secondary'>false</Badge>.
			</p>
			<p>
				Если значение не логического типа, то оно к нему приводится в целях
				вычислений.
			</p>
			<CodeJs
				js={`if (1 || 0) { // работает как if( true || false )
  alert( 'истинно!' );
}`}
			/>

			<h3>ИЛИ "||" находит первое истинное значение</h3>
			<p>
				При выполнении ИЛИ <Badge bg='secondary'>||</Badge> с несколькими
				значениями:
			</p>
			<CodeNote js={`result = value1 || value2 || value3;`} />
			<p>
				Оператор <Badge bg='secondary'>||</Badge> выполняет следующие действия:
			</p>
			<ul>
				<li>Вычисляет операнды слева направо.</li>
				<li>
					Каждый операнд конвертирует в логическое значение. Если результат{' '}
					<Badge bg='secondary'>true</Badge>, останавливается и возвращает
					исходное значение этого операнда.
				</li>
				<li>
					Если все операнды являются ложными (
					<Badge bg='secondary'>false</Badge>), возвращает последний из них.
				</li>
			</ul>
			<CodeJs
				js={`alert( 1 || 0 ); // 1 (1 - истинное значение)
alert( true || 'какая-то строка' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)`}
			/>

			<h3>Сокращённое вычисление</h3>
			<p>
				Ещё одной отличительной особенностью оператора ИЛИ{' '}
				<Badge bg='secondary'>||</Badge> является так называемое «сокращённое
				вычисление».
			</p>
			<CodeJs
				js={`true || alert("никогда не сработает");
false || alert("сработает");`}
			/>

			<h2>||= (Логическое присваивание ИЛИ)</h2>
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
					Новая возможность
				</h1>
				<p>
					Эта возможность была добавлена в язык недавно. В старых браузерах
					может понадобиться полифил.
				</p>
			</div>
			<p>
				Оператор логического присваивания ИЛИ <Badge bg='secondary'>||=</Badge>{' '}
				записывается как обычный ИЛИ <Badge bg='secondary'>||</Badge> с
				добавлением символа присваивания <Badge bg='secondary'>=</Badge>.
			</p>
			<CodeNote js={`a ||= b;`} />
			<p>
				Оператор <Badge bg='secondary'>||=</Badge> принимает два операнда и
				выполняет следующие действия:
			</p>
			<ul>
				<li>Вычисляет операнды слева направо.</li>
				<li>
					Конвертирует <Badge bg='secondary'>a</Badge> в логическое значение.
				</li>
				<li>
					Если <Badge bg='secondary'>a</Badge> ложно, присваивает{' '}
					<Badge bg='secondary'>a</Badge> значение{' '}
					<Badge bg='secondary'>b</Badge>.
				</li>
			</ul>
			<CodeJs
				js={`let johnHasCar = false;

johnHasCar ||= "У Джона нет машины!"; // то же самое, что false || (johnHasCar = "...")

alert( johnHasCar ); // "У Джона нет машины!"`}
			/>

			<h2>&& (И)</h2>
			<p>
				Оператор И пишется как два амперсанда <Badge bg='secondary'>&&</Badge>:
			</p>
			<CodeNote js={`result = a && b;`} />
			<p>
				В традиционном программировании И возвращает{' '}
				<Badge bg='secondary'>true</Badge>, если оба аргумента истинны, а иначе
				– <Badge bg='secondary'>false</Badge>:
			</p>
			<CodeJs
				js={`alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false`}
			/>

			<h3>И «&&» находит первое ложное значение</h3>
			<p>При нескольких подряд операторах И:</p>
			<CodeNote js={`result = value1 && value2 && value3;`} />
			<p>
				Оператор <Badge bg='secondary'>&&</Badge> выполняет следующие действия:
			</p>
			<ul>
				<li>Вычисляет операнды слева направо.</li>
				<li>
					Каждый операнд преобразует в логическое значение. Если результат{' '}
					<Badge bg='secondary'>false</Badge>, останавливается и возвращает
					исходное значение этого операнда.
				</li>
				<li>Если все операнды были истинными, возвращается последний.</li>
			</ul>
			<CodeJs
				js={`// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "какая-то строка" ); // 0`}
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
					Приоритет оператора && больше, чем у ||
				</h1>
				<p>
					Приоритет оператора И <Badge bg='secondary'>&&</Badge> больше, чем ИЛИ{' '}
					<Badge bg='secondary'>||</Badge>, так что он выполняется раньше.
				</p>
				<p>
					Таким образом, код <Badge bg='secondary'>a && b || c && d</Badge> по
					существу такой же, как если бы выражения{' '}
					<Badge bg='secondary'>&&</Badge> были в круглых скобках:{' '}
					<Badge bg='secondary'>(a && b) || (c && d)</Badge>.
				</p>
			</div>

			<h2>&&= (Логическое присваивание И)</h2>
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
					Новая возможность
				</h1>
				<p>
					Эта возможность была добавлена в язык недавно. В старых браузерах
					может понадобиться полифил.
				</p>
			</div>
			<p>
				Оператор логического присваивания И <Badge bg='secondary'>&&=</Badge>{' '}
				записывается как два амперсанда <Badge bg='secondary'>&&</Badge> и
				символ присваивания <Badge bg='secondary'>=</Badge>.
			</p>
			<CodeNote js={`a &&= b;`} />
			<p>
				Принцип действия <Badge bg='secondary'>&&=</Badge> практически такой же,
				как и у оператора логического присваивания ИЛИ{' '}
				<Badge bg='secondary'>||=</Badge>. Единственное отличие заключается в
				том, что <Badge bg='secondary'>&&=</Badge> присвоит{' '}
				<Badge bg='secondary'>a</Badge> значение <Badge bg='secondary'>b</Badge>{' '}
				только в том случае, если <Badge bg='secondary'>a</Badge> истинно.
			</p>
			<CodeJs
				js={`let greeting = "Привет"; // строка непустая, поэтому будет преобразована к логическому значению true оператором &&=

greeting &&= greeting + ", пользователь!"; // то же самое, что true && (greeting = greeting + "...")

alert( greeting ) // "Привет, пользователь!"`}
			/>

			<h2>! (НЕ)</h2>
			<p>
				Оператор НЕ представлен восклицательным знаком{' '}
				<Badge bg='secondary'>!</Badge>.
			</p>
			<CodeNote js={`result = !value;`} />
			<p>Оператор принимает один аргумент и выполняет следующие действия:</p>
			<ul>
				<li>
					Сначала приводит аргумент к логическому типу{' '}
					<Badge bg='secondary'>true</Badge>/<Badge bg='secondary'>false</Badge>
					.
				</li>
				<li>Затем возвращает противоположное значение.</li>
			</ul>
			<CodeJs
				js={`alert( !true ); // false
alert( !0 ); // true`}
			/>
			<p>
				В частности, двойное НЕ <Badge bg='secondary'>!!</Badge> используют для
				преобразования значений к логическому типу:
			</p>
			<CodeJs
				js={`alert( !!"непустая строка" ); // true
alert( !!null ); // false`}
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
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Приоритет НЕ ! является наивысшим
				</h1>
				<p>
					Приоритет НЕ <Badge bg='secondary'>!</Badge> является наивысшим из
					всех логических операторов, поэтому он всегда выполняется первым,
					перед <Badge bg='secondary'>&&</Badge> или{' '}
					<Badge bg='secondary'>||</Badge>.
				</p>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Существует 5 основных логических операторов:{' '}
				<Badge bg='secondary'>||</Badge>, <Badge bg='secondary'>||=</Badge>,{' '}
				<Badge bg='secondary'>&&</Badge>, <Badge bg='secondary'>&&=</Badge> и{' '}
				<Badge bg='secondary'>!</Badge>.
			</p>
			<p>
				<Badge bg='secondary'>ИЛИ ||</Badge> – Находит первое истинное значение
				или возвращает последнее, если все ложные. Использует сокращённое
				вычисление.
			</p>
			<p>
				<Badge bg='secondary'>И &&</Badge> – Находит первое ложное значение или
				возвращает последнее, если все истинные. Имеет более высокий приоритет,
				чем <Badge bg='secondary'>||</Badge>.
			</p>
			<p>
				<Badge bg='secondary'>НЕ !</Badge> – Преобразует значение к логическому
				типу и возвращает противоположное. Имеет наивысший приоритет среди
				логических операторов.
			</p>
			<p>
				<Badge bg='secondary'>Операторы присваивания ||= и &&=</Badge> – Новые
				операторы для краткой записи логических операций с присваиванием.
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
								Оператор
							</th>
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
								Описание
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>!</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Наивысший
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Логическое НЕ
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>&&</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Высокий
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Логическое И
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>||</Badge>
							</td>
							<td style={{ padding: '8px' }}>Низкий</td>
							<td style={{ padding: '8px' }}>Логическое ИЛИ</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Все эти операторы работают не только с булевыми значениями, но и с
				любыми типами данных, применяя автоматическое преобразование типов при
				необходимости.
			</p>
			<p>
				Рекомендуется использовать каждую конструкцию по назначению:{' '}
				<Badge bg='secondary'>if</Badge> для условий, логические операторы для
				логических операций.
			</p>
			<TaskViewer tasks={tasks['2.11']} />
		</Container>
	)
}
