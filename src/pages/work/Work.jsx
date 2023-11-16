import React from 'react'
import { PostComponent } from './components/PostComponent'

export const Work = () => {

  const posts = [
    {
      title: "ProVizXR",
      img: "public/proviz.png",
      description: "ProVizXR is a 3D XR experience builder for the web. It works by exporting a serialized JSON format that can then be utilized to create native experiences via the custom Unity engine plugin or you can export directly for WebXR. My role was to build new widgets into the software, integrate software like 8th wall into it, maintain feature parity between native Unity builds and the web app exports, integrate the built-in blueprints-like scripting language, and build various UI features using React.js.",
      myRole: "Full-Stack Development (Unity and React)",
      link: "https://gomindspring.com/provizxr"
    }, {
      title: "La Clara",
      img: "public/la-clara.jpg",
      description: "I had a hand in building the La Clara digital twin app. An app that the sales people at the La Clara condos use to visualize their homes to prospecting buyers. This was built using Unreal Engine and Blueprints. I also built the IoT portion of the app using Python and FastAPI that allows the sales people to control their digital twin from the app.",
      myRole: "Unreal Engine/Iot Development",
      link: "https://imerza.com/real-estate/projects/la-clara"
    }, {
      title: "City2Shore Real Estate",
      img: "public/c2S-screenshot.png",
      description: "Company software for City2Shore; a real-estate franchise company. I had a hand in building onto the administration dashboard.",
      myRole: "Full-Stack Development/Maintenance",
      link: ""
    }, {
      title: "MiLife",
      img: "public/milife-screenshot.png",
      description: "A sports league management web app. This was created using Meteor and React.js",
      myRole: "Front-end Development",
      link: ""
    }, {
      title: "Seek2Work/Seek2Hire",
      img: "public/s2w.png",
      description: "This app was designed and built for the gig economy. Essentially envisioned as 'an entire staffing industry in an app'; it automates all phases of the hiring process from background checking, drug screening, payroll processing, tax forms, reports for engagements completed, and even a locator. It was a way to connect people looking for work with people looking to hire. It was built using React Native and Meteor for the back-end.",
      myRole: "Full-Stack Developer",
      link: "https://seek2work.com/"
    }, {
      title: "Action Trucks",
      img: "public/tree.png",
      description: "This app is built for Canada's largest aftermarket automotive retailer. It was built using React Native and a custom PHP framework built in-house.",
      myRole: "Full-Stack Development/Maintenance",
      link: "https://play.google.com/store/apps/details?id=com.actiontrucks.app"
    }, {
      title: "CTP Distributors",
      img: "public/ctp.png",
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
