const $slt = document.querySelector.bind(document);
const $slta = document.querySelectorAll.bind(document);

var tabs = $slta(".tabs__item");
var tabsContent = $slta(".tabs-content__item");

//* tabs and tabsContent share the same length
var len = tabs.length; //tabsContent.length

// default: line will take the active tab as its width;
var tabUnderline = $slt(".tabs__list .line");
var activeTab = $slt(".tabs__item.active");
tabUnderline.style.left = activeTab.offsetLeft + 'px';
tabUnderline.style.width = activeTab.offsetWidth + 'px';

// click to switch between tabs
for (let i = 0; i < len; i++) {
  tabs[i].onclick = function () {
    $slt(".tabs__item.active").classList.remove("active");
    $slt(".tabs-content__item.active").classList.remove("active");
    
    this.classList.add("active");
    tabsContent[i].classList.add('active');
    
    var activeTab = $slt(".tabs__item.active");
    tabUnderline.style.left = activeTab.offsetLeft + 'px';
    tabUnderline.style.width = activeTab.offsetWidth + 'px';
  };
}
