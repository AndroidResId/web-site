import * as firebase from 'firebase';
import * as _ from 'lodash';

const createChildCategory = (item, items) => {
    return {
        id: item.id + '',
        text: item.title,
        sub: _.chain(items)
            .filter(si => si.parentId === item.id)
            .map(i => createChildCategory(i, items))
            .value()
    };
};

/**
 * @typedef {{}} Link
 * @param {string} text
 * @param {string} id
 */
/**
 * Get links for drawer
 * @returns {Promise.<[Array.<Link>,*]>}
 */
const getLinks = () => {
    return firebase.database()
        .ref('/items/')
        .once('value')
        .then(snapshot => {
            const items = snapshot.val();
            return _.chain(items)
                .filter(i => i.parentId === -1)
                .map(i => createChildCategory(i, items))
                .value();
        });
};

const getContent = (id) => {
    return firebase.database()
        .ref('/links/')
        .orderByChild('categoryId')
        .equalTo(Number(id))
        .once('value')
        .then(snapshot => _.values(snapshot.val()));
};

export {getLinks, getContent};