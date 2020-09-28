const operatorList = {
  WAMAI: {
    description:
      "Born to a fishing family on the coast of Kenya, Furaha spent his childhood hunting sharks and collecting lost treasures from the ocean floor of the Lamu Archipelago. It soon became apparent that he was able to stay underwater far longer than his peers, and medical exploration revealed an abnormal physiology that contributed to Furaha's long-held belief that he was “not from here.” When the opportunity arose to join the Kenyan Navy, and later the Kenya Special Boat Unit, he put his skills to good use. He quickly drew the attention of generals within the navy as well as the worldwide scientific community for his prolific and frequent record-breaking freedives. He later transitioned to NIGHTHAVEN, drawn by the promise of more down-time and a private boat to take him to where his next dive site might be.",
    quotes: "The closer you are to death, the more vibrant life becomes.",
    url: "wamai.png"
  },
  KALI: {
    description:
      "Born to wealthy parents, Shah's ability to achieve her goals was assured from an early age. This self-assurance hit a brick wall when she tried to join the military. Her interest in martial arts led her to enlist, but she quickly discovered that women weren't allowed to serve in combat units. Despite all of her money and all of her social influence, she had found an obstacle between her and something she wanted, and it would not budge. Leaving the military, she created her own Private Security Company to operate within India's borders, then a Private Military Company, NIGHTHAVEN, to operate overseas. She routinely negotiates multi-million-dollar contracts with incredibly favorable terms. Her ruthlessness is legendary, but by becoming a resource the Indian government desperately needs she has circumvented the laws that kept her from her goal and revalidated her self-perception as an unstoppable force in a largely static world.",
    quotes: "Acceptance of mediocrity is the first step toward failure.",
    url: "kali.png"
  },
  MOZZIE: {
    description: `Right after Year 10, Max Goose applied to enter the Australian Defence Force Academy, later working in Combat & Security. He joined an infantry regiment that incorporated dirt bikes and all-terrain vehicles in their reconnaissance operations. Goose excelled in land navigation and became the two-wheeler expert in raids, scouting, and convoy operations.
    Following Operation Catalyst, he was handpicked to join the Special Air Service Regiment (SASR), so long as he passed selection and refrained from talking back. His specialized off-road skillsets and quick thinking were highly prized, even though his driving style appeared reckless. He deployed to Operation Slipper and served until the operation's conclusion. He later received the National Emergency Medal for saving firefighters during the Esperance bushfires.`,
    quotes: "Some say I'm a pest. I say right back atcha, mate!",
    url: "mozzie.png"
  },
  NQKK: {
    description: `For reasons of National Security and currently active missions, Nøkk’s records are sealed at NATO Confidential security clearance, but her files have been released to Six. Nøkk enlisted at the Army NCO School in Sønderborg, then enrolled at the Royal Danish Military Academy where she graduated at the rank of First Lieutenant. With four deployments under her belt, Nøkk underwent additional special operations training, earning her Jægerkorpset maroon beret with skills in covert ops, combat search and rescue, direct action, special recon, arctic warfare, and advanced breaching. Nøkk served in Afghanistan and Iraq, often alone in deep undercover behind enemy lines. She received commendations for eliminating hostile insurgents in surgical strikes and was responsible for uncovering Erik “Maverick” Thorn’s location, forwarding that intel to the Unit.
    Nøkk keeps her identity hidden from all but her fellow operators. NATO’s O&P division recommended Nøkk for Rainbow as one of its deep cover specialists.`,
    quotes: "The only thing I feel when I pull the trigger is recoil.",
    url: "mnqkk.png"
  },
  WARDEN: {
    description:
      "Collinn McKinley enrolled in the Marine Corps at 18 and earned several commendations in his service jacket for his aggressive quick-thinking, achieving Master Sergeant despite a few minor infractions on his record. After his third tour, he left the Marines and entered the Secret Service in close-protection detail. McKinley’s agility was instrumental in saving Secretary of State Baldwin’s life when insurgents attacked the U.S. diplomatic junket. Baldwin later went on to win the U.S. Presidential and requested McKinley be assigned to the Presidential Protective Division. McKinley has spent over a decade in Washington, protecting important political figures. He is the foremost expert in close protection detail, and with President Baldwin finishing his second term, McKinley has received high endorsements for his transition into Rainbow.",
    quotes: "I'm never unprepared.",
    url: "warden.png"
  },
  AMARU: {
    description:
      "Azucena Rocío Quispe was born on May 6, 1971 in Cojata, Peru. She suffered a difficult childhood but was provided with plenty of friendly rivalries through her siblings and cousins. Her grandmother, Kantuta Quispe, frequently told her stories of her great-grandfather, Isaías Quispe and instilled in her a hope that he would one day return to them, despite the fact that he had gone missing in 1925. While attending her grandmother's funeral in 1994, Azucena was horrified to learn that she had previously burned all of Isaías' letter during one of her hallucinatory periods. Despite this irreplaceable loss of family history, Azucena's Aunt gifted her an old compass that once belonged to the famous English explorer Percy Fawcett who had gifted it to Kantuta as a child.",
    quotes:
      "Forget who you are, and nothing else matters. You’ll fight for anyone, and never know why.",
    url: "amaru.png"
  },
  GRIDLOCK: {
    description: `The eldest of five, Fairous has demonstrated leadership potential throughout her life. From an early age Fairous worked with engines and competed in robot championships. Her mechanic background was heavily influenced by her father, a military aircraft mechanic.
      Fairous joined the Australian army reserves to further develop her mechanical engineering skills and to have access to the best equipment. After graduating from university she chose Army branch of the Australian Defense Force, where she honed her mechanical prowess.`,
    quotes: "Let's get stuck into it, ya mongrels!",
    url: "fridlock.png"
  },
  GOYO: {
    description: `César Ruiz Hernández was eleven years old when a bomb destroyed his home, killing his father and sister and severely injuring his mother. With the help of Specialist Azucena Rocío "Amaru" Quispe, César's mother Sofia taught him to observe his surroundings, and to avoid the other boys his age who had been drawn into gang-related affairs. She encouraged him to enroll at the Heroic Naval Military School, where he graduated as a teniente de corbeta. He joined the Naval Infantry, then the Amphibious Commando Battalion, participating extensively in anti-smuggling operations and several high-profile arrests. Becoming a member of the Fuerzas Especiales introduced him to the reality that drugs were no longer the primary source of income for the cartels. He began working with UNESCO and INTERPOL to combat antiquities trafficking, where he gained the attention of Rainbow as a mind with a keen tactical sense and exceptional forward-thinking.`,
    quotes: "A person is never more honest than when they think they're alone.",
    url: "goyo.png"
  },
  NOMAD: {
    description:
      "Brought up in a wealthy Moroccan family, Sanaa El Maktoub travelled considerably at a young age, visiting Europe and North Africa, and dreaming about braving remote regions. She enlisted in the military at 19 and later joined the Groupe d'Intérvention de La Gendarmerie Royale (GIGR) after graduating from the legendary Fortress. She served 4 tours with the Mountain Infantry Battalion and took part in Flintlock exercises and joint missions with Trans-Saharan Counterterrorism Initiative partners. She became her unit’s expert on environmental operations.",
    quotes:
      "Deep down in my veins, I knew I had to travel. Now that I have, I’m certain I haven’t traveled enough.",
    url: "nomad.png"
  },
  MAVERICK: {
    description:
      "Bostonian Erik Thorn came from a multilingual home and ranked in the top 2% in intelligence. While his parents were loving, they were extremely protective and did not allow him to explore his own childhood neighborhood. This eventually led him to enlist in the U.S. Army after high school where he rose in rank over a short period of time. He learned Dari, and became an Intelligence Officer, serving in Kabul as foreign reporters, adventurers, and criminals flocked to the city. Thorn was well known in the underground club circuit and even among locals as a proficient Buzkashi player.",
    quotes:
      "I was trapped, for a long time. Lived and seen things, you couldn't imagine. Now I see things... in a different light.",
    url: "maverick.png"
  },
  KAID: {
    description: `Jalal El Fassi was raised on stories of the Fortress, the legendary training facility in the Atlas Mountains. Its incomparable reputation, along with its famed "Kaids" (Commander) were seared into El Fassi.`,
    quotes: "Lead by example and the mountain will move.",
    url: "kaid.png"
  },
  MAESTRO: {
    description: `Adriano "Maestro" Martello, oldest in a family of eight children, grew up in Rome, but attended the Military Academy of Modena at 18. He joined the Carabinieri and earned a spot as an Explorer Paratrooper in the 1st Paratrooper Regiment known as Tuscania. After several distinguished tours where he earned Silver and Bronze Medals of Military Valor, Martello qualified for Gruppo di Intervento Speciale (Special Intervention Group or G.I.S.) and participated in joint operations in Iraq, earning a facial scar from a roadside IED. He engaged in multiple actions against homegrown threats in Italy and eventually became an instructor helping train Tier 3 units in the Italian military.
    After Martello’s tour was completed, he went into private consultation where his courses quickly became a top-rated operator bootcamp for teaching advanced techniques to Tier 3 and Tier 2 units, as well as private military companies. The Tuscania eventually convinced Martello to re-enlist to help upgrade one of their units to a Tier 2 Special Forces classification, and this enabled him to join Rainbow as a representative of the Italian Units.`,
    quotes:
      "“Did I ever tell you about the time we tree-jumped into a Congo swamp at night? No? Oh, it’s a good one.”",
    url: "maestro.png"
  }
};

Object.keys(operatorList).forEach((key) => {
  const operator = operatorList[key];
  $("#image-list").append(
    `<div class="image-container">
      <img
        src="../Assets/Operators/${operator.url}"
        data-toggle="modal"
        data-target="#myModal"
        class="image-operator"
        name=${key}
      />
      Open Modal
      <div class="image-desc">${key}</div>
    </div>`
  );
});

$(".modal button").click(function () {
  $(".modal").css("display", "none");
  $(".modal").toggleClass("on");
});

$(".image-container").on("click", function (e) {
  const operator = operatorList[e.target.name];
  $(".modal-title").text(e.target.name);
  $(".modal-quotes").text(
    `${operator.quotes} - ${e.target.name.toLowerCase()}`
  );
  $(".modal-body").text(operator.description);
  $(".modal").css("display", "flex");
  $(".modal").addClass("on");
});
