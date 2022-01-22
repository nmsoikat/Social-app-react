import { MoreVert } from '@mui/icons-material';
import './post.css'

export default function () {
  return <div className='post'>
    <div className="post-wrapper">
      <div className="post-top">
        <div className="post-top-left">
          <img  className='post-profile-img' src="/assets/person/7.jpeg"/>
          <span className="post-username">Nur Mohammad</span>
          <span className="post-date">5 mins ago</span>
        </div>
        <div className="post-top-right">
          <MoreVert className='post-option-icon'/>
        </div>
      </div>
      <div className="post-center">
        <span className="post-text">Hey it is my first post</span>
        <img className='post-img' src="/assets/post/1.jpeg"/>
      </div>
      <div className="post-bottom">
        <div className="post-bottom-left">
          <img className='post-like-icon' src="/assets/like.png" alt="like" />
          <img className='post-like-icon' src="/assets/heart.png" alt="heart" />
          <span className="post-like-count">32 people like it</span>
        </div>
        <div className="post-bottom-right">
          <span className="post-comment-text">9 comments</span>
        </div>
      </div>
    </div>
  </div>;
}
