import React from 'react';

export const NavRow = React.createClass({
    render: function () {
        const resList = this.props.resList;
        const resRowTemplate = resList.map(function (item, index) {
            return (
                <div key={index}>
                    <a className="mdl-navigation__link" href={item.resUrl}>{item.id}. {item.resName}</a>
                </div>
            )
        });

        return (
            <div>
                {resRowTemplate}
            </div>
        );
    }
});

export default NavRow;