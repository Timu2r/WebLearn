import { Col, Container, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Slider.css';
import NameThame from '../../NameTheme';

const Slider = () => {
  const navigate = useNavigate();

  const groupedThemes = NameThame.reduce((acc, card) => {
    acc[card.theme] = acc[card.theme] || [];
    acc[card.theme].push(card);
    return acc;
  }, {});

  return (
    <Container className="slider-container">
      {Object.entries(groupedThemes).map(([theme, cards]) => (
        <section key={theme} className="theme-section">
          <h2 className="theme-title">
            <span className="theme-highlight">{theme}</span>
          </h2>
          <Row className="g-4">
            {cards.map((card) => (
              <Col key={card.id} xs={12} sm={6} md={4} lg={3}>
                <Card 
                  className="custom-card"
                  onClick={() => navigate(card.path)}
                >
                  
                  <Card.Body>
                    <Card.Title className="card-title">{card.id}</Card.Title>
                    {card.title && (
                      <Card.Text className="card-description">
                        {card.title}
                      </Card.Text>
                    )}
                   
                  </Card.Body>
                  <div className="card-hover-effect"></div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      ))}
    </Container>
  );
};

export default Slider;