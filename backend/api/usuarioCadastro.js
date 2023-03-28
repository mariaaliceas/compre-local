module.exports = (app) => {
    const get = async (req, res) => {
        const usuario = await app.database("usuario").select("*");

        return res.json(usuario);
    }

    

    const signup = async (req, res) => {
        
        const usuario = { ...req.body };
        const query=await app.database("usuario").select("email").where({email:usuario.email})
        //const query=await app.database("usuario").select("email").where("email","=",usuario.email)
        const verifica=JSON.stringify(query)
        const verificaSenha=usuario.senha

        

        //verificar se já existe um email cadastrado
        if(verifica!='[]') {
            return res.status(400).json({error: "Email já cadastrado"});
        }
        else{
            if(!usuario.email || !usuario.telefone || !usuario.nome ||!usuario.senha || !usuario.endereco|| !usuario.numero || !usuario.bairro){
                return res.status(400).json({ err: "Preencha os campos corretamente!"});

            }
            else if(verificaSenha.length<8){
                return res.json({err:"Digite uma senha com pelo menos 8 caracteres"})


            }
            else{
                await app.database("usuario")
                .insert(usuario)
                .then(() => res.status(200).json({success: "Usuario cadastrado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
            }
        }

    }

    

    

    return { get, signup}
}