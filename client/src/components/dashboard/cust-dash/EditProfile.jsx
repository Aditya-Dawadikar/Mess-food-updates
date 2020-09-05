import React from 'react'

const EditProfile = () => {
    return (
      <div className="container" style={{width:"65%",marginTop:"50px"}}>
        <form className="container">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Name" required/>
            </div>
            <div class="form-group">
                <label for="Email">Email address</label>
                <input type="email" class="form-control" id="Email"  placeholder="Enter email" required/>
            </div>
            <div class="form-group">
                <label for="Password">Password</label>
                <input type="password" class="form-control" id="Password" placeholder="Password" required/>
            </div>
            <div class="form-group">
                <label for="phoneno">Phone No</label>
                <input type="tel" class="form-control" id="phoneno"  placeholder="Enter Phone no" required/>
            </div>
            <button type="submit" class="btn bg-warning text-light">Save</button>
        </form>
      </div>
    )
}

export default EditProfile
