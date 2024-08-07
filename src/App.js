import './App.css'
let listItem = ['Biryani', 'Curd', 'Veg', 'Non Veg']
const country = ['India', 'America', 'London', 'Australia']
function ProfileCard(props){
  return(
    <>
    <span className="status">Online</span>
    <img className="image" src="https://static.toiimg.com/thumb/msid-101080863,width-960,height-1280,resizemode-6.cms" alt="profile"></img>
    <div className='personalData'>
    <h3> FullName : {props.name}</h3>
    <h3>City : {props.city}</h3>
    <p>Designation : {props.designation}</p>
    </div>
    <div className="buttons">
    <button>Message</button>
    <button>Following</button>
    </div>
    <h4>Skills</h4>
    <ul>
    {listItem.map((item, index) => (<li key = {index}>{item}</li>))}
    </ul>
    <select className='country'>{country.map((option)=>(<option key={option} value={option}>{option}</option>))}</select>

    </>
  )
}
export default ProfileCard;