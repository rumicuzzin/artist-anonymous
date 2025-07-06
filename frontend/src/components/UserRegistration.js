import React, {useState} from 'react';

// This is the User Registration component

function UserRegistration() {

    // Create state variables for each input
    const [username, setUsername] = useState('');     // Tracks username field
    const [password, setPassword] = useState('');     // Tracks password field  
    const [country, setCountry] = useState('');       // Tracks country field
    const [loading, setLoading] = useState(false);    // Tracks if we're submitting
    const [errors, setErrors] = useState({});         // Tracks any error messages

        // Handle what happens when user types in username field
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);  // Update state with what they typed
        // Clear any previous username error
        if (errors.username) {
            setErrors({...errors, username: ''});
        }
    };

    // Handle what happens when user types in password field
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle what happens when user types in country field
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // CRUCIAL: Prevent page refresh
        
        // Now you have access to all the form data!
        console.log('User wants to register with:', {
            username,
            password, 
            country
        });
        
        // TODO: Send this data to your Python backend
    };
    return (
        <div className="user-registration">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>  {/* ← Connect submit handler */}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username}                    // ← React controls the value
                        onChange={handleUsernameChange}    // ← React handles changes
                        required 
                    />
                    {/* This is conditional logic, {} means Javascript code inside jsx
                    username && checks if there is a value storred in username*/}
                    {username && <p>✓ Username: {username}</p>}
                </div>
                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}                    // ← React controls the value
                        onChange={handlePasswordChange}    // ← React handles changes
                        required 
                    />
                    {/* Show password strength */}
                    {password && (
                        <p>{password.length < 6 ? '⚠️ Too short' : '✓ Good length'}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="country">Country:</label>
                    <input 
                        type="text" 
                        id="country" 
                        value={country}                     // ← React controls the value
                        onChange={handleCountryChange}     // ← React handles changes
                        required 
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={!username || !password || !country}  // ← Smart button!
                >
                    {loading ? 'Creating Account...' : 'Register'}
                </button>
            </form>
        </div>
    );
}
export default UserRegistration;
