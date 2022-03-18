import './Contact.css'
import { Form, Button } from 'react-bootstrap'
import vetor from '../Assets/vetor.png'
import tel from '../Assets/tel.png'
import fax from '../Assets/fax.png'
import mail from '../Assets/mail.png'


function Contact() {
    return (
        <main className="cont_sec_main">

            <div className="cont_sec_main2">

                <article className="cont_sec1">

                    <Form>
                        <h3>Entre em contato conosco</h3>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="email@email.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <div>
                            <Button className="btn" variant="primary" type="submit">
                                ENVIAR
                            </Button>
                        </div>

                    </Form>

                </article>

                <aside className="cont_sec2">

                    <div className="cont_sec2_card">
                        <img src={vetor} alt="Vetor"></img>
                        <h5>Nosso escritório</h5>
                        <p>Rua xxxxxx</p>
                    </div>
                    <div className="cont_sec2_card">
                        <img src={tel} alt="Telefone"></img>
                        <h5>Número de telefone</h5>
                        <p>9999-999</p>
                    </div>
                    <div className="cont_sec2_card">
                        <img src={mail} alt="Email"></img>
                        <h5>Email</h5>
                        <p>email@email.com</p>
                    </div>
                    <div className="cont_sec2_card">
                        <img src={fax} alt="Fax"></img>
                        <h5>Fax</h5>
                        <p>8888-888</p>
                    </div>

                </aside>


            </div>
        </main>
    )
}
export default Contact