(function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$(document).ready(function(){
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  // e.g. just plyr.setup(); and leave it at that if you have no need for events
  var controls = ["<div class='plyr__controls'>",
      "<button type='button' data-plyr='play' class='cta'>",
          "Play",
          "<span class='plyr__sr-only'>Play</span>",
      "</button>",
      "<button type='button' data-plyr='pause' class='cta'>",
          "Pause",
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

        $('.player-container').removeClass('collapsed');
        $('.player-container').addClass('open');

        var soundURL = $(this).attr('data-sound');
        $('.player .track-title span').html($(this).attr('data-title'));
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

        adjustEntriesContainerHeight();
      });
    });

    function closeEntry(entry){
      entry
        .queue("closer",function(next){
          $(this).attr('style','');
          next();
        })
        .queue("closer",function(next){
          $(this).removeClass('featured');
          next();
        })
        .queue("closer",function(next){
          $(this).addClass('collapsed');
          next();
        })
        .queue("closer",function(next){
          entry.siblings().animate({opacity:1},
            {duration:200,queue:false});
          next();
        })
        .dequeue("closer");

        $('.entries-wrap').css('overflow-x','scroll');
        adjustEntriesContainerHeight();

    }

    function openEntry(entry){

      var headerHeight = entry.find('.entry__header').height();
      var contentHeight = entry.find('.entry__content').height();
      var entriesAreaHeight = $('.entries-container').height();

      entry
        .queue("expander",function(next){
          entry.siblings().animate({opacity:0},
            {duration:150,queue:false});
          $(this).addClass('featured');
          console.log('add class');
          next();
        })
        .delay(150,"expander")
        .queue("expander",function(next){
          $('.entries-wrap').scrollTo($(this),150);
          console.log('scroll to');
          next();
        })

        .dequeue("expander");

        $('.entries-wrap').css('overflow-x','hidden');
        adjustEntriesContainerHeight();
    }

    $('.entry--sound .entry__title').each(function(){
      $(this).click(function(e){

        var entry = $(this).parent().parent().parent();
        openEntry(entry);

      });
    });

    $('.entry--sound .close').each(function(){
      $(this).click(function(e){

        var entry = $(this).parent().parent().parent();

        closeEntry(entry);

      });
    });

    $('.logo-container').clickToggle(function(){
      $('.site-header').addClass('open');
    },function(){
      $('.site-header').removeClass('open');
    });

    $('.entries-wrap').scroll(function(){
      var navWidth = $('.timeline-container').width();
      var entriesPosition = $(this).scrollLeft();
      var totalWidth = 0;
      $('.entries-wrap .entry').each(function(){ totalWidth += $(this).innerWidth()+1; });
      console.log(totalWidth,entriesPosition,navWidth);
      if (entriesPosition < 0){
        var positionPercentage = (Math.abs(entriesPosition) / (totalWidth - $(this).innerWidth()))*100;
        $('.timeline-position-indicator').css('left',(100-positionPercentage)+'%');
      } else {
        var positionPercentage = (entriesPosition / (totalWidth - $(this).innerWidth()))*100;
        $('.timeline-position-indicator').css('left',positionPercentage+'%');
      }




    });

    function adjustEntriesContainerHeight(){
      var calculatedHeight = $(window).height() - ($('header').outerHeight() + $('nav').outerHeight() + $('.player-container.open').outerHeight());
      $('.entries-container').css('height',calculatedHeight)
    }


    $('a[data-target-entry]').each(function(){
      $(this).click(function(){
        var currentEntry = $('.entry.featured');
        closeEntry(currentEntry);
        var hash = $(this).attr('data-target-entry');
        var entry = $('[data-entry-number="'+hash+'"]');
  			$('.entries-wrap').scrollTo(entry,200);
      });
		});


    var hash = window.location.hash;

		if(hash){
			var entry = $('[data-entry-number="'+hash.substr(1)+'"]');
			openEntry(entry);
		}

});
