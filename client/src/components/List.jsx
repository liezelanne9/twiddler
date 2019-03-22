import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = (props) => {
    return (
        <div>
            <h4 id="newTweets">New Tweets</h4>
            <div>
                {props.postedThoughts.map(post => <ListEntry post={post}/>)}
            </div>
        </div>
    )
}


export default List;