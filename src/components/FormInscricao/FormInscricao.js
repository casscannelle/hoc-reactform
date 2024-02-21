import { useState } from "react";

const FormInscricao = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [aniversario, setAniversario] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const telefoneRegex = /^(\d{2})(\d{5})(\d{4})$/;

    const validateForm = () => {
        const errors = {};
        if (nome.length < 3) {
            errors.nome = 'Por favor, digite seu nome';
        }
        if (!telefoneRegex.test(telefone)) {
            errors.telefone = 'Por favor, digite um telefone válido';
        } else if (/(\d)\1{10}/.test(telefone.replace(/\D/g, ''))) {
            errors.telefone = 'Por favor, evite números repetidos no telefone';
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
        setAniversario('');
        setErrors({});
        }
        else {
        setErrors(validationErrors);
        }
    };

    
    return (
        <div className="form-container">
            <form onSubmit={onSubmit} className="space-y-8">
                <div>
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
                </div>
                <div>
                    <label>E-mail:</label>
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    placeholder="E-mail"
                    required
                    />
                </div>
                <div>
                    <label>Data de Nascimento:</label>
                    <input
                    value={aniversario}
                    onChange={(e) => setAniversario(e.target.value)}
                    type="date"
                    id="aniversario"
                    placeholder=""
                    required
                    />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    type="text"
                    id="telefone"
                    placeholder="(00)00000-0000"
                    required
                    />
                    {!errors.hasOwnProperty('telefone') ? null : <p className="error-message">{errors.telefone}</p>}
                </div>
                <div>
                    <button className="btn-modal" type="submit" disabled={isSubmitting}>
                    Enviar
                </button>
                </div>
            </form>
        </div>  

    );
}


export default FormInscricao;