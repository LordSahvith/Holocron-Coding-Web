import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ArticlesList({ articles }) {
  return (
    <>
      {articles.map(article => (
        <Link key={article.name} to={`/articles/${article.name}`}>
          <h2>{article.title}</h2>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.object.isRequired,
};
