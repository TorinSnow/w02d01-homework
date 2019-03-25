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
