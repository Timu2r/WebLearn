import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import CodeNote from '../components/CodeNote'

export default function Console() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Консоль разработчика</h1>

			<p>
				Код уязвим для ошибок. И вы, скорее всего, будете делать ошибки в коде…
				Впрочем, давайте будем откровенны: вы <em>точно</em> будете совершать
				ошибки в коде. В конце концов, вы человек, а не робот.
			</p>

			<p>
				Но по умолчанию в браузере ошибки не видны. То есть, если что-то пойдёт
				не так, мы не увидим, что именно сломалось, и не сможем это починить.
			</p>

			<p>
				Для решения задач такого рода в браузер встроены так называемые
				«Инструменты разработки» (Developer tools или сокращённо — devtools).
			</p>

			<p>
				Chrome и Firefox снискали любовь подавляющего большинства программистов
				во многом благодаря своим отменным инструментам разработчика. Остальные
				браузеры, хотя и оснащены подобными инструментами, но всё же зачастую
				находятся в роли догоняющих и по качеству, и по количеству свойств и
				особенностей.
			</p>

			<p>
				В общем, почти у всех программистов есть свой «любимый» браузер. Другие
				используются только для отлова и исправления специфичных
				«браузерозависимых» ошибок.
			</p>

			<p>
				Для начала знакомства с этими мощными инструментами давайте выясним, как
				их открывать, смотреть ошибки и запускать команды JavaScript.
			</p>

			<h2>Google Chrome</h2>
			<p>
				Откройте страницу <Badge bg='secondary'>bug.html</Badge>.
			</p>
			<p>
				В её JavaScript-коде закралась ошибка. Она не видна обычному посетителю,
				поэтому давайте найдём её при помощи инструментов разработки.
			</p>
			<p>
				Нажмите <Badge bg='secondary'>F12</Badge> или, если вы используете Mac,
				<Badge bg='secondary'>Cmd+Opt+J</Badge>.
			</p>
			<p>
				По умолчанию в инструментах разработчика откроется вкладка
				<Badge bg='secondary'>Console</Badge> (консоль).
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
					Внешний вид консоли
				</h1>
				<p>
					Точный внешний вид инструментов разработки зависит от используемой
					версии Chrome. Время от времени некоторые детали изменяются, но в
					целом внешний вид остаётся примерно похожим на предыдущие версии.
				</p>
			</div>

			<ul>
				<li>
					В консоли мы можем увидеть сообщение об ошибке, отрисованное красным
					цветом. В нашем случае скрипт содержит неизвестную команду{' '}
					<Badge bg='secondary'>lalala</Badge>.
				</li>
				<li>
					Справа присутствует ссылка на исходный код{' '}
					<Badge bg='secondary'>bug.html:12</Badge>с номером строки кода, в
					которой эта ошибка и произошла.
				</li>
			</ul>

			<p>
				Под сообщением об ошибке находится синий символ{' '}
				<Badge bg='secondary'>{'>'}</Badge>. Он обозначает командную строку, в
				ней мы можем редактировать и запускать JavaScript-команды. Для их
				запуска нажмите <Badge bg='secondary'>Enter</Badge>.
			</p>

			<h3>Многострочный ввод</h3>
			<p>
				Обычно при нажатии <Badge bg='secondary'>Enter</Badge> введённая строка
				кода сразу выполняется.
			</p>
			<p>
				Чтобы перенести строку, нажмите{' '}
				<Badge bg='secondary'>Shift+Enter</Badge>. Так можно вводить более
				длинный JS-код.
			</p>

			<CodeJs
				js={`// Пример многострочного ввода в консоли
function sayHello(name) {
  console.log("Привет, " + name + "!");
}

sayHello("Мир");`}
			/>

			<p>
				Теперь мы явно видим ошибки, для начала этого вполне достаточно. Мы ещё
				вернёмся к инструментам разработчика позже и более подробно рассмотрим
				отладку кода в главе <Badge bg='secondary'>Отладка в браузере</Badge>.
			</p>

			<h2>Firefox, Edge и другие</h2>
			<p>
				Инструменты разработчика в большинстве браузеров открываются при нажатии
				на <Badge bg='secondary'>F12</Badge>.
			</p>
			<p>
				Их внешний вид и принципы работы мало чем отличаются. Разобравшись с
				инструментами в одном браузере, вы без труда сможете работать с ними и в
				другом.
			</p>

			<h2>Safari</h2>
			<p>
				Safari (браузер для Mac, не поддерживается в системах Windows/Linux) всё
				же имеет небольшое отличие. Для начала работы нам нужно включить «Меню
				разработки» («Developer menu»).
			</p>
			<p>
				Откройте <Badge bg='secondary'>Настройки</Badge> (Preferences) и
				перейдите к панели <Badge bg='secondary'>Продвинутые</Badge> (Advanced).
				В самом низу вы найдёте чекбокс:
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
					Активация в Safari
				</h1>
				<p>
					Теперь консоль можно активировать нажатием клавиш{' '}
					<Badge bg='secondary'>Cmd+Opt+C</Badge>. Также обратите внимание на
					новый элемент меню <Badge bg='secondary'>Разработка</Badge>
					(«Develop»). В нем содержится большое количество команд и настроек.
				</p>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<ul>
				<li>
					Инструменты разработчика позволяют нам смотреть ошибки, выполнять
					команды, проверять значение переменных и ещё много всего полезного.
				</li>
				<li>
					В большинстве браузеров, работающих под Windows, инструменты
					разработчика можно открыть, нажав <Badge bg='secondary'>F12</Badge>. В
					Chrome для Mac используйте комбинацию{' '}
					<Badge bg='secondary'>Cmd+Opt+J</Badge>, Safari:{' '}
					<Badge bg='secondary'>Cmd+Opt+C</Badge> (необходимо предварительное
					включение «Меню разработчика»).
				</li>
			</ul>

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
								Браузер
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Горячие клавиши
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Особенности
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Chrome
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>F12</Badge> /{' '}
								<Badge bg='secondary'>Cmd+Opt+J</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Отличные инструменты разработки
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Firefox
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>F12</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Мощные инструменты разработки
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Edge
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>F12</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Стандартные инструменты
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>Safari</td>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>Cmd+Opt+C</Badge>
							</td>
							<td style={{ padding: '8px' }}>Требует активации в настройках</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Теперь наше окружение полностью настроено. В следующем разделе мы
				перейдём непосредственно к JavaScript.
			</p>
		</Container>
	)
}
