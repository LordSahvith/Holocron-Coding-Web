import { useState } from 'react';
import PropTypes from 'prop-types';

function AddCommentForm({ onAddComment }) {
  const [nameText, setNameText] = useState('');
  const [commentText, setCommentText] = useState('');

  return (
    <div>
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={nameText}
          onChange={event => setNameText(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <input
          type="text"
          value={commentText}
          onChange={event => setCommentText(event.target.value)}
        />
      </label>
      <button
        onClick={() => {
          onAddComment({ nameText, commentText });
          setNameText('');
          setCommentText('');
        }}
      >
        Add Comment
      </button>
    </div>
  );
}

AddCommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
};

export default AddCommentForm;
