///Future Implemention maybe i can random 0 and 1
const activeTable = new Map([
  [4, ["00", { 0: "6", 1: "3" }]],
  [6, ["10", { 0: "6", 1: "4" }]],
  [1, ["01", { 0: "4", 1: "1" }]],
  [3, ["11", { 0: "3", 1: "4" }]],
]);

///Input/Out

const inputOutputNo = new Map([
  ///apppend the active arrow in the map
  // it always fixed input == output
]);

let arrowData = [
  { id: 11, top: "6px", left: "300px", text: "1/1" },
  { id: 12, top: "88px", left: "336px", text: "1/2" },
  { id: 13, top: "111px", left: "328px", text: "1/3" },
  { id: 14, top: "110px", left: "300px", text: "1/4" },
  { id: 15, top: "134px", left: "283px", text: "1/5" },
  { id: 16, top: "116px", left: "267px", text: "1/6" },
  { id: 17, top: "71px", left: "212px", text: "1/7" },
  { id: 18, top: "33px", left: "219px", text: "1/8" },
  { id: 21, top: "112px", left: "391px", text: "2/1" },
  { id: 22, top: "91px", left: "471px", text: "2/2" },
  { id: 23, top: "219px", left: "466px", text: "2/3" },
  { id: 24, top: "228px", left: "438px", text: "2/4" },
  { id: 25, top: "227px", left: "414px", text: "2/5" },
  { id: 26, top: "195px", left: "415px", text: "2/6" },
  { id: 27, top: "192px", left: "388px", text: "2/7" },
  { id: 28, top: "149px", left: "374x", text: "2/8" },
  { id: 31, top: "366px", left: "326px", text: "3/1" },
  { id: 32, top: "240px", left: "495px", text: "3/2" },
  { id: 33, top: "268px", left: "515px", text: "3/3" },
  { id: 34, top: "368px", left: "431px", text: "3/4" },
  { id: 35, top: "344px", left: "426px", text: "3/5" },
  { id: 36, top: "332px", left: "409px", text: "3/6" },
  { id: 37, top: "315px", left: "404px", text: "3/7" },
  { id: 38, top: "270px", left: "425px", text: "3/8" },
  { id: 41, top: "356px", left: "359px", text: "4/1" },
  { id: 42, top: "363px", left: "400px", text: "4/2" },
  { id: 43, top: "395px", left: "435px", text: "4/3" },
  { id: 44, top: "420px", left: "446px", text: "4/4" },
  { id: 45, top: "436px", left: "337px", text: "4/5" },
  { id: 46, top: "409px", left: "330px", text: "4/6" },
  { id: 47, top: "387px", left: "331px", text: "4/7" },
  { id: 48, top: "366px", left: "326px", text: "4/8" },
  { id: 51, top: "379px", left: "258px", text: "5/1" },
  { id: 52, top: "417px", left: "298px", text: "5/2" },
  { id: 53, top: "437px", left: "308px", text: "5/3" },
  { id: 54, top: "462px", left: "307px", text: "5/4" },
  { id: 55, top: "496px", left: "304px", text: "5/5" },
  { id: 56, top: "446px", left: "205px", text: "5/6" },
  { id: 57, top: "414px", left: "197px", text: "5/7" },
  { id: 58, top: "410px", left: "224px", text: "5/8" },
  { id: 61, top: "355px", left: "122px", text: "6/1" },
  { id: 62, top: "370px", left: "139px", text: "6/2" },
  { id: 63, top: "399px", left: "165px", text: "6/3" },
  { id: 64, top: "417px", left: "159px", text: "6/4" },
  { id: 65, top: "449px", left: "143px", text: "6/5" },
  { id: 66, top: "465px", left: "99px", text: "6/6" },
  { id: 67, top: "351px", left: "73px", text: "6/7" },
  { id: 68, top: "341px", left: "101px", text: "6/8" },
  { id: 71, top: "227px", left: "83px", text: "7/1" },
  { id: 72, top: "242px", left: "100px", text: "7/2" },
  { id: 73, top: "258px", left: "103px", text: "7/3" },
  { id: 74, top: "279px", left: "123px", text: "7/4" },
  { id: 75, top: "298px", left: "121px", text: "7/5" },
  { id: 76, top: "340px", left: "36px", text: "7/6" },
  { id: 77, top: "329px", left: "8px", text: "7/7" },
  { id: 78, top: "219px", left: "61px", text: "7/8" },
  { id: 81, top: "98px", left: "165px", text: "8/1" },
  { id: 82, top: "119px", left: "146px", text: "8/2" },
  { id: 83, top: "137px", left: "152px", text: "8/3" },
  { id: 84, top: "137px", left: "152px", text: "8/4" },
  { id: 85, top: "168px", left: "143px", text: "8/5" },
  { id: 86, top: "234px", left: "138px", text: "8/6" },
  { id: 87, top: "234px", left: "138px", text: "8/7" },
  { id: 88, top: "185px", left: "48px", text: "8/8" },
];

