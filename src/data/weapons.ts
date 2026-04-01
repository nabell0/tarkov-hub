export type WeaponStat = {
  label: string;
  value: string;
};

export type WeaponBuildPart = {
  label: string;
  value: string;
};

export type WeaponBuild = {
  title: string;
  desc: string;
  parts: WeaponBuildPart[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type WeaponAmmo = {
  name: string;
  role: string;
  penetration: number;
  damage: number;
};

export type WeaponData = {
  id?: string;
  name?: string;
  weaponName: string;
  displayName: string;
  tags: string[];
  description: string;
  caliberLabel: string;
  baseImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  stats: WeaponStat[];
  builds: WeaponBuild[];
  recommendedAmmo: WeaponAmmo[];
};

export const weaponsData: WeaponData[] = [
  {
    weaponName: "m4a1",
    displayName: "Colt M4A1",
    tags: ["Assault Rifle", "5.56x45 NATO"],
    description:
      "Escape from Tarkov을 대표하는 모딩 자유도가 높은 돌격 소총. 다양한 상황에 맞게 커스터마이즈 할 수 있습니다.",
    caliberLabel: "5.56x45mm NATO",
    baseImage: {
      src: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/2/29/M4a1.png/revision/latest?cb=20231017102422",
      alt: "M4A1 기본 외형",
      width: 1597,
      height: 573,
    },
    stats: [
      { label: "인체공학", value: "56" },
      { label: "수직 반동", value: "88" },
      { label: "수평 반동", value: "215" },
      { label: "총구 초속", value: "884 m/s" },
      { label: "연사력", value: "800 RPM" },
      { label: "무게", value: "3.36 kg" },
      { label: "사용 탄약", value: "5.56x45 NATO" },
    ],
    builds: [
      {
        title: "근거리 추천 모딩",
        desc: "빠른 반응이 필요한 근거리 교전에 적합한 빌드입니다.",
        parts: [
          { label: "핸드가드", value: "Geissele SMR MK16" },
          { label: "개머리판", value: "Magpul CTR Carbine" },
          { label: "전방 손잡이", value: "RK-2" },
          { label: "총구", value: "SureFire SOCOM556-RC2" },
          { label: "조준경", value: "EOTech EXPS3" },
          { label: "탄창", value: "STANAG 60-round" },
        ],
        image: {
          src: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/6/65/M4modded.png/revision/latest?cb=20240508062306",
          alt: "M4A1 추천 모딩 (근거리)",
          width: 316,
          height: 127,
        },
      },
      {
        title: "가성비 소음기 모딩",
        desc: "정확한 저격 및 중장거리 제압에 어울리는 빌드입니다.",
        parts: [
          { label: "핸드가드", value: 'Midwest Industries 14"' },
          { label: "개머리판", value: "PRS GEN3" },
          { label: "전방 손잡이", value: "Shift" },
          { label: "총구", value: "Thunder Beast 223CB" },
          { label: "조준경", value: "Trijicon VCOG 1-6x" },
          { label: "탄창", value: "Magpul PMAG 30-round" },
          { label: "장전 손잡이", value: "Raptor" },
        ],
      },
    ],
    recommendedAmmo: [
      { name: "M855A1", role: "종결 / 고관통", penetration: 44, damage: 49 },
      { name: "M856A1", role: "가성비 / 예광탄", penetration: 37, damage: 54 },
    ],
  },
  {
    weaponName: "mp7a1",
    displayName: "H&K MP7A1",
    tags: ["SMG", "4.6x30mm HK"],
    description:
      "MP7A1은 근접전(CQB)에 강한 초고속 연사 SMG로, 낮은 반동과 빠른 조작감이 강점입니다. 팩토리/인터체인지 등 실내 교전에서 특히 빛납니다.",
    caliberLabel: "4.6x30mm",
    baseImage: {
      src: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/02/HKMP7A1Image.png/revision/latest?cb=20231025201954",
      alt: "MP7A1 기본 외형",
      width: 1200,
      height: 417,
    },
    stats: [
      { label: "연사력", value: "950 RPM" },
      { label: "인체공학", value: "65" },
      { label: "수직 반동", value: "32" },
      { label: "무게", value: "2.27 kg" },
      { label: "유효 사거리", value: "200 m" },
      { label: "사용 탄약", value: "4.6x30mm HK" },
    ],
    builds: [
      {
        title: "근거리 추천 모딩",
        desc: "실내 교전/코너 피킹 위주로 빠르게 킬각을 잡는 세팅입니다.",
        parts: [
          { label: "개머리판", value: "HK MP7A1 stock" },
          { label: "전방 손잡이", value: "RK-2" },
          { label: "총구", value: "B&T Rotex-II 4.6x30mm sound suppressor" },
          { label: "조준경", value: "EOTech EXPS3" },
          { label: "탄창", value: "HK MP7 4.6x30 40-round magazine" },
          { label: "전술 장비", value: "L3Harris AN/PEQ-15 tactical device" },
        ],
        image: {
          src: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/c/c6/Rotex2.png/revision/latest?cb=20181108183105",
          alt: "MP7A1 소음기 장착 모딩 예시",
          width: 800,
          height: 467,
        },
      },
      {
        title: "가성비 소음기 빌드",
        desc: "소음기 + 무난한 반동/조작성 밸런스로 안정적인 운영을 목표로 합니다.",
        parts: [
          { label: "개머리판", value: "HK MP7A1 stock" },
          { label: "전방 손잡이", value: "Shift" },
          { label: "총구", value: "B&T Rotex-II 4.6x30mm sound suppressor" },
          { label: "조준경", value: "Holosun HS401G5 reflex sight" },
          { label: "탄창", value: "HK MP7 4.6x30 30-round magazine" },
        ],
      },
    ],
    recommendedAmmo: [
      { name: "AP SX", role: "고관통", penetration: 53, damage: 35 },
      { name: "FMJ SX", role: "무난 / 범용", penetration: 40, damage: 43 },
    ],
  },
  {
    id: "asval",
    name: "AS VAL",
    weaponName: "asval",
    displayName: "AS VAL",
    tags: ["Assault Rifle", "9x39mm"],
    description:
      "AS VAL은 기본 소음기가 일체형으로 장착된 특수 돌격소총으로, 900RPM 연사력과 높은 근중거리 화력을 제공합니다.",
    caliberLabel: "9x39mm",
    baseImage: {
      src: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/1/1c/Asval.png/revision/latest/scale-to-width-down/1200?cb=20240825184035",
      alt: "AS VAL 기본 외형",
      width: 1200,
      height: 306,
    },
    stats: [
      { label: "연사력", value: "900 RPM" },
      { label: "인체공학", value: "54" },
      { label: "수직 반동", value: "54" },
      { label: "수평 반동", value: "184" },
      { label: "무게", value: "2.5 kg" },
      { label: "총구 초속", value: "293 m/s" },
      { label: "사용 탄약", value: "9x39mm" },
      { label: "기본 소음기", value: "일체형 장착" },
    ],
    builds: [
      {
        title: "근접전 팩토리 런",
        desc: "빠른 연사와 저소음 교전에 집중한 근접전 세팅입니다.",
        parts: [
          { label: "총구", value: "AS VAL 9x39 integral barrel-suppressor" },
          { label: "권총 손잡이", value: "AS VAL Rotor 43 pistol grip with buffer tube" },
          { label: "조준경", value: "OKP-7 reflex sight (Dovetail)" },
          { label: "탄창", value: "VSS/VAL 9x39 SR3M.130 30-round magazine" },
          { label: "핸드가드", value: "VSS/VAL polymer handguard (Black)" },
        ],
        image: {
          src: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/0/08/VAL_MOD_4_Image.png/revision/latest/scale-to-width-down/1200?cb=20251202114404",
          alt: "AS VAL 30발 탄창 및 도트사이트 모딩 예시",
          width: 1200,
          height: 499,
        },
      },
      {
        title: "30발 탄창 범용 모딩",
        desc: "레이드 전반에서 안정적으로 운용 가능한 밸런스 빌드입니다.",
        parts: [
          { label: "총구", value: "AS VAL 9x39 integral barrel-suppressor" },
          { label: "권총 손잡이", value: "AS VAL Rotor 43 pistol grip with buffer tube" },
          { label: "조준경", value: "Axion Kobra EKP-8-18 reflex sight" },
          { label: "탄창", value: "VSS/VAL 9x39 30-round magazine" },
          { label: "핸드가드", value: "VSS/VAL polymer handguard (Plum)" },
        ],
      },
    ],
    recommendedAmmo: [
      { name: "SP-6", role: "가성비 관통탄", penetration: 48, damage: 60 },
      { name: "BP", role: "종결탄", penetration: 54, damage: 58 },
    ],
  },
];
