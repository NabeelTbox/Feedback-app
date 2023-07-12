function App() {
  const title = "Blog Post";
  const body = "My blog Post";
  const comments = [
    { id: 1, Text: "Comment one" },
    { id: 2, Text: "Comment two" },
    { id: 3, Text: "Comment Three" },
  ];

  const loading= false
  const showComments= true

  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments ? (      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.Text}</li>
          ))}
        </ul>
      </div>) : 'no'}


    </div>
  );
}

export default App;
