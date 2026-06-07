import React from 'react'
import { itemData } from '../data'
import { useState } from 'react'

//impot the images from the itemData
const ItemsDisplay = () => {
    const [displayItems, setDisplayItems] = useState(itemData);
    return (
        <div className="itemSection">
            {displayItems.map((data,id) => {
                return (
                    <div key = {id} className="gallery">
                        <img src={data.item_img} alt={data.item_img} />
                    </div>
                )
            })

            }
        </div>
    )
}

export default ItemsDisplay
