const VideoList = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children || <p>No hay vídeos</p>}
  </div>
);

export default VideoList;