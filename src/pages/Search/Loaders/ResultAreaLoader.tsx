import React from "react";
import ImageLoader from "./ImageLoader";
import InfoLoader from "./InfoLoader";

const ResultAreaLoader = () => (
    <>
    <div className="user-image-col">
        <ImageLoader />
    </div>
    <div className="user-details-col mt-40">
        <InfoLoader />
    </div>
    </>
);

export default ResultAreaLoader;