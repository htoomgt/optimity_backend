import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

// Initialize Prisma Client
const prisma = new PrismaClient();


async function main() {

  // create  home initial data
  const homeDataCreateResp = await prisma.homeData.create({
    data: {
      title: "Welcome to Optimity!",
      file_path: "",
      description: "We are dedicated to maximizing the potential of our customers' IT systems, ensuring that every investment delivers its full worth. As a vendor-neutral solution provider, we prioritize our customers' best interests, offering comprehensive, tailored solutions. Our experienced team is committed to delivering innovative and cutting-edge ICT solutions that precisely match each customer's unique needs.",
      home_image_url: "./../assets/images/welcome.jpg"

    }
  });

  // create service data
  const services = [
    {

      title: "Design and Implementation of IT Solution",
      description: "Revolutionize your business with our meticulously designed IT solutions. From conceptualization to implementation, we deliver customized strategies that guarantee success. Leverage the power of technology to propel your business to new heights.",
      file_path: "",
      icon: "solar:ruler-pen-bold",
      service_image_url: ""

    },
    {

      title: "Operation, Maintenance & Managed Services",
      description: " At Optimity, we specialize in operation, maintenance, and managed services designed to meet your unique requirements. Our dedicated team of experts works diligently to optimize your IT infrastructure, minimizing downtime and maximizing productivity.",
      file_path: "",
      icon: "ic:baseline-engineering",
      service_image_url: ""
    },
    {

      title: "Consultations for Business Process Transformation",
      description: "Unlock the full potential of your business with our Business Process Transformation Consultation services. Our expert consultants collaborate closely with your team to identify bottlenecks, streamline operations, and optimize workflows. From initial assessment to implementation, we are committed to delivering measurable results.",
      file_path: "",
      icon: "streamline:collaborations-idea-solid",
      service_image_url: ""
    },
    {

      title: "B2B Professional Services for International Partners",
      description: "Explore unparalleled B2B professional services tailored for international partners at Optimity. From seamless project management to innovative technology integration, our team ensures smooth collaboration and sustainable growth for your business. Trust us to elevate your operations to new heights, regardless of your location.",
      file_path: "",
      icon: "material-symbols-light:business-messages-rounded",
      service_image_url: ""
    },
    {

      title: "Field Engineering Services for International Telco and ISPs",
      description: "Benefit from our Field Engineering Services tailored for international Telcos and ISPs. Our dedicated team of experts specializes in deploying cutting-edge solutions, ensuring unparalleled reliability and scalability for your network infrastructure. From initial design and deployment to ongoing maintenance and support, we prioritize efficiency and excellence, empowering your operations to thrive in today's dynamic digital landscape.",
      file_path: "",
      icon: "carbon:license-maintenance-draft",
      service_image_url: ""
    },
    {

      title: "Next-Level Corporate Training Services",
      description: "Empower your workforce for success in the digital age with our cutting-edge Corporate Training Services. Our programs are tailored to enhance efficiency, productivity, and innovation within your organization, focusing on practical skills and industry-relevant knowledge. Partner with us to unleash the full potential of your workforce and stay ahead in today's dynamic business landscape.",
      file_path: "",
      icon: "healthicons:i-training-class",
      service_image_url: ""
    }


  ];

  // create service initial data
  const serviceSCreateResp = await prisma.service.createMany({
    data: services
  });

  // create about main content data
  const aboutMainContent = [
    {

      title: "We'll Help You Solve Problems",
      description: "Optimity is your trusted vendor-neutral System Integrator, dedicated to delivering innovative ICT solutions.\n\n Founded by experienced engineers with diverse backgrounds, we specialize in simplifying IT processes for businesses. With extensive experience in healthcare, banking, and finance sectors, we excel in providing customized network and system infrastructure solutions tailored to meet our customers’ unique needs.\n\nAt Optimity, we understand the challenges of navigating modern technology. Partner with us and let our expertise guide you, so you can focus on what matters most - growing your business.",
      about_image_url: "/assets/images/aboutus1.jpg",
      file_path: ""
    }

  ];


  // create about main content
  const aboutMainContentCreateResp = await prisma.about.createMany({
    data: aboutMainContent
  });

  // create optimity data
  const optimityCreateResp = await prisma.optimity.createMany({
    data: [{
      address: "No.(605), 5th Floor, Building 16, MICT Park, Hlaing Township, Yangon, Myanmar",
      email: "info@optimitycomm.com",
      phone: "+959 4 2501 7904, +959 9 7976 2198"
    }]
  });

  // create vision and mission data
  const visionMissionCreateResp = await prisma.vismis.createMany({
    data: [
      {
        title: "Vision",
        description: "To become the leading innovative ICT Solution Provider in Myanmar, dedicated to serving our customers' best interests."
      },
      {
        title: "Mission",
        description: "To consistently drive innovation and adaptation, delivering expert project solutions, and providing proactive operational support that aligns with evolving technology."
      },
    ]
  });

  // create solution data
  const solutionListData = [
    {
      title: "Telco & ISP Solutions",
      description: "Our Solutions are uniquely positioned to maximize your network value with cost minimization. Our partnership with technology leaders empowers us with the skills and tools to manage your full IT landscape seamlessly. Our proven success reflects our unwavering commitment to improvement. We customize services to your exact needs, ensuring cost-effective management of your network environment. \n\n Optimity's strategic positioning allows us to enhance network infrastructure value while significantly reducing costs through: \n\n - Converged Super Core: Efficient core network architecture. \n\n - High-Speed Provider Edge: Seamless service delivery connectivity. \n\n - DCI (Data Center Interconnect): Smooth data transfer between centers. \n\n - Metro Ethernet Aggregation: Effective metropolitan network aggregation. \n\n - CPE (Customer Premises Equipment): Tailored equipment for providers, transport, and more. \n\n Our proven success reflects our unwavering commitment to improvement. We customize services to your exact needs, ensuring cost-effective management of your network environment.",
      solution_image_url: "ispImage",
    },
    {
      title: "Data Center Solution",
      description: "Turnkey approach we offer covers everything from design and implementation to maintenance and optimization. With a single point of contact, you can streamline communication, minimize coordination efforts, and eliminate the complexities of dealing with multiple providers. Our turnkey solution accelerates project timelines, reduces costs, and ensures a cohesive strategy that aligns with your goals.\n\n We also offer Data Center Infrastructure Solutions such as: \n\n - DC & NOC – Design and Build, \n\n - DC integration and migration, \n\n - IT infra & management system, \n\n - Facility and Operation management. \n\n Embrace the data center solutions that are both efficient and effective, brought to you with the simplicity and expertise you deserve.",
      solution_image_url: "ispImage",
    },
    {
      title: "Hyper Converged Solution",
      description: "Hyperconverged infrastructure (HCI) unifies the entire data center stack, encompassing compute, storage, storage networking, and virtualization. It replaces complex and costly legacy infrastructure with a streamlined platform. HCI’s growing popularity stems from its ability to consolidate and simplify the compute, storage, and network infrastructure for business-critical applications. We’re committed to tailoring our Hyperconverged Solution to your unique needs. Whether you’re seeking to modernize your data center or enhance remote work capabilities, our solution offers a seamless integration process and unparalleled support.",
      solution_image_url: "ispImage",
    },
    {
      title: "Security Solutions",
      description: "Unparalleled protection with our extensive array of security solutions from firewalls to anti-DDoS, malware and DNS security, proxy, PKI, DPI, end-point security, and security testing, our diverse range is crafted to establish a multi-layered defense strategy.",
      solution_image_url: "ispImage",
    },
    {
      title: "End-user Computing",
      description: "Virtual Desktop Infrastructure (VDI) promotes improved user mobility and remote access by providing a standardized desktop that can be accessed virtually from any device, anywhere. Users can access their familiar desktop environment with all their applications, data, and settings intact, boosting productivity and reducing the learning curve for new technologies. VDI technology not only benefits end users but also serves as a significant cost-saving measure: Since the majority of processing in VDI is server-based, there’s no need for costly or advanced hardware. Access to VDI can be achieved through an affordable thin client, which could be a repurposed old PC, thereby extending its lifespan. This reduces the need for IT to make numerous new purchases or significant budget adjustments.",
      solution_image_url: "ispImage",
    },
    {
      title: "Managed IT & Cloud Services",
      description: "We specialize in providing comprehensive Managed IT and Cloud Services, designed to optimize your business operations and boost productivity. We understand that managing an IT infrastructure can be a complex and time-consuming task, which is why we offer a complete suite of services to handle all your IT needs. Our Managed IT services encompass everything from network management and data storage to system updates and cybersecurity. Our team of seasoned IT professionals works tirelessly to ensure your IT operations run smoothly and securely. We proactively monitor your systems to identify and resolve issues before they impact your business, and we provide regular system updates to keep your technology current and efficient. In addition to our IT services, we also offer robust Cloud Services. In today’s digital age, the cloud has become an essential tool for businesses of all sizes. With Optimity’s Managed IT and Cloud Services, you can focus on what you do best – running your business. Let us handle your IT and cloud needs, so you can enjoy peace of mind knowing that your technology is in expert hands.",
      solution_image_url: "ispImage",
    },
    {
      title: "Enterprise Office Network & End-user Equipment's Supplies",
      description: "Comprehending the importance of a robust and efficient office network for your enterprise, we offer comprehensive solutions for Enterprise Office Network and End-user Equipment Supplies. Our offerings include everything from high-speed routers and switches to ensure seamless connectivity, to end-user devices like computers, laptops and many more. We source our equipment from trusted manufacturers, ensuring you receive reliable, high-quality products that enhance productivity and streamline operations. Whether you’re setting up a new office or upgrading your existing network, our solutions are designed to meet your specific needs, ensuring your enterprise runs smoothly and efficiently.",
      solution_image_url: "ispImage",
    },
  ];

  const solutionServices = [
    [
      "Network Infrastructure Design and Deployment",
      "Technical Support and Helpdesk Services",
      "24/7 technical support",
      "Consultation and Advisory Services"
    ],
    [
      "Data Center Solutions and Colocation Services",
      "Server and Storage Solutions",
      "Technical Support",
      "Consultation and Advisory Services"
    ],
    [
      "Integration Support",
      "Performance Monitoring and Optimization",
      "Technical support",
      "Consultation and Advisory Services"
    ],
    [
      "Network Security Solutions",
      "End-Point Security Solutions",
      "Security Testing Services",
      "Consultation and Advisory Services"
    ],
    [
      "Software Licensing and Integration",
      "Support and Maintenance Services",
      "Consultation and Advisory Services"
    ],
    [
      "IT Infrastructure Optimization",
      "Cloud Solutions",
      "Consultation and Advisory Services"
    ],
    [
      "Network Installation and Configuration",
      "Troubleshooting and Technical Support",
      "Equipment Procurement and Setup",
      "Equipment Upgrades and Expansion"
    ]
  ];

  let createdSolution = null;
  let solutionServicesToCreate = null;
  solutionListData.forEach(async (solution, index) => {
    createdSolution = await prisma.solution.create({ data: solution });

    solutionServicesToCreate = solutionServices[index];

    solutionServicesToCreate.forEach(async (service) => {
      await prisma.solutionService.create({
        data : { solution_id : createdSolution.id , service_name : service}
      });
    })

  })





  // creating news data
  const newsData = [
    {

      title: "New Microsoft AI animates faces from photos",
      description: "Last week, Microsoft researchers detailed a new AI model they’ve developed that can take a still image of a face and an audio clip of someone speaking and automatically create a realistic looking video of that person speaking. The videos — which can be made from photorealistic faces, as well as cartoons or artwork — are complete with compelling lip syncing and natural face and head movements.",
      link: "https://edition.cnn.com/2024/04/21/tech/microsoft-ai-tool-animates-faces/index.html",
      user_image_url: ""
    }
  ];

  const newsDataCreationResp = await prisma.news.createMany({
    data: newsData
  });

  // creating vacancies data
  const vacanciesData = [
    {
      "title": "Officer",
      "education": "Bachelor in Marketing",
      "experience": "No Experience needed freshers can apply"
    },
    {

      "title": "Brand Officer",
      "education": "Bachelor in Marketing",
      "experience": "No Experience needed freshers can apply"
    }
  ];

  const vacanciesCreationRes = prisma.vacancy.createMany({
    data: vacanciesData
  });

  // creating core value data
  const coreValueData = [
    {

      "value": "Ethical Integrity ► Upholding ethical standards through responsible and accountable actions."
    },
    {

      "value": "Customer-Centricity ► Prioritizing our customers' success, ensuring employee satisfaction, and creating value for our shareholders."
    },
    {

      "value": "Passion for Excellence ► Fueling our actions with an unwavering passion for excellence."
    },
    {

      "value": "Social and Environmental Responsibility ► Committing to the well-being of society, the environment, and future generations in all our endeavors."
    }
  ];

  const coreValueDataCreateResp = await prisma.coreVal.createMany({
    data: coreValueData
  });

  // vission mission statement data
  const visionMissionData = [
    {
      "title": "Vision",
      "description": "To become the leading innovative ICT Solution Provider in Myanmar, dedicated to serving our customers' best interests."
    },
    {
      "title": "Mission",
      "description": "To consistently drive innovation and adaptation, delivering expert project solutions, and providing proactive operational support that aligns with evolving technology."
    }

  ];

  const visionMissionDataCreatingResp = prisma.vismis.createMany({
    data: visionMissionData
  });


  // Creating solution data
  const solutionA = {
    title: "Telco & ISP Solutions",
    description: "Our Solutions are uniquely positioned to maximize your network value with cost minimization. Our partnership with technology leaders empowers us with the skills and tools to manage your full IT landscape seamlessly. Our proven success reflects our unwavering commitment to improvement. We customize services to your exact needs, ensuring cost-effective management of your network environment. \n\n Optimity's strategic positioning allows us to enhance network infrastructure value while significantly reducing costs through: \n\n - Converged Super Core: Efficient core network architecture. \n\n - High-Speed Provider Edge: Seamless service delivery connectivity. \n\n - DCI (Data Center Interconnect): Smooth data transfer between centers. \n\n - Metro Ethernet Aggregation: Effective metropolitan network aggregation. \n\n - CPE (Customer Premises Equipment): Tailored equipment for providers, transport, and more. \n\n Our proven success reflects our unwavering commitment to improvement. We customize services to your exact needs, ensuring cost-effective management of your network environment.",
    solution_image_url: "ispImage"
  };








}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });