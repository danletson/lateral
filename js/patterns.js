
	var bolts = document.getElementById('bolts');
	var bricks = document.getElementById('bricks');
	var clumps = document.getElementById('clumps');
	var devices = document.getElementById('devices');
	var dots = document.getElementById('dots');
	var geometricOne = document.getElementById('geomtricOne');
	var hollowShards = document.getElementById('hollowShards');
	var pills = document.getElementById('pills');
	var rocks = document.getElementById('rocks');
	var sawtooth = document.getElementById('sawtooth');
	var scales = document.getElementById('scales');
	var scribbleOne = document.getElementById('scribbleOne');
	var scribbleTwo = document.getElementById('scribbleTwo');
	var squiggle = document.getElementById('squiggle');
	var stars = document.getElementById('stars');
	var xGrid = document.getElementById('xGrid');

var settings = [
	{	
		track: 1,
		colors:["gold","darkorange","indianred","orange"
		],
		patterns:[
			{
				pattern:"dots",
				scale: false,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"stars",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"scribbleOne",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
		]
	},{
		track: 2,
		colors:["turquoise","limegreen","lightcoral","yellow"
		],
		patterns:[
			{
				pattern:"sawtooth",
				scale: true,
				rotate: false,
				fill: true,
				stroke: false
			},
			{
				pattern:"rocks",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"bolts",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
		]
	},{
		track: 3,
		colors:["crimson","mediumseagreen","floralwhite","tomato"
		],
		patterns:[
			{
				pattern:"dots",
				scale: false,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"scribbleTwo",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"hollowShards",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
		]
	},{
		track: 4,
		colors:["mediumorchid","darkslateblue","midnightblue","deeppink"
		],
		patterns:[
			{
				pattern:"xGrid",
				scale: true,
				rotate: false,
				fill: true,
				stroke: false
			},
			{
				pattern:"scribbleTwo",
				scale: false,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"clumps",
				scale: true,
				rotate: true,
				fill: false,
				stroke: true
			}
		]
	},{
		track: 5,
		colors:["orangered","dodgerblue","forestgreen","yellow"
		],
		patterns:[
			{
				pattern:"bricks",
				scale: false,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"stars",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"bolts",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
		]
	},{
		track: 6,
		colors:["#444","#222","lightsteelblue","steelblue"
		],
		patterns:[
			{
				pattern:"xGrid",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"geometricOne",
				scale: true,
				rotate: false,
				fill: true,
				stroke: false
			},
			{
				pattern:"pills",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
		]
	},{
		track: 7,
		colors:["darkorange","firebrick","cadetblue","gold"
		],
		patterns:[
			{
				pattern:"dots",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"scribbleTwo",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"rocks",
				scale: false,
				rotate: true,
				fill: false,
				stroke: true
			}
		]
	},{
		track: 8,
		colors:["#333","forestgreen","dodgerblue","slateblue"
		],
		patterns:[
			{
				pattern:"bricks",
				scale: true,
				rotate: false,
				fill: true,
				stroke: false
			},
			{
				pattern:"sawtooth",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"rocks",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
			
		]
	},{
		track: 8,
		colors:["gainsboro","white"
		],
		patterns:[
			{
				pattern:"squiggle",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"devices",
				scale: false,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"stars",
				scale: false,
				rotate: true,
				fill: false,
				stroke: false
			}
			
		]
	},{
		track: 9,
		colors:["mediumorchid","mediumspringgreen","dodgerblue","darkorange"
		],
		patterns:[
			{
				pattern:"squiggle",
				scale: true,
				rotate: false,
				fill: true,
				stroke: false
			},
			{
				pattern:"rocks",
				scale: true,
				rotate: true,
				fill: false,
				stroke: true
			},
			{
				pattern:"hollowShards",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
			
		]
	},{
		track: 11,
		colors:["lightcoral","orchid","indianred","maroon"
		],
		patterns:[
			{
				pattern:"rocks",
				scale: true,
				rotate: false,
				fill: true,
				stroke: false
			},
			{
				pattern:"bricks",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"clumps",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
			
		]
	},{
		track: 12,
		colors:["#222","midnightblue","#111","darkslateblue"
		],
		patterns:[
			{
				pattern:"hollowShards",
				scale: true,
				rotate: false,
				fill: true,
				stroke: false
			},
			{
				pattern:"rocks",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			},
			{
				pattern:"scales",
				scale: true,
				rotate: true,
				fill: true,
				stroke: false
			}
			
		]
	}
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function changeTrack(trackNumber){

	var i=0;
	shuffleArray(settings[trackNumber].colors);
	console.log(i%(settings[trackNumber].colors.length));
	console.log(settings[trackNumber].colors[(settings[trackNumber].colors.length-1)%i]);
	console.log(settings[trackNumber].patterns[0].pattern);
	var pattern1 = document.getElementById(settings[trackNumber].patterns[0].pattern+'-pattern');
	var pattern2 = document.getElementById(settings[trackNumber].patterns[1].pattern+'-pattern');
	var pattern3 = document.getElementById(settings[trackNumber].patterns[2].pattern+'-pattern');

	var layer1 = document.getElementById('layerOne');
	var layer2 = document.getElementById('layerTwo');
	var layer3 = document.getElementById('layerThree');	

	$('body').css('background-color', settings[trackNumber].colors[i%(settings[trackNumber].colors.length)]);
	console.log(settings[trackNumber].colors[i%(settings[trackNumber].colors.length)]);
	function advanceColor(index){
		i++;
		console.log(i);
		console.log(settings[trackNumber].colors[i%(settings[trackNumber].colors.length)]);
		return (settings[trackNumber].colors[i%(settings[trackNumber].colors.length)]);
	}


	pattern1.setAttributeNS(null,'patternTransform','rotate('+((settings[trackNumber].patterns[0].rotate) ? (Math.random()*360) : 0)+'),scale('+((settings[trackNumber].patterns[0].scale) ? ((Math.random()*1.25)+0.75) : 1.0)+')');
	pattern2.setAttributeNS(null,'patternTransform','rotate('+((settings[trackNumber].patterns[1].rotate) ? (Math.random()*360) : 0)+'),scale('+((settings[trackNumber].patterns[1].scale) ? ((Math.random()*1.25)+0.75) : 1.0)+')');
	pattern3.setAttributeNS(null,'patternTransform','rotate('+((settings[trackNumber].patterns[2].rotate) ? (Math.random()*360) : 0)+'),scale('+((settings[trackNumber].patterns[2].scale) ? ((Math.random()*1.25)+0.75) : 1.0)+')');

	pattern1.setAttributeNS(null,'fill',((settings[trackNumber].patterns[0].fill) ? advanceColor(i) : 'none'));
	pattern3.setAttributeNS(null,'fill',((settings[trackNumber].patterns[2].fill) ? advanceColor(i) : 'none'));
	pattern2.setAttributeNS(null,'fill',((settings[trackNumber].patterns[1].fill) ? advanceColor(i) : 'none'));
	
	pattern1.setAttributeNS(null,'stroke',((settings[trackNumber].patterns[0].stroke) ? advanceColor(i) : 'none'));
	pattern2.setAttributeNS(null,'stroke',((settings[trackNumber].patterns[1].stroke) ? advanceColor(i) : 'none'));
	pattern3.setAttributeNS(null,'stroke',((settings[trackNumber].patterns[2].stroke) ? advanceColor(i) : 'none'));

    layer1.setAttribute('fill', 'url(#'+settings[trackNumber].patterns[0].pattern+'-pattern)');
    layer2.setAttribute('fill', 'url(#'+settings[trackNumber].patterns[1].pattern+'-pattern)');
    if (settings[trackNumber].patterns[2].pattern){
    	layer3.setAttribute('fill', 'url(#'+settings[trackNumber].patterns[2].pattern+'-pattern)');
    } else {
    	layer3.setAttribute('fill', 'none');
    }
	
}