{/* <div
hidden={!activeArrows.includes(58)}
className="absolute w-[19px] top-[410px] left-[224px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
5/8
</div>
<div
hidden={!activeArrows.includes(56)}
className="absolute w-[21px] top-[446px] left-[205px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap"
>
5/6
</div>
<div
hidden={!activeArrows.includes(57)}
className="absolute w-[19px] top-[414px] left-[197px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
5/7
</div>
<div
hidden={!activeArrows.includes(54)}
className="absolute w-[23px] top-[462px] left-[307px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
5/4
</div>
<div
hidden={!activeArrows.includes(55)}
className="absolute w-[19px] top-[496px] left-[304px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
5/5
</div>
<div
hidden={!activeArrows.includes(53)}
className="absolute w-[23px] top-[437px] left-[308px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap"
>
5/3
</div>
<div
hidden={!activeArrows.includes(52)}
className="absolute w-[19px] top-[417px] left-[298px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
5/2
</div>
<div
hidden={!activeArrows.includes(51)}
className="absolute w-[18px] top-[379px] left-[258px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap"
>
5/1
</div>
<div
hidden={!activeArrows.includes(68)}
className="absolute w-[22px] top-[341px] left-[101px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/8
</div>
<div
hidden={!activeArrows.includes(67)}
className="absolute w-[22px] top-[351px] left-[73px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/7
</div>
<div
hidden={!activeArrows.includes(66)}
className="absolute w-[22px] top-[465px] left-[99px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/6
</div>
<div
hidden={!activeArrows.includes(65)}
className="absolute w-[22px] top-[449px] left-[143px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/5
</div>
<div
hidden={!activeArrows.includes(64)}
className="absolute w-[22px] top-[417px] left-[159px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/4
</div>
<div
hidden={!activeArrows.includes(63)}
className="absolute w-[22px] top-[399px] left-[165px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/3
</div>
<div
hidden={!activeArrows.includes(62)}
className="absolute w-[22px] top-[370px] left-[139px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/2
</div>
<div
hidden={!activeArrows.includes(61)}
className="absolute w-[22px] top-[355px] left-[122px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
6/1
</div>
<div
hidden={!activeArrows.includes(78)}
className="absolute w-[22px] top-[219px] left-[61px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
7/8
</div>
<div
hidden={!activeArrows.includes(76)}
className="absolute w-[22px] top-[340px] left-[36px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
7/6
</div>
<div
hidden={!activeArrows.includes(75)}
className="absolute w-[22px] top-[298px] left-[121px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
7/5
</div>
<div
hidden={!activeArrows.includes(74)}
className="absolute w-[22px] top-[279px] left-[123px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
7/4
</div>
<div
hidden={!activeArrows.includes(73)}
className="absolute w-[22px] top-[258px] left-[103px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
7/3
</div>
<div
hidden={!activeArrows.includes(72)}
className="absolute w-[22px] top-[242px] left-[100px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
7/2
</div>
<div
hidden={!activeArrows.includes(71)}
className="absolute w-[22px] top-[227px] left-[83px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
7/1
</div>
<div
hidden={!activeArrows.includes(88)}
className="absolute w-[22px] top-[159px] left-[26px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/8
</div>
<div
hidden={!activeArrows.includes(87)}
className="absolute w-[22px] top-[185px] left-[48px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/7
</div>
<div
hidden={!activeArrows.includes(86)}
className="absolute w-[22px] top-[234px] left-[138px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/6
</div>
<div
hidden={!activeArrows.includes(85)}
className="absolute w-[22px] top-[168px] left-[143px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/5
</div>
<div
hidden={!activeArrows.includes(84)}
className="absolute w-[22px] top-[155px] left-[152px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/4
</div>
<div
hidden={!activeArrows.includes(83)}
className="absolute w-[22px] top-[137px] left-[152px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/3
</div>
<div
hidden={!activeArrows.includes(82)}
className="absolute w-[22px] top-[119px] left-[146px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/2
</div>
<div
hidden={!activeArrows.includes(81)}
className="absolute w-[22px] top-[98px] left-[165px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
8/1
</div>
<div
hidden={!activeArrows.includes(18)}
className="absolute w-[22px] top-[33px] left-[219px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/8
</div>
<div
hidden={!activeArrows.includes(17)}
className="absolute w-[22px] top-[71px] left-[212px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/7
</div>
<div
hidden={!activeArrows.includes(16)}
className="absolute w-[22px] top-[116px] left-[267px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/6
</div>
<div
hidden={!activeArrows.includes(15)}
className="absolute w-[22px] top-[134px] left-[283px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/5
</div>
<div
hidden={!activeArrows.includes(14)}
className="absolute w-[22px] top-[110px] left-[300px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/4
</div>
<div
hidden={!activeArrows.includes(13)}
className="absolute w-[22px] top-[111px] left-[328px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/3
</div>
<div
hidden={!activeArrows.includes(12)}
className="absolute w-[22px] top-[88px] left-[336px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/2
</div>
<div
hidden={!activeArrows.includes(11)}
className="absolute w-[22px] top-[6px] left-[300px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
1/1
</div>
<div
hidden={!activeArrows.includes(28)}
className="absolute w-[22px] top-[149px] left-[374px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/8
</div>
<div
hidden={!activeArrows.includes(27)}
className="absolute w-[22px] top-[192px] left-[388px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/7
</div>
<div
hidden={!activeArrows.includes(26)}
className="absolute w-[22px] top-[195px] left-[415px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/6
</div>
<div
hidden={!activeArrows.includes(25)}
className="absolute w-[22px] top-[227px] left-[414px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/5
</div>
<div
hidden={!activeArrows.includes(24)}
className="absolute w-[22px] top-[228px] left-[438px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/4
</div>
<div
hidden={!activeArrows.includes(23)}
className="absolute w-[22px] top-[219px] left-[466px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/3
</div>
<div
hidden={!activeArrows.includes(22)}
className="absolute w-[22px] top-[91px] left-[471px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/2
</div>
<div
hidden={!activeArrows.includes(21)}
className="absolute w-[22px] top-[112px] left-[391px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
2/1
</div>
<div
hidden={!activeArrows.includes(38)}
className="absolute w-[22px] top-[270px] left-[425px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/8
</div>
<div
hidden={!activeArrows.includes(37)}
className="absolute w-[22px] top-[315px] left-[404px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/7
</div>
<div
hidden={!activeArrows.includes(36)}
className="absolute w-[22px] top-[332px] left-[409px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/6
</div>
<div
hidden={!activeArrows.includes(35)}
className="absolute w-[22px] top-[344px] left-[426px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/5
</div>
<div
hidden={!activeArrows.includes(34)}
className="absolute w-[22px] top-[368px] left-[431px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/4
</div>
<div
hidden={!activeArrows.includes(33)}
className="absolute w-[22px] top-[268px] left-[515px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/3
</div>
<div
hidden={!activeArrows.includes(32)}
className="absolute w-[22px] top-[240px] left-[495px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/2
</div>
<div
hidden={!activeArrows.includes(31)}
className="absolute w-[22px] top-[252px] left-[440px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
3/1
</div>
<div
hidden={!activeArrows.includes(48)}
className="absolute w-[22px] top-[366px] left-[326px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/8
</div>
<div
hidden={!activeArrows.includes(47)}
className="absolute w-[22px] top-[387px] left-[311px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/7
</div>
<div
hidden={!activeArrows.includes(45)}
className="top-[436px] left-[337px] absolute w-[22px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/5
</div>
<div
hidden={!activeArrows.includes(46)}
className="top-[409px] left-[330px] absolute w-[22px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/6
</div>
<div
hidden={!activeArrows.includes(44)}
className="absolute w-[22px] top-[420px] left-[446px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/4
</div>
<div
hidden={!activeArrows.includes(43)}
className="absolute w-[22px] top-[395px] left-[435px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/3
</div>
<div
hidden={!activeArrows.includes(42)}
className="absolute w-[22px] top-[363px] left-[400px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/2
</div>
<div
hidden={!activeArrows.includes(41)}
className="absolute w-[22px] top-[356px] left-[359px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
>
4/1 */}
</div>