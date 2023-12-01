import { useContext } from "react";
import { State } from "../../context";
import x_icon from '../../img/search-x.svg'
import link from '../../img/icons.svg'
import calendar from '../../img/icons (1).svg'
import { Button } from "@mui/material";

function Modal() {
    const { modal, setModal } = useContext(State)

    const closeModal = () => {
        setModal({ status: "none" })
    }

    return (
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
                    <Button variant="contained" className="btn">Submit</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;