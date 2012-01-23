$(function() {

  var supportsHtml5Storage = function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (error) {
      return false;
    }
  };

  var mainTextDiv = $('#mainText');

  // read the options for the selects into an array to use for
  // the random color button
  var selectOptions = [];
  $('#headerSelect > option').each(function(i, selected) {
    selectOptions[i] = $(selected).val();
  });

  var ColorSet = function(headerHex, bodyHex) {
    // Constructor for an object that stores a set of the hexcodes
    // for a specified color scheme
    this.headerHex = headerHex;
    this.bodyHex = bodyHex;
  };

  var defaultColorSet = function() {
    return new ColorSet('#FFC373', '#F0FFF0');
  };

  var changeColor = function(objectToChange, color) {
    // changes the background-color of the given jQuery object to color
    objectToChange.css('background-color', color);
  };

  var animateColor = function(objectToChange, color) {
    // like changeColor, but does the change with an
    // animation, using jquery.colors.js
    // we only animate the initial change of color when the
    // user first picks the new color, all other changes of
    // the css value are done instantly with changeColor
    objectToChange.animate({backgroundColor: color}, 'slow');
  };

  var tellUser = function(message) {
    var messageElement = $('#colorMessage');
    if (messageElement.length === 0) {
      var newMessageElement = $('<p>', {id: 'colorMessage', html: message});
      mainTextDiv.find('article').append(newMessageElement);
    } else {
      messageElement.html(message);
    }
  };

  var save = function() {
    var newColors = new ColorSet( $('#headerSelect').val(),
        $('#bodySelect').val());
    $.cookie('color2', JSON.stringify(newColors), {expires: 7});
    if (!$.cookie('color2')) {
      var message = "You haven't enabled cookies for this site. This script " +
            "won't be able to save any color changes.";
      tellUser(message);
    }
  };

  var selectChangeEvent = function(selector, color) {
    // event that is called when one of the selects changes. 
    // The elements specified by selector animate a color
    // change to color, and the cookie is updated
    // accordingly
    animateColor($(selector), color);
    save();
  };

  mainTextDiv.on('change', '#headerSelect', function() {
    selectChangeEvent('header', $('#headerSelect').val());
  });

  mainTextDiv.on('change', '#bodySelect', function() {
    selectChangeEvent('#mainText', $('#bodySelect').val());
  });

  var set = function(colorSet, shouldAnimate) {
    // sets the selects' names and the background colors as
    // specified by colorSet, animates if shouldAnimate is
    // true, else just changes the colors
    colorSet = $.extend(defaultColorSet(), colorSet);//remove null values just in case
    $('#headerSelect').val(colorSet.headerHex);
    $('#bodySelect').val(colorSet.bodyHex);

    var colorFunction = shouldAnimate ? animateColor : changeColor;

    colorFunction($('header'), colorSet.headerHex);
    colorFunction($('#mainText'), colorSet.bodyHex);
  };

  var resetCookie = function() {
    $.cookie('color2', null);
  };

  mainTextDiv.on('click', '#resetButton', function() {
    set(defaultColorSet(), true);
    resetCookie();
  });

  var randomNumber = function(maximumValue) {
    return Math.floor(Math.random() * maximumValue);
  };

  mainTextDiv.on('click', '#listRandom', function() {
    var randomColors = []; 
    var numOptions = selectOptions.length;
    for (var i = 0; i < numOptions; i++) {
      randomColors[i] = selectOptions[randomNumber(numOptions)];
    }
    var randomColorSet = new ColorSet(randomColors[0], randomColors[1]);
    set(randomColorSet, true);
    save();
  });

  mainTextDiv.on('click', '#expRandom', function() {
    var randomRgbValue = function() {
      // FF in hex:
      var maximumValue = 255;
      var colorHex = randomNumber(maximumValue).toString(16); 
      // pad it with leading 0's if needed
      while (colorHex.length < 2) {
        colorHex = '0' + colorHex;
      }
      return colorHex;
    };

    var getColorHex = function() {
      var red = randomRgbValue();
      var green = randomRgbValue();
      var blue = randomRgbValue();
      return '#' + red + green + blue;
    };
    var newColors = [];
    $('select').each(function(index) {
      var color = getColorHex().toUpperCase();
      var newColorOption = $('<option>', {
        value : color,
        html : color});
      $(this).append(newColorOption).val(color);
      newColors[index] = color;
    });
    set(new ColorSet(newColors[0], newColors[1]), true);
    save();
  });

  var setColorsFromCookie = function() {
    // reads color and sets the colors accordingly
    // does NOT animate the color change, as the page should
    // load with the changed colors, and the user should not
    // see the original ones (they have already seen an
    // animation)
    set(JSON.parse($.cookie('color2')), false);
  };

  setColorsFromCookie();

});
