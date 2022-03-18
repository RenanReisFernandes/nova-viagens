import React from "react"
import { Form, Button } from 'react-bootstrap'
import './Login.css'


function Login() {
  return (
    <div className="body_login">
      <div className="loginForm">
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="formcolor">Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className="formcolor">Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" />
          </Form.Group>
          <button>
            ENTRAR
          </button>
        </Form>
      </div>
    </div>
  )
}
export default Login