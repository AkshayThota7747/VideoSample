var videoScripts = [
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2n"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2m"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2n"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2m"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2n"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2m"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2n"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2m"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2n"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8lqe2m"
    },
    // Add more video scripts as needed
  ];
  
  var videoList = document.getElementById("videoList");
  var nextBtn = document.getElementById("nextBtn");
  var itemsPerPage = 5;
  var currentPage = 1;
  
  function loadItems() {
    var startIndex = (currentPage - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;
    var items = videoScripts.slice(startIndex, endIndex);
  
    for (var i = 0; i < items.length; i++) {
      var item = document.createElement("div");
      item.classList.add("videoItem");
  
      var scriptWrapper = document.createElement("div");
      scriptWrapper.classList.add("scriptWrapper");
  
      var script = document.createElement("script");
      script.src = items[i].src;
      script.dataset.video = items[i].video;
  
      scriptWrapper.appendChild(script);
      item.appendChild(scriptWrapper);
      videoList.appendChild(item);
    }
  
    if (endIndex >= videoScripts.length) {
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "block";
    }
  }
  
  function nextPage() {
    currentPage++;
    videoList.innerHTML = "";
    loadItems();
  }
  
  loadItems();
  