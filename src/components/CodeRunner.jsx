import { useState, useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "../style/CodeRunner.css";

const CodeRunner = ({ html, js }) => {
  const iframeRef = useRef(null);
  const [highlightedHtml, setHighlightedHtml] = useState("");
  const [output, setOutput] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setHighlightedHtml(Prism.highlight(html, Prism.languages.markup, "markup"));
  }, [html]);

  const runCode = () => {
    setOutput([]);
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
              const originalConsoleLog = console.log;
              console.log = (...args) => {
                originalConsoleLog(...args);
                window.parent.postMessage({ type: 'log', message: args.join(' ') }, '*');
              };
              window.onerror = function(message, source, lineno, colno, error) {
                window.parent.postMessage({ type: 'error', message, lineno, colno }, '*');
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
    const handleMessage = (event) => {
      if (event.source === iframeRef.current.contentWindow) {
        if (event.data.type === "log") {
          setOutput(prev => [...prev, event.data.message]);
        } else if (event.data.type === "error") {
          const errorMessage = `Ошибка: ${event.data.message} (Строка: ${event.data.lineno}, Колонка: ${event.data.colno})`;
          setError(errorMessage);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
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
      {output.length > 0 && (
        <div className="output-console mt-3">
          <h5>Вывод:</h5>
          {output.map((line, index) => (
            <p key={index} className="output-line">{line}</p>
          ))}
        </div>
      )}
      <iframe ref={iframeRef} className="result-frame" />
    </div>
  );
};

export default CodeRunner;