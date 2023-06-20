var videoScripts = [

// Day 1
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
        video: "x8lqe2o"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvlcm"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvk3y"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lwnbl"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvlco"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvnmz"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvnn0"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvk3v"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvlcn"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvk3x"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lurau"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lvk3u"
    },

//day 2

    {
    src: "https://geo.dailymotion.com/player/xfm0t.js",
    video: "x8luf06"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf07"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf09"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf0c"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf0f"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf0a"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf0e"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf0b"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf0d"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luf08"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lurat"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lurar"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8lurau"
    },
    {
        src: "https://geo.dailymotion.com/player/xfm0t.js",
        video: "x8luras"
    },

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
  
  var videoList = document.getElementById("videoList");
  var itemsPerPage = 50;
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
    }
  }
  
  function openFullscreen(element) {
    var videoId = element.dataset.video;
    var videoUrl = "https://www.dailymotion.com/embed/video/" + videoId;
    var fullscreenWindow = window.open(videoUrl, "_blank");
    fullscreenWindow.document.write('<iframe allowfullscreen src="' + videoUrl + '" style="width:100%; height:100%;"></iframe>');
  }
  
  loadItems();
  