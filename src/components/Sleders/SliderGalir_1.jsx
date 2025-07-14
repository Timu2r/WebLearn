import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion, Carousel, Col, Container, Row } from 'react-bootstrap'
import FotosData from '../Fotos.jsx'
import '../../style/Slider.css'

const getRecentFotos = count => {
	return [...FotosData]
		.sort((a, b) => new Date(b.date) - new Date(a.date))
		.slice(0, count)
}

const SliderGalir_1 = () => {
	return (
		<Container fluid className='slider-container'>
			<Row className='d-flex align-items-center justify-content-center'>
				<h1 className='slider-title__u'>
					Галерея
				</h1>
				<Col md={6} className='text-center' style={{
					margin: '35px 0'
}}>
					<Carousel
					style={{
							width: '100%',
							maxWidth: '500px',
							margin: '0 auto',
							borderRadius: '10px',
							boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
						}}
						className='carousel-custom'
						interval={3000}
						fade
						>
						{getRecentFotos().map((foto, index) => (
							<Carousel.Item key={index} className='carousel-item-custom'>
								<img
									src={foto.backImg}
									alt={`Slide ${index + 1}`}
									className='d-block w-100 carousel-img'
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '10px',
										boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
									}}
								/>
								<Carousel.Caption className='carousel-caption' 	style={{
										background: 'rgba(0,0,0,0.5)',
										borderRadius: '10px',
										padding: '10px',
									}}>
									<h5>
										{foto.discription || 'Красивое место для путешествий'}
									</h5>
									<p>{foto.place}</p>
								</Carousel.Caption>
							</Carousel.Item>
						))}
					</Carousel>
				</Col>

				<Col md={6} className='text-dark'>
					<Accordion className='d-block d-md-none'>
						<Accordion.Item eventKey='1'>
							<Accordion.Header>Галерея ...</Accordion.Header>
							<Accordion.Body>
								Наша галерея — это место, где искусство встречается с
								технологиями, создавая невероятные визуальные впечатления. Она
								разработана с использованием современных веб-технологий, что
								делает просмотр удобным, быстрым и эстетически приятным. Здесь
								каждая деталь продумана до мелочей, чтобы пользователи могли
								насладиться просмотром изображений в наилучшем качестве.
								<span className='accordion-description'>
									Галерея обладает простым и интуитивно понятным интерфейсом.
									Все изображения организованы так, чтобы их было легко
									просматривать, переключаться между ними и находить нужные. Мы
									стремимся к тому, чтобы пользовательский опыт был максимально
									приятным, поэтому каждое изображение представлено в высоком
									разрешении и адаптируется под разные устройства — будь то
									компьютер, планшет или смартфон.
								</span>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>

					<p className='slider-description d-none d-md-block'>
						Наша галерея — это место, где искусство встречается с технологиями,
						создавая невероятные визуальные впечатления. Она разработана с
						использованием современных веб-технологий, что делает просмотр
						удобным, быстрым и эстетически приятным. Здесь каждая деталь
						продумана до мелочей, чтобы пользователи могли насладиться
						просмотром изображений в наилучшем качестве.
					</p>

					<span className='slider-description d-none d-md-block'>
						Галерея обладает простым и интуитивно понятным интерфейсом. Все
						изображения организованы так, чтобы их было легко просматривать,
						переключаться между ними и находить нужные. Мы стремимся к тому,
						чтобы пользовательский опыт был максимально приятным, поэтому каждое
						изображение представлено в высоком разрешении и адаптируется под
						разные устройства — будь то компьютер, планшет или смартфон.
					</span>
				</Col>
			</Row>
		</Container>
	)
}

export default SliderGalir_1
