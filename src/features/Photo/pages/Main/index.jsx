import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';

MainPage.propTypes = {
    
};

function MainPage(props) {
    return (
        <Banner title='Your Awesome Photo 🎉'
                backgroundUrl={Images.PINK_BG}/>
    );
}

export default MainPage;