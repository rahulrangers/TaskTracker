import "./About.css"
import { useContext } from "react"
import notecontext from '../../contexts/notes/notecontext'
const About=()=>{
 const a = useContext(notecontext)

 return(
    <div className="Home">
    <div className="note">TODO-APP</div>  
    <div className="para"> TODO-APP helps you to make your tasks organized and track your work on daily basis . So you can complete your
      tasks on time.This app can increase your productivity and make you a successful person. Please dowblaod this app do yourself a favor
    </div>
    </div>

 )
}
export default About