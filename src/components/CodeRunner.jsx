import { useState, useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "../style/CodeRunner.css";

const CodeRunner = ({ html, js }) => {
  const iframeRef = useRef(null);
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const [highlightedJs, setHighlightedJs] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (html) {
      setHighlightedHtml(Prism.highlight(html, Prism.languages.markup, "markup"));
    }
    setHighlightedJs(Prism.highlight(js, Prism.languages.javascript, "javascript"));
  }, [html, js]);

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
      }
    };

    window.addEventListener("message", handleError);
    return () => window.removeEventListener("message", handleError);
  }, []);

  const renderLineNumbers = (code) => {
    return code.split("\n").map((line, index) => (
      <div key={index} className="code-line">
        <span className="line-number">{index + 1}</span>
        <span 
          className="code-content" 
          dangerouslySetInnerHTML={{ __html: line || "&nbsp;" }} 
        />
      </div>
    ));
  };

  return (
    <div className="code-runner">
      <button className="run-btn" onClick={runCode}>▶ Запустить</button>
      
      <div className="code-container">
        {html && (
            <div className="code-section">
              <h4>HTML:</h4>
              <pre className="code-block">
                {renderLineNumbers(highlightedHtml)}
              </pre>
            </div>
          )}
        
        <div className="code-section">
          <h4>JavaScript:</h4>
          <pre className="code-block">
            {renderLineNumbers(highlightedJs)}
          </pre>
        </div>
      </div>
      
      {error && (
        <div className="error-section">
          <h4>Ошибка:</h4>
          <div className="error-panel">{error}</div>
        </div>
      )}
      
      <div className="result-section">
        <h4>Результат:</h4>
        <iframe 
          ref={iframeRef} 
          title="Результат выполнения кода"
          className="result-frame" 
        />
      </div>
    </div>
  );
};

export default CodeRunner;