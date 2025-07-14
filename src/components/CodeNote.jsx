import { useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import '../style/CodeRunner.css'

import PropTypes from 'prop-types';

const CodeNote = ({ html, js }) => {
	const [highlightedHtml, setHighlightedHtml] = useState('')
	const [highlightedJs, setHighlightedJs] = useState('')

	useEffect(() => {
		if (html) {
			setHighlightedHtml(
				Prism.highlight(html, Prism.languages.markup, 'markup')
			)
		}
		if (js) {
			setHighlightedJs(
				Prism.highlight(js, Prism.languages.javascript, 'javascript')
			)
		}
	}, [html, js])

	const renderCodeWithLineNumbers = code => {
		return code.split('\n').map((line, index) => (
			<div key={index} className='code-line'>
				<span className='line-number'>{index + 1}</span>
				<span
					className='code-content'
					dangerouslySetInnerHTML={{ __html: line }}
				/>
			</div>
		))
	}

	return (
		<div className='code-runner'>
			{html && !js && (
				<pre style={{ margin: '0' }} className='language-markup code-block'>
					{renderCodeWithLineNumbers(highlightedHtml)}
				</pre>
			)}
			{js && !html && (
				<pre style={{ margin: '0' }} className='language-javascript code-block'>
					{renderCodeWithLineNumbers(highlightedJs)}
				</pre>
			)}

			{html && js && (
				<div>
					<pre style={{ margin: '0' }} className='language-markup code-block'>
						{renderCodeWithLineNumbers(highlightedHtml)}
					</pre>
					<pre className='language-javascript code-block'>
						{renderCodeWithLineNumbers(highlightedJs)}
					</pre>
				</div>
			)}
		</div>
	)
}

CodeNote.propTypes = {
	html: PropTypes.string,
	js: PropTypes.string,
};

export default CodeNote
