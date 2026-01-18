import { useState, useEffect } from "react"
import type { IBook } from "../../interfaces/bookInterfaces"
import { Books } from "../Books/Books"
import { listOfBooks} from "../../Data/BooksData"
import { BookDetails } from "../BooksDetail/BookDetails"


export const BooksApp = () => {

    const [books, setBooks] = useState<IBook[]>(listOfBooks)
    const [selectedBookId, setSelectedBookId] = useState<string | null>(null)
    const [filter, setFilter] = useState("")

    // component mounted
    useEffect(() => {
        console.log("BooksApp mounted");
    }, [])

    // component updated 
    useEffect(() => {
        console.log("BooksApp changed");
    }, [books, filter, selectedBookId])

    const filteredBooks = books.filter(
        book => book.id.includes(filter) ||
        book.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        book.author.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (

       <div>
            {
            selectedBookId === null ? (
            <>
                <input
                    type="text"
                    placeholder="Filter by id, name, author"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
                <Books
                    books={filteredBooks}
                    onSelect={setSelectedBookId}
                />
            </>

        ) : (
                <BookDetails
                book={books.find(b => b.id === selectedBookId)!}
                onBack={() => setSelectedBookId(null)}
                />
        )
       } 
        </div>
    )
}