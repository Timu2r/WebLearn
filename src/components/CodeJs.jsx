import { useEffect, useState } from 'react'

import Prism from 'prismjs'

import 'prismjs/themes/prism-tomorrow.css'

import 'prismjs/components/prism-javascript'

import 'prismjs/components/prism-markup'

import PropTypes from 'prop-types'

const CodeJs = ({ html, js }) => {
	const [highlightedJs, setHighlightedJs] = useState('')

	const [output, setOutput] = useState('')

	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		setHighlightedJs(
			Prism.highlight(js, Prism.languages.javascript, 'javascript')
		)
	}, [js])

	const runCode = () => {
		try {
			setHasError(false)

			setOutput('') // Сохраняем оригинальный console.log

			const originalConsoleLog = console.log

			const originalConsoleError = console.error

			const originalConsoleWarn = console.warn

			let capturedOutput = [] // Переопределяем console.log для захвата вывода

			console.log = (...args) => {
				capturedOutput.push(
					args
						.map(arg =>
							typeof arg === 'object'
								? JSON.stringify(arg, null, 2)
								: String(arg)
						)
						.join(' ')
				)

				originalConsoleLog.apply(console, args)
			}

			console.error = (...args) => {
				capturedOutput.push(
					'ERROR: ' +
						args
							.map(arg =>
								typeof arg === 'object'
									? JSON.stringify(arg, null, 2)
									: String(arg)
							)
							.join(' ')
				)

				originalConsoleError.apply(console, args)
			}

			console.warn = (...args) => {
				capturedOutput.push(
					'WARNING: ' +
						args
							.map(arg =>
								typeof arg === 'object'
									? JSON.stringify(arg, null, 2)
									: String(arg)
							)
							.join(' ')
				)

				originalConsoleWarn.apply(console, args)
			} // Выполняем код

			const result = new Function(js)() // Восстанавливаем оригинальные console методы

			console.log = originalConsoleLog

			console.error = originalConsoleError

			console.warn = originalConsoleWarn // Если есть результат выполнения функции, добавляем его

			if (result !== undefined) {
				capturedOutput.push(
					typeof result === 'object'
						? JSON.stringify(result, null, 2)
						: String(result)
				)
			} // Устанавливаем вывод

			setOutput(capturedOutput.join('\n') || 'Код выполнен успешно')
		} catch (err) {
			setHasError(true)

			setOutput(`Ошибка: ${err.message}`)
		}
	}

	const renderCodeWithLineNumbers = code => {
		return code.split('\n').map((line, index) => (
			<div key={index} className='code-line'>
				<span className='line-number'>{index + 1}</span>{' '}
				<span
					className='code-content'
					dangerouslySetInnerHTML={{ __html: line }}
				/>{' '}
			</div>
		))
	}

	return (
		<div className='code-runner' style={{ fontFamily: 'monospace' }}>
			{' '}
			<button
				className='run-btn'
				onClick={runCode}
				style={{
					backgroundColor: '#4CAF50',

					color: 'white',

					border: 'none',

					padding: '8px 16px',

					borderRadius: '4px',

					cursor: 'pointer',

					marginBottom: '10px',
				}}
			>
				▶ Запустить{' '}
			</button>{' '}
			<pre
				style={{
					borderRadius: '5px',

					margin: '0',

					backgroundColor: '#2d3748',

					color: '#e2e8f0',

					padding: '16px',

					overflow: 'auto',
				}}
				className='language-javascript'
			>
				{renderCodeWithLineNumbers(highlightedJs)}{' '}
			</pre>{' '}
		</div>
	)
}

CodeJs.propTypes = {
	html: PropTypes.string,
	js: PropTypes.string.isRequired,
}

export default CodeJs
