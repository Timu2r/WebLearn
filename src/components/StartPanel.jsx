import { useNavigate } from 'react-router-dom'
import '../style/StartPanel.css'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiCss3, SiHtml5 } from 'react-icons/si'

const StartPanel = () => {
  const navigate = useNavigate()

  const handleNavigation = path => {
    navigate(path)
  }

  const courses = [
    {
      title: 'Основы JavaScript',
      description: 'Изучите основы самого популярного языка программирования',
      icon: <RiJavascriptFill fill='#f7df1e' className='course-icon' />, // Removed specific color classes here
      colorClass: 'js-gradient', // New class for consistent gradients
      lessons: [
        { name: 'Введение в JavaScript', path: '/Introduction' },
        { name: 'Справочники и спецификации', path: '/Reference' },
        { name: 'Редакторы кода', path: '/Editor' },
      ],
    },
    {
      title: 'Основы CSS',
      description: 'Научитесь стилизовать веб-страницы',
      icon: <SiCss3 fill='#315ee4' className='course-icon' />, // Removed specific color classes here
      colorClass: 'css-gradient', // New class for consistent gradients
      lessons: [
        { name: 'Hello World', path: '/HelloWorld' },
        { name: 'Структура кода', path: '/StructureCode' },
        { name: 'Использование "use strict"', path: '/UseStrict' },
      ],
    },
    {
      title: 'Основы HTML',
      description: 'Изучите структуру веб-страниц',
      icon: <SiHtml5 fill='#e44d26' className='course-icon' />, // Removed specific color classes here
      colorClass: 'html-gradient', // New class for consistent gradients
      lessons: [
        { name: 'Hello World', path: '/HelloWorld' },
        { name: 'Структура кода', path: '/StructureCode' },
        { name: 'Использование "use strict"', path: '/UseStrict' },
      ],
    },
  ]

  return (
    <div className='start-panel'>
      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <div className='hero-title-wrapper'>
            <h1 className='hero-title'>WebLearn</h1>
          </div>
          <p className='hero-description'>
            Погрузитесь в мир веб-разработки с нашими интерактивными курсами по
            <span className='highlight-js'> JavaScript</span>,
            <span className='highlight-html'> HTML</span> и
            <span className='highlight-css'> CSS</span>
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className='features-container'>
        <div className='features-header'>
          <h2 className='features-title'>Почему выбирают нас?</h2>
          <p className='features-subtitle'>
            Современный подход к изучению веб-технологий
          </p>
        </div>

        <div className='features-grid'>
          <div className='feature-card feature-card-cyan'>
            <div className='feature-icon'>🎯</div>
            <h3 className='feature-title'>Практический подход</h3>
            <p className='feature-description'>
              Изучайте на реальных примерах и проектах
            </p>
          </div>

          <div className='feature-card feature-card-purple'>
            <div className='feature-icon'>📚</div>
            <h3 className='feature-title'>Структурированное обучение</h3>
            <p className='feature-description'>
              От основ до продвинутых техник
            </p>
          </div>

          <div className='feature-card feature-card-pink'>
            <div className='feature-icon'>⚡</div>
            <h3 className='feature-title'>Интерактивность</h3>
            <p className='feature-description'>
              Живые примеры кода и консоль разработчика
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className='cta-section'>
          <h2 className='cta-title'>Готовы начать обучение?</h2>
          <p className='cta-description'>
            Присоединяйтесь к тысячам разработчиков, которые уже изучают с нами
          </p>
          <button
            onClick={() => handleNavigation('/home')}
            className='cta-button'
          >
            Начать изучение <span className='cta-icon'>🚀</span>
          </button>
        </div>

        {/* Course Sections */}
        <div className='courses-section'>
          {courses.map((course, index) => (
            <div key={index} className='course-block'>
              <div className='course-header'>
                <div className={`course-icon-wrapper ${course.colorClass}`}>
                  {course.icon}
                </div>
                <div>
                  <h3 className={`course-title ${course.colorClass}`}>
                    {course.title}
                  </h3>
                  <p className='course-description'>{course.description}</p>
                </div>
              </div>

              <div className='lessons-grid'>
                {course.lessons.map((lesson, lessonIndex) => (
                  <button
                    key={lessonIndex}
                    onClick={() => handleNavigation(lesson.path)}
                    className={`lesson-button ${course.colorClass}`}
                  >
                    <div className='lesson-content'>
                      <span className='lesson-name'>{lesson.name}</span>
                      <svg
                        className='lesson-arrow'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> {/* Changed to section for semantic HTML */}

      {/* Animated Background Elements */}
      <div className='background-animations'>
        <div className='bg-circle bg-circle-1'></div>
        <div className='bg-circle bg-circle-2'></div>
        <div className='bg-circle bg-circle-3'></div>
      </div>
    </div>
  )
}

export default StartPanel