import "../Customers/customers.css";
import { useState } from "react";
import firebase from "../../services/firebaseConnection";

import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiUser } from "react-icons/fi";

export default function Customers(){
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [nif, setNif] = useState('');
    const [endereco, setEndereco] = useState ('');
    
    async function handleAdd(e){
        e.preventDefault();
        if(nomeFantasia!== '' && nif !== '' && endereco !== ''){
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia : nomeFantasia,
                nif : nif,
                endereco : endereco
            })
            .then(()=>{
                setNomeFantasia ('');
                setNif('');
                setEndereco ('');
                alert('Empresa Cadastrada');
            })
            .catch((error)=>{
                console.log(error);
                alert('Erro ao Cadastrar a Empresa.');
            })
        } else{
            alert('Digite em todos os campos.');
        }    
    }

    return(
        <div>
            <Header/>
            <div className="content">
                <Title name="Clientes">
                <FiUser size={25}/>
                </Title>
                <div className="container">
                    <form className="form-profile customers" onSubmit={handleAdd}>
                        <label>Nome</label>
                        <input type='text' placeholder="Nome da sua Empresa" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)}/>

                        <label>NIF</label>
                        <input type='text' placeholder="Número de Identificação Fiscal" value={nif} onChange={(e) => setNif(e.target.value)}/>

                        <label>Endereço</label>
                        <input type='text' placeholder="Endereço da Empresa" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>    

                        <button type="subimit">Cadastrar</button>
                    </form>

                </div>

            </div>
        </div>

    );
}