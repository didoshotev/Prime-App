import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid as MUIGrid } from '@material-ui/core';
import GridItem from './GridItem';
import LocalService from '../../services/services';
import { useState } from 'react';
import { useEffect } from 'react';

const Grid = (props) => {
    

    const renderGrid = () => {
        return (
            props.developers.map(dev => {
                return (
                    <MUIGrid item xs={12} sm={6} md={4}  key={dev.id}>
                        <GridItem  {...dev} />
                    </MUIGrid>
                )
            })
        )
    }


    return (
        <MUIGrid container spacing={2} alignItems={'center'}>
            {renderGrid()}
        </MUIGrid>
    );
}

export default Grid