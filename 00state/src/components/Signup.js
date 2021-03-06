import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';
const Signup = (props) => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    state: props.address.state,
    address: props.address.address,
    city: props.address.city,
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);
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
    props.setAddress({address:formState.address, city:formState.city, state:formState.state})
    event.preventDefault();
   
    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });
      Auth.login(data.addProfile.token);
      navigate("/")
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your first name"
                  name="firstName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your last name"
                  name="lastName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your state"
                  name="state"
                  type="text"
                  value={formState.state}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your address"
                  name="address"
                  type="text"
                  value={formState.address}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your city"
                  name="city"
                  type="text"
                  value={formState.city}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Signup;
