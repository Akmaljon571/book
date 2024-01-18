import del from '../../img/trash-01.svg'
import edit from '../../img/edit-04.svg'
import { Button } from '@mui/material';

function List() {
    return (
        <ul className="list">
            <li>
                <h3 className='title'>Raspberry Pi User Guide</h3>
                <p className="text">Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.</p>
                <div className='bottom'>
                    <p>
                        Eben Upton: 2012-year
                    </p>
                    <span>
                        211 pages
                    </span>
                </div>
                <div className='icon'>
                    <Button className='del' variant='contained'>
                        <img src={del} alt="Delete Icon" />
                    </Button>
                    <Button className='edit' variant='contained'>
                        <img src={edit} alt="Edit Icon" />
                    </Button>
                </div>
            </li>
        </ul>
    );
}

export default List;