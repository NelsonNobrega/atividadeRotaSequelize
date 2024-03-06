const express = require("express")
const app = express()

const Sequelize = require("sequelize")
const sequelize = new Sequelize("exemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})


const Agendamentos = sequelize.define("agendamentos",{    
    nome:{ 
        type: Sequelize.STRING    
    },    
    endereco:{        
        type: Sequelize.STRING    
    },    
    bairro:{       
        type: Sequelize.STRING    
    },    
    cep:{        
        type: Sequelize.STRING    
    },    
    cidade:{        
        type: Sequelize.STRING   
    },    
    estado:{        
        type: Sequelize.STRING    
    
    }})
    
    //Agendamentos.sync({force: true})
    
    app.get("/cadastrar", async function(req, res) {
        console.log("Página cadastrada")
        res.send("Dados Cadastrados")
        
        Agendamentos.create({
            nome: "Jeferson Roberto de Lima",
            endereco: "Av Aguia de Haia, 2500",
            bairro: "Jd São Nicolau",
            cep: "08390-000",
            cidade: "São Paulo",
            estado: "SP"
        })
      });


app.get("/listar", (req, res)=>{
    post.findAll().then(function (post) {
        res.send("Produtos" +JSON.stringify(post))
        console.log({post})
    }).catch(function (erro) {
        console.log("Erro ao carregar dados do banco: " + erro)
    })
})

app.get("/cadastrar/:produto", function (req, res) {
    post.create({
        produto: req.params.produto,
    }).then(function () {
        res.send("cadastrado com sucesso")
        console.log("cadastrado")
    }).catch(function (erro) {
        res.send("Falha ao cadastrar os dados: " + erro)
        console.log(erro)
    })
})

app.get("/teste/:produto", function (req, res) {
   res.send("Produto: " + req.params.produto)
   console.log("passou em ver")
})

app.listen(8081, ()=>{
    console.log("Rodando na porta 8081")
})