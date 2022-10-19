import { useEffect, useState } from "react"

export const BookList  = () => {

    const[books, setBooks] = useState([])
    useEffect(() => {
    fetch("http://localhost:3002/books")
        .then((response) => response.json())
        .then((books) => {
            console.log(books)
            setBooks(books)}
            )
        }, [])


    return ( 

        <div>
            <h1>{`Book: ${books[0]?.id}`}</h1>
            <ul>
                <li>{books[0]?.title}</li>
                <li>{books[0]?.author}</li>
            </ul>
        </div>

     )
}
 
