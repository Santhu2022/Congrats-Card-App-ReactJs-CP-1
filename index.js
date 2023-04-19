const element = (
    <div className="congrats-card-bg">
        <h1 className="greet-text">Congratulations</h1>
        <div className="content-container">
            <img className = "profile-img" src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"/>
            <h1 className="profile-name">Kiran V</h1>
            <p className="profile-details">Vishnu Institute of Computer Education and Technology, Bhimavaram</p>
            <img className = "watch-img" src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"/>
        </div>
    </div>
  )
  
ReactDOM.render(element, document.getElementById('root'))