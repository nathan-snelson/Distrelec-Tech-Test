import React from 'react';
import './Card.css';

const Card = (props) => {
    const {product} = props;

    // navigation function used to open the product page in a new tab
    const viewProduct = () => {
        window.open(encodeURI(product.url),'_');
    }

    // declare function to add selected item to cart
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

            {
                // check if any active promotions are active then apply styling based on the code
                product.activePromotionLabels.length > 0 && (                    
                    <p className={`heading ${product.activePromotionLabels[0].code}`}>
                        {product.activePromotionLabels[0].label.toUpperCase() + '! ' + product.name}
                    </p>
                )

                ||

                (                    
                    <p className="heading">{product.name}</p>
                )
            }
            
            <hr className="divider" />
            <p>{product.price.currency + ' '}<span className="heading">{product.price.formattedValue}</span></p>

            {
                // check if manufacturer details are present and display those with a divider
                product.distManufacturer.name != "" && (
                    <>                    
                        <hr className="divider" />
                        <img src={product.distManufacturer.brand_logo.url} alt=""/>
                        <p> Manufactured by <span className="heading">{ product.distManufacturer.name } </span></p>                        
                    </>
                )
            }
            
            <button className="button" onClick={() => addToCart()}>Buy Now</button>
        </div>
    )
}

export default Card;