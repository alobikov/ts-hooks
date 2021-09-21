import React from 'react';
import {useFetch} from "../hooks/useFetch";
import {IPost} from "./Posts";

const URL = 'https://jsonplaceholder.typicode.com/posts?_page-size=10'

const PostList = ({page}: {page: number}) => {
    console.log('Postlist page: ',page)
    const {data, loading, error} = useFetch<IPost[]>({url: URL, page})
    return (
        <div>
            { loading && "Data is loading..."}
            { error && `Error: ${error}`}
            {
                data
                    ? data.map(post => (
                        <div key={post.id}>{`${post.id}: ${post.title}`}</div>
                    ))
                    : null
            }
        </div>
    );
};

export default PostList;
