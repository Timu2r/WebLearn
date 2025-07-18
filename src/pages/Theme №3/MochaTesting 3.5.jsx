import { Badge, Container } from 'react-bootstrap'
import { FaInfoCircle } from 'react-icons/fa'
import { IoIosWarning } from 'react-icons/io'
import ArrowNavigator from '../../components/ArrowNavigator.jsx'
import CodeJs from '../../components/CodeJs.jsx'
import CodeNote from '../../components/CodeNote.jsx'
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx'
import { tasks } from '../../data/tasks.js'

export default function MochaTesting() {
  return (
    <Container className='text-light mt-5 mb-5'>
      <ArrowNavigator />
      <h1>Автоматическое тестирование с использованием фреймворка Mocha</h1>

      <p>
        Автоматическое тестирование является важной частью разработки программного обеспечения. 
        Оно позволяет проверить корректность работы кода и предотвратить ошибки.
      </p>

      <h2>Зачем нам нужны тесты?</h2>
      <p>
        Обычно, когда мы пишем функцию, мы легко можем представить, что она должна делать, 
        и как она будет вести себя в зависимости от переданных параметров.
      </p>
      <p>
        Во время разработки мы можем проверить правильность работы функции, просто вызвав её, 
        например, из консоли и сравнив полученный результат с ожидаемым.
      </p>
      <p>
        Однако, такие «ручные перезапуски» – не лучшее решение. При тестировании кода ручными 
        перезапусками легко упустить что-нибудь важное.
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
          Проблема ручного тестирования
        </h1>
        <p>
          Например, мы работаем над функцией <Badge bg='secondary'>f</Badge>. Написали часть кода 
          и решили протестировать. Выясняется, что <Badge bg='secondary'>f(1)</Badge> работает 
          правильно, в то время как <Badge bg='secondary'>f(2)</Badge> – нет. Мы вносим в код 
          исправления, и теперь <Badge bg='secondary'>f(2)</Badge> работает правильно. 
          Вроде бы, всё хорошо, не так ли?
        </p>
        <p>
          Однако, мы забыли заново протестировать <Badge bg='secondary'>f(1)</Badge>. 
          Возможно, после внесения правок <Badge bg='secondary'>f(1)</Badge> стала работать неправильно.
        </p>
      </div>

      <p>
        Автоматическое тестирование означает, что тесты пишутся отдельно, в дополнение к коду. 
        Они по-разному запускают наши функции и сравнивают результат с ожидаемым.
      </p>

      <h2>Behavior Driven Development (BDD)</h2>
      <p>
        Давайте начнём с техники под названием <strong>Behavior Driven Development</strong> или, 
        коротко, <strong>BDD</strong>.
      </p>
      <p>
        BDD – это три в одном: и тесты, и документация, и примеры использования.
      </p>

      <h2>Разработка функции возведения в степень — «pow»: спецификация</h2>
      <p>
        Допустим, мы хотим написать функцию <Badge bg='secondary'>pow(x, n)</Badge>, которая 
        возводит <Badge bg='secondary'>x</Badge> в целочисленную степень <Badge bg='secondary'>n</Badge>. 
        Мы предполагаем, что <Badge bg='secondary'>n≥0</Badge>.
      </p>
      <p>
        Перед тем, как начать писать код функции <Badge bg='secondary'>pow</Badge>, мы можем 
        представить себе, что она должна делать, и описать её. Такое описание называется 
        <strong>спецификацией</strong>.
      </p>

      <CodeNote
        js={`describe("pow", function() {

  it("возводит в степень n", function() {
    assert.equal(pow(2, 3), 8);
  });

});`}
      />

      <p>Спецификация состоит из трёх основных блоков:</p>
      
      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
        }}
      >
        <h3><Badge bg='secondary'>describe("заголовок", function() {"{ ... }"})</Badge></h3>
        <p>
          Какую функциональность мы описываем. В нашем случае мы описываем функцию 
          <Badge bg='secondary'>pow</Badge>. Используется для группировки рабочих 
          лошадок – блоков <Badge bg='secondary'>it</Badge>.
        </p>
        
        <h3><Badge bg='secondary'>it("описание", function(){" { ... }"})</Badge></h3>
        <p>
          В первом аргументе блока <Badge bg='secondary'>it</Badge> мы человеческим языком 
          описываем конкретный способ использования функции, а во втором – пишем функцию, 
          которая тестирует данный случай.
        </p>
        
        <h3><Badge bg='secondary'>assert.equal(value1, value2)</Badge></h3>
        <p>
          Код внутри блока <Badge bg='secondary'>it</Badge>, если функция работает верно, 
          должен выполняться без ошибок. Функции вида <Badge bg='secondary'>assert.*</Badge> 
          используются для проверки того, что функция работает так, как мы ожидаем.
        </p>
      </div>

      <h2>Процесс разработки</h2>
      <p>Процесс разработки обычно выглядит следующим образом:</p>
      <ol>
        <li>Пишется начальная спецификация с тестами, проверяющими основную функциональность.</li>
        <li>Создаётся начальная реализация.</li>
        <li>
          Для запуска тестов мы используем фреймворк Mocha. Пока функция не готова, будут ошибки. 
          Вносим изменения до тех пор, пока всё не начнёт работать так, как нам нужно.
        </li>
        <li>Теперь у нас есть правильно работающая начальная реализация и тесты.</li>
        <li>
          Мы добавляем новые способы использования в спецификацию, возможно, ещё не реализованные 
          в тестируемом коде. Тесты начинают «падать» (выдавать ошибки).
        </li>
        <li>
          Возвращаемся на шаг 3, дописываем реализацию до тех пор, пока тесты не начнут 
          завершаться без ошибок.
        </li>
        <li>Повторяем шаги 3-6, пока требуемая функциональность не будет готова.</li>
      </ol>

      <h2>Спецификация в действии</h2>
      <p>
        В этой главе мы будем пользоваться следующими JavaScript-библиотеками для тестов:
      </p>
      <ul>
        <li>
          <strong>Mocha</strong> – основной фреймворк. Он предоставляет общие функции тестирования, 
          такие как <Badge bg='secondary'>describe</Badge> и <Badge bg='secondary'>it</Badge>, 
          а также функцию запуска тестов.
        </li>
        <li>
          <strong>Chai</strong> – библиотека, предоставляющая множество функций проверки утверждений. 
          Пока мы будем использовать только <Badge bg='secondary'>assert.equal</Badge>.
        </li>
        <li>
          <strong>Sinon</strong> – библиотека, позволяющая наблюдать за функциями, 
          эмулировать встроенные функции и многое другое.
        </li>
      </ul>

      <h2>Полная HTML-страница с тестами</h2>
      <CodeNote
        js={`<!DOCTYPE html>
<html>
<head>
  <!-- добавим стили mocha для отображения результатов -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- добавляем сам фреймворк mocha -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    // включаем режим тестирования в стиле BDD
    mocha.setup('bdd');
  </script>
  <!-- добавим chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai предоставляет большое количество функций. Объявим assert глобально
    let assert = chai.assert;
  </script>
</head>

<body>
  <script>
    function pow(x, n) {
      /* Здесь будет реализация функции, пока пусто */
    }
  </script>

  <!-- скрипт со спецификацией (describe, it...) -->
  <script src="test.js"></script>

  <!-- элемент с id="mocha" будет содержать результаты тестов -->
  <div id="mocha"></div>

  <!-- запускаем тесты! -->
  <script>
    mocha.run();
  </script>
</body>
</html>`}
      />

      <p>Условно страницу можно разделить на пять частей:</p>
      <ol>
        <li>Тег <Badge bg='secondary'>&lt;head&gt;</Badge> содержит сторонние библиотеки и стили для тестов.</li>
        <li>Тег <Badge bg='secondary'>&lt;script&gt;</Badge> содержит тестируемую функцию, в нашем случае – <Badge bg='secondary'>pow</Badge>.</li>
        <li>Тесты – в нашем случае внешний скрипт <Badge bg='secondary'>test.js</Badge>.</li>
        <li>HTML-элемент <Badge bg='secondary'>&lt;div id="mocha"&gt;</Badge> будет использован фреймворком Mocha для вывода результатов тестирования.</li>
        <li>Запуск тестов производится командой <Badge bg='secondary'>mocha.run()</Badge>.</li>
      </ol>

      <h2>Начальная реализация</h2>
      <p>
        Давайте напишем простую реализацию функции <Badge bg='secondary'>pow</Badge>, 
        чтобы пройти тесты:
      </p>

      <CodeNote
        js={`function pow(x, n) {
  return 8; // :) сжульничаем!
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
          Проблема с простой реализацией
        </h1>
        <p>
          Конечно, мы сжульничали. Функция не работает. Попытка посчитать 
          <Badge bg='secondary'>pow(3, 3)</Badge> даст некорректный результат, 
          однако тесты проходят.
        </p>
        <p>
          Такая ситуация вполне типична, она случается на практике. Тесты проходят, 
          но функция работает неправильно. Наша спецификация не идеальна.
        </p>
      </div>

      <h2>Улучшаем спецификацию</h2>
      <p>
        Давайте добавим ещё один тест, чтобы посмотреть, что <Badge bg='secondary'>pow(3, 3) = 27</Badge>.
      </p>
      <p>У нас есть два пути организации тестов:</p>

      <h3>Первый способ – добавить ещё один assert в существующий it:</h3>
      <CodeNote
        js={`describe("pow", function() {

  it("возводит число в степень n", function() {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 3), 27);
  });

});`}
      />

      <h3>Второй способ – написать два теста:</h3>
      <CodeNote
        js={`describe("pow", function() {

  it("2 в степени 3 будет 8", function() {
    assert.equal(pow(2, 3), 8);
  });

  it("3 в степени 3 будет 27", function() {
    assert.equal(pow(3, 3), 27);
  });

});`}
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
          Важное правило:
        </h1>
        <p>
          Принципиальная разница в том, что когда один из <Badge bg='secondary'>assert</Badge> 
          выбрасывает ошибку, то выполнение <Badge bg='secondary'>it</Badge> блока тут же прекращается.
        </p>
        <p>
          <strong>Один тест проверяет одну вещь.</strong>
        </p>
        <p>
          Если вы посмотрите на тест и увидите в нём две независимые проверки, 
          то такой тест лучше разделить на два более простых.
        </p>
      </div>

      <h2>Улучшаем реализацию</h2>
      <p>
        Давайте напишем что-то более похожее на функцию возведения в степень:
      </p>

      <CodeNote
        js={`function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}`}
      />

      <h2>Генерация тестов в цикле</h2>
      <p>
        Чтобы протестировать функцию на большем количестве значений, мы можем генерировать 
        тесты в цикле <Badge bg='secondary'>for</Badge>:
      </p>

      <CodeNote
        js={`describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(\`\${x} в степени 3 будет \${expected}\`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});`}
      />

      <h2>Вложенные блоки describe</h2>
      <p>
        Мы можем сгруппировать тесты при помощи вложенных блоков <Badge bg='secondary'>describe</Badge>:
      </p>

      <CodeNote
        js={`describe("pow", function() {

  describe("возводит x в степень 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(\`\${x} в степени 3 будет \${expected}\`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... другие тесты
});`}
      />

      <h2>before/after и beforeEach/afterEach</h2>
      <p>
        Мы можем задать функции, которые будут выполняться до/после тестов:
      </p>

      <CodeNote
        js={`describe("тест", function() {

  before(() => alert("Тестирование началось – перед тестами"));
  after(() => alert("Тестирование закончилось – после всех тестов"));

  beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
  afterEach(() => alert("После теста – заканчиваем выполнение теста"));

  it('тест 1', () => alert(1));
  it('тест 2', () => alert(2));

});`}
      />

      <div
        style={{
          borderLeft: '4px solid #6c757d',
          paddingLeft: '20px',
          margin: '20px 0',
        }}
      >
        <h3>Порядок выполнения:</h3>
        <ol>
          <li>Тестирование началось – перед тестами (before)</li>
          <li>Перед тестом – начинаем выполнять тест (beforeEach)</li>
          <li>1</li>
          <li>После теста – заканчиваем выполнение теста (afterEach)</li>
          <li>Перед тестом – начинаем выполнять тест (beforeEach)</li>
          <li>2</li>
          <li>После теста – заканчиваем выполнение теста (afterEach)</li>
          <li>Тестирование закончилось – после всех тестов (after)</li>
        </ol>
      </div>

      <h2>Расширение спецификации</h2>
      <p>
        Как было сказано, функция <Badge bg='secondary'>pow(x, n)</Badge> предназначена 
        для работы с целыми положительными значениями <Badge bg='secondary'>n</Badge>.
      </p>
      <p>
        Для обозначения математических ошибок функции JavaScript обычно возвращают 
        <Badge bg='secondary'>NaN</Badge>. Давайте делать также для некорректных значений 
        <Badge bg='secondary'>n</Badge>.
      </p>

      <CodeNote
        js={`describe("pow", function() {

  // ...

  it("для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });

});`}
      />

      <h2>Другие функции сравнения</h2>
      <p>
        Библиотека Chai содержит множество функций для проверки:
      </p>
      <ul>
        <li><Badge bg='secondary'>assert.equal(value1, value2)</Badge> – проверяет равенство <Badge bg='secondary'>value1 == value2</Badge></li>
        <li><Badge bg='secondary'>assert.strictEqual(value1, value2)</Badge> – проверяет строгое равенство <Badge bg='secondary'>value1 === value2</Badge></li>
        <li><Badge bg='secondary'>assert.notEqual, assert.notStrictEqual</Badge> – проверяет неравенство</li>
        <li><Badge bg='secondary'>assert.isTrue(value)</Badge> – проверяет, что <Badge bg='secondary'>value === true</Badge></li>
        <li><Badge bg='secondary'>assert.isFalse(value)</Badge> – проверяет, что <Badge bg='secondary'>value === false</Badge></li>
        <li><Badge bg='secondary'>assert.isNaN(value)</Badge> – проверяет, что значение равно <Badge bg='secondary'>NaN</Badge></li>
      </ul>

      <h2>Итоговая реализация</h2>
      <p>
        Добавим обработку некорректных значений в функцию <Badge bg='secondary'>pow</Badge>:
      </p>

      <CodeNote
        js={`function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}`}
      />

      <h1 className='mt-5'>Итого</h1>
      <p>
        В BDD сначала пишут спецификацию, а потом реализацию. В конце у нас есть и то, и другое.
      </p>
      <p>
        Спецификацию можно использовать тремя способами:
      </p>
      <ul>
        <li><strong>Как Тесты</strong> – они гарантируют, что функция работает правильно.</li>
        <li><strong>Как Документацию</strong> – заголовки блоков <Badge bg='secondary'>describe</Badge> и <Badge bg='secondary'>it</Badge> описывают поведение функции.</li>
        <li><strong>Как Примеры</strong> – тесты, по сути, являются готовыми примерами использования функции.</li>
      </ul>

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
          Преимущества автоматического тестирования:
        </h1>
        <ul>
          <li>Гарантия корректности работы функции после изменений</li>
          <li>Улучшение архитектуры кода</li>
          <li>Экономия времени на отладку</li>
          <li>Документация поведения функций</li>
          <li>Уверенность при рефакторинге</li>
        </ul>
      </div>

      <p>
        Имея спецификацию, мы можем улучшить, изменить и даже переписать функцию с нуля, 
        и при этом мы будем уверены, что она продолжает работать правильно.
      </p>
      <p>
        Автоматическое тестирование кода позволяет избежать проблем с регрессией и 
        делает процесс разработки более безопасным и эффективным.
      </p>

				<TaskViewer tasks={tasks['3.5']} />
					

    </Container>
  )
}