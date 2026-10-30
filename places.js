/*
  MASCOT LUNCH — the list of places.
  Edit this file to add, remove or fix a place, then commit. The site updates in about a minute.

  Each place:
    n      name shown on the wheel and board
    a      street address (also used for the directions link)
    lat,lng  coordinates (right-click the spot in Google Maps to copy them). Walk time is worked out from these.
    c      cuisine label
    m      moods it counts for: noodles, rice, roll, burger, japan, fresh, cafe, pub, taco
    $      price: 1 = cheap, 2 = mid, 3 = treat
    pace   "quick" (grab & go), "sit" (sit down) or "both"
    g      true if it handles a big group (8+)
    v      true if it has good vegetarian options
    h      weekday hours ["open","close"], 24h time
    fri    optional Friday closing time if different
    closed optional days it's shut: 0 = Sun, 1 = Mon ... 6 = Sat
    b      one or two sentences shown on the board
*/
window.LUNCH_HQ = {lat:-33.925767, lng:151.186784, addr:"Qantas Head Office, 10 Bourke Rd, Mascot NSW 2020"};

window.LUNCH_MOODS = [
  ["noodles","Noodles & dumplings"],["rice","Rice, curry & stir-fry"],["roll","Rolls & sandwiches"],
  ["burger","Burgers & pizza"],["japan","Sushi & Japanese"],["fresh","Fresh & light"],
  ["cafe","Café lunch"],["pub","Pub feed"],["taco","Tacos & flatbreads"]
];

