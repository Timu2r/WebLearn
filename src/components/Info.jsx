import { Button, Col, Container, Row } from 'react-bootstrap'
import {
	RiDiscordLine,
	RiGithubLine,
	RiPhoneLine,
	RiTelegram2Line,
} from 'react-icons/ri'

import Image__1 from '../assets/MainLogo.jpg'

import '../Home.css'


export default function Info() {
	return (
		<Container className='content'>
					<Row className='w-100'>
						<Col className='mt-5' md={6}>
							<h1 className='text-warning'>Кратко о себе</h1>
							<p className='text-light mt-5'>
								Меня зовут Тимур. Я увлекаюсь веб-разработкой и активно изучаю
								JavaScript и React с сентября 2024 года. Мне нравится создавать
								интерфейсы, работать с DOM и создавать собственные проекты,
								такие как онлайн-библиотеки и калькуляторы. В свободное время я
								совершенствую навыки фронтенд-разработки и экспериментирую с
								созданием интерактивных компонентов для сайтов.
							</p>
							<Button variant='warning'>Подробнее</Button>
							<div className='links mt-5'>
								{[
									{
										href: 'https://t.me/timu2r',
										icon: <RiTelegram2Line />,
									},
									{
										href: 'https://discord.gg/BPRgVfeH',
										icon: <RiDiscordLine />,
									},
									{
										href: 'tel:+79953004459',
										icon: <RiPhoneLine />,
									},
									{
										href: 'https://github.com/Timu2r',
										icon: <RiGithubLine />,
									},
								].map((link, index) => (
									<a
										key={index}
										href={link.href}
										className='fs-1'
										target='_blank'
										rel='noopener noreferrer'
									>
										{link.icon}
									</a>
								))}
							</div>
						</Col>

						<Col
							md={6}
							className='d-flex justify-content-center align-items-center d-md-none'
							style={{ margin: '0 0 100px 0' }}
						>
							<img src={Image__1} alt='Main Logo' className='main-image' />
						</Col>

						<Col
							md={6}
							className='d-flex justify-content-center align-items-center d-none d-md-flex'
						>
							<img src={Image__1} alt='Main Logo' className='main-image' />
						</Col>
					</Row>
				</Container>
	)
};
