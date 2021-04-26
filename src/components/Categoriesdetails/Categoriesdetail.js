import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const Categoriesdetail = (props) => {
    // const category = useContext(categoryContext);
    // const {count} = props;
    const {name} =props.product;
    console.log({name});
    return (
        <div>
            <h5>this is category details</h5>
            <p>selected product:{name}</p>
        </div>
    );
};

export default Categoriesdetail;