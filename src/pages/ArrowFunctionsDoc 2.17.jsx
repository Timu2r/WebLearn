import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import ArrowNavigator from '../components/ArrowNavigator'
import CodeJs from '../components/CodeJs'
import CodeNote from '../components/CodeNote'
import TaskViewer from '../components/TaskViewer/TaskViewer'
import { tasks } from '../data/tasks.js'

export default function ArrowFunctionsDoc() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Стрелочные функции, основы</h1>

			<p>
				Существует ещё один очень простой и лаконичный синтаксис для создания
				функций, который часто лучше, чем Function Expression.
			</p>
			<p>
				Он называется «функции-стрелки» или «стрелочные функции» (arrow
				functions) т.к. выглядит следующим образом:
			</p>
			<CodeNote js={`let func = (arg1, arg2, ...argN) => expression;`} />
			<p>
				Это создаёт функцию <Badge bg='secondary'>func</Badge>, которая
				принимает аргументы <Badge bg='secondary'>arg1..argN</Badge>, затем
				вычисляет <Badge bg='secondary'>expression</Badge> в правой части с их
				использованием и возвращает результат.
			</p>
			<p>Другими словами, это сокращённая версия:</p>
			<CodeJs
				js={`let func = function(arg1, arg2, ...argN) {
  return expression;
};`}
			/>
			<p>Давайте рассмотрим конкретный пример:</p>
			<CodeJs
				js={`let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/
alert( sum(1, 2) ); // 3`}
			/>
			<p>
				Как вы можете видеть, <Badge bg='secondary'>(a, b) {'=>'} a + b</Badge>{' '}
				задаёт функцию, которая принимает два аргумента с именами{' '}
				<Badge bg='secondary'>a</Badge> и <Badge bg='secondary'>b</Badge>. И при
				выполнении она вычисляет выражение <Badge bg='secondary'>a + b</Badge> и
				возвращает результат.
			</p>
			<p>
				Если у нас только один аргумент, то круглые скобки вокруг параметров
				можно опустить, сделав запись ещё короче:
			</p>
			<CodeJs
				js={`let double = n => n * 2;
// примерно тоже что и: let double = function(n) { return n * 2 }
alert( double(3) ); // 6`}
			/>
			<p>
				Если аргументов нет, круглые скобки будут пустыми, но они должны
				присутствовать:
			</p>
			<CodeJs
				js={`let sayHi = () => alert("Hello!");
sayHi();`}
			/>
			<p>
				Стрелочные функции можно использовать так же, как и Function Expression.
			</p>
			<p>Например, для динамического создания функции:</p>
			<CodeJs
				js={`// let age = prompt("Сколько Вам лет?", 18); // В реальном приложении используйте пользовательский ввод
let age = 18; // Для примера
let welcome = (age < 18) ?
  () => alert('Привет!') :
  () => alert("Здравствуйте!");

welcome();`}
			/>
			<p>
				Поначалу стрелочные функции могут показаться необычными и даже
				трудночитаемыми, но это быстро пройдёт по мере того, как глаза привыкнут
				к этим конструкциям.
			</p>
			<p>
				Они очень удобны для простых однострочных действий, когда лень писать
				много слов.
			</p>

			<h2>Многострочные стрелочные функции</h2>
			<p>
				Стрелочные функции, которые мы видели до этого, были очень простыми. Они
				брали аргументы слева от <Badge bg='secondary'>{'=>'}</Badge> и
				вычисляли и возвращали выражение справа.
			</p>
			<p>
				Иногда нам нужна более сложная функция, с несколькими выражениями и
				инструкциями. Это также возможно, нужно лишь заключить их в фигурные
				скобки. При этом важное отличие – в том, что в таких скобках для
				возврата значения нужно использовать{' '}
				<Badge bg='secondary'>return</Badge> (как в обычных функциях).
			</p>
			<p>Вроде этого:</p>
			<CodeJs
				js={`let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
};
alert( sum(1, 2) ); // 3`}
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
					Дальше – больше
				</h1>
				<p>
					Здесь мы представили главной целью стрелочных функций краткость. Но
					это ещё не всё!
				</p>
				<p>Стрелочные функции обладают и другими интересными возможностями.</p>
				<p>
					Чтобы изучить их более подробно, нам сначала нужно познакомиться с
					некоторыми другими аспектами JavaScript, поэтому мы вернёмся к
					стрелочным функциям позже, в главе{' '}
					<Badge bg='secondary'>Повторяем стрелочные функции</Badge>.
				</p>
				<p>
					А пока мы можем использовать их для простых однострочных действий и
					колбэков.
				</p>
			</div>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Стрелочные функции очень удобны для простых действий, особенно для
				однострочных.
			</p>
			<p>Они бывают двух типов:</p>
			<ul>
				<li>
					<Badge bg='secondary'>Без фигурных скобок:</Badge>{' '}
					<CodeNote js={`(...args) => expression`} /> – правая сторона
					выражения: функция вычисляет его и возвращает результат. Скобки можно
					не ставить, если аргумент только один: <CodeNote js={`n => n * 2`} />.
				</li>
				<li>
					<Badge bg='secondary'>С фигурными скобками:</Badge>{' '}
					<CodeNote js={`(...args) => { body }`} /> – скобки позволяют нам
					писать несколько инструкций внутри функции, но при этом необходимо
					явно вызывать <Badge bg='secondary'>return</Badge>, чтобы вернуть
					значение.
				</li>
			</ul>
			<TaskViewer tasks={tasks['2.9']} />
		</Container>
	)
}
