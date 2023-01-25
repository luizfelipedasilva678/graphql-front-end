import { useMutation } from '@apollo/client';
import { Fragment, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { GQL_LOGOUT } from '../../graphql/mutations/logout';
import { useUserInfos } from '../../hooks/useUserInfos';
import '../../styles/Menu/index.css';
import { removeFromLocalStorage } from '../../utils/localStorage';
import Loading from '../Loading';

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { getUserInfo, resetUserInfo } = useUserInfos();
  const { isLoggedIn, userName } = getUserInfo();
  const [logout, { loading }] = useMutation(GQL_LOGOUT, {
    onError: () => {},
    onCompleted: () => {
      resetUserInfo();
      removeFromLocalStorage('__auth_data__');
    },
  });

  const handleLogout = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      await logout({
        variables: {
          userName,
        },
      });
    } catch (error) {
      console.error({
        type: 'Logout error',
      });
    }
  };

  if (loading) return <Loading />;

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
            {isLoggedIn ? (
              <li className="menu__li">
                <Link className="menu__link" to="/create-post">
                  Create Post
                </Link>
              </li>
            ) : (
              <></>
            )}
            {!isLoggedIn ? (
              <li className="menu__li">
                <Link className="menu__link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <></>
            )}
            {isLoggedIn ? (
              <li className="menu__li">
                <a className="menu__link" href="#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Menu;
