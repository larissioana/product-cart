import { useState } from 'react';
import './deliveries.css';
import upIcon from '../../assets/up.png'
import downIcon from '../../assets/down.png'
import returnIcon from '../../assets/return.png'
import truckIcon from '../../assets/delivery-truck.png'

const Deliveries = () => {
    const [isDeliveryOpen, setIsDeliveryOpen] = useState(false);
    return (
        <div>
            <div className="deliveries-title-wrapper" style={{ marginTop: isDeliveryOpen ? "2rem" : "1rem" }}>
                {
                    !isDeliveryOpen ?
                        <img src={downIcon} alt="chevron down" width={15} height={15} />
                        :
                        <img src={upIcon} alt="chevron up" width={15} height={15} />

                }
                <h3 className="deliveries-title" onClick={() => setIsDeliveryOpen(!isDeliveryOpen)}>Deliveries & Returns</h3>
            </div>
            {
                isDeliveryOpen &&
                <div className="delivery-container">
                    <div className="delivery">
                        <img src={truckIcon} alt="" width={30} height={30} />
                        <p><span>Standard delivery: </span> 3 to 4 working days.</p>
                    </div>
                    <p style={{ paddingLeft: "3rem", marginTop: "-1rem" }}>During sale and promotion periods, delivery times may be longer than usual.</p>
                    <div className="delivery">
                        <img src={returnIcon} alt="" width={30} height={30} />
                        <p><span>Returns </span> You have 30 days to return your items.</p>
                    </div>
                    <a className="link" href="/" style={{ paddingLeft: "3rem", marginTop: "-1rem" }}>How to return an item? </a>
                </div>
            }
        </div>
    )
}

export default Deliveries;

