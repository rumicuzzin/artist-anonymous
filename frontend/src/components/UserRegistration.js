import React, {useState} from 'react';
// Import country select file 
import CountrySelect from './CountrySelect';
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

    // Handle what happens when user selects a country
    const handleCountryChange = (selectedOption) => {
        setCountry(selectedOption);  // Gets the selected country object
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Now you have access to all the form data!
        console.log('User wants to register with:', {
            username,
            password, 
            country
        })

         // This connects with the API backend to register the user
        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    country
                })
            });

            const result = await response.json();
            console.log('Registration successful:', result);
            
            // Optional: Clear the form after successful registration
            setUsername('');
            setPassword('');
            setCountry('');
            
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };


    return (
        <div className="user-registration">
            <form onSubmit={handleSubmit}>  {/* ← Connect submit handler */}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded focus:border-green-400 focus:outline-none"
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
                        className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded focus:border-green-400 focus:outline-none"
                        id="password" 
                        value={password}                    // ← React controls the value
                        onChange={handlePasswordChange}    // ← React handles changes
                        required 
                    />
                    {/* Show password strength */}
                    {password && (
                        <p>{password.length < 6 ? 'Too short' : 'Fine'}</p>
                    )}
                </div>
                
                <div>
                    <label htmlFor="country">Country:</label>
                    <CountrySelect 
                        value={country}
                        onChange={handleCountryChange}
                    />
                </div>

                <div className="mt-6 flex justify-center">
                    {/* Submit button */}
                    <button 
                        type="submit" 
                        disabled={!username || !password || !country}
                        className={`
                        px-4 py-2 
                        font-mono font-bold text-lg
                        rounded-lg
                        transition-all duration-300 
                        transform hover:scale-105
                        ${!username || !password || !country 
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed border border-gray-600' 
                            : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black border border-green-400 hover:shadow-lg hover:shadow-green-500/25'
                        }
                        `}
                    >
                        {loading ? (
                        <div className="flex items-center space-x-2">
                            <div className="animate-spin w-5 h-5 border-2 border-black border-t-transparent rounded-full"></div>
                            <span>Creating Account...</span>
                        </div>
                        ) : (
                        'Go'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
export default UserRegistration;
