import './rightbar.css';
import {Users}  from '../../dummyData'
import OnlineFriend from '../onlineFriend/OnlineFriend';

export default function Rightbar() {
  return <div className='rightbar'>
    <div className="rightbar-wrapper">
      <div className="birthday-container">
        <img className="birthday-img" src="/assets/gift.png" />
        <span className="birthday-text">
          <b>Pola Foster</b> and  <b>3 other friends</b> have birthday today.
        </span>
      </div>
      <img className="rightbar-ad" src="/assets/ad.png"/>
      <h4 className="rightbar-title">Online Friends</h4>
      <ul className="rightbar-friend-list">
        {Users.map(u => (
          <OnlineFriend key={u.id} user={u} />
        ))}
      </ul>
    </div>
  </div>;
}
