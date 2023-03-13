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

db.ItemSubCuenta = require("../models/itemSubCuenta.model")(sequelize);
db.SubCuenta = require("../models/subCuenta.model")(sequelize);
db.Cuenta = require("../models/cuenta.model")(sequelize);

//asociations

db.Categoria.hasMany(db.SubCategoria);

db.SubCategoria.belongsTo(db.Categoria);
db.SubCategoria.hasMany(db.Producto);

db.Producto.belongsTo(db.SubCategoria);

db.Producto.belongsToMany(db.SubCuenta, {through: db.ItemSubCuenta});
db.SubCuenta.belongsToMany(db.Producto, {through: db.ItemSubCuenta});

db.Producto.hasMany(db.ItemSubCuenta);
db.ItemSubCuenta.belongsTo(db.Producto);

db.SubCuenta.hasMany(db.ItemSubCuenta);
db.ItemSubCuenta.belongsTo(db.SubCuenta);

db.Cuenta.hasOne(db.Mesa);
db.Mesa.belongsTo(db.Cuenta);

db.Cuenta.hasMany(db.SubCuenta);
db.SubCuenta.belongsTo(db.Cuenta);

db.SubCuenta.belongsTo(db.MetodoPago);
db.MetodoPago.hasOne(db.SubCuenta);

db.SubCuenta.belongsTo(db.EstadoOrden);
db.EstadoOrden.hasOne(db.SubCuenta);

db.Cuenta.belongsTo(db.EstadoOrden);
db.EstadoOrden.hasOne(db.Cuenta);

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
