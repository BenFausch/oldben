angular.module('contentApp.controllers', []).
controller('contentController', function($scope) {
    
    $scope.contentList = [
      {
          Label: {
              title: 'Ooh La La Records',
              job:'Head of Design',
              description: 'Ooh La La Records is a boutique artist development company and independent label based in Brooklyn, NY. It was founded in 2010 by musician/producer Theo Aronson.'
          },
          link:'http://www.oohlalarecords.com/',
          type: 'web',
          nationality: "oohlala",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Label: {
          title: 'Avatar Studios',
          job:'Production Intern',
              description: 'Many artists, producers, and engineers have passed through the doors of this studio. This facility served as Madonnas home when she recorded Like a Virgin and played host to luminaries including Bruce Springsteen, The Rolling Stones, David Bowie and Roxy Music. More recently, artists such as Paul McCartney, Paul Simon, John Mayer, Trey Anastasio, Muse, Josh Groban, Donald Fagen, Norah Jones, Diana Krall, My Morning Jacket, Kings of Leon and Bruno Mars recorded their projects at Avatar. Acoustically, this is undeniably one of the great recording facilities in the world. As proof, Sony and Yamaha both took sound samples for their reverb products as one of the samples from the best acoustic spaces in the world. With the addition of mastering services at our site, we can now support a project from pre-production to production ready masters all under one roof. Avatar is constantly reaching out to a wide range of artists and musical endeavors from unsigned bands, up-and-coming producers & engineers to Broadway cast albums and film scores.'
          },
          type:'music',
          link:'http://www.avatarstudios.net',
          nationality: "avatar",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
              title: 'Ooh La La Records',
              job:'Head of Design',
              description: 'Ooh La La Records is a boutique artist development company and independent label based in Brooklyn, NY. It was founded in 2010 by musician/producer Theo Aronson.'
          },
          link:'http://www.oohlalarecords.com/',
          type: 'music',
          nationality: "oohlala",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
       {
          Label: {
              title: 'Northern Spy Records',
              job:'Social Media Manager/Web Designer',
              description: 'Northern Spy is a Brooklyn based independent record label formed by former staff of the legendary ESP-Disk imprint. As an artist-run label, Northern Spy shines the light on musicians who are tenacious, forward-thinking and making devil-be-damned fine music, while finding substance in the disparate worlds of free improvisation and popular music.'
          },
          link:'http://northernspyrecords.com/',
          type: 'web',
          nationality: "northernspy",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Label: {
          title: 'Hungry March Band',
		job:'Web Designer',		
              description: 'Celebrating over 15 years of bringing live musical spectacle to the people of New York City and beyond is Hungry March Band, a brass, percussion, and performance ensemble. Founded in Brooklyn in 1997 for the Coney Island Mermaid Parade, HMB embodies the spirit of NYCs streets with an inimitable brass sound and inspired, eclectic dance. HMB has shared their creativity with audiences around the United States, South America, and Europe, where theyve been embraced by a longstanding community of brass bands. A unique sonic voice has emerged from the recording of their four self released albums, one that melds their musical knowledge of big band, traditional, and free jazz, with punk rock and global brass influences.'
          },
          type:'web',
          link:'http://www.hungrymarchband.com/blog',
          nationality: "hungry",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Hungry March Band',
          job:'Tubist',
             description: 'Celebrating over 15 years of bringing live musical spectacle to the people of New York City and beyond is Hungry March Band, a brass, percussion, and performance ensemble. Founded in Brooklyn in 1997 for the Coney Island Mermaid Parade, HMB embodies the spirit of NYCs streets with an inimitable brass sound and inspired, eclectic dance. HMB has shared their creativity with audiences around the United States, South America, and Europe, where theyve been embraced by a longstanding community of brass bands. A unique sonic voice has emerged from the recording of their four self-released albums, one that melds their musical knowledge of big band, traditional, and free jazz, with punk rock and global brass influences.'
          },
          type:'music',
          link:'http://www.hungrymarchband.com/blog',
          nationality: "hungry",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
              title: 'Northern Spy Records',
              job:'Social Media Manager/Web Designer',
              description: 'Northern Spy is a Brooklyn based independent record label formed by former staff of the legendary ESP-Disk imprint. As an artist-run label, Northern Spy shines the light on musicians who are tenacious, forward-thinking and making devil-be-damned fine music, while finding substance in the disparate worlds of free improvisation and popular music.'
          },
          link:'http://northernspyrecords.com/',
          type: 'music',
          nationality: "northernspy",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      
      {
          Label: {
              title: 'Amy Dannenmueller',
              job:'Web Designer',
              description: 'She has been described as an adorable toughie and invitingly vulnerable and shes known for her dukes-up badassness, Amy Dannenmueller hails from Osceola, Wisconsin. There she learned the ways of the tough talking, hard drinking, cheese churning Midwestern floozy. Born suspicious, she began searching for answers at the age of 2 months. When she wasnt digging up clues buried by her ancestors, she could be found reading sonnets to the spiders in her root vegetable garden. She displayed an early love of word play, deadly insects, and serial killers. Fairly well adjusted, Amy now resides in New York City with her cat, Chaplin. She enjoys hosting dinner parties, cross-bitching, and judging. She regularly consults with Marilyn Monroe for fashion and career advice, and considers Robert Downey, Jr. more than just a friend. She is a member of SAG/AFTRA and The Anatomical Heart Appreciation Society. Amy has the soul of Daria, the mouth of an old timey sailor, and the body of the Pink Power Ranger. She has heard the saying you can attract more flies with honey than vinegar, but never really developed a taste for honey.'
          },
          link:'http://www.amydannenmueller.com/',
          type: 'web',
          nationality: "amy",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
{
          Label: {
          title: 'Kelly Maxwell',
          job:'Web Designer',
              description: "Kelly Maxwell is a writer, DIY fanatic, digital media nerd, and burlesque performer. She spends her days as a Media Studies grad student at The New School and will be teaching a fashion history class at Parsons. By night, shes a bedazzled ecdysiast and songstress who spends too much on rhinestones and fake lashes. She worked hard for two undergraduate degrees back home in Colorado, but she learned more working in the costume shop of the theatre department. Her writing has appeared on BUST.com, she produces and directs web shorts for Punderdome 3000, and shes been a guest on WNYCs The Takeaway. She lives in NYC with her tuba playing husband and dreams of owning a herd of bulldogs."
          },
          type:'web',
          link:'http://www.kelly-maxwell.com',
          nationality: "kelly",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Ace Reporter',
          job:'Web Designer/Social Media Manager',
          description: 'A rooftop overlooking Manhattans Fifth Avenue. A fleabag motel on the banks of the Susquehanna River. A bus winding through sleepy Chicago suburbs. A book-filled bedroom. A sculpture garden in Washington, D.C. These are the memories that inhabit Ace Reporters debut LP Yearling. They are memories from a single year, one that musician Chris Snyder spent writing and recording one new song every day. In 2010, after the breakup of his longtime band The States, Snyder, a songwriter, composer, vocalist, and multi-instrumentalist based in Chicago, embarked on what he called the threesixfive project. Each day came with a mandate for the musician to start and finish a new track. From this burgeoning collection of songs, four EPs emerged, which Snyder who began playing violin at age four and landed his first singing gig as the featured boy soprano on the soundtrack for The Crow eventually transformed into a full-length album culled from the experiences and inspirations that propelled him through that year. '
          },
          link:'http://www.yearling.fm',
          type:'web',
          nationality: "acereporter",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Tropic of Pisces',
          job:'Web Designer/Social Media Manager',
          description: 'Tropic of Pisces is the new project from the guitarist/glockenspieler of Oberhofer, Mathew Scheiner.'
          },
          link:'http://www.symmetry.fm',
          type:'web',
          nationality: "tropicofpisces",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
{
          Label: {
          title: 'Ace Reporter',
          job:'Web Designer/Social Media Manager',
          description: 'A rooftop overlooking Manhattans Fifth Avenue. A fleabag motel on the banks of the Susquehanna River. A bus winding through sleepy Chicago suburbs. A book-filled bedroom. A sculpture garden in Washington, D.C. These are the memories that inhabit Ace Reporters debut LP Yearling. They are memories from a single year, one that musician Chris Snyder spent writing and recording one new song every day. In 2010, after the breakup of his longtime band The States, Snyder, a songwriter, composer, vocalist, and multi-instrumentalist based in Chicago, embarked on what he called the threesixfive project. Each day came with a mandate for the musician to start and finish a new track. From this burgeoning collection of songs, four EPs emerged, which Snyder who began playing violin at age four and landed his first singing gig as the featured boy soprano on the soundtrack for The Crow eventually transformed into a full-length album culled from the experiences and inspirations that propelled him through that year. '
          },
          link:'http://www.yearling.fm',
          type:'music',
          nationality: "acereporter",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Tropic of Pisces',
          job:'Web Designer/Social Media Manager',
          description: 'Tropic of Pisces is the new project from the guitarist/glockenspieler of Oberhofer, Mathew Scheiner.'
          },
          link:'http://www.symmetry.fm',
          type:'music',
          nationality: "tropicofpisces",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Gora Gora Orkestar',
         job:'Tubist',	
              description: 'Gora Gora Orkestar brings the sounds of the Balkans to the Rockies with high energy performances. Formed in the fall of 2009, this 10 piece brass band is dedicated to making the audience dance with its infectious rhythm and own brand of feel-good music. The sound is an eclectic mix, blending Old World melodies of Eastern European folk, with the back beat of American funk and the sultry sway of South American tango into a genre coined Brass-Hop. This happy caravan of musicians is comprised of seasoned veterans in the performance, education, and composition of music. The Infinite Swag EP was released in 2011 featuring five of Gora Gora Orkestars most recognizable tunes with a follow-up record slated for release in 2014.'
          },
          type:'music',
          link:'http://www.goragora.org',
          nationality: "gora",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Far&Away Studios',
          job:'Engineer/Web Designer',
              description: 'Far & Away Studios has relocated to Boulder from N.Y. We have been in business for 30 years. We are a Studer 2", Pro Tools HD3, Neve, Sony DMX R100, Studer 1/2" Richard Eberhardt designed room. As you can see this is the possibly most beautiful room ever built, but acoustics were the main concern. It was built with a nod to the genius of Tony Bongiovi and Power Station/Avatar in N.Y. We have 17 foot ceilings, natural light and stunning views of the Flatirons while being in horse country. See our write-up in Electronic Musician April 2005 and Premier Guitar May 2008.'
          },
          type:'music',
          link:'http://www.farandawaystudios.com/',
          nationality: "farandaway",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
       {
          Label: {
          title: 'The Goo/Search The Music',
		job:'Music Specialist',	          
              description: 'Muserk is a ground breaking platform that gives users a 360˚ integrated music solution for content, platforms, software and mobile apps.'
          },
          type:'music',
          link:'http://www.muserk.com',
          nationality: "goo",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Goo Media',
		job:'Music Specialist',	          
              description: 'Muserk is a ground breaking platform that gives users a 360 degree integrated music solution for content, platforms, software and mobile apps.'
          },
          type:'web',
          link:'http://www.muserk.com',
          nationality: "goo",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
         title: 'The Flow',
         job:'Web/Graphic Designer',
              description: 'The Flow is a group of women in their 20s who measure the influences in media and then construct a conversation around those ideas whether it be challenging them or praising them for their positive social change. Unabashedly upfront and honest, no topic is off-limits. Dive in. Ask the hard questions. Join #TheFlow.'
          },
          type:'web',
          link:'http://www.theflowwebshow.com',
          nationality: "flow",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'iPuppy',
          job:'Web Designer',
          description: 'Squidgy Wudgy. Roly Poly. Try the new iPuppy today! A "pet" project.'
          },
          link:'http://www.benfausch.com/iPuppy/iPuppyhome.html',
          type:'web',
          nationality: "ipuppy",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
     
      {
          Label: {
          title: 'Punderdome 3000',
          job:'Editor/Composer',
          description: 'PUNDERDOME is a wild & crazy monthly frequently SRO pun competition (Littlefield in Brooklyn) hosted by a self-proclaimed Rodney Dangerfield impersonator and his alleged daughter (Fred and Jo Firestone). The first 18 individuals/duos to sign-up at the door will have a chance to participate in competitive spontaneous pun-making. Pun-masters are determined by the human clap-o-meter who accurately and scientifically assesses levels of audience applause. Great big kitchen appliance mystery prizes are awarded to the top two competitors. Warning for the faint of heart: the Dome is a spectator sport: decide to attend at your own risk! Punderdome was a 2012 finalist in the New York Television Festival Independent Pilot Competition - non-scripted comedy'
          },
          type:'video',
          link:'http://www.youtube.com/watch?v=5VgMl-Atjk4',
          nationality: "punderdome",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Peoples Improv Theatre - Andrea Romano',
          job:'Film Editor',
              description: 'Andrea currently works as a Web Culture Editorial Intern at Mashable.com, where she writes articles about the most up to the moment happenings on the Internet. Also, cat videos. She was a founding member of a online video sketch team developed by The Peoples Improv Theater. While there, she used her talents as a director, actor, and writer as a member of Top Secret Projector Room. She has also developed sketches and performed them onstage at The Peoples Improv Theatre and Upright Citizens Brigade.'
          },
          type:'video',
          link:'https://www.youtube.com/watch?v=iwOPl_c_OIY',
          nationality: "pit",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Drones',
          job:'Cameraman',
              description: 'A short music video featuring drone-only footage by Ben Fausch, Alex Gilwit, and Tomas Uribe. Edited by Tomas Uribe. '
          },
          type:'video',
          link:'http://vimeo.com/88318910',
          nationality: "drone",
          Constructors: [
              {name: "Ferrari"}
          ]
      },

      {
          Label: {
          title: 'cryptid',
          job:'Engineer/Keyboardist',
              description: 'Utilizing a found TEAC A-3340s tape machine, prolific classical crossover cellist Phil Norman created something eerily grungy. This album hints at Normans heavy late-night jazz influences, avante-garde leanings, and his propensity for oddball improvisional styles; all of which make for a drug-addled basement session with nothing but fog on the mind.'
              
          },
          type:'music',
          link:'http://www.gravitycello.com/',
          nationality: "cryptid",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Dovekins',
          job: 'Engineer',
              description: 'Described as beautiful and unhinged, the Dovekins are a new edge gypsy gem of a band redefining genres and the Denver sound itself. Outfitted with nothing less than Guitar, Mandolin, Piano, Banjo, Trombone, Melodica, Stomps, Spoons, Cornet, Drums, Washboard, Raspy Voice, Accordion, Flute, Kazoo, Standup Bass, and Clarinet.'
          },
          type:'music',
          link:'http://dovekins.bandcamp.com/',
          nationality: "dovekins",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The New School in The NewSchool in The New School',
          job:'Composer',
              description: 'There was a unique bug in Audacity, a room simulator, and a lot of tweaks that went into my interpretation of the New School logo. The inspiration comes from distortion that is commonly found when resampling media. How much is lost in resampling or transcoding? How much is gained? This piece aims to bridge the gap between the known finite expression of human creation with the seemingly incomprehensible "creative" side of digitized media. '
             
          },
          type:'music',
          link:'http://sound.newschool.edu/',
          nationality: "earlids",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'glasses',
          job:'Director/Editor',
              description: 'A pleasant morning is interrupted by a cell phone, and sparks a raucous, weird, forgetful, and even grotesque morning routine as the protagonist tries to not forget his necessities. Music by 17 hippies.'
          },
          type:'video',
          link:'https://www.youtube.com/watch?v=bUyc35JEJWo',
          nationality: "glasses",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Jeff Riley Jazz Suite',
          job:'Engineer',
              description: 'The Jeff Riley Jazz Suite is a jazz fusion band that incorporates a handful of horns with vocals. The group also uses both an upright bass and an electric bass and multiple keyboards, depending on the tune, with the drum grooves frequently changing. The project started more than a decade ago in Cincinnati and will continue expanding for decades into the future. Each performance is like a big family reunion of friends and songs, new and old.'
          },
          type:'music',
          link:'http://www.jeffrileyjazzsuite.org/live/',
          nationality: "jeffriley",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'JoeAlan',
          job:'Engineer',
              description: 'Isa and JoeAlans music is silly and profound, passionate and contagious. As tasty as Soul and as playful as Indie Rock, their music cross-pollinates genres, creating their own original nectar. In the pocket with a tight rhythm section, tasteful instrumentation, and upbeat original vocals, Isa and JoeAlan surprise and delight listeners and booty shakers alike.'
          },
          type:'music',
          link:'http://isaandjoealan.com/',
          nationality: "joealan",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Joints',
          job:'Engineer',
              description: 'The Joints are an instrumental post-jazz quintet based out of Boulder, Colorado. Founded in January of 2011 by keyboardist/composer Brandon Sullivan, the group is comprised of bassist Jean-Luc Davis, saxophonist Danny Meyer, drummer Josh Moore, and trumpeter Ryan Sullivan with Brandon on Fender Rhodes. The beginnings of the band happened soon after Brandon returned to the Denver area in 2008. He met Jean-Luc Davis, and the two began playing with drummer Josh Moore. They were soon joined by Brandons brother, Ryan, and saxophone phenom Danny Meyer.'
          },
          type:'music',
          link:'http://www.reverbnation.com/thejoints',
          nationality: "joints",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Vintage Modernists',
          job:'Engineer',
              description: 'The Vintage Modernists have been collecting, composing, and improvising a soundtrack without a movie since 2009. The plot winds through empty plains and silent mountains, emerges in the urban delta of the coastal cities, and returns. Sparse, simple, and wordless, the ebb and flow carries with it impressions of journeys re-lived and re-imagined.Based in Los Angeles, but all hailing from the Rocky Mountain West, this eclectic group combines post-modern jazz with elements of avant-garde, funk, and post-rock. Each musician contributes new and progressive concepts, creating an energetic and intriguing listening experience for the audience. In the summer of 2011 the group released its debut album, Cityscape.'
          },
          type:'music',
          link:'http://www.vintagemodernists.com/',
          nationality: "modernists",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Paula Deens Hair is on Fire!',
          job:'Creator',
              description: 'A fun project made in response to Deens recent contraversy. Weird, hilarious, and oddly satisfying, this video resembles something out of A Clockwork Orange mixed with Aqua Teen Hunger Force. Made with After Effects.'
          },
          type:'video',
          link:'https://www.youtube.com/watch?v=qzUA9Qou0hU',
          nationality: "pauladeen",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Selasee Atiase- African Gate',
          job:'Engineer',
              description: 'Born in Accra, Ghana, Selasee grew up exposed to the colorful and energetic sounds of Highlife Music. With this exposure Selasee created his own style:a unique blend of Reggae, West African Highlife and American Pop music. Threading together English and West African lyrics for a bright and captivating sound. On the touring circuit, Selasee has shared the stage with reggae legends Steel Pulse, The Wailers, Third World, The Mighty Diamonds, Don Carlos, Barrington Levy, King Yellowman, The Melodians and Anthony B. ....most recently in 2014, he has shared stages with Steel Pulse,Taurus Riley Beenie Man and Julian Marley among others....In his own words:Humility is power!'
          },
          type:'music',
          link:'http://www.selasee.com/',
          nationality: "selasee",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'William Mathewson Devices - WMD',
          job:'Pedal Technician/Graphic Designer',
              description: 'William Mathewson Devices pedals are designed and crafted based on a few specific principles. We hate digital modeling. Digital modeling pedals and amps suck the life from your playing. Tone, depth, feel and response become muddy and bland when sound is "processed". WMD pedals are entirely analog. The difference is in the way they feel when you play through one. The Geiger Counter uses digital technology defects in an analog way as a destructive effect. Depth and tone. Tone is king, but its also subjective, which is why WMD pedals provide incredible tonal variety. We have sculpted our filter stages and preamps to provide killer yet versatile tone. To connect you to the tone, the upmost of depth and responsiveness is designed into WMD pedals. Responsiveness yields intuitive and dramatic performance possabilities.'
          },
          type:'music',
          link:'http://www.wmdevices.com/',
          nationality: "wmd",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'Far&Away Studios',
          job:'Engineer/Web Designer',
              description: 'Far & Away Studios has relocated to Boulder from N.Y. We have been in business for 30 years. We are a Studer 2", Pro Tools HD3, Neve, Sony DMX R100, Studer 1/2" Richard Eberhardt designed room. As you can see this is the possibly most beautiful room ever built, but acoustics were the main concern. It was built with a nod to the genius of Tony Bongiovi and Power Station/Avatar in N.Y. We have 17 foot ceilings, natural light and stunning views of the Flatirons while being in horse country. See our write-up in Electronic Musician April 2005 and Premier Guitar May 2008.'
          },
          type:'web',
          link:'http://www.farandawaystudios.com/',
          nationality: "farandaway",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Label: {
          title: 'The Gadabout Orchestra',
			job:'Composer/Tubist',
              description: 'The Gadabout Orchestra is a Denver favorite, having headlined many major venues and supported The Dresden Dolls, Chairlift, Devotchka, and many others. Bandleader Aaron "Loki" Johnson has also toured the country as a burlesque/cirque/sideshow MC. "Loki" Johnson has worked beside sword swallowers, a fire breathing Midget, and has MCed for Dita Von Tease, among others. Ukulele Loki is considered one of the pioneers of the current ukulele revival, having promoted the instrument since 2000. Members of The Apples in Stereo and Neutral Milk Hotel make guest appearances on the Gadabout Orchestras album.'
          },
          type:'music',
          link:'http://www.ukuleleloki.com',
          nationality: "gadabout",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
     
      {
          Label: {
          title: 'The How I Learned Series',
          job:'Social Media Manager/Podcast Editor',
              description: 'HOW I LEARNED is a live series featuring writers, comics, storytellers, bloggers, and other raconteurs as chosen by hostess BLAISE ALLYSEN KEARSLEY based primarily on personal hygiene and make-out prowess. It all happens once a month, and sometimes more than that, which basically just means you will have the best night of your life on those nights repeatedly.'
          },
          type:'web',
          link:'http://www.howilearnedseries.com',
          nationality: "howilearned",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
	
	  {
          Label: {
          title: 'Bitcoins for Musicians',
          job:'Designer/Writer',
              description: 'A project that outlines the possible economic ramifications of the BitCoin with respect to musicians. BitCoins represent a powerful tool for e-commerce that shows great promise by aiding in the redistribution of wealth surrounding a musicians album sales.'
          },
          type:'video',
          link:'http://youtu.be/ioo82_Shepc',
          nationality: "bitcoins",
          Constructors: [
              {name: "Ferrari"}
          ]
      },




    ];
});


