import { useState } from "react"; // Hook para manejar estados

export default function ProfileCard({
  name,
  description,
  followers,
  projects,
  image,
  verified
}) {

  // Estado para seguir o no
  const [isFollowing, setIsFollowing] = useState(false);

  // Estado para likes
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // Cambia estado follow
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  // Cambia estado like
  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="card"> {/* Contenedor principal */}

      <div className="image-container">
        <img src={image} alt={name} className="card-image" />

        {/* Botón like */}
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          ❤️ {likes}
        </button>
      </div>

      <div className="card-content">

        {/* Nombre + verificado */}
        <div className="name-row">
          <h2>{name}</h2>
          {verified && <span className="verified">✔</span>}
        </div>

        <p className="description">{description}</p>

        {/* Estadísticas */}
        <div className="stats">
          <span>👤 {followers}</span>
          <span>📁 {projects}</span>
        </div>

        {/* Botón de segudires  */}
        <button
          className={`follow-btn ${isFollowing ? "following" : ""}`}
          onClick={handleFollow}
        >
          {isFollowing ? "Following" : "Follow +"}
        </button>

      </div>
    </div>
  );
}