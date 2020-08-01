import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategoria] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange (infoDoEvento) {
        setValue(infoDoEvento.target.getAttribute('name'), infoDoEvento.target.value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome} </h1>

            <form onSubmit={function handleSubmit(infoDoEvento) {
                infoDoEvento.preventDefault();
                setCategoria([
                    ...categorias,
                    values
                ]);

                setValue(valoresIniciais);
            }}>
                <div>
                    <label>
                        Nome da Categoria:
                    <input 
                        type="text"
                        value={values.nome}
                        name="nome"
                        onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição:
                    <textarea 
                        type="text"
                        value={values.descricao}
                        name="descricao"
                        onChange={handleChange}
                        />
                    </label>                    
                </div>

                <div>
                    <label>
                        Cor:
                    <input 
                        type="color"
                        value={values.cor}
                        name="cor"
                        onChange={handleChange}
                        />
                    </label>
                </div>                

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;


// function handleChange(infosDoEvento){
//     const getAttribute = infosDoEvento.target.getAttribute.bind(infosDoEvento.target);
//     const { value } = infosDoEvento.target;
//     setValue(
//       getAttribute('name'),
//       value
//     );
//   }