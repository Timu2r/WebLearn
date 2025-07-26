import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'

export default function ObjectReferences() {
  return (
    <Container className='text-light mt-5 mb-5'>
      <ArrowNavigator />
      <h1>Копирование объектов и ссылки</h1>

      <p>
        Одно из фундаментальных отличий объектов от примитивов заключается в том, что объекты хранятся и копируются «по ссылке», тогда как примитивные значения: строки, числа, логические значения и т.д. – всегда копируются «как целое значение».
      </p>
      <p>
        Это легко понять, если мы немного заглянем под капот того, что происходит, когда мы копируем значение.
      </p>

      <h2>Копирование примитивов</h2>
      <p>
        Давайте начнём с примитива, такого как строка.
      </p>
      <p>
        Здесь мы помещаем копию <Badge bg='secondary'>message</Badge> во <Badge bg='secondary'>phrase</Badge>:
      </p>
      <CodeJs
        js={`let message = "Привет!";
let phrase = message;`}
      />
      <p>
        В результате мы имеем две независимые переменные, каждая из которых хранит строку <Badge bg='secondary'>{'"Привет!"'}</Badge>.
      </p>
      <p>
        Вполне очевидный результат, не так ли?
      </p>

      <h2>Копирование объектов по ссылке</h2>
      <p>
        Объекты ведут себя иначе.
      </p>
      <p>
        Переменная, которой присвоен объект, хранит не сам объект, а его «адрес в памяти» – другими словами, «ссылку» на него.
      </p>
      <p>
        Давайте рассмотрим пример такой переменной:
      </p>
      <CodeJs
        js={`let user = {
  name: "John"
};`}
      />
      <p>
        Объект хранится где-то в памяти, в то время как переменная <Badge bg='secondary'>user</Badge> имеет лишь «ссылку» на него.
      </p>
      <p>
        Мы можем думать о переменной объекта, такой как <Badge bg='secondary'>user</Badge>, как о листе бумаги с адресом объекта на нем.
      </p>
      <p>
        Когда мы выполняем действия с объектом, к примеру, берём свойство <Badge bg='secondary'>user.name</Badge>, движок JavaScript просматривает то, что находится по этому адресу, и выполняет операцию с самим объектом.
      </p>

      <h3>Важность понимания ссылок</h3>
      <p>
        При копировании переменной объекта копируется ссылка, но сам объект не дублируется.
      </p>
      <p>
        Например:
      </p>
      <CodeJs
        js={`let user = { name: "John" };

let admin = user; // копируется ссылка`}
      />
      <p>
        Теперь у нас есть две переменные, каждая из которых содержит ссылку на один и тот же объект.
      </p>
      <p>
        Как вы можете видеть, все ещё есть один объект, но теперь с двумя переменными, которые ссылаются на него.
      </p>
      <p>
        Мы можем использовать любую переменную для доступа к объекту и изменения его содержимого:
      </p>
      <CodeJs
        js={`let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // изменено по ссылке из переменной "admin"

alert(user.name); // 'Pete', изменения видны по ссылке из переменной "user"`}
      />
      <p>
        Это как если бы у нас был шкафчик с двумя ключами, и мы использовали один из них (<Badge bg='secondary'>admin</Badge>), чтобы войти в него и внести изменения. А затем, если мы позже используем другой ключ (<Badge bg='secondary'>user</Badge>), мы все равно открываем тот же шкафчик и можем получить доступ к изменённому содержимому.
      </p>

      <h2>Сравнение по ссылке</h2>
      <p>
        Два объекта равны только в том случае, если это один и тот же объект.
      </p>
      <p>
        Например, здесь <Badge bg='secondary'>a</Badge> и <Badge bg='secondary'>b</Badge> ссылаются на один и тот же объект, поэтому они равны:
      </p>
      <CodeJs
        js={`let a = {};
let b = a; // копирование по ссылке

alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
alert( a === b ); // true`}
      />
      <p>
        И здесь два независимых объекта не равны, даже если они выглядят одинаково (оба пусты):
      </p>
      <CodeJs
        js={`let a = {};
let b = {}; // два независимых объекта

alert( a == b ); // false`}
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
          Важно запомнить
        </h1>
        <p>
          Для сравнений типа <Badge bg='secondary'>obj1 {'>'} obj2</Badge> или для сравнения с примитивом <Badge bg='secondary'>obj == 5</Badge> объекты преобразуются в примитивы. Такие сравнения требуются очень редко и обычно они появляются в результате ошибок программиста.
        </p>
      </div>

      <h2>Клонирование и объединение, Object.assign</h2>
      <p>
        Итак, копирование объектной переменной создаёт ещё одну ссылку на тот же объект.
      </p>
      <p>
        Но что, если нам всё же нужно дублировать объект? Создать независимую копию, клон?
      </p>
      <p>
        Это тоже выполнимо, но немного сложнее, потому что в JavaScript для этого нет встроенного метода. Но на самом деле в этом редко возникает необходимость, копирования по ссылке в большинстве случаев вполне хватает.
      </p>

      <h3>Ручное клонирование</h3>
      <p>
        Если мы действительно этого хотим, то нам нужно создать новый объект и воспроизвести структуру существующего, перебрав его свойства и скопировав их на примитивном уровне.
      </p>
      <p>
        Например так:
      </p>
      <CodeJs
        js={`let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// давайте скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// теперь clone это полностью независимый объект с тем же содержимым
clone.name = "Pete"; // изменим в нём данные

alert( user.name ); // все ещё John в первоначальном объекте`}
      />

      <h3>Использование Object.assign</h3>
      <p>
        Также мы можем использовать для этого метод <Badge bg='secondary'>Object.assign</Badge>.
      </p>
      <p>
        Синтаксис:
      </p>
      <CodeNote js={`Object.assign(dest, [src1, src2, src3...])`} />
      <ul>
        <li>
          Первый аргумент <Badge bg='secondary'>dest</Badge> — целевой объект.
        </li>
        <li>
          Остальные аргументы <Badge bg='secondary'>src1, ..., srcN</Badge> (может быть столько, сколько необходимо) являются исходными объектами
        </li>
        <li>
          Метод копирует свойства всех исходных объектов <Badge bg='secondary'>src1, ..., srcN</Badge> в целевой объект <Badge bg='secondary'>dest</Badge>
        </li>
        <li>
          Возвращает объект <Badge bg='secondary'>dest</Badge>
        </li>
      </ul>
      <p>
        Например, мы можем использовать его для объединения нескольких объектов в один:
      </p>
      <CodeJs
        js={`let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "John", canView: true, canEdit: true }`}
      />
      <p>
        Если скопированное имя свойства уже существует, оно будет перезаписано:
      </p>
      <CodeJs
        js={`let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // теперь user = { name: "Pete" }`}
      />
      <p>
        Мы также можем использовать <Badge bg='secondary'>Object.assign</Badge> для замены цикла <Badge bg='secondary'>for..in</Badge> для простого клонирования:
      </p>
      <CodeJs
        js={`let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);`}
      />
      <p>
        Он копирует все свойства <Badge bg='secondary'>user</Badge> в пустой объект и возвращает его.
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
          Альтернативные методы клонирования
        </h1>
        <p>
          Также существуют и другие методы клонирования объекта. Например, с использованием оператора расширения <Badge bg='secondary'>clone = {'{...user}'}</Badge>, рассмотренного далее в учебнике.
        </p>
      </div>

      <h2>Вложенное клонирование</h2>
      <p>
        До сих пор мы предполагали, что все свойства <Badge bg='secondary'>user</Badge> примитивные. Но свойства могут быть и ссылками на другие объекты. Что с ними делать?
      </p>
      <p>
        Например, есть объект:
      </p>
      <CodeJs
        js={`let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182`}
      />
      <p>
        Теперь недостаточно просто скопировать <Badge bg='secondary'>clone.sizes = user.sizes</Badge>, потому что <Badge bg='secondary'>user.sizes</Badge> – это объект, он будет скопирован по ссылке. Таким образом, <Badge bg='secondary'>clone</Badge> и <Badge bg='secondary'>user</Badge> будут иметь общий объект <Badge bg='secondary'>sizes</Badge>:
      </p>
      <CodeJs
        js={`let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, тот же объект

// user и clone обладают общим свойством sizes
user.sizes.width++;       // изменяем свойства в первом объекте
alert(clone.sizes.width); // 51, видим результат в другом`}
      />
      <p>
        Чтобы исправить это, мы должны использовать цикл клонирования, который проверяет каждое значение <Badge bg='secondary'>user[key]</Badge> и, если это объект, тогда также копирует его структуру. Это называется «глубоким клонированием».
      </p>

      <h3>Глубокое клонирование</h3>
      <p>
        Мы можем реализовать глубокое клонирование, используя рекурсию. Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, например <Badge bg='secondary'>_.cloneDeep(obj)</Badge> из библиотеки JavaScript lodash.
      </p>
      <p>
        Также мы можем использовать глобальный метод <Badge bg='secondary'>structuredClone()</Badge>, который позволяет сделать полную копию объекта. К сожалению он поддерживается только современными браузерами.
      </p>

      <h2>Объекты, объявленные как константа, могут быть изменены</h2>
      <p>
        Важным побочным эффектом хранения объектов в качестве ссылок является то, что объект, объявленный как <Badge bg='secondary'>const</Badge>, может быть изменён.
      </p>
      <p>
        Например:
      </p>
      <CodeJs
        js={`const user = {
  name: "John"
};

user.name = "Pete"; // (*)

alert(user.name); // Pete`}
      />
      <p>
        Может показаться, что строка <Badge bg='secondary'>(*)</Badge> вызовет ошибку, но, это не так. Значение <Badge bg='secondary'>user</Badge> это константа, оно всегда должно ссылаться на один и тот же объект, но свойства этого объекта могут свободно изменяться.
      </p>
      <p>
        Другими словами, <Badge bg='secondary'>const user</Badge> выдаст ошибку только в том случае, если мы попытаемся задать <Badge bg='secondary'>user=...</Badge> в целом.
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
          Создание постоянных свойств
        </h1>
        <p>
          Тем не менее, если нам действительно нужно создать постоянные свойства объекта, это тоже возможно, но с использованием совершенно других методов. Мы затронем это в главе Флаги и дескрипторы свойств.
        </p>
      </div>

      <h1 className='mt-5'>Итого</h1>
      <p>
        Объекты присваиваются и копируются по ссылке. Другими словами, переменная хранит не «значение объекта», а «ссылку» (адрес в памяти) на это значение. Таким образом, копирование такой переменной или передача её в качестве аргумента функции копирует эту ссылку, а не сам объект.
      </p>
      <p>
        Все операции с использованием скопированных ссылок (например, добавление/удаление свойств) выполняются с одним и тем же объектом.
      </p>
      <p>
        Чтобы создать «реальную копию» (клон), мы можем использовать <Badge bg='secondary'>Object.assign</Badge> для так называемой «поверхностной копии» (вложенные объекты копируются по ссылке) или функцию «глубокого клонирования», такую как <Badge bg='secondary'>_.cloneDeep(obj)</Badge>.
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
                Тип копирования
              </th>
              <th
                style={{
                  padding: '10px',
                  borderBottom: '1px solid #6c757d',
                  textAlign: 'left',
                }}
              >
                Метод
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
                Поверхностное
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                <Badge bg='secondary'>Object.assign()</Badge>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                Вложенные объекты копируются по ссылке
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                Глубокое
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                <Badge bg='secondary'>_.cloneDeep()</Badge>
              </td>
              <td style={{ padding: '8px', borderBottom: '1px solid #495057' }}>
                Полное копирование всех вложенных объектов
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>
                Современное глубокое
              </td>
              <td style={{ padding: '8px' }}>
                <Badge bg='secondary'>structuredClone()</Badge>
              </td>
              <td style={{ padding: '8px' }}>
                Нативный метод, но не везде поддерживается
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
          Ключевые различия
        </h1>
        <p>
          <strong>Примитивы</strong>: копируются по значению (независимые копии)
        </p>
        <p>
          <strong>Объекты</strong>: копируются по ссылке (общие данные)
        </p>
        <p>
          Используйте клонирование только когда действительно нужны независимые копии объектов.
        </p>
      </div>
    </Container>
  )
}