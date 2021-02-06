import React from 'react';
import LinearGradient from 'react-native-linear-gradient';


const Header = props => {
 const { searchVisible, setSearchVisible, gradients } = props;
  return (
    <>
      <LinearGradient
        colors={gradients}
        style={{height: 140}}
        locations={[0.4, 1]}
      />
    </>
  );
};

export default Header;
