$(document).ready(function() {
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.headermain').addClass('fixed');
        } else {
            $('.headermain').removeClass('fixed');
        }
    });
});

$(document).ready(function() {
    $("#owl1").owlCarousel({
        margin: 25,
        loop: true,
        autoWidth: false,
        nav: true,
        autoplay: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    $("#owl2").owlCarousel({
        margin: 25,
        loop: true,
        autoWidth: false,
        nav: true,
        autoplay: false,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            960: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});

//sticky header




//For Shoppanel Admin Js...

const wrapper = document.querySelector(".wrapper");
const selectBtn = wrapper.querySelector(".select-btn");
const options = wrapper.querySelector(".options");
const searchInput = wrapper.querySelector("input");


let interests = ["1% interest", "2% interest", "3% interest", "4% interest", "5% interest"];

function addInterest() {

    options.innerHTML = "";
    interests.forEach(interest => {
        let li = `<li onclick="updateName(this)">${interest}</li>`;
        options.insertAdjacentHTML("beforeend", li);

    });

}

addInterest();

function updateName(selectedLi) {
    searchInput.value = "";
    addInterest();
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup", () => {
    let arr = [];
    let searchedValue = searchInput.value.toLowerCase();
    arr = interests.filter(data => {
        return data.toLowerCase().startsWith(searchedValue);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p style="color: #5e6278">No results found</p>`;
});


selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
});