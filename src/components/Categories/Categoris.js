import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import Categoriesdetail from '../Categoriesdetails/Categoriesdetail';
const allProducts = [{name:'Lenevo',category:'laptop'},
                  {name:'Dell',category:'laptop'},
                  {name:'Asus',category:'laptop'},
                  {name:'Samsung',category:'phone'},
                  {name:'Oppo',category:'phone'},
                  {name:'Poco',category:'phone'},
                  {name:'Sony',category:'camera'},
                  {name:'Nikon',category:'camera'},
                  {name:'Cannon',category:'camera'}

                ]
const Categoris = () => {
    const [category] = useContext(categoryContext);
    const  [products,setProducts] = useState([]);
    useEffect(()=>{
        console.log({category});
   const matchProducts = allProducts.filter(pd=>pd.category.toLowerCase()===category.toLowerCase());
   setProducts(matchProducts);
    },[category])
    
    return (
        <div>
            <h4>category is {category}</h4>
        {
            products.map(pd=> <Categoriesdetail product={pd}></Categoriesdetail>)
        }
        </div>
    );
};

export default Categoris;