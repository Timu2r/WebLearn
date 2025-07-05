import { useState, useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "../style/CodeRunner.css";

const CodeRunner = ({ html, js }) => {
  const iframeRef = useRef(null);
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    setHighlightedHtml(Prism.highlight(html, Prism.languages.markup, "markup"));
  }, [html]);

  const runCode = () => {
    setError(null);
    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE HTML>
        <html>
          <head>
            <script>
              window.onerror = function(message, source, lineno, colno, error) {
                parent.postMessage({ type: 'error', message, lineno, colno }, '*');
              };
            </script>
          </head>
          <body>
            ${html}
            <script>${js}</script>
            <style> body { font-family: Arial, sans-serif; padding: 10px; color: #fff; } </style>
          </body>
        </html>
      `);
      doc.close();
    }
  };

  useEffect(() => {
    const handleError = (event) => {
      if (event.data.type === "error") {
        const errorMessage = `Ошибка: ${event.data.message} (Строка: ${event.data.lineno}, Колонка: ${event.data.colno})`;
        setError(errorMessage);
        alert(errorMessage);
      }
    };

    window.addEventListener("message", handleError);
    return () => window.removeEventListener("message", handleError);
  }, []);

  const renderLineNumbers = (code) => {
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
      <pre className="code-block">
        {renderLineNumbers(highlightedHtml)}
      </pre>
      {error && <div className="error-panel">{error}</div>}
      <iframe ref={iframeRef} className="result-frame" />
    </div>
  );
};

export default CodeRunner;
