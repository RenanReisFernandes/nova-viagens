import './Destination.css'
import '../Assets/aventura11.jpg'
import lisboa from '../Assets/lisboa.jpg'
import egito from '../Assets/egito.jpg'
import vancouver from '../Assets/vancouver.jpg'
import bolivia from '../Assets/bolivia.jpg'
import rio from '../Assets/rio.jpg'
import sampa from '../Assets/sampa.jpg'

function Destinations() {
    return (
        <main className="main_destination">

            <div className="sestinationseca"></div>


            <div className="destinationsecb">

                <h1>Um mundo de possibilidades espera por você.</h1>

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

                    <div className="div_cont">
                        <div className="div_img">
                            <img src={rio} alt="Rio de Janeiro"></img>
                        </div>
                        <div className="div_description">
                            <h4>Rio de Janeiro</h4>
                            <button>
                                <h6>Código</h6>
                                <p>4444</p>
                            </button>
                        </div>
                    </div>

                    <div className="div_cont">
                        <div className="div_img">
                            <img src={lisboa} alt="Lisboa"></img>
                        </div>
                        <div className="div_description">
                            <h4>Portugal</h4>
                            <button>
                                <h6>Código</h6>
                                <p>5555</p>
                            </button>
                        </div>
                    </div>

                    <div className="div_cont">
                        <div className="div_img">
                            <img src={sampa} alt="São Paulo"></img>
                        </div>
                        <div className="div_description">
                            <h4>São Paulo</h4>
                            <button>
                                <h6>Código</h6>
                                <p>6666</p>
                            </button>
                        </div>
                    </div>


                </div>

            </div>

        </main>
    )
}
export default Destinations