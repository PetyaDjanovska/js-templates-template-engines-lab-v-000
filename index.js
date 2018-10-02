
  function createPost() {
    let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
    let postTemplate = _.template(document.getElementById('post-template').innerHTML);
    let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    let title = document.getElementById('postTitle').value;
    let content = document.getElementById('postContent').value;
    let author = document.getElementById('postAuthor').value;

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    let blogSection = postTemplate({ 'title': title, 'content': content, 'author': author });
    let commentsSection = commentsTemplate();
    let postElement = document.getElementById("post");

    postElement.innerHTML = blogSection;
    postElement.getElementsByTagName("footer")[0].innerHTML = commentsSection;
  }

  function postComment() {
    let commentText = document.getElementById('commentText').value
    let commenterName = document.getElementById('commenter').value

    let commentTemplate = document.getElementById('comment-template').innerHTML;

    const templateFn = _.template(commentTemplate);

    const commentDiv = document.getElementById('comments');

    const templateHTML = templateFn({'commentText': commentText, 'commenterName': commenterName});

    console.log(templateHTML)

    commentDiv.innerHTML += templateHTML;
}
