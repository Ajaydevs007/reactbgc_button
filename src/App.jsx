import './App.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';



function App() {

  const [color, setColor] = useState("white")
  console.log(color);



  const handleButton = (tag) => {

    const { name } = tag
    console.log(name);

    if (name == 'primary') {
      setColor('blue')
    }
    else if (name == "secondary") {
      setColor('gray')
    }
    else if (name == "success") {
      setColor('green')
    }
    else if (name == "warning") {
      setColor('yellow')
    }
    else if (name == "danger") {
      setColor('red')
    }
    else if (name == "info") {
      setColor('#c5f2fc')
    }
    else if (name == "dark") {
      setColor('black')
    }
    else {
      setColor('white')
    }



  }


  


  return (
    <>

      <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", backgroundColor: color }}>
        <div className='d-flex flex-column'>
          <Button variant="outline-primary" onClick={(e) => handleButton(e.target)} name='primary' className='mb-3'>Primary</Button>{' '}
          <Button variant="outline-secondary" name='secondary' onClick={(e) => handleButton(e.target)} className='mb-3'>Secondary</Button>{' '}
          <Button variant="outline-success" name='success' onClick={(e) => handleButton(e.target)} className='mb-3'>Success</Button>{' '}
          <Button variant="outline-warning" name='warning' onClick={(e) => handleButton(e.target)} className='mb-3'>Warning</Button>{' '}
          <Button variant="outline-danger" name='danger' onClick={(e) => handleButton(e.target)} className='mb-3'>Danger</Button>{' '}
          <Button variant="outline-info" name='info' onClick={(e) => handleButton(e.target)} className='mb-3'>Info</Button>{' '}
          <Button variant="outline-dark" name='dark' onClick={(e) => handleButton(e.target)} className='mb-3'>Dark</Button>{' '}
          <Button variant="secondary" onClick={(e) => handleButton(e.target)} className='mb-3'>Reset</Button>{' '}

        </div>




      </div>

    </>
  )
}

export default App
