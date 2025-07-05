import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup"; 
import "../style/CodeRunner.css"; 

const CodeJs = ({ html, js }) => {
	const [highlightedJs, setHighlightedJs] = useState("");

	useEffect(() => {
		setHighlightedJs(Prism.highlight(js, Prism.languages.javascript, "javascript"));
	}, [js]);

	const runCode = () => {
		try {
			new Function(js)();
		} catch (err) {
			alert(`Ошибка: ${err.message}`); 
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
		</div>
	);
};

export default CodeJs;