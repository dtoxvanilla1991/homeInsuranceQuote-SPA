

const ContactUs = () => {
  return <div>

<section class="contact-address-area">
    <div class="container">
        <div class="sec-title-style1 text-center max-width">
            <div class="title">Contact Us</div>
            <div class="text"><div class="decor-left"><span></span></div><p>Quick Contact</p><div class="decor-right"><span></span></div></div>
            <div class="bottom-text">
                <p>REST Home Insurance is proud to be the name that nearly 1 million single mom or dad homeowners have trusted since 1996 for home prosperity, safety and repair, providing virtually any home insurance service possible.</p>
            </div>
        </div>
                <div class="contact-address-box row">
                    {/* <!--Start Single Contact Address Box--> */}
                    <div class="col-sm-4 single-contact-address-box text-center">
                        <div class="icon-holder">
                            <span class="icon-clock-1">
                                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span><span class="path18"></span><span class="path19"></span><span class="path20"></span>
                            </span>
                        </div>
                        <h3>Rest assured</h3>
                        <h2>Be confident in your future.</h2>
                    </div>
                    {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
                    <div class="col-sm-4 single-contact-address-box main-branch">
                        <h3>OUR DETAILS:</h3>
                        <div class="inner">
                            <ul>
                                <li>
                                    <div class="title">
                                        <h4>Address:</h4>
                                    </div>
                                    <div class="text">
                                        <p>05 Beacons Close, 40C<br/> London, UK E96TT</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">
                                        <h4>Ph & Fax:</h4>
                                    </div>
                                    <div class="text">
                                        <p>+123 456 789 <br/> test@info.com</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="title">
                                        <h4>Office Hrs:</h4>
                                    </div>
                                    <div class="text">
                                        <p>Mon-Fri: 9:30am - 6:30pm<br/> Sat-Sun: Closed</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
                    <div class="col-sm-4 single-contact-address-box text-center">
                        <div class="icon-holder">
                            <span class="icon-question-2">
                                <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
                            </span>
                        </div>
                        <h3>Be insured</h3>
                        <h2>We will always do what is best for you.</h2>
                    </div>
                    {/* <!--End Single Contact Address Box--> */}
        </div>
    </div>
</section>  
{/* <!--End Contact Address Area-->  
 
<!--Start contact form area--> */}
<section class="contact-info-area">
    <div class="container">
        <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="contact-form">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="sec-title-style1 float-left">
                                <div class="title">Send Your Message</div>
                                <div class="text"><div class="decor-left"><span></span></div><p>Contact Form</p></div>
                            </div>
                            <div class="text-box float-right">
                                <p>Would you be so kind to relay your message to us and our agents will do their best to get back to you within 48 hours. </p>
                            </div>
                        </div> 
                    </div>   
                    <div class="inner-box">
                        <form id="contact-form" name="contact_form" class="default-form" action="inc/sendmail.php" method="post">
                            <div class="row">
                                <div class="col-xl-6 col-lg-12">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div class="input-box">   
                                                <input type="text" name="form_name" value="" placeholder="Name" required=""/>
                                            </div> 
                                             <div class="input-box"> 
                                                <input type="text" name="form_phone" value="" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div class="input-box"> 
                                                <input type="email" name="form_email" value="" placeholder="Email" required=""/>
                                            </div>
                                            <div class="input-box"> 
                                                <input type="text" name="form_website" value="" placeholder="Website"/>
                                            </div> 
                                        </div>  
                                    </div> 
                                    <div class="row">
                                         <div class="col-xl-12">
                                            <div class="input-box"> 
                                                <input type="text" name="form_subject" value="" placeholder="Subject"/>
                                            </div>     
                                        </div> 
                                    </div>   
                                </div>
                                <div class="col-xl-6 col-lg-12">
                                    <div class="input-box">    
                                        <textarea name="form_message" placeholder="Your Message..." required=""></textarea>
                                    </div>
                                    <div class="button-box">
                                        <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value=""/>
                                        <button type="submit" data-loading-text="Please wait...">Send Message<span class="flaticon-next"></span></button>    
                                    </div>         
                                </div> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

  </div>;
};

export default ContactUs;
