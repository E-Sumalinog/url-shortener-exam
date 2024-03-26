function FeaturedContent () {
    return(
        <div className="featured-section">
            <h1>This Is a URL Shortener Exam</h1>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</p>
            <div style={{marginTop: "15px"}}>
                <h3>Plans Include:</h3>
                <p style={{whiteSpace:"pre-line"}}> 
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to 
                    demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                    Lorem ipsum may be used as a placeholder before the final copy is available.
                </p>
            </div>
            <div className="btn-plan-container"style={{marginTop:"1rem"}}>
                <button className="know-more-btn">View Plans</button>
                <button className="know-more-btn" style={{marginLeft:'5px'}}>Create Account</button>
            </div>
        </div>
    );
}

export default FeaturedContent;