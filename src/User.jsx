import { Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import SliderGalir_1 from './components/Sleders/SliderGalir_1'
import Image__3 from './assets/intersecting-wave-layers (1).svg'
import imgtest from './assets/IMG_20240827_185145_486.jpg'
import imgtest_2 from './assets/IMG_20250118_175854_575.jpg'
import imgtest_3 from './assets/photo_1_2025-02-13_15-08-14.jpg'
import ImgIt from './assets/IMG_20250104_164400_360.jpg'
import './User.css'
import FooterPanel from './components/Footer'

export default function User() {
	return (
		<>
			<div className='slide-wrapper'>
				<Container>
					<SliderGalir_1 />
				</Container>
			</div>
			<img src={Image__3} alt='Background layer' className='foto-svg-2' />
			
			<div className='user'>
			<Container>
      <h1
        className='h-1__u3'
        style={{ position: 'relative', top: '90px', left: '5px' }}
      >
        Самые красивые фото
      </h1>
      <Row style={{ margin: '130px 0 70px 0' }}>
        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
          <Card
            style={{
              backgroundColor: '#343a40',
              color: 'white',
              margin: '5px',
            }}
          >
            <Card.Img
              variant='top'
              src={imgtest_3}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Гуляю в АФИМолл</Card.Title>
              <Card.Text>
                Фотография из торгового центра АФИМолл. Красивый интерьер и
                приятная атмосфера.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
          <Card
            style={{
              backgroundColor: '#343a40',
              color: 'white',
              margin: '5px',
            }}
          >
            <Card.Img
              variant='top'
              src={imgtest_2}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Гуляю по Красной площади</Card.Title>
              <Card.Text>
                Прекрасный вид на Красную площадь, исторические здания и
                оживлённую атмосферу Москвы.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} lg={4} className='mb-4'>
          <Card
            style={{
              backgroundColor: '#343a40',
              color: 'white',
              margin: '5px',
            }}
          >
            <Card.Img
              variant='top'
              src={imgtest}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Претворяемся в другом что мы пара</Card.Title>
              <Card.Text>
                Весёлая прогулка с другом, создаём интересные кадры и
                наслаждаемся моментом.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

				<img
					src={Image__3}
					alt='Background wave'
					style={{
						position: 'relative',
						top: '-50px',
					}}
					className='foto-svg'
				/>
			</div>

			<div className='slide-wrapper'>
				<Container className='content'>
					<Row className='w-100'>
						<Col className='mt-5 text-dark' md={6}>
							<h1 className=''>Кратко о себе и программировании</h1>
							<Accordion className='d-block d-md-none'>
							<Accordion.Item className='custom-accordion' eventKey='0'>
								<Accordion.Header>Кратко программировании...</Accordion.Header>
								<Accordion.Body>
								<p className=' mt-4'>
								Меня зовут Тимур. Я увлекаюсь веб-разработкой и активно изучаю
								JavaScript и React с сентября 2024 года. Мне нравится создавать
								интерфейсы, работать с DOM и создавать собственные проекты,
								такие как онлайн-библиотеки и калькуляторы. В свободное время я
								совершенствую навыки фронтенд-разработки и экспериментирую с
								созданием интерактивных компонентов для сайтов.
							</p>
							<h2 className='fs-4'>Мой путь в программировании</h2>
							<p className=' mt-2 fs-6'>
								Программирование для меня — это возможность создавать,
								экспериментировать и раздвигать границы возможного. Каждый новый
								проект — это вызов и способ усовершенствовать свои навыки.
							</p>
							<h3 className=' fs-5'>Подход к разработке</h3>
							<p className=' fs-6 mt-1'>
								Я ценю чистый, читаемый код и использую:
							</p>
							<ul className=' fs-6'>
								<li> JavaScript и React.js — для динамичных интерфейсов.</li>
								<li> SCSS — для удобной стилизации.</li>
								<li> VSCode — как основной инструмент разработки.</li>
								<li> Git и GitHub — для контроля версий.</li>
							</ul>
							<h3 className=' fs-5 mt-3'>Практика и обучение</h3>
							<p className=' fs-6 mt-1'>
								Я ежедневно решаю задачи на LeetCode, создаю проекты и изучаю
								новые технологии.
							</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>

						<p className='text-dark fs-18 d-none d-md-block'>
						<p className=' mt-4'>
								Меня зовут Тимур. Я увлекаюсь веб-разработкой и активно изучаю
								JavaScript и React с сентября 2024 года. Мне нравится создавать
								интерфейсы, работать с DOM и создавать собственные проекты,
								такие как онлайн-библиотеки и калькуляторы. В свободное время я
								совершенствую навыки фронтенд-разработки и экспериментирую с
								созданием интерактивных компонентов для сайтов.
							</p>
							<h2 className='fs-4'>Мой путь в программировании</h2>
							<p className=' mt-2 fs-6'>
								Программирование для меня — это возможность создавать,
								экспериментировать и раздвигать границы возможного. Каждый новый
								проект — это вызов и способ усовершенствовать свои навыки.
							</p>
							<h3 className=' fs-5'>Подход к разработке</h3>
							<p className=' fs-6 mt-1'>
								Я ценю чистый, читаемый код и использую:
							</p>
							<ul className=' fs-6'>
								<li> JavaScript и React.js — для динамичных интерфейсов.</li>
								<li> SCSS — для удобной стилизации.</li>
								<li> VSCode — как основной инструмент разработки.</li>
								<li> Git и GitHub — для контроля версий.</li>
							</ul>
							<h3 className=' fs-5 mt-3'>Практика и обучение</h3>
							<p className=' fs-6 mt-1'>
								Я ежедневно решаю задачи на LeetCode, создаю проекты и изучаю
								новые технологии.
							</p>
						</p>
							
						</Col>

						<Col
							md={6}
							className='d-flex justify-content-center align-items-center d-md-none'
							style={{ margin: '0 0 80px 0' }}
						>
							<img src={ImgIt} alt='Main Logo' className='main-image_u1' />
						</Col>

						<Col
							md={6}
							className='d-flex justify-content-center align-items-center d-none d-md-flex'
						>
							<img src={ImgIt} alt='Main Logo' className='main-image_u1' />
						</Col>
					</Row>
				</Container>

				<FooterPanel />
			</div>
		</>
	)
}
