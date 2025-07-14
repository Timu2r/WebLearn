import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import TaskViewer from '../components/TaskViewer/TaskViewer'
import { tasks } from '../data/tasks.js'

export default function SwitchStatement() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Конструкция "switch"</h1>

			<p>
				Конструкция <Badge bg='secondary'>switch</Badge> заменяет собой сразу
				несколько <Badge bg='secondary'>if</Badge>.
			</p>
			<p>
				Она представляет собой более наглядный способ сравнить выражение сразу с
				несколькими вариантами.
			</p>

			<h2>Синтаксис</h2>
			<p>
				Конструкция <Badge bg='secondary'>switch</Badge> имеет один или более
				блок <Badge bg='secondary'>case</Badge> и необязательный блок{' '}
				<Badge bg='secondary'>default</Badge>.
			</p>
			<p>Выглядит она так:</p>
			<CodeJs
				js={`switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}`}
			/>
			<ul>
				<li>
					Переменная <Badge bg='secondary'>x</Badge> проверяется на строгое
					равенство первому значению <Badge bg='secondary'>value1</Badge>, затем
					второму <Badge bg='secondary'>value2</Badge> и так далее.
				</li>
				<li>
					Если соответствие установлено – <Badge bg='secondary'>switch</Badge>{' '}
					начинает выполняться от соответствующей директивы{' '}
					<Badge bg='secondary'>case</Badge> и далее, до ближайшего{' '}
					<Badge bg='secondary'>break</Badge> (или до конца{' '}
					<Badge bg='secondary'>switch</Badge>).
				</li>
				<li>
					Если ни один <Badge bg='secondary'>case</Badge> не совпал –
					выполняется (если есть) вариант <Badge bg='secondary'>default</Badge>.
				</li>
			</ul>

			<h2>Пример работы</h2>
			<p>
				Пример использования <Badge bg='secondary'>switch</Badge> (сработавший
				код выделен):
			</p>
			<CodeJs
				js={`let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}`}
			/>
			<p>
				Здесь оператор <Badge bg='secondary'>switch</Badge> последовательно
				сравнит <Badge bg='secondary'>a</Badge> со всеми вариантами из{' '}
				<Badge bg='secondary'>case</Badge>.
			</p>
			<p>
				Сначала <Badge bg='secondary'>3</Badge>, затем – так как нет совпадения
				– <Badge bg='secondary'>4</Badge>. Совпадение найдено, будет выполнен
				этот вариант, со строки{' '}
				<Badge bg='secondary'>alert( 'В точку!' )</Badge> и далее, до ближайшего{' '}
				<Badge bg='secondary'>break</Badge>, который прервёт выполнение.
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
					Если break нет, то выполнение пойдёт ниже
				</h1>
				<p>
					Если <Badge bg='secondary'>break</Badge> нет, то выполнение пойдёт
					ниже по следующим <Badge bg='secondary'>case</Badge>, при этом
					остальные проверки игнорируются.
				</p>
			</div>

			<p>
				Пример без <Badge bg='secondary'>break</Badge>:
			</p>
			<CodeJs
				js={`let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
  case 4:
    alert( 'В точку!' );
  case 5:
    alert( 'Перебор' );
  default:
    alert( "Нет таких значений" );
}`}
			/>
			<p>
				В примере выше последовательно выполнятся три{' '}
				<Badge bg='secondary'>alert</Badge>:
			</p>
			<CodeJs
				js={`alert( 'В точку!' );
alert( 'Перебор' );
alert( "Нет таких значений" );`}
			/>

			<h2>Любое выражение может быть аргументом для switch/case</h2>
			<p>
				И <Badge bg='secondary'>switch</Badge> и{' '}
				<Badge bg='secondary'>case</Badge> допускают любое выражение в качестве
				аргумента.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("Выполнится, т.к. значением +a будет 1, что в точности равно b+1");
    break;

  default:
    alert("Это не выполнится");
}`}
			/>
			<p>
				В этом примере выражение <Badge bg='secondary'>+a</Badge> вычисляется в{' '}
				<Badge bg='secondary'>1</Badge>, что совпадает с выражением{' '}
				<Badge bg='secondary'>b + 1</Badge> в <Badge bg='secondary'>case</Badge>
				, и следовательно, код в этом блоке будет выполнен.
			</p>

			<h2>Группировка «case»</h2>
			<p>
				Несколько вариантов <Badge bg='secondary'>case</Badge>, использующих
				один код, можно группировать.
			</p>
			<p>
				Для примера, выполним один и тот же код для{' '}
				<Badge bg='secondary'>case 3</Badge> и{' '}
				<Badge bg='secondary'>case 5</Badge>, сгруппировав их:
			</p>
			<CodeJs
				js={`let a = 3;

