import BoxTheme from "../box-theme/box-theme";
import Autocomplete from "@mui/material/Autocomplete";
import {
  InputAdornment,
  OutlinedInput,
  Popper,
  TextField,
} from "@mui/material";
import DropDownArrow from "@/assets/icons/landing-page/drop-doen-arrow";
import { useState } from "react";
import {makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  marquee: {
    animation: '$marquee 10s linear infinite',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  '@keyframes marquee': {
    '0%': { transform: 'translateX(0%)' },
    '100%': { transform: 'translateX(-100%)' },
  },
}));


export default function HeroAutocompleteButton({ className }) {
  const [inputValue, setInputValue] = useState('');
  const [focus,setFocus]= useState(false)
  const [options, setOptions] = useState([]);
  const classes = useStyles();
  
  const [open, setOpen] = useState(false);

  const handleInputChange = (event, newInputValue) => {
      setInputValue(newInputValue);
  
      if (newInputValue.length >= 3) {
          // Fetch suggestions from API or set options 
          setOptions(object);
          if(focus){
            setOpen(true)
          }
          
      } else {
          setOptions([]);
          setOpen(false)
      }
  };
  const object = [
    'AI Prompt Engineer',
    'GPT Model Developer',
    'QlikView Specialist',
    'Qlik Sense Specialist',
    'Looker Specialist',
    'Sisense Specialist',
    'Data Visualization Specialist',
    'UI Developer',
    'UX Developer',
    'UI/UX Designer',
    'UI/UX Specialist',
    'UX Researcher',
    'Interaction Designer',
    'Information Architect',
    'User Experience Strategist',
    'Web Accessibility Specialist',
    'Mobile App Designer',
    'Mobile App UX Specialist',
    'Mobile App UI Designer',
    'Graphic Designer',
    'Visual Designer',
    'Multimedia Designer',
    'Motion Graphics Designer',
    'Video Editor',
    'Video Production Specialist',
    'Video Marketing Specialist',
    'Audio Production Specialist',
    'Audio Engineer',
    'Podcast Producer',
    'Podcast Editor',
    'Podcast Marketing Specialist',
    'VR Developer',
    'AR Developer',
    'Mixed Reality Developer',
    'Unity Developer',
    'Unity Specialist',
    'Unreal Engine Developer',
    'Unreal Engine Specialist',
    'Web3 Developer',
    'Web3 Specialist',
    'Metaverse Developer',
    'Metaverse Specialist',
    'Blockchain Game Developer',
    'Blockchain Game Specialist',
    'Google Ads Specialist',
    'Bing Ads Specialist',
    'Social Media Marketing Specialist',
    'Facebook Ads Specialist',
    'Instagram Ads Specialist',
    'Twitter Ads Specialist',
    'LinkedIn Ads Specialist',
    'Snapchat Ads Specialist',
    'Pinterest Ads Specialist',
    'TikTok Ads Specialist',
    'Reddit Ads Specialist',
    'YouTube Marketing Specialist',
    'Content Marketing Specialist',
    'Email Marketing Specialist',
    'Marketing Automation Specialist',
    'HubSpot Specialist',
    'Marketo Specialist',
    'Pardot Specialist',
    'Eloqua Specialist',
    'Mailchimp Specialist',
    'Sendinblue Specialist',
    'Klaviyo Specialist',
    'ActiveCampaign Specialist',
    'Salesforce CRM Specialist',
    'Microsoft Dynamics CRM Specialist',
    'Zoho CRM Specialist',
    'SugarCRM Specialist',
    'Pipedrive Specialist',
    'CRM Integration Specialist',
    'Customer Data Platform (CDP) Specialist',
    'Adobe Experience Platform Specialist',
    'Segment Specialist',
    'Tealium Specialist',
    'Data Management Platform (DMP) Specialist',
    'Adobe Audience Manager Specialist',
    'Lotame Specialist',
    'BlueKai Specialist',
    'Data Studio Specialist',
    'Tableau Specialist',
    'Power BI Specialist',
    'Quantum Cryptography Engineer',
    'Edge Computing Specialist',
    'Edge Computing Engineer',
    'Edge Computing Architect',
    'Fog Computing Specialist',
    'Fog Computing Engineer',
    'Fog Computing Architect',
    'IT Project Manager',
    'IT Project Coordinator',
    'Agile Coach',
    'Scrum Master',
    'Scrum Product Owner',
    'Agile Project Manager',
    'Agile Tester',
    'Agile Developer',
    'Software QA Engineer',
    'Software QA Manager',
    'Test Automation Engineer',
    'Selenium Developer',
    'JUnit Developer',
    'TestNG Developer',
    'Load Testing Engineer',
    'JMeter Developer',
    'Performance Testing Engineer',
    'Penetration Testing Engineer',
    'Mobile App Testing Engineer',
    'Accessibility Testing Engineer',
    'Usability Testing Engineer',
    'Localization Engineer',
    'Localization Project Manager',
    'Localization Tester',
    'Technical Writer',
    'Technical Documentation Specialist',
    'API Documentation Specialist',
    'API Technical Writer',
    'Instructional Designer',
    'eLearning Developer',
    'LMS Developer',
    'IT Asset Management Specialist',
    'IT Procurement Manager',
    'IT Vendor Management Manager',
    'SaaS Management Specialist',
    'Cloud Management Specialist',
    'IT Governance Specialist',
    'IT Compliance Specialist',
    'IT Risk Management Specialist',
    'IT Service Management (ITSM) Specialist',
    'ITIL Specialist',
    'IT Change Management Specialist',
    'IT Release Management Specialist',
    'IT Configuration Management Specialist',
    'IT Incident Management Specialist',
    'IT Problem Management Specialist',
    'Digital Marketing Specialist',
    'Search Engine Optimization (SEO) Specialist',
    'Pay-Per-Click (PPC) Specialist',
    'Digital Transformation Specialist',
    'RPA Developer',
    'RPA Architect',
    'UiPath Developer',
    'Blue Prism Developer',
    'Automation Anywhere Developer',
    'Power Automate Developer',
    'Low-Code Developer',
    'OutSystems Developer',
    'Mendix Developer',
    'Appian Developer',
    'Service-Oriented Architecture (SOA) Developer',
    'SOA Architect',
    'Enterprise Service Bus (ESB) Developer',
    'ESB Architect',
    'MuleSoft Developer',
    'WSO2 Developer',
    'API Gateway Developer',
    'AWS API Gateway Developer',
    'Azure API Management Developer',
    'Google API Gateway Developer',
    'IoT Solutions Architect',
    'IoT Solutions Developer',
    'Smart City Solutions Developer',
    'Smart Grid Solutions Developer',
    'Wearable Technology Developer',
    'Digital Twin Developer',
    'CAD Specialist',
    '3D Modeling Engineer',
    '3D Printing Engineer',
    'CAM Specialist',
    'GIS Engineer',
    'Esri ArcGIS Developer',
    'QGIS Developer',
    'Remote Sensing Engineer',
    'Geospatial Engineer',
    'Geospatial Data Scientist',
    'LIDAR Engineer',
    'Photogrammetry Engineer',
    'CAE Specialist',
    'FEA Specialist',
    'CFD Specialist',
    'HPC Engineer',
    'HPC Architect',
    'Grid Computing Engineer',
    'Grid Computing Architect',
    'Cluster Computing Engineer',
    'Cluster Computing Architect',
    'GPU Programming Engineer',
    'CUDA Developer',
    'OpenCL Developer',
    'Blockchain Solutions Architect',
    'Blockchain Solutions Developer',
    'Smart Contracts Developer',
    'Ethereum Developer',
    'Hyperledger Developer',
    'Hyperledger Specialist',
    'Solidity Developer',
    'Cryptocurrency Developer',
    'NFT Developer',
    'Tokenomics Specialist',
    'DeFi Developer',
    'Quantum Computing Engineer',
    'Quantum Computing Researcher',
    'Quantum Algorithm Developer',
    'Quantum Information Scientist',
    'Quantum Software Developer',
    'Quantum Cryptography Specialist',
    'DevOps Engineer',
    'DevOps Architect',
    'DevOps Manager',
    'DevSecOps Engineer',
    'Containerization Engineer',
    'Kubernetes Administrator',
    'Kubernetes Engineer',
    'Docker Engineer',
    'CI/CD Engineer',
    'Build and Release Engineer',
    'Infrastructure as Code (IAC) Engineer',
    'Terraform Specialist',
    'Ansible Specialist',
    'Puppet Specialist',
    'Chef Specialist',
    'AWS Solutions Architect',
    'AWS DevOps Engineer',
    'AWS Developer',
    'Azure Solutions Architect',
    'Azure DevOps Engineer',
    'Azure Developer',
    'Google Cloud Platform (GCP) Architect',
    'GCP DevOps Engineer',
    'GCP Developer',
    'Python Developer',
    'Java Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'Angular Developer',
    'React Developer',
    'Vue.js Developer',
    'PHP Developer',
    'Ruby Developer',
    'Ruby on Rails Developer',
    'C# Developer',
    '.NET Developer',
    'ASP.NET Developer',
    'SQL Developer',
    'PL/SQL Developer',
    'T-SQL Developer',
    'Swift Developer',
    'Objective-C Developer',
    'Kotlin Developer',
    'Flutter Developer',
    'Xamarin Developer',
    'C++ Developer',
    'C Developer',
    'Golang Developer',
    'Rust Developer',
    'Scala Developer',
    'Groovy Developer',
    'R Developer',
    'MATLAB Developer',
    'SAS Developer',
    'Perl Developer',
    'Shell Scripting Specialist',
    'PowerShell Specialist',
    'Bash Specialist',
    'Regular Expression (Regex) Specialist',
    'API Developer',
    'API Integration Specialist',
    'REST API Developer',
    'SOAP API Developer',
    'GraphQL Developer',
    'Microservices Developer',
    'Microservices Architect',
    'Serverless Architect',
    'Serverless Developer',
    'AWS Lambda Specialist',
    'Azure Functions Specialist',
    'Google Cloud Functions Specialist',
    'Data Streaming Specialist',
    'Apache Kafka Developer',
    'Apache Flink Developer',
    'Apache Pulsar Developer',
    'Apache NiFi Developer',
    'Apache Beam Developer',
    'Elasticsearch Developer',
    'Elasticsearch Engineer',
    'Logstash Developer',
    'Kibana Developer',
    'ELK Stack Developer',
    'ETL Developer',
    'ETL Specialist',
    'Talend Developer',
    'Informatica Developer',
    'SSIS Developer',
    'DataStage Developer',
    'Apache Airflow Developer',
    'Databricks Developer',
    'Jupyter Developer',
    'Zeppelin Developer',
    'Data Lake Developer',
    'Data Lake Architect',
    'AWS Glue Developer',
    'Azure Data Factory Developer',
    'Google Data Fusion Developer',
    'Data Pipeline Developer',
    'Data Pipeline Architect',
    'DataOps Engineer',
    'DataOps Architect',
    'MLOps Engineer',
    'Web Content Editor',
    'Webmaster',
    'Application Support Engineer',
    'Business Intelligence (BI) Developer',
    'Data Integration Specialist',
    'Data Migration Specialist',
    'Data Modeler',
    'Data Steward',
    'Data Architect',
    'Enterprise Architect',
    'Solution Architect',
    'Technical Architect',
    'Integration Architect',
    'Security Architect',
    'Storage Engineer',
    'Storage Administrator',
    'Virtualization Engineer',
    'Virtualization Administrator',
    'IT Asset Manager',
    'IT Procurement Specialist',
    'IT Service Manager',
    'Release Manager',
    'Configuration Manager',
    'Incident Manager',
    'Problem Manager',
    'ITIL Practitioner',
    'ServiceNow Administrator',
    'ServiceNow Developer',
    'CRM Administrator',
    'CRM Developer',
    'ERP Administrator',
    'ERP Developer',
    'Salesforce Administrator',
    'Salesforce Developer',
    'System Integration Engineer',
    'Hardware Engineer',
    'Hardware Developer',
    'Hardware Technician',
    'Firmware Developer',
    'Firmware Tester',
    'ASIC Design Engineer',
    'FPGA Design Engineer',
    'VLSI Design Engineer',
    'ASIC Verification Engineer',
    'Computer Vision Scientist',
    'Computer Vision Researcher',
    'Computational Linguist',
    'IT Security Administrator',
    'IT Security Specialist',
    'IT Risk Manager',
    'Disaster Recovery Specialist',
    'Digital Forensic Investigator',
    'Cryptographer',
    'Cryptanalyst',
    'Compliance Officer',
    'IT Policy Specialist',
    'User Researcher',
    'Accessibility Specialist',
    'Interaction Developer',
    'Interactive Media Designer',
    'Interactive Media Developer',
    'Webinar Producer',
    'Webinar Specialist',
    'Digital Asset Manager',
    'Digital Asset Specialist',
    'IT Support Engineer',
    'Desktop Support Technician',
    'Desktop Support Engineer',
    'Remote Support Specialist',
    'Remote Support Engineer',
    'Technical Support Specialist',
    'Technical Support Engineer',
    'Application Security Engineer',
    'Application Security Specialist',
    'Infrastructure Security Engineer',
    'Infrastructure Security Specialist',
    'Security Operations Center (SOC) Engineer',
    'Incident Response Engineer',
    'Vulnerability Assessment Engineer',
    'Threat Intelligence Engineer',
    'IT Security Trainer',
    'IT Security Awareness Specialist',
    'IT Security Auditor',
    'IT Security Certification Specialist',
    'IT Service Desk Engineer',
    'IT Service Desk Technician',
    'IT Operations Manager',
    'IT Operations Engineer',
    'NOC Technician',
    'NOC Engineer',
    'ITIL Service Manager',
    'ITIL Service Engineer',
    'ITIL Process Manager',
    'Software Developer / Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'Front-end Developer',
    'Back-end Developer',
    'Mobile Application Developer (Android, iOS)',
    'Game Developer',
    'Embedded Systems Engineer',
    'Firmware Engineer',
    'Database Administrator (DBA)',
    'Database Developer',
    'Data Scientist',
    'Big Data Engineer',
    'Data Engineer',
    'Machine Learning Engineer',
    'AI Engineer',
    'NLP Engineer',
    'Computer Vision Engineer',
    'Robotics Engineer',
    'Network Administrator',
    'Network Engineer',
    'Network Security Engineer',
    'Wireless Network Engineer',
    'VoIP Engineer',
    'Systems Administrator',
    'Site Reliability Engineer (SRE)',
    'IT Support Specialist',
    'IT Help Desk Technician',
    'IT Program Manager',
    'IT Manager',
    'IT Director',
    'Chief Information Officer (CIO)',
    'Chief Technology Officer (CTO)',
    'Cloud Architect',
    'Cloud Engineer',
    'Cloud Developer',
    'Cybersecurity Engineer',
    'Cybersecurity Architect',
    'Penetration Tester / Ethical Hacker',
    'Information Security Manager',
    'Information Security Officer',
    'UX Designer',
    'UI Designer',
    'Product Manager',
    'Product Owner',
    'Quality Assurance (QA) Engineer',
    'Performance Test Engineer',
    'IT Sales / Account Manager',
    'IT Recruiter',
    'IT Compliance Manager',
    'SEO Specialist',
    'SEM Specialist',
    'Content Writer',
    'Content Strategist',
    'Copywriter',
    'Social Media Manager',
    'Social Media Specialist',
    'PPC Specialist',
    'Online Reputation Manager',
    'Affiliate Marketing Manager',
    'Digital Marketing Manager',
    'Digital Marketing Director',
    'Web Analytics Specialist',
    'Conversion Rate Optimization (CRO) Specialist',
    'E-commerce Manager',
    'E-commerce Specialist',
    'Virtual Reality (VR) Developer',
    'Augmented Reality (AR) Developer',
    'Mixed Reality (MR) Developer',
    'Blockchain Developer',
    'Blockchain Architect',
    'IoT Engineer',
    'IoT Architect',
    'Data Warehouse Architect',
    'Data Warehouse Developer',
    'Hadoop Developer',
    'Hadoop Administrator',
    'Apache Spark Developer',
    'GIS Developer',
    'GIS Specialist',
    'Drones / UAV Developer',
    'Drones / UAV Operator',
    'Telecommunications Engineer',
    'Telecommunications Specialist',
    'E-learning Developer',
    'E-learning Specialist',
    'Multimedia Developer',
  ];

  const CustomPopper = function (props) {
    return (
      <Popper
        {...props}
        sx={{
          
          borderRadius: "4px",
          "& .MuiPaper-root":{

            "&:empty":{
              border:"none"
            },
            "&:not(:empty)":{
              border: "2px solid #462B34",
            }
          },
           
          margin: "11px 0 !important",
          "& .MuiAutocomplete-listbox": {
            fontSize: "14px",
            color: "#462B34",
            padding: "0",
            
            "& li": {
              padding: "9px 6px ",
              borderBottom: "1px solid #462B34",
              fontFamily: '__whyteMedium_2bf28c',
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            "& .MuiAutocomplete-option.Mui-focused": {
              backgroundColor: "#fef8f2",
            },
            "& .MuiAutocomplete-option[aria-selected='true']": {
              backgroundColor: "#FFF9F3",
              
            },
            "& .MuiAutocomplete-option[aria-selected='true'].Mui-focused": {
              backgroundColor: "#FFF9F3",
            },
          },
        }}
        placement="bottom"
      />
    );
  };

  return (
    <BoxTheme
      top="5px"
      left="4px"
      className={`h-fit ${className} w-fit cursor-pointer   `}
      boxStyle={
        "w-fit  h-[45px] md:h-[57px] border bg-white rounded-[8px] border-primary-brown"
      }
      bgBoxStyle={
        "w-full  h-[45px] md:h-[57px]  rounded-[8px]  bg-primary-brown "
      }
    >
      <Autocomplete
      inputValue={inputValue} 
      InputProps={{
        classes: {
          input: classes.marquee,
        },
      }}
      open={open}
      onFocus={()=>setFocus(!focus)}
      onBlur={()=>setFocus(!focus)}
      onInputChange={handleInputChange}     
      onClose={() => setOpen(false)} 
        freeSolo
        openOnFocus={false}
        className="text-base xl:text-lg w-fit"
        PopperComponent={CustomPopper}
        defaultValue="AI Prompt Engineer"
        selectOnFocus
        sx={{
          "& input": {
            width: "90%",
            fontSize: "inherit",
            fontWeight: "500",
            color: "#FFB65E",
            padding: "10px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: "500",
            fontFamily: "inherit",
          },
        }}
        options={options}
        renderInput={(params) => (
          <div ref={params.InputProps.ref} >
            <OutlinedInput
             InputProps={{
              classes: {
                input: classes.marquee,
              },
            }}
              className={` w-[230px] `}
              sx={{
                "&.MuiOutlinedInput-root": {
                  paddingRight: "10px !important",
                  paddingLeft: "10px !important",
                  fontFamily: "inherit",
                  fontSize:"inherit",
                  lineHeight:"2rem",
                  textOverflow: "ellipsis",

                },
                "& .MuiOutlinedInput-notchedOutline": { display: "none" },
                // "&.MuiInputBase-input": { width: "150px" },
              }}
              endAdornment={""}
              
              type="text"
              inputProps={{ ...params.inputProps }}
            />
          </div>
        )}
      />
    </BoxTheme>
  );
}
