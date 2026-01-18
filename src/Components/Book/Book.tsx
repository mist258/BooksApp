import type { FC } from "react";
import type { IBook } from "../../interfaces/bookInterfaces";
import css from './book.module.css'

interface BookProps {
    item: IBook,
    onSelect: (id: string) => void;

}

export const Book: FC<BookProps> = ({item, onSelect}) => {

    let {name, author, imgUrl, genre, rating} = item


    return (
        <>
        <div className={css.Book}>
            <img src={imgUrl} alt={name} width={270} />
            <div>rating: {rating}</div>
            <div>{name}</div>
            <div>Genre: {genre}</div>
            <div>{author}</div>
            <button onClick={() => onSelect(item.id)}>Next</button>
        </div>
      
        </>
    )
}