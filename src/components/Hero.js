import React from "react";
import { makeStyles, Typography, withStyles } from "@material-ui/core";
import ScaleWork from "./ScaleWork";
import { LinkButton, PurpleLink } from "./Link";

const styles = (theme) => ({
  container: {
    height: "500px",
    backgroundImage: "/static/images/04 Retail Solutions/01-hero/retail-graphic.png",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right",
    backgroundSize: "auto 100%",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  sub1: {
    letterSpacing: 0.25,
    //fontSize: 31.1,
    fontFamily: theme.typography.fontFamily,
    marginTop: "2rem",
    maxWidth: 720,
    color: "rgba(0, 0, 0, 0.6)",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "15px",
    zIndex: 1,
    borderRadius: 2,
    /* boxShadow:"0px 0.3px 0.1px -2px rgb(0 0 0 / 20%),0px 0.2px 0.2px 0px rgb(0 0 0 / 14%), 0px 0.1px 0.5px 0px rgb(0 0 0 / 12%)",
   */},
  root: {
    height: "500px",
    width: "100%",
    position: "relative",
    //marginBottom: -50,
    textAlign: "left",
    "& img": {
      position: "absolute",
      right: "-5%",
      bottom: "-18%",
      height: "110%",
      align: "right",
      [theme.breakpoints.down("md")]: {
        align: "right",
      },
    },
    "& > div": {
      maxWidth: 565,
      padding: "11em 0",
      position: "absolute",
      zIndex: 1,
    },
  },
  rootRight: {
    textAlign: "left",
    "& img": {
      position: "absolute",
      right: "55%",
    },
    "& > div": {
      maxWidth: 565,
      right: 0,
    },
  },
  headline: {
    //background: "rgba(255, 255, 255, 0.9)",
    zIndex: 1,
    padding: "0.2em 0",
    display: "inline-block",
    borderRadius: 2,
    marginTop:"-150px",
    fontFamily:'"Work Sans", sans-serif',
    fontWeight:"bold"
  },
});

let HeroRaw = ({ classes, children, headline, imgSrc, variant, className }) => (
  <div
    className={`${classes.root} ${
      variant === "right" ? classes.rootRight : ""
    } ${className}`}
  >
    <img src={imgSrc} style={{width:"53%"}} />
    <div>
      <Typography className={classes.headline} variant={"h2"} color={"inherit"}>
        {headline}
      </Typography>
      <Typography className={classes.sub1}>{children}</Typography>
    </div>
  </div>
);

let HeadlineRaw2 = ({ classes, children, headline }) => (
  <div className={classes.container}>
    <Typography variant={"h2"} color={"inherit"}>
      {headline}
    </Typography>
    <Typography className={classes.sub1}>{children}</Typography>
  </div>
);

const Hero = withStyles(styles)(HeroRaw);

const additionStyles = makeStyles((theme) => ({
  rootLarge: {
    "& > div": {
      padding: "1em 0",
    },
  },
}));

export default Hero;

export function UsecaseHero({ classes }) {
  return (
    <Hero
      headline={"Retail Industry"}
      imgSrc="/static/images/04 Retail Solutions/01-hero/retail-graphic.png"
    >
      The Retail industry is a dynamic sector requiring a careful combination of
      creativity, business theory, skilled practice, and technology to create
      value for customers – key aspects being experiences, convenience, service,
      and quality.
    </Hero>
  );
}

export function LandingHero({ classes }) {
  return (
    <Hero
      headline={
        <React.Fragment>
          Drive performance and quickly deploy Machine Learning for your Business
        </React.Fragment>
      }
      imgSrc="/static/images/02 Company/01-hero/company-graphic.png"
    >
      Energy follows attention – our Performance templates leverage proven Data Science practices 
      to help you in adding value to your business.
      <br/>

       <a href={"/finder"}>
          <button
            className="MuiButtonBase-root MuiButton-root 
            MuiButton-contained MuiButton-containedPrimary"
            type="button"
            style={{ marginTop: "50px" }}
          >
              <span className="MuiButton-label" style={{textTransform:"capitalize"}}>Start now in 3 simple steps</span>
          </button>
       </a>

            
    </Hero>
  );
}


export function CompanyHero({ classes }) {
  return (
    <Hero
      headline={
        <React.Fragment>
          <b>We are</b> <ScaleWork />
        </React.Fragment>
      }
      imgSrc="/static/images/02 Company/01-hero/company-graphic.png"
    >
      {/* The global go-to-place to leverage Machine Learning Systems and Analytics
      for your operation – with the highest quality standards, highest project
      success rates and most cost-effective solutions. */}
      <p style={{color:"#DF265E",fontWeight:"500"}}>
      Our pre-configured performance templates leverage <br/>
      Machine Learning for solving domain specific industrial problems
      </p>
      <LinkButton href={"/finder"} variant={'contained'} color={"primary"} style={{marginTop:'40px'}}>
       Get started in 3 Simple Steps
    </LinkButton>
      
    </Hero>
  );
}

export function JoinUsHero({ classes }) {
  return (
    <Hero
      headline={"Join us"}
      imgSrc="/static/images/02 Company/03-join-us/Company-graphic-shadow.png"
      variant={"right"}
    >
      If you want to participate in our journey, please check out our{" "}
      <PurpleLink color="secondary" href={"/career"}>
        Career opportunities
      </PurpleLink>
      . If you didn’t find the right position, please reach out proactively. We
      are growing fast and have constantly emerging opportunities for ambitious
      talented people.
    </Hero>
  );
}
export function SolutionHero({ classes }) {
  return (
    <Hero
      headline={"Pre-configured performance templates tailored to your business"}
      imgSrc="/static/images/05 Solutions/02-hero/solution-graphic-data-analysis.png"
    >
      We designed pre-built Analytics & Machine Learning systems for
      organizations that want to advance their data-driven approach in the most
      cost-effective way possible.
      <br />
      <br />
      <b>
        <span style={{ color: "#DF265E" }}>
          <a href="/contact">Contact Us</a>{" "}
        </span>
      </b>{" "}
      today and learn how to get started!
    </Hero>
  );
}
export function SolutionFinderHero() {
  let classes = additionStyles();
  return (
      <Hero
            headline={"Solution Finder"}
            imgSrc="/static/images/05 Solutions/03-data-experts/data-experts.png"
            className={classes.rootLarge}
          >
              Data Science can be very abstract. And for most companies and
              decision-makers, it is naturally hard to anticipate where data science,
              analytics or AI can add value.
              <br />
              <br />
              Based on our experience from 100s of successful projects, we have
              assembled a simple Solution finder that helps you on your path to becoming
              a more data-driven effective organization. Our solution finder helps you
              identify areas where data science can help you improve your business
              organization.
            <br />
            <br />
            <LinkButton href={"/finder"}>Try our Solution finder.</LinkButton>
          </Hero>
  );
}
export function HowItWorksHero() {
  let classes = additionStyles();
  return (
    <Hero
      headline={"How it works"}
      imgSrc="/static/images/06 How it works/01-hero/how-it-works-graphic.png"
    >
      <ScaleWork /> is your trusted partner in building and maintaining data
      science solutions in the most efficient, secure and cost effective way.
    </Hero>
  );
}
export function DataSecurityHero() {
  let classes = additionStyles();
  return (
    <Hero
      headline={"Data Security"}
      imgSrc="/static/images/06 How it works/05-data-security/data-security-graphic.png"
      className={classes.rootLarge}
    >
      Data security is paramount to us and our clients. We appreciate the
      sensitivity of your data and ensure that it stays safe and that it
      complies with data security, data privacy, GDPR and HIPAA.
      <br />
      <br />
      Even prior to our technological security measures, we ensure that we can
      trust our data experts:
      <ul>
        <li>
          We apply through vetting and background checks of any data experts
          admitted to our platform.
        </li>
        <li>
          All experts must agree to our strict non-disclosure and
          confidentiality contracts.
        </li>
      </ul>
    </Hero>
  );
}
export function CareerOpportunitiesHero() {
  let classes = additionStyles();
  return (
    <Hero
      headline={"Career Opportunities"}
      imgSrc="/static/images/03 Careers/SCALEWORK-Career.png"
    >
      While we are building out this page, please reach out if you are
      interested in joining our journey. We looking for talented and ambitious
      people across all functions.
      <br />
      <br />
      Simply <PurpleLink href={"/company#contact"}>
        send us your CV
      </PurpleLink>{" "}
      with a short introduction stating how you think you will contribute best
      to the <ScaleWork /> story.
    </Hero>
  );
}
export function ImprintHero() {
  let classes = additionStyles();
  return (
    <Hero
      headline={"Imprint"}
      imgSrc="/static/images/03 Careers/SCALEWORK-Career.png"
      className={classes.rootLarge}
    >
      <Typography variant={"h5"} gutterBottom>
        Angaben gemäß § 5 TMG
      </Typography>
      Diensteanbieter dieses Onlineangebotes und gemäß § 7 TMG für den Inhalt
      dieser Site verantwortlich ist:
      <br />
      {/* Elevate Digital GmbH<br/>
          Laplacestr. 1, <br/>
          D-81679 München<br/> 
          */}
      SCLWK Analytics GmbH <br />
      Heilwigstr. 51b, <br />
      D-81827 München
      <br />
      E-Mail: info@scalework.com
      <br />
      <br />
      <Typography gutterBottom variant={"h5"}>
        Vertretung
      </Typography>
      Vertreten durch Geschäftsführer: Ulrich Busch Web: www.scalework.com Sitz
      der Gesellschaft: München Eingetragen beim Amtsgericht München: HRB 243093
    </Hero>
  );
}
export function ContactHero() {
  let classes = additionStyles();
  return (
    <Hero
      headline={"Contact us"}
      imgSrc="/static/images/03 Careers/SCALEWORK-Career.png"
    ></Hero>
  );
}
