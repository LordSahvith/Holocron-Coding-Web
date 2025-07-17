import { useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import articles from '../components/data/article-content';
import useUser from '../lib/useUser';

async function loader({ params }) {
  const response = await axios.get(`/api/articles/${params.name}`);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}

function ArticlePage() {
  const { name } = useParams();
  const { upvotes: initialUpvotes, comments: initialComments } =
    useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [comments, setComments] = useState(initialComments);

  const { user } = useUser();

  const article = articles.find(article => article.name === name);

  if (!article) throw Error('Article not found');

  const onUpvoteClicked = async function () {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(`/api/articles/${name}/upvote`, null, {
      headers,
    });
    const updatedArticleData = response.data;
    console.log(updatedArticleData);
    setUpvotes(updatedArticleData.upvotes);
  };

  const onAddComment = async function ({ nameText, commentText }) {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `/api/articles/${name}/comments`,
      {
        postedBy: nameText,
        text: commentText,
      },
      { headers }
    );
    const updatedArticleData = response.data;
    setComments(updatedArticleData.comments);
  };

  return (
    <>
      <h1>{article.title}</h1>
      {user && <button onClick={onUpvoteClicked}>Upvote!</button>}

      <p>This article has {upvotes} upvotes!</p>
      {article.content.map(paragrph => (
        <p key={paragrph}>{paragrph}</p>
      ))}
      {user ? (
        <AddCommentForm onAddComment={onAddComment} />
      ) : (
        <p>Log in to add a comment</p>
      )}
      <CommentsList comments={comments} />
    </>
  );
}

export default ArticlePage;
export { loader };
