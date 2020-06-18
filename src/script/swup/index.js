import Swup from "swup";
import SwupScriptsPlugin from "@swup/scripts-plugin";
import SwupHeadPlugin from "@swup/head-plugin";

import { scroll } from "../smoothscroll";
import { stakingLinkFunc } from "../rewardJoinCancelList";
import { commaFunc } from "../nanoSplit";
import { joinCancel } from "../joinCancel";
import { copied } from "../clipboard";
import { amountMax } from "../amountMax";
import { agree } from "../agreeCheckBtn";
import { accordionFunc } from "../accordion";

export const swup = new Swup({
  plugins: [new SwupScriptsPlugin({ optin: true }), new SwupHeadPlugin()],
});

swup.on("contentReplaced", scroll);
swup.on("contentReplaced", stakingLinkFunc);
swup.on("contentReplaced", commaFunc);
swup.on("contentReplaced", joinCancel);
swup.on("contentReplaced", copied);
swup.on("contentReplaced", amountMax);
swup.on("contentReplaced", agree);
swup.on("contentReplaced", accordionFunc);
