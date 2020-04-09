import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

import logoImg from "../../assets/logo.svg";

export default function Newaula(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [categoria, setCategoria] = useState('');
    const [intensidade, setIntensidade] = useState('');
    const [video, setVideo] = useState('');
    const [thumb, setThumb] = useState('');
    const history = useHistory();
    
    const professorId = localStorage.getItem('professorId');
    
    async function handleNewaula(e){ 
       e.preventDefault();
       
       const data = {
           title,
           description,
           categoria,
           intensidade,
           video,
           thumb,
           
       };

        try{
            await api.post('aulas', data,{
                headers: {
                    authorization: professorId
                }
        })
        history.push('/profile');

       }
       catch(err){
           alert('Erro ao cadastrar caso, tente novamente')
       }

    }


    return (
        <div className="new-aula-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva seu caso para encontrar o herói.</p>


                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar
                    </Link>

                </section>

                <form onSubmit={handleNewaula}>
                    <input 
                        placeholder="Título"
                        value = {title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value = {description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <button className="button" type="submit">Cadastrar</button>

                </form>
            </div>

        </div>

    )
}