import React from "react";

import gsp from '../../images/get-inspired.webp';
import fya from '../../images/find-your-anchor.webp';
import och from '../../images/oc-habitats.webp';
import pnp from '../../images/patriots-and-paws.webp';
import tlp from '../../images/the-literacy-project.webp';
import wmk from '../../images/waymakers.webp';

const projects = {
  pro: [
    {
      name: "Amazon",
      // tech: ['TypeScript', 'Python/Pytest', 'AWS (Lambda, AppConfig, API Gateway, CloudFormation)'],
      subhead: "SDE Intern | Summer 2022/2023",
      color: "#000000",
      // color: '#0baae3',
      description: (
        <p>
          Prototyped fullstack customization of billing insights for the AWS
          Cost Management console in Summer 2022. Built operational
          monitoring dashboards & infrastructure-as-code for Billing & Cost
          Management console pages in Summer 2023.
        </p>
      ),
    },
    {
      name: "Commit the Change",
      // tech: ['React', 'Framer Motion'],
      subhead: "VP of Projects | 2022-2023",
      color: "#6331d8",
      description: (
        <p>
          Led high-level technical planning and development implementation
          for 5 large-scale software projects in partnership with Southern
          California NPOs to enhance and streamline their day-to-day operations.
        </p>
      ),
    },
  ],
  proj: [
    {
      name: "OC Habitats",
      // subhead: 'React, Express, MongoDB',
      subhead: "Summer 2022 - Winter 2023",
      color: "#2BC0E3",
      image: och,
      description: (
        <p>
          Habitat monitoring log aggregation to help a conservation nonprofit
          track and gauge biome and species health.
        </p>
      ),
    },
    {
      name: "Patriots and Paws",
      // subhead: 'React, Express, PostgreSQL',
      subhead: "Fall 2022 - Spring 2023",
      color: "#c53030",
      image: pnp,
      description: (
        <p>
          Furniture inventory management and donation processing for a nonprofit
          helping veterans reassimilate after service.
        </p>
      ),
    },
    {
      name: "Get Inspired",
      // subhead: 'React, Express, MySQL',
      subhead: "Fall 2022 - Spring 2023",
      color: "#80c41b",
      image: gsp,
      description: (
        <p>
          Specialized database-style management and querying of Pismo Clam
          preservation data for the species&apos; primary restoration NPO.
        </p>
      ),
    },
    {
      name: "Find Your Anchor",
      // subhead: 'React, Express, PostgreSQL',
      subhead: "Summer 2022 - Spring 2023",
      color: "#345e80",
      image: fya,
      description: (
        <p>
          Mapping physical locations of mental wellness caches
          for an Orange County nonprofit spreading them across the world.
        </p>
      ),
    },
    {
      name: "The Literacy Project",
      // subhead: 'React, Express, PostgreSQL',
      subhead: "Summer 2021 - Spring 2022",
      color: "#a6831f",
      image: tlp,
      description: (
        <p>
          District, school, and class-level segmentation of student scores and
          statistics for the digitization of TLP&apos;s award-winning literacy
          teaching and assessment system.
        </p>
      ),
    },
    {
      name: "Waymakers",
      // subhead: 'React, Express, MySQL',
      subhead: "Fall 2020 - Spring 2021",
      color: "#003e53",
      image: wmk,
      description: (
        <p>
          Inventory management of essential items spanning multiple warehouse
          locations, item categories, and organizational divisions within a
          nonprofit focused on crisis mediation.
        </p>
      ),
    },
  ],
};

export default projects;
