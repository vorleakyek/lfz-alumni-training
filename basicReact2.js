import React, { useState } from 'react';
import './App.css';
import 'h8k-components';
import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {
    const [sortArt, setSortArt] = useState(articles);

    function handleUpvoted() {
        const sortedArticles = [...articles].sort((a, b) => b.upvotes - a.upvotes);
        setSortArt(sortedArticles);
        console.log('sort', sortedArticles);
    }

    function handleRecent() {
        const sortedArticles = [...articles].sort((a,b)=>b.dates-a.dates);
        setSortArt(sortedArticles);
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div>
                <label>Sort By</label>
                <button onClick={handleUpvoted}>Most Upvoted</button>
                <button onClick={handleRecent}>Most Recent</button>
            </div>
            <Articles articles={sortArt} />
        </div>
    );
}


function Articles({articles}) {
    console.log(articles)

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {articles.map((item,index)=>{ 
                    return(
                    <tr data-testid="article" key={`article-${index}`}>
                    <td>{item.title}</td>
                    <td>{item.upvotes}</td>
                    <td>{item.date}</td>
                    </tr>
                    )    
                })}
                
                </tbody>
            </table>
        </div>
    );

}

export default Articles;

