import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'

import { tasks } from '../../data/tasks.js'

export default function ObjectMethodsThis() {
  return (
    <Container className='text-light mt-5 mb-5'>
      <ArrowNavigator />
      <h1>Методы объекта, {'"this"'}</h1>

      <p>
        Объекты обычно создаются, чтобы представлять сущности реального мира, будь то пользователи, заказы и так далее:
      </p>
      
      <CodeNote
        js={`// Объект пользователя
let user = {
  name: "John",
  age: 30
};`}
      />
      
      <p>
        И так же, как и в реальном мире, пользователь может совершать действия: выбирать что-то из корзины покупок, авторизовываться, выходить из системы, оплачивать и т.п.
      </p>
      
      <p>
        Такие действия в JavaScript представлены функциями в свойствах.
      </p>

      <h2>Примеры методов</h2>
      <p>
        Для начала давайте научим нашего пользователя <Badge bg='secondary'>user</Badge> здороваться:
      </p>
      
      <CodeJs
        js={`let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Привет!");
};

user.sayHi(); // Привет!`}
      />
      
      <p>
        Здесь мы просто использовали Function Expression (функциональное выражение), чтобы создать функцию приветствия, и присвоили её свойству <Badge bg='secondary'>user.sayHi</Badge> нашего объекта.
      </p>
      
      <p>
        Затем мы можем вызвать её как <Badge bg='secondary'>user.sayHi()</Badge>. Теперь пользователь может говорить!
      </p>
      
      <p>
        Функцию, которая является свойством объекта, называют <strong>методом</strong> этого объекта.
      </p>
      
      <p>
        Итак, мы получили метод <Badge bg='secondary'>sayHi</Badge> объекта <Badge bg='secondary'>user</Badge>.
      </p>
      
      <p>
        Конечно, мы могли бы использовать заранее объявленную функцию в качестве метода, вот так:
      </p>
      
      <CodeJs
        js={`let user = {
  // ...
};

// сначала, объявляем
function sayHi() {
  alert("Привет!");
}

// затем добавляем в качестве метода
user.sayHi = sayHi;

user.sayHi(); // Привет!`}
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
          Объектно-ориентированное программирование
        </h1>
        <p>
          Когда мы пишем наш код, используя объекты для представления сущностей реального мира, – это называется объектно-ориентированным программированием или сокращённо: «ООП».
        </p>
      </div>

      <h3>Сокращённая запись метода</h3>
      <p>
        Существует более короткий синтаксис для методов в литерале объекта:
      </p>
      
      <CodeNote
        js={`// эти объекты делают одно и то же

user = {
  sayHi: function() {
    alert("Привет");
  }
};

// сокращённая запись выглядит лучше, не так ли?
user = {
  sayHi() { // то же самое, что и "sayHi: function(){...}"
    alert("Привет");
  }
};`}
      />
      
      <p>
        Как было показано, мы можем пропустить ключевое слово <Badge bg='secondary'>function</Badge> и просто написать <Badge bg='secondary'>sayHi()</Badge>.
      </p>
      
      <p>
        Нужно отметить, что эти две записи не полностью эквивалентны. Есть тонкие различия, связанные с наследованием объектов (что будет рассмотрено позже), но на данном этапе изучения это неважно. Почти во всех случаях сокращённый синтаксис предпочтителен.
      </p>

      <h2>Ключевое слово «this» в методах</h2>
      <p>
        Как правило, методу объекта обычно требуется доступ к информации, хранящейся в объекте, для выполнения своей работы.
      </p>
      
      <p>
        Например, коду внутри <Badge bg='secondary'>user.sayHi()</Badge> может потребоваться имя пользователя, которое хранится в объекте <Badge bg='secondary'>user</Badge>.
      </p>
      
      <p>
        Для доступа к информации внутри объекта метод может использовать ключевое слово <Badge bg='secondary'>this</Badge>.
      </p>
      
      <p>
        Значение <Badge bg='secondary'>this</Badge> – это объект «перед точкой», который используется для вызова метода.
      </p>
      
      <p>Например:</p>
      
      <CodeNote
        js={`let user = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" - это "текущий объект".
    alert(this.name);
  }

};

user.sayHi(); // John`}
      />
      
      <p>
        Здесь во время выполнения кода <Badge bg='secondary'>user.sayHi()</Badge> значением <Badge bg='secondary'>this</Badge> будет являться <Badge bg='secondary'>user</Badge> (ссылка на объект user).
      </p>
      
      <p>
        Технически также возможно получить доступ к объекту без ключевого слова <Badge bg='secondary'>this</Badge>, обратившись к нему через внешнюю переменную (в которой хранится ссылка на этот объект):
      </p>
      
      <CodeNote
        js={`let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(user.name); // "user" вместо "this"
  }

};`}
      />
      
      <p>
        …Но такой код ненадёжен. Если мы решим скопировать ссылку на объект <Badge bg='secondary'>user</Badge> в другую переменную, например, <Badge bg='secondary'>admin = user</Badge>, и перезапишем переменную <Badge bg='secondary'>user</Badge> чем-то другим, тогда будет осуществлён доступ к неправильному объекту при вызове метода из <Badge bg='secondary'>admin</Badge>.
      </p>
      
      <p>Это показано ниже:</p>
      
      <CodeJs
        js={`let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // приведёт к ошибке
  }

};

let admin = user;
user = null; // перезапишем переменную для наглядности

admin.sayHi(); // TypeError: Cannot read property 'name' of null`}
      />
      
      <p>
        Если бы мы использовали <Badge bg='secondary'>this.name</Badge> вместо <Badge bg='secondary'>user.name</Badge> внутри <Badge bg='secondary'>alert</Badge>, тогда этот код бы сработал.
      </p>

      <h3>«this» не является фиксированным</h3>
      <p>
        В JavaScript ключевое слово <Badge bg='secondary'>this</Badge> ведёт себя иначе, чем в большинстве других языков программирования. Его можно использовать в любой функции, даже если это не метод объекта.
      </p>
      
      <p>В следующем примере нет синтаксической ошибки:</p>
      
      <CodeNote
        js={`function sayHi() {
  alert( this.name );
}`}
      />
      
      <p>
        Значение <Badge bg='secondary'>this</Badge> вычисляется во время выполнения кода, в зависимости от контекста.
      </p>
      
      <p>
        Например, здесь одна и та же функция назначена двум разным объектам и имеет различное значение <Badge bg='secondary'>this</Badge> в вызовах:
      </p>
      
      <CodeNote
        js={`let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// используем одну и ту же функцию в двух объектах
user.f = sayHi;
admin.f = sayHi;

// эти вызовы имеют разное значение this
// "this" внутри функции - это объект "перед точкой"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (нет разницы между точкой или скобками)`}
      />
      
      <p>
        Правило простое: если вызывается <Badge bg='secondary'>obj.f()</Badge>, то во время вызова <Badge bg='secondary'>f</Badge>, <Badge bg='secondary'>this</Badge> – это <Badge bg='secondary'>obj</Badge>. Так что, в приведённом выше примере это либо <Badge bg='secondary'>user</Badge>, либо <Badge bg='secondary'>admin</Badge>.
      </p>

      <h3>Вызов без объекта: this == undefined</h3>
      <p>
        Мы даже можем вызвать функцию вообще без объекта:
      </p>
      
      <CodeJs
        js={`function sayHi() {
  alert(this);
}

sayHi(); // undefined`}
      />
      
      <p>
        В строгом режиме (<Badge bg='secondary'>{'"use strict"'}</Badge>) в таком коде значением <Badge bg='secondary'>this</Badge> будет являться <Badge bg='secondary'>undefined</Badge>. Если мы попытаемся получить доступ к <Badge bg='secondary'>this.name</Badge> – это вызовет ошибку.
      </p>
      
      <p>
        В нестрогом режиме значением <Badge bg='secondary'>this</Badge> в таком случае будет глобальный объект (<Badge bg='secondary'>window</Badge> в браузере). Это – исторически сложившееся поведение <Badge bg='secondary'>this</Badge>, которое исправляется использованием строгого режима.
      </p>
      
      <p>
        Обычно подобный вызов является ошибкой программирования. Если внутри функции используется <Badge bg='secondary'>this</Badge>, тогда она ожидает, что будет вызвана в контексте какого-либо объекта.
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
          Последствия свободного this
        </h1>
        <p>
          В JavaScript <Badge bg='secondary'>this</Badge> является «свободным», его значение вычисляется в момент вызова метода и не зависит от того, где этот метод был объявлен, а скорее от того, какой объект вызывает метод (какой объект стоит «перед точкой»).
        </p>
        <p>
          Эта концепция вычисления <Badge bg='secondary'>this</Badge> в момент исполнения имеет как свои плюсы, так и минусы. С одной стороны, функция может быть повторно использована в качестве метода у различных объектов (что повышает гибкость). С другой стороны, большая гибкость увеличивает вероятность ошибок.
        </p>
      </div>

      <h3>У стрелочных функций нет «this»</h3>
      <p>
        Стрелочные функции особенные: у них нет своего «собственного» <Badge bg='secondary'>this</Badge>. Если мы ссылаемся на <Badge bg='secondary'>this</Badge> внутри такой функции, то оно берётся из внешней «нормальной» функции.
      </p>
      
      <p>
        Например, здесь <Badge bg='secondary'>arrow()</Badge> использует значение <Badge bg='secondary'>this</Badge> из внешнего метода <Badge bg='secondary'>user.sayHi()</Badge>:
      </p>
      
      <CodeNote
        js={`let user = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya`}
      />
      
      <p>
        Это особенность стрелочных функций. Она полезна, когда мы на самом деле не хотим иметь отдельное <Badge bg='secondary'>this</Badge>, а скорее хотим взять его из внешнего контекста.
      </p>

      <h1 className='mt-5'>Итого</h1>
      <ul>
        <li>
          Функции, которые находятся в свойствах объекта, называются «методами».
        </li>
        <li>
          Методы позволяют объектам «действовать»: <Badge bg='secondary'>object.doSomething()</Badge>.
        </li>
        <li>
          Методы могут ссылаться на объект через <Badge bg='secondary'>this</Badge>.
        </li>
        <li>
          Значение <Badge bg='secondary'>this</Badge> определяется во время исполнения кода.
        </li>
        <li>
          При объявлении любой функции в ней можно использовать <Badge bg='secondary'>this</Badge>, но этот <Badge bg='secondary'>this</Badge> не имеет значения до тех пор, пока функция не будет вызвана.
        </li>
        <li>
          Функция может быть скопирована между объектами (из одного объекта в другой).
        </li>
        <li>
          Когда функция вызывается синтаксисом «метода» – <Badge bg='secondary'>object.method()</Badge>, значением <Badge bg='secondary'>this</Badge> во время вызова является <Badge bg='secondary'>object</Badge>.
        </li>
      </ul>

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
                Способ вызова
              </th>
              <th
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #6c757d',
                  textAlign: 'left',
                }}
              >
                Значение this
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                <Badge bg='secondary'>obj.method()</Badge>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                obj (объект перед точкой)
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                <Badge bg='secondary'>func()</Badge>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                undefined (в строгом режиме)
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>
                Стрелочная функция
              </td>
              <td style={{ padding: '8px' }}>
                Берётся из внешнего контекста
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
          Важно помнить
        </h1>
        <p>
          Стрелочные функции являются особенными – у них нет <Badge bg='secondary'>this</Badge>. Когда внутри стрелочной функции обращаются к <Badge bg='secondary'>this</Badge>, то его значение берётся извне.
        </p>
      </div>
      
      <TaskViewer tasks={tasks['4.4']} />
    </Container>
  )
}