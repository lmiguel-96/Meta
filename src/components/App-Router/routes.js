import React from "react";
import { AboutUs } from "../About-Us/About-Us";
import { ContactUs } from "../Contact-Us/Contact-Us";
import Newsletter from "../Newsletter/Newsletter";
import { OurServices } from "../Our-Services/Our-Services";
import { OurWorks } from "../Our-Works/Our-Works";
import { OurWorksDetails } from "../Our-Works-Details/Our-Works-Details";
import { ImageComp } from "../ImageComp/ImageComp";

export const routes = [
  {
    path: "/home",
    component: () => <ImageComp />,
    exact: true
  },
  {
    path: "/about",
    component: () => <AboutUs />,
    exact: false
  },
  {
    path: "/services",
    component: () => <OurServices />,
    exact: true
  },
  {
    path: "/our-works",
    component: () => <OurWorks />,
    exact: true
  },
  {
    path: "/our-works/:projectID",
    component: OurWorksDetails,
    exact: true
  },
  {
    path: "/contact",
    component: ContactUs,
    exact: false
  }
];

export const newsletter = {
  path: "/newsletter",
  component: Newsletter,
  exact: false
};
