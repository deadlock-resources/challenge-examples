fetchCats();

function fetchCats() {
    $.ajax({
       url : '/cats',
       type : 'GET',
       dataType: "json",
       success : function(cats){
            buildCatsHtml(cats);
       }
    });
}

function fetchComments(catId) {
    $.ajax({
       url : '/cats/' + catId + '/comments',
       type : 'GET',
       dataType: "json",
       success : function(comments){
            buildCommentsHtml(comments, catId);
       }
    });
}

function postComment(catId, comment) {
    $.ajax({
       url : '/cats/' + catId + '/comments',
       type : 'POST',
       dataType: 'json',
       contentType: 'application/json',
       data:  JSON.stringify({comment}),
       success : function(data){
           handleSuccess(data.token, catId);
      }
    });
}

function kill() {
    $.ajax({
       url : '/program',
       type : 'DELETE'
    });
}

function buildCatsHtml(cats) {
    var catsDiv = $("#cats");
    catsDiv.empty();
    if(cats.length) {
        cats.forEach((cat) => {
            catsDiv.append(buildCatHtml(cat))
        });
    } else {
        catsDiv.text("No cats found in the database");
    }

}

function buildCatHtml(cat) {
    var image = $("<img>", {src: cat.url, width: "100px"});
    var name = $("<span>", {class: "fw6 w-20 tc"}).text(cat.name);
    var showComments = $("<button>", {class: "fw6 ml3", onClick: "fetchComments("+ cat.id + ")"}).text("Show comments");
    return $("<div>", {id: cat.id, class: "flex items-center mv2"})
        .append(name)
        .append(image)
        .append(showComments);
}

function buildCommentsHtml(comments, catId) {
    var id = '#' + catId;
    $(id).children().last().remove();
    var commentsDiv = $("<div>", {class: "ml3"});
    var hideComments = $("<button>", {class: "fw6", onClick: "hideComments("+ catId + ")"}).text("Hide comments");
    var input = $("<input>", {maxlength: 140, placeholder: "Enter comments,", });
    input.keypress(function (e) {
        if (e.which == '13') {
            postComment(catId, input.val());
        }
    });
    commentsDiv.append(hideComments);
    comments.forEach((comment) => {
        commentsDiv.append(buildCommentHtml(comment))
    });
    commentsDiv.append(input);
    $(id).append(commentsDiv);
}

function buildCommentHtml(comment) {
    return $("<div>").text(comment.content);
}

function hideComments(catId) {
    var id = '#' + catId;
    $(id).children().last().remove();
    var showComments = $("<button>", {class: "ml3 fw6", onClick: "fetchComments("+ catId + ")"}).text("Show comments");
    $(id).append(showComments)
}

function handleSuccess(token, catId) {
    if (token) {
        var catsDiv = $("#cats");
        catsDiv.empty();
        catsDiv.text("No cats found in the database.");
        catsDiv.append($("<div>").text("Success ! Your token is: " + token));

        var urlParams = new URLSearchParams(window.location.search);
        var link = $("<a/>")
          .text("Deadlock dashboard")
          .attr("href", urlParams.get("callback") + '?token=' + token);
        catsDiv.append("Now, you can go back to the <a href=")
            .append(link)
            .append(" and enter it to pass to the next step.")
    } else {
        fetchComments(catId);
    }
}