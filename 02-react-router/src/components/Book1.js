
export const Book1 = ({book1}) => {

    return ( 
        <div>
            <h1>{`Book: ${book1?.id}`}</h1>
            <ul>
                <li>{book1?.title}</li>
                <li>{book1?.author}</li>
            </ul>
        </div>

     )
}
 
