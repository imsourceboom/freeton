import Swup from "swup";
import SwupScriptsPlugin from "@swup/scripts-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";

import { cookieCheck } from "../cookie"; // 모든 페이지 - 페이지 상단 이동 버튼
import { hideHeaderAndFooter } from "../hideHeaderAndFooter"; // wallet - 월렛 메뉴 첫 진입 시 나오는 로딩 페이지
import { scroll } from "../smoothscroll"; // 모든 페이지 - 페이지 상단 이동 버튼
import { commaFunc } from "../nanoSplit"; // 모든 페이지 - nano 클래스를 가진 그램 숫자들 소수점과 콤마
import { copied } from "../clipboard"; // wallet - 복사하기
import { withdrawPossibleCalculate } from "../withdrawPossible"; // walle증, staking-apply - 출금가능 수량, 수수료 계산 및 표시
import { amountMax } from "../amountMax"; // withdraw, staking-apply - 최대 수량 버튼
import { amountInputVerify } from "../amountInputVerify"; // withdraw, staking-apply - input 입력 값 검증
import { agree } from "../agreeCheckBtn"; // withdraw, staking-apply - 동의 하기 체크박스
import { listHeight } from "../listHeight"; // wallet, staking - 리스트 내역 wrapper height 자동 감지
import { loadingText } from "../loading"; // wallet - 월렛 메뉴 첫 진입 시 나오는 로딩 페이지
// import { stakingLinkFunc } from "../rewardJoinCancelList"; // staking - 보상, 참여/취소 내역
// import { joinCancel } from "../joinCancel"; // staking-apply - 참여 하기, 참여 취소하기
// import { accordionFunc } from "../accordion"; // staking-info - 아코디언 애니메이션
// import { carousel } from "../swiper"; // main - 멤버소개

export const swup = new Swup({
  plugins: [
    new SwupScriptsPlugin({ optin: true }),
    new SwupHeadPlugin(),
    new SwupScrollPlugin({
      doScrollingRightAway: false,
      animateScroll: false,
    }),
    new SwupPreloadPlugin(),
  ],
});

swup.on("contentReplaced", cookieCheck);
swup.on("contentReplaced", hideHeaderAndFooter);
swup.on("contentReplaced", scroll);
swup.on("contentReplaced", commaFunc);
swup.on("contentReplaced", copied);
swup.on("contentReplaced", withdrawPossibleCalculate);
swup.on("contentReplaced", amountMax);
swup.on("contentReplaced", amountInputVerify);
swup.on("contentReplaced", agree);
swup.on("contentReplaced", listHeight);
swup.on("contentReplaced", loadingText);
// swup.on("contentReplaced", stakingLinkFunc);
// swup.on("contentReplaced", joinCancel);
// swup.on("contentReplaced", accordionFunc);
// swup.on("contentReplaced", carousel);
