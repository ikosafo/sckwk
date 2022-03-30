import hubspotSubmit from 'hubspot-form-submit'

export async function newsletterSignup(email){
  const submitted = await hubspotSubmit('6022047', '46c1b829-8d72-4fcc-aaba-bec8682d633a', {
    email: email,
  })
}

export async function onboardingSignup(user, flowData){
  let {firstName: firstname, lastName: lastname, position: job_function, company, phone, email,newsletterOptIn: newsletter_opt_in,comment: message} = user
  let {goal : flow_goal, industry: flow_industry, usecase: flow_usecase, involvement: flow_involvement} = flowData
  const submitted = await hubspotSubmit('6022047', '09328024-618d-4de2-bd55-7e12537947f8', {
    firstname, lastname, job_function, company, phone, email, newsletter_opt_in,
    flow_goal, flow_industry, flow_usecase, flow_involvement,
    message
  })
}


export async function contactUs(user){
  let {firstName: firstname, lastName: lastname, position: job_function, company, phone, email,newsletterOptIn: newsletter_opt_in,comment: message} = user
  const submitted = await hubspotSubmit('6022047', '77089e42-a306-4c80-8167-c2ad90b8f2ca', {
    firstname, lastname, job_function, company, phone, email, newsletter_opt_in,
    message
  })
}