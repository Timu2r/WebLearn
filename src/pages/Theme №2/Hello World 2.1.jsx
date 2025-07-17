import { Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import CodeRunner from '../../components/CodeRunner.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function HelloWorld() {
	const htmlExample1 = `<!DOCTYPE HTML>
<html>
  <body>
    <p> Перед скриптом ...</p>
    <script>
      alert('Привет, мир!');
    </script>
    <p>...После скрипта.</p>
  </body>
</html>`

	const jsExample1 = `alert('Привет, мир!');`

	const htmlExample2 = `<script type="text/javascript"><!--
    ...
//--></script>`

	const htmlExample3 = `<script src="/path/to/script.js"></script>`
	const htmlExample4 = `<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>`
	const htmlExample5 = `<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…`
	const htmlExample6 = `<script src="file.js">
  alert(1); // содержимое игнорируется, так как есть атрибут src
</script>`
	const htmlExample7 = `<script src="file.js"></script>
<script>
  alert(1);
</script>`

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
				Привет, мир!
			</h1>
			<p>В этой части учебника мы изучаем собственно JavaScript, сам язык.</p>
			<p>
				Но нам нужна рабочая среда для запуска наших скриптов, и, поскольку это
				онлайн-книга, то браузер будет хорошим выбором. В этой главе мы сократим
				количество специфичных для браузера команд (например, alert) до
				минимума, чтобы вы не тратили на них время, если планируете
				сосредоточиться на другой среде (например, Node.js). А на использовании
				JavaScript в браузере мы сосредоточимся в следующей части учебника.
			</p>
			<p>
				Итак, сначала давайте посмотрим, как выполнить скрипт на странице. Для
				серверных сред (например, Node.js), вы можете выполнить скрипт с помощью
				команды типа node my.js. Для браузера всё немного иначе.
			</p>
			<h2>Тег «script»</h2>
			<p>
				Программы на JavaScript могут быть вставлены в любое место
				HTML-документа с помощью тега{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&lt;script&gt;
				</span>
				.
			</p>
			<p>Для примера:</p>
			<CodeRunner html={htmlExample1} js={jsExample1} />
			<p className='mt-4'>
				Вы можете запустить пример, нажав на кнопку «Play» в правом верхнем углу
				блока с кодом выше.
			</p>
			<p>
				Тег{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&lt;script&gt;
				</span>{' '}
				содержит JavaScript-код, который автоматически выполнится, когда браузер
				его обработает.
			</p>
			{/* Остальной код остается без изменений */}
			<h2>Современная разметка</h2>
			<p>
				Тег{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&lt;script&gt;
				</span>{' '}
				имеет несколько атрибутов, которые редко используются, но всё ещё могут
				встретиться в старом коде:
			</p>
			<p>
				<span style={{ fontWeight: 'bold' }}>Атрибут </span>type:{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&lt;script type=&quot;...&quot;&gt;
				</span>
			</p>
			<p>
				Старый стандарт HTML, HTML4, требовал наличия этого атрибута в теге{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&lt;script&gt;
				</span>
				. Обычно он имел значение{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					type=&quot;text/javascript&quot;
				</span>
				. На текущий момент этого больше не требуется. Более того, в современном
				стандарте HTML смысл этого атрибута полностью изменился. Теперь он может
				использоваться для JavaScript-модулей. Но это тема не для начального
				уровня, и о ней мы поговорим в другой части учебника.
			</p>
			<span style={{ fontWeight: 'bold' }}>Атрибут </span>language:{' '}
			<span style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}>
				&lt;script language=...&gt;
			</span>
			<p>
				Этот атрибут должен был задавать язык, на котором написан скрипт. Но так
				как JavaScript является языком по умолчанию, в этом атрибуте уже нет
				необходимости.
			</p>
			<p style={{ fontWeight: 'bold' }}>
				Обёртывание скрипта в HTML-комментарии.{' '}
			</p>
			<p>
				В очень древних книгах и руководствах вы сможете найти комментарии
				внутри тега{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&lt;script&gt;
				</span>
				, например, такие:
			</p>
			<CodeNote html={htmlExample2} />
			<p className='mt-4'>
				Этот комментарий скрывал код JavaScript в старых браузерах, которые не
				знали, как обрабатывать тег{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&lt;script&gt;
				</span>
				. Поскольку все браузеры, выпущенные за последние 15 лет, не содержат
				данной проблемы, такие комментарии уже не нужны. Если они есть, то это
				признак, что перед нами очень древний код.
			</p>
			<h2>Внешние скрипты</h2>
			<p>
				Если у вас много JavaScript-кода, вы можете поместить его в отдельный
				файл.
			</p>
			<p>
				Файл скрипта можно подключить к HTML с помощью атрибута{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					src
				</span>
				:
			</p>
			<CodeNote html={htmlExample3} />
			<p className='mt-4'>
				Здесь{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					/path/to/script
				</span>{' '}
				.js – это абсолютный путь от корневой папки до необходимого файла.
				Корневой папкой может быть корень диска или корень сайта, в зависимости
				от условий работы сайта. Также можно указать относительный путь от
				текущей страницы. Например,{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					src=&quot;script.js&quot;
				</span>{' '}
				или{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					src=&quot;./script.js&quot;
				</span>{' '}
				будет означать, что файл{' '}
				<span
					style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
				>
					&quot;script.js&quot;
				</span>{' '}
				находится в текущей папке.
			</p>
			<p>Можно указать и полный URL-адрес. Например:</p>
			<CodeNote html={htmlExample4} />
			<p className='mt-4'>
				Для подключения нескольких скриптов используйте несколько тегов:
			</p>
			<CodeNote html={htmlExample5} />
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
					<FaInfoCircle
						style={{
							position: 'relative',
							bottom: '2px',
							margin: '5px',
							color: '#3463ff',
						}}
					/>
					На заметку:
				</h1>
				<p>
					Как правило, только простейшие скрипты помещаются в HTML. Более
					сложные выделяются в отдельные файлы.
				</p>
				<p style={{ margin: '0' }}>
					Польза отдельных файлов в том, что браузер загрузит скрипт отдельно и
					сможет хранить его в{' '}
					<a
						style={{ margin: '0' }}
						href='https://en.wikipedia.org/wiki/Web_cache'
					>
						кеше.
					</a>{' '}
				</p>
				<p>
					Другие страницы, которые подключают тот же скрипт, смогут брать его из
					кеша вместо повторной загрузки из сети. И таким образом файл будет
					загружаться с сервера только один раз.
				</p>
				<p>Это сокращает расход трафика и ускоряет загрузку страниц.</p>
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
					/>
					Если атрибут{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						src
					</span>{' '}
					установлен, содержимое тега{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						script
					</span>{' '}
					будет игнорироваться.
				</h1>
				<p>
					В одном теге{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&lt;script&gt;
					</span>{' '}
					нельзя использовать одновременно атрибут{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						src
					</span>{' '}
					и код внутри.
				</p>
				<p style={{ margin: '0' }}>Нижеприведённый пример не работает:</p>

				<CodeNote html={htmlExample6} />

				<p className='mt-4'>
					Нужно выбрать: либо внешний скрипт{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&lt;script type=&quot;...&quot;&gt;
					</span>
					, либо обычный код внутри тега{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&lt;script&gt;
					</span>
					.
				</p>

				<p>Вышеприведённый пример можно разделить на два скрипта:</p>

				<CodeNote html={htmlExample7} />
			</div>
			<h2>Итого</h2>
			<ul>
				<li>
					Для добавления кода JavaScript на страницу используется тег{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&lt;script&gt;
					</span>
				</li>
				<li>
					Атрибуты{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						type
					</span>{' '}
					и{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						language
					</span>{' '}
					необязательны.
				</li>
				<li>
					Скрипт во внешнем файле можно вставить с помощью{' '}
					<span
						style={{ background: '#333', padding: '2px', fontWeight: 'bold' }}
					>
						&lt;script src=&quot;path/to/script.js&quot;&gt;&lt;/script&gt;
					</span>
					.
				</li>
			</ul>
			<p>
				Нам ещё многое предстоит изучить про браузерные скрипты и их
				взаимодействие со страницей. Но, как уже было сказано, эта часть
				учебника посвящена именно языку JavaScript, поэтому здесь мы постараемся
				не отвлекаться на детали реализации в браузере. Мы воспользуемся
				браузером для запуска JavaScript, это удобно для онлайн-демонстраций, но
				это только одна из платформ, на которых работает этот язык.
			</p>
			<TaskViewer tasks={tasks['2.1']} />
		</Container>
	)
}
