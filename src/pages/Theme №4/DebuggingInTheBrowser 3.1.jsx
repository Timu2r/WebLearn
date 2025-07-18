import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'


export default function DebuggingInTheBrowser() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Отладка в браузере</h1>

			<p>Давайте отвлечёмся от написания кода и поговорим о его отладке.</p>

			<p>
				Отладка – это процесс поиска и исправления ошибок в скрипте. Все
				современные браузеры и большинство других сред разработки поддерживают
				инструменты для отладки – специальный графический интерфейс, который
				сильно упрощает отладку. Он также позволяет по шагам отследить, что
				именно происходит в нашем коде.
			</p>

			<p>
				Мы будем использовать браузер Chrome, так как у него достаточно
				возможностей, в большинстве других браузеров процесс будет схожим.
			</p>

			<h2>Панель «Исходный код» («Sources»)</h2>
			<p>
				Версия Chrome, установленная у вас, может выглядеть немного иначе,
				однако принципиальных отличий не будет.
			</p>

			<p>Работая в Chrome, откройте тестовую страницу.</p>
			<ul>
				<li>
					Включите инструменты разработчика, нажав{' '}
					<Badge bg='secondary'>F12</Badge> (Mac:{' '}
					<Badge bg='secondary'>Cmd+Opt+I</Badge>).
				</li>
				<li>
					Щёлкните по панели <Badge bg='secondary'>Sources</Badge> («исходный
					код»).
				</li>
			</ul>

			<p>
				Кнопка-переключатель откроет вкладку со списком файлов. Кликните на неё
				и выберите <Badge bg='secondary'>hello.js</Badge> в дереве файлов.
			</p>

			<p>Интерфейс состоит из трёх зон:</p>
			<ul>
				<li>
					В зоне <Badge bg='secondary'>File Navigator</Badge> (панель для
					навигации файлов) показаны файлы HTML, JavaScript, CSS, включая
					изображения, используемые на странице.
				</li>
				<li>
					Зона <Badge bg='secondary'>Code Editor</Badge> (редактор кода)
					показывает исходный код.
				</li>
				<li>
					Наконец, зона <Badge bg='secondary'>JavaScript Debugging</Badge>{' '}
					(панель отладки JavaScript) отведена для отладки.
				</li>
			</ul>

			<h2>Консоль</h2>
			<p>
				При нажатии на клавишу <Badge bg='secondary'>Esc</Badge> в нижней части
				экрана вызывается консоль, где можно вводить команды и выполнять их
				клавишей <Badge bg='secondary'>Enter</Badge>.
			</p>

			<p>Результат выполнения инструкций сразу же отображается в консоли.</p>

			<p>
				Например, результатом <Badge bg='secondary'>1+2</Badge> будет{' '}
				<Badge bg='secondary'>3</Badge>, а вызов функции{' '}
				<Badge bg='secondary'>hello("debugger")</Badge> ничего не возвращает,
				так что результатом будет <Badge bg='secondary'>undefined</Badge>.
			</p>

			<h2>Точки останова (breakpoints)</h2>
			<p>
				Давайте разберёмся, как работает код нашей тестовой страницы. В файле{' '}
				<Badge bg='secondary'>hello.js</Badge> щёлкните на номере строки{' '}
				<Badge bg='secondary'>4</Badge>. Да-да, щёлкайте именно по самой цифре,
				не по коду.
			</p>

			<p>
				Ура! Вы поставили точку останова. А теперь щёлкните по цифре{' '}
				<Badge bg='secondary'>8</Badge> на восьмой линии.
			</p>

			<p>
				Точка останова – это участок кода, где отладчик автоматически
				приостановит исполнение JavaScript.
			</p>

			<p>
				Пока исполнение поставлено «на паузу», мы можем просмотреть текущие
				значения переменных, выполнить команды в консоли, другими словами,
				выполнить отладку кода.
			</p>

			<p>
				В правой части графического интерфейса мы видим список точек останова. А
				когда таких точек выставлено много, да ещё и в разных файлах, этот
				список поможет эффективно ими управлять:
			</p>

			<ul>
				<li>
					Быстро перейдите к точке останова в коде (нажав на неё на правой
					панели).
				</li>
				<li>Временно отключите точку останова, сняв с неё галочку.</li>
				<li>
					Удалите точку останова, щёлкнув правой кнопкой мыши и выбрав{' '}
					<Badge bg='secondary'>Remove</Badge> (Удалить).
				</li>
				<li>…и так далее.</li>
			</ul>

			<h3>Условные точки останова</h3>
			<p>
				Щелчок правой кнопкой мыши по номеру строки позволяет создать условную
				точку останова. Она сработает только в тот момент, когда выражение,
				которое вы должны указать при создании такой точки, истинно.
			</p>

			<p>
				Это удобно, когда нам нужно остановиться только при определённом
				значении переменной или для определённых параметров функции.
			</p>

			<h2>Команда debugger</h2>
			<p>
				Выполнение кода можно также приостановить с помощью команды{' '}
				<Badge bg='secondary'>debugger</Badge> прямо изнутри самого кода:
			</p>

			<CodeJs
				js={`function hello(name) {
  let phrase = \`Привет, \${name}!\`;

  debugger;  // <-- тут отладчик остановится

  say(phrase);
}`}
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
					Команда debugger
				</h1>
				<p>
					Такая команда сработает только если открыты инструменты разработки,
					иначе браузер ее проигнорирует.
				</p>
			</div>

			<h2>Остановимся и оглядимся</h2>
			<p>
				В нашем примере функция <Badge bg='secondary'>hello()</Badge> вызывается
				во время загрузки страницы, поэтому для начала отладки (после того, как
				мы поставили точки останова) проще всего её перезагрузить. Нажмите{' '}
				<Badge bg='secondary'>F5</Badge> (Windows, Linux) или{' '}
				<Badge bg='secondary'>Cmd+R</Badge> (Mac).
			</p>

			<p>
				Выполнение прервётся на четвёртой строчке (где находится точка
				останова). Чтобы понять, что происходит в коде, щёлкните по стрелочкам
				справа:
			</p>

			<ul>
				<li>
					<Badge bg='secondary'>Watch</Badge> – показывает текущие значения для
					любых выражений. Вы можете нажать на + и ввести выражение. Отладчик
					покажет его значение, автоматически пересчитывая его в процессе
					выполнения.
				</li>
				<li>
					<Badge bg='secondary'>Call Stack</Badge> – показывает цепочку
					вложенных вызовов. В текущий момент отладчик находится внутри вызова{' '}
					<Badge bg='secondary'>hello()</Badge>, вызываемого скриптом в{' '}
					<Badge bg='secondary'>index.html</Badge>.
				</li>
				<li>
					<Badge bg='secondary'>Scope</Badge> показывает текущие переменные.{' '}
					<Badge bg='secondary'>Local</Badge> показывает локальные переменные
					функций, а их значения подсвечены прямо в исходном коде. В{' '}
					<Badge bg='secondary'>Global</Badge> перечисляются глобальные
					переменные.
				</li>
			</ul>

			<p>
				Там также есть ключевое слово <Badge bg='secondary'>this</Badge>,
				которое мы ещё не изучали, но скоро изучим.
			</p>

			<h2>Пошаговое выполнение скрипта</h2>
			<p>
				А теперь давайте пошагаем по нашему скрипту. Для этого есть кнопки в
				верхней части правой панели. Давайте рассмотрим их.
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
								Кнопка
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
								<Badge bg='secondary'>Resume (F8)</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Продолжить выполнение. Если больше нет точек останова, то
								выполнение просто продолжается.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>Step (F9)</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Выполнить следующую команду. Пошаговое выполнение всех
								инструкций скрипта.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>Step over (F10)</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Выполнить следующую команду, но не заходя внутрь функции.
								Выполняет вызов функции незаметно.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>Step into (F11)</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Похоже на "Step", но ведёт себя по-другому в случае асинхронных
								вызовов функций.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>Step out (Shift+F11)</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Продолжить выполнение до завершения текущей функции.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>Toggle breakpoints</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Активировать/деактивировать все точки останова.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>Pause on exceptions</Badge>
							</td>
							<td style={{ padding: '8px' }}>
								Включить/отключить автоматическую паузу в случае ошибки.
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<h3>Continue to here</h3>
			<p>
				Щелчок правой кнопкой мыши по строке кода открывает контекстное меню с
				отличной опцией под названием{' '}
				<Badge bg='secondary'>"Continue to here"</Badge> («продолжить до этого
				места»).
			</p>

			<p>
				Это удобно, когда мы хотим перейти на несколько шагов вперёд к строке,
				но лень устанавливать точку останова (breakpoint).
			</p>

			<h2>Логирование</h2>
			<p>
				Чтобы вывести что-то на консоль из нашего кода, существует функция{' '}
				<Badge bg='secondary'>console.log</Badge>.
			</p>

			<p>Например, это выводит в консоль значения от 0 до 4:</p>

			<CodeJs
				js={`// чтобы увидеть результат, сначала откройте консоль
for (let i = 0; i < 5; i++) {
  console.log("value,", i);
// Или alert()
  alert("value, " + i);
}`}
			/>

			<p>
				Обычный пользователь сайта не увидит такой вывод, так как он в консоли.
				Чтобы увидеть его, либо откройте консольную панель инструментов
				разработчика, либо нажмите <Badge bg='secondary'>Esc</Badge>, находясь в
				другой панели: это откроет консоль внизу.
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
					Преимущества логирования
				</h1>
				<p>
					Если правильно выстроить логирование в приложении, то можно и без
					отладчика разобраться, что происходит в коде.
				</p>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<p>Приостановить выполнение скрипта можно тремя способами:</p>
			<ul>
				<li>Точками останова (breakpoints).</li>
				<li>
					Использованием в коде команд <Badge bg='secondary'>debugger</Badge>.
				</li>
				<li>
					При ошибке (если инструменты разработчика открыты и кнопка
					«включена»).
				</li>
			</ul>

			<p>
				При остановке мы можем отлаживать: анализировать переменные и пошагово
				пройти по процессу, чтобы отыскать проблему.
			</p>

			<p>
				В инструментах разработчика гораздо больше опций, чем описано здесь. С
				полным руководством можно ознакомиться на{' '}
				<Badge bg='secondary'>
					https://developers.google.com/web/tools/chrome-devtools
				</Badge>
				.
			</p>

			<p>
				Информации из этой главы достаточно, чтобы начать отладку, но позже,
				особенно если вы много работаете с браузером, пожалуйста, перейдите туда
				и ознакомьтесь с расширенными возможностями инструментов разработчика.
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
					Практический совет
				</h1>
				<p>
					И, конечно, вы можете просто кликать по различным местам инструментов
					разработки и смотреть, что при этом появляется. Пожалуй, это
					наискорейший способ ими овладеть. Не забывайте про правый клик мыши и
					контекстные меню!
				</p>
			</div>
				<TaskViewer tasks={tasks['3.1']} />
		</Container>
	)
}
