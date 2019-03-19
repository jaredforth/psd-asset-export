//@include "fonts.jsx";

var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.INCHES;

var docRef = app.documents.add(2, 4);

var artLayerRef = docRef.artLayers.add();
artLayerRef.kind = LayerKind.TEXT;

var textItemRef = artLayerRef.textItem;
textItemRef.contents = "Hello, World :)";

docRef = null
artLayerRef = null
textItemRef = null

preferences.rulerUnits = originalUnit;