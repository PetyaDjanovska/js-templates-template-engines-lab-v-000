
  function createPost() {
    let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
    let postTemplate = _.template(document.getElementById('post-template').innerHTML);
    let commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);

    let title = document.getElementById('postTitle').value;
    let content = document.getElementById('postContent').value;
    let author = document.getElementById('postAuthor').value;

    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

    let blogSection = postTemplate({ 'postTitle': postTitle, 'postContent': post, 'postAuthor': postAuthor });
    var commentsSection = commentsTemplate();
    var postElement = document.getElementById("post");

  }
