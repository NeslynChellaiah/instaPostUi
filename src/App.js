import './App.css';
import InstaPost from './instaPost';

function App() {
  const data = [{
    userId: "neslyn",
    userDp: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    postId: 1,
    post: "https://images.unsplash.com/photo-1624343583006-ce7442701c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
    liked: false,
    likes: 349,
    caption: "honda nsx",
    noOfComments: 12,
    postedMinutesAgo: 18
  }]

  return (
    <div className="App">
      {data.map((data)=>{
        return <InstaPost data={data} key={data.postId}/>
      })}
    </div>
  );
}

export default App;
