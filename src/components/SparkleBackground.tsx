const SparkleBackground = () => {
    const starCount = 150;
    const stars = Array.from({ length: starCount }, (_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 3;
  
      return (
        <div
          key={i}
          className="star"
          style={{
            top: `${top}vh`,
            left: `${left}vw`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  
    return <div className="sparkle-container">{stars}</div>;
  };
  
  export default SparkleBackground;
  