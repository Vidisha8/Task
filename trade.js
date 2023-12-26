document.addEventListener("DOMContentLoaded", function() {
    // const slider1 = document.getElementById("slider1");
    const long1Btn = document.getElementById("long1");
    const short1Btn = document.getElementById("short1");
    const swap1Btn = document.getElementById("swap1");
  
    slider1.style.left = "0";
  
    function setActiveButton1(btn) {
      long1Btn.style.border = "1px solid #3498db";
      short1Btn.style.border = "1px solid #3498db";
      swap1Btn.style.border = "1px solid #3498db";
  
      btn.style.border = "1px solid #34495e";
    }
  
    long1Btn.addEventListener("click", () => {
      slider1.style.left = "0";
      setActiveButton1(long1Btn);
    });
  
    short1Btn.addEventListener("click", () => {
      slider1.style.left = "33.33%";
      setActiveButton1(short1Btn);
    });
  
    swap1Btn.addEventListener("click", () => {
      slider1.style.left = "66.66%";
      setActiveButton1(swap1Btn);
    });
  
    // const slider2 = document.getElementById("slider2");
    const marketBtn = document.getElementById("market");
    const limitBtn = document.getElementById("limit");
  
    slider2.style.left = "0";
  
    function setActiveButton2(btn) {
      marketBtn.style.border = "1px solid #3498db";
      limitBtn.style.border = "1px solid #3498db";
  
      btn.style.border = "1px solid #34495e";
    }
  
    marketBtn.addEventListener("click", () => {
      slider2.style.left = "0";
      setActiveButton2(marketBtn);
    });
  
    limitBtn.addEventListener("click", () => {
      slider2.style.left = "50%";
      setActiveButton2(limitBtn);
    });
  });
  