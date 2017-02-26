import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = () => {
    return <CircularProgress style={{
        position: 'absolute',
        top: 'calc(50% - 20px)',
        left: 'calc(50% - 20px)'
    }}/>;
};

export {Loader};