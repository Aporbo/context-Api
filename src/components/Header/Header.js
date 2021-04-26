import React, { useContext,} from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [count,setCount]=useContext(categoryContext);
    return (
        <div>
            <h1>This is Header : {count} </h1>
            <button onClick={()=>setCount('laptop')}  >laptop</button>
            <button onClick={()=>setCount('camera')}  >Camera</button>
            <button onClick={()=>setCount('phone')}  >Phone</button>
        </div>
    );
};

export default Header;