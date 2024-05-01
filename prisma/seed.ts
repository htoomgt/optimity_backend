import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();


async function main(){
    
    // create  home initial data
    const homeDataCreateResp = await prisma.homeData.create({
        data : {
            title : "Welcome to Optimity!",
            file_path : "",
            description : "We are dedicated to maximizing the potential of our customers' IT systems, ensuring that every investment delivers its full worth. As a vendor-neutral solution provider, we prioritize our customers' best interests, offering comprehensive, tailored solutions. Our experienced team is committed to delivering innovative and cutting-edge ICT solutions that precisely match each customer's unique needs.",
            home_image_url : "./../assets/images/welcome.jpg"
            
        }
    });

    // create service data
    const services = [
        {
         
          title : "Design and Implementation of IT Solution",
          description: "Revolutionize your business with our meticulously designed IT solutions. From conceptualization to implementation, we deliver customized strategies that guarantee success. Leverage the power of technology to propel your business to new heights.",
          file_path : "",
          icon: "solar:ruler-pen-bold",
          service_image_url : ""

        },
        {
          
          title: "Operation, Maintenance & Managed Services",
          description : " At Optimity, we specialize in operation, maintenance, and managed services designed to meet your unique requirements. Our dedicated team of experts works diligently to optimize your IT infrastructure, minimizing downtime and maximizing productivity.",
          file_path : "",
          icon: "ic:baseline-engineering",
          service_image_url : ""
        },
        {
         
          title: "Consultations for Business Process Transformation",
          description : "Unlock the full potential of your business with our Business Process Transformation Consultation services. Our expert consultants collaborate closely with your team to identify bottlenecks, streamline operations, and optimize workflows. From initial assessment to implementation, we are committed to delivering measurable results.",
          file_path : "",
          icon: "streamline:collaborations-idea-solid",
          service_image_url : ""
        },
        {
          
          title: "B2B Professional Services for International Partners",
          description: "Explore unparalleled B2B professional services tailored for international partners at Optimity. From seamless project management to innovative technology integration, our team ensures smooth collaboration and sustainable growth for your business. Trust us to elevate your operations to new heights, regardless of your location.",
          file_path : "",
          icon: "material-symbols-light:business-messages-rounded",
          service_image_url : ""
        },
        {
          
          title: "Field Engineering Services for International Telco and ISPs",
          description: "Benefit from our Field Engineering Services tailored for international Telcos and ISPs. Our dedicated team of experts specializes in deploying cutting-edge solutions, ensuring unparalleled reliability and scalability for your network infrastructure. From initial design and deployment to ongoing maintenance and support, we prioritize efficiency and excellence, empowering your operations to thrive in today's dynamic digital landscape.",
          file_path : "",
          icon: "carbon:license-maintenance-draft",
          service_image_url : ""
        },
        {
          
          title: "Next-Level Corporate Training Services",
          description: "Empower your workforce for success in the digital age with our cutting-edge Corporate Training Services. Our programs are tailored to enhance efficiency, productivity, and innovation within your organization, focusing on practical skills and industry-relevant knowledge. Partner with us to unleash the full potential of your workforce and stay ahead in today's dynamic business landscape.",
          file_path : "",
          icon: "healthicons:i-training-class",
          service_image_url : ""
        }
      
      
      ];

      // create service initial data
      const serviceSCreateResp = await prisma.service.createMany({
        data : services
      });

      // create about main content data
      const aboutMainContent = [
        { 
          
          title: "We'll Help You Solve Problems",
          description : "Optimity is your trusted vendor-neutral System Integrator, dedicated to delivering innovative ICT solutions.\n\n Founded by experienced engineers with diverse backgrounds, we specialize in simplifying IT processes for businesses. With extensive experience in healthcare, banking, and finance sectors, we excel in providing customized network and system infrastructure solutions tailored to meet our customers’ unique needs.\n\nAt Optimity, we understand the challenges of navigating modern technology. Partner with us and let our expertise guide you, so you can focus on what matters most - growing your business.",
          about_image_url : "/assets/images/aboutus1.jpg",
          file_path : ""
        }
         
      ];


      // create about main content
      const aboutMainContentCreateResp = await prisma.about.createMany({
        data : aboutMainContent
      });

      // create optimity data
      const optimityCreateResp = await prisma.optimity.createMany({
        data : [{
          address : "No.(605), 5th Floor, Building 16, MICT Park, Hlaing Township, Yangon, Myanmar",
          email : "info@optimitycomm.com",
          phone : "+959 4 2501 7904, +959 9 7976 2198"
        }]
      });

      // create vision and mission data
      const visionMissionCreateResp = await prisma.vismis.createMany({
        data : [
          {
            title : "Vision",
            description : "To become the leading innovative ICT Solution Provider in Myanmar, dedicated to serving our customers' best interests."
          },
          {
            title : "Mission",
            description : "To consistently drive innovation and adaptation, delivering expert project solutions, and providing proactive operational support that aligns with evolving technology."
          },
        ]
      });


    
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