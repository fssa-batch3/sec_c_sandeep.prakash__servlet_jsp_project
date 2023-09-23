const showimage = [
    {
      sportsiconcric: "/bookandplay-web/assets/images/cricketicon.png",
      sportsiconfoot: "/bookandplay-web/assets/images/footballicon.png",
      sportsiconten: "/bookandplay-web/assets/images/tennisicon.png",
    },
  ];
  // let div_parent;
  let div_child;
  let br_tag;
  let h3_card_title;
  let img_card;
  let p_location_name;
  let div_symbol;
  
  let imgicon_card1;
  let imgicon_card2;
  let imgicon_card3;
  let div_ratings;
  let i_star;
  let ratings_no;
  let button_book;
  let anchor;
  
  
  let filtered = [];
  
      const url1 = "http://localhost:8080/bookandplay-web/GetAllGroundList";
              axios.get(url1)
                .then(function (response) {
                  console.log(response.data)  
                  
  
          // Parse the extracted JSON string into a JavaScript array
          filtered = response.data;
          
        groundData(filtered);
       
          
      
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
  
  
  function groundData(array = []) {
    const parentHtmlDiv = document.querySelector(".parent");
    parentHtmlDiv.innerHTML = "";
  
    array.forEach((item) => {
      const div_child = document.createElement("div");
      div_child.setAttribute("class", "child");
  
      br_tag = document.createElement("br");
      div_child.append(br_tag);
  
      const h3_card_title = document.createElement("h3");
      h3_card_title.setAttribute("class", "groundn");
      h3_card_title.innerText = item.groundName;
      div_child.append(h3_card_title);
  
      //  <img src="" class="groimg" alt=""/>
      img_card = document.createElement("img");
      img_card.setAttribute("src", item.groundImages[0]);
      img_card.setAttribute("alt", "groundimage");
      img_card.setAttribute("class", "groimg");
      div_child.append(img_card);
  
      //  <p class="location_name"> </p>
      p_location_name = document.createElement("p");
      p_location_name.setAttribute("class", "locationn");
      p_location_name.innerText = item.groundMainArea;
      div_child.append(p_location_name);
  
      //  <div class="symbol"> </div>
      div_symbol = document.createElement("div");
      div_symbol.setAttribute("class", "symbol");
      div_child.append(div_symbol);
      
      
      const sportsIcons = {
    cricket: showimage[0].sportsiconcric,
    football: showimage[0].sportsiconfoot,
    tennis: showimage[0].sportsiconten,
  };
      
      const sportsAvailable1 = item.sportsAvailable;
  for(let i=0;i<sportsAvailable1.length;i++){
      if (sportsAvailable1[i]== "Cricket") {
        //  <img src="" class="sportsicon" alt=""/>
        imgicon_card1 = document.createElement("img");
        imgicon_card1.setAttribute("class", "sportsicon");
        imgicon_card1.setAttribute(
          "src",
         showimage[0].sportsiconcric
        );
        imgicon_card1.setAttribute("alt", "icons");
        div_symbol.append(imgicon_card1);
      }
  
      if (sportsAvailable1[i] == "Football") {
        //  <img src="" class="sportsicon" alt=""/>
        imgicon_card2 = document.createElement("img");
        imgicon_card2.setAttribute("class", "sportsicon");
        imgicon_card2.setAttribute(
          "src",
          showimage[0].sportsiconfoot
        );
        imgicon_card2.setAttribute("alt", "icons");
        div_symbol.append(imgicon_card2);
      }
  
      if (sportsAvailable1[i] == "Tennis") {
        //  <img src="" class="sportsicon" alt=""/>
        imgicon_card3 = document.createElement("img");
        imgicon_card3.setAttribute("class", "sportsicon");
        imgicon_card3.setAttribute(
          "src",
          showimage[0].sportsiconten
        );
        // imgicon_card.setAttribute("alt", "icons");
        div_symbol.append(imgicon_card3);
      }
    }
      
      //  <div class="ratings"> </div>
      div_ratings = document.createElement("div");
      div_ratings.setAttribute("class", "ratings");
      div_child.append(div_ratings);
  
      //  <i class="fa-solid fa-star"> </i>
      i_star = document.createElement("i");
      i_star.setAttribute("class", "fa-solid fa-star");
      // h3_card_title.innerText = names[i];
      div_ratings.append(i_star);
  
      //  <span class="ratingno"> </span>
      ratings_no = document.createElement("span");
      ratings_no.setAttribute("class", "ratingno");
      ratings_no.innerText = "5.0";
      div_ratings.append(ratings_no);
  
      // anchor
      anchor = document.createElement("a");
      // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
      anchor.setAttribute(
        "href",
        `/bookandplay-web/grounddetail.jsp?groundId=${item.groundId}`
      );
      div_child.append(anchor);
  
      // <button class="book"></button>
      button_book = document.createElement("button");
      button_book.setAttribute("class", "book");
      // button_booknow =document.createTextNode("Book Now")
      // button_book.append(button_booknow)
      button_book.innerText = "Book Now";
      anchor.append(button_book);
  
      // ... continue creating the UI elements as before ...
  
      parentHtmlDiv.append(div_child);
    });
  }
  
  
  
  // filter ground
  
  const selectOption = document.querySelector(".locationselect");
  
  let filteredData = [];
  selectOption.addEventListener("change", (e) => {
    const seletedQuery = selectOption.value.trim();
    console.log(seletedQuery);
  
    // const searchbox = document.getElementById("search2");
  
    if (e.key === "Enter") {
      e.preventDefault();
      // e.stopPropagation();
      // return false
    }
    if (seletedQuery !== "all") {
      filteredData = filtered.filter((item) =>
        item.district.includes(seletedQuery)
      );
    }
    // else if (e.target===searchbox){
    //   filteredData=ground_list.filter((item) => {
    //     return item.groundname.toLowerCase().includes(searchQuery) || item.locationname.toLowerCase().includes(searchQuery)
    //   })
  
    // }
    else {
      filteredData = filtered;
    }
  
    console.log(filteredData);
    if (filteredData.length === 0) {
      const parentHtmlDiv2 = document.querySelector(".parent");
      const p = document.createElement("p");
      p.setAttribute("class", "noresult");
      p.innerText = "No result found";
      parentHtmlDiv2.innerHTML = "";
      parentHtmlDiv2.append(p);
      console.log("pkdd");
    } else {
      groundData(filteredData);
    }
  
    
  });


  
  // search ground
  
  const searchbox = document.getElementById("search2");
  searchbox.addEventListener("keydown", (e) => {
    const searchQuery = searchbox.value.trim().toLowerCase();
    // console.log(searchQuery);
    if (e.key === "Enter") {
      e.preventDefault();
      // e.stopPropagation();
      // // return false
    }
    const filteredList = filteredData.filter((item) => {
      return item.groundName.toLowerCase().includes(searchQuery) || item.groundMainArea.toLowerCase().includes(searchQuery)
    })
  groundData(filteredList);
  if(selectOption.value==""){
    const filteredList2 = filtered.filter((item) => {
      return item.groundName.toLowerCase().includes(searchQuery) || item.groundMainArea.toLowerCase().includes(searchQuery)
    })
    
    groundData(filteredList2)
  }
  })
  