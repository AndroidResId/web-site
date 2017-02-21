import React, {PropTypes} from 'react';

const NavRow = React.createClass({
    render: function() {
        const resList = this.props.resList;
        const resRowTemplate = resList.map((item, index) => (
            <div key={index}>
                <a className="mdl-navigation__link" href={item.resUrl}>{item.id}. {item.resName}</a>
            </div>
        ));

        return (
            <div>
                {resRowTemplate}
            </div>
        );
    }
});

NavRow.propTypes = {
    resList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        resName: PropTypes.string,
        resUrl: PropTypes.string
    }))
};

export default NavRow;