import React from 'react';
import "./Banner.css";

const Banner = (props) => {
    console.log(props)
    console.log(props===true)
    let receivedHeader = (
    <h1 className="text-uppercase" style={{"marginTop":"30px", "textAlign":"center"}}>{props.bannerContent}</h1>
    );
    
    let aptPageBgImgStyle;
    if(props.bannerContent) {
        aptPageBgImgStyle = {
            height: '269px',
            backgroundPosition: "center center",
            marginBottom: '50px'
        }
    }
    

    return (
        <div id="banner" style={aptPageBgImgStyle} className="d-flex align-items-center">
            <div className="container banner-container">
                { props.bannerContent ? 
                receivedHeader
                :
                <>
                    <h1 className="text-uppercase pb-3 ml-3">Find Your House Rent</h1>
                    <form class="form-inline my-lg-0">
                        <input type="text" class="form-control w-75 mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-all my-2 my-sm-0" type="submit">Find Now</button>
                    </form>
                </>
                }
            </div>
        </div>

    );
};

export default Banner;