export const Book2 = ({book2}) => {

    return ( 
        <div>
            <h1>{`Book: ${book2?.id}`}</h1>
            <ul>
                <li>{book2?.title}</li>
                <li>{book2?.author}</li>
            </ul>
        </div>

     )
}