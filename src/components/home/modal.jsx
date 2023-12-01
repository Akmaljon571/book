import * as React from 'react';
import { useContext } from "react";
import { Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { State } from "../../context";
import x_icon from '../../img/search-x.svg'
import link from '../../img/icons.svg'
import calendar from '../../img/icons (1).svg'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Modal() {
    const { modal, setModal } = useContext(State)
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);

        setTimeout(() => {
            setOpen(false);
        }, 2000);
        closeModal()
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const closeModal = () => {
        setModal({ status: "none" })
    }

    return (
        <>
            <div className={modal.status === 'none' ? "none" : "modal"}>
                <span onClick={closeModal} className="fixed"></span>
                <div className="content">
                    <h1>
                        Create a book
                        <img onClick={closeModal} src={x_icon} alt="Close Icon" />
                    </h1>
                    <form>
                        <label>
                            <span>Title</span>
                            <input type="text" placeholder="Enter your title" />
                        </label>
                        <label>
                            <span>Author</span>
                            <input type="text" placeholder="Enter your author" />
                        </label>
                        <label className="yes_img">
                            <span>Cover</span>
                            <img src={link} alt="Cover Icon" />
                            <input type="text" placeholder="Enter your cover" />
                        </label>
                        <label className="yes_img">
                            <span>Published</span>
                            <img src={calendar} alt="Cover Icon" />
                            <input type="text" placeholder="Enter your published" />
                        </label>
                        <label>
                            <span>Pages</span>
                            <input type="text" placeholder="Enter your pages" />
                        </label>
                    </form>
                    <div>
                        <Button className="close" onClick={closeModal} variant="outlined">Close</Button>
                        <Button onClick={handleClick} variant="contained" className="btn">Submit</Button>
                    </div>
                </div>
            </div>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} className='notification' open={open} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Pulvinar facilisis cras ac a amet augue vel egestas urna. Neque habitant consectetur amet.</p>
                </Alert>
            </Snackbar>
        </>
    );
}

export default Modal;