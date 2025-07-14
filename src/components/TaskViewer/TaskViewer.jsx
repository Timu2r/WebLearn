import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import CodeRunner from '../CodeRunner';
import CodeNote from '../CodeNote';

import CodeJs from '../CodeJs';
import './TaskViewer.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const TaskViewer = ({ tasks }) => {
  const [visibleSolutions, setVisibleSolutions] = useState({});

  const toggleSolution = (taskId) => {
    setVisibleSolutions(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  const renderSolution = (task) => {
    if (!visibleSolutions[task.id]) {
      return null;
    }

    switch (task.solutionType) {
      case 'CodeRunner':
        return <CodeRunner html={task.solution.html || ''} js={task.solution.js} />;
      case 'CodeNote':
        return <CodeNote js={task.solution.js} />;
      case 'CodeJs':
        return <CodeJs js={task.solution.js} />;
      case 'TextSolution':
        return (
          <div className="text-solution-block">
            {task.solution.text.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-2">
                {paragraph.split('\n').map((line, lIndex) => (
                  <React.Fragment key={lIndex}>
                    {line}
                    {lIndex < paragraph.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Function to render description with paragraphs and line breaks
  const renderDescription = (description) => {
    return description.split('\n\n').map((paragraph, pIndex) => (
      <p key={pIndex} className="mb-2"> {/* Add margin-bottom for paragraphs */}
        {paragraph.split('\n').map((line, lIndex) => (
          <React.Fragment key={lIndex}>
            {line}
            {lIndex < paragraph.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    ));
  };

  return (
    <div className="task-viewer">
    <h1>Задание</h1>
      <Accordion defaultActiveKey="0" className="mt-4">
        {tasks.map((task, index) => (
          <Accordion.Item eventKey={index.toString()} key={task.id}>
            <Accordion.Header>{task.id} - {task.title}</Accordion.Header>
            <Accordion.Body>
              {renderDescription(task.description)} {/* Use the new renderDescription function */}
              <Button variant="primary" onClick={() => toggleSolution(task.id)} className="mt-3"> {/* Add mt-3 for spacing */}
                {visibleSolutions[task.id] ? (
                  <>
                    <FaEyeSlash className="me-2" /> Скрыть решение
                  </>
                ) : (
                  <>
                    <FaEye className="me-2" /> Показать решение
                  </>
                )}
              </Button>
              <div className="mt-3">
                {renderSolution(task)}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default TaskViewer;