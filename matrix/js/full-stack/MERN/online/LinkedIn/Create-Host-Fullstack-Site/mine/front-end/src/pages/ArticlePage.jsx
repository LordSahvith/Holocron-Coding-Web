import { useParams } from 'react-router-dom';
import articles from '../components/data/article-content';

export default function ArticlePage() {
  const { name } = useParams();

  const article = articles.find(article => article.name === name);

  if (!article) throw Error('Article not found');

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map(paragrph => (
        <p key={paragrph}>{paragrph}</p>
      ))}
    </>
  );
}
