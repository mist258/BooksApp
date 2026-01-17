import { listOfBooks } from "../../Data/BooksData";
import { Book } from "./Book";

export const Books = () => {
    return (
        <>
        <div>
            {listOfBooks.map(book => <Book item={book} />)}
        </div>
        </>
    )
}