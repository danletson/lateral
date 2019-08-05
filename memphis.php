<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Music for the Memphis Group </title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/flashblock.css">
        <link rel="stylesheet" href="css/page-player.css">
        <link href='http://fonts.googleapis.com/css?family=Six+Caps' rel='stylesheet' type='text/css'>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="js/patterns.js"></script>
        <script src="js/soundmanager2.js"></script>
        <script src="js/page-player.js"></script>
        <script>
/* --------

  Config override: This demo uses shiny flash 9 stuff, overwriting Flash 8-based defaults
  Alternate PP_CONFIG object must be defined before soundManager.onready()/onload() fire.
  Alternately, edit the config in page-player.js to simply use the values below by default

-------- */

// demo only, but you can use these settings too..
soundManager.setup({
  flashVersion: 9,
  preferFlash: false, // for visualization effects
  useHighPerformance: true, // keep flash on screen, boost performance
  wmode: 'transparent', // transparent SWF, if possible
  url: 'js/swf/'
});

// custom page player configuration

var PP_CONFIG = {
  autoStart: false,      // begin playing first sound when page loads
  playNext: true,        // stop after one sound, or play through list until end
  useThrottling: false,  // try to rate-limit potentially-expensive calls (eg. dragging position around)</span>
  usePeakData: false,     // [Flash 9 only] whether or not to show peak data (left/right channel values) - nor noticable on CPU
  useWaveformData: false,// [Flash 9 only] show raw waveform data - WARNING: LIKELY VERY CPU-HEAVY
  useEQData: false,      // [Flash 9 only] show EQ (frequency spectrum) data
  useFavIcon: false     // try to apply peakData to address bar (Firefox + Opera) - performance note: appears to make Firefox 3 do some temporary, heavy disk access/swapping/garbage collection at first(?) - may be too heavy on CPU
}
        </script>
    </head>
    <body>
        <?php include("img/pattern-defs.svg"); ?>
        <script>
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
            $('.control').each(function(){
                $(this).hide();
            });

            var i=0;

            $('#next').click(function(){
                pagePlayer.playNext();
            });
            $('#prev').click(function(){
                pagePlayer.playPrevious();
            });
            $('#info').clickToggle(function(){
                $('#flipper').addClass('flipped');
            }, function(){
                $('#flipper').removeClass('flipped');
            });

        });  
        </script>
        <div id="container">
            <div class="background">
                <svg width="100%" height="100%">
                    <rect id="layerOne" x="0" y="0" width="100%" height="100%" stroke="none" fill="none"/>
                    <rect id="layerTwo" x="0" y="0" width="100%" height="100%" stroke="none" fill="none"/>
                    <rect id="layerThree" x="0" y="0" width="100%" height="100%" stroke="none" fill="none"/>
                </svg>
            </div>
        </div>
        
        <div class="flip-container">
            <div id="flipper">
                <div class="player-block">
                    <img class="logo" src="img/logo.png">
                    <div id="sm2-container"></div>
                    <ul class="playlist">
                        <li>
                            <a href="sounds/01.mp3">coconut grove</a>
                        </li>
                        <li>
                            <a href="sounds/02.mp3">tahiti</a>
                        </li>
                        <li>
                            <a href="sounds/03.mp3">milano</a>
                        </li>
                        <li>
                            <a href="sounds/04.mp3">paris</a>
                        </li>
                        <li>
                            <a href="sounds/05.mp3">bosphorus</a>
                        </li>
                        <li>
                            <a href="sounds/06.mp3">midtown manhattan</a>
                        </li>
                        <li>
                            <a href="sounds/07.mp3">Leeds</a>
                        </li>
                        <li>
                            <a href="sounds/08.mp3">Vienna</a>
                        </li>
                        <li>
                            <a href="sounds/09.mp3">St. Petersburg, Russia, Los Angeles, Eden</a>
                        </li>
                        <li>
                            <a href="sounds/10.mp3">Cairo</a>
                        </li>
                        <li>
                            <a href="sounds/11.mp3">Bordeaux</a>
                        </li>
                        <li>
                            <a href="sounds/12.mp3">Alaska</a>
                        </li>
                    </ul>
                </div>
                <div class="text-block">
                    <p>Music for The Memphis Group was written in late 2013, inspired by the Milan design collective of the same name. The work produced by the association of international artists – active between the years 1981 and 1987 – playfully engaged in hypothetical and pragmatic applications (furniture, apparel, sculpture, kitchenware) for emerging global resources, both synthetic and organic, rare and commonplace.</p>  
                    <p>The loud colors, plastic laminate, and asymmetrical patterning was intended in part as a rejection of dominant Modernist aesthetic ideals of the time – ideals that still hold over today in contemporary attitudes concerning clean, “essentialist” design. The Memphis Group’s willful, incongruous eclecticism filtered into a catalog of gleeful chimera, where the space-aged ornamentation of American Googie architecture fused with minimalist post-industrial Japanese practices, and where quick-witted Italian commercial design ran rampant alongside crude approximations of tribal iconography.</p>
                    <p>Despite their polymorphous approach, I could not find clear-cut examples of musical pieces sanctioned by Memphis. Scattered bits of influence seemed to be apparent – the contemporaneous work of Hosono Haroumi, Mark Mothersbaugh’s Muzik for Insomniaks, and Shimizu Yasuaki’s Music for Commercials served as principal inspiration for how to translate these aesthetic ideas.</p>
                    <p>Since the Memphis Group’s productivity emerged alongside of General MIDI and Fairlight technology, I collected large sound libraries of correlated materials and peppered them with 1950s exotica records.  I made this choice to highlight the shared, reckless sense of global appropriation.  Compositionally, I used contrasting time and key signatures as well as abrupt tonal shifts to mirror Memphis’s commitment to the asymmetrical. Above all, my priority was to preserve the humor and accessible heterogeneity of the original work.</p>
                    <p><a href="http://glob.daniel-letson.com" target="blank">Dan Letson</a> is responsible for the visual element. His involvement was something that I had hoped for, even before the piece was finished, as his insight into the Memphis Group’s practice was absolutely integral to finishing the work. In this presentation, each track is coupled with an algorithmically-generated pattern constrained by a set of parameters that reflect certain compositional elements. Each viewing generates a unique arrangement.</p> 
                    <p>I’d also like to thank Andrew Shamash for repeated listening and Eric Laska for corralling this effort and sharing it. I hope you enjoy it.</p>
                    <p>- Matt Wellins</p>
                    <p>High quality audio available via <a href="http://lateraladdition.org/#14" target="blank">Lateral Addition</a></p>
                </div>
            </div>
        </div>
        <div class="control" id="prev"><span>&#8701;</span></div>
        <div class="control" id="next"><span>&#8702;</span></div>
        <div id="info"><span>?</span></div>
    </body>
</html>
