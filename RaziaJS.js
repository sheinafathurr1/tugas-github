function kenaRazia(date, data) {
  const ganjilGenapLocations = [
    "Gajah Mada",
    "Hayam Wuruk",
    "Sisingamangaraja",
    "Panglima Polim",
    "Fatmawati",
    "Tomang Raya",
  ];

  const results = [];

  data.forEach((vehicle) => {
    if (vehicle.type === "Mobil") {
      const platNum = vehicle.plat.split(" ")[1];
      const lastDigit = parseInt(platNum.charAt(platNum.length - 1));

      let isDateEven = date % 2 === 0;
      let isPlateEven = lastDigit % 2 === 0;

      if (isDateEven !== isPlateEven) {
        let tilangCount = 0;

        vehicle.rute.forEach((route) => {
          if (ganjilGenapLocations.indexOf(route) !== -1) {
            tilangCount++;
          }
        });

        if (tilangCount > 0) {
          results.push({ name: vehicle.name, tilang: tilangCount });
        }
      }
    }
  });

  return results;
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
      ],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada",
      ],
    },
  ])
);
