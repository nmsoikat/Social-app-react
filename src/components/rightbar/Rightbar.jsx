import './rightbar.css';

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
        <li className="rightbar-friend">
          <div className="rightbar-profile-img-container">
            <img className='rightbar-profile-img' src="/assets/person/8.jpeg" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-profile-name">John Smith</span>
        </li>
        <li className="rightbar-friend">
          <div className="rightbar-profile-img-container">
            <img className='rightbar-profile-img' src="/assets/person/8.jpeg" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-profile-name">John Smith</span>
        </li>
        <li className="rightbar-friend">
          <div className="rightbar-profile-img-container">
            <img className='rightbar-profile-img' src="/assets/person/8.jpeg" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-profile-name">John Smith</span>
        </li>
        <li className="rightbar-friend">
          <div className="rightbar-profile-img-container">
            <img className='rightbar-profile-img' src="/assets/person/8.jpeg" />
            <span className="rightbar-online"></span>
          </div>
          <span className="rightbar-profile-name">John Smith</span>
        </li>
      </ul>
    </div>
  </div>;
}
