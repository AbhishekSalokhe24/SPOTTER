
let url = "https://kontests.net/api/v1/all";
let c = document.getElementById("card-container");

// Nav bar responsive 
let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

function redirectPage(temp){
    window.location = `${temp}`
}

// Array of random image URLs
let imageUrls = [
  "/Hackathon Img/hackathon1.png",
  "/Hackathon Img//hackathon2.png",
  "/Hackathon Img//hackathon3.png",
  "/Hackathon Img//hackathon4.png",
  "/Hackathon Img//hackathon5.png",
  "/Hackathon Img//hackathon6.png",
  // Add more image URLs here
];




fetch(url)
  .then((response) => response.json())
  .then((cont) => {
    let ihtml = "";
    for (let item in cont) {
      // Select a random image URL from the array
      let randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

      ihtml +=
        `<div class="box-container">
          <div class="box">
            <img src="${randomImageUrl}" alt="Hackathon Logo">
            <div class="time-div">
               <h2>Name : ${cont[item].name}</h2>
            </div>
           
            <div class="time-div" >
              <p>Start Time - ${cont[item].start_time}</p>
              <p>End Time   - ${cont[item].end_time}</p>
            </div>
            
            <div class="bottom-btn"> <button class="but-read" onclick="redirectPage('${cont[item].url}')">Visit Here</button></div>
          </div>
        </div>`;
    }

    card_container.innerHTML = ihtml;
  })
