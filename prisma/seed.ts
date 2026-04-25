import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type AmmoSeed = {
  name: string;
  damage: number;
  penetration: number;
};

type ModSeed = {
  name: string;
  note: string;
};

type SeedWeapon = {
  id: string;
  name: string;
  category: string;
  ammo: string;
  imageUrl: string;
  fullyModdedImageUrl: string;
  ergonomics: number;
  verticalRecoil: number;
  horizontalRecoil: number;
  baseRpm: number;
  recoilLabel: string;
  ttkLabel: string;
  description: string;
  recommendedAmmo: AmmoSeed[];
  recommendedMods: ModSeed[];
};

const seedWeapons: SeedWeapon[] = [
  {
    id: "m4a1",
    name: "M4A1",
    category: "Assault Rifle",
    ammo: "5.56x45mm NATO",
    imageUrl: "https://assets.tarkov.dev/5447a9cd4bdc2dbd208b4567-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/5a32808386f774764a3226d9-512.webp",
    ergonomics: 56,
    verticalRecoil: 88,
    horizontalRecoil: 215,
    baseRpm: 800,
    recoilLabel: "88 / 215",
    ttkLabel: "빠름",
    description: "중근거리 교전에 강하고 모딩 자유도가 높은 5.56 플랫폼.",
    recommendedAmmo: [
      { name: "M855A1", damage: 49, penetration: 44 },
      { name: "M856A1", damage: 54, penetration: 37 },
      { name: "SSA AP", damage: 36, penetration: 57 },
    ],
    recommendedMods: [
      { name: "KAC QDC 5.56x45 sound suppressor", note: "소음기 + 반동 제어" },
      { name: "Geissele SMR MK16 13.5 inch M-LOK handguard", note: "반동/모딩 슬롯 확보" },
      { name: "Magpul CTR Carbine buttstock", note: "인체공학 확보" },
    ],
  },
  {
    id: "ak-74m",
    name: "AK-74M",
    category: "Assault Rifle",
    ammo: "5.45x39mm",
    imageUrl: "https://assets.tarkov.dev/5acf7db286f7743a9c7092e3-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/5bbf1c1c88a45017144d28c5-512.webp",
    ergonomics: 48,
    verticalRecoil: 104,
    horizontalRecoil: 295,
    baseRpm: 650,
    recoilLabel: "104 / 295",
    ttkLabel: "중간",
    description: "안정적인 반동 제어와 가성비 모딩이 가능한 5.45 플랫폼.",
    recommendedAmmo: [
      { name: "5.45x39 BP", damage: 48, penetration: 45 },
      { name: "5.45x39 BT", damage: 42, penetration: 40 },
      { name: "5.45x39 BS", damage: 40, penetration: 54 },
    ],
    recommendedMods: [
      { name: "Zenit DTK-1 5.45x39 muzzle brake", note: "반동 제어" },
      { name: "Zenit B-10M handguard", note: "모딩 슬롯 확장" },
      { name: "Zenit PT-1 stock", note: "인체공학/반동 개선" },
    ],
  },
  {
    id: "mp7a1",
    name: "MP7A1",
    category: "Submachine Gun",
    ammo: "4.6x30mm HK",
    imageUrl: "https://assets.tarkov.dev/5ba26383d4351e00334c93d9-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/5bd05f1186f774572f181678-512.webp",
    ergonomics: 65,
    verticalRecoil: 32,
    horizontalRecoil: 180,
    baseRpm: 950,
    recoilLabel: "32 / 180",
    ttkLabel: "매우 빠름",
    description: "초근거리 돌입에 최적화된 고연사 PDW.",
    recommendedAmmo: [
      { name: "AP SX", damage: 35, penetration: 53 },
      { name: "Subsonic SX", damage: 45, penetration: 36 },
      { name: "FMJ SX", damage: 43, penetration: 40 },
    ],
    recommendedMods: [
      { name: "HK MP7 B&T Rotex 2 4.6x30 sound suppressor", note: "소음기 + 반동 안정화" },
      { name: "EOTech EXPS3 holographic sight", note: "실내 교전 시인성" },
      { name: "HK MP7 4.6x30 40-round magazine", note: "지속 교전 화력" },
    ],
  },
  {
    id: "asval",
    name: "AS VAL",
    category: "Special Assault Rifle",
    ammo: "9x39mm",
    imageUrl: "https://assets.tarkov.dev/57c44b372459772d2b39b8ce-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/618aaeb931ddad66c15eb7e9-512.webp",
    ergonomics: 54,
    verticalRecoil: 54,
    horizontalRecoil: 184,
    baseRpm: 900,
    recoilLabel: "54 / 184",
    ttkLabel: "빠름",
    description: "일체형 소음기를 가진 9x39 특수 플랫폼.",
    recommendedAmmo: [
      { name: "SP-6", damage: 58, penetration: 46 },
      { name: "9x39mm BP gs", damage: 55, penetration: 55 },
      { name: "SPP", damage: 64, penetration: 40 },
    ],
    recommendedMods: [
      { name: "AS VAL Rotor 43 pistol grip", note: "인체공학 개선" },
      { name: "Axion Kobra EKP-8-18 reflex sight", note: "근중거리 조준" },
      { name: "VSS/VAL 9x39 30-round magazine", note: "교전 지속력 상승" },
    ],
  },
  {
    id: "akm",
    name: "AKM",
    category: "Assault Rifle",
    ammo: "7.62x39mm",
    imageUrl: "https://assets.tarkov.dev/59e8d2ab86f77407f03fc9c2-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/5a327f9086f77475187e50a9-512.webp",
    ergonomics: 42,
    verticalRecoil: 125,
    horizontalRecoil: 310,
    baseRpm: 600,
    recoilLabel: "125 / 310",
    ttkLabel: "중간",
    description: "강한 저지력의 7.62x39 주력 플랫폼.",
    recommendedAmmo: [
      { name: "7.62x39 BP", damage: 58, penetration: 47 },
      { name: "7.62x39 PP", damage: 60, penetration: 41 },
      { name: "7.62x39 PS", damage: 57, penetration: 35 },
    ],
    recommendedMods: [
      { name: "Zenit DTK-1 7.62x39 muzzle brake", note: "수직 반동 완화" },
      { name: "RK-2 tactical foregrip", note: "반동 제어" },
      { name: "AK AKademia Bastion dust cover", note: "광학 장착 기반" },
    ],
  },
  {
    id: "mk47-mutant",
    name: "Mk47 Mutant",
    category: "Assault Rifle",
    ammo: "7.62x39mm",
    imageUrl: "https://assets.tarkov.dev/606dae0ab0e443224b421bb7-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/628755c60c9eb3366b521908-512.webp",
    ergonomics: 50,
    verticalRecoil: 92,
    horizontalRecoil: 250,
    baseRpm: 650,
    recoilLabel: "92 / 250",
    ttkLabel: "빠름",
    description: "7.62 플랫폼 중 반동 제어가 우수한 하이엔드 AR.",
    recommendedAmmo: [
      { name: "7.62x39 BP", damage: 58, penetration: 47 },
      { name: "7.62x39 PP", damage: 60, penetration: 41 },
      { name: "7.62x39 PS", damage: 57, penetration: 35 },
    ],
    recommendedMods: [
      { name: "KAC PRS/QDC 7.62x51 sound suppressor", note: "반동/소음 제어" },
      { name: "SE-5 Express Grip", note: "조작성 향상" },
      { name: "Vortex Razor HD Gen.2 1-6x24 scope", note: "중거리 대응" },
    ],
  },
  {
    id: "vector-45",
    name: "Vector .45",
    category: "Submachine Gun",
    ammo: ".45 ACP",
    imageUrl: "https://assets.tarkov.dev/5fb64bc92b1b027b1f50bcf2-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/5fd251ee16cac650092f5d02-512.webp",
    ergonomics: 63,
    verticalRecoil: 37,
    horizontalRecoil: 190,
    baseRpm: 1100,
    recoilLabel: "37 / 190",
    ttkLabel: "매우 빠름",
    description: ".45 ACP 고연사 근접 특화 SMG.",
    recommendedAmmo: [
      { name: ".45 ACP AP", damage: 66, penetration: 38 },
      { name: ".45 ACP Match FMJ", damage: 76, penetration: 25 },
      { name: ".45 ACP RIP", damage: 130, penetration: 3 },
    ],
    recommendedMods: [
      { name: "KRISS Vector .45 ACP suppressor (Osprey .45)", note: "근접전 소음 억제" },
      { name: "RK-1 tactical foregrip", note: "연사 제어" },
      { name: "EOTech XPS3-0 holographic sight", note: "빠른 표적 획득" },
    ],
  },
  {
    id: "p90",
    name: "P90",
    category: "Submachine Gun",
    ammo: "5.7x28mm FN",
    imageUrl: "https://assets.tarkov.dev/5d23376786f77459bb77d838-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/5d23404b86f7740d62079098-512.webp",
    ergonomics: 61,
    verticalRecoil: 44,
    horizontalRecoil: 200,
    baseRpm: 900,
    recoilLabel: "44 / 200",
    ttkLabel: "빠름",
    description: "대용량 탄창과 안정적인 반동이 강점인 5.7 플랫폼.",
    recommendedAmmo: [
      { name: "SS190", damage: 49, penetration: 37 },
      { name: "SB193", damage: 54, penetration: 35 },
      { name: "L191", damage: 58, penetration: 33 },
    ],
    recommendedMods: [
      { name: "FN Attenuator 5.7x28 sound suppressor", note: "소음 억제" },
      { name: "FN Ring Sight reflex sight", note: "근거리 조준" },
      { name: "FN P90 5.7x28 50-round magazine", note: "지속 화력" },
    ],
  },
  {
    id: "sr-25",
    name: "SR-25",
    category: "Designated Marksman Rifle",
    ammo: "7.62x51mm NATO",
    imageUrl: "https://assets.tarkov.dev/5df8ce05b11454561e39243b-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/628753bba4a8431af4739d3b-512.webp",
    ergonomics: 45,
    verticalRecoil: 96,
    horizontalRecoil: 285,
    baseRpm: 700,
    recoilLabel: "96 / 285",
    ttkLabel: "중간",
    description: "중장거리 고관통 교전에 강한 DMR.",
    recommendedAmmo: [
      { name: "M62", damage: 79, penetration: 44 },
      { name: "M80", damage: 80, penetration: 41 },
      { name: "M61", damage: 70, penetration: 64 },
    ],
    recommendedMods: [
      { name: "KAC QDC 7.62x51 sound suppressor", note: "반동 제어 + 소음기" },
      { name: "Vortex Razor HD Gen.2 1-6x24 scope", note: "가변 배율" },
      { name: "Magpul PRS GEN3 stock", note: "반동/조작성 균형" },
    ],
  },
  {
    id: "mosin",
    name: "Mosin",
    category: "Bolt-Action Rifle",
    ammo: "7.62x54R",
    imageUrl: "https://assets.tarkov.dev/5ae08f0a5acfc408fb1398a1-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/5c0c1f2b86f77455912eaefc-512.webp",
    ergonomics: 32,
    verticalRecoil: 140,
    horizontalRecoil: 360,
    baseRpm: 30,
    recoilLabel: "140 / 360",
    ttkLabel: "저격형",
    description: "저비용 장거리 교전에 특화된 볼트액션.",
    recommendedAmmo: [
      { name: "SNB", damage: 75, penetration: 62 },
      { name: "7.62x54mm R PS gzh", damage: 84, penetration: 40 },
      { name: "7.62x54mm R BT gzh", damage: 78, penetration: 59 },
    ],
    recommendedMods: [
      { name: "Mosin PU 3.5x riflescope", note: "가성비 저배율 저격" },
      { name: "Mosin AIM Sports MNG rail mount", note: "광학 확장" },
      { name: "Mosin Texas Precision 7.62x54R muzzle brake", note: "반동 제어" },
    ],
  },
  {
    id: "mp-153",
    name: "MP-153",
    category: "Shotgun",
    ammo: "12/70",
    imageUrl: "https://assets.tarkov.dev/56dee2bdd2720bc8328b4567-512.webp",
    fullyModdedImageUrl: "https://assets.tarkov.dev/58414907245977598f1ad38d-512.webp",
    ergonomics: 38,
    verticalRecoil: 165,
    horizontalRecoil: 420,
    baseRpm: 60,
    recoilLabel: "165 / 420",
    ttkLabel: "근접 폭딜",
    description: "근거리 화력이 강력한 반자동 샷건.",
    recommendedAmmo: [
      { name: "AP-20", damage: 164, penetration: 37 },
      { name: "Flechette", damage: 25, penetration: 31 },
      { name: "Piranha", damage: 37, penetration: 24 },
    ],
    recommendedMods: [
      { name: "MP-153 polymer forestock", note: "반동 제어" },
      { name: "Remington Tactical Choke 12ga", note: "집탄 향상" },
      { name: "MP-153 12ga 710mm barrel", note: "사거리/운용 안정성" },
    ],
  },
];

