//@include "fonts.jsx";

// var originalUnit = preferences.rulerUnits;
// preferences.rulerUnits = Units.INCHES;

// var docRef = app.documents.add(2, 4);

// var artLayerRef = docRef.artLayers.add();
// artLayerRef.kind = LayerKind.TEXT;

// var textItemRef = artLayerRef.textItem;
// textItemRef.contents = "Hello, World :)";

// docRef = null
// artLayerRef = null
// textItemRef = null

// preferences.rulerUnits = originalUnit;

var allLayers = new Array();
var theLayers = collectAllLayers(app.activeDocument, 0);


function collectAllLayers (theParent, level)
{
  for (var m = theParent.layers.length - 1; m >= 0; m--)
  {
    var theLayer = theParent.layers[m];
    allLayers.push(theLayer);    
    if (theLayer.typename != "ArtLayer")
    {
      allLayers.push(level + theLayer.name);
      collectAllLayers(theLayer, level + 1)
    }
  }
}

for (var i = 0; i < allLayers.length; i++) 
{
    alert(i + " = " + allLayers[i]);
}