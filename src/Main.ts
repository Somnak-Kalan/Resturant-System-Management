import { BookCategory } from "./calendar/Book";
import { CustomerBook } from "./calendar/CustomerBook";
import { DateTimes } from "./calendar/DateTime";
import { Customer } from "./human/Customers/Customers";
import { Gender } from "./human/Person";
import { Accountant } from "./human/staff/Accountant";
import { Chef } from "./human/staff/Cheif";
import { Manager } from "./human/staff/Manager";
import { Security } from "./human/staff/Security";
import { Role } from "./human/staff/Staff";
import { Waiter } from "./human/staff/Waiter";
import { Restaurant } from "./Rataurant";
import { Drinks } from "./rooms/Kitchen/Drinks";
import { DrinkCategory } from "./rooms/Kitchen/EnumDrink";
import { FoodCategory } from "./rooms/Kitchen/EnumFood";
import { Foods } from "./rooms/Kitchen/Food";
import { Kitchen } from "./rooms/Kitchen/Kitchen";
import { Menu } from "./rooms/Orders/Menu";
import { MenuItem } from "./rooms/Orders/MenuItem";
import { Room } from "./rooms/Room";
import { Chair } from "./rooms/tables/Chairs";
import { Tables } from "./rooms/tables/Tables";

/* 
    Room Management
*/
//Room eating //
let room1 = new Room(1);
let room2 = new Room(2);
//Add room to Restaurant
let restaurant = new Restaurant('PNC Restuarant','Phnom Penh');
restaurant.rooms.addRoom(room1);
restaurant.rooms.addRoom(room2);
//create Tables and add to room
let tables = new Tables()
room1.addTable(tables);
room2.addTable(tables);
// create customer and add to room and CustomerOrder room
let kea = new Customer('kea',20, Gender.MALE,'123456');
let somnak = new Customer('somnak',19, Gender.MALE,'345678');
let cham = new Customer('cham',20, Gender.MALE,'55667');
let narong = new Customer('narong',20, Gender.MALE,'246675');
restaurant.hr.addCustomer(kea,somnak,cham,narong);
//create chair and add to room
let char1 = new Chair(1,kea)
let char2 = new Chair(2,somnak)
let char3 = new Chair(3,cham)
let char4 = new Chair(4)
let char5 = new Chair(5,narong)
room1.addChair(char1,char2,char3,char4,char5);
room2.addChair(char4,char5);
//add customers to room
room1.addCustomerToRoom(kea,somnak,narong,cham)
room2.addCustomerToRoom(kea,somnak,narong,cham)
//create date  time start and end Order ROOMS
let start1 = new DateTimes('Moanday','May',2022,10);
let end1 = new DateTimes('Moanday','May',2022,10);
///
// put in CustomerBook and add to Calendar
// add room that customer book
// add Customer's name book
let bookTable = new CustomerBook(BookCategory.CUSTOMERBOOK,start1,end1,room1,kea);
restaurant.calendar.addBook(bookTable);

// add staffs
let somnak1 = new Manager('Somnak',12,Role.MANAGER,Gender.MALE,1000);
let Theary = new Accountant('Theary',20,Role.ACCOUNTANT,Gender.FEMALE,600);
let kea1 = new Chef('Kea',20,Role.CHEIF,Gender.MALE,700);
let kea2 = new Chef('Kea',20,Role.CHEIF,Gender.MALE,700);
let kea3 = new Chef('Kea',20,Role.CHEIF,Gender.MALE,700);
let vanda = new Security('Vanda',22,Role.SECURITY,Gender.MALE,300);
let kana = new Waiter('Kana',20,Role.WAITER,Gender.FEMALE,250);
let jock = new Waiter('Jock',20,Role.WAITER,Gender.MALE,250);
restaurant.hr.addStaff(somnak1,Theary,kea1,vanda,kana,jock);

/* 
    food and drink
*/
let hamburgar = new Foods(1,FoodCategory.HAMBURGAR,100);
let rice = new Foods(2,FoodCategory.RICE,200);
let dessert = new Foods(3,FoodCategory.DESSERT,300);

let beer = new Drinks(1,DrinkCategory.BEER,200);
let coke = new Drinks(2,DrinkCategory.COKE,200);
let string = new Drinks(3,DrinkCategory.STRING,200);
let winner = new Drinks(4,DrinkCategory.WINER,2000);
/* 
    add food and drink to menuItem
*/
let menuItem = new MenuItem()
menuItem.addFood(hamburgar,rice,dessert)
menuItem.addDrink(beer,coke,string,winner)
/* 
    add menuItem to menu
*/
let menu = new Menu()
menu.addMenuItem(menuItem)
/* 
    add menu to table
*/
tables.addMenuToTable(menu)
/* 
    add chef to kitchen 
*/
let kitchens = new Kitchen()
kitchens.addChefToKitchen(kea1,kea2,kea3);
/* 
    add kitchen to restaurant
*/
restaurant.rooms.kitchen = kitchens;
//MAIN MENU
//list all room in restaurant;
// console.log(restaurant.rooms.listRoomInRestart());
//list room that user input id Room
// console.log(restaurant.rooms.findRoomByRoomId(room2));

//check Which room has free chair or Remaining chair
// console.log(restaurant.rooms.checkAllRoomFreeChair());

//check chair number that free
// console.log(restaurant.rooms.checkFreeChair());


//all in restaurant
console.log(restaurant);
