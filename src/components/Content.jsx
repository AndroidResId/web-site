import React from 'react';
import {Loader} from './Loader';
import {ListItem, List} from 'material-ui/List';

import {getContent} from '../services/contentService';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            content: null
        };

        this.getLinks(props.params.id);
    }

    getLinks = id => {
        getContent(id)
            .then(content => this.setState({id, links: content}));
    };

    shouldComponentUpdate = nextProps => nextProps.params.id !== this.state.id;

    componentWillUpdate = nextProps => this.getLinks(nextProps.params.id);

    handleLinkClick = link => {
        const win = window.open(link, '_blank');
        win.focus();
    };

    createList(links) {
        if (!links.length) {
            return <h5>No links found</h5>;
        }
        const linksComponents = links.map(link => (
            <ListItem
                key={link.id}
                onClick={this.handleLinkClick.bind(this, link.url)}
            >
                <div>{link.title}</div>
                <div>{link.desc}</div>
            </ListItem>
        ));
        return <List>{linksComponents}</List>
    }

    render() {
        return this.state.links ?
            this.createList(this.state.links) :
            <Loader/>;
    }
}

export default Content;