window.LUNCH_PLACES = [
 {n:"Manpuku Mascot",a:"230 Coward St",lat:-33.92414,lng:151.18731,c:"Japanese ramen",m:["noodles","japan"],$:2,pace:"sit",g:false,v:false,h:["11:30","21:00"],b:"Ramen bar with rich tonkotsu and a lighter yuzu broth, plus sides like takoyaki. Outdoor seats."},
 {n:"Biggles Bar & Grill",a:"Bourke Rd (Holiday Inn)",lat:-33.92613,lng:151.18761,c:"Bar & grill",m:["pub","burger"],$:2,pace:"sit",g:true,v:false,h:["12:00","22:00"],b:"Hotel bar right on Bourke Rd. Schnitzels, steaks, pizza. The closest pub-style feed to the office."},
 {n:"The Dining & Co",a:"200 Coward St",lat:-33.92466,lng:151.19045,c:"Healthy café",m:["fresh","cafe"],$:2,pace:"sit",g:true,v:true,h:["07:00","17:00"],b:"Bright café under Meriton Suites. Protein bowls, kimchi pasta, smoothies and matcha."},
 {n:"Thai Thae",a:"256B Coward St",lat:-33.923498,lng:151.185449,c:"Thai",m:["rice","noodles"],$:2,pace:"sit",g:true,v:true,h:["11:00","15:00"],b:"Busy Thai spot with big plates, curries and pad thai. Handles vegan orders well."},
 {n:"Anita's Fusion",a:"8 Bourke St",lat:-33.92328,lng:151.18700,c:"Café & Japanese curry",m:["cafe","rice","burger"],$:2,pace:"both",g:true,v:false,h:["06:00","20:00"],b:"Roomy corner café by Mascot station. Japanese curry, burgers and all-day plates. Easy for a big table."},
 {n:"Fifteen Coffee",a:"15 Bourke Rd",lat:-33.92546,lng:151.18820,c:"Coffee & toasties",m:["roll","cafe"],$:1,pace:"quick",g:false,v:true,h:["07:00","15:00"],fri:"14:00",closed:[0,6],b:"Tiny coffee window next to the Adina. Proper toasties and pastries for a fast desk lunch."},
 {n:"Little Whale Cafe",a:"208 Coward St",lat:-33.92424,lng:151.18911,c:"Café",m:["cafe","burger"],$:1,pace:"both",g:false,v:false,h:["07:00","14:00"],b:"Small café with fish burgers, tacos and a few Thai dishes. Good value."},
 {n:"Seora Café",a:"222 Coward St",lat:-33.92410,lng:151.18813,c:"Café",m:["cafe","roll"],$:1,pace:"quick",g:false,v:true,h:["05:00","15:00"],b:"Neighbourhood café with strong coffee and simple sandwiches. Outdoor seating."},
 {n:"That Place",a:"12 Church Ave",lat:-33.92250,lng:151.18987,c:"Brunch café",m:["cafe"],$:2,pace:"sit",g:true,v:false,h:["06:00","15:00"],b:"Sit-down brunch café beside the park near the station. Big breakfasts, pasta, waffles."},
 {n:"Rolls Station",a:"7 Bourke St",lat:-33.92335,lng:151.18761,c:"Vietnamese bánh mì",m:["roll"],$:1,pace:"quick",g:false,v:false,h:["07:00","18:00"],closed:[0],b:"Bánh mì shop behind the station. Roll and Vietnamese coffee combos at a very low price."},
 {n:"Noodle Bar Mascot",a:"260 Coward St",lat:-33.92376,lng:151.18497,c:"Chinese hand-pulled noodles",m:["noodles"],$:2,pace:"both",g:true,v:true,h:["11:00","22:00"],b:"Handmade noodles, biang biang and chilli oil bowls, plus pan-fried dumplings."},
 {n:"Stacked Mascot",a:"189 O'Riordan St",lat:-33.92741,lng:151.18707,c:"Sandwiches & bowls",m:["roll","fresh"],$:1,pace:"quick",g:false,v:true,h:["06:30","14:00"],fri:"13:30",closed:[0,6],b:"Closest grab-and-go to the office. Fresh bowls, wraps, toasties and falafel."},
 {n:"Mr. Nam",a:"8 Bourke St",lat:-33.92349,lng:151.18697,c:"Vietnamese pho",m:["noodles","rice"],$:1,pace:"both",g:false,v:true,h:["11:00","15:00"],b:"Pho, crispy chicken and wok dishes next to Mascot station. Tables are tight at peak."},
 {n:"Mood for Thai",a:"1209 Botany Rd",lat:-33.93184,lng:151.19429,c:"Thai",m:["rice","noodles"],$:2,pace:"sit",g:false,v:false,h:["11:00","15:00"],b:"Small, authentic Thai with a cheap lunch menu. A longer walk down Botany Rd."},
 {n:"Nem Viet",a:"13 Etherden Walk",lat:-33.92316,lng:151.18595,c:"Vietnamese",m:["noodles","rice"],$:1,pace:"both",g:true,v:false,h:["11:00","21:00"],b:"Spacious Vietnamese eatery with large portions. Vermicelli bowls, pork chop rice, spring rolls."},
 {n:"Bánh Mì Dee",a:"189 O'Riordan St",lat:-33.92678,lng:151.18687,c:"Vietnamese bánh mì",m:["roll"],$:1,pace:"quick",g:false,v:false,h:["10:00","15:30"],closed:[0,6],b:"Crispy pork rolls and rice paper rolls a minute from the office. Expect a queue at 1pm."},
 {n:"The Thai Mascot",a:"1181 Botany Rd",lat:-33.93094,lng:151.19456,c:"Halal Thai",m:["rice"],$:2,pace:"sit",g:false,v:false,h:["11:00","15:30"],b:"Halal Thai curries and stir-fries. Fast service, compact dining room."},
 {n:"Newmarket Hotel",a:"889 Botany Rd",lat:-33.92164,lng:151.19650,c:"Pub bistro",m:["pub","burger"],$:2,pace:"sit",g:true,v:true,h:["10:00","23:59"],b:"Big pub with a beer garden. Pizzas, poke, steaks. Best for a long Friday lunch with the team."},
 {n:"Tennyson Hotel",a:"952 Botany Rd",lat:-33.93080,lng:151.19417,c:"Pub bistro",m:["pub"],$:2,pace:"sit",g:true,v:false,h:["10:00","23:59"],b:"Classic pub feed by the river. Fish and chips, T-bones, shanks."},
 {n:"Mobius Bar & Grill",a:"191 O'Riordan St (Pullman)",lat:-33.92739,lng:151.18714,c:"Hotel restaurant",m:["pub"],$:3,pace:"sit",g:true,v:false,h:["00:00","23:59"],b:"The Pullman's restaurant. Steaks and duck at hotel prices. Good for a farewell or a client lunch."},
 {n:"Burgy",a:"260 Coward St",lat:-33.92376,lng:151.18497,c:"Smash burgers",m:["burger"],$:1,pace:"quick",g:false,v:false,h:["11:30","21:30"],b:"Smash burgers that come out in about five minutes. Fair prices."},
 {n:"La Cantina",a:"289 King St",lat:-33.92810,lng:151.18550,c:"Café",m:["cafe","roll"],$:1,pace:"both",g:true,v:true,h:["06:30","15:30"],closed:[0],b:"Low-key café next to the Travelodge with a quiet upstairs seating area."},
 {n:"Sushi Train Mascot",a:"247 Coward St",lat:-33.92439,lng:151.18514,c:"Sushi train",m:["japan"],$:2,pace:"both",g:false,v:false,h:["11:30","20:30"],b:"Conveyor sushi. Grab plates as fast or slow as your lunch hour allows."},
 {n:"Johnny Gio's Pizza",a:"260 Coward St",lat:-33.92378,lng:151.18455,c:"Pizza",m:["burger"],$:2,pace:"both",g:true,v:true,h:["12:00","22:00"],b:"Handmade pizzas to share. Ask for the house chilli oil."},
 {n:"Sumo Sushi",a:"220 Coward St",lat:-33.92440,lng:151.18841,c:"Sushi & donburi",m:["japan","fresh"],$:1,pace:"quick",g:false,v:false,h:["09:00","17:00"],closed:[0,6],b:"Family-run sushi boxes and katsu dons at budget prices. Quick in, quick out."},
 {n:"Hinataya",a:"14 Etherden Walk",lat:-33.92303,lng:151.18577,c:"Japanese",m:["japan"],$:2,pace:"sit",g:false,v:false,h:["11:30","14:30"],b:"Sit-down Japanese across from Woolies. Sashimi, sukiyaki and teppan. Lunch service ends at 2:30."},
 {n:"Curry Craze",a:"197 Coward St",lat:-33.92459,lng:151.18755,c:"Indian",m:["rice"],$:2,pace:"sit",g:true,v:true,h:["11:00","15:00"],b:"Large Indian restaurant with lots of outdoor seating. Good for big groups and dietary needs."},
 {n:"Go Kati",a:"1121 Botany Rd",lat:-33.92921,lng:151.19493,c:"Indian street food",m:["rice","roll","taco"],$:1,pace:"quick",g:false,v:true,h:["11:00","22:00"],b:"Kati rolls, biryani bowls and loaded fries. Cheap and quick."},
 {n:"Little Birria",a:"293 Coward St",lat:-33.92287,lng:151.17769,c:"Mexican",m:["taco"],$:2,pace:"sit",g:true,v:false,h:["08:00","14:00"],b:"Birria tacos and nachos at the far end of Coward St. Lunch service stops at 2."},
 {n:"Za'atar Bake",a:"1187 Botany Rd",lat:-33.93105,lng:151.19443,c:"Lebanese bakery",m:["taco","roll"],$:1,pace:"quick",g:false,v:true,h:["06:00","16:00"],closed:[1],b:"Fresh-baked za'atar, cheese and meat pizzas plus wraps. Closed Mondays."},
 {n:"Master Dumpling",a:"1135 Botany Rd",lat:-33.92960,lng:151.19492,c:"Northern Chinese dumplings",m:["noodles"],$:1,pace:"both",g:false,v:true,h:["11:00","20:30"],closed:[0],b:"Dumplings steamed, fried or in soup, made to order. Call ahead for takeaway at peak."},
 {n:"Baiyan Chinese",a:"8 Bourke St",lat:-33.92305,lng:151.18658,c:"Chinese",m:["rice"],$:2,pace:"sit",g:true,v:true,h:["11:00","15:00"],b:"Recently renovated Chinese with generous share plates. Quiet after 1:30."},
 {n:"Dynasty Dumplings",a:"551 Gardeners Rd",lat:-33.92173,lng:151.19532,c:"Chinese",m:["noodles","rice"],$:2,pace:"both",g:false,v:true,h:["11:00","21:00"],closed:[0],b:"Small Sichuan-leaning kitchen. Chilli wontons, mapo tofu, cumin lamb."},
 {n:"Mascot Chinese Cuisine",a:"33 Kent Rd",lat:-33.92288,lng:151.18447,c:"Northeast Chinese",m:["rice"],$:2,pace:"sit",g:true,v:false,h:["11:00","23:00"],b:"Home-style northeast Chinese. Crispy kung pao, garlic pork, large portions."},
 {n:"Northern Chinese Cuisine",a:"8 Bourke St",lat:-33.92339,lng:151.18699,c:"Northern Chinese",m:["rice","noodles"],$:2,pace:"both",g:true,v:true,h:["10:00","21:30"],b:"Lunch specials and big sharing plates. Handmade dumplings and noodles."},
 {n:"Sugarbaby Espresso",a:"256 Coward St",lat:-33.92398,lng:151.18560,c:"Café",m:["cafe"],$:2,pace:"both",g:false,v:true,h:["06:30","14:30"],b:"Cosy café a block from the station. Shakshuka, French toast, good coffee."},
 {n:"Mxpresso Cafe",a:"185 O'Riordan St",lat:-33.92684,lng:151.18640,c:"Café & lunch boxes",m:["cafe","roll","burger"],$:1,pace:"quick",g:false,v:false,h:["07:00","15:00"],closed:[0,6],b:"Corner café with build-your-own lunch boxes, burgers and toasted sandwiches. Next door to the office."}
];
