const container = document.querySelector(".container");
const chooseCountry = document.querySelector(".countries");

const countries = [
  {
    id: "1",
    name: "Австрія",
    img:
      "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(Sourse/Austria.jpg)",
    description:
      "Австрія — в минулому це серце могутньої імперії Габсбургів, яка займала величезну частину Європи й підпорядкувала більшість сусідніх держав. Це один з культурних центрів європейського континенту і гавань західних музичних традицій. Це країна приголомшливої природи — від засніжених і покритих лісом величних Альп до витонченого Дунаю і крижаних печер Айсризенвельта."
  },
  {
    id: "2",
    name: "Італія",
    img:
      "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(Sourse/Italy.jpg)",
    description:
      "Італія - це одне з найбільш унікальних і чарівних місць у світі. Вона має одні з найкрасивіших і різноманітних ландшафтів в Європі, найбільшу у світі чисельність скарбів історії, культури та мистецтва, сприятливий теплий клімат і смачну автентичну кухню."
  },
  {
    id: "3",
    name: "Нідерланди",
    img:
      "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(Sourse/Netherlands.jpg)",
    description:
      "Нідерланди — одна з найбільш густонаселених і “рівних” країн Європи, укріплена дамбами й пронизана мережею каналів. Це держава пасторальних пейзажів, мальовничих сіл і спокійних міст, особняками серед яких стоять Амстердам, Роттердам і Утрехт. Колись велика військово-морська держава, тепер Нідерланди — сучасна європейська країна, яка все ще відіграє важливу роль на міжнародній арені."
  },
  {
    id: "4",
    name: "Чехія",
    img:
      "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(Sourse/CzechRepublic.jpg)",
    description:
      "Що спадає на думку, коли ми говоримо про Чехію? Це готичні шпилі Праги й празькі вулички, це давній Карлів міст через Влтаву, це сотні замків і костели в затишних старовинних містечках, це відмінне пиво та смачна їжа. Все це так, але є дещо ще. Чехія — це атмосфера спокою і тиші, привітність і неспішність місцевих жителів, розміреність життя, красиві природні пейзажі: неквапливі річки, поля і мальовничі лісисті пагорби."
  },
  {
    id: "5",
    name: "Хорватія",
    img:
      "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(Sourse/Croatia.jpg)",
    description:
      "Хорватія — це невелика південна країна з багатою культурною спадщиною, красивою природою і смачною кухнею. Це справжня перлина Адріатики з прекрасними пляжами Істрії та Далмації, теплим смарагдовим морем, чарівними стародавніми приморськими містами, оливковими гаями та вершинами Динарських гір."
  }
];

function changeContent({ target }) {
  let { name, img, description } = countries.find(({ id }) => id === target.id);
  document.querySelector(".countryName").innerHTML = name;
  document.querySelector(".shortDescription").innerHTML = description;
  container.style.backgroundImage = img;
}

chooseCountry.addEventListener("click", changeContent);