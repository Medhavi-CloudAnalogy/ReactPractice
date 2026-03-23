
import './App.css'
import Card from './components/card'

const App = () => {

const jobs = [
  {
    brandlogo: "https://cdn.simpleicons.org/google",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/meta",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/apple",
    company: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Cupertino, USA"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/netflix",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Los Angeles, USA"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/tesla",
    company: "Tesla",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Austin, USA"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "San Jose, USA"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/nvidia",
    company: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/uber",
    company: "Uber",
    datePosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Mumbai, India"
  }
];



  return (
    <div className='parent'>
      {jobs.map((elem,idx)=>{
        return <div key={idx}>
          <Card
        brandlogo={elem.brandlogo}
        company={elem.company}
        datePosted={elem.datePosted}
        post={elem.post}
        tag1={elem.tag1}
        tag2={elem.tag2}
        pay={elem.pay}
        location={elem.location}
        />
        </div>
      })}
    </div>
  )
}

export default App
