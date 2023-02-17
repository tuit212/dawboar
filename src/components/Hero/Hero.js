import './hero.css';
import overview from '../../assets/Images/overview.svg';
import tickets from '../../assets/Images/tickets.svg';
import ideas from '../../assets/Images/ideas.svg';
import contacts from '../../assets/Images/contacts.svg';
import agents from '../../assets/Images/agents.svg';
import articles from '../../assets/Images/articles.svg';
import settings from '../../assets/Images/settings.svg';
import subs from '../../assets/Images/sub.svg';
import graph from '../../assets/Images/hero-right-graph.png';
import Tickets from '../../pages/Tickets/Ticket'
import { Routes, Route, NavLink } from 'react-router-dom';

const navArr = [
    {
        img: overview,
        text: 'Overview',
    },
    {
        img: tickets,
        text: 'Tickets',
    },
    {
        img: ideas,
        text: 'Ideas',
    },
    {
        img: contacts,
        text: 'Contacts',
    },
    {
        img: agents,
        text: 'Agents',
    },
    {
        img: articles,
        text: 'Articles',
    },
    {
        img: settings,
        text: 'Settings',
    },
    {
        img: subs,
        text: 'Subscription',
    }
];

const HeroCardArr = [
    {
        text: 'Unresolved',
        number: 60,
    },
    {
        text: 'Overdue',
        number: 16,
    },
    {
        text: 'Open',
        number: 43,
    },
    {
        text: 'On hold',
        number: 64,
    }
]

const RightAbouts = [
    {
        text: 'Resolved',
        number: '449',
    },
    {
        text: 'Received',
        number: '426',
    },
    {
        text: 'Average first response time',
        number: '33m',
    },
    {
        text: 'Average response time',
        number: '3h 8m',
    },
    {
        text: 'Resolution within SLA',
        number: '94%',
    }
]

const HeroTable = [
    {
        text: 'Waiting on Feature Request',
        count: 4238,
    },
    {
        text: 'Awaiting Customer Response',
        count: 1005,
    },
    {
        text: 'Awaiting Developer Fix',
        count: 914,
    },
    {
        text: 'Pending',
        count: 281,
    }
]

const HeroRightnner = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HeroRight />} />
                <Route path='/tickets' element={<Tickets/>} />
            </Routes>
        </>
    )
}

const HeroRight = () => {
    return (
        <>
            <HeroTop />
            <HeroBody />
        </>
    )
}

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='hero__inner'>
                    <nav className='nav'>
                        <ul className='nav-list'>
                            <li>
                                <NavLink className='nav-item' to={'/'} style={{ display: 'flex', textDecoration: 'none' }}>
                                    <img className='nav-icon' alt={'nav icon'} src={navArr[0].img} />
                                    <p className='nav-link'>{navArr[0].text}</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav-item' to={'/tickets'} style={{ display: 'flex', textDecoration: 'none' }}>
                                    <img className='nav-icon' alt={'nav icon'} src={navArr[1].img} />
                                    <p className='nav-link'>{navArr[1].text}</p>
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <img className='nav-icon' alt={'nav icon'} src={navArr[2].img} />
                                <p className='nav-link'>{navArr[2].text}</p>
                            </li>
                            <li className='nav-item'>
                                <img className='nav-icon' alt={'nav icon'} src={navArr[3].img} />
                                <p className='nav-link'>{navArr[3].text}</p>
                            </li>
                            <li className='nav-item'>
                                <img className='nav-icon' alt={'nav icon'} src={navArr[4].img} />
                                <p className='nav-link'>{navArr[4].text}</p>
                            </li>
                            <li className='nav-item'>
                                <img className='nav-icon' alt={'nav icon'} src={navArr[5].img} />
                                <p className='nav-link'>{navArr[5].text}</p>
                            </li>
                            <li className='nav-item'>
                                <img className='nav-icon' alt={'nav icon'} src={navArr[6].img} />
                                <p className='nav-link'>{navArr[6].text}</p>
                            </li>
                            <li className='nav-item'>
                                <img className='nav-icon' alt={'nav icon'} src={navArr[7].img} />
                                <p className='nav-link'>{navArr[7].text}</p>
                            </li>
                        </ul>
                    </nav>
                    <div className='hero-right'>
                        <HeroRightnner />
                    </div>
                </div>
            </div>
        </section>
    )
}



const HeroTop = () => {
    return (
        <div className='hero-top'>
            {
                HeroCardArr.map(card => (
                    <div className='top-card' key={card.number}>
                        <h2 className='top-text'>{card.text}</h2>
                        <p className='top-number'>{card.number}</p>
                    </div>
                ))
            }
        </div>
    );
}



const HeroBody = () => {
    return (
        <>
            <div className='right-body'>
                <div className='right-left'>
                    <h3 className='left-title'>Today's trends</h3>
                    <div className='left-text'>
                        <p className='left-data'>as of 25 May 2019, 09:41 PM</p>
                        <ul className='left-status'>
                            <li className='status-item'>Today</li>
                            <li className='status-item'>Yesterday</li>
                        </ul>
                    </div>
                    <div className='left-graph'>
                        <img className='graph-img' src={graph} alt={'Graphic'} />
                    </div>
                </div>
                <ul className='left-list'>
                    {
                        RightAbouts.map(card => (
                            <li className='left-item' key={card.text}>
                                <h3 className='item-title'>{card.text}</h3>
                                <p className='item-number'>{card.number}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <HeroBottom />
        </>
    )
}


const HeroBottom = () => {
    return (
        <div className='hero-tables'>
            <div className='left-table'>
                <div className='left-table-title'>
                    <p>Unresolved tickets</p>
                    <span>View details</span>
                </div>
                <p className='table-text'>
                    Group: <span>Support</span>
                </p>
                <ul className='table-list'>
                    {
                        HeroTable.map(item => (
                            <li className='table-item' key={item.count}>
                                <p>{item.text}</p>
                                <span>{item.count}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}



export default Hero;