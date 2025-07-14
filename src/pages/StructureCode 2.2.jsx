import { Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeRunner from '../components/CodeRunner'
import CodeNote from '../components/CodeNote'
import CodeJs from '../components/CodeJs'


export default function StructureCode() {
	const fullHtml = ` alert('Привет'); alert('Мир');`

	const jsCode = ` alert('Привет'); alert('Мир');`

	const fullHtml2 = ` alert('Привет');
alert('Мир');`

	const jsCode2 = ` alert('Привет');
 alert('Мир');`

	const fullHtml3 = ` alert('Привет')
alert('Мир')`

	const jsCode3 = ` alert('Привет')
 alert('Мир')`

	const fullHtml4 = ` alert(3 +
 1
 + 2);`

	const jsCode4 = ` alert(3 +
 1
 + 2);`

	const fullHtml5 = ` alert('Hello')

 [1, 2].forEach(alert);`

	const jsCode5 = ` alert('Hello')

 [1, 2].forEach(alert);`

	const fullHtml6 = ` alert('Hello')[1, 2].forEach(alert);`

	const jsCode6 = ` alert('Hello')[1, 2].forEach(alert);`

	const fullHtml7 = ` // Этот комментарий занимает всю строку
 alert('Привет');

 alert('Мир'); // Этот комментарий следует за инструкцией`

	const jsCode7 = ` // Этот комментарий занимает всю строку
 alert('Привет');

 alert('Мир'); // Этот комментарий следует за инструкцией`

 const fullHtml8 = ` /* Пример с двумя сообщениями.
 Это - многострочный комментарий.
 */
 alert('Привет');
 alert('Мир');`

	const jsCode8 = ` /* Пример с двумя сообщениями.
 Это - многострочный комментарий.
 */
 alert('Привет');
 alert('Мир');`

 const fullHtml9 = ` /* Закомментировали код
 alert('Привет');
 */
 alert('Мир');`

	const jsCode9 = ` /* Закомментировали код
 alert('Привет');
 */
 alert('Мир');`

 const fullHtml10 = ` /*
  /* вложенный комментарий ?!? */
 */
 alert( 'Мир' );`

	const jsCode10 = ` /*
  /* вложенный комментарий ?!? */
 */
 alert( 'Мир' );`


	return (
		<Container className='text-light mt-5'>
			<ArrowNavigator />
			<h1
				style={{
					fontSize: '2rem',
					fontFamily: 'monospace',
					fontWeight: 'bold',
				}}
			>
				Структура кода
			</h1>
			<p>
				Начнём изучение языка с рассмотрения основных «строительных блоков»
				кода.
			</p>

			<h2>Инструкции</h2>
			<p>
				Инструкции – это синтаксические конструкции и команды, которые выполняют
				действия.
			</p>
			<p>
				Мы уже видели инструкцию{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					alert('Привет, мир!')
				</span>{' '}
				, которая отображает сообщение «Привет, мир!».
			</p>

			<p>
				В нашем коде может быть столько инструкций, сколько мы захотим.
				Инструкции могут отделяться точкой с запятой.
			</p>

			<p>
				Например, здесь мы разделили сообщение «Привет Мир» на два вызова alert:
			</p>

			<CodeJs html={fullHtml} js={jsCode} />

			<p style={{ marginTop: '20px' }}>
				Обычно каждую инструкцию пишут на новой строке, чтобы код было легче
				читать:
			</p>
			<CodeJs html={fullHtml2} js={jsCode2} />

			<h2>Точка с запятой</h2>

			<p>
				В большинстве случаев точку с запятой можно не ставить, если есть
				переход на новую строку.
			</p>
			<p>Так тоже будет работать:</p>

			<CodeJs html={fullHtml3} js={jsCode3} />

			<p style={{ marginTop: '20px' }}>
				В этом случае JavaScript интерпретирует перенос строки как «неявную»
				точку с запятой.{' '}
				<a href='https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion'>
					Это называется автоматическая вставка точки с запятой.
				</a>{' '}
			</p>

			<p style={{ fontWeight: 'bold' }}>
				В большинстве случаев новая строка подразумевает точку с запятой. Но «в
				большинстве случаев» не значит «всегда»!
			</p>

			<p>
				В некоторых ситуациях новая строка всё же не означает точку с запятой.
				Например:
			</p>

			<CodeJs html={fullHtml4} js={jsCode4} />

			<p style={{ marginTop: '20px' }}>
				Код выведет{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					6
				</span>
				, потому что JavaScript не вставляет здесь точку с запятой. Интуитивно
				очевидно, что, если строка заканчивается знаком{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					"+"
				</span>
				, значит, это «незавершённое выражение», поэтому точка с запятой не
				требуется. И в этом случае всё работает, как задумано.
			</p>

			<p style={{ fontWeight: 'bold' }}>
				Но есть ситуации, где JavaScript «забывает» вставить точку с запятой
				там, где она нужна.
			</p>

			<p>
				Ошибки, которые при этом появляются, достаточно сложно обнаруживать и
				исправлять.
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
					{' '}
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Пример ошибки
				</h1>
				<p>
					Если вы хотите увидеть конкретный пример такой ошибки, обратите
					внимание на этот код:
				</p>

				<CodeJs html={fullHtml5} js={jsCode5} />
				<p style={{ marginTop: '20px' }}>
					Пока нет необходимости знать значение скобок{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						[]{' '}
					</span>{' '}
					и{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						forEach
					</span>{' '}
					. Мы изучим их позже. Пока что просто запомните результат выполнения
					этого кода: выводится{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						Hello
					</span>{' '}
					, затем{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						1
					</span>
					, затем{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						2
					</span>
					.
				</p>
				<p>А теперь давайте уберем точку с запятой после alert:</p>

				<CodeJs html={fullHtml6} js={jsCode6} />

				<p style={{ marginTop: '20px' }}>
					Выглядит странно, правда? Такое слияние в данном случае неправильное.
					Мы должны поставить точку с запятой после{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						alert
					</span>
					, чтобы код работал правильно.
				</p>

				<p>Это может произойти и в некоторых других ситуациях.</p>
			</div>

			<p>
				Мы рекомендуем ставить точку с запятой между инструкциями, даже если они
				отделены переносами строк. Это правило широко используется в сообществе
				разработчиков. Стоит отметить ещё раз – в большинстве случаев можно не
				ставить точку с запятой. Но безопаснее, особенно для новичка, ставить{' '}
			</p>

			<h2>Комментарии</h2>

			<p>
				Со временем программы становятся всё сложнее и сложнее. Возникает
				необходимость добавлять комментарии, которые бы описывали, что делает
				код и почему.
			</p>

			<p>
				Комментарии могут находиться в любом месте скрипта. Они не влияют на его
				выполнение, поскольку движок просто игнорирует их.
			</p>

			<p style={{ fontWeight: 'bold' }}>
				Однострочные комментарии начинаются с двойной косой черты{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>//</span>
				.
			</p>

			<p>
				Часть строки после{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>//</span>{' '}
				считается комментарием. Такой комментарий может как занимать строку
				целиком, так и находиться после инструкции.
			</p>

			<p>Как здесь:</p>

			<CodeJs html={fullHtml7} js={jsCode7} />

			<p style={{ marginTop: '20px', fontWeight: 'bold' }}>
			Многострочные комментарии начинаются косой чертой со звёздочкой
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>/*</span> и заканчиваются звёздочкой с косой чертой <span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>*/</span>.
				</p>

				<p>Как вот здесь:</p>

				<CodeJs html={fullHtml8} js={jsCode8} />

				Содержимое комментария игнорируется, поэтому, если мы поместим код внутри <span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>/*...*/</span> , он не будет исполняться.
				
				<p>Это бывает удобно для временного отключения участка кода:</p>

				<CodeJs html={fullHtml9} js={jsCode9} />

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
					{' '}
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Используйте горячие клавиши!
				</h1>
						<p>В большинстве редакторов строку кода можно закомментировать, нажав комбинацию клавиш <span className='text-danger'>Ctrl+/</span>  для однострочного комментария и что-то вроде <span className='text-danger'>Ctrl+Shift+/</span> – для многострочных комментариев (выделите кусок кода и нажмите комбинацию клавиш). В системе Mac попробуйте <span className='text-danger'>Cmd</span>  вместо <span className='text-danger'>Ctrl</span> и <span className='text-danger'>Option</span> вместо <span className='text-danger'>Shift</span>.</p>
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
					{' '}
					<IoIosWarning
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#ff9a34',
							fontSize: '1.5rem',
						}}
					/>
					Вложенные комментарии не поддерживаются!
				</h1>
				<p>
				Не может быть
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>/*...*/</span>
					внутри 
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>/*...*/</span>
				</p>
				<p style={{ margin: '0' }}>Такой код «умрёт» с ошибкой:</p>

				<CodeJs html={fullHtml10} js={jsCode10} />

			</div>

			<p>Не стесняйтесь использовать комментарии в своём коде.</p>

			<p>Комментарии увеличивают размер кода, но это не проблема. Есть множество инструментов, которые минифицируют код перед публикацией на рабочий сервер. Они убирают комментарии, так что они не содержатся в рабочих скриптах. Таким образом, комментарии никоим образом не вредят рабочему коду.</p>

			<p>Позже в учебнике будет глава Качество кода, которая объяснит, как лучше писать комментарии.</p>


		</Container>
	)
}
