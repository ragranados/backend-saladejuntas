const {Sequelize} = require('sequelize');

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME;

const uri = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`
const SYNCDB = process.env.SYNCDB ? true : false;

const sequelize = new Sequelize(uri, {
    logging: SYNCDB
});

sequelize.authenticate(uri)
    .then(() => {
        console.log('Successfull')
    })

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Producto = require("../models/product.model")(sequelize);
db.Categoria = require("../models/categoria.model")(sequelize);
db.SubCategoria = require("../models/subCategoria.model")(sequelize);

db.sync = async () => {

    //let alter = process.env.SYNCDB ? true : false;

    try {
        if (SYNCDB) {
            await sequelize.sync({alter: true});

            console.log('Tables Sync!')
        }
    } catch (e) {
        console.error("Error al conectar base", e);
    }

}

module.exports = db;
