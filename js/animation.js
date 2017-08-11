//var mySVG = $('#element').drawsvg({
//    
//});
//mySVG.drawsvg('animate');

var $doc = $(document),
$win = $(window),
$svg = $('#element').drawsvg(),
max = $doc.height() - $win.height();
  
$win.on('scroll', function() {
var p = $win.scrollTop() / max;
$svg.drawsvg('progress', p);
});
