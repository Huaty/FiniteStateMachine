import react from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const MyDrawingComponent = ({
  activeStates = [],
  activeArrows = [],
  activeTable,
}) => {
  const [displayCounts, setDisplayCounts] = useState({});

  useEffect(() => {
    const newDisplayCounts = {}; /// create a hashmap
    for (let i = 0; i < activeStates.length; i++) {
      if (activeTable.has(activeStates[i])) {
        const value = activeTable.get(activeStates[i]);
        newDisplayCounts[activeStates[i]] = value[0];
      }
    }
    setDisplayCounts(newDisplayCounts);
  }, [activeStates]);

  return (
    <div className="bg-white flex flex-col justify-center w-[100vw]">
      <div className="bg-white w-[100vw] h-[40vh]">
        <div className="relative top-[20vh] left-[40vw]">
          {/* state 1 */}
          <div
            className="top-[23px] left-[167px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state1"
            hidden={!activeStates.includes(1)}
          >
            {activeStates.includes(1) && (
              <div className="flex absolute top-[10px] left-[10px]">
                {" "}
                {displayCounts[1] || 0}
              </div>
            )}
          </div>
          {/* state 6 */}
          <div
            className="top-[271px] left-[67px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state6"
            hidden={!activeStates.includes(6)}
          >
            {activeStates.includes(6) && (
              <div className="absolute top-[10px] left-[10px] ">
                {displayCounts[6] || 0}
              </div>
            )}
          </div>
          {/* state 4 */}

          <div
            className="top-[271px] left-[261px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state4"
            hidden={!activeStates.includes(4)}
          >
            {" "}
            {activeStates.includes(4) && (
              <div className="absolute top-[10px] left-[10px] ">
                {displayCounts[4] || 0}
              </div>
            )}
          </div>
          {/* state 5 */}
          <div
            className="top-[303px] left-[167px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state5"
            hidden={!activeStates.includes(5)}
          >
            {" "}
            {activeStates.includes(5) && (
              <div className="absolute top-[10px] left-[10px] ">
                {displayCounts[5] || 0}
              </div>
            )}
          </div>
          {/* state 8 */}
          <div
            className="top-[82px] left-[49px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state8"
            hidden={!activeStates.includes(8)}
          >
            {" "}
            {activeStates.includes(8) && (
              <div className="absolute top-[10px] left-[10px] ">
                {displayCounts[8] || 0}
              </div>
            )}
          </div>
          {/* state 7 */}
          <div
            className="top-[186px] left-[19px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state7"
            hidden={!activeStates.includes(7)}
          >
            {" "}
            {activeStates.includes(7) && (
              <div className="absolute top-[10px] left-[10px] ">
                {" "}
                {displayCounts[7] || 0}
              </div>
            )}
          </div>
          {/* state 3 */}
          <div
            className="top-[186px] left-[315px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state3"
            hidden={!activeStates.includes(3)}
          >
            {" "}
            {activeStates.includes(3) && (
              <div className="absolute top-[10px] left-[10px] ">
                {" "}
                {displayCounts[3] || 0}
              </div>
            )}
          </div>
          {/* state 2 */}
          <div
            className="top-[82px] left-[291px] absolute w-[48px] h-[46px] bg-[#d9d9d9] rounded-[24px/23px] border border-solid border-black"
            id="state2"
            hidden={!activeStates.includes(2)}
          >
            {" "}
            {activeStates.includes(2) && (
              <div className="absolute top-[10px] left-[10px] ">
                {displayCounts[2] || 0}
              </div>
            )}
          </div>

          {/* End of State */}
          <Image
            className="absolute w-[59px] h-[17px] top-[294px] left-[114px] object-cover"
            alt="Arrow"
            src="/Image/arrow-56.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(56)}
          />
          <Image
            className="absolute w-[111px] h-[91px] top-[220px] left-[62px] object-cover"
            alt="Arrow"
            src="/Image/arrow-57.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(57)}
          />
          <Image
            className="absolute w-[89px] h-[188px] top-[123px] left-[84px] object-cover"
            alt="Arrow"
            src="/Image/arrow-58.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(58)}
          />
          <Image
            className="absolute w-[15px] h-[245px] top-[68px] left-[173px] object-cover"
            alt="Arrow"
            src="/Image/arrow-51.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(51)}
          />
          <Image
            className="absolute w-[131px] h-[188px] top-[123px] left-[173px]"
            alt="Arrow"
            src="/Image/arrow-52.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(52)}
          />
          <Image
            className="absolute w-[145px] h-[98px] top-[214px] left-[172px] object-cover"
            alt="Arrow"
            src="/Image/arrow-53.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(53)}
          />
          <Image
            className="absolute w-[50px] h-[21px] top-[303px] left-[215px] object-cover"
            alt="Arrow"
            src="/Image/arrow54.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(54)}
          />
          <Image
            className="absolute w-[58px] h-[18px] top-[308px] left-[110px] object-cover"
            alt="Arrow"
            src="/Image/arrow-65.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(65)}
          />
          <Image
            className="absolute w-[24px] h-[53px] top-[220px] left-[61px] object-cover"
            alt="Arrow"
            src="/Image/arrow-67.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(67)}
          />

          <Image
            className="absolute w-[7px] h-[150px] top-[124px] left-[83px] object-cover"
            alt="Arrow"
            src="/Image/arrow-68.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(68)}
          />
          <Image
            className="absolute w-[102px] h-[206px] top-[67px] left-[84px] object-cover"
            alt="Arrow"
            src="/Image/arrow-61.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(61)}
          />
          <Image
            className="absolute w-[220px] h-[151px] top-[123px] left-[83px] object-cover"
            alt="Arrow"
            src="/Image/arrow-62.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(62)}
          />
          <div
            className="absolute w-[220px] h-[151px] top-[123px] left-[83px] object-cover "
            hidden={!activeArrows.includes(62)}
          >
            1/0
          </div>
          <Image
            className="absolute w-[233px] h-[60px] top-[212px] left-[84px] object-cover"
            alt="Arrow"
            src="/Image/arrow-63.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(63)}
          />
          <Image
            className="absolute w-[151px] h-[10px] top-[280px] left-[115px] object-cover"
            alt="Arrow"
            src="/Image/arrow-64.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(64)}
          />
          <Image
            className="absolute w-[25px] h-[47px] top-[230px] left-[53px] object-cover"
            alt="Arrow"
            src="/Image/arrow-76.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(76)}
          />
          <Image
            className="absolute w-[37px] h-[65px] top-[123px] left-[51px] object-cover"
            alt="Arrow"
            src="/Image/arrow-78.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(78)}
          />
          <Image
            className="absolute w-[134px] h-[121px] top-[67px] left-[51px] object-cover"
            alt="Arrow"
            src="/Image/arrow-71.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(71)}
          />
          <Image
            className="absolute w-[252px] h-[67px] top-[121px] left-[51px] object-cover"
            alt="Arrow"
            src="/Image/arrow-72.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(72)}
          />
          <Image
            className="absolute w-[264px] h-[31px] top-[188px] left-[52px] object-cover"
            alt="Arrow"
            src="/Image/arrow-73.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(73)}
          />
          <Image
            className="absolute w-[214px] h-[100px] top-[187px] left-[51px] object-cover"
            alt="Arrow"
            src="/Image/arrow-74.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(74)}
          />
          <Image
            className="absolute w-[135px] h-[101px] top-[206px] left-[66px] object-cover"
            alt="Arrow"
            src="/Image/arrow-75.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(75)}
          />
          <Image
            className="absolute w-[22px] h-[62px] top-[125px] left-[41px] object-cover"
            alt="Arrow"
            src="/Image/arrow-87.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(87)}
          />
          <Image
            className="absolute w-[90px] h-[46px] top-[67px] left-[95px] object-cover"
            alt="Arrow"
            src="/Image/arrow-81.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(81)}
          />
          <Image
            className="absolute w-[208px] h-[15px] top-[113px] left-[95px] object-cover"
            alt="Arrow"
            src="/Image/arrow-82.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(82)}
          />
          <Image
            className="absolute w-[221px] h-[105px] top-[113px] left-[95px] object-cover"
            alt="Arrow"
            src="/Image/arrow-83.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(83)}
          />
          <Image
            className="absolute w-[170px] h-[172px] top-[113px] left-[95px] object-cover"
            alt="Arrow"
            src="/Image/arrow-84.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(84)}
          />
          <Image
            className="absolute w-[107px] h-[192px] top-[114px] left-[95px] object-cover"
            alt="Arrow"
            src="/Image/arrow-85.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(85)}
          />
          <Image
            className="absolute w-[19px] h-[169px] top-[113px] left-[95px] object-cover"
            alt="Arrow"
            src="/Image/arrow-86.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(86)}
          />
          <Image
            className="absolute w-[77px] h-[38px] top-[55px] left-[92px] object-cover"
            alt="Arrow"
            src="/Image/arrow-18.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(18)}
          />
          <Image
            className="absolute w-[102px] h-[59px] top-[67px] left-[199px] object-cover"
            alt="Arrow"
            src="/Image/arrow-12.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(12)}
          />
          <Image
            className="absolute w-[117px] h-[149px] top-[67px] left-[199px] object-cover"
            alt="Arrow"
            src="/Image/arrow-13.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(13)}
          />
          <Image
            className="absolute w-[67px] h-[218px] top-[67px] left-[200px] object-cover"
            alt="Arrow"
            src="/Image/arrow-14.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(14)}
          />
          <Image
            className="absolute w-[7px] h-[239px] top-[67px] left-[195px] object-cover"
            alt="Arrow"
            src="/Image/arrow-15.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(15)}
          />
          <Image
            className="absolute w-[92px] h-[215px] top-[67px] left-[108px] object-cover"
            alt="Arrow"
            src="/Image/arrow-16.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(16)}
          />
          <Image
            className="absolute w-[136px] h-[154px] top-[68px] left-[63px] object-cover"
            alt="Arrow"
            src="/Image/arrow-17.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(17)}
          />
          <Image
            className="absolute w-[84px] h-[45px] top-[60px] left-[207px] object-cover"
            alt="Arrow"
            src="/Image/arrow-21.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(21)}
          />
          <Image
            className="absolute w-[10px] h-[88px] top-[127px] left-[309px] object-cover"
            alt="Arrow"
            src="/Image/arrow-23.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(23)}
          />
          <Image
            className="absolute w-[48px] h-[158px] top-[127px] left-[261px] object-cover"
            alt="Arrow"
            src="/Image/arrow-24.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(24)}
          />
          <Image
            className="absolute w-[112px] h-[180px] top-[126px] left-[197px] object-cover"
            alt="Arrow"
            src="/Image/arrow-25.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(25)}
          />
          <Image
            className="absolute w-[200px] h-[155px] top-[127px] left-[109px] object-cover"
            alt="Arrow"
            src="/Image/arrow-26.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(26)}
          />
          <Image
            className="absolute w-[246px] h-[97px] top-[127px] left-[63px] object-cover"
            alt="Arrow"
            src="/Image/arrow-27.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(27)}
          />
          <Image
            className="absolute w-[206px] h-[22px] top-[105px] left-[85px] object-cover"
            alt="Arrow"
            src="/Image/arrow-28.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(28)}
          />
          <Image
            className="absolute w-[19px] h-[61px] top-[127px] left-[314px] object-cover"
            alt="Arrow"
            src="/Image/arrow-32.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(32)}
          />
          <Image
            className="absolute w-[39px] h-[48px] top-[224px] left-[282px] object-cover"
            alt="Arrow"
            src="/Image/arrow-34.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(34)}
          />
          <Image
            className="absolute w-[123px] h-[83px] top-[224px] left-[198px] object-cover"
            alt="Arrow"
            src="/Image/arrow-35.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(35)}
          />
          <Image
            className="absolute w-[212px] h-[60px] top-[224px] left-[109px] object-cover"
            alt="Arrow"
            src="/Image/arrow-36.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(36)}
          />
          <Image
            className="absolute w-[258px] h-[7px] top-[217px] left-[63px] object-cover"
            alt="Arrow"
            src="/Image/arrow-37.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(37)}
          />
          <Image
            className="absolute w-[236px] h-[73px] top-[121px] left-[85px] object-cover"
            alt="Arrow"
            src="/Image/arrow-38.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(38)}
          />
          <Image
            className="absolute w-[140px] h-[127px] top-[67px] left-[183px] object-cover"
            alt="Arrow"
            src="/Image/arrow-31.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(31)}
          />
          <Image
            className="absolute w-[33px] h-[47px] top-[230px] left-[300px] object-cover"
            alt="Arrow"
            src="/Image/arrow-43.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(43)}
          />
          <Image
            className="absolute w-[64px] h-[15px] top-[293px] left-[198px] object-cover"
            alt="Arrow"
            src="/Image/arrow-45.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(45)}
          />
          <Image
            className="absolute w-[153px] h-[16px] top-[278px] left-[110px] object-cover"
            alt="Arrow"
            src="/Image/arrow-46.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(46)}
          />
          <Image
            className="absolute w-[199px] h-[75px] top-[219px] left-[63px] object-cover"
            alt="Arrow"
            src="/Image/arrow-47.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(47)}
          />
          <Image
            className="absolute w-[175px] h-[170px] top-[123px] left-[87px] object-cover"
            alt="Arrow"
            src="/Image/arrow-48.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(48)}
          />
          <Image
            className="absolute w-[93px] h-[206px] top-[68px] left-[182px] object-cover"
            alt="Arrow"
            src="/Image/arrow-41.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(41)}
          />
          <div
            hidden={!activeArrows.includes(42)}
            className="absolute w-[21px] top-[250px] left-[270px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            0/1
          </div>
          <Image
            className="absolute w-[31px] h-[151px] top-[123px] left-[274px] object-cover"
            alt="Arrow"
            src="/Image/arrow-42.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(42)}
          />
          <Image
            className="absolute w-[42px] h-[42px] top-0 left-[179px]"
            alt="Element"
            src="/Image/11.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(11)}
          />
          <div className="absolute w-[31px] h-[29px] top-[66px] left-[310px] rotate-[-125.89deg]">
            <div className="relative w-[41px] h-[38px] top-[-5px] left-[-5px]">
              <Image
                className="absolute w-[29px] h-[25px] top-[6px] left-[9px] rotate-[125.89deg]"
                alt="Arrow"
                src="/Image/arrow-22.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(22)}
              />
              <Image
                className="absolute w-[14px] h-[12px] top-[20px] left-[2px] rotate-[125.89deg]"
                alt="Arrow"
                src="/Image/arrow22-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(22)}
              />
            </div>
          </div>
          <div className="absolute w-[31px] h-[29px] top-[198px] left-[351px] rotate-[-53.72deg]">
            <div className="relative w-[40px] h-[33px] left-[-5px]">
              <Image
                className="absolute w-[21px] h-[27px] top-[3px] left-[12px] rotate-[53.72deg]"
                alt="Arrow"
                src="/Image/arrow-33.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(33)}
              />
              <Image
                className="absolute w-[13px] h-[13px] top-[14px] left-[3px] rotate-[53.72deg]"
                alt="Arrow"
                src="/Image/arrow33-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(33)}
              />
            </div>
          </div>
          <div className="absolute w-[31px] h-[29px] top-[296px] left-[291px] rotate-[-19.16deg]">
            <div className="relative w-[37px] h-[36px] top-[-5px] left-[-3px]">
              <Image
                className="absolute w-[27px] h-[29px] top-[4px] left-[6px] rotate-[19.16deg]"
                alt="Arrow"
                src="/Image/arrow-44.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(44)}
              />
              <Image
                className="absolute w-[12px] h-[13px] top-[21px] left-[2px] rotate-[19.16deg]"
                alt="Arrow"
                src="/Image/arrow44-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(44)}
              />
            </div>
          </div>
          <div className="absolute w-[31px] h-[29px] top-[334px] left-[190px] rotate-[-0.38deg]">
            <div className="relative w-[29px] h-[29px] left-px">
              <Image
                className="absolute w-[28px] h-[27px] top-0 left-0 rotate-[0.38deg]"
                alt="Arrow"
                src="/Image/arrow-55.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(55)}
              />
              <Image
                className="absolute w-[11px] h-[15px] top-[15px] left-0 rotate-[0.38deg]"
                alt="Arrow"
                src="/Image/arrow55-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(55)}
              />
            </div>
          </div>
          <div className="absolute w-[31px] h-[29px] top-[303px] left-[63px] rotate-[57.94deg]">
            <div className="relative w-[41px] h-[38px] top-[-5px] left-[-5px]">
              <Image
                className="absolute w-[29px] h-[25px] top-[6px] left-[8px] rotate-[-57.94deg]"
                alt="Arrow"
                src="/Image/arrow-66.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(66)}
              />
              <Image
                className="absolute w-[13px] h-[12px] top-[21px] left-[2px] rotate-[-57.94deg]"
                alt="Arrow"
                src="/Image/arrow66-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(66)}
              />
            </div>
          </div>
          <div className="absolute w-[31px] h-[29px] top-[203px] left-[3px] rotate-[103.54deg]">
            <div className="relative w-[33px] h-[31px] -top-px -left-px">
              <Image
                className="absolute w-[25px] h-[28px] top-[2px] left-[4px] rotate-[-103.54deg]"
                alt="Arrow"
                src="/Image/arrow-77.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(77)}
              />
              <Image
                className="absolute w-[15px] h-[11px] top-[16px] left-0 rotate-[-103.54deg]"
                alt="Arrow"
                src="/Image/arrow77-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(77)}
              />
            </div>
          </div>
          <div className="absolute w-[31px] h-[29px] top-[91px] left-[30px] rotate-[120.34deg]">
            <div className="relative w-[39px] h-[33px] left-[-4px]">
              <Image
                className="absolute w-[22px] h-[27px] top-[3px] left-[10px] rotate-[-120.34deg]"
                alt="Arrow"
                src="/Image/arrow-88.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(88)}
              />
              <Image
                className="absolute w-[14px] h-[13px] top-[14px] left-[2px] rotate-[-120.34deg]"
                alt="Arrow"
                src="/Image/arrow88-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(88)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDrawingComponent;
