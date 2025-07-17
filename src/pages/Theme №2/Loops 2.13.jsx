import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function Loops() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Циклы while и for</h1>

			<p>
				При написании скриптов зачастую встаёт задача сделать однотипное
				действие много раз.
			</p>
			<p>
				Например, вывести товары из списка один за другим. Или просто перебрать
				все числа от 1 до 10 и для каждого выполнить одинаковый код.
			</p>
			<p>
				Для многократного повторения одного участка кода предусмотрены циклы.
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
					Циклы for…of и for…in
				</h1>
				<p>Небольшое объявление для продвинутых читателей.</p>
				<p>
					В этой статье рассматриваются только базовые циклы:{' '}
					<Badge bg='secondary'>while</Badge>,{' '}
					<Badge bg='secondary'>do..while</Badge> и{' '}
					<Badge bg='secondary'>for(..;..;..)</Badge>.
				</p>
				<p>
					Если вы пришли к этой статье в поисках других типов циклов, вот
					указатели:
				</p>
				<ul>
					<li>
						См. <Badge bg='secondary'>for…in</Badge> для перебора свойств
						объекта.
					</li>
					<li>
						См. <Badge bg='secondary'>for…of</Badge> и Перебираемые объекты для
						перебора массивов и перебираемых объектов.
					</li>
				</ul>
			</div>

			<h2>Цикл «while»</h2>
			<p>
				Цикл <Badge bg='secondary'>while</Badge> имеет следующий синтаксис:
			</p>
			<CodeNote
				js={`while (condition) {
  // код
  // также называемый "телом цикла"
}`}
			/>
			<p>
				Код из тела цикла выполняется, пока условие{' '}
				<Badge bg='secondary'>condition</Badge> истинно.
			</p>
			<p>
				Например, цикл ниже выводит <Badge bg='secondary'>i</Badge>, пока{' '}
				<Badge bg='secondary'>{'i < 3'}</Badge>:
			</p>
			<CodeJs
				js={`let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}`}
			/>
			<p>
				Одно выполнение тела цикла по-научному называется{' '}
				<strong>итерация</strong>. Цикл в примере выше совершает три итерации.
			</p>
			<p>
				Если бы строка <Badge bg='secondary'>i++</Badge> отсутствовала в примере
				выше, то цикл бы повторялся (в теории) вечно. На практике, конечно,
				браузер не позволит такому случиться, он предоставит пользователю
				возможность остановить «подвисший» скрипт, а JavaScript на стороне
				сервера придётся «убить» процесс.
			</p>
			<p>
				Любое выражение или переменная может быть условием цикла, а не только
				сравнение: условие <Badge bg='secondary'>while</Badge> вычисляется и
				преобразуется в логическое значение.
			</p>
			<p>
				Например, <Badge bg='secondary'>while (i)</Badge> – более краткий
				вариант <Badge bg='secondary'>while (i != 0)</Badge>:
			</p>
			<CodeJs
				js={`let i = 3;
while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
  alert( i );
  i--;
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
					Фигурные скобки не требуются для тела цикла из одной строки
				</h1>
				<p>
					Если тело цикла состоит лишь из одной инструкции, мы можем опустить
					фигурные скобки <Badge bg='secondary'>{`{…}`}</Badge>:
				</p>
				<CodeNote
					js={`let i = 3;
while (i) alert(i--);`}
				/>
			</div>

			<h2>Цикл «do…while»</h2>
			<p>
				Проверку условия можно разместить под телом цикла, используя специальный
				синтаксис <Badge bg='secondary'>do..while</Badge>:
			</p>
			<CodeNote
				js={`do {
  // тело цикла
} while (condition);`}
			/>
			<p>
				Цикл сначала выполнит тело, а затем проверит условие{' '}
				<Badge bg='secondary'>condition</Badge>, и пока его значение равно{' '}
				<Badge bg='secondary'>true</Badge>, он будет выполняться снова и снова.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);`}
			/>
			<p>
				Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла
				выполнилось хотя бы один раз, даже если условие окажется ложным. На
				практике чаще используется форма с предусловием:{' '}
				<Badge bg='secondary'>while(…) {`{…}`}</Badge>.
			</p>

			<h2>Цикл «for»</h2>
			<p>
				Более сложный, но при этом самый распространённый цикл — цикл{' '}
				<Badge bg='secondary'>for</Badge>.
			</p>
			<p>Выглядит он так:</p>
			<CodeNote
				js={`for (начало; условие; шаг) {
  // ... тело цикла ...
}`}
			/>
			<p>
				Давайте разберёмся, что означает каждая часть, на примере. Цикл ниже
				выполняет <Badge bg='secondary'>alert(i)</Badge> для{' '}
				<Badge bg='secondary'>i</Badge> от 0 до (но не включая) 3:
			</p>
			<CodeJs
				js={`for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}`}
			/>
			<p>
				Рассмотрим конструкцию <Badge bg='secondary'>for</Badge> подробней:
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
								Часть
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Пример
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
								<Badge bg='secondary'>начало</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<code>let i = 0</code>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Выполняется один раз при входе в цикл
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>условие</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<code>i &lt; 3</code>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Проверяется перед каждой итерацией цикла. Если оно вычислится в{' '}
								<Badge bg='secondary'>false</Badge>, цикл остановится.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>тело</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<code>alert(i)</code>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Выполняется снова и снова, пока условие вычисляется в{' '}
								<Badge bg='secondary'>true</Badge>.
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>шаг</Badge>
							</td>
							<td style={{ padding: '8px' }}>
								<code>i++</code>
							</td>
							<td style={{ padding: '8px' }}>
								Выполняется после тела цикла на каждой итерации перед проверкой
								условия.
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<p>В целом, алгоритм работы цикла выглядит следующим образом:</p>
			<CodeNote
				js={`Выполнить начало
→ (Если условие == true → Выполнить тело, Выполнить шаг)
→ (Если условие == true → Выполнить тело, Выполнить шаг)
→ (Если условие == true → Выполнить тело, Выполнить шаг)
→ ...`}
			/>

			<h3>Встроенное объявление переменной</h3>
			<p>
				В примере переменная счётчика <Badge bg='secondary'>i</Badge> была
				объявлена прямо в цикле. Это так называемое «встроенное» объявление
				переменной. Такие переменные существуют только внутри цикла.
			</p>
			<CodeJs
				js={`for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // ошибка, нет такой переменной`}
			/>
			<p>
				Вместо объявления новой переменной мы можем использовать уже
				существующую:
			</p>
			<CodeJs
				js={`let i = 0;

for (i = 0; i < 3; i++) { // используем существующую переменную
  alert(i); // 0, 1, 2
}

alert(i); // 3, переменная доступна, т.к. была объявлена снаружи цикла`}
			/>

			<h3>Пропуск частей «for»</h3>
			<p>
				Любая часть <Badge bg='secondary'>for</Badge> может быть пропущена.
			</p>
			<p>
				Для примера, мы можем пропустить начало если нам ничего не нужно делать
				перед стартом цикла:
			</p>
			<CodeJs
				js={`let i = 0; // мы уже имеем объявленную i с присвоенным значением

for (; i < 3; i++) { // нет необходимости в "начале"
  alert( i ); // 0, 1, 2
}`}
			/>
			<p>Можно убрать и шаг:</p>
			<CodeJs
				js={`let i = 0;

for (; i < 3;) {
  alert( i++ );
}`}
			/>
			<p>
				Это сделает цикл аналогичным{' '}
				<Badge bg='secondary'>while {'(i < 3)'}</Badge>.
			</p>
			<p>А можно и вообще убрать всё, получив бесконечный цикл:</p>
			<CodeJs
				js={`for (;;) {
  // будет выполняться вечно
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
					Точки с запятой обязательны
				</h1>
				<p>
					При этом сами точки с запятой <Badge bg='secondary'>;</Badge>{' '}
					обязательно должны присутствовать, иначе будет ошибка синтаксиса.
				</p>
			</div>

			<h2>Прерывание цикла: «break»</h2>
			<p>
				Обычно цикл завершается при вычислении условия в{' '}
				<Badge bg='secondary'>false</Badge>.
			</p>
			<p>
				Но мы можем выйти из цикла в любой момент с помощью специальной
				директивы <Badge bg='secondary'>break</Badge>.
			</p>
			<p>
				Например, следующий код подсчитывает сумму вводимых чисел до тех пор,
				пока посетитель их вводит, а затем – выдаёт:
			</p>
			<CodeJs
				js={`let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );`}
			/>
			<p>
				Директива <Badge bg='secondary'>break</Badge> в строке (*) полностью
				прекращает выполнение цикла и передаёт управление на строку за его
				телом, то есть на <Badge bg='secondary'>alert</Badge>.
			</p>
			<p>
				Вообще, сочетание «бесконечный цикл +{' '}
				<Badge bg='secondary'>break</Badge>» – отличная штука для тех ситуаций,
				когда условие, по которому нужно прерваться, находится не в начале или
				конце цикла, а посередине или даже в нескольких местах его тела.
			</p>

			<h2>Переход к следующей итерации: continue</h2>
			<p>
				Директива <Badge bg='secondary'>continue</Badge> – «облегчённая версия»{' '}
				<Badge bg='secondary'>break</Badge>. При её выполнении цикл не
				прерывается, а переходит к следующей итерации (если условие все ещё
				равно <Badge bg='secondary'>true</Badge>).
			</p>
			<p>
				Её используют, если понятно, что на текущем повторе цикла делать больше
				нечего.
			</p>
			<p>
				Например, цикл ниже использует <Badge bg='secondary'>continue</Badge>,
				чтобы выводить только нечётные значения:
			</p>
			<CodeJs
				js={`for (let i = 0; i < 10; i++) {

  // если true, пропустить оставшуюся часть тела цикла
  if (i % 2 == 0) continue;

  alert(i); // 1, затем 3, 5, 7, 9
}`}
			/>
			<p>
				Для чётных значений <Badge bg='secondary'>i</Badge>, директива{' '}
				<Badge bg='secondary'>continue</Badge> прекращает выполнение тела цикла
				и передаёт управление на следующую итерацию{' '}
				<Badge bg='secondary'>for</Badge> (со следующим числом). Таким образом{' '}
				<Badge bg='secondary'>alert</Badge> вызывается только для нечётных
				значений.
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
					Нельзя использовать break/continue справа от оператора „?"
				</h1>
				<p>
					Обратите внимание, что эти синтаксические конструкции не являются
					выражениями и не могут быть использованы с тернарным оператором{' '}
					<Badge bg='secondary'>?</Badge>. В частности, использование таких
					директив, как <Badge bg='secondary'>break</Badge>/
					<Badge bg='secondary'>continue</Badge>, вызовет ошибку.
				</p>
			</div>

			<h2>Метки для break/continue</h2>
			<p>Бывает, нужно выйти одновременно из нескольких уровней цикла сразу.</p>
			<p>
				Например, в коде ниже мы проходимся циклами по{' '}
				<Badge bg='secondary'>i</Badge> и <Badge bg='secondary'>j</Badge>,
				запрашивая с помощью <Badge bg='secondary'>prompt</Badge> координаты (i,
				j) с (0,0) до (2,2):
			</p>
			<CodeJs
				js={`for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(\`Значение на координатах (\${i},\${j})\`, '');

    // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  }
}

alert('Готово!');`}
			/>
			<p>
				Нам нужен способ остановить выполнение, если пользователь отменит ввод.
			</p>
			<p>
				Обычный <Badge bg='secondary'>break</Badge> после{' '}
				<Badge bg='secondary'>input</Badge> лишь прервёт внутренний цикл, но
				этого недостаточно. Достичь желаемого поведения можно с помощью меток.
			</p>
			<p>Метка имеет вид идентификатора с двоеточием перед циклом:</p>
			<CodeNote
				js={`labelName: for (...) {
  ...
}`}
			/>
			<p>
				Вызов <Badge bg='secondary'>break &lt;labelName&gt;</Badge> в цикле ниже
				ищет ближайший внешний цикл с такой меткой и переходит в его конец.
			</p>
			<CodeJs
				js={`outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(\`Значение на координатах (\${i},\${j})\`, '');

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}

alert('Готово!');`}
			/>
			<p>
				В примере выше это означает, что вызовом{' '}
				<Badge bg='secondary'>break outer</Badge> будет разорван внешний цикл до
				метки с именем <Badge bg='secondary'>outer</Badge>.
			</p>
			<p>
				Таким образом управление перейдёт со строки, помеченной (*), к{' '}
				<Badge bg='secondary'>alert('Готово!')</Badge>.
			</p>

			<h1 className='mt-5'>Итого</h1>
			<p>Мы рассмотрели 3 вида циклов:</p>
			<ul>
				<li>
					<Badge bg='secondary'>while</Badge> – Проверяет условие перед каждой
					итерацией.
				</li>
				<li>
					<Badge bg='secondary'>do..while</Badge> – Проверяет условие после
					каждой итерации.
				</li>
				<li>
					<Badge bg='secondary'>for (;;)</Badge> – Проверяет условие перед
					каждой итерацией, есть возможность задать дополнительные настройки.
				</li>
			</ul>
			<p>
				Чтобы организовать бесконечный цикл, используют конструкцию{' '}
				<Badge bg='secondary'>while (true)</Badge>. При этом он, как и любой
				другой цикл, может быть прерван директивой{' '}
				<Badge bg='secondary'>break</Badge>.
			</p>
			<p>
				Если на данной итерации цикла делать больше ничего не надо, но полностью
				прекращать цикл не следует – используют директиву{' '}
				<Badge bg='secondary'>continue</Badge>.
			</p>
			<p>
				Обе этих директивы поддерживают метки, которые ставятся перед циклом.
				Метки – единственный способ для <Badge bg='secondary'>break</Badge>/
				<Badge bg='secondary'>continue</Badge> выйти за пределы текущего цикла,
				повлиять на выполнение внешнего.
			</p>
			<p>
				Заметим, что метки не позволяют прыгнуть в произвольное место кода, в
				JavaScript нет такой возможности.
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
				<h3>Основные циклы JavaScript</h3>
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
								Цикл
							</th>
							<th
								style={{
									padding: '10px',
									borderBottom: '1px solid #6c757d',
									textAlign: 'left',
								}}
							>
								Когда использовать
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
								<Badge bg='secondary'>while</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Когда количество итераций неизвестно заранее
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Проверка условия перед выполнением
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								<Badge bg='secondary'>do..while</Badge>
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Когда тело цикла должно выполниться хотя бы один раз
							</td>
							<td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
								Проверка условия после выполнения
							</td>
						</tr>
						<tr>
							<td style={{ padding: '8px' }}>
								<Badge bg='secondary'>for</Badge>
							</td>
							<td style={{ padding: '8px' }}>
								Когда количество итераций известно заранее
							</td>
							<td style={{ padding: '8px' }}>
								Компактная запись с инициализацией, условием и шагом
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<TaskViewer tasks={tasks['2.13']} />
		</Container>
	)
}
