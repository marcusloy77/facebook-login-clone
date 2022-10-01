import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

//two collumns
//logo in one, off center
//login form on right
//down the bottom, basic ender
//no header or anything
//honestly bootstrap looks the easiest way to create this



function App() {
  return (
    <div className="App">
      <div className='collumns'>
        <div className='col1'>
          <div className='left col'>
          <img className='facebookLogo' src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='facebook logo'></img>
          <p>Facebook helps you connect and share with the people in your life</p>
        </div></div>
        <div className='col2'>
          <div className='loginForm'>
            <Form>
              <Form.Group className='emailDiv'>
                <div className='inputs'><Form.Control type="email or phone number" placeholder="Email address or phone number" /></div>
                <div className='inputs'><Form.Control type="password" placeholder="Password" /></div>
                <div className='btns'><Button className='logInBtn' variant="primary" type="submit">Log In</Button></div>
                <a href='google.com'>Forgotten password?</a>
                <div className='btns'><Button className='registerBtn' variant="primary" type="submit"> Create New Account</Button></div>
              </Form.Group>
            </Form>
            <p><strong>Create a Page</strong> for a celebrity, brand or business</p>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;
