import React, {useState} from 'react';
// Import country select file 
import CountrySelect from './CountrySelect';
import GoButton from './common/GoButton.js'; 
import UsernamePasswordInputs from './common/UsernamePasswordInputs';
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
                <UsernamePasswordInputs 
                username={username}
                password={password}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                />
                
                <div>
                    <label htmlFor="country" className="text-green-400">Country:</label>
                    <CountrySelect 
                        value={country}
                        onChange={handleCountryChange}
                    />
                </div>

                <div className="mt-6 flex justify-center">
                    {/* Submit button */}
                    <GoButton 
                        type="submit" 
                        disabled={!username || !password || !country}
                        loading={loading}
                        loadingText="Registering..."
                        >
                        Join
                    </GoButton>
                </div>
            </form>
        </div>
    );
}
export default UserRegistration;
