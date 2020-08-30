import React from "react";
import "../Components css/StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="StoryReel">
      <Story
        image="https://images.pexels.com/photos/3791466/pexels-photo-3791466.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        profilesrc="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        title="train"
      />

      <Story
        image="https://images.pexels.com/photos/4280015/pexels-photo-4280015.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
        profilesrc="https://lh3.googleusercontent.com/a-/AOh14GiZzCOabcRPqeBa7JmRCuLVVUkuqw4T8nKmnwgG=s88"
        title="Coding Train"
      />

      <Story
        image="https://images.pexels.com/photos/4321501/pexels-photo-4321501.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
        profilesrc="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        title="Clever Programmer"
      />

      <Story
        image="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
        profilesrc="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        title="Frank"
      />

      <Story
        image="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=750&amp;w=1260"
        profilesrc="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        title="Pewdiepie"
      />
      {/*<Story
        image="https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
        profilesrc="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s48-c-k-c0xffffffff-no-rj-mo"
        title="Jack Septiceye"
      />*/}
    </div>
  );
}

export default StoryReel;
