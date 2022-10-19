export const Book3 = ({book3}) => {

    return ( 
        <div>
            <h1>{`Book: ${book3?.id}`}</h1>
            <ul>
                <li>{book3?.title}</li>
                <li>{book3?.author}</li>
            </ul>
        </div>

     )
}