import React, { useState } from 'react'
import { Button, ButtonGroup, Grid, Typography, withStyles } from '@material-ui/core'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import ScaleWork from '../../components/ScaleWork'
import { SectionHeadline } from '../../components/Components'

const styles = theme => ({
  root: {
    marginTop: "2.5rem"
  },
  locationNarrative:{
    padding: "1em"
  },
  alignRight:{
    textAlign:"left"
  },
  left:{
  },
  right:{
    minHeight: 200,
    textAlign: "center",
    "& > div": {
      height:"100%",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    },
    "& > div > *":{
      textAlign:"left",
      maxWidth:420,
      padding: "1em"
    },
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  buttonGroup:{
    marginBottom: "2em"
  }
});

const locations = {
  munich: { lat:  48.137773, lng: 11.571937 },
  oxford: { lat: 51.753378, lng: -1.265736 }
}

const Location = ({classes}) => {
  const [location, setLocation] = useState("munich");

  return(
      <Grid container spacing={0} alignContent={"center"} justify={"center"} alignItems={"stretch"}className={classes.root}>
        <Grid xs={12} item>
          <SectionHeadline>Locations</SectionHeadline>
        </Grid>
        <Grid item sm={1} xs={false}/>
        <Grid item sm={10} xs={12} className={classes.locationNarrative}>
          <Typography gutterBottom>
            Our idea was initially born at Oxford University where we still enjoy the strong technology and data science
            research eco-system.
          </Typography>
          <Typography gutterBottom>
            Our second office is located in the heart of Munich, Germany.
            Simply email us or call us to make an appointment at one of our offices.
          </Typography>
        </Grid>
        <Grid item sm={1} xs={false}/>
        <Grid xs={12} item>
          <ButtonGroup
            color="primary"
            variant={"contained"}
            className={classes.buttonGroup}
          >
            <Button onClick={e => setLocation("munich")} style={{background:"#48509C"}}>Munich</Button>
            <Button onClick={e => setLocation("oxford")} style={{background:"#48509C"}}>Oxford</Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.left}>
          <Map
            isMarkerShown
           googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyA7iv0EM0bdPQmuMlsrMTNKbRvHVQF-BnE&v=3.exp&libraries=geometry,drawing,places'
           
            /* googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBTh8ot1wDk3oSzcp-sk8wmsvS7z_D24uw&v=3.exp&libraries=geometry,drawing,places' */
            loadingElement={<div style={{ height: `100%` }}/>}
            containerElement={<div style={{ height: `400px` }}/>}
            mapElement={<div style={{ height: `100%` }}/>}
            lat={locations[location].lat}
            lng={locations[location].lng}
          >
            {Object.values(locations).map((l,i) => <Marker key={i} position={l} />)}
          </Map>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.right} style={{background:"#48509C"}}>
          <div>
            {location === "munich" ?
              <Typography>
                <ScaleWork/> @ <br/>
                Wayra Telefonica Kaufingerstr. 15 <br/>
                80331 Munich, Germany
              </Typography> :
              <Typography>
                <ScaleWork/> @ <br/>
                3-5 Hythe Bridge Street,  <br/>
                Oxford OX1 2EW
              </Typography>
            }
          </div>
        </Grid>
      </Grid>
  )
}

export default withStyles(styles)(Location);


const Map = withScriptjs(withGoogleMap(({children, lat, lng}) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat, lng }}
    center={{ lat, lng }}
    defaultOptions={{disableDefaultUI: true}}
  >
    {children}
  </GoogleMap>
))