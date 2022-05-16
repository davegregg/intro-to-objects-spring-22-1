// NOTE: This first pair of curly braces is to create a code block for scope
//       (like the code block in a function, FOR loop, or IF statement).
//       This way, I can scope the "user" variable below within this code
//       block, close the code block, and then define another variable with
//       the same name inside a new code block later in the same file.
{

    // DEFINING A NEW OBJECT:
    let user = {};

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

}
