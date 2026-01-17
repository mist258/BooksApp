import type { FC } from "react";
import type { IBook } from "../../interfaces/bookInterfaces";

interface BookProps {
    item: IBook
}

export const Book: FC<BookProps> = ({item}) => {
    let {name, author, imgUrl, genre, rating, description} = item
    return (
        <>
        <div>name: {name}</div>
        <div>author: {author}</div>
        <div>imgUrl: {imgUrl}</div>
        <div>genre: {genre}</div>
        <div>rating: {rating}</div>
        <div>description: {description}</div>
        <br/>
        </>
    )
}