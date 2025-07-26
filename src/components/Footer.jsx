// FooterPanel.jsx
import '../style/Footer.css'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { RiTelegramLine, RiGithubLine } from 'react-icons/ri'

export default function FooterPanel() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__content'>
          <div className='footer__section footer__section--about'>
            <h3 className='footer__title'>О проекте</h3>
            <p className='footer__description'>
              Frontend-Pro — ваш путеводитель в мире веб-разработки. Мы предлагаем структурированные уроки, практические задания и ценные ресурсы для освоения HTML, CSS, JavaScript и современных фреймворков, таких как React.js.
            </p>
            <p className='footer__description'>
              Наша миссия — вдохновить вас на создание впечатляющих проектов и помочь стать уверенным фронтенд-разработчиком, способным реализовать любые идеи.
            </p>
            <p className='footer__description'>
              Присоединяйтесь к сообществу и начните свой путь к профессиональному росту уже сегодня!
            </p>
          </div>

          <div className='footer__section'>
            <h3 className='footer__title'>Обучение</h3>
            <ul className='footer__nav'>
              <li><a href='#courses' className='footer__nav-link'>Курсы</a></li>
              <li><a href='#html-basics' className='footer__nav-link'>HTML Основы</a></li>
              <li><a href='#css-styling' className='footer__nav-link'>CSS Стилизация</a></li>
              <li><a href='#javascript-deep' className='footer__nav-link'>JavaScript и DOM</a></li>
              <li><a href='#react-framework' className='footer__nav-link'>React.js & Экосистема</a></li>
              <li><a href='#projects-portfolio' className='footer__nav-link'>Практические Проекты</a></li>
            </ul>
          </div>

          <div className='footer__section'>
            <h3 className='footer__title'>Ресурсы</h3>
            <ul className='footer__nav'>
              <li><a href='#articles' className='footer__nav-link'>Статьи и гайды</a></li>
              <li><a href='#code-examples' className='footer__nav-link'>Примеры кода</a></li>
              <li><a href='#tools-dev' className='footer__nav-link'>Инструменты разработки</a></li>
              <li><a href='#community' className='footer__nav-link'>Сообщество</a></li>
              <li><a href='#faq-support' className='footer__nav-link'>FAQ и поддержка</a></li>
              <li><a href='#career-path' className='footer__nav-link'>Карьера в IT</a></li>
            </ul>
          </div>

          <div className='footer__section'>
            <h3 className='footer__title'>Свяжитесь с нами</h3>
            <div className='footer__contacts'>
              <div className='footer__contact-item'>
                <HiOutlinePhone className='footer__contact-icon' />
                <a href='tel:+79953004459' className='footer__contact-link'>
                  +7 (995) 300-44-59
                </a>
              </div>

              <div className='footer__contact-item'>
                <RiTelegramLine className='footer__contact-icon' />
                <a
                  href='https://t.me/Timu2r'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer__contact-link'
                >
                  Написать в Telegram
                </a>
              </div>

              <div className='footer__contact-item'>
                <HiOutlineMail className='footer__contact-icon' />
                <a
                  href='mailto:hamidovtimur123@gmail.com'
                  className='footer__contact-link'
                >
                  hamidovtimur123@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__divider'></div>

        <div className='footer__bottom'>
          <p className='footer__copyright'>
            © {currentYear} Frontend-Pro. Все права защищены.
          </p>

          <div className='footer__social'>
            <a
              href='https://github.com/timu2r'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="GitHub профиль"
              className='footer__social-link'
            >
              <RiGithubLine size='24px' />
            </a>

            <a
              href='https://t.me/Timu2r'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Telegram профиль"
              className='footer__social-link'
            >
              <RiTelegramLine size='24px' />
            </a>

            <a
              href='mailto:hamidovtimur123@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label="Написать нам на почту"
              className='footer__social-link'
            >
              <HiOutlineMail size='24px' />
            </a>
          </div>

          <div className='footer__legal'>
            <a href='#privacy-policy' className='footer__legal-link'>Политика конфиденциальности</a>
            <a href='#terms-of-service' className='footer__legal-link'>Условия использования</a>
          </div>
        </div>

        <div className='footer__additional'>
          <p className='footer__motivation'>
            🌟 Создано с любовью и страстью к фронтенд-разработке. Мы верим в ваш успех!
          </p>
          <p className='footer__tech-info'>
            Сайт разработан на React.js с использованием современных веб-технологий.
          </p>
        </div>
      </div>
    </footer>
  )
}