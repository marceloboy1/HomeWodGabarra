import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import './styles.css';

import logoImg from "../../assets/logo.svg";

import api from '../../services/api'

export default function Profile(){

    const [aulas, setaulas] = useState([]);
    
    const professorId = localStorage.getItem('professorId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile',{
            headers: {
                authorization: professorId,
            }
        }).then(response => {
            setaulas(response.data);
        }) 
    }, [professorId])

    async function handleDeleteaula(id){
        try{
            await api.delete(`aulas/${id}`, {
                headers:{
                    authorization: professorId,
                }
            })
            setaulas(aulas.filter(aula => aula.id !== id))
        }
        catch(err){
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/')
    }
    return (
        <div className="profile-container">

            <header>
                <img src={logoImg}alt="Be the Hero"/>
                <spam>Bem vinda, {ongName}</spam>

                <Link className="button" to="/aulas/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower onClick={(handleLogout)} size={18} color="#e02041"/>
                </button>
            </header>

            <h1> Casos Cadastrados</h1>

            <ul>
                {aulas.map(aula => (
                    <li key={aula.id}>
                        <strong>CASO:</strong>
                        <p>{aula.title}</p>

                        <strong>DESCRIÇÃO</strong>
                        <p>{aula.description}</p>

                        <strong>VALOR</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(aula.value)}</p>

                        <button type="button">
                            <FiTrash2 onClick={() => handleDeleteaula(aula.id)} size={20} color="#a8a8b3" />
                        </button>
                    </li>                    
                ))}
             </ul>
        </div>

    )
}