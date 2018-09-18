    var fs = require('fs')
    var prompt = require('prompt-sync')();

    let data = JSON.parse(fs.readFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/main/address.json', 'utf-8'));


    //var person1 = JSON.parse(data)
    var person = data.person;
    var a = /[a-zA-Z]/g;
    var b = /[0-9]/g
    var c = /[!@#$%^&*()+?><]/g;

    class Address {
    constructor(fname, lname, city, state, zip, phonennumber) {
    this.fname = fname;
    this.lname = lname;
    this.phonennumber = phonennumber;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.person = person;

    }
    /******create ******/
    create() {

    for (var i = 0; i < person; i++) {
    var firstname = prompt('Enter the first name: ');
    if (firstname.search(b) == -1 && firstname.search(c) == -1) {
    var lastname = prompt('Enter the last name: ');
    if (lastname.search(b) == -1 && lastname.search(c) == -1) {

    var City = prompt('Enter the city name: ');
    var State = prompt('Enter the state: ');
    var zip = prompt('Enter the zip number: ');
    if (zip.search(a) == -1 && zip.search(c) == -1 && zip.length == 6) {
    var phonenumber = prompt('Enter the phone number: ');
    if (phonenumber.length == 10) {
    if (phonenumber.search(a) == -1 && phonenumber.search(c) == -1) {

    this.person.push({
    "fname": firstname,
    "lname": lastname,
    "person":
    {
    "city": City,
    "state": State,
    "zip": zip,
    "phnno": phonenumber,
    }
    })
    console.log(this.person);
    // console.log(person.length);
    }
    else {
    console.log("please enter valid phone number ");
    process.exit();
    }
    }
    else {
    console.log("please enter valid 10 digit phone number");
    process.exit();
    }
    }
    else {
    console.log("please enter valid 6 digit zipcode");
    process.exit();
    }
    }
    else {
    console.log("please enter valid last name");
    process.exit();
    }
    }
    else {
    console.log("please enter valid first name");
    process.exit();
    }

    }

    }
    /*****Updating*****/

    //to update the values in objects in array
    update() {
    var name = prompt('Enter the username whose details you wanted to update ,please remind to update using first name : ')

    for (var i = 0; i < this.person.length; i++) {
    if (this.person[i].fname == name) {

    console.log('Enter 1 : update your phonenumber : ');
    console.log('Enter 2 : update your city :');
    console.log("Enter 3 : update your zip code: ");
    console.log("Enter 4 : update your state :");
    console.log("Enter 5 : exit ");


    var option = prompt('Enter the choice you wanted to update  ');

    switch (parseInt(option)) {

    case 1: var Phonenumber1 = prompt('Enter the updated mobile number : ')
    if (Phonenumber1.search(a) == -1 && Phonenumber1.search(c) == -1) {
    var obj4 = {
    "fname": this.person[i].fname,
    "lname": this.person[i].lname,
    "person": {
    "city": this.person[i]["person"].city,
    "phnno": Phonenumber1,
    "zip": this.person[i]["person"].zip,
    "state": this.person[i]["person"].state
    }
    }
    this.person[i] = obj4;

    console.log(this.person);
    break;
    }
    else {
    console.log("Please enter valid mobile number");
    process.exit();
    }

    case 2: var city1 = prompt('Enter your city : ')
    var obj1 = {
    "fname": this.person[i].fname,
    "lname": this.person[i].lname,
    "person": {
    "city": city1,
    "phnno": this.person[i]["person"].phnno,
    "zip": this.person[i]["person"].zip,
    "state": this.person[i]["pesron"].state
    }
    }
    this.person[i] = obj1;

    console.log(this.person)
    break;

    case 3: var zip2 = prompt('Enter the new Zipcode : ')
    if (zip2.search(a) == -1 && zip2.search(c) == -1) {
    var obj2 = {
    "fname": this.person[i].fname,
    "lname": this.person[i].lname,
    "person": {
    "city": this.person[i]["person"].city,
    "phnno": this.person[i]["person"].phonennumber,
    "zip": zip2,
    "state": this.person[i]["person"].state
    }
    }
    this.person[i] = obj2

    console.log(this.person);
    break;
    }
    else {
    console.log("please enter valid number");
    process.exit();
    }

    case 4: var state1 = prompt('Enter your new state ');

    var obj3 = {
    "fname": this.person[i].fname,
    "lname": this.person[i].lname,
    "person": {
    "city": this.person[i]["person"].city,
    "phnno": this.person[i]["person"].phonenumber,
    "zip": this.person[i]["person"].zip,
    "state": state1
    }
    }
    this.person[i] = obj3;

    console.log(this.person);
    break;


    case 5: process.exit()

    default: console.log('Please enter the valid option ')
    }
    }
    }
    }

    //delete function to delete objects in array
    delete() {
    var lastname = prompt('which name you want to delete,please remind to delete using your last name ? ')
    for (var i = 0; i < this.person.length; i++) {
    if (this.person[i].lname == lastname) {
    this.person.splice(i, 1);//splice method helps in cut off the index from array
    }
    }

    }

    //sort function to sort alphabetically
    sort() {
    console.log(this.person.sort(this.compare));
    }
    //compare function to compare using name
    compare(x1, y) {
    if (x1.lname < y.lname)
    return -1;
    if (x1.lname > y.lname)
    return 1;
    return 0;
    }
    //save the data to json file
    save() {
    var x = JSON.stringify(this.person)
    console.log(x);
    fs.writeFileSync('/home/bridgeit/Madhavi_p/nodeprograms/oops/main/address.json', x, 'utf-8')

    }


    }
    var obj = new Address();

    while (1) {
    console.log('1. Create'); console.log(" ");
    console.log('2. Open'); console.log(" ");
    console.log('3. Exit'); console.log(" ");

    var choice = prompt('Which operation would you like to do ?')
    switch (choice) {
    case '1': var person = prompt('Enter the  number of persons... ');

    obj.create();
    break;

    case '2': var boolean = true;

    while (true) {
    console.log('1. Update');
    console.log(" ");
    console.log('2. Delete');
    console.log(" ");
    console.log('3. Sort');
    console.log(" ");
    console.log('4. Save');
    console.log(" ");
    console.log('5. Quit');
    console.log(" ");
    var choice1 = prompt('Which operation would you like to perform ? ')

    switch (choice1) {
    case '1': obj.update();
    break;
    case '2': obj.delete();
    break;
    case '3': obj.sort();
    break;
    case '4': obj.save();
    break;
    case '5': process.exit();
    }
    }
    break;

    case '3': process.exit();

    }
    }



