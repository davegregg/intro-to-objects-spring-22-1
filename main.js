"use strict"

// NOTE: This first pair of curly braces is to create a code block for scope
//       (like the code block in a function, FOR loop, or IF statement).
//       This way, I can scope the "user" variable below within this code
//       block, close the code block, and then define another variable with
//       the same name inside a new code block later in the same file.
{

    // DEFINING A NEW OBJECT:
    const user = {};

    const hello = "world"
    console.log({ hello })

    // DEFINING NEW PROPERTIES ON AN EXISTING OBJECT, like the one above:
    // These examples use "dot notation" to reference and assign new 
    // properties if the property name would also make a valid variable name. 
    // This is the most common approach.
    user.username = "maurice_moss";
    user.height = 6.2;
    user.emails = [
        "maurice.moss@reynholmindustries.com",
        "moss@tnetennba.com",
        "the_one@tnetennba.com",
    ];

    // It is equally valid to use "bracket notation" to reference and
    // assign new properties:
    user["username"] = "maurice_moss";
    user["height"] = 6.2;
    user["emails"] = [
        "maurice.moss@reynholmindustries.com",
        "moss@tnetennba.com",
        "the_one@tnetennba.com",
    ];

    // One benefit of bracket notation is the option to define 
    // property names which would not also be valid variable names,
    // such as:
    user[0] = "cat";
    user["1stName"] = "Maurice";
    user["This is a sentence."] = "There aren't many reasons to do this.";
    user["🥛"] = "Glass of milk.";

    console.log(user)

    let { username, emails } = user;

} // Closing the first code block. Again, this part has nothing to do with objects.

{

    // DEFINING A NEW OBJECT WITH PROPERTIES INCLUDED:
    let user = {
        /* A property name can be defined with the following shorthand
           syntax if it would also qualify as a valid variable name:  */
        username: "maurice_moss",
        height: 6.2,
        emails: [
            "maurice.moss@reynholmindustries.com",
            "moss@tnetennba.com",
            "the_one@tnetennba.com",
        ],

        /* Alternatively, since property names will be stored
           as strings anyway, you can use the full string syntax
           to define a new property. This time, though, the 
           property name can be ANY string, even if it would not
           normally make a valid variable name:
        ↓              ↓                                          */
        "favorite quote": "https://youtu.be/5Jp5OCV3E28?t=70",
    };


    // ACCESSING PROPERTIES ON AN EXISTING OBJECT:
    console.log(user.username);  // Dot notation
    console.log(user["username"]);  // Bracket notation
    
    let requestedData = "username";
    console.log(user[requestedData]);  // Bracket notation again
    
    let { username, emails } = user;  // Object destructuring
    console.log(username);
    console.log(emails);


    // LOOPING OVER AN ARRAY NESTED WITHIN AN OBJECT:
    // In these cases, our array is "user.emails".
    for (let index = 0; index < user.emails.length; index += 1) {
        let currentEmail = user.emails[index];
        console.log("Email address:", currentEmail);
    }

    for (let currentEmail of user.emails) {
        console.log("Email address:", currentEmail);
    }

    let logEmail = (currentEmail) => console.log("Email address:", currentEmail);
    user.emails.forEach(logEmail);


    Object.freeze(user);
    // user.username = "bill"
    console.log(user)

}


document
    .querySelector("form")
    .addEventListener("submit", (event) => {
        event.preventDefault()
        const form = event.target
        // const { birthdate, username, favoriteColor } = form.children
        const { birthdate, username, favoriteColor } = form.elements

        console.log({form})
        console.log(birthdate.value, username.value, favoriteColor.value)

        const userSignUpSubmission = JSON.stringify({
            username: username.value,
            birthdate: birthdate.value,
            favoriteColor: favoriteColor.value,
        })

        console.log(userSignUpSubmission)
    })


let obj1 = { learner: "eliana", favoriteBooks: ["Goodnight, Moon"], }
let obj2 = { learner: "eliana" }

console.log(obj1 === obj2)
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

// We can use JSON.stringify() to turn a real JS object into 
// a string version of itself, to make it ready to send across
// the Internet.

// We can use JSON.parse() to turn a JSON string back into
// a real JavaScript object we can work with. This process is
// sometimes called "re-hydrating" the object.

