




function lnbLoad(){
    var navDepth1Node = document.querySelectorAll("#sidebar ul.side-menu > li > a");
    var navDepth2Node = document.querySelectorAll("#sidebar ul.side-menu > li > ul.side-dropdown > li > a");
    var navDepth2Height = document.querySelector("#sidebar ul.side-menu > li > ul.side-dropdown > li");

    const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
    const sidebar = document.getElementById('sidebar');

    var nav1Array = Array.from(navDepth1Node);
    var nav2Array = Array.from(navDepth2Node);
    
    // 페이지 주소와 메뉴 매칭해서 클래스 부여하기
    const current = window.location.href;

    const ele1 = nav1Array.filter((e)=>{
        return current.indexOf(e.href) == 0;
    })
    ele1[0]?.classList.add("active");
    
    const ele2 = nav2Array.filter((e)=>{
        return current.indexOf(e.href) == 0;
    });

    allDropdown.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.classList.remove('active');
        item.classList.remove('show');
        
        item.dataset.height = navDepth2Height.offsetHeight * item.children.length;
         item.style.setProperty("--value", `${item.dataset.height}px`) 
    })
    
    ele2[0]?.classList.add("active");
    ele2[0]?.closest("ul.side-dropdown").parentElement.querySelector('a:first-child').classList.add("active");
    ele2[0]?.closest("ul.side-dropdown").classList.add("show");
    
    // =========================================

    //sidebar dropdown


    // sidebar 문제점
    // -dashboard 메뉴가 활성화 된 상태에서
    // payments 를 클릭하면 payments 1뎁스가 active 됨
    // sidebar를 줄이면 dashboard, payments 2개 메뉴에 불 들어옴


    // - payments > NFC 메뉴가 활성화 된 상태
    // 다른 2뎁스 메뉴가 있는 메뉴를 클릭하면 
    // payments > NFC 메뉴 에 active가 사라짐

    // 이 두가지를 어떻게 처리하지???
    // 해결방법
    // 현재 page의 메뉴 표시와 
    // 클릭 했을때 active class를 다르게 표시한다.
    // 현재 page를 current class로 하고
    // 클릭시 active로 하자

    // active일때 sidebar 토글할때 리무브하자.

    

    //dropdown 메뉴 열기
    allDropdown.forEach(item => {
        
        const a = item.parentElement.querySelector('a:first-child');
        a.addEventListener('click', function (e){
            // const sideDropdown = a.nextElementSibling;
            // const aaa = sideDropdown.firstElementChild.offsetHeight
            // console.log(b.firstElementChild.offsetHeight);
            
            // var navDepth2Height = document.querySelector("#sidebar ul.side-menu > li > ul.side-dropdown > li");
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
        console.log("이거 왜 작성한거야??");
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
    } else {
        console.log("이건 없어도 되지 않냐?");
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
                // const a = item.parentElement.querySelector('a:first-child');
                // sidebar 가 작아질때
                // a.classList.remove('active');
                item.classList.remove('show');
            });

        } else {
            // allSideDiveder.forEach(item => {
            //     item.textContent = item.dataset.text;
            // })
            sidebarWide();
        }
    });



    sidebar.addEventListener('mouseleave', function () {
        if(this.classList.contains('hide')){
            allDropdown.forEach(item => {
                
                item.classList.remove('show');
            });
            // allSideDiveder.forEach(item => {
            //     item.textContent = '-';
            // });
        } else {
            
        }
    }) 





    sidebar.addEventListener('mouseenter', function () {
        if(this.classList.contains('hide')){
            allDropdown.forEach(item => {
            
                item.classList.remove('show');
            });
            // allSideDiveder.forEach(item => {
            //     item.textContent = item.dataset.text;
            // })
            sidebarWide();
        } 
    });

    //sidebar dropdown
   
     // 768미만에서 sidebar 메뉴 닫기
     // 이거 필요함?
     if (matchMedia("screen and (max-width: 768px)").matches) {
        sidebar.classList.add("hide");
       
    } 

}

lnbLoad(); // lnb 메뉴 활성화

function sidebarWide(){
    const aActive = document.querySelector("#sidebar ul.side-menu > li > a.active");
    console.log(aActive);
    aActive.nextElementSibling?.classList.add("show") ;
}

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