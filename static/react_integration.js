const CommentBox = (props) => {
    return (
        <div className="commentBox">
        Hello, world! I am { props.name }.
        </div>
    );
};
ReactDOM.render(
    <CommentBox name="foo"/>,
  document.getElementById('app')
);
