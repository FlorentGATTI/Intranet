import React from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'

export default function Home() {
  return (
    <div>
      <br/>
        <h1>Bienvenue sur l'intranet !</h1>
        <p>La plate-forme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>
        <h2>Avez-vous dis bonjour à :</h2>
        <div className='container-cards'>
          <Card>
            <h2>Hello Card</h2>
          </Card>
        </div>
        <button>Dire bonjour à quelqu'un d'autre</button>
    </div>
  )
}
