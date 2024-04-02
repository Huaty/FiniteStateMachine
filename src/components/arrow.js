"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

const MyDrawingComponents = ({
  activeArrows,
  activeStates,
  activeTable,
  output,
}) => {
  const [arrowMap, setArrowMap] = useState(new Map());
  const [displayCounts, setDisplayCounts] = useState({});

  useEffect(() => {
    const newDisplayCounts = {};
    for (let i = 0; i < activeStates.length; i++) {
      if (activeTable.has(activeStates[i])) {
        const value = activeTable.get(activeStates[i]);
        newDisplayCounts[activeStates[i]] = value[0];
      }
    }
    setDisplayCounts(newDisplayCounts);
  }, [activeStates, activeTable]);

  useEffect(() => {
    const newArrowMap = new Map();
    activeArrows.forEach((arrow, index) => {
      const value = `${index % 2}/${output[index]}`;
      newArrowMap.set(arrow, value);
    });
    setArrowMap(newArrowMap);
  }, [activeArrows, output]);

  useEffect(() => {
    console.log("activeStates in MyDrawingComponents:", activeStates);
    console.log("activeTable in MyDrawingComponents:", activeTable);
    // ...
  }, [activeStates, activeTable]);

  useEffect(() => {
    console.log(displayCounts);
  }, [displayCounts]);

  return (
    <div className="w-[100vw] h-[40vh] mb-[25vh]">
      <div className="relative top-[5vw] left-[36vw]">
        <div className="absolute w-[540px] h-[511px] top-0 left-0">
          <div
            id="state1"
            hidden={!activeStates.includes(1)}
            className="top-[32px] left-[233px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {" "}
            {activeStates.includes(1) && (
              <div className="w-[10px] top-[21px] left-[30px] absolute [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[1] || 0}
              </div>
            )}
          </div>

          <div
            id="state6"
            hidden={!activeStates.includes(6)}
            className="top-[381px] left-[94px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {activeStates.includes(6) && (
              <div className="w-[10px] top-[25px] left-[25px] absolute [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[6] || 0}
              </div>
            )}
          </div>

          <div
            id="state4"
            hidden={!activeStates.includes(4)}
            className="top-[381px] left-[365px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {activeStates.includes(4) && (
              <div className="w-[10px] top-[25px] left-[25px] absolute [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[4] || 0}
              </div>
            )}
          </div>

          <div
            id="state5"
            hidden={!activeStates.includes(5)}
            className="top-[426px] left-[233px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {activeStates.includes(5) && (
              <div className="absolute w-[10px] top-[25px] left-[25px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[5] || 0}
              </div>
            )}
          </div>

          <div
            id="state8"
            hidden={!activeStates.includes(8)}
            className="top-[115px] left-[68px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {activeStates.includes(8) && (
              <div className="w-[7px] top-[25px] left-[25px] whitespace-nowrap absolute [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[8] || 0}
              </div>
            )}
          </div>

          <div
            id="state7"
            hidden={!activeStates.includes(7)}
            className="top-[262px] left-[27px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {activeStates.includes(7) && (
              <div className="w-[10px] top-[25px] left-[25px] absolute [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[7] || 0}
              </div>
            )}
          </div>

          <div
            id="state3"
            hidden={!activeStates.includes(3)}
            className="top-[262px] left-[440px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {activeStates.includes(3) && (
              <div className="w-[10px] top-[25px] left-[25px] absolute [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[3] || 0}
              </div>
            )}
          </div>

          <div
            id="state2"
            hidden={!activeStates.includes(2)}
            className="top-[115px] left-[406px] absolute w-[67px] h-[65px] bg-[#d9d9d9] rounded-[33.52px/32.34px] border border-solid border-black"
          >
            {activeStates.includes(2) && (
              <div className="w-[10px] top-[22px] left-[29px] absolute [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]">
                {displayCounts[2] || 0}
              </div>
            )}
          </div>

          <Image
            className="absolute w-[98px] h-[27px] top-[443px] left-[138px] object-cover"
            alt="Arrow"
            src="/img/arrow-65.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(65)}
          />
          <Image
            className="absolute w-[82px] h-[19px] top-[429px] left-[154px] object-cover"
            alt="Arrow"
            src="/img/arrow-56.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(56)}
          />
          <Image
            className="absolute w-[155px] h-[128px] top-[310px] left-[88px] object-cover"
            alt="Arrow"
            src="/img/arrow-57.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(57)}
          />
          <Image
            className="absolute w-[135px] h-[254px] top-[175px] left-[118px] object-cover"
            alt="Arrow"
            src="/img/arrow-58.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(58)}
          />
          <Image
            className="absolute w-[12px] h-[331px] top-[97px] left-[256px] object-cover"
            alt="Arrow"
            src="/img/arrow-51.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(51)}
          />
          <Image
            className="absolute w-[133px] h-[263px] top-[174px] left-[291px]"
            alt="Arrow"
            src="/img/arrow-52.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(52)}
          />
          <Image
            className="absolute w-[143px] h-[147px] top-[302px] left-[299px] object-cover"
            alt="Arrow"
            src="/img/arrow-53.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(53)}
          />
          <Image
            className="absolute w-[95px] h-[20px] top-[442px] left-[300px] object-cover"
            alt="Arrow"
            src="/img/arrow-54.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(54)}
          />
          <Image
            className="absolute w-[15px] h-[85px] top-[310px] left-[85px] object-cover"
            alt="Arrow"
            src="/img/arrow-67.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(67)}
          />
          <Image
            className="absolute w-[7px] h-[208px] top-[174px] left-[118px] object-cover"
            alt="Arrow"
            src="/img/arrow-68.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(68)}
          />
          <Image
            className="absolute w-[127px] h-[287px] top-[95px] left-[133px] object-cover"
            alt="Arrow"
            src="/img/arrow-61.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(61)}
          />
          <Image
            className="absolute w-[275px] h-[216px] top-[173px] left-[148px] object-cover"
            alt="Arrow"
            src="/img/arrow-62.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(62)}
          />
          <Image
            className="absolute w-[283px] h-[103px] top-[300px] left-[159px] object-cover"
            alt="Arrow"
            src="/img/arrow-63.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(63)}
          />
          <Image
            className="absolute w-[210px] h-[20px] top-[396px] left-[161px] object-cover"
            alt="Arrow"
            src="/img/arrow-64.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(64)}
          />
          <Image
            className="absolute w-[53px] h-[78px] top-[323px] left-[45px] object-cover"
            alt="Arrow"
            src="/img/arrow-76.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(76)}
          />
          <Image
            className="absolute w-[66px] h-[88px] top-[174px] left-[56px] object-cover"
            alt="Arrow"
            src="/img/arrow-78.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(78)}
          />
          <Image
            className="absolute w-[187px] h-[170px] top-[95px] left-[71px] object-cover"
            alt="Arrow"
            src="/img/arrow-71.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(71)}
          />
          <Image
            className="absolute w-[344px] h-[95px] top-[172px] left-[78px] object-cover"
            alt="Arrow"
            src="/img/arrow-72.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(72)}
          />
          <Image
            className="absolute w-[359px] h-[37px] top-[269px] left-[82px] object-cover"
            alt="Arrow"
            src="/img/arrow-73.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(73)}
          />
          <Image
            className="absolute w-[278px] h-[120px] top-[281px] left-[91px] object-cover"
            alt="Arrow"
            src="/img/arrow-74.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(74)}
          />
          <Image
            className="absolute w-[188px] h-[141px] top-[289px] left-[92px] object-cover"
            alt="Arrow"
            src="/img/arrow-75.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(75)}
          />
          <Image
            className="absolute w-[38px] h-[97px] top-[170px] left-[41px] object-cover"
            alt="Arrow"
            src="/img/arrow-87.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(87)}
          />
          <Image
            className="absolute w-[136px] h-[28px] top-[94px] left-[122px] object-cover"
            alt="Arrow"
            src="/img/arrow-81.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(81)}
          />
          <Image
            className="absolute w-[292px] h-[48px] top-[130px] left-[130px] object-cover"
            alt="Arrow"
            src="/img/arrow-82.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(82)}
          />
          <Image
            className="absolute w-[306px] h-[164px] top-[140px] left-[135px] object-cover"
            alt="Arrow"
            src="/img/arrow-83.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(83)}
          />
          <Image
            className="absolute w-[235px] h-[250px] top-[150px] left-[135px] object-cover"
            alt="Arrow"
            src="/img/arrow-84.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(84)}
          />
          <Image
            className="absolute w-[149px] h-[271px] top-[158px] left-[133px] object-cover"
            alt="Arrow"
            src="/img/arrow-85.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(85)}
          />
          <Image
            className="absolute w-[27px] h-[230px] top-[165px] left-[130px] object-cover"
            alt="Arrow"
            src="/img/arrow-86.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(86)}
          />
          <Image
            className="absolute w-[142px] h-[74px] top-[43px] left-[100px] object-cover"
            alt="Arrow"
            src="/img/arrow-18.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(18)}
          />

          <Image
            className="absolute w-[120px] h-[108px] top-[67px] left-[300px] object-cover"
            alt="Arrow"
            src="/img/arrow-12.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(12)}
          />
          <Image
            className="absolute w-[144px] h-[229px] top-[74px] left-[298px] object-cover"
            alt="Arrow"
            src="/img/arrow-13.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(13)}
          />
          <Image
            className="absolute w-[81px] h-[312px] top-[87px] left-[291px] object-cover"
            alt="Arrow"
            src="/img/arrow-14.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(14)}
          />
          <Image
            className="absolute w-[10px] h-[337px] top-[92px] left-[274px] object-cover"
            alt="Arrow"
            src="/img/arrow-15.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(15)}
          />
          <Image
            className="absolute w-[127px] h-[302px] top-[94px] left-[151px] object-cover"
            alt="Arrow"
            src="/img/arrow-16.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(16)}
          />
          <Image
            className="absolute w-[147px] h-[239px] top-[72px] left-[88px] object-cover"
            alt="Arrow"
            src="/img/arrow-17.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(17)}
          />
          <Image
            className="absolute w-[128px] h-[66px] top-[53px] left-[298px] object-cover"
            alt="Arrow"
            src="/img/arrow-21.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(21)}
          />
          <Image
            className="absolute w-[8px] h-[91px] top-[171px] left-[462px] object-cover"
            alt="Arrow"
            src="/img/arrow-23.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(23)}
          />
          <Image
            className="absolute w-[92px] h-[226px] top-[174px] left-[366px] object-cover"
            alt="Arrow"
            src="/img/arrow-24.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(24)}
          />
          <Image
            className="absolute w-[174px] h-[251px] top-[178px] left-[277px] object-cover"
            alt="Arrow"
            src="/img/arrow-25.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(25)}
          />
          <Image
            className="absolute w-[287px] h-[216px] top-[180px] left-[153px] object-cover"
            alt="Arrow"
            src="/img/arrow-26.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(26)}
          />
          <Image
            className="absolute w-[343px] h-[135px] top-[178px] left-[89px] object-cover"
            alt="Arrow"
            src="/img/arrow-27.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(27)}
          />
          <Image
            className="absolute w-[287px] h-[30px] top-[148px] left-[120px] object-cover"
            alt="Arrow"
            src="/img/arrow-28.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(28)}
          />
          <Image
            className="absolute w-[29px] h-[110px] top-[161px] left-[468px] object-cover"
            alt="Arrow"
            src="/img/arrow-32.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(32)}
          />
          <Image
            className="absolute w-[69px] h-[62px] top-[324px] left-[416px] object-cover"
            alt="Arrow"
            src="/img/arrow-34.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(34)}
          />
          <Image
            className="absolute w-[187px] h-[107px] top-[324px] left-[277px] object-cover"
            alt="Arrow"
            src="/img/arrow-35.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(35)}
          />
          <Image
            className="absolute w-[304px] h-[77px] top-[321px] left-[153px] object-cover"
            alt="Arrow"
            src="/img/arrow-36.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(36)}
          />
          <Image
            className="absolute w-[359px] h-[8px] top-[307px] left-[89px] object-cover"
            alt="Arrow"
            src="/img/arrow-37.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(37)}
          />
          <Image
            className="absolute w-[329px] h-[102px] top-[172px] left-[120px] object-cover"
            alt="Arrow"
            src="/img/arrow-38.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(38)}
          />
          <Image
            className="absolute w-[195px] h-[178px] top-[95px] left-[255px] object-cover"
            alt="Arrow"
            src="/img/arrow-31.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(31)}
          />
          <Image
            className="absolute w-[63px] h-[85px] top-[321px] left-[431px] object-cover"
            alt="Arrow"
            src="/img/arrow-43.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(43)}
          />
          <Image
            className="absolute w-[99px] h-[13px] top-[424px] left-[277px] object-cover"
            alt="Arrow"
            src="/img/arrow-45.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(45)}
          />
          <Image
            className="absolute w-[216px] h-[36px] top-[392px] left-[153px] object-cover"
            alt="Arrow"
            src="/img/arrow-46.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(46)}
          />
          <Image
            className="absolute w-[276px] h-[111px] top-[308px] left-[89px] object-cover"
            alt="Arrow"
            src="/img/arrow-47.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(47)}
          />
          <Image
            className="absolute w-[244px] h-[239px] top-[174px] left-[121px] object-cover"
            alt="Arrow"
            src="/img/arrow-48.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(48)}
          />
          <Image
            className="absolute w-[134px] h-[288px] top-[97px] left-[255px] object-cover"
            alt="Arrow"
            src="/img/arrow-41.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(41)}
          />
          <Image
            className="absolute w-[26px] h-[208px] top-[174px] left-[398px] object-cover"
            alt="Arrow"
            src="/img/arrow-42.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(42)}
          />
          <Image
            className="absolute w-[59px] h-[59px] top-0 left-[250px]"
            alt="Element"
            src="/img/11.svg"
            width={0}
            height={0}
            hidden={!activeArrows.includes(11)}
          />
          <div className="absolute w-[43px] h-[41px] top-[94px] left-[433px] rotate-[-125.71deg]">
            <div className="relative w-[57px] h-[52px] top-[-7px] left-[-7px]">
              <Image
                className="w-[39px] h-[35px] top-[9px] left-[12px] absolute rotate-[125.71deg]"
                alt="Arrow"
                src="/img/arrow-22.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(22)}
              />
              <Image
                className="w-[19px] h-[16px] top-[29px] left-[3px] absolute rotate-[125.71deg]"
                alt="Arrow"
                src="/img/arrow22-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(22)}
              />
            </div>
          </div>

          <div className="absolute w-[43px] h-[41px] top-[279px] left-[490px] rotate-[-53.91deg]">
            <div className="relative w-[56px] h-[46px] left-[-6px]">
              <Image
                className="w-[30px] h-[38px] top-[4px] left-[17px] absolute rotate-[53.91deg]"
                alt="Arrow"
                src="/img/arrow-33.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(33)}
              />
              <Image
                className="w-[18px] h-[18px] top-[20px] left-[4px] absolute rotate-[53.91deg]"
                alt="Arrow"
                src="/img/arrow33-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(33)}
              />
            </div>
          </div>

          <div className="absolute w-[43px] h-[41px] top-[417px] left-[406px] rotate-[-19.28deg]">
            <div className="relative w-[52px] h-[50px] top-[-7px] left-[-4px]">
              <Image
                className="w-[38px] h-[40px] top-[5px] left-[8px] absolute rotate-[19.28deg]"
                alt="Arrow"
                src="/img/arrow-44.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(44)}
              />
              <Image
                className="w-[16px] h-[18px] top-[30px] left-[3px] absolute rotate-[19.28deg]"
                alt="Arrow"
                src="/img/arrow44-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(44)}
              />
            </div>
          </div>

          <div className="absolute w-[43px] h-[41px] top-[470px] left-[266px] rotate-[-0.38deg]">
            <div className="relative w-[40px] h-[41px] left-[2px]">
              <Image
                className="w-[39px] h-[38px] top-0 absolute left-0 rotate-[0.38deg]"
                alt="Arrow"
                src="/img/arrow-55.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(55)}
              />
              <Image
                className="w-[15px] h-[20px] top-[21px] absolute left-0 rotate-[0.38deg]"
                alt="Arrow"
                src="/img/arrow55-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(55)}
              />
            </div>
          </div>

          <div className="absolute w-[43px] h-[41px] top-[426px] left-[88px] rotate-[58.11deg]">
            <div className="relative w-[57px] h-[52px] top-[-7px] left-[-7px]">
              <Image
                className="w-[40px] h-[36px] top-[8px] left-[11px] absolute rotate-[-58.11deg]"
                alt="Arrow"
                src="/img/arrow-66.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(66)}
              />
              <Image
                className="w-[18px] h-[16px] top-[30px] left-[2px] absolute rotate-[-58.11deg]"
                alt="Arrow"
                src="/img/arrow66-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(66)}
              />
            </div>
          </div>

          <div className="absolute w-[43px] h-[41px] top-[285px] left-[3px] rotate-[103.45deg]">
            <div className="relative w-[46px] h-[43px] -top-px -left-px">
              <Image
                className="w-[35px] h-[39px] top-[2px] left-[6px] absolute rotate-[-103.45deg]"
                alt="Arrow"
                src="/img/arrow-77.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(77)}
              />
              <Image
                className="w-[21px] h-[16px] top-[22px] left-0 absolute rotate-[-103.45deg]"
                alt="Arrow"
                src="/img/arrow77-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(77)}
              />
            </div>
          </div>

          <div className="absolute w-[43px] h-[41px] top-[128px] left-[42px] rotate-[120.17deg]">
            <div className="relative w-[54px] h-[46px] left-[-5px]">
              <Image
                className="w-[30px] h-[38px] top-[4px] left-[14px] absolute rotate-[-120.17deg]"
                alt="Arrow"
                src="/img/arrow-88.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(88)}
              />
              <Image
                className="w-[19px] h-[18px] top-[20px] left-[3px] absolute rotate-[-120.17deg]"
                alt="Arrow"
                src="/img/arrow88-1.svg"
                width={0}
                height={0}
                hidden={!activeArrows.includes(88)}
              />
            </div>
          </div>

          <div
            hidden={!activeArrows.includes(58)}
            className="absolute w-[19px] top-[410px] left-[224px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(58) ? arrowMap.get(58) : ""}
          </div>

          <div
            hidden={!activeArrows.includes(56)}
            className="absolute w-[21px] top-[446px] left-[205px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            {activeArrows.includes(56) ? arrowMap.get(56) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(57)}
            className="absolute w-[19px] top-[414px] left-[197px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(57) ? arrowMap.get(57) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(54)}
            className="absolute w-[23px] top-[462px] left-[307px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(54) ? arrowMap.get(54) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(55)}
            className="absolute w-[19px] top-[496px] left-[304px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(55) ? arrowMap.get(55) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(53)}
            className="absolute w-[23px] top-[437px] left-[308px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            {activeArrows.includes(53) ? arrowMap.get(53) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(52)}
            className="absolute w-[19px] top-[417px] left-[298px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(52) ? arrowMap.get(52) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(51)}
            className="absolute w-[18px] top-[379px] left-[258px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal] whitespace-nowrap"
          >
            {activeArrows.includes(51) ? arrowMap.get(51) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(68)}
            className="absolute w-[22px] top-[341px] left-[101px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(68) ? arrowMap.get(68) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(67)}
            className="absolute w-[22px] top-[351px] left-[73px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(67) ? arrowMap.get(67) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(66)}
            className="absolute w-[22px] top-[465px] left-[99px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(66) ? arrowMap.get(66) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(65)}
            className="absolute w-[22px] top-[449px] left-[143px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(65) ? arrowMap.get(65) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(64)}
            className="absolute w-[22px] top-[417px] left-[159px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(64) ? arrowMap.get(64) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(63)}
            className="absolute w-[22px] top-[399px] left-[165px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(63) ? arrowMap.get(63) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(62)}
            className="absolute w-[22px] top-[370px] left-[139px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(62) ? arrowMap.get(62) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(61)}
            className="absolute w-[22px] top-[355px] left-[122px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(61) ? arrowMap.get(61) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(78)}
            className="absolute w-[22px] top-[219px] left-[61px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(78) ? arrowMap.get(78) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(77)}
            className="absolute w-[22px] top-[329px] left-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(77) ? arrowMap.get(77) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(76)}
            className="absolute w-[22px] top-[340px] left-[36px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(76) ? arrowMap.get(76) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(75)}
            className="absolute w-[22px] top-[298px] left-[121px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(75) ? arrowMap.get(75) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(74)}
            className="absolute w-[22px] top-[279px] left-[123px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(74) ? arrowMap.get(74) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(73)}
            className="absolute w-[22px] top-[258px] left-[103px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(73) ? arrowMap.get(73) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(72)}
            className="absolute w-[22px] top-[242px] left-[100px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(72) ? arrowMap.get(72) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(71)}
            className="absolute w-[22px] top-[227px] left-[83px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(71) ? arrowMap.get(71) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(88)}
            className="absolute w-[22px] top-[159px] left-[26px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(88) ? arrowMap.get(88) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(87)}
            className="absolute w-[22px] top-[185px] left-[48px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(87) ? arrowMap.get(87) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(86)}
            className="absolute w-[22px] top-[234px] left-[138px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(86) ? arrowMap.get(86) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(85)}
            className="absolute w-[22px] top-[168px] left-[143px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(85) ? arrowMap.get(85) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(84)}
            className="absolute w-[22px] top-[155px] left-[152px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(84) ? arrowMap.get(84) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(83)}
            className="absolute w-[22px] top-[137px] left-[152px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(83) ? arrowMap.get(83) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(82)}
            className="absolute w-[22px] top-[119px] left-[146px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(82) ? arrowMap.get(82) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(81)}
            className="absolute w-[22px] top-[98px] left-[165px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(81) ? arrowMap.get(81) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(18)}
            className="absolute w-[22px] top-[33px] left-[219px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(18) ? arrowMap.get(18) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(17)}
            className="absolute w-[22px] top-[71px] left-[212px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(17) ? arrowMap.get(17) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(16)}
            className="absolute w-[22px] top-[116px] left-[267px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(16) ? arrowMap.get(16) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(15)}
            className="absolute w-[22px] top-[134px] left-[283px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(15) ? arrowMap.get(15) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(14)}
            className="absolute w-[22px] top-[110px] left-[300px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(14) ? arrowMap.get(14) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(13)}
            className="absolute w-[22px] top-[111px] left-[328px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(13) ? arrowMap.get(13) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(12)}
            className="absolute w-[22px] top-[88px] left-[336px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(12) ? arrowMap.get(12) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(11)}
            className="absolute w-[22px] top-[6px] left-[300px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(11) ? arrowMap.get(11) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(28)}
            className="absolute w-[22px] top-[149px] left-[374px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(28) ? arrowMap.get(28) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(27)}
            className="absolute w-[22px] top-[192px] left-[388px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(27) ? arrowMap.get(27) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(26)}
            className="absolute w-[22px] top-[195px] left-[415px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(26) ? arrowMap.get(26) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(25)}
            className="absolute w-[22px] top-[227px] left-[414px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(25) ? arrowMap.get(25) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(24)}
            className="absolute w-[22px] top-[228px] left-[438px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(24) ? arrowMap.get(24) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(23)}
            className="absolute w-[22px] top-[219px] left-[466px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(23) ? arrowMap.get(23) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(22)}
            className="absolute w-[22px] top-[91px] left-[471px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(22) ? arrowMap.get(22) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(21)}
            className="absolute w-[22px] top-[112px] left-[391px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(21) ? arrowMap.get(21) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(38)}
            className="absolute w-[22px] top-[270px] left-[425px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(38) ? arrowMap.get(38) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(37)}
            className="absolute w-[22px] top-[315px] left-[404px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(37) ? arrowMap.get(37) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(36)}
            className="absolute w-[22px] top-[332px] left-[409px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(36) ? arrowMap.get(36) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(35)}
            className="absolute w-[22px] top-[344px] left-[426px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(35) ? arrowMap.get(35) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(34)}
            className="absolute w-[22px] top-[368px] left-[431px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(34) ? arrowMap.get(34) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(33)}
            className="absolute w-[22px] top-[268px] left-[515px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(33) ? arrowMap.get(33) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(32)}
            className="absolute w-[22px] top-[240px] left-[495px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(32) ? arrowMap.get(32) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(31)}
            className="absolute w-[22px] top-[252px] left-[440px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(31) ? arrowMap.get(31) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(48)}
            className="absolute w-[22px] top-[366px] left-[326px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(48) ? arrowMap.get(48) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(47)}
            className="absolute w-[22px] top-[387px] left-[311px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(47) ? arrowMap.get(47) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(45)}
            className="top-[436px] left-[337px] absolute w-[22px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(45) ? arrowMap.get(45) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(46)}
            className="top-[409px] left-[330px] absolute w-[22px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(46) ? arrowMap.get(46) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(44)}
            className="absolute w-[22px] top-[420px] left-[446px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(44) ? arrowMap.get(44) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(43)}
            className="absolute w-[22px] top-[395px] left-[435px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(43) ? arrowMap.get(43) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(42)}
            className="absolute w-[22px] top-[363px] left-[400px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(42) ? arrowMap.get(42) : ""}
          </div>
          <div
            hidden={!activeArrows.includes(41)}
            className="absolute w-[22px] top-[356px] left-[359px] [font-family:'Inter',Helvetica] font-normal text-black text-[12px] tracking-[0] leading-[normal]"
          >
            {activeArrows.includes(41) ? arrowMap.get(41) : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDrawingComponents;
