import './ApartmentsList.scss'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export const ApartmentsList = ({ data }) => {
    return (
        <div className='apart__lists'>
            <Router>
                {
                    data.map((apart) => (
                        <Link key={apart.id} to={`/details/${apart.id}`} className='apart__lists_item'>
                            <div className="apart__lists_card">
                                <div className="apart__lists_card_img">
                                    {(apart.type === 'IndependentLiving') ?
                                        <div className="apart__lists_card_imgmini"><p>Independent living</p></div> :
                                        <div className="apart__lists_card_imgmini2"><p>Restaurant & Support available</p></div>
                                    }
                                    <img src="https://via.placeholder.com/300x150/FF0000/FFFFFF?text=title" alt={apart.title} />
                                </div>
                                <div className="apart__lists_card_title">
                                    {apart.title}
                                </div>
                                <div className="apart__lists_card_address">
                                    {apart.address}
                                </div>
                                <div className="apart__lists_card_price">
                                    New Properties for Sale from <span>&#65505;{apart.price}</span>
                                </div>
                                <div className="apart__lists_card_p">
                                    Shared Ownership Available
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Router>
        </div >
    )

}