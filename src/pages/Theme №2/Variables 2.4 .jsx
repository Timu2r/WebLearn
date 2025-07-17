import { Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function Variables() {
	return (
		<Container className='text-light mt-5'>
			<ArrowNavigator />

			<h1>Переменные</h1>

			<p>
				JavaScript-приложению обычно нужно работать с информацией. Например:
			</p>

			<ol>
				<li>
					Интернет-магазин – информация может включать продаваемые товары и
					корзину покупок.
				</li>
				<li>
					Чат – информация может включать пользователей, сообщения и многое
					другое.
				</li>
			</ol>

			<p>Переменные используются для хранения этой информации.</p>

			<h2>Переменная</h2>

			<p>
				<a href='https://ru.wikipedia.org/wiki/Переменная_(программирование)'>
					Переменная
				</a>
				– это «именованное хранилище» для данных. Мы можем использовать
				переменные для хранения товаров, посетителей и других данных.
			</p>

			<p>
				Для создания переменной в JavaScript используйте ключевое слово
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					let.
				</span>
			</p>
			<p>
				Приведённая ниже инструкция создаёт (другими словами, объявляет)
				переменную с именем «message»:
			</p>

			<CodeNote js={` let message;`} />

			<p className='mt-4'>
				Теперь можно поместить в неё данные (другими словами, определить
				переменную), используя оператор присваивания
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					=
				</span>
				:
			</p>

			<CodeNote
				js={` let message;

 message = 'Hello'; 
 // сохранить строку 'Hello' в переменной с именем message`}
			/>

			<p className='mt-4'>
				Строка сохраняется в области памяти, связанной с переменной. Мы можем
				получить к ней доступ, используя имя переменной:
			</p>

			<CodeJs
				js={` let message;
 message = 'Hello!';

 alert(message); // показывает содержимое переменной`}
			/>

			<p className='mt-4'>
				Для краткости можно совместить объявление переменной и запись данных в
				одну строку:
			</p>

			<CodeJs
				js={` let message;
 message = 'Hello!';

 alert(message); // показывает содержимое переменной`}
			/>

			<p>Мы также можем объявить несколько переменных в одной строке:</p>

			<CodeNote js={` let user = 'John', age = 25, message = 'Hello';`} />

			<p>
				Такой способ может показаться короче, но мы не рекомендуем его. Для
				лучшей читаемости объявляйте каждую переменную на новой строке.
			</p>
			<p>Многострочный вариант немного длиннее, но легче для чтения:</p>

			<CodeNote
				js={` let user = 'John';
 let age = 25;
 let message = 'Hello';`}
			/>

			<p>
				Некоторые люди также определяют несколько переменных в таком вот
				многострочном стиле:
			</p>

			<CodeNote
				js={` let user = 'John',
  age = 25,
  message = 'Hello';`}
			/>

			<p>…Или даже с запятой в начале строки:</p>

			<CodeNote
				js={` let user = 'John'
  , age = 25
  , message = 'Hello';`}
			/>

			<p>
				В принципе, все эти варианты работают одинаково. Так что это вопрос
				личного вкуса и эстетики.
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
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						var
					</span>
					вместо
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>
				</h1>
				<p>
					В старых скриптах вы также можете найти другое ключевое слово: var
					вместо let:
				</p>
				<CodeNote js={` var message = 'Hello';`} />
				<p>
					Ключевое слово
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						var
					</span>
					– почти то же самое, что и
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>
					. Оно объявляет переменную, но немного по-другому, «устаревшим»
					способом.
				</p>

				<p>
					Есть тонкие различия между
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>
					и
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						var
					</span>
					, но они пока не имеют для нас значения. Мы подробно рассмотрим их в
					главе Устаревшее ключевое слово &gt;var&gt;.
				</p>
			</div>

			<h2>Аналогия из жизни</h2>

			<p>
				Мы легко поймём концепцию «переменной», если представим её в виде
				«коробки» для данных с уникальным названием на ней.
			</p>

			<p>Мы можем положить любое значение в коробку.</p>
			<p>Мы также можем изменить его столько раз, сколько захотим:</p>

			<CodeJs
				js={` let message;

 message = 'Hello!';

 message = 'World!'; // значение изменено 

 alert(message);`}
			/>

			<p>При изменении значения старые данные удаляются из переменной.</p>

			<p>
				Мы также можем объявить две переменные и скопировать данные из одной в
				другую.
			</p>

			<CodeJs
				js={` let hello = 'Hello world!';

 let message;

 // копируем значение 'Hello world' из переменной hello 
 // в переменную message

 message = hello;

 // теперь две переменные содержат одинаковые данные
 alert(hello); // Hello world!
 alert(message); // Hello world!`}
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
					Повторное объявление вызывает ошибку
				</h1>

				<p>Переменная может быть объявлена только один раз.</p>
				<p>Повторное объявление той же переменной является ошибкой:</p>

				<CodeJs
					js={`let message = "Это";

 // повторение ключевого слова 'let' приводит к ошибке
 let message = "Другое"; 
 // SyntaxError: 'message' has already been declared`}
				/>

				<p>
					Поэтому следует объявлять переменную только один раз и затем
					использовать её уже без
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>
					.
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
					Функциональные языки программирования
				</h1>
				<p>
					Примечательно, что существуют
					<a href='https://ru.wikipedia.org/wiki/Функциональное_программирование'>
						функциональные
					</a>
					языки программирования, такие как
					<a href='https://www.scala-lang.org/'>Scala</a> или
					<a href='https://www.erlang.org/'>Erlang</a> , которые запрещают
					изменять значение переменной.
				</p>
				<p>
					В таких языках однажды сохранённое «в коробку» значение остаётся там
					навсегда. Если нам нужно сохранить что-то другое, язык заставляет нас
					создать новую коробку (объявить новую переменную). Мы не можем
					использовать старую переменную.
				</p>
				<p>
					Хотя на первый взгляд это может показаться немного странным, эти языки
					вполне подходят для серьёзной разработки. Более того, есть такая
					область, как параллельные вычисления, где это ограничение даёт
					определённые преимущества. Изучение такого языка (даже если вы не
					планируете использовать его в ближайшее время) рекомендуется для
					расширения кругозора.
				</p>
			</div>

			<h2>Имена переменных</h2>

			<p>В JavaScript есть два ограничения, касающиеся имён переменных:</p>

			<ol>
				<li>
					Имя переменной должно содержать только буквы, цифры или символы $ и _.
				</li>
				<li>Первый символ не должен быть цифрой.</li>
			</ol>

			<p>Примеры допустимых имён:</p>

			<CodeNote
				js={` let userName;
 let test123;`}
			/>

			<p>
				Если имя содержит несколько слов, обычно используется
				<a href='https://ru.wikipedia.org/wiki/CamelCase'>верблюжья нотация</a>,
				то есть, слова следуют одно за другим, где каждое следующее слово
				начинается с заглавной буквы: myVeryLongName.
			</p>
			<p>
				Самое интересное – знак доллара &#39;$&#39; и подчёркивание &#39;_&#39;
				также можно использовать в названиях. Это обычные символы, как и буквы,
				без какого-либо особого значения.
			</p>
			<p>Эти имена являются допустимыми:</p>

			<CodeJs
				js={` let $ = 1; // объявили переменную с именем "$"
 let _ = 2; // а теперь переменную с именем "_"

 alert($ + _); // 3`}
			/>

			<p>Примеры неправильных имён переменных:</p>

			<CodeNote
				js={` let 1a; // не может начинаться с цифры

 let my-name; // дефис '-' не разрешён в имени`}
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
					Регистр имеет значение
				</h1>
				<p>Переменные с именами apple и APPLE – это две разные переменные.</p>
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
					Нелатинские буквы разрешены, но не рекомендуются
				</h1>
				<p>
					Можно использовать любой язык, включая кириллицу или даже иероглифы,
					например:
				</p>

				<CodeNote
					js={` let имя = '...';
 let 我 = '...';`}
				/>

				<p>
					Технически здесь нет ошибки, такие имена разрешены, но есть
					международная традиция использовать английский язык в именах
					переменных. Даже если мы пишем небольшой скрипт, у него может быть
					долгая жизнь впереди. Людям из других стран, возможно, придётся
					прочесть его не один раз.
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
					Зарезервированные имена
				</h1>
				<p>
					Существует
					<a href='https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Lexical_grammar#ключевые_слова'>
						список зарезервированных слов
					</a>
					, которые нельзя использовать в качестве имён переменных, потому что
					они используются самим языком.
				</p>

				<p>
					Например:
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>
					,
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						class
					</span>
					,
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						return
					</span>
					и
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						function
					</span>
					зарезервированы.
				</p>

				<p>Приведённый ниже код даёт синтаксическую ошибку:</p>

				<CodeJs
					js={` let let = 5; // нельзя назвать переменную "let", ошибка!
 let return = 5; 
 // также нельзя назвать переменную "return", ошибка!`}
				/>
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
					Создание переменной без использования
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						use strict
					</span>
				</h1>
				<p>
					Обычно нам нужно определить переменную перед её использованием. Но в
					старые времена было технически возможно создать переменную простым
					присвоением значения без использования
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>
					. Это все ещё работает, если мы не включаем
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						use strict
					</span>
					в наших файлах, чтобы обеспечить совместимость со старыми скриптами.
				</p>

				<CodeJs
					js={` // заметка: "use strict" в этом примере не используется

 num = 5; // если переменная "num" 
 // раньше не существовала, она создаётся

 alert(num); // 5`}
				/>

				<p>Это плохая практика, которая приводит к ошибке в строгом режиме:</p>

				<CodeNote
					js={` "use strict";

 num = 5; // ошибка: num is not defined`}
				/>
			</div>

			<h2>Константы</h2>

			<p>
				Чтобы объявить константную, то есть, неизменяемую переменную,
				используйте
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					const
				</span>
				вместо
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					let
				</span>
				:
			</p>

			<CodeNote js={` const myBirthday = '18.04.1982';`} />

			<p>
				Переменные, объявленные с помощью
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					const
				</span>
				, называются «константами». Их нельзя изменить. Попытка сделать это
				приведёт к ошибке:
			</p>

			<CodeJs
				js={` const myBirthday = '18.04.1982';

 myBirthday = '01.01.2001'; 
 // ошибка, константу нельзя перезаписать!`}
			/>

			<p>
				Если программист уверен, что переменная никогда не будет меняться, он
				может гарантировать это и наглядно донести до каждого, объявив её через
				const.
			</p>

			<h2>Константы в верхнем регистре</h2>

			<p>
				Широко распространена практика использования констант в качестве
				псевдонимов для трудно запоминаемых значений, которые известны до начала
				исполнения скрипта.
			</p>
			<p>
				Названия таких констант пишутся с использованием заглавных букв и
				подчёркивания.
			</p>
			<p>
				Например, сделаем константы для различных цветов в «шестнадцатеричном
				формате»:
			</p>

			<CodeJs
				js={`const RED = "#ff0000";
 const GREEN = "#00ff00";
 const BLUE = "#0000ff";
 const ORANGE = "#ff8000";

 // ...когда нам нужно выбрать цвет
 let color = BLUE;
 alert(color); // #0000ff`}
			/>

			<p>Преимущества:</p>
			<ul>
				<li>
					<span
						style={{
							color: '#0000ff',
							background: '#ababab',
							padding: '2px',
							fontWeight: 'bold',
							borderRadius: '2px',
						}}
					>
						BLUE
					</span>
					гораздо легче запомнить, чем
					<span
						style={{
							color: '#0000ff',
							background: '#ababab',
							padding: '2px',
							fontWeight: 'bold',
							borderRadius: '2px',
						}}
					>
						#0000ff
					</span>
					.
				</li>
				<li>
					Гораздо легче допустить ошибку при вводе
					<span
						style={{
							color: '#0000ff',
							background: '#ababab',
							padding: '2px',
							fontWeight: 'bold',
							borderRadius: '2px',
						}}
					>
						#0000ff
					</span>
					чем при вводе
					<span
						style={{
							color: '#0000ff',
							background: '#ababab',
							padding: '2px',
							fontWeight: 'bold',
							borderRadius: '2px',
						}}
					>
						BLUE
					</span>
					.
				</li>
				<li>
					При чтении кода
					<span
						style={{
							color: '#0000ff',
							background: '#ababab',
							padding: '2px',
							fontWeight: 'bold',
							borderRadius: '2px',
						}}
					>
						BLUE
					</span>
					намного понятнее, чем
					<span
						style={{
							color: '#0000ff',
							background: '#ababab',
							padding: '2px',
							fontWeight: 'bold',
							borderRadius: '2px',
						}}
					>
						#0000ff
					</span>
					.
				</li>
			</ul>

			<p>
				Когда мы должны использовать для констант заглавные буквы, а когда
				называть их нормально? Давайте разберёмся и с этим.
			</p>

			<p>
				Название «константа» просто означает, что значение переменной никогда не
				меняется. Но есть константы, которые известны до выполнения (например,
				шестнадцатеричное значение для красного цвета), а есть константы,
				которые вычисляются во время выполнения сценария, но не изменяются после
				их первоначального назначения.
			</p>

			<p>Например:</p>

			<CodeNote
				js={` const pageLoadTime = 
 /* время, потраченное на загрузку веб-страницы */;`}
			/>

			<p>
				Значение
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					pageLoadTime
				</span>
				неизвестно до загрузки страницы, поэтому её имя записано обычными, а не
				прописными буквами. Но это всё ещё константа, потому что она не
				изменяется после назначения.
			</p>

			<p>
				Другими словами, константы с именами, записанными заглавными буквами,
				используются только как псевдонимы для «жёстко закодированных» значений.
			</p>

			<h2>Придумывайте правильные имена</h2>

			<p>
				В разговоре о переменных необходимо упомянуть, что есть ещё одна
				чрезвычайно важная вещь.
			</p>
			<p>
				Название переменной должно иметь ясный и понятный смысл, говорить о том,
				какие данные в ней хранятся.
			</p>
			<p>
				Именование переменных – это один из самых важных и сложных навыков в
				программировании. Быстрый взгляд на имена переменных может показать,
				какой код был написан новичком, а какой – опытным разработчиком.
			</p>
			<p>
				В реальном проекте большая часть времени тратится на изменение и
				расширение существующей кодовой базы, а не на написание чего-то
				совершенно нового с нуля. Когда мы возвращаемся к коду после какого-то
				промежутка времени, гораздо легче найти информацию, которая хорошо
				размечена. Или, другими словами, когда переменные имеют хорошие имена.
			</p>
			<p>
				Пожалуйста, потратьте время на обдумывание правильного имени переменной
				перед её объявлением. Делайте так, и будете вознаграждены.
			</p>
			<p>Несколько хороших правил:</p>

			<ul>
				<li>
					Используйте легко читаемые имена, такие как
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						userName
					</span>
					или
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						shoppingCart
					</span>
					.
				</li>
				<li>
					Избегайте использования аббревиатур или коротких имён, таких как
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						a
					</span>
					,
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						b
					</span>
					,
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						c
					</span>
					, за исключением тех случаев, когда вы точно знаете, что так нужно.
				</li>
				<li>
					Делайте имена максимально описательными и лаконичными. Примеры плохих
					имён:
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						data
					</span>
					и
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						value
					</span>
					. Такие имена ничего не говорят. Их можно использовать только в том
					случае, если из контекста кода очевидно, какие данные хранит
					переменная.
				</li>
				<li>
					Договоритесь с вашей командой об используемых терминах. Если
					посетитель сайта называется «user», тогда мы должны называть связанные
					с ним переменные
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						currentUser
					</span>
					или
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						newUser
					</span>
					, а не, к примеру,
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						currentVisitor
					</span>
					или
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						newManInTown
					</span>
					.
				</li>
			</ul>

			<p>
				Звучит просто? Действительно, это так, но на практике для создания
				описательных и кратких имён переменных зачастую требуется подумать.
				Действуйте.
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
					Повторно использовать или создавать новую переменную?
				</h1>
				<p>
					И последняя заметка. Есть ленивые программисты, которые вместо
					объявления новых переменных повторно используют существующие.
				</p>
				<p>
					В результате их переменные похожи на коробки, в которые люди бросают
					разные предметы, не меняя на них этикетки. Что сейчас находится внутри
					коробки? Кто знает? Нам необходимо подойти поближе и проверить.
				</p>
				<p>
					Такие программисты немного экономят на объявлении переменных, но
					теряют в десять раз больше при отладке.
				</p>
				<p>Дополнительная переменная – это добро, а не зло.</p>
				<p>
					Современные JavaScript-минификаторы и браузеры оптимизируют код
					достаточно хорошо, поэтому он не создаёт проблем с
					производительностью. Использование разных переменных для разных
					значений может даже помочь движку оптимизировать ваш код.
				</p>
			</div>

			<h2>Итого</h2>

			<p>
				Мы можем объявить переменные для хранения данных с помощью ключевых слов
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					var
				</span>
				,
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					let
				</span>
				или
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					const
				</span>
				.
			</p>

			<ul>
				<li>
					{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>{' '}
					– это современный способ объявления.
				</li>
				<li>
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						var
					</span>{' '}
					– это устаревший способ объявления. Обычно мы вообще не используем
					его, но мы рассмотрим тонкие отличия от{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>{' '}
					в главе Устаревшее ключевое слово var на случай, если это всё-таки вам
					понадобится.
				</li>
				<li>
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						const
					</span>{' '}
					– похоже на{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						let
					</span>
					, но значение переменной не может изменяться.
				</li>
			</ul>

			<p>
				Переменные должны быть названы таким образом, чтобы мы могли легко
				понять, что у них внутри.
			</p>
			<TaskViewer tasks={tasks['2.4']} />
		</Container>
	)
}
