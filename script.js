var videoScripts = [
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexk"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexj"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexm"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexn"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexp"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexo"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexq"
    },
    {
      src: "https://geo.dailymotion.com/player/xfm0t.js",
      video: "x8ltexr"
    },
    // Add more video scripts as needed
  ];



// https://dai.ly/x8ltexk
// https://dai.ly/x8ltexj
// https://dai.ly/x8ltexm
// https://dai.ly/x8ltexn
// https://dai.ly/x8ltexp
// https://dai.ly/x8ltexo
// https://dai.ly/x8ltexq
// https://dai.ly/x8ltexr
  
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
      script.addEventListener("click", function() {
        openFullscreen(this);
      });
  
      scriptWrapper.appendChild(script);
      item.appendChild(scriptWrapper);
      videoList.appendChild(item);
      console.log("script" + script);
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
  
  function openFullscreen(element) {
    var videoId = element.dataset.video;
    var videoUrl = "https://www.dailymotion.com/embed/video/" + videoId;
    var fullscreenWindow = window.open(videoUrl, "_blank");
    fullscreenWindow.document.write('<iframe allowfullscreen src="' + videoUrl + '" style="width:100%; height:100%;"></iframe>');
  }
  
  loadItems();
  