import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';

function FillExample() {
  const [activeKey, setActiveKey] = useState("/home");

  return (
    <Nav 
      variant="underline" 
      defaultActiveKey="/home" 
      className="text-center w-100 justify-content-center"
      onSelect={(selectedKey) => setActiveKey(selectedKey)}
    >
      <Nav.Item>
        <Nav.Link 
          href="/home" 
          eventKey="/home"
          style={{ color: activeKey === "/home" ? "red" : "white" }}
        >
          Active
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link 
          eventKey="link-1"
          style={{ color: activeKey === "link-1" ? "red" : "white" }}
        >
          Option 2
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillExample;
