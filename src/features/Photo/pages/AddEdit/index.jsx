import React from "react";
import PropTypes from "prop-types";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoForm from "../../components/PhotoForm";

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

        <div className="photo-edit__form">
            <PhotoForm onSubmit={values => console.log('Form submit: ', values)}/>
        </div>
    </div>
  );
}

AddEditPage.propTypes = {};

export default AddEditPage;