// Let's take a JSON string from the PokéAPI and re-hydrate it
// into a real JavaScript object, so we can pull the Pokemon
// image and name from the object to display it on the page!
let pokemon = JSON.parse(`
{
    "abilities": [
      {
        "ability": {
          "name": "limber",
          "url": "https://pokeapi.co/api/v2/ability/7/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "imposter",
          "url": "https://pokeapi.co/api/v2/ability/150/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "base_experience": 101,
    "forms": [
      {
        "name": "ditto",
        "url": "https://pokeapi.co/api/v2/pokemon-form/132/"
      }
    ],
    "game_indices": [
      {
        "game_index": 76,
        "version": {
          "name": "red",
          "url": "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        "game_index": 76,
        "version": {
          "name": "blue",
          "url": "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        "game_index": 76,
        "version": {
          "name": "yellow",
          "url": "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "gold",
          "url": "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "silver",
          "url": "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "crystal",
          "url": "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "ruby",
          "url": "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "sapphire",
          "url": "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "emerald",
          "url": "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "firered",
          "url": "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "leafgreen",
          "url": "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "diamond",
          "url": "https://pokeapi.co/api/v2/version/12/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "pearl",
          "url": "https://pokeapi.co/api/v2/version/13/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "platinum",
          "url": "https://pokeapi.co/api/v2/version/14/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "heartgold",
          "url": "https://pokeapi.co/api/v2/version/15/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "soulsilver",
          "url": "https://pokeapi.co/api/v2/version/16/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "black",
          "url": "https://pokeapi.co/api/v2/version/17/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "white",
          "url": "https://pokeapi.co/api/v2/version/18/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "black-2",
          "url": "https://pokeapi.co/api/v2/version/21/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "white-2",
          "url": "https://pokeapi.co/api/v2/version/22/"
        }
      }
    ],
    "height": 3,
    "held_items": [
      {
        "item": {
          "name": "metal-powder",
          "url": "https://pokeapi.co/api/v2/item/234/"
        },
        "version_details": [
          {
            "rarity": 5,
            "version": {
              "name": "ruby",
              "url": "https://pokeapi.co/api/v2/version/7/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "sapphire",
              "url": "https://pokeapi.co/api/v2/version/8/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version/9/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "firered",
              "url": "https://pokeapi.co/api/v2/version/10/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "leafgreen",
              "url": "https://pokeapi.co/api/v2/version/11/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "diamond",
              "url": "https://pokeapi.co/api/v2/version/12/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "pearl",
              "url": "https://pokeapi.co/api/v2/version/13/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version/14/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "heartgold",
              "url": "https://pokeapi.co/api/v2/version/15/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "soulsilver",
              "url": "https://pokeapi.co/api/v2/version/16/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "black",
              "url": "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "white",
              "url": "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "black-2",
              "url": "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "white-2",
              "url": "https://pokeapi.co/api/v2/version/22/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "x",
              "url": "https://pokeapi.co/api/v2/version/23/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "y",
              "url": "https://pokeapi.co/api/v2/version/24/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "omega-ruby",
              "url": "https://pokeapi.co/api/v2/version/25/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version/26/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "sun",
              "url": "https://pokeapi.co/api/v2/version/27/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "moon",
              "url": "https://pokeapi.co/api/v2/version/28/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "ultra-sun",
              "url": "https://pokeapi.co/api/v2/version/29/"
            }
          },
          {
            "rarity": 5,
            "version": {
              "name": "ultra-moon",
              "url": "https://pokeapi.co/api/v2/version/30/"
            }
          }
        ]
      },
      {
        "item": {
          "name": "quick-powder",
          "url": "https://pokeapi.co/api/v2/item/251/"
        },
        "version_details": [
          {
            "rarity": 50,
            "version": {
              "name": "diamond",
              "url": "https://pokeapi.co/api/v2/version/12/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "pearl",
              "url": "https://pokeapi.co/api/v2/version/13/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version/14/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "heartgold",
              "url": "https://pokeapi.co/api/v2/version/15/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "soulsilver",
              "url": "https://pokeapi.co/api/v2/version/16/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "black",
              "url": "https://pokeapi.co/api/v2/version/17/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "white",
              "url": "https://pokeapi.co/api/v2/version/18/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "black-2",
              "url": "https://pokeapi.co/api/v2/version/21/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "white-2",
              "url": "https://pokeapi.co/api/v2/version/22/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "x",
              "url": "https://pokeapi.co/api/v2/version/23/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "y",
              "url": "https://pokeapi.co/api/v2/version/24/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "omega-ruby",
              "url": "https://pokeapi.co/api/v2/version/25/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version/26/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "sun",
              "url": "https://pokeapi.co/api/v2/version/27/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "moon",
              "url": "https://pokeapi.co/api/v2/version/28/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "ultra-sun",
              "url": "https://pokeapi.co/api/v2/version/29/"
            }
          },
          {
            "rarity": 50,
            "version": {
              "name": "ultra-moon",
              "url": "https://pokeapi.co/api/v2/version/30/"
            }
          }
        ]
      }
    ],
    "id": 132,
    "is_default": true,
    "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/132/encounters",
    "moves": [
      {
        "move": {
          "name": "transform",
          "url": "https://pokeapi.co/api/v2/move/144/"
        },
        "version_group_details": [
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "red-blue",
              "url": "https://pokeapi.co/api/v2/version-group/1/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "yellow",
              "url": "https://pokeapi.co/api/v2/version-group/2/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "gold-silver",
              "url": "https://pokeapi.co/api/v2/version-group/3/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "crystal",
              "url": "https://pokeapi.co/api/v2/version-group/4/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ruby-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/5/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "emerald",
              "url": "https://pokeapi.co/api/v2/version-group/6/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "firered-leafgreen",
              "url": "https://pokeapi.co/api/v2/version-group/7/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "diamond-pearl",
              "url": "https://pokeapi.co/api/v2/version-group/8/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "platinum",
              "url": "https://pokeapi.co/api/v2/version-group/9/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "heartgold-soulsilver",
              "url": "https://pokeapi.co/api/v2/version-group/10/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "colosseum",
              "url": "https://pokeapi.co/api/v2/version-group/12/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "xd",
              "url": "https://pokeapi.co/api/v2/version-group/13/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "black-2-white-2",
              "url": "https://pokeapi.co/api/v2/version-group/14/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "omega-ruby-alpha-sapphire",
              "url": "https://pokeapi.co/api/v2/version-group/16/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sun-moon",
              "url": "https://pokeapi.co/api/v2/version-group/17/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "ultra-sun-ultra-moon",
              "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "lets-go-pikachu-lets-go-eevee",
              "url": "https://pokeapi.co/api/v2/version-group/19/"
            }
          },
          {
            "level_learned_at": 1,
            "move_learn_method": {
              "name": "level-up",
              "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
            },
            "version_group": {
              "name": "sword-shield",
              "url": "https://pokeapi.co/api/v2/version-group/20/"
            }
          }
        ]
      }
    ],
    "name": "ditto",
    "order": 214,
    "past_types": [],
    "species": {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon-species/132/"
    },
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/132.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png",
      "front_shiny_female": null,
      "other": {
        "dream_world": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
          "front_female": null
        },
        "home": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
          "front_female": null,
          "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
          "front_shiny_female": null
        },
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
        }
      },
      "versions": {
        "generation-i": {
          "red-blue": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/132.png",
            "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/132.png",
            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/132.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png",
            "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/132.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/132.png"
          },
          "yellow": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/132.png",
            "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/132.png",
            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/132.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/132.png",
            "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/132.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/132.png"
          }
        },
        "generation-ii": {
          "crystal": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/132.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/132.png",
            "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/132.png",
            "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/132.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/132.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/132.png",
            "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/132.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png"
          },
          "gold": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/132.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/132.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/132.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/132.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/132.png"
          },
          "silver": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/132.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/132.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/132.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/132.png",
            "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/132.png"
          }
        },
        "generation-iii": {
          "emerald": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/132.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/132.png"
          },
          "firered-leafgreen": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/132.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/132.png"
          },
          "ruby-sapphire": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/132.png",
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/132.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/132.png"
          }
        },
        "generation-iv": {
          "diamond-pearl": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/132.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/132.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/132.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/132.png",
            "front_shiny_female": null
          },
          "heartgold-soulsilver": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/132.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/132.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/132.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/132.png",
            "front_shiny_female": null
          },
          "platinum": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/132.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/132.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/132.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/132.png",
            "front_shiny_female": null
          }
        },
        "generation-v": {
          "black-white": {
            "animated": {
              "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/132.gif",
              "back_female": null,
              "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/132.gif",
              "back_shiny_female": null,
              "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif",
              "front_female": null,
              "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/132.gif",
              "front_shiny_female": null
            },
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/132.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/132.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/132.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/132.png",
            "front_shiny_female": null
          }
        },
        "generation-vi": {
          "omegaruby-alphasapphire": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/132.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/132.png",
            "front_shiny_female": null
          },
          "x-y": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/132.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/132.png",
            "front_shiny_female": null
          }
        },
        "generation-vii": {
          "icons": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/132.png",
            "front_female": null
          },
          "ultra-sun-ultra-moon": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/132.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/132.png",
            "front_shiny_female": null
          }
        },
        "generation-viii": {
          "icons": {
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/132.png",
            "front_female": null
          }
        }
      }
    },
    "stats": [
      {
        "base_stat": 48,
        "effort": 1,
        "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
        }
      },
      {
        "base_stat": 48,
        "effort": 0,
        "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "normal",
          "url": "https://pokeapi.co/api/v2/type/1/"
        }
      }
    ],
    "weight": 40
  }
`)

console.log(pokemon)

let displayPokemon = function (pokemon, parentElement) {
    const description = `The Pokémon "${pokemon.name}"!`
    const img = document.createElement("img")

    img.src = pokemon.sprites.front_default
    img.alt = description
    img.title = description

    parentElement.append(img)
}

displayPokemon(pokemon, document.body)

// We can make a DEEP clone of an object using 
// JSON.stringify() and JSON.parse():
const originalObject = { value: "whatever" }
const newDeepClone = JSON.parse(JSON.stringify(originalObject))
// Note: JSON.stringify() and JSON.parse() will only work as
// expected when handling properties containing simple data types. 
// Specifically, JSON supports:
//     - Strings
//     - Numbers
//     - Booleans
//     - null
//     - "Plain" Objects
//     - Arrays
// JSON does not support HTML element objects, functions, 
// RegExp objects, Sets, Maps, or other more complex objects.


// We can make a SHALLOW clone of an object using
// the Spread Operator (https://mdn.io/spread-operator):
const newShallowClone = { ...originalObject }
