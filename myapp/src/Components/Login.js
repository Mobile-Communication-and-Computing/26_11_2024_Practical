export default function Login (){
    return(
        <div>
            <h1>Login here</h1>
            <table>
                <tr>
                    <td>Username:</td>
                    <td><input type="text" name="username" /></td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td><input type="password" name="pwd" /></td>
                </tr>
            </table>
            <button>Login</button>
        </div>
    );
}