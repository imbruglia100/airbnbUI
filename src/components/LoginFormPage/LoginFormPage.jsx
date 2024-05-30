import { useState } from 'react'
import './LoginFormPage.css'
import { useDispatch, useSelector } from 'react-redux';

const LoginFormPage = () => {
    const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data?.errors) setErrors(data.errors);
      }
    );
  };
    return(
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className='input-container'>
                <label>Username or Email</label>
                <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
            />
            </div>

            <div className='input-container'>
                <label>Password</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            {errors.credential && <p>{errors.credential}</p>}
            <button type='submit'>Login</button>
        </form>
    )
}

export default LoginFormPage
