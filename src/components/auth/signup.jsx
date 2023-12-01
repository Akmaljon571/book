import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import google from '../../img/social-logos.svg'
import fb from '../../img/social-logos (1).svg'
import error from '../../img/x-circle.svg'
import './auth.scss'

function SignUp() {
    return (
        <div className="signup">
            <h1>Sign up</h1>
            <Button variant='outlined' className='auth-btn-google'>
                <img src={google} alt="Google Logo" />
                <span>Continue with Google</span>
            </Button>
            <Button variant='outlined' className='auth-btn-fb'>
                <img src={fb} alt="Google Logo" />
                <span>Continue with Google</span>
            </Button>
            <div className='or'>
                <hr />
                <span>or</span>
                <hr />
            </div>
            <form>
                <label className='err'>
                    <span>
                        Your name
                    </span>
                    <input type="text" placeholder='Enter your name' />
                    <img src={error} alt="Error Icon" />
                </label>
                <label>
                    <span>
                        Your Email
                    </span>
                    <input type="email" placeholder='Enter your email' />
                    <img src={error} alt="Error Icon" />
                </label>
                <label>
                    <span>
                        Your username
                    </span>
                    <input type="text" placeholder='Enter your username' />
                    <img src={error} alt="Error Icon" />
                </label>
                <Button className='btn' variant='contained'>Button</Button>
                <p>Already signed up? <Link to={'/singin'}>Go to sign in.</Link></p>
            </form>
        </div>
    );
}

export default SignUp;