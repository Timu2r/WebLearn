import { Container } from 'react-bootstrap'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeNote from '../components/CodeNote'
import TaskViewer from '../components/TaskViewer/TaskViewer'
import { tasks } from '../data/tasks.js'

export default function UseStrict() {
	const jsUseStric1 = ` "use strict";

 // этот код работает в современном режиме
 ...`

	const jsUseStric2 = ` alert("some code");
 // "use strict" ниже игнорируется - 	он должен быть в первой строке

 "use strict";

 // строгий режим не активирован`

	const jsUseStric3 = ` 'use strict'; <Shift+Enter для перехода на новую строку>
 //  ...ваш код...
 <Enter для запуска>`

	const jsUseStric4 = ` (function() {
  'use strict';

  // ...ваш код...
 })()`

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
				Строгий режим — use strict
			</h1>

			<p>
				На протяжении долгого времени JavaScript развивался без проблем с
				обратной совместимостью. Новые функции добавлялись в язык, в то время
				как старая функциональность не менялась.
			</p>
			<p>
				Преимуществом данного подхода было то, что существующий код продолжал
				работать. А недостатком – что любая ошибка или несовершенное решение,
				принятое создателями JavaScript, застревали в языке навсегда.
			</p>
			<p>
				Так было до 2009 года, когда появился ECMAScript 5 (ES5). Он добавил
				новые возможности в язык и изменил некоторые из существующих. Чтобы
				устаревший код работал, как и раньше, по умолчанию подобные изменения не
				применяются. Поэтому нам нужно явно их активировать с помощью
				специальной директивы:{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&quot;use strict&quot;
				</span>
				.
			</p>

			<h2>«use strict»</h2>

			<p>
				Директива выглядит как строка:{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&quot;use strict&quot;
				</span>{' '}
				или{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&#39;use strict&#39;
				</span>
				. Когда она находится в начале скрипта, весь сценарий работает в
				«современном» режиме.
			</p>

			<p>Например:</p>

			<CodeNote js={jsUseStric1} />

			<p>
				Совсем скоро мы начнём изучать функции (способ группировки команд),
				поэтому заранее отметим, что в начале большинства видов функций можно
				поставить use strict. Это позволяет включить строгий режим только в
				конкретной функции. Но обычно люди используют его для всего файла.
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
					Проверьте, что{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&quot;use strict&quot;
					</span>{' '}
					находится в первой исполняемой строке скрипта, иначе строгий режим
					может не включиться.
				</p>
				<p>Здесь строгий режим не включён:</p>
				<CodeNote js={jsUseStric2} />

				<p>
					{' '}
					Над
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&quot;use strict&quot;
					</span>{' '}
					могут быть записаны только комментарии.
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
					{' '}
					<IoIosWarning
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#ff9a34',
							fontSize: '1.5rem',
						}}
					/>{' '}
					Нет никакого способа отменить{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						use strict
					</span>{' '}
				</h1>
				<p>
					Нет директивы типа{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&quot;no use strict&quot;
					</span>
					, которая возвращала бы движок к старому поведению.
				</p>

				<p>Как только мы входим в строгий режим, отменить это невозможно.</p>
			</div>

			<h2>Консоль браузера</h2>

			<p>
				В дальнейшем, когда вы будете использовать консоль браузера для
				тестирования функций, обратите внимание, что{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					use strict
				</span>{' '}
				по умолчанию в ней выключен.
			</p>

			<p>
				Иногда, когда{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					use strict
				</span>{' '}
				имеет значение, вы можете получить неправильные результаты.
			</p>

			<p>
				Итак, как можно включить{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					use strict
				</span>{' '}
				в консоли?
			</p>

			<p>
				Можно использовать Shift+Enter для ввода нескольких строк и написать в
				верхней строке{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					use strict
				</span>
			</p>

			<CodeNote js={jsUseStric3} />

			<p>В большинстве браузеров, включая Chrome и Firefox, это работает.</p>
			<p>
				Если этого не происходит, например, в старом браузере, есть некрасивый,
				но надежный способ обеспечить{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					use strict
				</span>
				. Поместите его в следующую обёртку:
			</p>

			<CodeNote js={jsUseStric4} />

			<h2>Всегда ли нужно использовать «use strict»?</h2>

			<p>Вопрос кажется риторическим, но это не так.</p>
			<p>
				Кто-то посоветует начинать каждый скрипт с{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&quot;use strict&quot;...
				</span>{' '}
				Но есть способ покруче.
			</p>
			<p>
				Современный JavaScript поддерживает «классы» и «модули» — продвинутые
				структуры языка (и мы, конечно, до них доберёмся), которые автоматически
				включают строгий режим. Поэтому в них нет нужды добавлять директиву{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&quot;use strict&quot;
				</span>
				.
			</p>
			<p style={{ fontWeight: 'bold' }}>
				Подытожим: пока очень желательно добавлять{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&quot;use strict&quot;
				</span>
				; в начале ваших скриптов. Позже, когда весь ваш код будет состоять из
				классов и модулей, директиву можно будет опускать.
			</p>
			<p>
				Пока мы узнали о{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					use strict
				</span>{' '}
				только в общих чертах.
			</p>
			<p>
				В следующих главах, по мере расширения знаний о возможностях языка, мы
				яснее увидим отличия между строгим и стандартным режимом. К счастью, их
				не так много, и все они делают жизнь разработчика лучше.
			</p>
			<p>
				Все примеры в этом учебнике подразумевают исполнение в строгом режиме,
				за исключением случаев (очень редких), когда оговорено иное.
			</p>
			<TaskViewer tasks={tasks['2.3']} />
		</Container>
	)
}
