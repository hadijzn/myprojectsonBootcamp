const ImageGallery = ({ pics }) => (
    <div className="image-gallery">
      {pics.map((pic) => (
        <div key={pic.id} className="image-item">
          <img src={pic.image} alt={pic.name} className="image" width={45} height={45}/>
          {/* <p>{pic.name}</p> */}
        </div>
      ))}
    </div>
  );
  
  export default ImageGallery;