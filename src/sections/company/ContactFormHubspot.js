import React from 'react'
import HubspotForm from 'react-hubspot-form'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core'
import TextFieldRaw from '@material-ui/core/TextField'

let TextField = withStyles({
  root: {
    marginBottom: 20
  },
})(TextFieldRaw);

class ContactFormHubspot extends React.Component {
  state = {
    data:{},
    thankYou: false,
    thankYouData: {}
  }
  render(){

    let { data, thankYou, thankYouData } = this.state
    return (
        <Container>
          <ThankYouDialog open={thankYou} data={thankYouData} onClose={e => this.setState({thankYou:false})}/>
          <HubspotForm
            portalId='6022047'
            formId='77089e42-a306-4c80-8167-c2ad90b8f2ca'
            //onSubmit={() => this.setState({ thankYou: true, data:{}, thankYouData: this.state.data })}
            loading={<div>Loading...</div>}

          />
        </Container>
    )
  }
}

const Container = ({children}) => <Grid container spacing={4}>
  <Grid container spacing={0} style={{textAlign:"left"}} alignContent={"center"} justify={"center"}>
    <Card style={{maxWidth:600, width:"100%"}}>
      <CardHeader title={"Get in touch with us"}/>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  </Grid>
</Grid>

const ThankYouDialog = ({open,onClose,data}) =>
  <Dialog open={open}>
    <DialogContent>
      <Typography variant="h6" gutterBottom>
        Thank You {data.name}
      </Typography>
      <Typography gutterBottom>
        We will get in touch with you.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>OK</Button>
    </DialogActions>
  </Dialog>

export default ContactFormHubspot