switch (a) {
  case 4:
    alert('Правильно!');
    break;

  case 3: // (*) группируем оба case
  case 5:
    alert('Неправильно!');
    alert("Может вам посетить урок математики?");
    break;

  default:
    alert('Результат выглядит странновато. Честно.');
}`}
			/>
			<p>
				Теперь оба варианта <Badge bg='secondary'>3</Badge> и{' '}
				<Badge bg='secondary'>5</Badge> выводят одно сообщение.
			</p>
			<p>
				Возможность группировать <Badge bg='secondary'>case</Badge> – это
				побочный эффект того, как <Badge bg='secondary'>switch/case</Badge>{' '}
				работает без <Badge bg='secondary'>break</Badge>. Здесь выполнение{' '}
				<Badge bg='secondary'>case 3</Badge> начинается со строки{' '}
				<Badge bg='secondary'>(*)</Badge> и продолжается в{' '}
				<Badge bg='secondary'>case 5</Badge>, потому что отсутствует{' '}
				<Badge bg='secondary'>break</Badge>.
			</p>

			<h2>Тип имеет значение</h2>
			<p>
				Нужно отметить, что проверка на равенство всегда строгая. Значения
				должны быть одного типа, чтобы выполнялось равенство.
			</p>
			<p>Для примера, давайте рассмотрим следующий код:</p>
			<CodeJs
				js={`let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}`}
			/>
			<ol>
				<li>
					Для <Badge bg='secondary'>'0'</Badge> и{' '}
					<Badge bg='secondary'>'1'</Badge> выполнится первый{' '}
					<Badge bg='secondary'>alert</Badge>.
				</li>
				<li>
					Для <Badge bg='secondary'>'2'</Badge> – второй{' '}
					<Badge bg='secondary'>alert</Badge>.
				</li>
				<li>
					Но для <Badge bg='secondary'>3</Badge>, результат выполнения{' '}
					<Badge bg='secondary'>prompt</Badge> будет строка{' '}
					<Badge bg='secondary'>"3"</Badge>, которая не соответствует строгому
					равенству <Badge bg='secondary'>===</Badge> с числом{' '}
					<Badge bg='secondary'>3</Badge>. Таким образом, мы имеем «мёртвый код»
					в <Badge bg='secondary'>case 3</Badge>! Выполнится вариант{' '}
					<Badge bg='secondary'>default</Badge>.
				</li>
			</ol>

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
					Строгое сравнение
				</h1>
				<p>
					Конструкция <Badge bg='secondary'>switch</Badge> использует строгое
					сравнение <Badge bg='secondary'>===</Badge>. Это означает, что типы
					данных должны точно совпадать.
				</p>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Конструкция <Badge bg='secondary'>switch</Badge> представляет собой
				более наглядную альтернативу множественным проверкам{' '}
				<Badge bg='secondary'>if</Badge>.
			</p>
			<p>
				<Badge bg='secondary'>switch</Badge> использует строгое сравнение{' '}
				<Badge bg='secondary'>===</Badge> для проверки соответствия значений.
			</p>
			<p>
				Без <Badge bg='secondary'>break</Badge> выполнение продолжается в
				следующих <Badge bg='secondary'>case</Badge>, что позволяет группировать
				варианты.
			</p>
			<p>
				Блок <Badge bg='secondary'>default</Badge> выполняется, если ни один{' '}
				<Badge bg='secondary'>case</Badge> не подошёл.
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
								Элемент
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
								<Badge bg='secondary'>switch</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Основная конструкция для множественного выбора
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>case</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Вариант для сравнения
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>break</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Прерывает выполнение switch
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>default</Badge>
							</td>
							<td style={{ padding: '8px' }}>
								Выполняется, если не найдено совпадений
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>
				Конструкция <Badge bg='secondary'>switch</Badge> особенно полезна, когда
				нужно сравнить одну переменную с множеством различных значений.
			</p>
			<TaskViewer tasks={tasks['2.14']} />
		</Container>
	)
}
