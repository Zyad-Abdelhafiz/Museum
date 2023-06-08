let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

//jquary
//effects
//show and hide
$(document).ready(() => {
  $(".logopic").show();
  $(".video-container video").show();
  $(".main").show();
  $(".disc_pic").show();
  $(".King_Tutankhamun").show();
  $(".Sphinx_III").show();
  $(".Temple_Nefertiti").show();
  $(".King_Tutankhamun_disc").show();
  $(".Sphinx_III_disc").show();
  $(".Temple_Nefertiti_disc").show();
  //end show and hide

  //mouse event
  //chaining class
  $(".disc_pic")
    .on("mouseenter", () => {
      $(".disc_pic").addClass("photo-active");
    })
    .on("mouseleave", () => {
      $(".disc_pic").removeClass("photo-active");
    });
  //end mouse event

  //STYLE METHODS css

  $(".King_Tutankhamun").css({
    display: "none",
    width: "100%",
    "min-height": "100vh",
    display: "flex",
    "align-items": "center",
    "background-size": "cover",
    "background-image":
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url("https://images.nationalgeographic.org/image/upload/v1657572126/EducationHub/photos/RLTUT_Key_image.jpg")',
    "background-position": "center",
    "background-attachment": "fixed",
    transition: "0.8s ease",
  });

  $(".King_Tutankhamun h2").css({
    color: "#BAAD95",
    "font-size": "5em",
    "font-weight": "bold",
    "word-spacing": "10px",
  });

  $(".King_Tutankhamun_disc").css({
    width: "100%",
    "min-height": "100vh",
    display: "flex",
    "align-items": "center",
    "background-size": "cover",
    "background-image":
      'linear-gradient(rgba(0, 0, 1, 1), rgba(1, 0, 0, 0)), url("https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?cs=srgb&dl=pexels-walid-ahmad-847402.jpg&fm=jpg")',
    "background-position": "center",
    "background-attachment": "fixed",
    transition: "0.8s ease",
  });

  $(".King_Tutankhamun_disc span").css({
    color: "#BAAD95",
    "font-size": "2em",
    "margin-top": "10px",
    "font-weight": "700px",
    "margin-bottom": "40px",
    "text-decoration": "underline",
  });

  $(".King_Tutankhamun_disc h3").css({  
    color: "#BAAD95",
    "font-size": "1.22em",
    "margin-top": "20px",
    "font-weight": "700px",
    "margin-bottom": "40px",
    "word-spacing": "10px",
  });

  $(".Sphinx_III").css({
    display: "none",
    width: "100%",
    "min-height": "100vh",
    display: "flex",
    "align-items": "center",
    "background-size": "cover",
    "background-image":
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url("https://res.cloudinary.com/dtpgi0zck/image/upload/s--4Wi9xNzA--/c_fit,h_580,w_860/v1/EducationHub/photos/sphinx-of-thutmose-iii.jpg")',
    "background-position": "center",
    "background-attachment": "fixed",
    transition: "0.8s ease",
  });

  $(".Sphinx_III h2").css({
    color: "#BAAD95",
    "font-size": "5em",
    "font-weight": "bold",
    "word-spacing": "10px",
  });

  $(".Sphinx_III_disc").css({
    width: "100%",
    "min-height": "100vh",
    display: "flex",
    "align-items": "center",
    "background-size": "cover",
    "background-position": "center",
    "background-attachment": "fixed",
    "background-image":
      'linear-gradient(rgba(0, 0, 1, 1), rgba(1, 0, 0, 0)), url("https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?cs=srgb&dl=pexels-walid-ahmad-847402.jpg&fm=jpg")',
  });

  $(".Sphinx_III_disc span").css({
    color: "#BAAD95",
    "font-size": "2em",
    "margin-top": "10px",
    "font-weight": "700px",
    "margin-bottom": "40px",
    "text-decoration": "underline",
  });

  $(".Sphinx_III_disc h3").css({
    color: "#BAAD95",
    "font-size": "1.5em",
    "margin-top": "20px",
    "font-weight": "700px",
    "margin-bottom": "40px",
    "word-spacing": "10px",
  });

  $(".Temple_Nefertiti").css({
    display: "none",
    width: "100%",
    "min-height": "100vh",
    display: "flex",
    "align-items": "center",
    "background-size": "cover",
    "background-image":
      'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url("https://res.cloudinary.com/dtpgi0zck/image/upload/s--4ucVLZG1--/c_fill,h_580,w_860/v1/EducationHub/photos/temple-of-nefertiti.webp")',
    "background-position": "center",
    "background-attachment": "fixed",
    transition: "0.8s ease",
  });

  $(".Temple_Nefertiti h2").css({
    color: "#BAAD95",
    "font-size": "5em",
    "font-weight": "bold",
    "word-spacing": "10px",
  });

  $(".Temple_Nefertiti span").css({
    display: "inline-block",
    "margin-top": "18px",
    color: "#BAAD95",
    "font-size": "3em",
  });

  $(".Temple_Nefertiti h3").css({
    color: "#BAAD95",
    "font-size": "2em",
    "margin-top": "20px",
    "font-weight": "700px",
    "letter-spacing": "3px",
    "word-spacing": "20px",
    "margin-bottom": "40px",
  });

  $(".Temple_Nefertiti_disc").css({
    width: "100%",
    "min-height": "100vh",
    display: "flex",
    "align-items": "center",
    "background-size": "cover",
    "background-position": "center",
    "background-attachment": "fixed",
    "background-image":
      'linear-gradient(rgba(0, 0, 1, 1), rgba(1, 0, 0, 0)), url("https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?cs=srgb&dl=pexels-walid-ahmad-847402.jpg&fm=jpg")',
  });

  $(".Temple_Nefertiti_disc span").css({
    color: "#BAAD95",
    "font-size": "2em",
    "margin-top": "10px",
    "font-weight": "700px",
    "margin-bottom": "40px",
    "text-decoration": "underline",
    "z-index": "10px",
  });

  $(".Temple_Nefertiti_disc h3").css({
    color: "#BAAD95",
    "font-size": "1.5em",
    "margin-top": "20px",
    "font-weight": "700px",
    "margin-bottom": "40px",
    "word-spacing": "10px",
  });

  $(".cv").css({
    "text-decoration": "none",
    color: "#F6D949",
  });

  $("footer").css({
    "background-color": "#000000",
    padding: "2em",
    display: "flex",
    "flex-direction": "column",
  });

  $("footer p").css({
    color: "#BAAD95",
    "font-size": "1em",
    "font-weight": "400",
  });

  $("footer span").css({
    color: "#D5CEA3",
  });

  $('.national').css({
    'color': '#F6D949',
    'text-decoration': 'none'
  });
  
  $('.main-button').css({
    'background-color': '#D5CEA3',
    'display': 'inline-block',
    'font-size': '1.1em',
    'text-decoration': 'none',
    'font-weight': '600',
    'padding': '0.9375em',
    'color': '#000000',
    'letter-spacing': '1px',
    'border-radius': '30px',
    'transition': '1s ease',
    'align-items': 'center',
    'margin-left': '60px'
  });

  $('.main-button').hover(function() {
    $(this).css({
      'background-color': '#b2b2b0',
      'transform': 'scale(1)',
      'color': '#3C2A21',
      /* 'filter': 'blur(0px)', */
      /* 'transform': 'rotate(360deg)', */
    });
  });
  //end STYLE METHODS css


  //start STYLE METHODS animate
  // $('.main-button').animate({
  //   'background-color': '#b2b2b0',
  //   'transform': 'scale(1)',
  //   'color': '#3C2A21',
  // }, 1000);
});

//end - jquary
