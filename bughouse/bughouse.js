Pieces = new Meteor.Collection('pieces');
Players = new Meteor.Collection('players');
Board_A = new Meteor.Collection('board_A');
Board_B = new Meteor.Collection('board_B');

var white = {
  king    :"&#9812",
  queen   :"&#9813",
  rook    :"&#9814",
  bishop  :"&#9815",
  knight  :"&#9816",
  pawn    :"&#9817"
};

var black = {
  king    :"&#9818",
  queen   :"&#9819",
  rook    :"&#9820",
  bishop  :"&#9821",
  knight  :"&#9822",
  pawn    :"&#9823"
}

var boardStart = function() {

};

if (Meteor.isClient) {
  Template.board_a.asdf = function () {
    console.log("yo")
  };
  Template.board_a.pieces = function () {
    return Pieces.find({board: 'a'});
  };

  Template.board_b.pieces = function () {
    return Pieces.find({board: 'b'});
  };
}




if (Meteor.isServer) {
  Meteor.startup(function () {
    Pieces.remove({});
    var names = [
      // "r n b q k b n r".split(" "),
      // "p p p p p p p p".split(" "),
      // "f f f f f f f f".split(" "),
      // "f f f f f f f f".split(" "),
      // "f f f f f f f f".split(" "),
      // "f f f f f f f f".split(" "),
      // "p p p p p p p p".split(" "),
      // "r n b q k b n r".split(" ")
    // kings
      {color:'black', name:'king', pos:'e1', board:'a'},
      {color:'white', name:'king', pos:'e8', board:'a'},
      {color:'black', name:'king', pos:'e8', board:'b'},
      {color:'white', name:'king', pos:'e1', board:'b'},
    // queens
      {color:'white', name:'queen', pos:'d8', board:'a'},
      {color:'black', name:'queen', pos:'d1', board:'a'},
      {color:'white', name:'queen', pos:'d1', board:'b'},
      {color:'black', name:'queen', pos:'d8', board:'b'},
    // bishop
      {color:'white', name:'bishop', pos:'f8', board:'a'},
      {color:'white', name:'bishop', pos:'c8', board:'a'},
      {color:'black', name:'bishop', pos:'f1', board:'a'},
      {color:'black', name:'bishop', pos:'c1', board:'a'},
      {color:'white', name:'bishop', pos:'f1', board:'b'},
      {color:'white', name:'bishop', pos:'c1', board:'b'},
      {color:'black', name:'bishop', pos:'f8', board:'b'},
      {color:'black', name:'bishop', pos:'c8', board:'b'},
    // knight
      {color:'white', name:'knight', pos:'b8', board:'a'},
      {color:'white', name:'knight', pos:'g8', board:'a'},
      {color:'black', name:'knight', pos:'b1', board:'a'},
      {color:'black', name:'knight', pos:'g1', board:'a'},
      {color:'white', name:'knight', pos:'b1', board:'b'},
      {color:'white', name:'knight', pos:'g1', board:'b'},
      {color:'black', name:'knight', pos:'b8', board:'b'},
      {color:'black', name:'knight', pos:'g8', board:'b'},
    // rook
      {color:'white', name:'rook', pos:'a8', board:'a'},
      {color:'white', name:'rook', pos:'h8', board:'a'},
      {color:'black', name:'rook', pos:'a1', board:'a'},
      {color:'black', name:'rook', pos:'h1', board:'a'},
      {color:'white', name:'rook', pos:'a1', board:'b'},
      {color:'white', name:'rook', pos:'h1', board:'b'},
      {color:'black', name:'rook', pos:'a8', board:'b'},
      {color:'black', name:'rook', pos:'h8', board:'b'},
    // pawns
      {color: 'black', name: 'pawn', pos:'a2', board:'a'},
      {color: 'black', name: 'pawn', pos:'b2', board:'a'},
      {color: 'black', name: 'pawn', pos:'c2', board:'a'},
      {color: 'black', name: 'pawn', pos:'d2', board:'a'},
      {color: 'black', name: 'pawn', pos:'e2', board:'a'},
      {color: 'black', name: 'pawn', pos:'f2', board:'a'},
      {color: 'black', name: 'pawn', pos:'g2', board:'a'},
      {color: 'black', name: 'pawn', pos:'h2', board:'a'},
      {color: 'white', name: 'pawn', pos:'a7', board:'a'},
      {color: 'white', name: 'pawn', pos:'b7', board:'a'},
      {color: 'white', name: 'pawn', pos:'c7', board:'a'},
      {color: 'white', name: 'pawn', pos:'d7', board:'a'},
      {color: 'white', name: 'pawn', pos:'e7', board:'a'},
      {color: 'white', name: 'pawn', pos:'f7', board:'a'},
      {color: 'white', name: 'pawn', pos:'g7', board:'a'},
      {color: 'white', name: 'pawn', pos:'h7', board:'a'},
      {color: 'black', name: 'pawn', pos:'a7', board:'b'},
      {color: 'black', name: 'pawn', pos:'b7', board:'b'},
      {color: 'black', name: 'pawn', pos:'c7', board:'b'},
      {color: 'black', name: 'pawn', pos:'d7', board:'b'},
      {color: 'black', name: 'pawn', pos:'e7', board:'b'},
      {color: 'black', name: 'pawn', pos:'f7', board:'b'},
      {color: 'black', name: 'pawn', pos:'g7', board:'b'},
      {color: 'black', name: 'pawn', pos:'h7', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'},
      {color: 'white', name: 'pawn', pos:'a2', board:'b'}
    ];

    for (var i = 0; i < names.length; i++){
      Pieces.insert(names[i]);
    }
  });
}