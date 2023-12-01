import { Link } from "react-router-dom";
import { useRef } from "react";
import logo from '../../img/logo.svg'
import s_icon from '../../img/search-refraction.svg'
import s_black_icon from '../../img/search-refraction-black.svg'
import x_icon from '../../img/search-x.svg'
import noti from '../../img/Frame 1.svg'
import profile from '../../img/user-image.png'
import './home.scss'

function Header() {
    const search = useRef()
    const searchDiv = useRef()

    const onchange = () => {
        if (search.current.value !== '') {
            searchDiv.current.className = 'active'
        } else {
            searchDiv.current.className = 'search'
        }
    }

    return (
        <header className="header">
            <div className="left">
                <Link to={'/'}>
                    <img src={logo} alt="Company Logo" />
                </Link>
                <div ref={searchDiv} className="search">
                    <img className="s_icon" src={s_icon} alt="Search Icon" />
                    <img className="s_icon-black" src={s_black_icon} alt="Search Icon Black" />
                    <input onChange={onchange} ref={search} type="text" placeholder="Search for any training you want " />
                    <img className="x_icon" src={x_icon} alt="Exit icon" />
                </div>
            </div>
            <div className="right">
                <img src={noti} alt="Notification" />
                <img src={profile} alt="Profile Icon" />
            </div>
        </header>
    );
}

export default Header;