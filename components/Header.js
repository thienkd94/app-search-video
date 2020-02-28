import { useState } from 'react';
import { Icon } from 'antd';
import Facebook from '../components/Facebook';

const Header = ({ handleChange }) => {
  const [visible, setVisible] = useState(false);
  const [login, setLogin] = useState(true);
  const [buttonLogin, setButtonLogin] = useState(true);
  const [input, setInput] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState({
    usernameError: '',
    passwordError: ''
  });

  const handleClick = () => {
    setVisible(!visible);
  };

  const closeLoginForm = () => {
    setVisible(false);
  };

  const handleChangeInput = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let usernameError = '',
      passwordError = '';
    let account = { username: 'linxhq', password: 'a' };

    //   if (!input.username) {
    //       usernameError = 'username không được để trống';
    //   }

    if (input.username !== account.username) {
      usernameError = 'username không đúng';
    }

    //   if (!input.password) {
    //     passwordError = 'password không được để trống';
    //   }

    if (input.password !== account.password) {
      passwordError = 'password không đúng';
    }

    if (usernameError || passwordError) {
      setError({
        usernameError,
        passwordError
      });
      return false;
    }

    return true;
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    let isValid = validate();

    if (isValid) {
      console.log(input);
      setVisible(false);
      setButtonLogin(false);
    }
  };

  let formLogin = (
    <div className="login-form">
      <form onSubmit={onHandleSubmit}>
        <input type="text" name="username" onChange={handleChangeInput} />
        <label htmlFor="username">Username</label>
        <div style={{ color: 'red', fontSize: 12, fontStyle: 'italic' }}>
          {error.usernameError}
        </div>
        <div className="divider" />
        <input type="password" name="password" onChange={handleChangeInput} />
        <label htmlFor="password">Password</label>
        <div style={{ color: 'red', fontSize: 12, fontStyle: 'italic' }}>
          {error.passwordError}
        </div>
        <div className="wrap-btn">
          <button className="btn btn-cancel" onClick={closeLoginForm}>
            Huỷ
          </button>
          <button type="submit" className="btn btn-confirm">
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" title="Logo" />
      </div>

      <div className="search-box">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Nhập từ khoá tìm kiếm"
        />
      </div>

      <div className="right-side">
        <Icon type="video-camera" title="Tạo video hoặc bài đăng" />
        <Icon type="table" title="Các ứng dụng" />
        <Icon type="bell" title="Thông báo" />
        <button onClick={handleClick}>
          {buttonLogin === true ? 'Đăng nhập' : 'Đăng xuất'}
        </button>
        {visible === true ? formLogin : null}
        ˜ <Facebook />
      </div>
    </div>
  );
};

export default Header;
