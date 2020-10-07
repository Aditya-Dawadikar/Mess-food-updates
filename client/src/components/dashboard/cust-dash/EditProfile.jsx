import React,{useEffect,useState} from 'react';
import axios from 'axios';

const EditProfile = () => {
    const id=localStorage.getItem("userId");

    const [details,setDetails] = useState({
        name:"",
        email:"",
        phone:""
    });
    
    useEffect(() => {
        axios
          .get(`http://localhost:9000/api/customer/${id}`)
          .then((res) => {
              console.log(res.data);
              setDetails({
                name:res.data.Customer.name,
                email:res.data.Customer.email,
                phone:res.data.Customer.phone
              });
          })
          .catch((err) => {
              console.log(err);
          })
    },[id]);
    
    const { name, email, phone } = details;
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };
    
    const handleSubmit = e => {
        console.log(details);
        e.preventDefault();
        axios
           .patch(`http://localhost:9000/api/customer/update/${id}`,{
                email: email,
                name: name,
                phone: phone
           })
           .then((res) => {
               console.log(res);
               alert("Profile Updated Successfully");
           })
           .catch((err) => {
               console.log(err);
           })
    };

    return (
      <div className="container" style={{width:"65%",marginTop:"50px"}}>
        <form className="container">

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" id="name" placeholder="Name" value={name} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="Email">Email address</label>
                <input type="email" name="email" className="form-control" id="Email"  placeholder="email" value={email} onChange={handleChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input type="password" name="password" className="form-control" id="Password" placeholder="********" required/>
            </div>

            <div className="form-group">
                <label htmlFor="phoneno">Phone No</label>
                <input type="tel" name="phone" className="form-control" id="phoneno"  placeholder="Phone no" value={phone} onChange={handleChange} required/>
            </div>

            <button type="submit" onClick={handleSubmit} className="btn bg-warning text-light">Save</button>
            <button type="submit"  className="btn bg-danger text-light">Delete Account</button>
        </form>
      </div>
    )
}

export default EditProfile
