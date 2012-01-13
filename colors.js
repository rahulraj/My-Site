$(function() {
  // The link to colorScheme.js is hidden by default
  // to not confuse users who don't have JavaScript
  // enabled. Make it visible now
  $('li a[href="colorScheme.html"]').css("display", "inline");

  var mainTextDiv = $('#mainText');

  // read the options for the selects into an array to use for
  // the random color button
  var selectOptions = [];
  $('#headerSelect > option').each(function(i, selected) {
    selectOptions[i] = $(selected).val();
  });

  var ColorSet = function(headerHex, titleHex, mainHex, sideHex, bgHex) {
    // Constructor for an object that stores a set of the hexcodes
    // for a specified color scheme
    this.headerHex = headerHex;
    this.titleHex = titleHex;
    this.mainHex = mainHex;
    this.sideHex = sideHex;
    this.bgHex = bgHex;
  };

  var defaultColorSet = function() {
    return new ColorSet('#0099FF', '#FFCC00', '#FFFFFF',
        '#808080', '#B0C4DE');
  };

  var changeColor = function(selector, color) {
    // changes the background-color of the elements covered 
    // by selector to color
    $(selector).css("background-color", color);
  };

  var animateColor = function(selector, color) {
    // like changeColor, but does the change with an
    // animation, using jquery.colors.js
    // we only animate the initial change of color when the
    // user first picks the new color, all other changes of
    // the css value are done instantly with changeColor
    $(selector).animate({backgroundColor: color}, 'slow');
  };

  var save = function() {
    var newColors = new ColorSet(
        $('#headerSelect').val(),
        $('#titleSelect').val(),
        $('#mainBodySelect').val(),
        $('#navSelect').val(),
        $('#backgroundSelect').val());
    $.cookie("color", JSON.stringify(newColors),{expires: 7});
  };

  var selectChangeEvent = function(selector, color) {
    // event that is called when one of the selects changes. 
    // The elements specified by selector animate a color
    // change to color, and the cookie is updated
    // accordingly
    animateColor(selector, color);
    save();
  };

  mainTextDiv.on('change', '#headerSelect', function() {
    selectChangeEvent("header", $('#headerSelect').val());
  });

  mainTextDiv.on('change', '#titleSelect', function() {
    selectChangeEvent("h1", $('#titleSelect').val());
  });

  mainTextDiv.on('change', '#mainBodySelect', function() {
    selectChangeEvent("#mainText", $('#mainBodySelect').val());
  });

  mainTextDiv.on('change', '#navSelect', function() {
    // In case the user highlighted nav li's via
    // highlightNav.js, change them too
    selectChangeEvent("nav, nav li", $('#navSelect').val());
  });

  mainTextDiv.on('change', '#backgroundSelect', function() {
    selectChangeEvent("body", $('#backgroundSelect').val());
  });

  var set = function(colSet, shouldAnimate) {
    // sets the selects' names and the background colors as
    // specified by colSet, animates if shouldAnimate is
    // true, else just changes the colors
    colSet = $.extend(defaultColorSet(), colSet);//remove null values just in case
    $('#headerSelect').val(colSet.headerHex);
    $('#titleSelect').val(colSet.titleHex);
    $('#mainBodySelect').val(colSet.mainHex);
    $('#navSelect').val(colSet.sideHex);
    $('#backgroundSelect').val(colSet.bgHex);

    var colorFun = shouldAnimate ? animateColor : changeColor;

    colorFun("header", colSet.headerHex);
    colorFun("h1", colSet.titleHex);
    colorFun("#mainText", colSet.mainHex);
    colorFun("nav, nav li", colSet.sideHex);
    colorFun("body", colSet.bgHex);
  };

  var resetCookie = function() {
    $.cookie("color", null);
  };

  mainTextDiv.on('click', '#resetButton', function() {
    set(defaultColorSet(), true);
    resetCookie();
  });

  var randomNum = function(maxVal) {
    return Math.floor(Math.random() * maxVal);
  };

  mainTextDiv.on('click', '#listRandom', function() {
    var randomColors = []; 
    var numOptions = selectOptions.length;
    for (var i = 0; i < numOptions; i++) {
      randomColors[i] = selectOptions[randomNum(numOptions)];
    }
    var randCols = new ColorSet(randomColors[0], randomColors[1],
      randomColors[2], randomColors[3],
      randomColors[4]);
    set(randCols, true);
    save();
  });

  mainTextDiv.on('click', '#expRandom', function() {
    var randRGBVal = function() {
      // FF in hex:
      var maxVal = 255;
      var colHex = randomNum(maxVal).toString(16); 
      // pad it with leading 0's if needed
      while (colHex.length < 2) {
        colHex = "0" + colHex;
      }
      return colHex;
    };

    var getColorHex = function() {
      var red = randRGBVal();
      var green = randRGBVal();
      var blue = randRGBVal();
      return "#" + red + green + blue;
    };
    var newCols = [];
    $("select").each(function(index) {
      var col = getColorHex().toUpperCase();
      var self = $(this);
      var newColOption = $("<option>", {
        value : col,
          html : col});
      self.append(newColOption);
      self.val(col);
      newCols[index] = col;
    });
    set(new ColorSet(newCols[0], newCols[1],
          newCols[2], newCols[3],
          newCols[4]), true);
    save();
  });

  var setColorsFromCookie = function() {
    // reads color and sets the colors accordingly
    // does NOT animate the color change, as the page should
    // load with the changed colors, and the user should not
    // see the original ones (they have already seen an
    // animation)
    set(JSON.parse($.cookie("color")), false);
  };

  setColorsFromCookie();

});
