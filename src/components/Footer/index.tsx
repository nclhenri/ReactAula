import imgDev from "../../assets/images/dev.png"
import imgFacebook from "../../assets/images/facebook.svg"
import imgInstagram from "../../assets/images/instagram.svg"
import imgLinkedin from "../../assets/images/linkedin.svg"
import imgLogo from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom"

import "./style.css"

function Footer() {
    const location = useLocation()
    
    return (
        <footer className={location.pathname == "/" ? "footer_background_image" : "footer_background_color"}>
            <div className="container rodape">
                {
                    location.pathname == "/" ? <div className="span_dicas">
                        <img src={imgDev} alt="" />
                        <div className="span_dicas_texto">
                            <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                                recomendações para saber mais.</p>
                            <Link className="botao botao_dicas" to={"#"}>mais dicas</Link>
                        </div>
                    </div> : ""
                }
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li>
                                <Link to={"#"}>Login</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"lista/servicos"}>Listar Serviços</Link>
                            </li>
                            <li>
                                <Link to={"lista/devs"}>Listar Desenvolvedores</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Cadastrar Cliente</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Cadastrar Desenvolvedor</Link>
                            </li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <Link to={"#"}><img src={imgFacebook} alt="" /></Link>

                            <Link to={"#"}><img src={imgInstagram} alt="" /></Link>

                            <Link to={"#"}>
                                <img src={imgLinkedin} alt="" />
                            </Link>

                        </div>
                        <Link to={"mailto:contato@vsconnect.com"}>contato@vsconnect.com</Link>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    )
}

export default Footer