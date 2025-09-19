import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'

function App() {
  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]

  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEvento(evento) {
    // eventos.push(evento)
    setEventos([...eventos, evento])
    console.log('eventos => ', eventos);
  }

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="Logomarca tecboard" />
        </header>
      </main>
      <Banner></Banner>
      <FormularioDeEvento aoSubmeter={adicionarEvento} temas={temas} />
      <section className="container">
        {temas.map((item) => {
          if (!eventos.some((evento) => {
            return evento.tema.id == item.id
          })) {
            return null
          }
          return (
            <section key={item.id}>
              <Tema tema={item} />
              <div className="eventos">
                {eventos.filter((evento) => {
                  return evento.tema.id == item.id
                })
                  .map((item, index) => {
                    return (
                      <CardEvento evento={item} key={index} />
                    )
                  })
                }
              </div>
            </section>
          )
        })}
      </section>
    </>
  )
}

export default App
