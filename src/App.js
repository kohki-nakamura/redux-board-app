import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const postList = useSelector((state) => state.posts.value);
  console.log(postList);
  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
       <div className='addPost'>
        <input type="text" placeholder='お名前' />
        <input type="text" placeholder='投稿内容' />
        <button>投稿</button>
        <hr />

        <div className='displayPosts'>
          {postList.map((post) => (
            <div key={post.id} className="post">
              <h1 className='postName'>{post.name}</h1>
              <h1 className='postContent'>{post.content}</h1>
              <button>削除</button>
            </div>
          ))}
        </div>
       </div>
    </div>
  );
}

export default App;
