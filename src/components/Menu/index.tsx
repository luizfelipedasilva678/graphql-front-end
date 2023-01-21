import { Fragment, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './index.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <button
        className="menu__btn"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <AiOutlineMenu color="#fff" />
      </button>

      <div className={`menu ${isOpen ? 'menu--open' : 'menu--close'}`}>
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="menu__close-btn"
        >
          <IoMdClose />
        </button>
        <nav className="menu__nav">
          <ul className="menu__ul">
            <li className="menu__li">
              <Link className="menu__link" to="/">
                Home
              </Link>
            </li>
            <li className="menu__li">
              <Link className="menu__link" to="/posts">
                Posts
              </Link>
            </li>
            <li className="menu__li">
              <Link className="menu__link" to="/my-posts">
                My posts
              </Link>
            </li>
            <li className="menu__li">
              <Link className="menu__link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Menu;
