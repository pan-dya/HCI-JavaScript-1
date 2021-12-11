// BLOOD TRANSFUSION
// MAKE SURE THE RECEIVER IS COMPATIBLE WITH THE DONOR BLOODTYPE
// IF ANTIGEN A IS FOUND, BLOODTYPE INCLUDES A
// IF ANTIGEN B IS FOUND, BLOODTYPE INCLUDES B
// RH FACTOR WITH +
// OTHERWISE IT ENDS WITH -, IF THERE ARE NO ANTIGEN A OR B BLOODTYPE IS B
// A+b = AB CAN BE RH OR NO

// A PERSON WITH ANTIGEN A CAN GIVE BLOOD TO ANOTHER PERSON WITH A
// A PERSON WITH ANTIGEN B CAN GICE BLOOD TO ANOTHER PERSON WITH B
// A PERSON WITH RH CAN ONLY GIVE TO PERSON WITH RH AS WELL
// O- CAN GIVE TO ANYONE

// FUNCTION THAT TAKES IN A DONOR AND RECEIVER BLOODTYPE AS STRINGS AND RETURNS CAN THE RECEIVER RECEIVE OR NO


function check (donor,recipient) {
    var bloodtype = true;
    var rhesus = true;
    if (donor.indexOf("O") == 0) {
        bloodtype = true;
    } else if (recipient.indexOf("AB") == 0) {
        bloodtype = true;
    } else if (donor[0] == recipient[0]) {
        bloodtype = true;
    } else {
        bloodtype = false;
    }
     
    if (donor.indexOf("+") == -1 && recipient.indexOf("-") == -1) {
        rhesus = false;
    } else {
        rhesus = true;
    } return bloodtype && rhesus
}

console.log(check("B+" , "AB+"));