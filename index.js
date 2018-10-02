
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
    let commenter = document.getElementById('commenter').value

    let commentTemplate = document.getElementById('comment-template').innerHTML;

    let templateFn = _.template(commentTemplate);

    let commentDiv = document.getElementById('comments');

    let templateHTML = templateFn({'commentText': commentText, 'commenter': commenter});

    console.log(templateHTML)

    commentDiv.innerHTML += templateHTML;
}