const imageCache = new Map<string, string | null>();
const fallbackItemImage = "https://assets.tarkov.dev/5448bc234bdc2d3c308b4569-512.webp";

const itemIdByName: Record<string, string> = {
  M855A1: "54527ac44bdc2d36668b4567",
  M856A1: "59e6906286f7746c9f75e847",
  "SSA AP": "601949593ae8f707c4608daa",
  "5.45x39 BP": "56dfef82d2720bbd668b4567",
  "5.45x39 BT": "56dff061d2720bb5668b4567",
  "5.45x39 BS": "56dff026d2720bb8668b4567",
  "AP SX": "5ba26835d4351e0035628ff5",
  "Subsonic SX": "5ba26844d4351e00334c9475",
  "FMJ SX": "5ba2678ad4351e44f824b344",
  "SP-6": "57a0e5022459774d1673f889",
  "9x39mm BP gs": "5c0d688c86f77413ae3407b2",
  SPP: "5c0d668f86f7747ccb7f13b2",
  "7.62x39 BP": "59e0d99486f7744a32234762",
  "7.62x39 PP": "64b7af434b75259c590fa893",
  "7.62x39 PS": "5656d7c34bdc2d9d198b4587",
  ".45 ACP AP": "5efb0cabfb3e451d70735af5",
  ".45 ACP Match FMJ": "5e81f423763d9f754677bf2e",
  ".45 ACP RIP": "5ea2a8e200685063ec28c05a",
  SS190: "5cc80f38e4a949001152b560",
  SB193: "5cc80f67e4a949035e43bbba",
  L191: "5cc80f53e4a949000e1ea4f8",
  M62: "5a608bf24f39f98ffc77720e",
  M80: "58dd3ad986f77403051cba8f",
  M61: "5a6086ea4f39f99cd479502f",
  SNB: "560d61e84bdc2da74d8b4571",
  "7.62x54mm R PS gzh": "59e77a2386f7742ee578960a",
  "7.62x54mm R BT gzh": "5e023d34e8a400319a28ed44",
  "AP-20": "5d6e68a8a4b9360b6c0d54e2",
  Flechette: "5d6e6911a4b9361bd5780d52",
  Piranha: "64b8ee384b75259c590fa89b",
  "KAC QDC 5.56x45 sound suppressor": "626673016f1edc06f30cf6d5",
  "Geissele SMR MK16 13.5 inch M-LOK handguard": "5ea16ada09aa976f2e7a51be",
  "Magpul CTR Carbine buttstock": "5d135e83d7ad1a21b83f42d8",
  "Zenit DTK-1 5.45x39 muzzle brake": "5649ab884bdc2ded0b8b457f",
  "Zenit B-10M handguard": "5648b4534bdc2d3d1c8b4580",
  "Zenit PT-1 stock": "5b222d405acfc400153af4fe",
  "HK MP7 B&T Rotex 2 4.6x30 sound suppressor": "5ba26ae8d4351e00367f9bdb",
  "EOTech EXPS3 holographic sight": "558022b54bdc2dac148b458d",
  "HK MP7 4.6x30 40-round magazine": "5ba26586d4351e44f824b340",
  "AS VAL Rotor 43 pistol grip": "5a69a2ed8dc32e000d46d1f1",
  "Axion Kobra EKP-8-18 reflex sight": "591c4efa86f7741030027726",
  "VSS/VAL 9x39 30-round magazine": "65118f531b90b4fc77015083",
  "Zenit DTK-1 7.62x39 muzzle brake": "5649ab884bdc2ded0b8b457f",
  "RK-2 tactical foregrip": "5c1bc5af2e221602b412949b",
  "AK AKademia Bastion dust cover": "5d2c76ed48f03532f2136169",
  "KAC PRS/QDC 7.62x51 sound suppressor": "5dfa3d2b0dee1b22f862eade",
  "SE-5 Express Grip": "5b057b4f5acfc4771e1bd3e9",
  "Vortex Razor HD Gen.2 1-6x24 scope": "618ba27d9008e4636a67f61d",
  "KRISS Vector .45 ACP suppressor (Osprey .45)": "5fbe760793164a5b6278efc8",
  "RK-1 tactical foregrip": "5c1bc5612e221602b5429350",
  "EOTech XPS3-0 holographic sight": "58491f3324597764bc48fa02",
  "FN Attenuator 5.7x28 sound suppressor": "5cebec00d7f00c065c53522a",
  "FN Ring Sight reflex sight": "5cebec38d7f00c00110a652a",
  "FN P90 5.7x28 50-round magazine": "5cc70093e4a949033c734312",
  "KAC QDC 7.62x51 sound suppressor": "5dfa3d2b0dee1b22f862eade",
  "Magpul PRS GEN3 stock": "5d44069ca4b9361ebd26fc37",
  "Mosin PU 3.5x riflescope": "5b3f7c1c5acfc40dc5296b1d",
  "Mosin AIM Sports MNG rail mount": "5bc5a372d4351e44f824d17f",
  "Mosin Texas Precision 7.62x54R muzzle brake": "5bc5a351d4351e003477a414",
  "MP-153 polymer forestock": "56deed6ed2720b4c698b4583",
  "Remington Tactical Choke 12ga": "560838c94bdc2d77798b4569",
  "MP-153 12ga 710mm barrel": "588200cf2459774414733d55",
};

