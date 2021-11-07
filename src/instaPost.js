import './instaPost.css';
import { GoKebabVertical } from 'react-icons/go';
import { FiHeart } from 'react-icons/fi';
import { RiChat3Line, RiHeartFill } from 'react-icons/ri';
import { FaRegPaperPlane, FaHeart } from 'react-icons/fa';
import { BiBookmark } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import animateHeartIcon from './animateHeartIcon';
import doubleClick from './doubleClick';


const InstaPost = (props) => {
    let doubleTap = doubleClick();
    let {userId, userDp, post, postId, liked, likes, caption, noOfComments, postedMinutesAgo} = props.data;
    const postHeartStyle = {position: "absolute", top: "0", bottom: "0", left: "0", right: "0", margin: "auto"};
    let idSuffix = userId + postId;
    let heartId = "heart-icon" + idSuffix;
    let fillHeartId = "fill-heart-icon" + idSuffix;
    let postHeartId = "post-heart-icon" + idSuffix;
    return (
        <section className="post">
            <div className="post-header">
                <div className="user">
                    <span className="avatar">
                        <img height="40" src={userDp} alt="user's dp"/>
                    </span>
                    <span className="user-id">
                        <a href="#">
                            {userId}
                        </a>
                    </span>
                </div>
                <div className="more">
                    <button>
                        <GoKebabVertical size="1.5em"/>
                    </button>
                </div>
            </div>
            <div className="post-img">
                <FaHeart id={postHeartId} className="icon post-heart-icon" size="1.5em" style={postHeartStyle}/>    
                <img onClick={() => doubleTap(postHeartId, heartId, fillHeartId)} src={post} alt="user's post"/>
            </div>
            <div className="post-footer">
                <div className="post-interactions">
                    <div>
                        <button onClick={()=>animateHeartIcon("emptyHeart", heartId, fillHeartId)}>
                            <FiHeart style={liked ? {display: "none"}:{}} id={heartId} className="icon"  size="1.5em"/>
                        </button>
                        <button onClick={()=>animateHeartIcon("filledHeart", heartId, fillHeartId)}>
                            <RiHeartFill style={liked ? {}:{display: "none"}} id={fillHeartId} className="icon fill-heart-icon" size="1.5em"/>
                        </button>
                        <button>
                            <RiChat3Line className="chat-icon icon" size="1.5em"/>
                        </button>
                        <button>
                            <FaRegPaperPlane className="plane-icon icon" size="1.3em"/>
                        </button>
                    </div>
                    <div>
                        <button>
                            <BiBookmark size="1.5em" />
                        </button>
                    </div>
                </div>
                <div className="post-likedby">
                    <a href="#">{likes} likes</a>
                </div>
                <div className="post-caption">
                    <p> 
                        <a href="#">{userId}</a>
                        {caption}
                    </p>
                </div>
                <div className="post-comments">
                    {(noOfComments > 0) ? <p>View all {noOfComments} comments</p> : <p></p>}
                </div>
                <div className="add-comment">
                    <span className="add-comment-avatar">
                        <img height="25" src={userDp} alt="user's dp"/>
                    </span>
                    <span>
                        <input className='comment' type="text" placeholder='Add a comment...'/>
                        <button className='add-comment-icons'>
                            ❤️
                        </button>
                        <button className='add-comment-icons'>
                            🙌
                        </button>
                        <button className='add-comment-icons'>
                            <AiOutlinePlusCircle />
                        </button>
                    </span>
                </div>
                <div className="posted-time">
                    {(postedMinutesAgo < 60 ? <p> {postedMinutesAgo} minutes ago</p> : <p> {parseInt(postedMinutesAgo / 60)} {parseInt(postedMinutesAgo / 60) > 1 ? "hours" : "hour"} ago</p>)}
                </div>
            </div>
        </section>
    )
}

export default InstaPost;