
import React, { useEffect, useRef, useState } from "react"
import { Form, Button, Modal } from 'react-bootstrap'
import api from "../api";
import './Cadastration.css'


function Cadastration() {

  const nome = useRef()

  const codigo = useRef();

  const [destino, setDestino] = useState([])


  function enviarDestino(event) {
    event.preventDefault()
    api.post('/meusdestinos', {
      nome: nome.current.value,
      codigo: codigo.current.value

    }).then(res => window.location.reload())
      .catch(err => console.log(err))
  }


  useEffect(() => {
    api.get('/meusdestinos').then(res => setDestino(res.data)).catch(err => console.log(err))
  }

    , [])

  function deletar(btn) {
    api.delete(`/meusdestinos/${btn.target.value}`)
      .then(() => api.get('/meusdestinos').then(res => setDestino(res.data))
        .catch(err => console.log(err)))
      .catch((err) => console.log(err))
  }

  return (
    <main className="body_cadastration">

      <div className="div_cadastration">



        <section className="  cadastrationForm   App container mt-5">

          <div className="cadastrationForma">

            <Form onSubmit={enviarDestino}>
              <Form.Group className="mb-3" controlId="formGroupEmail">

                <Form.Label className="cad_label" >Nome do destino</Form.Label>

                <input required type="text" placeholder="Destino" ref={nome} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="cad_label">Código da viagem</Form.Label>
                <input required type="text" placeholder="Código" ref={codigo} />
              </Form.Group>
              <button class="button">
                ENVIAR
              </button>
            </Form>


          </div>



          <div >
            {destino.map(destino => (

              <Modal.Dialog >
                <Modal.Header>
                  <Modal.Title >Número da viagem: {destino.id}</  Modal.Title>
                </Modal.Header>

                <Modal.Body >

                  <tr>
                    <th scope="row">Nome: </th>
                    <td>{destino.nome}</td>
                  </tr>

                  <tr>
                    <th scope="row">Código: </th>
                    <td>{destino.codigo}</td>
                  </tr>

                </Modal.Body>

                <Modal.Footer>
                  <Button variant="success">Atualizar</Button>
                  <Button variant="danger"

                    value={destino.id} onClick={(btn) => deletar(btn)}

                  >Deletar</Button>
                </Modal.Footer>
              </Modal.Dialog>
            ))}

          </div>


        </section>


      </div>

    </main>
  )
}
export default Cadastration