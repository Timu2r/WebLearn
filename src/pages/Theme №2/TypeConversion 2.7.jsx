import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function TypeConversion() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Преобразование типов</h1>

			<p>
				Чаще всего операторы и функции автоматически приводят переданные им
				значения к нужному типу.
			</p>
			<p>
				Например, <Badge bg='secondary'>alert</Badge> автоматически преобразует
				любое значение к строке. Математические операторы преобразуют значения к
				числам.
			</p>
			<p>
				Есть также случаи, когда нам нужно явно преобразовать значение в
				ожидаемый тип.
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
					Пока что мы не говорим об объектах
				</h1>
				<p>
					В этой главе мы не касаемся объектов. Сначала мы разберём
					преобразование примитивных значений.
				</p>
				<p>
					Мы разберём преобразование объектов позже, в главе Преобразование
					объектов в примитивы.
				</p>
			</div>

			<h2>Строковое преобразование</h2>
			<p>
				Строковое преобразование происходит, когда требуется представление
				чего-либо в виде строки.
			</p>
			<p>
				Например, <Badge bg='secondary'>alert(value)</Badge> преобразует
				значение к строке.
			</p>
			<p>
				Также мы можем использовать функцию{' '}
				<Badge bg='secondary'>String(value)</Badge>, чтобы преобразовать
				значение к строке:
			</p>
			<CodeJs
				js={`let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string`}
			/>
			<p>
				Преобразование происходит очевидным образом.{' '}
				<Badge bg='secondary'>false</Badge> становится{' '}
				<Badge bg='secondary'>"false"</Badge>,<Badge bg='secondary'>null</Badge>{' '}
				становится <Badge bg='secondary'>"null"</Badge> и т.п.
			</p>

			<h2>Численное преобразование</h2>
			<p>
				Численное преобразование происходит в математических функциях и
				выражениях.
			</p>
			<p>
				Например, когда операция деления <Badge bg='secondary'>/</Badge>{' '}
				применяется не к числу:
			</p>
			<CodeJs js={`alert( "6" / "2" ); // 3, строки преобразуются в числа`} />
			<p>
				Мы можем использовать функцию{' '}
				<Badge bg='secondary'>Number(value)</Badge>, чтобы явно преобразовать
				<Badge bg='secondary'>value</Badge> к числу:
			</p>
			<CodeJs
				js={` let str = "123";
 alert(typeof str); // string
 
 let num = Number(str); // становится числом 123
 
 alert(typeof num); // number`}
			/>
			<p>
				Явное преобразование часто применяется, когда мы ожидаем получить число
				из строкового контекста, например из текстовых полей форм.
			</p>
			<p>
				Если строка не может быть явно приведена к числу, то результатом
				преобразования будет <Badge bg='secondary'>NaN</Badge>. Например:
			</p>
			<CodeJs
				js={`let age = Number("Любая строка вместо числа");

alert(age); // NaN, преобразование не удалось`}
			/>

			<h3>Правила численного преобразования:</h3>
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
								Значение
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Преобразуется в…
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>undefined</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>NaN</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>null</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>0</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>true / false</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>1 / 0</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>string</Badge>
							</td>
							<td style={{ padding: '8px' }}>
								Пробельные символы по краям обрезаются. Далее, если остаётся
								пустая строка, то получаем 0, иначе из непустой строки
								«считывается» число. При ошибке результат NaN.
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>Примеры:</p>
			<CodeJs
				js={` alert( Number("   123   ") ); // 123
 alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
 alert( Number(true) );        // 1
 alert( Number(false) );       // 0`}
			/>
			<p>
				Учтите, что <Badge bg='secondary'>null</Badge> и{' '}
				<Badge bg='secondary'>undefined</Badge> ведут себя по-разному. Так,{' '}
				<Badge bg='secondary'>null</Badge> становится нулём, тогда как{' '}
				<Badge bg='secondary'>undefined</Badge> приводится к{' '}
				<Badge bg='secondary'>NaN</Badge>.
			</p>
			<p>
				Большинство математических операторов также производит данное
				преобразование, как мы увидим в следующей главе.
			</p>

			<h2>Логическое преобразование</h2>
			<p>Логическое преобразование самое простое.</p>
			<p>
				Происходит в логических операциях (позже мы познакомимся с условными
				проверками и подобными конструкциями), но также может быть выполнено
				явно с помощью функции <Badge bg='secondary'>Boolean(value)</Badge>.
			</p>
			<p>Правило преобразования:</p>
			<ul>
				<li>
					Значения, которые интуитивно «пустые», вроде{' '}
					<Badge bg='secondary'>0</Badge>, пустой строки,
					<Badge bg='secondary'>null</Badge>,{' '}
					<Badge bg='secondary'>undefined</Badge> и{' '}
					<Badge bg='secondary'>NaN</Badge>, становятся{' '}
					<Badge bg='secondary'>false</Badge>.
				</li>
				<li>
					Все остальные значения становятся <Badge bg='secondary'>true</Badge>.
				</li>
			</ul>
			<p>Например:</p>
			<CodeJs
				js={` alert( Boolean(1) ); // true
 alert( Boolean(0) ); // false

 alert( Boolean("Привет!") ); // true
 alert( Boolean("") ); // false`}
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
					Заметим, что строка с нулём <Badge bg='secondary'>"0"</Badge> — это{' '}
					<Badge bg='secondary'>true</Badge>
				</h1>
				<p>
					Некоторые языки (к примеру, PHP) воспринимают строку{' '}
					<Badge bg='secondary'>"0"</Badge> как{' '}
					<Badge bg='secondary'>false</Badge>. Но в JavaScript, если строка не
					пустая, то она всегда <Badge bg='secondary'>true</Badge>.
				</p>
				<CodeJs
					js={` alert( Boolean("0") ); // true
 alert( Boolean(" ") ); // пробел это тоже true (любая непустая строка это true)`}
				/>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Существует 3 наиболее широко используемых преобразования: строковое,
				численное и логическое.
			</p>
			<p>
				<Badge bg='secondary'>Строковое</Badge> – Происходит, когда нам нужно
				что-то вывести. Может быть вызвано с помощью{' '}
				<Badge bg='secondary'>String(value)</Badge>. Для примитивных значений
				работает очевидным образом.
			</p>
			<p>
				<Badge bg='secondary'>Численное</Badge> – Происходит в математических
				операциях. Может быть вызвано с помощью{' '}
				<Badge bg='secondary'>Number(value)</Badge>.
			</p>
			<p>Преобразование подчиняется правилам:</p>
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
								Значение
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Становится…
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>undefined</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>NaN</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>null</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>0</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>true / false</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>1 / 0</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>string</Badge>
							</td>
							<td style={{ padding: '8px' }}>
								Пробельные символы по краям обрезаются. Далее, если остаётся
								пустая строка, то получаем 0, иначе из непустой строки
								«считывается» число. При ошибке результат NaN.
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				<Badge bg='secondary'>Логическое</Badge> – Происходит в логических
				операциях. Может быть вызвано с помощью{' '}
				<Badge bg='secondary'>Boolean(value)</Badge>.
			</p>
			<p>Подчиняется правилам:</p>
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
								Значение
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Становится…
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>0, null, undefined, NaN, ""</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>false</Badge>
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>любое другое значение</td>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>true</Badge>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				Большую часть из этих правил легко понять и запомнить. Особые случаи, в
				которых часто допускаются ошибки:
			</p>
			<ul>
				<li>
					<Badge bg='secondary'>undefined</Badge> при численном преобразовании
					становится <Badge bg='secondary'>NaN</Badge>, не{' '}
					<Badge bg='secondary'>0</Badge>.
				</li>
				<li>
					<Badge bg='secondary'>"0"</Badge> и строки из одних пробелов типа{' '}
					<Badge bg='secondary'>" "</Badge> при логическом преобразовании всегда{' '}
					<Badge bg='secondary'>true</Badge>.
				</li>
			</ul>
			<p>
				В этой главе мы не говорили об объектах. Мы вернёмся к ним позже, в
				главе Преобразование объектов в примитивы, посвящённой только объектам,
				сразу после того, как узнаем больше про основы JavaScript.
				<TaskViewer tasks={tasks['2.7']} />
			</p>
		</Container>
	)
}
