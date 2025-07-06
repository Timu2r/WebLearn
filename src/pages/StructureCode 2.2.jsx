import { Container, Badge } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeRunner from '../components/CodeRunner' // Предполагается, что CodeRunner может принимать и HTML, и JS
import CodeNote from '../components/CodeNote' // Для примеров, которые не требуют выполнения
import CodeJs from '../components/CodeJs' // Для примеров, где HTML и JS показываются отдельно

export default function StructureCode() {
	const jsCode1 = `alert('Привет'); alert('Мир');`

	const jsCode2 = `alert('Привет');
alert('Мир');`

	const jsCode3 = `alert('Привет')
alert('Мир')`

	const jsCode4 = `alert(3 +
1
+ 2);`

	const jsCode5 = `alert('Hello')
[1,2].forEach(alert);`

	const jsCode6 = `alert('Hello')[1, 2].forEach(alert);`

	const jsCode7 = `// Этот комментарий занимает всю строку
alert('Привет');

alert('Мир'); // Этот комментарий следует за инструкцией`

	const jsCode8 = `/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
alert('Привет');
alert('Мир');`

	const jsCode9 = `/* Закомментировали код
alert('Привет');
*/
alert('Мир');`

	const jsCode10 = `/*
 /* вложенный комментарий ?!? */
*/
alert( 'Мир' );`

	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Структура кода</h1>
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
				<Badge bg='secondary'>alert('Привет, мир!')</Badge>, которая отображает
				сообщение «Привет, мир!».
			</p>
			<p>
				В нашем коде может быть столько инструкций, сколько мы захотим.
				Инструкции могут отделяться точкой с запятой.
			</p>
			<p>
				Например, здесь мы разделили сообщение «Привет Мир» на два вызова alert:
			</p>
			<CodeJs js={jsCode1} />
			<p className='mt-4'>
				Обычно каждую инструкцию пишут на новой строке, чтобы код было легче
				читать:
			</p>
			<CodeJs js={jsCode2} />
			
			<h2>Точка с запятой</h2>
			<p>
				В большинстве случаев точку с запятой можно не ставить, если есть
				переход на новую строку.
			</p>
			<p>Так тоже будет работать:</p>
			<CodeJs js={jsCode3} />
			<p className='mt-4'>
				В этом случае JavaScript интерпретирует перенос строки как «неявную»
				точку с запятой.{' '}
				<a href='https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion'>
					Это называется автоматическая вставка точки с запятой.
				</a>
			</p>
			<p>
				**В большинстве случаев новая строка подразумевает точку с запятой. Но
				«в большинстве случаев» не значит «всегда»!**
			</p>
			<p>
				В некоторых ситуациях новая строка всё же не означает точку с запятой.
				Например:
			</p>
			<CodeJs js={jsCode4} />
			<p className='mt-4'>
				Код выведет <Badge bg='secondary'>6</Badge>, потому что JavaScript не
				вставляет здесь точку с запятой. Интуитивно очевидно, что, если строка
				заканчивается знаком <Badge bg='secondary'>+</Badge>, значит, это
				«незавершённое выражение», поэтому точка с запятой не требуется. И в
				этом случае всё работает, как задумано.
			</p>
			<p>
				**Но есть ситуации, где JavaScript «забывает» вставить точку с запятой
				там, где она нужна.**
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
				<CodeJs js={jsCode5} />
				<p className='mt-4'>
					Пока нет необходимости знать значение скобок{' '}
					<Badge bg='secondary'>[]</Badge> и{' '}
					<Badge bg='secondary'>forEach</Badge>. Мы изучим их позже. Пока что
					просто запомните результат выполнения этого кода: выводится{' '}
					<Badge bg='secondary'>Hello</Badge>, затем{' '}
					<Badge bg='secondary'>1</Badge>, затем <Badge bg='secondary'>2</Badge>
					.
				</p>
				<p>А теперь давайте уберем точку с запятой после alert:</p>
				<CodeJs js={jsCode6} />
				<p className='mt-4'>
					Выглядит странно, правда? Такое слияние в данном случае неправильное.
					Мы должны поставить точку с запятой после{' '}
					<Badge bg='secondary'>alert</Badge>, чтобы код работал правильно.
				</p>
				<p>Это может произойти и в некоторых других ситуациях.</p>
			</div>
			<p>
				Мы рекомендуем ставить точку с запятой между инструкциями, даже если они
				отделены переносами строк. Это правило широко используется в сообществе
				разработчиков. Стоит отметить ещё раз – в большинстве случаев можно не
				ставить точку с запятой. Но безопаснее, особенно для новичка, ставить
				их.
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
			<p>
				**Однострочные комментарии начинаются с двойной косой черты{' '}
				<Badge bg='secondary'>//</Badge>.**
			</p>
			<p>
				Часть строки после <Badge bg='secondary'>//</Badge> считается
				комментарием. Такой комментарий может как занимать строку целиком, так и
				находиться после инструкции.
			</p>
			<p>Как здесь:</p>
			<CodeJs js={jsCode7} />
			<p className='mt-4'>
				**Многострочные комментарии начинаются косой чертой со звёздочкой{' '}
				<Badge bg='secondary'>/*</Badge> и заканчиваются звёздочкой с косой
				чертой <Badge bg='secondary'>*/</Badge>.**
			</p>
			<p>Как вот здесь:</p>
			<CodeJs js={jsCode8} />
			<p>
				Содержимое комментария игнорируется, поэтому, если мы поместим код
				внутри <Badge bg='secondary'>/*...*/</Badge>, он не будет исполняться.
			</p>
			<p>Это бывает удобно для временного отключения участка кода:</p>
			<CodeJs js={jsCode9} />
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
					Используйте горячие клавиши!
				</h1>
				<p>
					В большинстве редакторов строку кода можно закомментировать, нажав
					комбинацию клавиш <span className='text-danger'>Ctrl+/</span> для
					однострочного комментария и что-то вроде{' '}
					<span className='text-danger'>Ctrl+Shift+/</span> – для многострочных
					комментариев (выделите кусок кода и нажмите комбинацию клавиш). В
					системе Mac попробуйте <span className='text-danger'>Cmd</span> вместо{' '}
					<span className='text-danger'>Ctrl</span> и{' '}
					<span className='text-danger'>Option</span> вместо{' '}
					<span className='text-danger'>Shift</span>.
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
					Вложенные комментарии не поддерживаются!
				</h1>
				<p>
					Не может быть <Badge bg='secondary'>/*...*/</Badge> внутри{' '}
					<Badge bg='secondary'>/*...*/</Badge>.
				</p>
				<p style={{ margin: '0' }}>Такой код «умрёт» с ошибкой:</p>
				<CodeJs js={jsCode10} />
			</div>
			<p>Не стесняйтесь использовать комментарии в своём коде.</p>
			<p>
				Комментарии увеличивают размер кода, но это не проблема. Есть множество
				инструментов, которые минифицируют код перед публикацией на рабочий
				сервер. Они убирают комментарии, так что они не содержатся в рабочих
				скриптах. Таким образом, комментарии никоим образом не вредят рабочему
				коду.
			</p>
			<p>
				Позже в учебнике будет глава «Качество кода», которая объяснит, как
				лучше писать комментарии.
			</p>
		</Container>
	)
}