function toAssetUrlById(itemId: string): string {
  return `https://assets.tarkov.dev/${itemId}-512.webp`;
}

async function resolveItemImage(itemName: string): Promise<string | null> {
  if (itemIdByName[itemName]) {
    return toAssetUrlById(itemIdByName[itemName]);
  }

  if (imageCache.has(itemName)) return imageCache.get(itemName) ?? null;

  const query = `
    query ItemImage($name: String!) {
      items(name: $name, limit: 5) {
        name
        shortName
        image512pxLink
      }
    }
  `;

  try {
    const response = await fetch("https://api.tarkov.dev/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { name: itemName } }),
    });

    if (!response.ok) {
      imageCache.set(itemName, null);
      return null;
    }

    const json = (await response.json()) as {
      data?: { items?: Array<{ name: string; shortName: string; image512pxLink: string | null }> };
    };

    const items = json.data?.items ?? [];
    const exact =
      items.find((x) => x.name.toLowerCase() === itemName.toLowerCase()) ??
      items.find((x) => x.shortName.toLowerCase() === itemName.toLowerCase()) ??
      items[0];

    const link = exact?.image512pxLink ?? null;
    imageCache.set(itemName, link);
    return link;
  } catch {
    imageCache.set(itemName, null);
    return null;
  }
}

