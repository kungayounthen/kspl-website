import Carousel from "./partials/Carousel";

const Body = () => {
  const containerStyle = {
    width: "auto",
    height: "100%",
    background: "linear-gradient(to left, #40414f, #ecded5)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
  };

  const rectangleStyle = {
    width: "55%",
    height: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: "50%", // Adjust this value to position the rectangle as needed
    left: "23%", // Adjust this value to position the rectangle as needed
    transform: "translate(-50%, -50%) rotate(25deg)",
    display: "flex", // Add display flex to enable the content centering
    alignItems: "center", // Center the content vertically within the rectangle
    justifyContent: "center", // Center the content horizontally within the rectangl
    overflow:"hidden",
    
  };

  const carouselContainerStyle = {
    width: "150%", // Adjust this value as needed for the carousel size
    height: "150%", // Adjust this value as needed for the carousel size
    transform: "rotate(-25deg)", // Counteract the rotation of the rectangle
  };

  const textStyle = {
    position: "absolute",
    right: "7%",
    top: "30%",
  };
  const imageStyle={
    width:'100%',
    height:'100%',
    ojectFit:'cover',
}
  return (
    <div style={containerStyle}>
      <div style={rectangleStyle}>
        <div style={carouselContainerStyle}>
          <Carousel style={imageStyle}/>
        </div>
      </div>
      <div style={textStyle}>
        <h1 className="text-light">The Next Generation SAAS.</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Body;
