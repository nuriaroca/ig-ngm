import React from 'react';
import CardPost from '../components/CardPost';
import CardFilter from './CardFilter';
import filters from '../data/filters';

const Body = ({ step, posts, image, setFilter, handleLikes, setCaption, filter }) => {
  return (
    <main>
      <h2>Body in step {step} </h2>
      {step === 1 && <div className="posts">{posts.map((post, index) => <CardPost key={post.id} post={post} handleLikes={handleLikes}/>)}</div>}
      {step === 2 && <div className="filter-container">{filters.map((filter => <CardFilter key={filter.name} image={image} filter={filter} setFilter={setFilter} />))}</div>}
      {step === 3 && 
        <>
          <div className="selected-image">
            <div className={filter}>
              <img className="img" src={image} alt="" />
            </div>
          </div>
          <div clas="caption-container">
            <textarea 
              className="caption-input"
              type="text"
              onChange={(ev) => setCaption(ev.target.value)}
              placeholder="Write a caption..."
            >
            </textarea>
          </div>
        </>
      }
    </main>
  );
};

export default Body;