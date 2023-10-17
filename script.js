const dynamicHeight = (sectionId) =>{
  const section = document.getElementById(sectionId)

  const itemAbsolute = section.querySelector(".widget.item-absolute");
  itemAbsolute.style.position = "relative";
  itemAbsolute.style.height = "100%";

  section.querySelector(".section-block").style.height = "100%";

  section.style.height = "100%";
}