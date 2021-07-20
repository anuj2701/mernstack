import React,{ useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";


function About() {
    const history = useHistory();
    const [userData, setUserData] = useState({});


    const callAboutPage = async () => {
        try{
            const res = await fetch("/about",{
                method: "GET",
                headers: {
                    Accept : "application/json",
                    "Content-Type": "application/json",
                },
                credentials:'include',
            });
            const data = await res.json();
            console.log(data);
            setUserData(data);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error
            }else{
                window.alert("Succesful login ");
                console.log("Succesful login");
            }

        }catch(err){
            console.log(err);
            history.push('/login')
        }
    }
    useEffect(() => {
        callAboutPage();
        
    }, [])
    return (
        <>
         

<head>

    
    <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

     
    <title>Unfold - Personal Portfolio & CV Template</title>


</head>

<body>

    <form method="GET">
    <section id="about" class="about-area pt-125 pb-130">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="section-title text-center">
                        <h2 class="title">About Me</h2>
                        <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                    </div> 
                </div>
            </div> 
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-content mt-50">
                        <h5 class="about-title" >{userData.work}</h5>
                        
                        <ul class="clearfix">
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-calendar"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>Name:</span>{userData.name}</p>
                                    </div>
                                </div> 
                            </li>
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-envelope"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>Email:</span> {userData.email}</p>
                                    </div>
                                </div> 
                            </li>
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-phone-handset"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>Phone:</span>{userData.phone}</p>
                                    </div>
                                </div> 
                            </li>
                            <li>
                                <div class="single-info d-flex align-items-center">
                                    <div class="info-icon">
                                        <i class="lni-map-marker"></i>
                                    </div>
                                    <div class="info-text">
                                        <p><span>Work</span>{userData.work}</p>
                                    </div>
                                </div> 
                            </li>
                        </ul>
                    </div> 
                </div>
                
                        
                  
                </div>
            </div> 
         
    </section>
    </form>



   


    <a href="#" class="back-to-top"><i class="lni-chevron-up"></i></a>








    <script src="assets/js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>

    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/popper.min.js"></script>

    <script src="assets/js/jquery.magnific-popup.min.js"></script>

    <script src="assets/js/parallax.min.js"></script>

    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>


    <script src="assets/js/jquery.appear.min.js"></script>

    <script src="assets/js/scrolling-nav.js"></script>
    <script src="assets/js/jquery.easing.min.js"></script>


    <script src="assets/js/main.js"></script>

</body>


    
        </>
    )
}

export default About
