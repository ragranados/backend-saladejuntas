/**
 * This methods removes the specified Attributed in attrArray param from a MongoDB doc.
 * @param attrArray
 * @param thisAttr
 * @returns {{}}
 */
exports.eliminateAttrFromDoc = (attrArray, thisAttr) => {
    const notWantedAttr = attrArray;
    const modifiedDocument = {}

    Object.keys(thisAttr._doc).forEach(function getPublicAttributes(element) {

        if (!notWantedAttr.includes(element)) {
            modifiedDocument[element] = this[element];
        }

    }, thisAttr);

    return modifiedDocument;
}

exports.ordenarItemsParaMostrar = (listaItems) => {

    let arrayFinal = [];

    const agrupados = listaItems.reduce((group, product) => {
        const {id} = product;
        group[id] = group[id] ?? [];
        group[id].push(product);
        return group;
    }, {});

    console.log("agrupados", agrupados);

    return agrupados;

}
