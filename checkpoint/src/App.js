import logo from './logo.svg';
import './App.css';
import {Button,Form,input} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FacebookLoginButton} from 'react-social-login-buttons'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my page!</h1>
         <Form >
          <Form.Group>
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type ="email" placeholder='email'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type ="password" placeholder='password'/>
          </Form.Group>
        </Form>
        <button class="btn btn-primary" type="button">log in</button>
        <div className='test-center pt-3'> Or continue with Facebook </div>
        <FacebookLoginButton /> 
         
  
      </header>
      
    </div>
  )
}

export default App;
