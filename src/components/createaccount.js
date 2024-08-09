import React, { useState, useContext } from 'react';
import { UserContext, Card } from '../context'; // Assuming Card and UserContext are exported from context

export function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(UserContext);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label} is required`);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(name, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    if (!emailRegex.test(email)) {
      setStatus('Error: Please enter a valid email address');
      setTimeout(() => setStatus(''), 3000);
      return;
    }
    if (password.length < 8) {
      setStatus('Error: Password must be at least 8 characters');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    if (ctx) {
      ctx.users.push({ name, email, password, balance: 1000 });
      setStatus('You have created your account');
      setShow(false);
    } else {
      console.error('UserContext is not available');
    }
  }

  function clearForm() {
    setName('');
    setEmail('');
    setPassword('');
    setStatus('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
        <>
          Name<br />
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          /><br />
          Email address<br />
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          /><br />
          Password<br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
          /><br />
          <button type="button" className="btn btn-light" onClick={handleCreate}>Create Account</button>
        </>
      ) : (
        <>
          <h5>Success</h5>
          <button type="button" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
      )}
    />
  );
}
