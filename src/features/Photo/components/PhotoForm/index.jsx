import React from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";

PhotoForm.propTypes = {};

function PhotoForm(props) {


  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input
          id="titleId"
          name="title"
          placeholder="Ex: Wow nature ~"
          type="text"
        />
      </FormGroup>
      <FormGroup>
        <Label for="categoryId">Category</Label>
        <Select
          id="categoryId"
          name="category"
          type="select"
          placeholder="What's your photo category ?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>
      <FormGroup>
        <Label for="photoId">Photo</Label>
        <div><Button outline color="primary">Random a photo</Button></div>
        <div>
            <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colourful_bg_image"/>
        </div>
      </FormGroup>
      <FormGroup>
        <Button color="primary">Add to album</Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;
