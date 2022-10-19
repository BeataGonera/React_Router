import { Link } from 'react-router-dom';



export const Books = () => {



    return ( 

     
    <>
        <h1>Books</h1>

        <ul>
            <li><Link to="/books/0">Book 1</Link></li>
            <li><Link to="/books/1">Book 2</Link></li>
            <li><Link to="/books/2">Book 3</Link></li>
        </ul>

    </>
     );
}
 
