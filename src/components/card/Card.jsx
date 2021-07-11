import React from 'react';
import './Card.css';

const Card = (props) => {
    const {product} = props;

    const viewProduct = () => {
        window.open(encodeURI(product.url));
    }

    const addToCart = () => {
        let details = {
            'code': product.code,
            'erpCode': product.erpCode,
            'typeName': product.typeName,
            'name': product.name,
        };

        console.log('Send to cart with following: \n' + JSON.stringify(details));
    }

    return (
        <div className="card">
            <img className="image" src={product.productImageUrl} alt={product.productImageAltText} onClick={() => viewProduct()}/>
            
            <p className="heading">{product.name}</p>
            <hr className="divider" />
            <p>{product.salesUnit}</p>
            <p>{product.price.currency + ' '}<span className="heading">{product.price.formattedValue}</span></p>
            
            <button className="button" onClick={() => addToCart()}>Buy Now</button>
        </div>
    )
}

export default Card;