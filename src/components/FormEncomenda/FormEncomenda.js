import { useState } from "react";

const FormEncomenda = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [produto, setProduto] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});


    const validateForm = () => {
        const errors = {};
        if (nome.length < 3) {
            errors.nome = 'Por favor, digite seu nome';
        }
        if (mensagem.length === 0) {
            errors.mensagem = 'Por favor, explique sua encomenda';
        }
        
        return errors;
    };

    const onSubmit = async (e) => {
        e.preventDefault();

    const validationErrors = validateForm(); 
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);

        await new Promise((resolver) => setTimeout(resolver, 500));
        alert('Enviado!');
        setIsSubmitting(false);

        setNome('');
        setEmail('');
        setTelefone('');
        setProduto('');
        setMensagem('');
        setErrors({});
        }
        else {
        setErrors(validationErrors);
        }
    };

    console.log(onSubmit);
    return (
        <div className="form-container">
            <form onSubmit={onSubmit} className="space-y-8">
                <label>Nome:</label>
                    <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    type="text"
                    id="nome"
                    placeholder="Nome"
                    required
                    />
                    {!errors.hasOwnProperty('nome') ? null : <p className="error-message">{errors.nome}</p>}
                <label>E-mail:</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    required
                    />
                <label>Telefone:</label>
                    <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    type="text"
                    id="telefone"
                    placeholder="(00)00000-0000"
                    required
                    />
                <label>Produto</label>
                    <select
                    value={produto}
                    onChange={(e) => setProduto(e.target.value)}
                    id="produto"
                    placeholder="produto"
                    required
                    >
                        <option value="bolo">Bolo</option>
                        <option value="torta">Torta</option>
                        <option value="sorvete">Sorvete</option>
                    </select>
                    
                <label>Mensagem:</label>
                    <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    type="text"
                    id="mensagem"
                    placeholder=""
                    maxLength={500}
                    cols={50}
                    rows={4}
                    required
                    />
                    {!errors.hasOwnProperty('mensagem') ? null : <p className="error-message">{errors.mensagem}</p>}
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        </div>  

    );
}


export default FormEncomenda;