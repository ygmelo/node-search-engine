const fetch      = require("node-fetch");
const HTMLParser = require('node-html-parser');

module.exports = async (checkin, checkout) => {
  const target   = "https://myreservations.omnibees.com";
  const omnibees = await fetch(`${target}/default.aspx?q=5462`);

  for(let header of omnibees.headers.entries()) {
    if(header[0] == "set-cookie") 
      cookie = header[1];
  }
  
  const cookieSid  = cookie.split("; ")[10].split("window=")[1],
        sessionAsp = cookie.split("; ")[5].split(", ")[1],
        timeRnd    = Math.floor(Date.now());

  const page = await fetch(`${target}/Handlers/ajaxLoader.ashx?ucUrl=SearchResultsByRoom&&diff=false&CheckIn=${checkin}&CheckOut=${checkout}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-&q=5462&sid=${cookieSid}&rnd=${timeRnd}`, {
    headers: { cookie: sessionAsp }
  });
  
  const root  = HTMLParser.parse(await page.text()),
        rooms = root.querySelectorAll('.roomName'),
        list  = [];
        
  rooms.forEach((room, i) => {
    const images = [];
    room.querySelectorAll("img").forEach(image => images.push(image.getAttribute("src")));
    
    list.push({
      name        : room.querySelector("h5").innerText,
      price       : root.querySelector(`#jsRoom_${i} a.pricesResultsTextColor`).innerText,
      images      : images,
      description : room.querySelector(".description").innerText,
    });
  });
  
  return list;
};