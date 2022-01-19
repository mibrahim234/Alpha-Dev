import React, { useState } from 'react';
// we already have functionality for capturing form field data from a user and storing it in state using the useState() Hook 
import { useMutation } from '@apollo/client';
// useMutation() Hook creates and prepares a JavaScript function that wraps around our mutation code and returns it to us
// ^^will return in the form of the addUser function 
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
// auth from utils folder to store token


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

  // use try/catch instead of promises to handle errors
    try {
  // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState },
      });

      //  take the token and set it to localStorage.
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
// Now when you sign up successfully, you'll be redirected to the homepage with your token stored in localStorage

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header"></h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />

                    {/* <p className='mb-5 py-2'>Are you a Developer or a Company?  </p> */}
                    <select className="text-center btn d-block w-100" name="Role">
                        <option value="Developer">Developer</option>
                        <option value="Company">Company</option>
                        
                        </select>
                       

              <button className="btn d-block w-100 mb-5" type="submit">
                Signup
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

// if there's an error, we'll see a <div> element with a message saying so.
export default Signup;
