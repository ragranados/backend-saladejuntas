const {Sequelize} = require('sequelize');

const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME;

const uri = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`
const SYNCDB = process.env.SYNCDB ? true : false;

const sequelize = new Sequelize(uri, {
    logging: SYNCDB,
    dialectOptions: {
        useUTC: false, // for reading from database
    },
    timezone: '-06:00', // for writing to database
});

sequelize.authenticate(uri)
    .then(() => {
        console.log('Successfull')
    })

const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//instancias modelos

db.Producto = require("../models/product.model")(sequelize);
db.Categoria = require("../models/categoria.model")(sequelize);
db.SubCategoria = require("../models/subCategoria.model")(sequelize);
db.Mesa = require("../models/mesa.model")(sequelize);
db.MetodoPago = require("../models/metodoPago.model")(sequelize);
db.EstadoOrden = require("../models/estadoOrden.model")(sequelize);

db.ItemOrden = require("../models/itemOrden.model")(sequelize);
db.Orden = require("../models/orden.model")(sequelize);

//asociations

db.Categoria.hasMany(db.SubCategoria);

db.SubCategoria.belongsTo(db.Categoria);
db.SubCategoria.hasMany(db.Producto);

db.Producto.belongsTo(db.SubCategoria);

db.Producto.belongsToMany(db.Orden, {through: db.ItemOrden});
db.Orden.belongsToMany(db.Producto, {through: db.ItemOrden});

db.Producto.hasMany(db.ItemOrden);
db.ItemOrden.belongsTo(db.Producto);

db.Orden.hasMany(db.ItemOrden);
db.ItemOrden.belongsTo(db.Orden);

db.Orden.belongsTo(db.Mesa);
db.Mesa.hasOne(db.Orden);

db.Orden.belongsTo(db.MetodoPago);
db.MetodoPago.hasOne(db.Orden);

db.Orden.belongsTo(db.EstadoOrden);
db.EstadoOrden.hasOne(db.Orden);

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
