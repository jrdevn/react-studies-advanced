import './Myform.css'
import { useState } from 'react'
const Myform = ({user}) => {
  // 3 - gerenciamento de dados

  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");


   const handleName = (e) => {
    setName(e.target.value)
  }

  // console.log(name);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Enviando o form...');
    console.log(name, email, bio, role);
    resetInputs();
  }

  function resetInputs() {
    setName('');
    setEmail('');
    setBio('');
  }

  return (

    <div>
      {/* controlled inputs */}

      {/* envio de form -> handleSubmit */}
      {/*criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Nome: </label>
          <input type="text" name="name" placeholder="Digite seu nome.." 
                                  onChange={handleName} value={name}/>
        </div>
        {/* label envolvendo input */}
        <label>
          <span> E-mail</span>
          {/* Simplificação da manipulação dos states */}
          <input type="email" name="email" placeholder="Digite seu e-mail"
                 onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        {/* text area */}
        <label>
          <span> Bio: </span>
          <textarea name="bio" placeholder='Descrição do usuario' 
              onChange={(e) => setBio(e.target.value)} value={bio}> </textarea>
        </label>
        {/* select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
            <option value="editor">Editor</option>
          </select>
      </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default Myform