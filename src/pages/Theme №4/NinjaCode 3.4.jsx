import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function NinjaCode() {
  return (
    <Container className='text-light mt-5 mb-5'>
      <ArrowNavigator />
      <h1>Ниндзя-код</h1>

      <p>
        Предлагаю вашему вниманию советы мастеров древности.
      </p>
      <p>
        Ниндзя-разработчики прошлого использовали их, чтобы усложнить код и 
        заострить разум тех, кто будет поддерживать его после них.
      </p>
      <p>
        При найме проверяющие тщательно ищут их применение в коде соискателей.
      </p>
      <p>
        Новички иногда используют их ещё лучше, чем матёрые ниндзя!
      </p>
      <p>
        Прочитайте их и решите, кто вы: новичок или ниндзя разработки?
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
          Осторожно, ирония!
        </h1>
        <p>
          Многие пытались пройти по пути ниндзя! Мало кто преуспел.
        </p>
      </div>

      <h2>Краткость – сестра таланта!</h2>
      <p>
        Пишите «как короче», а не как понятнее. Покажите, насколько вы умны!
      </p>
      <p>
        «Меньше букв» – уважительная причина для нарушения любых соглашений. 
        Ваш верный помощник – возможности языка, использованные неочевидным образом.
      </p>
      <p>
        Обратите внимание на оператор вопросительный знак{' '}
        <Badge bg='secondary'>?</Badge>, например:
      </p>
      <CodeJs
        js={`// код из jQuery
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;`}
      />
      <p>
        Разработчик, встретивший эту строку и попытавшийся понять, чему же всё-таки 
        равно <Badge bg='secondary'>i</Badge>, скорее всего, придёт к вам за разъяснениями. 
        Смело скажите ему, что короче – это всегда лучше.
      </p>

      <h2>Однобуквенные переменные</h2>
      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
          fontStyle: 'italic',
          color: '#adb5bd',
        }}
      >
        <p>
          Кто знает — не говорит. Кто говорит — не знает.
        </p>
        <p style={{ textAlign: 'right' }}>
          — Лао-цзы
        </p>
      </div>
      <p>
        Ещё один способ писать быстрее – использовать короткие имена переменных. 
        Называйте их <Badge bg='secondary'>a</Badge>, <Badge bg='secondary'>b</Badge>{' '}
        или <Badge bg='secondary'>c</Badge>.
      </p>
      <p>
        Короткая переменная прячется в коде лучше, чем ниндзя в лесу. Никто не 
        сможет найти её, используя функцию «Поиск» текстового редактора.
      </p>
      <p>
        …Но есть одно исключение. В тех местах, где однобуквенные переменные 
        общеприняты, например, в счётчике цикла – ни в коем случае не используйте 
        стандартные названия <Badge bg='secondary'>i</Badge>, <Badge bg='secondary'>j</Badge>, 
        <Badge bg='secondary'>k</Badge>. Где угодно, только не здесь!
      </p>
      <p>
        Остановите свой взыскательный взгляд на чём-нибудь более экзотическом. 
        Например, <Badge bg='secondary'>x</Badge> или <Badge bg='secondary'>y</Badge>.
      </p>
      <CodeNote
        js={`// Плохо (слишком понятно)
for (let i = 0; i < items.length; i++) {
  // код
}

// Хорошо (загадочно)
for (let z = 0; z < items.length; z++) {
  // код
}`}
      />

      <h2>Используйте сокращения</h2>
      <p>
        Если правила, принятые в вашей команде, запрещают использовать абстрактные 
        имена или имена из одной буквы – сокращайте их.
      </p>
      <p>Например:</p>
      <ul>
        <li><Badge bg='secondary'>list</Badge> → <Badge bg='secondary'>lst</Badge></li>
        <li><Badge bg='secondary'>userAgent</Badge> → <Badge bg='secondary'>ua</Badge></li>
        <li><Badge bg='secondary'>browser</Badge> → <Badge bg='secondary'>brsr</Badge></li>
        <li>…и т.д.</li>
      </ul>
      <p>
        Только коллеги с хорошо развитой интуицией поймут такие имена. Вообще, 
        старайтесь сокращать всё. Только одарённые интуицией люди достойны 
        заниматься поддержкой вашего кода.
      </p>

      <h2>Будьте абстрактны при выборе имени</h2>
      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
          fontStyle: 'italic',
          color: '#adb5bd',
        }}
      >
        <p>
          Лучший кувшин лепят всю жизнь,<br />
          Высокая музыка неподвластна слуху,<br />
          Великий образ не имеет формы.
        </p>
        <p style={{ textAlign: 'right' }}>
          — Лао-цзы
        </p>
      </div>
      <p>
        При выборе имени старайтесь применить максимально абстрактное слово, например{' '}
        <Badge bg='secondary'>obj</Badge>, <Badge bg='secondary'>data</Badge>, 
        <Badge bg='secondary'>value</Badge>, <Badge bg='secondary'>item</Badge>, 
        <Badge bg='secondary'>elem</Badge> и т.п.
      </p>
      <p>
        Идеальное имя для переменной: <Badge bg='secondary'>data</Badge>. Используйте 
        это имя везде, где можно. В конце концов, каждая переменная содержит данные, 
        не правда ли?
      </p>
      <CodeJs
        js={`// Отлично! Всё понятно
let data = getUserData();
let data2 = processData(data);
let data3 = validateData(data2);
return data3;`}
      />

      <h2>Проверка внимания</h2>
      <p>
        Только истинно внимательный программист достоин понять ваш код. Но как 
        проверить, достоин ли читающий?
      </p>
      <p>
        Один из способов – использовать похожие имена переменных, например,{' '}
        <Badge bg='secondary'>date</Badge> и <Badge bg='secondary'>data</Badge>.
      </p>
      <CodeJs
        js={`let date = new Date();
let data = fetchUserData();

// 50 строк кода...

if (date.getTime() > data.timestamp) {
  // Кто-то перепутает date и data
}`}
      />
      <p>
        Бегло прочитать такой код почти невозможно. А уж заметить опечатку и 
        поправить её… Ммммм… Мы здесь надолго, время попить чайку.
      </p>

      <h2>Хитрые синонимы</h2>
      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
          fontStyle: 'italic',
          color: '#adb5bd',
        }}
      >
        <p>
          Очень трудно найти чёрную кошку в тёмной комнате, особенно, когда её там нет.
        </p>
        <p style={{ textAlign: 'right' }}>
          — Конфуций
        </p>
      </div>
      <p>
        Чтобы было не скучно – используйте похожие названия для обозначения 
        одинаковых действий.
      </p>
      <p>
        Например, если метод показывает что-то на экране – начните его название с{' '}
        <Badge bg='secondary'>display..</Badge> (скажем, <Badge bg='secondary'>displayElement</Badge>), 
        а в другом месте объявите аналогичный метод как <Badge bg='secondary'>show..</Badge> 
        (<Badge bg='secondary'>showFrame</Badge>).
      </p>
      <CodeNote
        js={`// В одном файле
function displayMessage(msg) {
  console.log(msg);
}

// В другом файле
function showMessage(msg) {
  console.log(msg);
}

// В третьем файле
function renderMessage(msg) {
  console.log(msg);
}`}
      />

      <h2>Повторно используйте имена</h2>
      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
          fontStyle: 'italic',
          color: '#adb5bd',
        }}
      >
        <p>
          Когда целое разделено, его частям<br />
          нужны имена.<br />
          Уже достаточно имён.<br />
          Нужно знать, когда остановиться.
        </p>
        <p style={{ textAlign: 'right' }}>
          — Лао-цзы
        </p>
      </div>
      <p>
        По возможности, повторно используйте имена переменных, функций и свойств. 
        Просто записывайте в них новые значения.
      </p>
      <p>
        Продвинутый вариант этого подхода – незаметно (!) подменить переменную 
        на нечто похожее, например:
      </p>
      <CodeJs
        js={`function ninjaFunction(elem) {
  // 20 строк кода, работающего с elem

  elem = clone(elem);

  // ещё 20 строк кода, работающего с elem!
}`}
      />
      <p>
        Программист, пожелавший добавить действия с <Badge bg='secondary'>elem</Badge>{' '}
        во вторую часть функции, будет удивлён. Лишь во время отладки он обнаружит, 
        что имел дело с клоном!
      </p>

      <h2>Перекрывайте внешние переменные</h2>
      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
          fontStyle: 'italic',
          color: '#adb5bd',
        }}
      >
        <p>
          Находясь на свету, нельзя ничего увидеть в темноте.<br />
          Пребывая же в темноте, увидишь все, что находится на свету.
        </p>
        <p style={{ textAlign: 'right' }}>
          — Гуань Инь-цзы
        </p>
      </div>
      <p>
        Почему бы не использовать одинаковые переменные внутри и снаружи функции? 
        Это просто и не требует придумывать новых имён.
      </p>
      <CodeJs
        js={`let user = authenticateUser();

function render() {
  let user = anotherValue();
  ...
  ...многобукв...
  ...
  ... // <-- программист захочет внести исправления сюда, и...
  ...
}`}
      />

      <h2>Внимание… Сюр-при-из!</h2>
      <p>
        Есть функции, название которых говорит о том, что они ничего не меняют. 
        Например, <Badge bg='secondary'>isReady()</Badge>, <Badge bg='secondary'>checkPermission()</Badge>, 
        <Badge bg='secondary'>findTags()</Badge>…
      </p>
      <p>
        По-настоящему красивый приём – делать в таких функциях что-нибудь полезное, 
        заодно с процессом проверки.
      </p>
      <CodeJs
        js={`function isReady() {
  // Не только проверяем готовность...
  if (!ready) {
    initialize(); // ...но и инициализируем!
    sendAnalytics('not_ready'); // ...и отправляем аналитику!
  }
  return ready;
}`}
      />

      <h2>Мощные функции!</h2>
      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
          fontStyle: 'italic',
          color: '#adb5bd',
        }}
      >
        <p>
          Дао везде и во всём,<br />
          и справа, и слева.
        </p>
        <p style={{ textAlign: 'right' }}>
          — Лао-цзы
        </p>
      </div>
      <p>
        Не ограничивайте действия функции тем, что написано в её названии. Будьте шире.
      </p>
      <p>
        Например, функция <Badge bg='secondary'>validateEmail(email)</Badge> может, 
        кроме проверки e-mail на правильность, выводить сообщение об ошибке и 
        просить заново ввести e-mail.
      </p>
      <CodeJs
        js={`function validateEmail(email) {
  // Проверяем email
  if (!email.includes('@')) {
    // Выводим ошибку
    alert('Неправильный email!');
    // Логируем
    console.log('Invalid email:', email);
    // Отправляем аналитику
    sendAnalytics('invalid_email');
    // Показываем форму
    showEmailForm();
    return false;
  }
  return true;
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
          Помните:
        </h1>
        <p>
          Объединение нескольких смежных действий в одну функцию защитит ваш код 
          от повторного использования.
        </p>
        <p>
          Представьте, что другому разработчику нужно только проверить адрес, 
          а сообщение – не выводить. Ваша функция <Badge bg='secondary'>validateEmail(email)</Badge>, 
          которая делает и то и другое, ему не подойдёт.
        </p>
      </div>

      <h1 className='mt-5'>Итого</h1>
      <p>
        Все советы выше пришли из реального кода… И в том числе, от разработчиков 
        с большим опытом. Возможно, даже больше вашего, так что не судите опрометчиво ;)
      </p>
      <ul>
        <li>
          Следуйте нескольким из них – и ваш код станет полон сюрпризов.
        </li>
        <li>
          Следуйте многим – и ваш код станет истинно вашим, никто не захочет изменять его.
        </li>
        <li>
          Следуйте всем – и ваш код станет ценным уроком для молодых разработчиков, 
          ищущих просветления.
        </li>
      </ul>
      <p>
        Помните: хороший код должен быть понятным, читаемым и поддерживаемым. 
        Все советы выше показывают, как <strong>НЕ НУЖНО</strong> писать код. 
        Используйте их как антипаттерны для изучения.
      </p>


    </Container>
  )
}