import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup"; 
import "../style/CodeRunner.css"; 

const CodeJs = ({ js }) => {
	const [highlightedJs, setHighlightedJs] = useState("");
	const [output, setOutput] = useState([]);

	useEffect(() => {
		setHighlightedJs(Prism.highlight(js, Prism.languages.javascript, "javascript"));
	}, [js]);

	const runCode = () => {
		setOutput([]); // Clear previous output
		const originalConsoleLog = console.log;
		console.log = (...args) => {
			setOutput(prev => [...prev, args.join(' ')]);
		};

		try {
			new Function(js)();
		} catch (err) {
			setOutput(prev => [...prev, `Ошибка: ${err.message}`]);
		} finally {
			console.log = originalConsoleLog; // Restore original console.log
		}
	};

	const renderCodeWithLineNumbers = (code) => {
		return code.split("\n").map((line, index) => (
			<div key={index} className="code-line">
				<span className="line-number">{index + 1}</span>
				<span className="code-content" dangerouslySetInnerHTML={{ __html: line }} />
			</div>
		));
	};

	return (
		<div className="code-runner">
			<button className="run-btn" onClick={runCode}>▶ Запустить</button>

				<pre style={{ borderRadius: '5px',  margin: '0' }}  className="language-javascript">{renderCodeWithLineNumbers(highlightedJs)}</pre>

			{output.length > 0 && (
				<div className="output-console mt-3">
					<h5>Вывод:</h5>
					{output.map((line, index) => (
						<p key={index} className="output-line">{line}</p>
					))}
				</div>
			)}
		</div>
	);
};

export default CodeJs;