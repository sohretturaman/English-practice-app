/** @format */

import { YOUTUBE_API_KEY } from "@env";
import { EnglishSpeaking } from "./basicEnglishSpeaking";
import { ShawEnglish } from "./basicEducationShawEnglish";
import { CartoonEnglishTv } from "./basicCartoons"; //second playlist of learn english with tv channel
import { basic101 } from "./basic101"; //second playlist of english101 channel
import { BBCLearning } from "./BBCLearning";
import { EslLearning } from "./7ESLLearningEnglish";
import { EasyEnglish } from "./EasyEnglish";
import { English101 } from "./English101";
import { EnglishWithLucy } from "./EnglishWithLucy";
import { EnglishWithJeniffer } from "./Jennifer";
import { LearnWithTvSeries } from "./LearnWithTvSeries";
import { Linguamarina } from "./Linguamarina";
import { speakWithVanessa } from "./SpeakWithVenessa";
import { ydtBenimHocam } from "./YDTBenimhocam";
import { twilightSongs } from "./TwilightSongs";
export const MainPlaylists = [
  {
    id: 1,
    name: "BBC Learning English",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCHaHD477h-FeBbVh9Sh7syA&key=${YOUTUBE_API_KEY}`,
    data: BBCLearning.items,
  },
  {
    id: 2,
    name: "7ESL Learning English",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCPDQgXju7hqEGBwzLIeI7Zw&key=${YOUTUBE_API_KEY}`,
    data: EslLearning.items,
  },
  {
    id: 3,
    name: "EASY ENGLISH",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCO13CfbtRtrO7cUvzbw-t-Q&key=${YOUTUBE_API_KEY}`,
    data: EasyEnglish.items,
  },
  {
    id: 4,
    name: "Learn English with EnglishClass101.com ",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCeTVoczn9NOZA9blls3YgUg&key=${YOUTUBE_API_KEY}`,
    data: English101.items,
  },

  {
    id: 5,
    name: "Benim Hocam",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCjLv1XVYi5K4Pq33lY0K22w&key=${YOUTUBE_API_KEY}`,
    data: ydtBenimHocam.items,
  },
  {
    id: 6,
    name: "English with Jennifer",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCEKXieT70wByfvZwP1CxdPQ&key=${YOUTUBE_API_KEY}`,
    data: EnglishWithJeniffer.items,
  },
  {
    id: 7,
    name: "Learn English With TV Series",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCKgpamMlm872zkGDcBJHYDg&key=${YOUTUBE_API_KEY}`,
    data: LearnWithTvSeries.items,
  },
  {
    id: 8,
    name: "linguamarina",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCAQg09FkoobmLquNNoO4ulg&key=${YOUTUBE_API_KEY}`,
    data: Linguamarina.items,
  },
  {
    id: 9,
    name: "Speak English With Vanessa",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCxJGMJbjokfnr2-s4_RXPxQ&key=${YOUTUBE_API_KEY}`,
    data: speakWithVanessa.items,
  },

  {
    id: 10,
    name: "English with Lucy",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCTRHegh7UqWuKRymXoqzbzA&key=${YOUTUBE_API_KEY}`,
    data: EnglishWithLucy.items,
  },
  //basic english
  {
    id: 11,
    name: "English Speaking Course",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UCLsI5-B3rIr27hmKqE8hi4w&key=${YOUTUBE_API_KEY}`,
    data: EnglishSpeaking.items,
  },
  {
    id: 12,
    name: "Shaw English Online",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UC_OskgZBoS4dAnVUgJVexcw&key=${YOUTUBE_API_KEY}`,
    data: ShawEnglish.items,
  },
  /*  {
    id: 13,
    name: "Twilight Sounds ",
    url: `https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id=UC8NNH9SnfpfX52y-CdHXAdA&key=${YOUTUBE_API_KEY}`,
    data: twilightSongs.items,
  }, */
];

export default MainPlaylists;

export const BeginnersChanelsData = [];
