import { Container } from 'react-bootstrap'
import Slider from './components/Sleders/Slider'
import './Home.css'

export default function Home() {
	return (
		<div className='home-main'>
			<div className='container content'>
				<div className='row'>
					<div className='col-lg-6 col-md-12'>
						<div className='content-card'>
							<h1 className='main-title'>Современный учебник JavaScript</h1>
							<p className='main-description'>
								Комплексное руководство по изучению JavaScript от основ до
								продвинутых концепций. Изучите современный синтаксис, работу с
								DOM, асинхронное программирование, популярные фреймворки и
								лучшие практики разработки. Курс включает практические примеры,
								интерактивные задания и реальные проекты для закрепления знаний.
							</p>
						</div>
					</div>
					<div className='col-lg-6 col-md-12'>
						<div className='illustration-container'>
							<svg
								className='code-illustration'
								viewBox='0 0 400 300'
								xmlns='http://www.w3.org/2000/svg'
							>
								<defs>
									<linearGradient
										id='screenGrad'
										x1='0%'
										y1='0%'
										x2='100%'
										y2='100%'
									>
										<stop
											offset='0%'
											style={{ stopColor: 'var(--card-bg)', stopOpacity: 1 }}
										/>
										<stop
											offset='100%'
											style={{
												stopColor: 'var(--border-color)',
												stopOpacity: 1,
											}}
										/>
									</linearGradient>
									<linearGradient
										id='codeGrad'
										x1='0%'
										y1='0%'
										x2='100%'
										y2='0%'
									>
										<stop
											offset='0%'
											style={{
												stopColor: 'var(--accent-color)',
												stopOpacity: 1,
											}}
										/>
										<stop
											offset='100%'
											style={{ stopColor: '#8b5cf6', stopOpacity: 1 }}
										/>
									</linearGradient>
								</defs>

								{/* Laptop base */}
								<rect
									x='50'
									y='200'
									width='300'
									height='60'
									rx='8'
									fill='var(--border-color)'
								/>

								{/* Screen */}
								<rect
									x='80'
									y='80'
									width='240'
									height='140'
									rx='12'
									fill='url(#screenGrad)'
									stroke='var(--border-color)'
									strokeWidth='3'
								/>

								{/* Screen content */}
								<rect
									x='90'
									y='90'
									width='220'
									height='120'
									rx='6'
									fill='var(--primary-bg)'
								/>

								{/* Code lines */}
								<rect
									x='100'
									y='105'
									width='80'
									height='4'
									rx='2'
									fill='url(#codeGrad)'
								/>
								<rect
									x='190'
									y='105'
									width='40'
									height='4'
									rx='2'
									fill='var(--text-secondary)'
								/>
								<rect
									x='240'
									y='105'
									width='60'
									height='4'
									rx='2'
									fill='#ef4444'
								/>

								<rect
									x='100'
									y='120'
									width='60'
									height='4'
									rx='2'
									fill='var(--text-secondary)'
								/>
								<rect
									x='170'
									y='120'
									width='100'
									height='4'
									rx='2'
									fill='url(#codeGrad)'
								/>

								<rect
									x='100'
									y='135'
									width='120'
									height='4'
									rx='2'
									fill='#10b981'
								/>
								<rect
									x='230'
									y='135'
									width='70'
									height='4'
									rx='2'
									fill='var(--text-secondary)'
								/>

								<rect
									x='100'
									y='150'
									width='40'
									height='4'
									rx='2'
									fill='var(--text-secondary)'
								/>
								<rect
									x='150'
									y='150'
									width='80'
									height='4'
									rx='2'
									fill='url(#codeGrad)'
								/>

								<rect
									x='100'
									y='165'
									width='180'
									height='4'
									rx='2'
									fill='#f59e0b'
								/>

								<rect
									x='100'
									y='180'
									width='90'
									height='4'
									rx='2'
									fill='var(--text-secondary)'
								/>
								<rect
									x='200'
									y='180'
									width='50'
									height='4'
									rx='2'
									fill='#ef4444'
								/>

								{/* Cursor */}
								<rect
									x='260'
									y='178'
									width='2'
									height='8'
									fill='var(--accent-color)'
								>
									<animate
										attributeName='opacity'
										values='1;0;1'
										dur='1s'
										repeatCount='indefinite'
									/>
								</rect>

								{/* Floating elements */}
								<circle
									cx='350'
									cy='50'
									r='8'
									fill='var(--accent-color)'
									opacity='0.6'
								>
									<animateTransform
										attributeName='transform'
										type='translate'
										values='0,0; 0,-10; 0,0'
										dur='3s'
										repeatCount='indefinite'
									/>
								</circle>

								<circle cx='30' cy='120' r='6' fill='#8b5cf6' opacity='0.4'>
									<animateTransform
										attributeName='transform'
										type='translate'
										values='0,0; 5,0; 0,0'
										dur='4s'
										repeatCount='indefinite'
									/>
								</circle>

								<circle cx='370' cy='180' r='10' fill='#10b981' opacity='0.3'>
									<animateTransform
										attributeName='transform'
										type='translate'
										values='0,0; -8,5; 0,0'
										dur='5s'
										repeatCount='indefinite'
									/>
								</circle>

								{/* JavaScript logo */}
								<rect
									x='320'
									y='100'
									width='30'
									height='30'
									rx='4'
									fill='#f7df1e'
								/>
								<text
									x='335'
									y='120'
									textAnchor='middle'
									fill='#000'
									fontFamily='Arial, sans-serif'
									fontSize='16'
									fontWeight='bold'
								>
									JS
								</text>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className='topics-section'>
				<h1 className='topics-title'>Темы</h1>
			</div>

			<Container>
				<Slider />
			</Container>
		</div>
	)
}
