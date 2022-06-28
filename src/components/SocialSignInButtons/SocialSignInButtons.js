import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

function SocialSignInButtons(props) {
  const onSignInApple = () => {
    console.warn('Signed in with Apple');
  };

  const onSignInGoogle = () => {
    console.warn('Signed in with Google');
  };

  const onSignInFacebook = () => {
    console.warn('Signed in with Facebook');
  };

  return (
    <>
      <CustomButton
        onPress={onSignInApple}
        text="Sign in with Apple"
        bgColor="#000"
      />
      <CustomButton
        onPress={onSignInGoogle}
        text="Sign in with Google"
        bgColor="#DD4D44"
      />
      <CustomButton
        onPress={onSignInFacebook}
        text="Sign in with Facebook"
        bgColor="#4765A9"
      />
    </>
  );
}

export default SocialSignInButtons;
