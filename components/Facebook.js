import { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  let facebookData;

  const responseFacebook = response => {
    if (response.status !== 'unknown') {
      setAuth(true);
      setName(response.name);
      setPicture(response.picture.data.url);
    }
    console.log(response);
  };

  const componentClicked = () => {
    console.log('Cliked');
  };

  return (
    <>
      {auth
        ? (facebookData = (
            <div
              style={{
                width: 80,
                margin: 'auto',
                padding: '10px 10px',
                backgroundColor: '#f2f2f2',
                position: 'fixed',
                top: 0,
                right: 10
              }}
            >
              <img src={picture} />
            </div>
          ))
        : (facebookData = (
            <FacebookLogin
              appId="220447509138337"
              autoLoad={true}
              fields="name,picture"
              onClick={componentClicked}
              callback={responseFacebook}
            />
          ))}
    </>
  );
};

export default Facebook;
