$(document).ready(function(){
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  // e.g. just plyr.setup(); and leave it at that if you have no need for events
  var controls = ["<div class='plyr__controls'>",
      "<button type='button' data-plyr='play'>",
          "<svg><use xlink:href='#plyr-play'></use></svg>",
          "<span class='plyr__sr-only'>Play</span>",
      "</button>",
      "<button type='button' data-plyr='pause'>",
          "<svg><use xlink:href='#plyr-pause'></use></svg>",
          "<span class='plyr__sr-only'>Pause</span>",
      "</button>",
      "<span class='plyr__progress'>",
          "<label for='seek{id}' class='plyr__sr-only'>Seek</label>",
          "<input id='seek{id}' class='plyr__progress--seek' type='range' min='0' max='100' step='0.1' value='0' data-plyr='seek'>",
          "<progress class='plyr__progress--played' max='100' value='0' role='presentation'></progress>",
          "<progress class='plyr__progress--buffer' max='100' value='0'>",
              "<span>0</span>% buffered",
          "</progress>",
          "<span class='plyr__tooltip'>00:00</span>",
      "</span>",
      "<span class='plyr__time'>",
          "<span class='plyr__sr-only'>Current time</span>",
          "<span class='plyr__time--current'>00:00</span>",
      "</span>",
      "<span class='plyr__time'>",
          "<span class='plyr__sr-only'>Duration</span>",
          "<span class='plyr__time--duration'>00:00</span>",
      "</span>",
  "</div>"].join("");

  var player = plyr.setup({
    // Output to console
    debug: true,
    html: controls
  });


    $('.entry--sound .play-sound').each(function(){
      $(this).click(function(e){
        e.preventDefault();

        var soundURL = $(this).attr('data-sound');
        $('.player .track-title').html($(this).attr('data-title'));
        $('.player .download-link a').attr('href', soundURL);

        player[0].source({
          type:       'audio',
          title:      'Example title',
          sources: [{
            src:      soundURL,
            type:     'audio/mp3'
          }]
        });

        player[0].on('canplay', function(){
          player[0].play();
        });
      });
    });
});
