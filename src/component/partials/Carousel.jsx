import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Carousel = () => {
  
  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner overflow-">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="First slide"  />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Third slide" />
    </div>
  </div>
</div>
    </>
  )
}

export default Carousel