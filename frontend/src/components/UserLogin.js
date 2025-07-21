import react from 'react';

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
                <div>
                    <label htmlFor="username" className="text-green-400"> Username:</label>
                    <input 
                        type="text" 
                        className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded focus:border-green-400 focus:outline-none"
                        id="username"
                        value={username} 
                        onChange={handleUsernameChange}
                        required
                        
                    />
                    <label htmlFor="password" className="text-green-400"> Password: </label>
                    <input 
                        type="password"
                        className="w-full p-2 bg-gray-800 text-green-400 border border-green-500 rounded focus:border-green-400 focus:outline-none" 
                        id="password"
                        value={password} 
                        onChange={handlePasswordChange}
                        required
            
                    />
                </div>
            
                <div className="mt-6 flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-black font-semibold hover:bg-green-700 rounded transition-colors"
                        disabled={loading}  // Disable button while loading
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </div>
                {errors.username && <p className="text-red-500 mt-2">{errors.username}</p>}
                {errors.password && <p className="text-red-500 mt-2">{errors.password}</p>}
            
            </form>
        </div>
    );
}

export default UserLogin;
 