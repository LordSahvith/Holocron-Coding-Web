import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h1>Page Not Found</h1>
      <p>This is not the page you are looking for.</p>
      <Link to="/">Home Page</Link>
    </>
  );
}
