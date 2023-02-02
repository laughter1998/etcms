//sidebar dropdown
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');


// 768미만에서 sidebar 메뉴 닫기
if (matchMedia("screen and (max-width: 768px)").matches) {
    sidebar.classList.add("hide");
  } 

//dropdown 메뉴 열기
allDropdown.forEach(item => {
    
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function (e){
        const sideDropdown = a.nextElementSibling;
        const aaa = sideDropdown.firstElementChild.offsetHeight
        console.log(sideDropdown);
        // console.log(b.firstElementChild.offsetHeight);
        
        var navDepth2Height = document.querySelector("#sidebar ul.side-menu > li > ul.side-dropdown > li");
    console.log(navDepth2Height.offsetHeight);
    // const navDepth2Height.offsetHeight;


        e.preventDefault();
        if (!this.classList.contains('active')) {
            allDropdown.forEach(i=>{
                const aLink = i.parentElement.querySelector('a:first-child');

                aLink.classList.remove('active');
                i.classList.remove('show');
            })
        }
        this.classList.toggle('active');
        item.classList.toggle('show');
        // console.log("열기");
        // console.log(item.offsetHeight );
        if (item.style.maxHeight){
            item.style.maxHeight = null;
            console.log(item);
          } else {
            // item.style.maxHeight = content.scrollHeight + "px";
            item.style.maxHeight ="70px";
            console.log(item);

          }
    })
    
})





// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('.toggle-sidebar');
// const toggleSidebar2 = document.querySelector('.toggle-sidebar2');
// const allSideDiveder = document.querySelectorAll('#sidebar .divider');

if(sidebar.classList.contains('hide')){
    // allSideDiveder.forEach(item => {
    //     item.textContent = '-';
    // });
    allDropdown.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
    })
} else {
    // allSideDiveder.forEach(item => {
    //     item.textContent = item.dataset.text;
    // })
}

toggleSidebar.addEventListener('click', function(){
    sidebar.classList.toggle('hide');

    if(sidebar.classList.contains('hide')){
        // allSideDiveder.forEach(item => {
        //     item.textContent = '-';
        // });
        
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })

    } else {
        // allSideDiveder.forEach(item => {
        //     item.textContent = item.dataset.text;
        // })
    }
});



sidebar.addEventListener('mouseleave', function () {
    if(this.classList.contains('hide')){
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        });
        // allSideDiveder.forEach(item => {
        //     item.textContent = '-';
        // });
    }
}) 





sidebar.addEventListener('mouseenter', function () {
    if(this.classList.contains('hide')){
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        });
        // allSideDiveder.forEach(item => {
        //     item.textContent = item.dataset.text;
        // })
    }
});

function lnbLoad(){
    var navDepth1Node = document.querySelectorAll("#sidebar ul.side-menu > li > a");
    var navDepth2Node = document.querySelectorAll("#sidebar ul.side-menu > li > ul.side-dropdown > li > a");
    var navDepth2Height = document.querySelector("#sidebar ul.side-menu > li > ul.side-dropdown > li");
    // const navDepth2Height.offsetHeight

    var nav1Array = Array.from(navDepth1Node);
    var nav2Array = Array.from(navDepth2Node);
    
    
    const current = window.location.href;

    const ele1 = nav1Array.filter((e)=>{
        return current.indexOf(e.href) == 0;
    })
    ele1[0]?.classList.add("active");
    
    const ele2 = nav2Array.filter((e)=>{
        return current.indexOf(e.href) == 0;
    });

    allDropdown.forEach(item => {
        // const a = item.parentElement.querySelector('a:first-child');
        // a.classList.remove('active');
        // item.classList.remove('show');

        // console.log(item);
        // item.dataset.height = navDepth2Height.offsetHeight * item.children.length;
        // console.log(navDepth2Height.offsetHeight * item.children.length);
        
    })

    ele2[0]?.classList.add("active");
    ele2[0]?.closest("ul.side-dropdown").parentElement.querySelector('a:first-child').classList.add("active");
    ele2[0]?.closest("ul.side-dropdown").classList.add("show");
    
    
}

lnbLoad(); // lnb 메뉴 활성화


//profile dropdow
const profile = document.querySelector("nav .profile");
const imgProfile = profile.querySelector("img");
const dropdownProfile = profile.querySelector(".profile-link");

imgProfile.addEventListener("click", function(){
    dropdownProfile.classList.toggle("show");
});


//Menu
const allMenu = document.querySelectorAll("main .content-data .head .menu");

allMenu.forEach(item => {
    const icon = item.querySelector(".icon");
    const menuLink = item.querySelector(".menu-link");

    icon.addEventListener("click", function(e){
        menuLink.classList.toggle("show");
    })
})


window.addEventListener("click", function(e){
    if (e.target !== imgProfile) {
        if (e.target !== dropdownProfile) {
            if (dropdownProfile.classList.contains("show")) {
                dropdownProfile.classList.remove("show");
            }
        }    
    }
    
    allMenu.forEach(item => {
        const icon = item.querySelector(".icon");
        const menuLink = item.querySelector(".menu-link");
    
        if (e.target !== icon) {
            if (e.target !== menuLink) {
                if (menuLink.classList.contains("show")) {
                    menuLink.classList.remove("show");
                }
            }    
        }
    })
})


// PROGRESSBAR
const allProgress = document.querySelectorAll("main .card .progress");
allProgress.forEach(item => {
    
     item.style.setProperty("--value", `${item.dataset.value}%`)
   
})





//APEXCHART

var options = {
    series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();