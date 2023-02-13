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
