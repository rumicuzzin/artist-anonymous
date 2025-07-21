import react from 'react';
import GoButton from './common/GoButton.js';
import UsernamePasswordInputs from './common/UsernamePasswordInputs';

function UserLogin() {
    // Create state variables for each input
    const [username, setUsername] = react.useState('');  // Tracks username field
    const [password, setPassword] = react.useState('');  // Tracks password field  
    const [loading, setLoading] = react.useState(false); // Tracks if we're submitting
    const [errors, setErrors] = react.useState({});      // Tracks any error messages

    // Handle what happens when user types in username field
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);  // Update state with what they typed
        if (errors.username) {
            setErrors({...errors, username: ''});
        }
    };

    // Handle what happens when user types in password field
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('User wants to login with:', {
            username,
            password
        });

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const result = await response.json();
            console.log('Login successful:', result);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>

                {/* Reusable U/PW component */}
                <UsernamePasswordInputs 
                username={username}
                password={password}
                handleUsernameChange={handleUsernameChange}
                handlePasswordChange={handlePasswordChange}
                />

                <div className="mt-6 flex justify-center">
                    {/* Submit button */}
                    <GoButton 
                        type="submit" 
                        disabled={!username || !password}
                        loading={loading}
                        loadingText="Logging in..."
                    >
                        Login
                    </GoButton>
                </div>
                {errors.username && <p className="text-red-500 mt-2">{errors.username}</p>}
                {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
            
            </form>
        </div>
    );
}

export default UserLogin;
 