import { useState } from 'react';
import { Icon } from 'antd';

const Header = ({ handleChange }) => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: ""
  });
  const [login, setLogin] = useState(true);


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
    })
  }

  const onClickLogin = (e) => {
    let account = {username: "admin", password: 123};
  
    if (
      input.username !== account.username ||
      input.password !== account.password
    ) {
      setLogin(false);
      e.preventDefault();
    }

    if (
      input.username === account.username &&
      input.password === account.password
    ) {
      setLogin(true)
      console.log("dung")
    }

  }


  let formLogin = (
    <div className="login-form">
      <form>
        <input
          type="text"
          name="username"
          onChange={handleChangeInput}
          required
        />
        <label htmlFor="username">Username</label>
        <div className="divider" />
        <input
          type="password"
          name="password"
          onChange={handleChangeInput}
          required
        />
        <label htmlFor="password">Password</label>
        <div style={{ color: 'red', fontSize: '12px', fontStyle: 'italic' }}>
          {login === true
            ? null
            : 'username hoặc password không đúng'}
        </div>
        <div className="wrap-btn">
          <button className="btn btn-cancel" onClick={closeLoginForm}>
            Huỷ
          </button>
          <button className="btn btn-confirm" onClick={onClickLogin}>
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="header">
      <div className="logo">
        <img src="/images/youtube.png" alt="logo" />
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

        <button onClick={handleClick}>Đăng nhập</button>
        {visible === true ? formLogin : null}
      </div>
    </div>
  );
};

export default Header;
