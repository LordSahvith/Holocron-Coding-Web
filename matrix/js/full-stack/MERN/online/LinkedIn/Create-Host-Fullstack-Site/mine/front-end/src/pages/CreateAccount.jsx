import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function CreateAccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function createAccount() {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate('/articles');
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <h1>Create Account</h1>
      {error && <p>{error}</p>}

      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={event => setConfirmPassword(event.target.value)}
      />
      <button onClick={createAccount}>Create Account</button>
      <p>
        Already have an account? <Link to="/login">Sign in</Link>.
      </p>
    </>
  );
}

export default CreateAccountPage;
