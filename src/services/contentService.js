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
    return Promise.resolve([
        {
            text: 'Menu Item 1',
            id: 'article_1'
        },
        {
            text: 'Menu Item 2',
            id: 'article_2'
        }
    ]);
};

export {getLinks, getContent};