async function main() {
  const legacyIdAliases: Record<string, string[]> = {
    asval: ["as-val"],
  };

  for (const weapon of seedWeapons) {
    const legacyIds = legacyIdAliases[weapon.id] ?? [];
    if (legacyIds.length > 0) {
      await prisma.weapon_ammo.deleteMany({ where: { weapon_id: { in: legacyIds } } });
      await prisma.weapon_mods.deleteMany({ where: { weapon_id: { in: legacyIds } } });
      await prisma.weapons.deleteMany({ where: { id: { in: legacyIds } } });
    }

    await prisma.weapons.deleteMany({
      where: {
        name: weapon.name,
        NOT: { id: weapon.id },
      },
    });

    const resolvedWeaponImage = weapon.imageUrl;

    const weaponUpsertData = {
      name: weapon.name,
      display_name: weapon.name,
      type: weapon.category,
      calibers: [weapon.ammo],
      tags: ["seed", weapon.category.toLowerCase().replace(/\s+/g, "-")],
      base_rpm: weapon.baseRpm,
      recoil: weapon.recoilLabel,
      ttk: weapon.ttkLabel,
      description: weapon.description,
      ergonomics: weapon.ergonomics,
      verticalRecoil: weapon.verticalRecoil,
      horizontalRecoil: weapon.horizontalRecoil,
      recommendedAmmo: weapon.recommendedAmmo.map((x) => x.name),
      recommendedMods: weapon.recommendedMods.map((x) => x.name),
      imageUrl: resolvedWeaponImage,
      fullyModdedImageUrl: weapon.fullyModdedImageUrl,
    } as unknown as Record<string, unknown>;

    await prisma.weapons.upsert({
      where: { id: weapon.id },
      update: weaponUpsertData as never,
      create: {
        id: weapon.id,
        ...(weaponUpsertData as Record<string, unknown>),
      } as never,
    });

    await prisma.weapon_ammo.deleteMany({ where: { weapon_id: weapon.id } });
    await prisma.weapon_mods.deleteMany({ where: { weapon_id: weapon.id } });

    const ammoRows = await Promise.all(
      weapon.recommendedAmmo.map(async (ammo) => ({
        weapon_id: weapon.id,
        ammo_name: ammo.name,
        damage: ammo.damage,
        penetration: ammo.penetration,
        imageUrl: (await resolveItemImage(ammo.name)) ?? fallbackItemImage,
      })),
    );

    if (ammoRows.length > 0) {
      await prisma.weapon_ammo.createMany({ data: ammoRows });
    }

    const modRows = await Promise.all(
      weapon.recommendedMods.map(async (mod) => ({
        weapon_id: weapon.id,
        part_name: mod.name,
        description: mod.note,
        imageUrl: (await resolveItemImage(mod.name)) ?? fallbackItemImage,
      })),
    );

    if (modRows.length > 0) {
      await prisma.weapon_mods.createMany({ data: modRows });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("Seed failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
