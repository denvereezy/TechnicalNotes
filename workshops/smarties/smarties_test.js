var smarties = [{ color : "white", qty : 5},
    { color : "blue", qty : 11},
    { color : "orange", qty : 17},
    { color : "pink", qty : 6},
    { color : "yellow", qty : 1},
    { color : "red", qty : 11},
    { color : "black", qty : 13},
    { color : "brown", qty : 19}];

    var smartyList = [
        { color : "white"},{ color : "blue"},{ color : "orange"},{ color : "white"},
        { color : "blue"},{ color : "orange"},{ color : "white"},{ color : "blue"},
        { color : "orange"},{ color : "pink"},{ color : "yellow"},{ color : "red"},
    ];

test("how many orange smarties do we have?", function(assert){
    var smarty = findSmartiesByColor(smarties, "orange");
    assert.equal(smarty.qty, 17);
});

test("how many blue smarties do we have?", function(assert){
    var smarty = findSmartiesByColor(smarties, "blue");
    assert.equal(smarty.qty, 11);
});

test("find color of smarties we have the most of", function(assert){
    var smarty = findMostAbundantSmartie(smarties);
    assert.equal(smarty.color, 'brown');
});

test("find all the smarties we have less than 7 for", function(assert){
    var smartieList = findSmartiesLessThan(smarties, 7);
    assert.equal(smartieList.length, 3);
});

// test("can I search smarties using a function", function(assert){
//     assert.equal(true, false);
//
//     var smarties = findSmarties(smarties, function(smarty){
//         return smarty.qty % 2 === 0;
//     });
//
//     assert.deepEqual(smarties, {
//         pink : 6
//     })
//
// });

test("can I group smarties", function(assert){
    var smartieGroups = groupSmarties(smartyList);

    assert.deepEqual(smartieGroups, {
      blue: 3,
      orange: 3,
      pink: 1,
      red: 1,
      white: 3,
      yellow: 1

    });

});

// test("can I sort smarties", function(assert){
//     var sortedSmarties = sortSmarties(smarties);
//     assert.equal(sortedSmarties, []);
// });
//
// test("can I do an control break?", function(assert){
//     addTotalForTeams()
//     assert.equal(true, false);
// });
