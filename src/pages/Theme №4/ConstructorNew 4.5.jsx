import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'

import { tasks } from '../../data/tasks.js'

export default function ConstructorNew() {
  return (
    <Container className='text-light mt-5 mb-5'>
      <ArrowNavigator />
      <h1>Конструктор, оператор {'"new"'}</h1>

      <p>
        Обычный синтаксис <Badge bg='secondary'>{'{...}'}</Badge> позволяет создать только один объект. Но зачастую нам нужно создать множество похожих, однотипных объектов, таких как пользователи, элементы меню и так далее.
      </p>
      
      <p>
        Это можно сделать при помощи функции-конструктора и оператора <Badge bg='secondary'>new</Badge>.
      </p>

      <h2>Функция-конструктор</h2>
      <p>
        Функции-конструкторы технически являются обычными функциями. Но есть два соглашения:
      </p>
      
      <ul>
        <li>
          Имя функции-конструктора должно начинаться с большой буквы.
        </li>
        <li>
          Функция-конструктор должна выполняться только с помощью оператора <Badge bg='secondary'>new</Badge>.
        </li>
      </ul>
      
      <p>Например:</p>
      
      <CodeJs
        js={`function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false`}
      />
      
      <p>
        Когда функция вызывается как <Badge bg='secondary'>new User(...)</Badge>, происходит следующее:
      </p>
      
      <ol>
        <li>
          Создаётся новый пустой объект, и он присваивается <Badge bg='secondary'>this</Badge>.
        </li>
        <li>
          Выполняется тело функции. Обычно оно модифицирует <Badge bg='secondary'>this</Badge>, добавляя туда новые свойства.
        </li>
        <li>
          Возвращается значение <Badge bg='secondary'>this</Badge>.
        </li>
      </ol>
      
      <p>
        Другими словами, <Badge bg='secondary'>new User(...)</Badge> делает что-то вроде:
      </p>
      
      <CodeNote
        js={`function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}`}
      />
      
      <p>
        Таким образом, <Badge bg='secondary'>let user = new User({'"Jack"'})</Badge> возвращает тот же результат, что и:
      </p>
      
      <CodeNote
        js={`let user = {
  name: "Jack",
  isAdmin: false
};`}
      />
      
      <p>
        Теперь, если нам будет необходимо создать других пользователей, мы можем просто вызвать <Badge bg='secondary'>new User({'"Ann"'})</Badge>, <Badge bg='secondary'>new User({'"Alice"'})</Badge> и так далее. Данная конструкция гораздо удобнее и читабельнее, чем многократное создание литерала объекта.
      </p>
      
      <p>
        Это и является основной целью конструкторов – реализовать код для многократного создания однотипных объектов.
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
          Важно помнить
        </h1>
        <p>
          Технически любая функция (кроме стрелочных функций, поскольку у них нет <Badge bg='secondary'>this</Badge>) может использоваться в качестве конструктора. Его можно запустить с помощью <Badge bg='secondary'>new</Badge>, и он выполнит выше указанный алгоритм. Подобные функции должны начинаться с заглавной буквы – это общепринятое соглашение.
        </p>
      </div>

      <h3>new function() {  }</h3>
      <p>
        Если в нашем коде присутствует большое количество строк, создающих один сложный объект, то мы можем обернуть их в функцию-конструктор, которая будет немедленно вызвана, вот так:
      </p>
      
      <CodeNote
        js={`// создаём функцию и сразу же вызываем её с помощью new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...другой код для создания пользователя
  // возможна любая сложная логика и инструкции
  // локальные переменные и так далее
};`}
      />
      
      <p>
        Такой конструктор не может быть вызван снова, так как он нигде не сохраняется, просто создаётся и тут же вызывается. Таким образом, этот трюк направлен на инкапсуляцию кода, который создаёт отдельный объект, без возможности повторного использования в будущем.
      </p>

      <h3>Проверка на вызов в режиме конструктора: new.target</h3>
      
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
          Продвинутая возможность
        </h1>
        <p>
          Синтаксис из этого раздела используется крайне редко. Вы можете пропустить его, если не хотите углубляться в детали языка.
        </p>
      </div>
      
      <p>
        Используя специальное свойство <Badge bg='secondary'>new.target</Badge> внутри функции, мы можем проверить, вызвана ли функция при помощи оператора <Badge bg='secondary'>new</Badge> или без него.
      </p>
      
      <p>
        В случае обычного вызова функции <Badge bg='secondary'>new.target</Badge> будет <Badge bg='secondary'>undefined</Badge>. Если же она была вызвана при помощи <Badge bg='secondary'>new</Badge>, <Badge bg='secondary'>new.target</Badge> будет равен самой функции.
      </p>
      
      <CodeJs
        js={`function User() {
  alert(new.target);
}

// без "new":
User(); // undefined

// с "new":
new User(); // function User { ... }`}
      />
      
      <p>
        Это можно использовать внутри функции, чтобы узнать, была ли она вызвана при помощи <Badge bg='secondary'>new</Badge>, «в режиме конструктора», или без него, «в обычном режиме».
      </p>
      
      <p>
        Также мы можем сделать, чтобы вызовы с <Badge bg='secondary'>new</Badge> и без него делали одно и то же:
      </p>
      
      <CodeJs
        js={`function User(name) {
  if (!new.target) { // в случае, если вы вызвали меня без оператора new
    return new User(name); // ...я добавлю new за вас
  }

  this.name = name;
}

let john = User("John"); // переадресовывает вызов на new User
alert(john.name); // John`}
      />
      
      <p>
        Такой подход иногда используется в библиотеках, чтобы сделать синтаксис более гибким. Чтобы люди могли вызывать функцию с <Badge bg='secondary'>new</Badge> и без него, и она всё ещё могла работать.
      </p>
      
      <p>
        Впрочем, вероятно, это не очень хорошая практика использовать этот трюк везде, так как отсутствие <Badge bg='secondary'>new</Badge> может ввести разработчика в заблуждение. С <Badge bg='secondary'>new</Badge> мы точно знаем, что создаётся новый объект.
      </p>

      <h3>Возврат значения из конструктора, return</h3>
      <p>
        Обычно конструкторы не имеют оператора <Badge bg='secondary'>return</Badge>. Их задача – записать все необходимое в <Badge bg='secondary'>this</Badge>, и это автоматически становится результатом.
      </p>
      
      <p>
        Но если <Badge bg='secondary'>return</Badge> всё же есть, то применяется простое правило:
      </p>
      
      <ul>
        <li>
          При вызове <Badge bg='secondary'>return</Badge> с объектом, вместо <Badge bg='secondary'>this</Badge> вернётся объект.
        </li>
        <li>
          При вызове <Badge bg='secondary'>return</Badge> с примитивным значением, оно проигнорируется.
        </li>
      </ul>
      
      <p>
        Другими словами, <Badge bg='secondary'>return</Badge> с объектом возвращает этот объект, во всех остальных случаях возвращается <Badge bg='secondary'>this</Badge>.
      </p>
      
      <p>
        К примеру, здесь <Badge bg='secondary'>return</Badge> замещает <Badge bg='secondary'>this</Badge>, возвращая объект:
      </p>
      
      <CodeJs
        js={`function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

alert( new BigUser().name );  // Godzilla, получили этот объект`}
      />
      
      <p>
        А вот пример с пустым <Badge bg='secondary'>return</Badge> (или мы могли бы поставить примитив после <Badge bg='secondary'>return</Badge>, неважно):
      </p>
      
      <CodeJs
        js={`function SmallUser() {

  this.name = "John";

  return; // <-- возвращает this
}

alert( new SmallUser().name );  // John`}
      />
      
      <p>
        Обычно у конструкторов отсутствует <Badge bg='secondary'>return</Badge>. Здесь мы упомянули особое поведение с возвращаемыми объектами в основном для полноты картины.
      </p>

      <h3>Пропуск скобок</h3>
      <p>
        Кстати, мы можем не ставить круглые скобки после <Badge bg='secondary'>new</Badge>:
      </p>
      
      <CodeNote
        js={`let user = new User; // <-- без скобок
// то же, что и
let user = new User();`}
      />
      
      <p>
        Пропуск скобок считается плохой практикой, но просто чтобы вы знали, такой синтаксис разрешён спецификацией.
      </p>

      <h2>Создание методов в конструкторе</h2>
      <p>
        Использование конструкторов для создания объектов даёт большую гибкость. Функции-конструкторы могут иметь параметры, определяющие, как создавать объект и что в него записывать.
      </p>
      
      <p>
        Конечно, мы можем добавить к <Badge bg='secondary'>this</Badge> не только свойства, но и методы.
      </p>
      
      <p>
        Например, <Badge bg='secondary'>new User(name)</Badge> ниже создаёт объект с заданным <Badge bg='secondary'>name</Badge> и методом <Badge bg='secondary'>sayHi</Badge>:
      </p>
      
      <CodeJs
        js={`function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // Меня зовут: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/`}
      />
      
      <p>
        Для создания сложных объектов есть и более продвинутый синтаксис – классы, который мы рассмотрим позже.
      </p>

      <h1 className='mt-5'>Итого</h1>
      <ul>
        <li>
          Функции-конструкторы или просто конструкторы, являются обычными функциями, но существует общепринятое соглашение именовать их с заглавной буквы.
        </li>
        <li>
          Функции-конструкторы следует вызывать только с помощью <Badge bg='secondary'>new</Badge>. Такой вызов подразумевает создание пустого <Badge bg='secondary'>this</Badge> в начале и возврат заполненного в конце.
        </li>
        <li>
          Мы можем использовать конструкторы для создания множества похожих объектов.
        </li>
      </ul>
      
      <p>
        JavaScript предоставляет функции-конструкторы для множества встроенных объектов языка: таких как <Badge bg='secondary'>Date</Badge>, <Badge bg='secondary'>Set</Badge>, и других, которые нам ещё предстоит изучить.
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
                Этап
              </th>
              <th
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #6c757d',
                  textAlign: 'left',
                }}
              >
                Описание работы new
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                1
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                Создаётся новый пустой объект <Badge bg='secondary'>this = {}</Badge>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                2
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                Выполняется тело функции, модифицируя <Badge bg='secondary'>this</Badge>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>
                3
              </td>
              <td style={{ padding: '8px' }}>
                Возвращается <Badge bg='secondary'>this</Badge>
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
          Мы ещё вернёмся к объектам!
        </h1>
        <p>
          В этой главе мы рассмотрели только основы объектов и конструкторов. Данная информация необходима нам для дальнейшего изучения типов данных и функций в последующих главах.
        </p>
        <p>
          Как только мы с ними разберёмся, мы вернёмся к объектам для более детального изучения в главах <strong>Прототипы, наследование</strong> и <strong>Классы</strong>.
        </p>
      </div>
      
      <TaskViewer tasks={tasks['4.5']} />
    </Container>
  )
}