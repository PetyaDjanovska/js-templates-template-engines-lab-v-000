
  function createPost() {
    let pageTemplate = _.template(document.getElementById('page-template').innerHTML);
    let postTemplate = _.template(document.getElementById('post-template').innerHTML);

    let title = document.getElementById('postTitle').value;
    let content = document.getElementById('postContent').value;
    let author = document.getElementById('postAuthor').value;
  }
