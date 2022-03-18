import './Promotions.css'
import egito from '../Assets/egito.jpg'
import vancouver from '../Assets/vancouver.jpg'
import bolivia from '../Assets/bolivia.jpg'

function Promotions() {
    return (
        <div className="body_promo">

            <div className="sec_promo1">

                <div className="sec_promo1a">

                    <div className="sec_promo1aa">
                    <div><h1>Clientes cadastrados tem até 50% de desconto em viagens.</h1></div>
                    <div><h3>Aproveite!</h3></div>
                    </div>

                </div>


                <div>

                    <div className="div_main">

                        <div className="div_cont">
                            <div className="div_img">
                                <img src={bolivia} alt="Bolívia"></img>
                            </div>
                            <div className="div_description">
                                <h4>Bolívia</h4>
                                <button>
                                    <h6>Código</h6>
                                    <p>1111</p>
                                </button>
                            </div>
                        </div>


                        <div className="div_cont">
                            <div className="div_img">
                                <img src={egito} alt="Egito"></img>
                            </div>
                            <div className="div_description">
                                <h4>Egito</h4>
                                <button>
                                    <h6>Código</h6>
                                    <p>2222</p>
                                </button>
                            </div>
                        </div>


                        <div className="div_cont">
                            <div className="div_img">
                                <img src={vancouver} alt="Vancouver"></img>
                            </div>
                            <div className="div_description">
                                <h4>Vancouver</h4>
                                <button>
                                    <h6>Código</h6>
                                    <p>3333</p>
                                </button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}
export default Promotions