import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function InteractionAlert() {
	return (
		<Container className='text-light mt-5 mb-5'>
			<ArrowNavigator />
			<h1>Взаимодействие: alert, prompt, confirm</h1>

			<p>
				Так как мы будем использовать браузер как демо-среду, нам нужно
				познакомиться с несколькими функциями его интерфейса, а именно:
				<Badge bg='secondary'>alert</Badge>,<Badge bg='secondary'>prompt</Badge>{' '}
				и<Badge bg='secondary'>confirm</Badge>.
			</p>

			<h2>alert</h2>
			<p>
				С этой функцией мы уже знакомы. Она показывает сообщение и ждёт, пока
				пользователь нажмёт кнопку «ОК».
			</p>
			<p>Например:</p>
			<CodeJs js={`alert("Hello");`} />
			<p>
				Это небольшое окно с сообщением называется модальным окном. Понятие
				модальное означает, что пользователь не может взаимодействовать с
				интерфейсом остальной части страницы, нажимать на другие кнопки и т.д.
				до тех пор, пока взаимодействует с окном. В данном случае – пока не
				будет нажата кнопка «OK».
			</p>
			<h2>prompt</h2>
			<p>
				Функция <Badge bg='secondary'>prompt</Badge> принимает два аргумента:
			</p>
			<CodeNote js={`result = prompt(title, [default]);`} />
			<p>
				Этот код отобразит модальное окно с текстом, полем для ввода текста и
				кнопками OK/Отмена.
			</p>
			<p>
				<Badge bg='secondary'>title</Badge>
			</p>
			<p>Текст для отображения в окне.</p>
			<p>
				default<Badge bg='secondary'></Badge>
			</p>
			<p>
				Необязательный второй параметр, который устанавливает начальное значение
				в поле для текста в окне.
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
					Квадратные скобки в синтаксисе <Badge bg='secondary'>[...]</Badge>
				</h1>
				<p>
					Квадратные скобки вокруг <Badge bg='secondary'>default</Badge> в
					описанном выше синтаксисе означают, что параметр факультативный,
					необязательный.
				</p>
			</div>

			<p>
				Пользователь может напечатать что-либо в поле ввода и нажать OK.
				Введённый текст будет присвоен переменной
				<Badge bg='secondary'>result</Badge>. Пользователь также может отменить
				ввод нажатием на кнопку «Отмена» или нажав на клавишу
				<Badge bg='success'>Esc</Badge>. В этом случае значением
				<Badge bg='secondary'>result</Badge> станет
				<Badge bg='secondary'>null</Badge>.
			</p>
			<p>
				Вызов <Badge bg='secondary'>prompt</Badge> возвращает текст, указанный в
				поле для ввода, или <Badge bg='secondary'>null</Badge>, если ввод
				отменён пользователем.
			</p>
			<CodeJs
				js={`  let name = prompt('Как тебя зовут', 'Илона');

  alert(\`Тебе звать \${name}!\`); // Тебя зовут Илона!`}
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
					Для IE: всегда устанавливайте значение по умолчанию
				</h1>

				<p>
					Второй параметр является необязательным, но если не указать его, то
					Internet Explorer вставит строку U+0022undefinedU+0022 в поле для
					ввода.
				</p>
				<p>Запустите код в Internet Explorer и посмотрите на результат:</p>

				<CodeJs js={` let test = prompt("Test");`} />

				<p>
					Чтобы <Badge bg='secondary'>prompt</Badge> хорошо выглядел в IE,
					рекомендуется всегда указывать второй параметр:
				</p>

				<CodeJs js={` let test = prompt("Test", ''); // <-- для IE`} />
			</div>
			<h1>confirm</h1>

			<p>Синтаксис:</p>
			<CodeNote js={` result = confirm(question);`} />
			<p>
				Функция <Badge bg='secondary'>confirm</Badge> отображает модальное окно
				с текстом вопроса <Badge bg='secondary'>question</Badge> и двумя
				кнопками: OK и Отмена.
			</p>
			<p>
				Результат – <Badge bg='secondary'>true</Badge>, если нажата кнопка OK. В
				других случаях –<Badge bg='secondary'>false</Badge>.
			</p>
			<p>Например:</p>
			<CodeJs
				js={`  let isBoss = confirm("Ты здесь главный?");

  alert( isBoss ); // true, если нажата OK`}
			/>

			<h1 className='mt-5'>Итого</h1>
			<p>
				Мы рассмотрели 3 функции браузера для взаимодействия с пользователем:
			</p>
			<p>
				<Badge bg='secondary'>alert</Badge>
			</p>
			<p>показывает сообщение.</p>
			<Badge bg='secondary'>prompt</Badge>
			<p>
				показывает сообщение и запрашивает ввод текста от пользователя.
				Возвращает напечатанный в поле ввода текст или{' '}
				<Badge bg='secondary'>null</Badge>, если была нажата кнопка «Отмена» или{' '}
				<Badge bg='success'>Esc</Badge> с клавиатуры.
			</p>
			<Badge bg='secondary'>confirm</Badge>
			<p>
				показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена.
				Возвращает <Badge bg='secondary'>true</Badge>, если нажата OK, и{' '}
				<Badge bg='secondary'>false</Badge>, если нажата кнопка «Отмена» или{' '}
				<Badge bg='success'>Esc</Badge> с клавиатуры.
			</p>
			<p>
				Все эти методы являются модальными: останавливают выполнение скриптов и
				не позволяют пользователю взаимодействовать с остальной частью страницы
				до тех пор, пока окно не будет закрыто.
			</p>
			<p>На все указанные методы распространяются два ограничения:</p>
			<ol>
				<li>
					Расположение окон определяется браузером. Обычно окна находятся в
					центре.
				</li>
				<li>
					Визуальное отображение окон зависит от браузера, и мы не можем
					изменить их вид.
				</li>
			</ol>
			<p>
				Такова цена простоты. Есть другие способы показать более приятные глазу
				окна с богатой функциональностью для взаимодействия с пользователем, но
				если «навороты» не имеют значения, то данные методы работают отлично.
			</p>
			<TaskViewer tasks={tasks['2.6']} />
		</Container>
	)
}
