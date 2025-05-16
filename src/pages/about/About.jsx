import React from 'react'
import ParticleEmitter from '../../components/Particles/ParticleEmitter'

export const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="content">
          <h1>About Me!</h1>
          <p>I am an avid learner of all things relating to technology and online business. My previous experience working
            with research and tech companies has taught me how important a fun and easy-to-use product can be for the
            customer
            and client alike.</p>

          <p>Growing up, I always had a passion for technology. I was always the kid that had my head in my gameboy or
            behind
            a computer screen of some sort. I had spent many years during middle school and high school learning from
            and
            helping friends and family set up their computers, hardware issues, virus removal, backing up information,
            setting
            up routers, and assist with building and upgrading computers. </p>

          <p>After a while, I decided that I would start learning how to create my own software. I had done a project in
            high
            school called “Career Cruising” where we would research future career paths and found that I had a deep
            interest
            in programming.</p>

          <p>My first dive into learning how to code was learning the BASIC programming language. I had found Liberty
            BASIC
            and began to learn the fundamentals of programming through there. I fell in love with the idea of developing
            for the web and the scope of what is possible through the web browser so I had started learning HTML, CSS,
            and
            Javascript but didn’t really get very far into the latter until some years later.</p>

          <p>After high school, I put development on hold because I had decided that I would focus full-time on my musical
            endeavors, joined a few bands, put out an album, and decided that I would finally come back to coding which
            led
            me to where I am now. When starting out, I had restarted my learning journey with online tutorials
            through Udemy and Lynda
            before joining an intensive coding bootcamp to get my skills to the next level.</p>
          <p>
            After a few years, I felt it would be necessary to finally try my hand at joining an accredited college for
            a degree
            in computer science focusing primarily on game development. I was able to pursue that for a year and a half
            before
            I had became too busy to attend a university full time. I did make sure to stick with it long enough to get
            my
            associate's degree until I can arrive at a time when I can go back and finish the rest of my degree in CS.
          </p>

          <p>Between October of 2018 and September of 2019 I worked as a full-stack web and mobile application developer
            for a small consultancy
            called Kyros Digital based in Grand Rapids, MI working with React,
            React Native, Meteor, SASS, and whatever technologies that came to mind!</p>

          <p>A few other web and mobile development jobs beyond that, I found myself in a whole new position where I could 
            start to exercise the years of study that I had done in the games industry by joining a small company named Th3rd Coast (Later, Mindspring) - That's where I was able to use technologies like Three.JS and Unity to start to build experiences centered around the AR/VR space. 
            My interest of the industry had piqued and I wanted to learn more about the industry and how I could contribute to it further which led me to learning Unreal Engine development and joining an awesome company named Imerza where I had worked closely with Unreal Engine, React JS, and Python to build 3D experiences for the architecture and real estate industries.
          </p>

          {/* <p id="lfw">I am also a freelancer in my spare time, looking to take on new projects or join an exciting
            team building web, mobile, and gaming applications</p> */}
        </div>
        <img src="./rw.jpg" />
      </div>
      <ParticleEmitter />
    </div>
  )
}
