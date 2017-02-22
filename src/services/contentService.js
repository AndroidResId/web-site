import * as firebase from 'firebase';
import * as _ from 'lodash';

/**
 * Get article content by Id
 * @param {string} articleId
 * @returns {Promise.<string, *>}
 */
const getContent = (articleId) => {
    switch (articleId) {
        case 'about':
            return Promise.resolve('Information about us');
        case 'article_1':
            return Promise.resolve('Some text for article number 1');
        case 'article_2':
            return Promise.resolve('Another text for article number 2');
        default:
            return Promise.resolve('Article Id not found :(');
    }
};

const createChildCategory = (item, items) => {
    return _.assign({
        id: item.id + '',
        text: item.title,
        sub: _.chain(items)
            .filter(si => si.parentId === item.id)
            .map(i => createChildCategory(i, items))
            .value()
    });
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

export {getLinks, getContent};