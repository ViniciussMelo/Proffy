import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css"

interface TeacherItemProps {

}

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://i1.sndcdn.com/avatars-nKzbCyp7ygMKtzY6-K4sGig-t200x200.jpg" alt="Luís"/>
                <div>
                    <strong>Luís Gustavo Búrigo</strong>
                    <span>Matematica</span>
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
