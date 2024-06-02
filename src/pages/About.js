import React from 'react';

function About() {
  window.scrollTo(0, 0);

  return (

<div className="container">

          <div className="content">

          <br/>
<h1 style={{textAlign:'center'}}><u>About</u></h1>
<br/> 
        <center> <img className="About-image" src={require("../images/girish1.jpg")} alt="cannot display"/></center>
        <br/>      

        <h5  style={{textAlign:'center'}}>MS | PMI - CAPM®️ | CSM®️ | Google PMP®️ | Microsoft Azure ®️ </h5>
<br/>      
<hr /> <br/>      

<p>I’m Girish Kumar Lanka, your go-to  Project Manager, Front-End Developer, and Software Tester. You could say I wear many hats—though they’re all digital, of course.😜
<br/><br/>
When I’m not wrangling code or herding cats (a.k.a. managing projects), you’ll find me exploring new places, meeting new people, and sampling exotic foods. My passport has more stamps than a post office!😄
<br/><br/>

But there’s more to me than just tech and travel. I’m also a spiritual seeker on a quest for enlightenment. When I’m not debugging code, I’m debugging my soul—meditating, reading, and contemplating the mysteries of the universe.
<br/><br/>

And because I believe in giving back, I’m passionate about social service. Whether it’s volunteering at local community centers or participating in global outreach programs, I’m committed to making a positive impact and helping others.
<br/><br/>

So, whether it’s a complex project, a tricky piece of code, the meaning of life, or lending a helping hand, I’m always up for a challenge.</p>
<br/>
<hr /> <br/>  
<p><b>Nationality:</b>&nbsp;&nbsp;Indian</p>
<p><b>Email:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Girish.Lanka@Gmail.com</p>
<p><b>Study:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;University of Illinois</p>
<p><b>Degree:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Master</p>
<p><b>Interest:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Photography</p>
<br/><hr /> <br/>  
{/*<p><b>Technology:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTML, CSS, Java, React</p>
<p><b>Skill:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project Management, Stakeholder Management, PMO</p>
<p><b>OS:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Windows, and Linux</p>
<p><b>Tools:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MS Office, Jira, HP ALM, Azure ADO, Tableau</p>
<p><b>DBMS:</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MySQL, Oracle, SQL</p>
  <p><b>Framework:</b>&nbsp;&nbsp;&nbsp;&nbsp;Selenium, Agile</p>*/}
<p><b>Currently:</b>&nbsp;&nbsp;&nbsp;&nbsp;IT Project Manager in a Fortune 500 Company</p>
<br/><hr /> <br/>  
<p><b>Philanthropy:</b>&nbsp;&nbsp;&nbsp;&nbsp;Blessed to be a volunteer in Sri Sathya Sai Seva Organizations</p>
<br/><hr /> <br/>  
<center><button className='black-button'>Download CV</button></center>

 </div>
 </div>
  );
}

export default About;