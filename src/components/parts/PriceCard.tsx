import {FC} from 'react'

import '../../styles/priceCard.css'

interface Props {
    img: string | undefined;
    title: string;
    desc: string;
    price: number;
    details: string[];
    time: string
}

export const PriceCard: FC<Props> = ({img, title, desc, price, details, time}) => {
  return (
    <div className="priceCard">
        <img src={img}></img>
        <div className="course">
            <h2>{title}</h2>
            <p className="description">{desc}</p>
            <div className="price">£{price}</div>
            <div className="btn try">Try for free</div>
            <div className="smallPrint">Try for 7 days free then for £{price}/{time}</div>
        </div>    
    
        <div className="details">
            <p className="description">What you will learn</p>
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
    </div>
  )
}
