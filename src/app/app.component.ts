import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Award, 
  Cloud, 
  Code2, 
  Database, 
  Terminal,
  Calendar,
  GraduationCap,
  ChevronRight,
  Briefcase
} from 'lucide-angular';
import { NavbarComponent } from "./common-components/navbar/navbar.component";
import { FooterComponent } from "./common-components/footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { CareerSummaryComponent } from "./career-summary/career-summary.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, NavbarComponent, FooterComponent, HeaderComponent, CareerSummaryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly Award = Award;
  readonly Cloud = Cloud;
  readonly Code2 = Code2;
  readonly Terminal = Terminal;
  readonly GraduationCap = GraduationCap;
  readonly ChevronRight = ChevronRight;
  readonly Briefcase = Briefcase;
  
  totalExperience: string = '0';

  readonly overallSummary = "Data Engineer with 5+ years of experience in AWS, Spark ETL, Snowflake, Databricks, and API development, delivering scalable, cost-optimized enterprise solutions. Primary Skills- AWS , Python , Terraform, NodeJS";

  experiences = [
    {
      company: "Infosys",
      role: "Associate Consultant",
      period: "July 2024 - Present",
      startDate: "2024-07-04",
      description: [
        "Co-ordinated and implemented an architectural framework to process 5 GB of data per day, orchestrating data movement from AWS S3 to Snowflake and Databricks Unity Catalog using automated ETL Jobs.",
        "Built a Spark Based AWS Glue ETL Job, processing over 2000 files per day, converting CSV files from S3 Bucket to Delta format, and updating DynamoDB table with run metadata.",
        "Developed a scalable API to dynamically connect to multiple MongoDB and SQL Server databases using TTL-based eviction, improving performance by 40%."
      ],
      cloudServices: ["Glue", "S3", "Lambda", "SNS", "SQS", "Snowflake", "DynamoDB", "Event Bridge", "KMS", "CloudWatch"]
    },
    {
      company: "Tata Consultancy Services",
      role: "Systems Engineer",
      period: "July 2022 - May 2024",
      startDate: "2022-07-11",
      endDate: "2024-05-21",
      description: [
        "Collaborated with cross-functional teams to migrate applications to AWS using S3, Lambda, Glue, and Redshift.",
        "Optimized AWS Infrastructure, reducing compute costs for AWS Lambda Functions by almost 60%.",
        "Designed and implemented an automated scheduler for the Redshift cluster, resulting in a 40% cost reduction.",
        "Implemented Microservice based approach for independent deployment and scaling."
      ],
      cloudServices: ["IAM", "Glue", "S3", "Lambda", "SQS", "Redshift", "DynamoDB", "Event Bridge", "KMS", "CloudWatch", "Connect", "Lex"]
    },
    {
      company: "Nirmalya Labs Pvt. Ltd.",
      role: "Software Development Engineer-II (SDE-II)",
      period: "June 2020 - June 2022",
      startDate: "2020-06-20",
      endDate: "2022-06-13",
      description: [
        "Developed full-stack web applications processing data for over 50,000 concurrent users.",
        "Built custom enterprise-level data visualization tools with interactive graphical interfaces.",
        "Mentored team members on Kibo E-commerce platform and database security optimization."
      ]
    }
  ];

  projects = [
    {
      title: "Cloud-Native Data Processing & API Optimization",
      client: "Travelers Insurance, USA",
      description: "Designed and implemented a cloud-native data platform to automate large-scale ETL processing and optimize API performance.",
      responsibilities: [
        "Built a Spark-based ETL pipeline in AWS Glue to ingest and transform data from Amazon S3, enabling seamless integration with Snowflake, MongoDB, and Databricks.",
        "Developed a Python Flask API to orchestrate data ingestion from multiple external URLs, perform ETL transformations using pandas, and store processed data in MongoDB and S3.",
        "Engineered a Node.js-based API service to establish dynamic connections with multiple MongoDB and SQL Server databases, enabling unified and efficient data access.",
        "Authored Terraform scripts to provision and manage AWS infrastructure, ensuring consistent and automated deployment of application resources."  
      
      ]
    },
    {
      title: "Migration of Payments Data to AWS",
      client: "Bank of Montreal (BMO), Canada",
      description: "Migration of over 2 TB of payment data from on-premise servers to AWS Cloud using ETL workflows.",
      responsibilities: [
        "Developed cloud infrastructure with TypeScript and Terraform.",
        "Automated storage of configuration data in DynamoDB using Lambda.",
        "Engineered UDF leveraging Lambda to decrypt sensitive payment data within Redshift."
      ]
    },
    {
      title: "CLOUD MIGRATION OF CONTACT CENTRE TO AWS",
      client: "Panasonic Corporation of North America",
      description: "Designed and implemented a cloud-native data platform to automate large-scale ETL processing, optimize API performance, and enable secure, scalable data integration across enterprise systems.",
      responsibilities: [
        "Collaborated with a team of 4 members for migration of contact center operations to AWS, while ensuring minimal impact on crucial business functions",
        "Configured Contact flows, Queues, Routing Profiles, Users, Agents, and working hours in AWS Connect, and a guided chatbot using Amazon Lex, to enhance customer engagement",
        "Integrated the Amazon Lex chatbot with a DynamoDB table through a Lambda function to dynamically retrieve user details, personalizing the customer experience"
      ]
    },
    {
      title: "ONLINE APPLICATIONS FOR VARIOUS ELECTION NOMINATIONS",
      client: "State Election Commission, Govt. of Odisha",
      description: "Web Application For Nominations To Various Election Types Like Gram Panchayat, Panchayat Samiti, Mnc, Nac Member, etc. The Election Rules, Nomination Filing Rules, Election Dates Are Set By The Administrator",
      responsibilities: [
        "Developed a full stack web application, to digitize the process of filing of nomination of electoral candidates, ensuring efficiency and accuracy for election procedures",
        "Implemented online payment for nomination fees, and online and offline withdrawal processes of candidate’s application",
        "Created an interface for electoral officers to evaluate candidate eligibility",
        "Deployed application on Linux based cloud production environment"
      ]
    },
    {
      title: "E-COMMERCE PLATFORM FOR CLOTHING & APPAREL",
      client: "Utkarsha Kala",
      description: "Online Portal For Selling Of Clothing & Apparel",
      responsibilities: [
        "Developed and maintained ecommerce website, including product catalog, checkout process, and payment gateway integration",
        "Created and managed content for website, including product descriptions, blog posts, reviews by customers and other marketing materials",
        "Designed and implemented a portal facilitating administrators in managing product listings, generating promotional coupon codes, overseeing order processing and shipping status"
      ]
    }
  ];

  ngOnInit() {
    this.calculateTotalExperience();
  }

  calculateTotalExperience() {
    const calculateDiff = (start: string, end?: string) => {
      const startDate = new Date(start);
      const endDate = end ? new Date(end) : new Date();
      return endDate.getTime() - startDate.getTime();
    };

    const totalMs = this.experiences.reduce((acc, exp) => acc + calculateDiff(exp.startDate, exp.endDate), 0);
    const totalYears = totalMs / (1000 * 60 * 60 * 24 * 365.25);
    this.totalExperience = totalYears.toFixed(1);
  }
}
