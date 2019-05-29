import React from "react";

import classes from "./CurrencyImage.css";
import CurrencyImage from "../../assets/currency.jpg";

const currencyImage = (props) => (
    <div className={classes.CurrencyImage}>
        <img src={CurrencyImage} className={classes.CurrencyImg} />
    </div>
);

export default currencyImage;