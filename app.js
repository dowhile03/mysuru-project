// Side Menu
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 2000,
});

// Scrollspy
const ss = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});

// Material Boxed
const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

// Auto Complete
const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
  data: {
    "Mysore palace": null,
    "Brindavan garden": null,
    "Sri chamarajendra zoological garden": null,
    "sri chamundeshwari temple": null,
    "Shuka Vana": null,
    "Kishkindha Moolika Bonsai Garden": null,
    "Karanji Lake": null,
    "GRS Fantasy Park": null,
    "St. Philomena's Cathedral": null,
    "Jaganmohan Palace Art Gallery and Auditorium": null,
    "Talakad": null,
    "Folk-Lore Museum Mysore": null,
    "Chamundi Hills": null,

  },
});
const search = document.getElementById("autocomplete-input").value;

function done() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  console.log(name);

  alert(
    "Thanks For Your Response we will get back to you soon! \r\n\r\nName  : " +
      name +
      "\r\nEmail :  " +
      email +
      "\r\nPhone : " +
      phone +
      "\r\nMessage : " +
      message +
      "\r\n\r\n For more Queries go to @mysuru Instagram"
  );
}
