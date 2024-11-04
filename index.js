const express = require('express');  
const bodyParser = require('body-parser');  
const sequelize = require('./config/database');  

const clientesRoutes = require('./routes/clientes');  
// Importe outras rotas aqui  

const app = express();  
app.use(bodyParser.json());  
app.use('/api/clientes', clientesRoutes);  
// Use outras rotas aqui  

// Sincronizar com o banco de dados  
sequelize.sync()  
  .then(() => {  
    console.log('Banco de dados sincronizado.');  
  })  
  .catch((error) => {  
    console.error('Erro ao sincronizar o banco de dados:', error);  
  });  

app.listen(3000, () => {  
  console.log('API rodando na porta 3000.');  
});

// models/Cidade.js  
const { DataTypes } = require('sequelize');  
const sequelize = require('../config/database');  

const Cidade = sequelize.define('Cidade', {  
    id: {  
        type: DataTypes.INTEGER,  
        autoIncrement: true,  
        primaryKey: true,  
    },  
    nome: {  
        type: DataTypes.STRING(100),  
        allowNull: false,  
    },  
    estado: {  
        type: DataTypes.STRING(100),  
        allowNull: false,  
    },  
});  

module.exports = Cidade;

// index.js  

const express = require('express');  
const app = express();  
const cidadesRoutes = require('./routes/cidades');  
const pedidosRoutes = require('./routes/pedidos');  
const produtosRoutes = require('./routes/produtos');  
const pedidosProdutoRoutes = require('./routes/pedidosProduto');  

app.use(express.json()); // Para analisar o corpo da solicitação como JSON  

// Usar as rotas  
app.use('/api/cidades', cidadesRoutes);  
app.use('/api/pedidos', pedidosRoutes);  
app.use('/api/produtos', produtosRoutes);  
app.use('/api/pedidosProduto', pedidosProdutoRoutes);  

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {  
    console.log(`Servidor rodando na porta ${PORT}`);  
});