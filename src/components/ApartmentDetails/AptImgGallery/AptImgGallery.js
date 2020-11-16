import React from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './aptImgGallery.module.css';

import previewImg from '../../../resources/images/apartment5.png';
import thumb1 from '../../../resources/images/thumb1.png';
import thumb2 from '../../../resources/images/thumb2.png';
import thumb3 from '../../../resources/images/thumb3.png';
import thumb4 from '../../../resources/images/thumb4.png';



const AptImgGallery = () => {

     return (
        <div className={classes.imgGalleryContainer}>
            <div className={classes.imgPreview}>
                <img src={previewImg} alt="preview"/>
            </div>
            <div className={classes.imgThumbnails}>
                <Row>
                    <Col md={3}>
                        <img src={thumb1} alt="thumbnail"/>
                    </Col>
                    <Col md={3}>
                        <img src={thumb2} alt="thumbnail"/>
                    </Col>
                    <Col md={3}>
                        <img src={thumb3} alt="thumbnail"/>
                    </Col>
                    <Col md={3}>
                        <img src={thumb4} alt="thumbnail"/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AptImgGallery;