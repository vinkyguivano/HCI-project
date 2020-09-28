const mapList = [
  {
    description: "KANAL",
    url: "../Assets/MAPS/Kanal_Rework_1.jpg"
  },
  {
    description: "BANK",
    url: "../Assets/MAPS/Siege_Bank_Thumbnail.png"
  },
  {
    description: "OREGON",
    url: "../Assets/MAPS/Oregon_Rework.jpg"
  },
  {
    description: "CHALET",
    url: "../Assets/MAPS/Siege_Chalet_Thumbnail.png"
  },
  {
    description: "FAVELA",
    url: "../Assets/MAPS/Siege_Favela_Thumbnail.png"
  },
  {
    description: "FORTRESS",
    url: "../Assets/MAPS/Fortress_1.jpg"
  },
  {
    description: "CONSULATE",
    url: "../Assets/MAPS/Siege_Consulate_Thumbnail.png"
  },
  {
    description: "COASTLINE",
    url: "../Assets/MAPS/CoastlineOverheadView.png"
  },
  {
    description: "TOWER",
    url: "../Assets/MAPS/Siege_Tower_Thumbnail.png"
  }
];

mapList.forEach((map) => {
  $("#image-list").append(`
      <div class="image-container">
        <img src=${map.url} />
        <div class="image-desc">${map.description}</div>
      </div>
  `);
});
