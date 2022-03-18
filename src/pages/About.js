import './About.css'
import missao from '../Assets/missao.png'
import vizao from '../Assets/vizao.png'
import Valores from '../Assets/valores.png'



function About() {
    return (
        <div>
            <div className="about">

                <div className="aboutphrase1">
                    <h2 >Muito mais do que uma agência de viagens.</h2>
                    <h5 >Somos os responsáveis por suas experiências de viagens inesquecíveis.</h5>
                </div>
            </div>

            <div className="about2">

                <div className="aboutsec2">

                    <div className="about2side1cont">
                        <div className="about2side1">
                            <h2>A agência</h2>
                            <p>
                                Ao contrário do que se acredita, Lorem Ipsum não
                                é simplesmente um texto randômico. Com mais de 2000 anos,
                                suas raízes podem ser encontradas em
                                uma obra de literatura
                                latina clássica datada de 45 AC. Richard McClintock, um professor de
                                latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras
                                palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
                                procurando por entre citações da palavra na literatura clássica, descobriu a
                            </p>
                        </div>
                    </div>

                    <div className="about2side2cont">
                        <div className="about2side2">

                            <h2>História</h2>
                            <p>
                                Ao contrário do que se acredita, Lorem Ipsum não
                                é simplesmente um texto randômico. Com mais de 2000 anos,
                                suas raízes podem ser encontradas em uma obra de literatura
                                latina clássica datada de 45 AC. Richard McClintock, um professor de
                                latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras
                                palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
                                procurando por entre citações da palavra na literatura clássica, descobriu a
                            </p>
                        </div>
                    </div>

                </div>

                <div className="aboutsec3">

                    <div className="aboutsec3div1">
                        <img src={missao} alt='missão'></img>
                        <h2>Missão</h2>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Cras in lectus justo. Aenean
                            scelerisque justo ante,
                        </p>
                    </div>

                    <div className="aboutsec3div2">

                    <img src={vizao} alt='Vizão'></img>
                        <h2>Visão</h2>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Cras in lectus justo. Aenean
                            scelerisque justo ante,
                        </p>
                    </div>

                    <div className="aboutsec3div3">
                    <img src={Valores} alt='Valores'></img>
                        <h2>Valores</h2>
                        <p>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Cras in lectus justo. Aenean
                            scelerisque justo ante,
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default About