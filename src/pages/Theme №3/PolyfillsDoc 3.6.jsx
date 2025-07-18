import { Badge, Container } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import ArrowNavigator from '../../components/ArrowNavigator.jsx';
import CodeJs from '../../components/CodeJs.jsx';
import CodeNote from '../../components/CodeNote.jsx';
import TaskViewer from '../../components/TaskViewer/TaskViewer.jsx';
// No specific tasks import needed for this content, but leaving it if it's a standard import
// import { tasks } from '../../data/tasks.js'; 

export default function PolyfillsDoc() {
  return (
    <Container className='text-light mt-5 mb-5'>
      <ArrowNavigator />
      <h1>Полифилы</h1>

      <p>
        JavaScript – динамично развивающийся язык программирования. Регулярно появляются предложения о добавлении в JS новых возможностей, они анализируются, и, если предложения одобряются, то описания новых возможностей языка переносятся в черновик{' '}
        <a href='https://tc39.github.io/ecma262/' target='_blank' rel='noopener noreferrer' className='text-info'>
          https://tc39.github.io/ecma262/
        </a>
        , а затем публикуются в{' '}
        <a href='https://tc39.github.io/ecma262/' target='_blank' rel='noopener noreferrer' className='text-info'>
          спецификации
        </a>.
      </p>
      <p>
        Разработчики JavaScript-движков сами решают, какие предложения реализовывать в первую очередь. Они могут заранее добавить в браузеры поддержку функций, которые всё ещё находятся в черновике, и отложить разработку функций, которые уже перенесены в спецификацию, потому что они менее интересны разработчикам или более сложные в реализации.
      </p>
      <p>
        Таким образом, довольно часто реализуется только часть стандарта.
      </p>
      <p>
        Можно проверить текущее состояние поддержки различных возможностей JavaScript на странице{' '}
        <a href='https://compat-table.github.io/compat-table/es6/' target='_blank' rel='noopener noreferrer' className='text-info'>
          https://compat-table.github.io/compat-table/es6/
        </a>{' '}
        (нам ещё предстоит изучить многое из этого списка).
      </p>

      <h2>Babel</h2>
      <p>
        Когда мы используем современные возможности JavaScript, некоторые движки могут не поддерживать их. Как было сказано выше, не везде реализованы все функции.
      </p>
      <p>
        И тут приходит на помощь <Badge bg='secondary'>Babel</Badge>.
      </p>
      <p>
        <Badge bg='secondary'>Babel</Badge> – это{' '}
        <strong>транспилер</strong>. Он переписывает современный JavaScript-код в предыдущий стандарт.
      </p>
      <p>
        На самом деле, есть две части Babel:
      </p>
      <p>
        Во-первых, транспилер, который переписывает код. Разработчик запускает Babel на своём компьютере. Он переписывает код в старый стандарт. И после этого код отправляется на сайт. Современные сборщики проектов, такие как{' '}
        <Badge bg='secondary'>webpack</Badge> или <Badge bg='secondary'>brunch</Badge>, предоставляют возможность запускать транспилер автоматически после каждого изменения кода, что позволяет экономить время.
      </p>
      <p>
        Во-вторых, полифил.
      </p>
      <p>
        Новые возможности языка могут включать встроенные функции и синтаксические конструкции. Транспилер переписывает код, преобразовывая новые синтаксические конструкции в старые. Но что касается новых встроенных функций, нам нужно их как-то реализовать. JavaScript является высокодинамичным языком, скрипты могут добавлять/изменять любые функции, чтобы они вели себя в соответствии с современным стандартом.
      </p>
      <p>
        Термин «полифил» означает, что скрипт «заполняет» пробелы и добавляет современные функции.
      </p>
      <p>
        Интересное хранилище полифилов:
      </p>
      <ul>
        <li>
          <Badge bg='secondary'>core js</Badge> поддерживает много функций, можно подключать только нужные.
        </li>
      </ul>
      <p>
        Таким образом, чтобы современные функции поддерживались в старых движках, нам надо установить транспилер и добавить полифил.
      </p>

      <h2>Примеры в учебнике</h2>
      <p>
        Большинство примеров можно запустить «на месте», как этот:
      </p>
      <CodeJs
        js={`alert('Нажмите кнопку "Play" в крайнем правом углу, чтобы запустить пример');`}
      />
      <p>
        Примеры, в которых используются современные возможности JS, будут работать, если ваш браузер их поддерживает.
      </p>
      <p>
        Google Chrome обычно поддерживает современные функции, можно запускать новейшие примеры без каких-либо транспилеров, но и другие современные браузеры тоже хорошо работают.
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
          Запомните:
        </h1>
        <p>
          Использование <strong>Babel</strong> (транспилера) и <strong>полифилов</strong> позволяет использовать современные возможности JavaScript, сохраняя совместимость со старыми браузерами и движками.
        </p>
      </div>

    </Container>
  );
}