var findSmartiesByColor = function(smarties, color){
  for(var smarty in smarties){
    var currentSmarty = smarties[smarty];
    var qty = smarties[smarty].qty;
    if(currentSmarty.color == color){
      return currentSmarty;
    }
  }
};

var findMostAbundantSmartie = function(smarties){
  var biggestSmarty = {color : " ", qty : 0};
  for (var smarty in smarties){
    var currentSmarty = smarties[smarty];

    if(currentSmarty.qty > biggestSmarty.qty){
      biggestSmarty = currentSmarty;
    }
  }
  return biggestSmarty;
};

var findSmartiesLessThan = function(smarties, number){
  var list = [];
  for (var smarty in smarties){
    var currentSmarty = smarties[smarty];

    if(currentSmarty.qty < number){
      list.push(currentSmarty);
    }
  }
  return list;
};

var findSmarties = function(smarty){

};

var groupSmarties = function(smartyList){
  var map = {};
  for (var smarty in smartyList){
    currentSmarty = smartyList[smarty];
    if(map[currentSmarty.color] === undefined){
      map[currentSmarty.color] = 0;
    }
    for (var key in map){
      if(currentSmarty.color === key){
        map[key] ++;
      }
    }
  }
  return map;
};

var sortSmarties = function(){

};

var addTotalForTeams = function(){

};
