var firstAdjectives = [
  'artless',
  'bawdy',
  'beslubbering',
  'bootless',
  'churlish',
  'cockered',
  'clouted',
  'craven',
  'currish',
  'dankish',
  'dissembling',
  'droning',
  'errant',
  'fawning',
  'fobbing',
  'froward',
  'frothy',
  'gleeking',
  'goatish',
  'gorbellied',
  'impertinent',
  'infectious',
  'jarring',
  'loggerheaded',
  'lumpish',
  'mammering',
  'mangled',
  'mewling',
  'paunchy',
  'pribbling',
  'puking',
  'puny',
  'qualling',
  'rank',
  'reeky',
  'roguish',
  'ruttish',
  'saucy',
  'spleeny',
  'spongy',
  'surly',
  'tottering',
  'unmuzzled',
  'vain',
  'venomed',
  'villainous',
  'warped',
  'wayward',
  'weedy',
  'yeasty'
];

var secondAdjectives = [
  'base-court',
  'bat-fowling',
  'beef-witted',
  'beetle-headed',
  'boil-brained',
  'clapper-clawed',
  'clay-brained',
  'common-kissing',
  'crook-pated',
  'dismal-dreaming',
  'dizzy-eyed',
  'doghearted',
  'dread-bolted',
  'earth-vexing',
  'elf-skinned',
  'fat-kidneyed',
  'fen-sucked',
  'flap-mouthed',
  'fly-bitten',
  'folly-fallen',
  'fool-born',
  'full-gorged',
  'guts-griping',
  'half-faced',
  'hasty-witted',
  'hedge-born',
  'hell-hated',
  'idle-headed',
  'ill-breeding',
  'ill-nurtured',
  'knotty-pated',
  'milk-livered',
  'motley-minded',
  'onion-eyed',
  'plume-plucked',
  'pottle-deep',
  'pox-marked',
  'reeling-ripe',
  'rough-hewn',
  'rude-growing',
  'rump-fed',
  'shard-borne',
  'sheep-biting',
  'spur-galled',
  'swag-bellied',
  'tardy-gaited',
  'tickle-brained',
  'toad-spotted',
  'unchin-snouted',
  'weather-bitten'
];

var nouns = [
  'apple-john',
  'baggage',
  'barnacle',
  'bladder',
  'boar-pig',
  'bugbear',
  'bum-bailey',
  'canker-blossom',
  'clack-dish',
  'clotpole',
  'coxcomb',
  'codpiece',
  'death-token',
  'dewberry',
  'flap-dragon',
  'flax-wench',
  'flirt-gill',
  'foot-licker',
  'fustilarian',
  'giglet',
  'gudgeon',
  'haggard',
  'harpy',
  'hedge-pig',
  'horn-beast',
  'hugger-mugger',
  'joithead',
  'lewdster',
  'lout',
  'maggot-pie',
  'malt-worm',
  'mammet',
  'measle',
  'minnow',
  'miscreant',
  'moldwarp',
  'mumble-news',
  'nut-hook',
  'pigeon-egg',
  'pignut',
  'puttock',
  'pumpion',
  'ratsbane',
  'scut',
  'skainsmate',
  'strumpet',
  'varlot',
  'vassal',
  'whey-face',
  'wagtail'
];

/*  first adjective + second adjective + nouns
1. get a random entry from list of first adjectives
2. get a random entry from list of second adjectives
3. get a random entry from list of nouns adjectives
4. combine and output:

to get a random array element:
  1. Find the lenght of the array
  2. generate random number between 0 & length -1
  3. return that element

*/

//Returns a random number between min (including min) and max - 1 (aka non-inclusive))
var randRange = function ( min, max) {

  var range = max - min;
  var result = min + (Math.random() * range);
  result = Math.floor( result );
  return result ;

  // return Math.floor(min + (Math.random() * (max - min)));
  // The line above condenses the four lines above into one line, but runs risk
  //of not being readable.
};

randRange(20,50);

  var randomElement = function ( arr ) {
  var randIndex = randRange(0, arr.length );
  return arr[ randIndex ];

};

var generateInsult = function(){
  var firstAdj = randomElement( firstAdjectives );
  var secondAdj = randomElement( secondAdjectives );
  var noun = randomElement( nouns );

  var result = "Thou " + firstAdj + " " + secondAdj + " " + noun + "!";
  return result;
};

for (var i = 0; i < 10; i++) {
  console.log( generateInsult() );
}

for (var i = 0; i < firstAdjectives.length; i++) {
  for (var j = 0; j < secondAdjectives.length; j++) {
    for (var k = 0; k < nouns.length; k++) {

    var firstAdj = firstAdjectives[ i ];
    var secondAdj = secondAdjectives[ j ];
    var noun = nouns[ k ];

      // console.log("Thou " + firstAdjectives[i] + " " + secondAdjectives[j] + " " + nouns[k] + "!");
      console.log("Thou " + firstAdj + " " + secondAdj + " " + noun + "!");
    }
  }
};
