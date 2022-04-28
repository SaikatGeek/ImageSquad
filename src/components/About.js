import React from 'react'

const About = () => {
  return (
      <div className="col-10 col-md-10 m-auto my-5">
        <div className="card text-center">
            <div className="card-header card-title">
                About
            </div>
            <div className="card-body">
                <h5 className="card-title">Project Section</h5>
                <p className="card-text"><i>ImgeSquad</i> is an image editing tool that should be able to modify the selected types of images. In the Backend section here I developed a routing system and it follows a popular MVC file structure. In the frontend section, I used the SPA framework. Let's see below the technical lookup.</p>
                <dl class="row">
                    <dt class="col-4 "> <div className="float-end">Frontend</div></dt>
                    <dd class="col-8"> <div className="float-start">React, Bootstrap, Material UI</div></dd>

                    <dt class="col-4 "> <div className="float-end">Backend</div></dt>
                    <dd class="col-8"> <div className="float-start">PHP v7.4.19</div></dd>

                    <dt class="col-4 "> <div className="float-end">Extension</div></dt>
                    <dd class="col-8"> <div className="float-start">PHP Imagick</div></dd>

                    <dt class="col-4 "> <div className="float-end">Features</div></dt>
                    <dd class="col-8"> 
                        <div className="float-start">Resize, Blur, Sharpen, Wave, Contrast, Annotate</div>
                    </dd>

                    <dt class="col-4 "> <div className="float-end">Modified Image Download</div></dt>
                    <dd class="col-8"> <div className="float-start">Yes</div></dd>
                </dl>
            </div>
            <div className="card-footer text-muted">
                
            </div>
        </div>
      </div>
    
  )
}

export default About