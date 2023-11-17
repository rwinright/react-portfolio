import React from 'react'
import { PostComponent } from './components/PostComponent'

export const Work = () => {

  const posts = [
    {
      title: "ProVizXR",
      img: "./proviz.png",
      description: "ProVizXR is a 3D XR experience builder for the web. It works by exporting a serialized JSON format that can then be utilized to create native experiences via the custom Unity engine plugin or you can export directly for WebXR. My role was to build new widgets into the software, integrate software like 8th wall into it, maintain feature parity between native Unity builds and the web app exports, integrate the built-in blueprints-like scripting language, and build various UI features using React.js.",
      myRole: "Full-Stack Development (Unity and React)",
      link: "https://gomindspring.com/provizxr"
    },
    {
      title: "Bentley iTwin",
      img: "./itwin.png",
      description: "This was the first project that I had worked on with my previous employer. It's a digital twin application for visualizing data for the wind turbines located off the coast of Scotland. It was built using Unreal Engine and Blueprints. I had a hand in building the UI and UX for the app, as well as integrating the Bentley API data into the application while synchronizing simulation data with the UI.",
      myRole: "Unreal Engine Developer",
      link: "https://cesium.com/blog/2023/07/18/bentley-systems-simulates-offshore-wind-farms/"
    },
    {
      title: "La Clara",
      img: "./la-clara.jpg",
      description: "I had a hand in building the La Clara digital twin app. An app that the sales people at the La Clara condos use to visualize their homes to prospecting buyers. This was built using Unreal Engine and Blueprints. I also built the IoT portion of the app using Python and FastAPI that allows the sales people to control their digital twin from the app.",
      myRole: "Unreal Engine/Iot Development",
      link: "https://imerza.com/real-estate/projects/la-clara"
    },
    {
      title: "City2Shore Real Estate",
      img: "./c2S-screenshot.png",
      description: "Company software for City2Shore; a real-estate franchise company. I had a hand in building onto the administration dashboard.",
      myRole: "Full-Stack Development/Maintenance",
      link: ""
    },
    {
      title: "MiLife",
      img: "./milife-screenshot.png",
      description: "A sports league management web app. This was created using Meteor and React.js",
      myRole: "Front-end Development",
      link: ""
    },
    {
      title: "Seek2Work/Seek2Hire",
      img: "./s2w.png",
      description: "This app was designed and built for the gig economy. Essentially envisioned as 'an entire staffing industry in an app'; it automates all phases of the hiring process from background checking, drug screening, payroll processing, tax forms, reports for engagements completed, and even a locator. It was a way to connect people looking for work with people looking to hire. It was built using React Native and Meteor for the back-end.",
      myRole: "Full-Stack Developer",
      link: "https://seek2work.com/"
    },
    {
      title: "Action Trucks",
      img: "./tree.png",
      description: "This app is built for Canada's largest aftermarket automotive retailer. It was built using React Native and a custom PHP framework built in-house.",
      myRole: "Full-Stack Development/Maintenance",
      link: "https://play.google.com/store/apps/details?id=com.actiontrucks.app"
    },
    {
      title: "CTP Distributors",
      img: "./ctp.png",
      description: "A mobile app for the CTP Distributors website. Provides a mobile storefront for business that buy wholesale aftermarket automotive parts. This was made using a custom PHP back-end and Angular 7 on the front-end.",
      myRole: "Full-Stack Developer",
      link: "https://play.google.com/store/apps/details?id=com.ctpdistributorsfinal.app"
    }
  ]

  return (
    <div className="Work">
      <div className="posts">
        {
          posts.map((post, index) => (
            <PostComponent key={index} title={post.title} image={post.img} desc={post.description} role={post.myRole} link={post.link} />
          ))
        }
      </div>
    </div>
  )
}
