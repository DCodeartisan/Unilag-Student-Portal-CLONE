
function Login(){

    return(
        <div className="parent">

            {/* This div will be hidden on mobile */}
            <div className="boxA" 
                style={{borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "512px",
                    height: "489.6px",
                    backgroundImage: "linear-gradient(to top, #eaf0f3, #f5f9fb)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <img style={{width: "245px", height: "255px",}} src="./src/assets/Unilag_logo.png" alt="Unilag_logo" />
            </div>

            <div className="boxB"
                style={{backgroundColor: "#fff", 
                borderTopRightRadius: "5px", 
                borderBottomRightRadius: "5px",
                }}>
                <form action="#" method="post"> 
                    <h3 style={{alignItems: "center"}}>LOG IN</h3>

                <label for="Matric/Application number"><b>Matric/Application number</b></label>
                <input className="input" type="text" id="Matric/Application number" placeholder="Matric/Application number" /> <p></p>

                <label for="password"><b>Password</b></label> <br />
                <input className="input" type="password" id="password" placeholder="******************" /><br />

                
                <p><a href="http://studentportal.unilag.edu.ng/forgot-password">Forgot Password?</a></p>

                <button className="submit" type="submit">SIGN IN</button> 
                <p> <strong>Note: This is a clone page!</strong></p>

            </form>

            </div>
        </div>
    )
}

export default Login