import React from 'react'
import PostList from "./PostList";


export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}


const Post = () => {
    const [page, setPage] = React.useState(1)
    console.log('Post')

    const prevPage = () => {
        if (page <= 1) return setPage(1)
        setPage((prev)=> prev-1)
    }

    const nextPage = () => {
        setPage(prev => prev+1)
    }
    return (
        <section>
            <button onClick={prevPage}>Prev 10</button>
            <span style={{padding: '6px'}}>page:{page}</span>
            <button onClick={nextPage}>Next 10</button>
            <PostList page={page} />
        </section>
    );
};

export default Post;
