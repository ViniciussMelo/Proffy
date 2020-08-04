import React from "react";

import PageHeader from "../../components/PageHeader";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css"

function TeatcherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/25934151?s=460&u=07de59de0364061d025d16ce8beda2274f3d4f46&v=4" alt="Vinicius" />
                        <div>
                            <strong>Vinicius Melo</strong>
                            <span>Quimica</span>
                        </div>
                    </header>

                    <p>
                        Professor de química
                        <br />
                        Muito bom.
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </article>
            </main>
        </div>
    )
}

export default TeatcherList;
