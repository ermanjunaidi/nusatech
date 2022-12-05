import logo from './logo.svg';
import './App.css';
import { Button, CardImg, Col, Row } from 'reactstrap';
import image_left from "../src/assets/image_left.svg"
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Row xs='2'>
        <Col>
        <CardImg src={image_left} style={{height:180}}/>
        </Col>
        <Col>
        <SignUp />
        </Col>
      </Row>
    </div>
  );
}

export default App;
