module.exports = (app) => {
    const get = async (req, res) => {
        const comercio = await app.database("comercio").select("*");

        return res.json(comercio);
    }

    

    const signup = async (req, res) => {
        
        const comercio = { ...req.body };
        const query=await app.database("usuario").select("email").where({email:comercio.idUsuario});
        const verifica=JSON.stringify(query);
        if(verifica=='[]'){
            return res.status(400).json({error: "Email não cadastrado"});
        }
        else if(!comercio.nome ||!comercio.cpf || !comercio.bairro || !comercio.rg || !comercio.cnpj || !comercio.endereco || !comercio.numero || !comercio.idUsuario){
                return res.status(400).json({ err: "Preencha os campos obrigatórios corretamente"});

            }
        else{
                await app.database("comercio")
                .insert(comercio)
                .then(() => res.status(200).json({success: "comercio cadastrado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
            }
        }


    

    return { get, signup}
}