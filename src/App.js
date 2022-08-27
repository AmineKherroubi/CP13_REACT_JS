import { FormControl, FormGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './App.css';

function App() {
  return (
    <Container className='container'>
      <Form className='form'>

        <h1>Contactez Nous</h1>

        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Votre Nom" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Addresse Email</Form.Label>
          <Form.Control type="email" placeholder="nom@exemple.com" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">Envoyer</Button>

      </Form>

    </Container>
  );
}

export default App;
