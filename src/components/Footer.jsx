import '../style/Footer.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiTelegram2Line, RiGithubLine } from 'react-icons/ri'

export default function FooterPanel() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__content'>
					{/* О сайте */}
					<div className='footer__section footer__section--about'>
    <h3 className='footer__title'>О сайте</h3>
    <p className='footer__description'>
        Этот сайт создан для всех, кто хочет освоить веб-разработку с нуля. Здесь вы найдёте уроки, 
        практические примеры и полезные ресурсы по HTML, CSS и JavaScript.
    </p>
    <p className='footer__description'>
        Мы помогаем начинающим разработчикам разобраться в основах, научиться работать с React.js 
        и другими современными технологиями, а также вдохновляем на создание собственных проектов.
    </p>
    <p className='footer__description'>
        Присоединяйтесь, чтобы пройти путь от новичка до уверенного фронтенд-разработчика!
    </p>
</div>

					{/* Обучение */}
					<div className='footer__section'>
						<h3 className='footer__title'>Обучение</h3>
						<ul className='footer__nav'>
							<li>
								<a href='#html' className='footer__nav-link'>
									HTML основы
								</a>
							</li>
							<li>
								<a href='#css' className='footer__nav-link'>
									CSS стили
								</a>
							</li>
							<li>
								<a href='#js' className='footer__nav-link'>
									JavaScript
								</a>
							</li>
							<li>
								<a href='#react' className='footer__nav-link'>
									React.js
								</a>
							</li>
							<li>
								<a href='#projects' className='footer__nav-link'>
									Проекты
								</a>
							</li>
						</ul>
					</div>

					{/* Ресурсы */}
					<div className='footer__section'>
						<h3 className='footer__title'>Ресурсы</h3>
						<ul className='footer__nav'>
							<li>
								<a href='#tutorials' className='footer__nav-link'>
									Туториалы
								</a>
							</li>
							<li>
								<a href='#examples' className='footer__nav-link'>
									Примеры кода
								</a>
							</li>
							<li>
								<a href='#tools' className='footer__nav-link'>
									Инструменты
								</a>
							</li>
							<li>
								<a href='#blog' className='footer__nav-link'>
									Блог
								</a>
							</li>
							<li>
								<a href='#faq' className='footer__nav-link'>
									FAQ
								</a>
							</li>
						</ul>
					</div>

					{/* Контакты */}
					<div className='footer__section'>
						<h3 className='footer__title'>Контакты</h3>
						<div className='footer__contacts'>
							<div className='footer__contact-item'>
								<svg
									className='footer__contact-icon'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
								</svg>
								<a href='tel:+79953004459' className='footer__contact-link'>
									+7 (995) 300-44-59
								</a>
							</div>

							<div className='footer__contact-item'>
								<RiTelegram2Line
									className='footer__contact-icon'
									fill='currentColor'
									viewBox='0 0 24 24'
								/>
								<a
									href='https://t.me/Timu2r'
									target='_blank'
									rel='noopener noreferrer'
									className='footer__contact-link'
								>
									@Timu2r
								</a>
							</div>

							<div className='footer__contact-item'>
								<svg
									className='footer__contact-icon'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
									<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
								</svg>
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

				{/* Разделитель */}
				<div className='footer__divider'></div>

				{/* Нижняя часть футера */}
				<div className='footer__bottom'>
					{/* Копирайт */}
					<p className='footer__copyright'>
						© {currentYear} Тимур Хамидов. Все права защищены.
					</p>

					{/* Социальные сети */}
					<div className='footer__social'>
						<a
							href='https://github.com/timu2r'
							target='_blank'
							rel='noopener noreferrer'
							className='footer__social-link'
						>
							<RiGithubLine size='30px' />
						</a>

						<a
							href='mailto:hamidovtimur123@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							className='footer__social-link'
						>
							<HiOutlineMail size='30px' />
						</a>

						<a
							href='https://t.me/Timu2r'
							target='_blank'
							rel='noopener noreferrer'
							className='footer__social-link'
						>
							<RiTelegram2Line size='30px' />
						</a>
					</div>

					{/* Правовые ссылки */}
					<div className='footer__legal'>
						<a href='#privacy' className='footer__legal-link'>
							Политика конфиденциальности
						</a>
						<a href='#terms' className='footer__legal-link'>
							Условия использования
						</a>
					</div>
				</div>

				{/* Дополнительная информация */}
				<div className='footer__additional'>
					<p className='footer__motivation'>
						Следите за развитием, вдохновляйтесь и поддерживайте Тимура в его
						стремлении стать профессиональным веб-разработчиком
					</p>
					<p className='footer__tech-info'>
						Сайт создан с использованием React.js и современных веб-технологий
					</p>
				</div>
			</div>
		</footer>
	)
}
