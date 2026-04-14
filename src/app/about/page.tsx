import React, { Suspense } from "react";
import Carousel from "./Carousel";
import TopTenList from "./TopTenList";
import TopTenListSkeleton from "./TopTenListSkeleton";

function AboutPage() {
  return (
    <div className="p-6 md:p-16 lg:px-30 xl:px-50">
      <h2 className="header">About me</h2>
      <div className="mb-4 grid grid-cols-1 md:gap-x-6 md:grid-cols-[1fr_2fr] md:gap-y-4 lg:mb-10 lg:grid-rows-[auto_1fr] 2xl:gap-x-10">
        <div className="md:col-start-1 md:row-start-1 lg:row-span-2 lg:mb-0">
          <Carousel />
        </div>
        <p className="md:col-start-2 md:row-start-1">
          Hello! I&#39;m Siebe Verhaegen and I&#39;m here to talk more about myself.
          I&#39;m a developer living in the city Ranst. Despite being a recent
          graduate, I&#39;m by no means inexperienced in the field. Beginning from
          my first year in secondary education, the newly created course STEM was
          the course I chose to follow, as it was new and exciting. It was during
          the fourth year were I came in contact with coding applications. I never
          knew I had a fondness for coding until then, which opened my eyes to a
          newfound passion. It was after that year, that I chose to enrol in a new
          school that included a course Applied Computer Science and I never
          looked back since.
        </p>
        <p className="mb-10 md:col-span-2 lg:col-span-1 lg:row-start-2 lg:col-start-2 lg:mb-0">
          Although I have yet to be an employee for a company, I have participated
          in a 14-week long internship program following the school subject called
          &ldquo;IT-Professional&ldquo;. This internship took place within the
          company Selas BV, located in Lille. During this period, I was shown the
          inner workings of a small software development company, along with
          creating a project per request of the higher-up. My task included
          creating a search engine for the people of the company, which featured
          the ability to search through SharePoint files, Outlook emails, Teams
          chats and a database. To familiarize me with the ever growing technology
          that is AI, I was tasked to integrate the ability for the AI to do the
          searching. Along with some help of my mentor, I was able to fullfill
          this project by the end of my internship.
          <br />
          This experience has thought me a lot about things previously out of my
          expertise. Learning how the AI thinks and works, knowing what
          MCP-servers are, understanding how JSON web tokens are verified,
          demonstrating your project to your fellow collegues, are all skills I
          picked up during this time. And because I&ldquo;m someone who loves
          learning new technologies, I truly enjoyed doing so.
        </p>
      </div>
      <h2 className="header">My interests</h2>
      <p className="mb-10">
        For me, there are two hobbies that immediatly come to mind: Board games
        and running. I have been running for about one and a half years now.
        Every Monday, Wednesday and Friday, I like to run a predetermined amount
        of time in the morning. Doing this allows me to keep my body healthy
        whilst spending the rest of my time mostly sitting. While it can be a
        challenge for me to keep up this routine, I&ldquo;m not someone who
        gives up easily, and being driven helps as well.
        <br />
        The hobby I am really passionate about, is board gaming. Every month I
        organize an evening with friends where we play several board games. In
        addition, I regularly visit a board gaming event to play with likeminded
        people. Due to this, I have developed a rather expansive collection of
        board games that all fit different styles play, be it cooperative,
        worker placement, area control, push your luck, etc. You can find my collection by clicking this <span className="text-accent underline"><a href="https://boardgamegeek.com/collection/user/flyingviper?subtype=boardgame&own=1&ff=1">link</a></span>. The board games I
        like to play are much more strategic than classics like
        &ldquo;Monopoly&ldquo; and &ldquo;Connect Four&ldquo;. Board games are a
        way for me to challenge myself. Coming up with a plan to try to win is
        what appeals to me the most. Although I am not extremely competitive,
        playing board games still brings out that side of my personality. I am
        especially fascinated by games where I have to adapt my plan based on
        what happens on the board. While strategy is one of the reasons I enjoy
        this hobby, it is not the only one. The second reason, is the shared
        atmosphere that comes with playing board games. Laughing with family and
        friends, getting in each other&rsquo;s way, developing strategies
        together, are all part of the fun. Since my friends and I do not go out
        together very often, playing board games is a great way for us to spend
        time together.
      </p>
      <h2 className="header">Top 10 games I&rsquo;ve played</h2>
      <Suspense fallback={<TopTenListSkeleton />}>
        <TopTenList />
      </Suspense>
    </div>
  );
}

export default AboutPage;
