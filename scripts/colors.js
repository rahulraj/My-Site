var site = site || {};

site.ColorSet = function(headerHex, bodyHex) {
  // Constructor for an object that stores a set of the hexcodes
  // for a specified color scheme
  this.headerHex = headerHex;
  this.bodyHex = bodyHex;
};

site.ColorSet.fromJson = function(jsonString) {
  var result = JSON.parse(jsonString); 
  return new site.ColorSet(result.headerHex, result.bodyHex);
};

site.ColorSet.default = function() {
  return new site.ColorSet('#FFC373', '#F0FFF0');
};

site.ColorSet.prototype.asJson = function() {
  return JSON.stringify(this);
};

site.CookieStorage = function() {};

site.CookieStorage.prototype.save = function(colorSet) {
  $.cookie('color2', colorSet.asJson(), {expires: 7});
  // return true if saving the cookie was successful
  return !!($.cookie('color2'));
};

site.CookieStorage.prototype.load = function() {
  if (!$.cookie('color2')) {
    return null;
  }
  return site.ColorSet.fromJson($.cookie('color2'));
};

site.CookieStorage.prototype.clear = function() {
  $.cookie('color2', null);
};

site.ColorChanger = function(argumentMap) {
  this.headerSelect = argumentMap.headerSelect;
  this.bodySelect = argumentMap.bodySelect;
  this.header = argumentMap.header;
  this.body = argumentMap.body;
  this.message = argumentMap.message;
  this.selectOptions = argumentMap.selectOptions;
  this.storage = argumentMap.storage;
};

// changes the background-color of the given jQuery object to color
site.changeColor = function(objectToChange, color) {
  objectToChange.css('background-color', color);
};

// like changeColor, but does the change with an
// animation, using jquery.colors.js
// we only animate the initial change of color when the
// user first picks the new color, all other changes of
// the css value are done instantly with changeColor
site.animateColor = function(objectToChange, color) {
  objectToChange.animate({backgroundColor: color}, 'slow');
};

site.randomNumber = function(maximumValue) {
  return Math.floor(Math.random() * maximumValue);
};

site.randomRgbValue = function() {
  // FF in hex:
  var maximumValue = 255;
  var colorHex = site.randomNumber(maximumValue).toString(16); 
  // pad it with leading 0's if needed
  while (colorHex.length < 2) {
    colorHex = '0' + colorHex;
  }
  return colorHex;
};

site.newColorHex = function() {
  var red = site.randomRgbValue();
  var green = site.randomRgbValue();
  var blue = site.randomRgbValue();
  return '#' + red + green + blue;
};

// event that is called when one of the selects changes. 
// The elements specified by selector animate a color
// change to color, and the cookie is updated
// accordingly
site.ColorChanger.prototype.onSelectChange = function(object, color) {
  site.animateColor(object, color);
  this.save();
};

site.ColorChanger.prototype.bindEvents = function() {
  var changer = this;
  this.body.on('change', '#headerSelect', function() {
    changer.onSelectChange(changer.header,
        changer.headerSelect.val());
  });

  this.body.on('change', '#bodySelect', function() {
    changer.onSelectChange(changer.body, changer.bodySelect.val());
  });

  this.body.on('click', '#resetButton', function() {
    changer.setColors(site.ColorSet.default(), {animate: true});
    changer.storage.clear();
  });

  this.body.on('click', '#listRandom', function() {
    var randomColors = []; 
    var numberOfOptions = changer.selectOptions.length;
    for (var i = 0; i < numberOfOptions; i++) {
      randomColors[i] = changer.selectOptions[
          site.randomNumber(numberOfOptions)];
    }
    var randomColorSet = new site.ColorSet(randomColors[0], randomColors[1]);
    changer.setColors(randomColorSet, {animate: true});
    changer.save();
  });

  this.body.on('click', '#experimentalRandom', function() {
    var newColors = [];
    $('select').each(function(index) {
      var color = site.newColorHex().toUpperCase();
      var newColorOption = $('<option>', {
        value : color,
        html : color});
      $(this).append(newColorOption).val(color);
      newColors[index] = color;
    });
    changer.setColors(new site.ColorSet(newColors[0], newColors[1]),
        {animate: true});
    changer.save();
  });
};

site.ColorChanger.prototype.tellUser = function(toReport) {
  if (this.message.length === 0) {
    var newMessageElement = $('<p>', {id: 'colorMessage', html: toReport});
    this.body.find('article').append(newMessageElement);
  } else {
    this.message.html(message);
  }
};

site.ColorChanger.prototype.save = function() {
  var newColors = new site.ColorSet(this.headerSelect.val(),
      this.bodySelect.val());
  var succeeded = this.storage.save(newColors);
  if (!succeeded) {
    var message = "You haven't enabled cookies for this site. This script " +
          "won't be able to save any color changes.";
    this.tellUser(message);
  }
};

site.ColorChanger.prototype.setColors = function(colorSet, shouldAnimateMap) {
  // sets the selects' names and the background colors as
  // specified by colorSet, animates if shouldAnimate is
  // true, else just changes the colors
  var shouldAnimate = shouldAnimateMap.animate;
  this.headerSelect.val(colorSet.headerHex);
  this.bodySelect.val(colorSet.bodyHex);

  var colorFunction = shouldAnimate ? site.animateColor : site.changeColor;

  colorFunction(this.header, colorSet.headerHex);
  colorFunction(this.body, colorSet.bodyHex);
};

site.ColorChanger.prototype.loadColors = function() {
  var maybeColorSet = this.storage.load(); 
  var colorsToUse = maybeColorSet || site.ColorSet.default();
  this.setColors(colorsToUse, {animate: false});
};

$(function() {
  var supportsHtml5Storage = function() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (error) {
      return false;
    }
  };

  // read the options for the selects into an array to use for
  // the random color button
  var selectOptions = [];
  $('#headerSelect > option').each(function(index, selected) {
    selectOptions[index] = $(selected).val();
  });

  var storage = new site.CookieStorage();

  var colorChanger = new site.ColorChanger({
      headerSelect: $('#headerSelect'),
      bodySelect: $('#bodySelect'),
      header: $('header'),
      body: $('#mainText'),
      selectOptions: selectOptions,
      storage: storage
  });

  colorChanger.bindEvents();
  colorChanger.loadColors();
});
