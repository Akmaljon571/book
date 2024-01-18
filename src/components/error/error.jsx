import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import error from '../../img/error.png'
import './error.scss'

function Error() {
    const navigate = useNavigate()

    return (
        <div className='error'>
            <img src={error} alt="Error_Photo" />
            <div>
                <Button variant='contained' onClick={() => navigate('/')} className='btn'>Go Home Page</Button>
                <Button variant='outlined' onClick={() => window.location.reload(true)} className='outline'>Reload Page</Button>
            </div>
        </div>
    );
}

export default Error;