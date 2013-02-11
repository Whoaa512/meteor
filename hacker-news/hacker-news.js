NavList = new Meteor.Collection('nav-list');
ArticleList = new Meteor.Collection('article-list');
Comments = new Meteor.Collection('comments');
var holderId;

if (Meteor.isClient) {
  Meteor.Router.add({
    '/': 'home',
    '/submit': 'submission',
    '/comments': 'comments',
    '*' : 'post'
  });

  Template.navbar.item = function() {
    // TODO : make a seperate function that returns url and title.
    return NavList.find();
  };

  Template.articleList.article = function() {
    // TODO : make a seperate function that returns url and title.
    return ArticleList.find();
  };

  Template.articleList.events({
    'click': function (event) {
      holderId = event.target.getAttribute('href');
    }
  });

  Template.submission.events({
    'submit form.newPost': function(e, template) {
      e.preventDefault();
      var a = ArticleList.insert({
        author: Meteor.user().emails[0].address,
        title: template.find('input[class = title]').value,
        url: template.find('input[class = url]').value,
        score: 0,
        created_at: new Date()
      });
      if (template.find('input[class = comment]').value) {
        Comments.insert({
          author: Meteor.user().emails[0].address,
          articleId: a,
          content: template.find('input[class = comment]').value,
          created_at: new Date()
        });
      };
      Meteor.Router.to('/');
    }
  });

  Template.home.events({
    'click a.upvote': function() {
      ArticleList.update(this, {$inc: {score: 1}});
    }
  });

  Template.post.comment = function() {
    return Comments.find({articleId : holderId}, {created_at: -1});
  };

  Template.post.mainLink = function() {
    return ArticleList.findOne({_id : holderId}).url;
  };

  Template.post.events({
    'submit form.newComment': function(e, template) {
      e.preventDefault();
      Comments.insert({
        author: Meteor.user().emails[0].address,
        articleId: holderId,
        content: template.find('input[class = comment]').value,
        created_at: new Date()
      });
    }
  });

  Template.comments.comment = function() {
    return Comments.find();
  };
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    if(NavList.find().count() === 0){
      var navs = [
          {title: 'Home', url: '/'},
          {title: 'Submit', url: '/submit'},
          {title: 'Comments', url: '/comments'},
          {title: 'Ask', url: '#'}
        ];
      for (var i = 0; i < navs.length; i++) {
        NavList.insert(navs[i]);
      }
    }
  });
}
