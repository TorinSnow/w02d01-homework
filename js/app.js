console.log('homework');

//1. Data types
//light switch - For turning a light switch on and off I would use the 

//Boolean, true = on and false = off.

//email - I would use a string. let myEmail = "tori@gmail.com"

//spaceship - I could use and array let spaceship = ["hull", "blasters", tractor beam", "warp drive"];

//list names - For a list of the student's name in class I would use 

//the data type array. (i.e) studentNames = ["Tom", "Will", "James", "Timmy"]

//list names, location - For a lof of student names and location I would use 
//an object and array. 
/* Ex. const students = {
studentNames: ["Tom", "Will", "James", "Timmy"],
location: "Denver",
} */

//list names, location, tv - For a lof of student names, location and favorite TV show
//I would use an object and array.
/* Ex.  const students = {
studentNames: ["Tom", "Will", "James", "Timmy"],
location: "Denver",
favTvShow: ["Rick and Morty", "Bob's Burgers", "Champions", "Race to Dragon's Edge"]
} */
//Or you could use indivdual objects (i.e.) 
/*Ex.  const student = {
Names: "Tom",
location: "Denver",
favTvShow: "Rick and Morty",
}*/

//2. Take it Easy
//1. 
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
//2.
rainbow[4];
console.log(rainbow[4]);
//3. 
const tori = {
    "favFood": "Mozzerella Sticks",
    "hobby": "Drawing",
    "location": "Arvada",
    "favDataType": "Objects",
}
//4. 
tori["hobby"]
console.log(tori["hobby"]);

//3. Crazy Object!
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }
 //
 console.log(crazyObject.taco[1].salsa[5]);
 //
console.log(crazyObject.larry.quotes[0]);
 //
console.log(crazyObject.larry.characters[2].favourtieHobby);
 //
console.log(crazyObject.larry.nicknames[1]);
 //
console.log(crazyObject.larry.characters[1]);

//4. Object-ception
const inception = {
    reality: {
    dreamLayer1: {
    dreamLayer2: {
    dreamLayer3: {
    dreamLayer4: {
    dreamLayer5: {
    dreamLayer6: {
        limbo: "Joseph Gordon Levitt"
                               }
                            }
                        }
                    }
                }
            }
        }
     }
     
     
     
//
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6 = "null";
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6);


//5-7. Bond Films
const bondFilms = [
    { "title" : "Skyfall", 
       "year" : 2012, 
       "actor" : "Daniel Craig", 
       "gross" : "$1,108,561,008" },
       { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
       { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
       { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
       { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
       { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
       { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
       { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
       { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
       { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
       { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
       { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
       { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
       { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
       { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
       { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
       { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
       { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
       { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
       { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
       { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
       { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
       { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
     ];
//5.
const bondTitles = []; 
for (let i = 0; i <bondFilms.length; i++){
 bondTitles.push(bondFilms[i].title);
}
console.log(bondTitles);

//6. //odd years
const oddBonds = [];
  for (let i = 0; i < bondFilms.length; i ++) {
      if (bondFilms[i].year % 2 !== 0) {
          oddBonds.push(bondFilms[i].title);
      }
}
  console.log(oddBonds);

//Notes.... //The Number() function converts the object argument 
//to a number that represents the object's value.
//If the value cannot be converted to a legal number, NaN is returned.
//The .replace() method searches a string for a specified value, or a 
//regular expression, and returns a new string where the specified values 
//are replaced.
//7. 
const totGross = 0;
  for (let i = 0; i < bondFilms.length; i++) {
    totGross += Number(bondFilms[i]["gross"].replace(/[,$]/g,""));
  }
  console.log(totGross); ///NOTE\\ Ask Ryan to go over this problem in class tomorrow.