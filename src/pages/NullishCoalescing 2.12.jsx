import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import CodeNote from '../components/CodeNote'
import TaskViewer from '../components/TaskViewer/TaskViewer'

import { tasks } from '../data/tasks.js'


export default function NullishCoalescing() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Операторы нулевого слияния и присваивания: '??', '??='</h1>

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

			<h2>Оператор нулевого слияния (??)</h2>
			<p>
				Оператор нулевого слияния представляет собой два вопросительных знака{' '}
				<Badge bg='secondary'>??</Badge>.
			</p>
			<p>
				Так как он обрабатывает <Badge bg='secondary'>null</Badge> и{' '}
				<Badge bg='secondary'>undefined</Badge> одинаковым образом, то для этой
				статьи мы введём специальный термин. Для краткости будем говорить, что
				значение «определено», если оно не равняется ни{' '}
				<Badge bg='secondary'>null</Badge>, ни{' '}
				<Badge bg='secondary'>undefined</Badge>.
			</p>
			<p>
				Результат выражения <Badge bg='secondary'>a ?? b</Badge> будет
				следующим:
			</p>
			<ul>
				<li>
					если <Badge bg='secondary'>a</Badge> определено, то{' '}
					<Badge bg='secondary'>a</Badge>,
				</li>
				<li>
					если <Badge bg='secondary'>a</Badge> не определено, то{' '}
					<Badge bg='secondary'>b</Badge>.
				</li>
			</ul>
			<p>
				Иначе говоря, оператор <Badge bg='secondary'>??</Badge> возвращает
				первый аргумент, если он не <Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>, иначе второй.
			</p>
			<p>
				Оператор нулевого слияния не является чем-то принципиально новым. Это
				всего лишь удобный синтаксис, как из двух значений получить одно,
				которое «определено».
			</p>
			<p>
				Вот как можно переписать выражение{' '}
				<Badge bg='secondary'>result = a ?? b</Badge>, используя уже знакомые
				нам операторы:
			</p>
			<CodeNote
				js={`result = (a !== null && a !== undefined) ? a : b;`}
			/>
			<p>
				Теперь должно быть абсолютно ясно, что делает{' '}
				<Badge bg='secondary'>??</Badge>. Давайте посмотрим, где это может быть
				полезно.
			</p>
			<p>
				Как правило, оператор <Badge bg='secondary'>??</Badge> нужен для того,
				чтобы задать значение по умолчанию для потенциально неопределённой
				переменной.
			</p>
			<p>
				Например, здесь мы отобразим <Badge bg='secondary'>user</Badge>, если
				её значение не <Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>, в противном случае Аноним:
			</p>
			<CodeJs
				js={`let user;

alert(user ?? "Аноним"); // Аноним (user не существует)`}
			/>
			<p>
				А вот пример, когда <Badge bg='secondary'>user</Badge> присвоено
				значение:
			</p>
			<CodeJs
				js={`let user = "Иван";

alert(user ?? "Аноним"); // Иван (user существует)`}
			/>
			<p>
				Кроме этого, можно записать последовательность из операторов{' '}
				<Badge bg='secondary'>??</Badge>, чтобы получить первое значение из
				списка, которое не является <Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>.
			</p>
			<p>
				Допустим, у нас есть данные пользователя в переменных{' '}
				<Badge bg='secondary'>firstName</Badge>,{' '}
				<Badge bg='secondary'>lastName</Badge> или{' '}
				<Badge bg='secondary'>nickName</Badge>. Все они могут не существовать,
				если пользователь решил не вводить соответствующие значение.
			</p>
			<p>
				Мы хотели бы отобразить имя пользователя, используя одну из этих
				переменных, или показать «Аноним», если все они{' '}
				<Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>.
			</p>
			<p>
				Для этого воспользуемся оператором <Badge bg='secondary'>??</Badge>:
			</p>
			<CodeJs
				js={`let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое значение, которое определено:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер`}
			/>

			<h3>Сравнение с ||</h3>
			<p>
				Оператор ИЛИ <Badge bg='secondary'>||</Badge> можно использовать для
				того же, что и <Badge bg='secondary'>??</Badge>, как это было показано
				в предыдущей главе.
			</p>
			<p>
				Например, если в приведённом выше коде заменить{' '}
				<Badge bg='secondary'>??</Badge> на <Badge bg='secondary'>||</Badge>,
				то будет тот же самый результат:
			</p>
			<CodeJs
				js={`let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое истинное значение:
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер`}
			/>
			<p>
				Исторически сложилось так, что оператор ИЛИ{' '}
				<Badge bg='secondary'>||</Badge> появился первым. Он существует с
				самого начала в JavaScript, поэтому разработчики долгое время
				использовали его для таких целей.
			</p>
			<p>
				С другой стороны, сравнительно недавно в язык был добавлен оператор
				нулевого слияния <Badge bg='secondary'>??</Badge> – как раз потому,
				что многие были недовольны оператором <Badge bg='secondary'>||</Badge>
				.
			</p>
			<p>Важное различие между ними заключается в том, что:</p>
			<ul>
				<li>
					<Badge bg='secondary'>||</Badge> возвращает первое истинное значение.
				</li>
				<li>
					<Badge bg='secondary'>??</Badge> возвращает первое определённое
					значение.
				</li>
			</ul>
			<p>
				Проще говоря, оператор <Badge bg='secondary'>||</Badge> не различает{' '}
				<Badge bg='secondary'>false</Badge>, <Badge bg='secondary'>0</Badge>,
				пустую строку <Badge bg='secondary'>""</Badge> и{' '}
				<Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>. Для него они все одинаковы,
				т.е. являются ложными значениями. Если первым аргументом для оператора{' '}
				<Badge bg='secondary'>||</Badge> будет любое из перечисленных значений,
				то в качестве результата мы получим второй аргумент.
			</p>
			<p>
				Однако на практике часто требуется использовать значение по умолчанию
				только тогда, когда переменная является{' '}
				<Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>. Ведь именно тогда значение
				действительно неизвестно/не определено.
			</p>
			<p>Рассмотрим следующий пример:</p>
			<CodeJs
				js={`let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0`}
			/>
			<ul>
				<li>
					<Badge bg='secondary'>height || 100</Badge> проверяет{' '}
					<Badge bg='secondary'>height</Badge> на ложное значение, оно равно{' '}
					<Badge bg='secondary'>0</Badge>, да, ложное.
				</li>
				<li>
					поэтому результатом <Badge bg='secondary'>||</Badge> является второй
					аргумент, т.е. <Badge bg='secondary'>100</Badge>.
				</li>
				<li>
					<Badge bg='secondary'>height ?? 100</Badge> проверяет, что
					переменная <Badge bg='secondary'>height</Badge> содержит{' '}
					<Badge bg='secondary'>null</Badge>/
					<Badge bg='secondary'>undefined</Badge>, а поскольку это не так,
				</li>
				<li>
					то результатом является сама переменная{' '}
					<Badge bg='secondary'>height</Badge>, т.е.{' '}
					<Badge bg='secondary'>0</Badge>.
				</li>
			</ul>
			<p>
				На практике нулевая высота часто является вполне нормальным значением,
				которое не следует заменять значением по умолчанию. Таким образом,{' '}
				<Badge bg='secondary'>??</Badge> здесь как раз работает так, как нужно.
			</p>

			<h3>Приоритет</h3>
			<p>
				Приоритет оператора <Badge bg='secondary'>??</Badge> такой же, как и у{' '}
				<Badge bg='secondary'>||</Badge>. Они оба равны 3 в таблице на MDN.
			</p>
			<p>
				Это означает, что, как и <Badge bg='secondary'>||</Badge>, оператор
				нулевого слияния <Badge bg='secondary'>??</Badge> вычисляется до{' '}
				<Badge bg='secondary'>=</Badge> и <Badge bg='secondary'>?</Badge>, но
				после большинства других операций, таких как{' '}
				<Badge bg='secondary'>+</Badge>, <Badge bg='secondary'>*</Badge>.
			</p>
			<p>Так что, в выражениях такого вида понадобятся скобки:</p>
			<CodeJs
				js={`let height = null;
let width = null;

// важно: используйте круглые скобки
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000`}
			/>
			<p>
				Иначе, если опустить скобки, оператор <Badge bg='secondary'>*</Badge>{' '}
				выполнится первым, так как у него приоритет выше, чем у{' '}
				<Badge bg='secondary'>??</Badge>, и это приведёт к неправильным
				результатам.
			</p>
			<CodeJs
				js={`// без скобок
let area = height ?? 100 * width ?? 50;

// ...сработает вот так (совсем не как нам нужно):
let area = height ?? (100 * width) ?? 50;`}
			/>

			<h3>Использование ?? вместе с && или ||</h3>
			<p>
				По соображениям безопасности JavaScript запрещает использование
				оператора <Badge bg='secondary'>??</Badge> вместе с{' '}
				<Badge bg='secondary'>&&</Badge> и <Badge bg='secondary'>||</Badge>,
				если приоритет явно не указан при помощи круглых скобок.
			</p>
			<p>Выполнение следующего кода приведёт к синтаксической ошибке:</p>
			<CodeJs js={`let x = 1 && 2 ?? 3; // Синтаксическая ошибка`} />
			<p>
				Это, безусловно, спорное ограничение было добавлено в спецификацию
				языка с целью избежать программные ошибки, когда люди начнут
				переходить с <Badge bg='secondary'>||</Badge> на{' '}
				<Badge bg='secondary'>??</Badge>.
			</p>
			<p>Используйте скобки, чтобы обойти это ограничение:</p>
			<CodeJs
				js={`let x = (1 && 2) ?? 3; // Работает без ошибок

alert(x); // 2`}
			/>

			<h2>Оператор нулевого присваивания (??=)</h2>
			<p>
				Предположим, нам необходимо проверить, равна ли переменная{' '}
				<Badge bg='secondary'>null</Badge> или{' '}
				<Badge bg='secondary'>undefined</Badge>, и если это так — присвоить
				этой переменной какое-либо другое значение.
			</p>
			<p>Вот как мы сделали бы это сейчас:</p>
			<CodeJs
				js={`let userAge = null;

if (userAge === null || userAge === undefined) {
  userAge = 18;
}`}
			/>
			<p>
				Выглядит громоздко, правда? Существует оператор, более подходящий для
				подобных задач. Вот его синтаксис:
			</p>
			<CodeNote js={`x ??= y`} />
			<p>
				Оператор <Badge bg='secondary'>??=</Badge> присвоит{' '}
				<Badge bg='secondary'>x</Badge> значение <Badge bg='secondary'>y</Badge>{' '}
				только в том случае, если <Badge bg='secondary'>x</Badge> не определено
				(<Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>).
			</p>
			<p>
				Теперь попробуем переписать уже знакомый нам фрагмент кода используя
				новый оператор:
			</p>
			<CodeJs
				js={`let userAge = null;

userAge ??= 18;

alert(userAge) // 18`}
			/>
			<p>
				Обратите внимание: если бы <Badge bg='secondary'>userAge</Badge> не был
				равен <Badge bg='secondary'>null</Badge>/
				<Badge bg='secondary'>undefined</Badge>, то выражение справа от{' '}
				<Badge bg='secondary'>??=</Badge> никогда бы не выполнилось:
			</p>
			<CodeJs
				js={`let userAge = 18;

userAge ??= alert("не сработает");
userAge ??= 21;
userAge ??= null;

alert(userAge) // по-прежнему 18`}
			/>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Оператор нулевого слияния <Badge bg='secondary'>??</Badge> — это
				быстрый способ выбрать первое «определённое» значение из списка.
			</p>
			<p>
				Используется для присвоения переменным значений по умолчанию:
			</p>
			<CodeJs
				js={`// будет height=100, если переменная height равна null или undefined
height = height ?? 100;`}
			/>
			<p>
				Оператор <Badge bg='secondary'>??</Badge> имеет очень низкий приоритет,
				лишь немного выше, чем у <Badge bg='secondary'>?</Badge> и{' '}
				<Badge bg='secondary'>=</Badge>, поэтому при использовании его в
				выражении, скорее всего, потребуются скобки.
			</p>
			<p>
				Запрещено использовать вместе с <Badge bg='secondary'>||</Badge> или{' '}
				<Badge bg='secondary'>&&</Badge> без явно указанного приоритета, то
				есть без скобок.
			</p>
			<p>
				Для присвоения переменной значения в зависимости от того, «определена»
				она или нет, используется оператор нулевого присваивания{' '}
				<Badge bg='secondary'>??=</Badge>.
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
								Назначение
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
								<Badge bg='secondary'>??</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Нулевое слияние
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Возвращает первое определённое значение
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>??=</Badge>
							</td>
							<td style={{ padding: '8px' }}>Нулевое присваивание</td>
							<td style={{ padding: '8px' }}>
								Присваивает значение, если переменная undefined/null
							</td>
						</tr>
					</tbody>
				</table>
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
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					Отличие от оператора ||
				</h1>
				<p>
					<Badge bg='secondary'>||</Badge> возвращает первое{' '}
					<strong>истинное</strong> значение, а <Badge bg='secondary'>??</Badge>{' '}
					возвращает первое <strong>определённое</strong> значение.
				</p>
				<p>
					Используйте <Badge bg='secondary'>??</Badge>, когда{' '}
					<Badge bg='secondary'>0</Badge>, <Badge bg='secondary'>""</Badge> или{' '}
					<Badge bg='secondary'>false</Badge> являются допустимыми значениями.
				</p>
			</div>
								<TaskViewer tasks={tasks['2.12']} />

		</Container>
	)
}