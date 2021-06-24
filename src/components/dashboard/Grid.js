import React from 'react';
import { Grid as MUIGrid } from '@material-ui/core';

const Grid = (props) => {

    return (
        <MUIGrid container spacing={2} alignItems={'center'}>
            {/* {renderGrid()} */}
            { props.children }
        </MUIGrid>
    );
}

export default Grid