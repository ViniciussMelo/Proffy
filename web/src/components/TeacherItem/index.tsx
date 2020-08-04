import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css"

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/25934151?s=460&u=07de59de0364061d025d16ce8beda2274f3d4f46&v=4" alt="Vinicius"/>
                <div>
                    <strong>Vinicius Spada Melo</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In itaque iusto magnam mollitia nemo
                <br/><br/>
                nihil perferendis quaerat sequi sunt vel. Aliquid animi eveniet fugiat in laudantium molestias
                non odit vero.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Wpp icon"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
