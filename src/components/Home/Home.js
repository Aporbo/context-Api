import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Categoris from '../Categories/Categoris';
const Home = () => {
  const category = useContext(categoryContext);
    return (
        <div>
            <h1>this is home {category}</h1>
            <Categoris></Categoris>
        </div>
    );
};

export default Home;